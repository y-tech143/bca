/* =========================================================================
   🎓 STUDENT AUTH SERVICE
   Shared by register.html, login.html, profile.html, and verify.html.
   Everything that talks to Firebase Auth / Firestore for student accounts
   lives here, so each page just calls these functions.

   Firestore collections used:
     students/{uid}          — full private profile (readable only by the
                                owner). Never contains the password.
     studentIdIndex/{uniqueId} — tiny public lookup: { uid, email }.
                                Lets "login with Student ID" resolve to an
                                email without exposing the rest of the
                                profile. Created once at registration,
                                never editable afterwards.
     publicProfiles/{uniqueId} — the safe-to-show subset of a profile
                                (name, college, semester, year, city,
                                photoURL, validUntil) used by the public
                                ID-card verification page (verify.html).
                                Kept in sync automatically whenever the
                                owner edits their profile.
     counters/{"YY-CIT"}      — internal counters used to hand out
                                collision-safe sequential numbers for
                                unique IDs, via a Firestore transaction.
   ========================================================================= */

const CURRENT_BATCH_YEAR = new Date().getFullYear().toString().slice(-2); // e.g. "26"

/* ---------- Validation ---------- */
// Letters, spaces, periods, hyphens, apostrophes only — for personal names and
// city names, which are never expected to contain digits or other punctuation.
const NAME_PATTERN = /^[A-Za-z][A-Za-z .'-]{1,59}$/;

// College names are far less predictable in real life (numbers, commas,
// ampersands — e.g. "Govt. PG College No. 5", "St. Xavier's College & Institute")
// so this stays permissive while still blocking stray junk like emoji or HTML.
const COLLEGE_PATTERN = /^[A-Za-z0-9][A-Za-z0-9 .,&'()/-]{1,99}$/;

function isValidHumanField(value) {
    return NAME_PATTERN.test((value || "").trim());
}
function isValidCollegeField(value) {
    return COLLEGE_PATTERN.test((value || "").trim());
}

/* ---------- Default avatar (reused styling from the Team section) ---------- */
// Same idea as the illustrated team-member avatars: an original silhouette,
// never a fake photo, shown whenever a student skips the optional photo upload.
function defaultAvatarSvg(gender) {
    const hair = gender === "female"
        ? `<path d="M14 34c0-14 8-24 18-24s18 10 18 24c-2-2-6-4-9-4-3 4-9 6-9 6s-6-2-9-6c-3 0-7 2-9 4z" fill="rgba(0,0,0,0.18)"/>`
        : `<path d="M16 30c1-12 8-20 16-20s15 8 16 20c-3-3-9-5-16-5s-13 2-16 5z" fill="rgba(0,0,0,0.18)"/>`;
    return `
        <svg viewBox="0 0 64 64" class="default-avatar-svg" aria-hidden="true">
            <circle cx="32" cy="24" r="13" fill="rgba(255,255,255,0.9)"/>
            <path d="M8 58c2-14 12-22 24-22s22 8 24 22" fill="rgba(255,255,255,0.9)"/>
            ${hair}
        </svg>
    `;
}

/* ---------- Collision-safe Unique Student ID ---------- */
// Format: BCA{YY}-{CIT}-{0001}  e.g. BCA26-JPR-0047
// The sequence number is scoped to (batch year + city code) and handed out
// via a Firestore transaction, so two simultaneous registrations from the
// same city can never receive the same number.
function cityCode(city) {
    const letters = (city || "").toUpperCase().replace(/[^A-Z]/g, "");
    return (letters + "XXX").slice(0, 3);
}

function generateUniqueStudentId(city) {
    const code = cityCode(city);
    const counterId = `${CURRENT_BATCH_YEAR}-${code}`;
    const counterRef = db.collection("counters").doc(counterId);

    return db.runTransaction(async (tx) => {
        const snap = await tx.get(counterRef);
        const next = snap.exists ? (snap.data().lastNumber || 0) + 1 : 1;
        tx.set(counterRef, { lastNumber: next }, { merge: true });
        return `BCA${CURRENT_BATCH_YEAR}-${code}-${String(next).padStart(4, "0")}`;
    });
}

/* ---------- Registration ---------- */
// Creates the Firebase Auth account, generates the unique ID, optionally
// uploads a photo to Storage, and writes the three Firestore documents
// (profile, ID index, public profile) needed for everything else to work.
async function registerStudent({ name, email, password, semester, year, city, college, gender, photoFile }) {
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    const uid = cred.user.uid;

    const uniqueId = await generateUniqueStudentId(city);

    let photoURL = "";
    if (photoFile) {
        try {
            photoURL = await uploadStudentPhoto(uid, photoFile);
        } catch (err) {
            console.warn("Photo upload failed, continuing with default avatar:", err);
        }
    }

    const now = firebase.firestore.FieldValue.serverTimestamp();
    const profile = {
        uid, uniqueId, name, email, semester: Number(semester), year: Number(year),
        city, college, gender, photoURL, createdAt: now,
        semesterHistory: [{ semester: Number(semester), year: Number(year), changedAt: new Date().toISOString() }]
    };

    await db.collection("students").doc(uid).set(profile);
    await db.collection("studentIdIndex").doc(uniqueId).set({ uid, email });
    await writePublicProfile(profile);

    return { uid, uniqueId };
}

function uploadStudentPhoto(uid, file) {
    if (!file.type.startsWith("image/")) return Promise.reject(new Error("Please choose an image file."));
    if (file.size > 2 * 1024 * 1024) return Promise.reject(new Error("Photo must be under 2MB."));
    const ref = firebase.storage().ref().child(`student-photos/${uid}`);
    return ref.put(file).then(() => ref.getDownloadURL());
}

// Keeps the public, QR-verifiable subset of a profile in sync. Deliberately
// excludes email — verify.html should never leak contact info.
function writePublicProfile(profile) {
    return db.collection("publicProfiles").doc(profile.uniqueId).set({
        uid: profile.uid, uniqueId: profile.uniqueId, name: profile.name,
        college: profile.college, semester: profile.semester, year: profile.year,
        city: profile.city, photoURL: profile.photoURL || "",
        validUntil: null // reserved for future use (e.g. course end date)
    });
}

/* ---------- Login ---------- */
function loginWithEmail(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

// Resolves a Student ID to its registered email via the public index, then
// signs in normally — Firebase Auth itself only ever sees an email.
async function loginWithStudentId(uniqueId, password) {
    const doc = await db.collection("studentIdIndex").doc(uniqueId.trim().toUpperCase()).get();
    if (!doc.exists) throw { code: "custom/id-not-found" };
    return auth.signInWithEmailAndPassword(doc.data().email, password);
}

function logoutStudent() {
    return auth.signOut();
}

// Same ID-or-email resolution, used by the "Forgot password" flow.
async function sendPasswordReset(identifier) {
    let email = identifier.trim();
    if (!email.includes("@")) {
        const doc = await db.collection("studentIdIndex").doc(email.toUpperCase()).get();
        if (!doc.exists) throw { code: "custom/id-not-found" };
        email = doc.data().email;
    }
    return auth.sendPasswordResetEmail(email);
}

/* ---------- Profile ---------- */
function getStudentProfile(uid) {
    return db.collection("students").doc(uid).get().then(doc => doc.exists ? doc.data() : null);
}

// Only name/city/college/gender/semester/year/photo are ever editable — email
// and uniqueId are permanent and never touched here.
async function updateStudentProfile(uid, updates, photoFile) {
    const current = await getStudentProfile(uid);
    if (!current) throw new Error("Profile not found.");

    if (photoFile) {
        updates.photoURL = await uploadStudentPhoto(uid, photoFile);
    }

    const semesterChanged = updates.semester !== undefined && Number(updates.semester) !== current.semester;
    const yearChanged = updates.year !== undefined && Number(updates.year) !== current.year;
    if (semesterChanged || yearChanged) {
        updates.semesterHistory = firebase.firestore.FieldValue.arrayUnion({
            semester: Number(updates.semester !== undefined ? updates.semester : current.semester),
            year: Number(updates.year !== undefined ? updates.year : current.year),
            changedAt: new Date().toISOString()
        });
    }
    if (updates.semester !== undefined) updates.semester = Number(updates.semester);
    if (updates.year !== undefined) updates.year = Number(updates.year);

    await db.collection("students").doc(uid).update(updates);
    const merged = { ...current, ...updates };
    await writePublicProfile(merged);
    return merged;
}

async function changeStudentPassword(currentPassword, newPassword) {
    const user = auth.currentUser;
    const cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
    await user.reauthenticateWithCredential(cred);
    return user.updatePassword(newPassword);
}

/* ---------- Public verification (verify.html) ---------- */
function getPublicProfile(uniqueId) {
    return db.collection("publicProfiles").doc(uniqueId.trim().toUpperCase()).get()
        .then(doc => doc.exists ? doc.data() : null);
}

/* ---------- Shared error messages ---------- */
function friendlyStudentAuthError(err) {
    switch (err.code) {
        case "auth/email-already-in-use": return "An account with this email already exists — try logging in instead.";
        case "auth/invalid-email": return "That doesn't look like a valid email address.";
        case "auth/weak-password": return "Password should be at least 6 characters.";
        case "auth/invalid-credential":
        case "auth/wrong-password":
        case "auth/user-not-found": return "Incorrect email/Student ID or password.";
        case "custom/id-not-found": return "We couldn't find that Student ID.";
        default: return err.message || "Something went wrong — please try again.";
    }
}
