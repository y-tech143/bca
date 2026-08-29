/* =========================================================================
   PROFILE PAGE LOGIC
   ========================================================================= */
function showToast(message, icon) {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid ${icon || 'fa-circle-check'}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2600);
}

const YEAR_LABELS = { 1: "1st Year", 2: "2nd Year", 3: "3rd Year" };
let currentProfile = null;
let currentUid = null;

document.addEventListener("DOMContentLoaded", () => {
    if (typeof FIREBASE_IS_CONFIGURED === "undefined" || !FIREBASE_IS_CONFIGURED) {
        document.getElementById("loadingScreen").innerHTML = `
            <div class="auth-card glass" style="max-width:420px;">
                <div class="auth-warning" style="margin-bottom:0;">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Firebase isn't configured yet. Open <code>firebase-config.js</code> and follow SETUP_GUIDE.md first.
                </div>
            </div>`;
        return;
    }

    auth.onAuthStateChanged(async (user) => {
        if (!user) { window.location.href = "login.html"; return; }
        currentUid = user.uid;
        currentProfile = await getStudentProfile(user.uid);
        if (!currentProfile) { showToast("Profile not found.", "fa-triangle-exclamation"); return; }

        renderProfile();
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("profileShell").style.display = "block";
    });

    setupLogout();
    setupEditModal();
    setupPasswordModal();
    setupIdCard();
});

function avatarHtml(photoURL, gender) {
    return photoURL ? `<img src="${photoURL}" alt="Profile photo">` : defaultAvatarSvg(gender || "male");
}

function renderProfile() {
    const p = currentProfile;
    document.getElementById("profileAvatar").innerHTML = avatarHtml(p.photoURL, p.gender);
    document.getElementById("profileName").textContent = p.name;
    document.getElementById("profileUid").textContent = p.uniqueId;

    document.getElementById("fieldEmail").textContent = p.email;
    document.getElementById("fieldCollege").textContent = p.college;
    document.getElementById("fieldSemester").textContent = "Semester " + p.semester;
    document.getElementById("fieldYear").textContent = YEAR_LABELS[p.year] || p.year;
    document.getElementById("fieldCity").textContent = p.city;
    document.getElementById("fieldGender").textContent = p.gender.charAt(0).toUpperCase() + p.gender.slice(1);
    document.getElementById("fieldCreated").textContent = p.createdAt && p.createdAt.toDate ? p.createdAt.toDate().toLocaleDateString() : "—";
    document.getElementById("fieldUid").textContent = p.uniqueId;

    const historyEl = document.getElementById("historyList");
    const history = (p.semesterHistory || []).slice().reverse();
    historyEl.innerHTML = history.map(h => `
        <div class="history-item">
            <i class="fa-solid fa-circle-check"></i>
            Semester ${h.semester}, ${YEAR_LABELS[h.year] || h.year} — <span style="color:var(--text-faint);">${new Date(h.changedAt).toLocaleDateString()}</span>
        </div>
    `).join('') || '<p class="admin-list-empty">No history yet.</p>';
}

function setupLogout() {
    document.getElementById("logoutBtn").addEventListener("click", async () => {
        await logoutStudent();
        window.location.href = "index.html";
    });
}

/* ---------- Edit Profile ---------- */
function setupEditModal() {
    const modal = document.getElementById("editModal");
    document.getElementById("editProfileBtn").addEventListener("click", () => {
        const p = currentProfile;
        document.getElementById("editName").value = p.name;
        document.getElementById("editSemester").value = p.semester;
        document.getElementById("editYear").value = p.year;
        document.getElementById("editCity").value = p.city;
        document.getElementById("editCollege").value = p.college;
        document.getElementById("editGender").value = p.gender;
        document.getElementById("editPhotoPreview").innerHTML = avatarHtml(p.photoURL, p.gender);
        document.getElementById("editPhoto").value = "";
        document.getElementById("editError").style.display = "none";
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
    });

    document.getElementById("editPhoto").addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => { document.getElementById("editPhotoPreview").innerHTML = `<img src="${ev.target.result}" alt="Preview">`; };
        reader.readAsDataURL(file);
    });

    document.getElementById("editModalClose").addEventListener("click", () => closeModal(modal));
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(modal); });

    document.getElementById("editForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const errEl = document.getElementById("editError");
        errEl.style.display = "none";

        const name = document.getElementById("editName").value.trim();
        const city = document.getElementById("editCity").value.trim();
        const college = document.getElementById("editCollege").value.trim();
        if (!isValidHumanField(name) || !isValidHumanField(city) || !isValidCollegeField(college)) {
            errEl.textContent = "Please check the name, city, and college fields.";
            errEl.style.display = "block";
            return;
        }

        const btn = document.getElementById("editSubmitBtn");
        btn.disabled = true;
        btn.innerHTML = "<span><i class='fa-solid fa-spinner fa-spin'></i> Saving...</span>";

        try {
            const photoFile = document.getElementById("editPhoto").files[0] || null;
            currentProfile = await updateStudentProfile(currentUid, {
                name, city, college,
                semester: document.getElementById("editSemester").value,
                year: document.getElementById("editYear").value,
                gender: document.getElementById("editGender").value
            }, photoFile);
            renderProfile();
            showToast("Profile updated", "fa-circle-check");
            closeModal(modal);
        } catch (err) {
            errEl.textContent = err.message || "Couldn't save changes.";
            errEl.style.display = "block";
        } finally {
            btn.disabled = false;
            btn.innerHTML = "<span><i class='fa-solid fa-check'></i> Save Changes</span>";
        }
    });
}

/* ---------- Change Password ---------- */
function setupPasswordModal() {
    const modal = document.getElementById("passwordModal");
    document.getElementById("changePasswordBtn").addEventListener("click", () => {
        document.getElementById("passwordForm").reset();
        document.getElementById("passwordError").style.display = "none";
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
    });
    document.getElementById("passwordModalClose").addEventListener("click", () => closeModal(modal));
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(modal); });

    document.getElementById("passwordForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const errEl = document.getElementById("passwordError");
        errEl.style.display = "none";

        const current = document.getElementById("currentPassword").value;
        const next = document.getElementById("newPassword").value;
        const confirm = document.getElementById("confirmNewPassword").value;
        if (next !== confirm) { errEl.textContent = "New passwords don't match."; errEl.style.display = "block"; return; }

        const btn = document.getElementById("passwordSubmitBtn");
        btn.disabled = true;
        btn.innerHTML = "<span><i class='fa-solid fa-spinner fa-spin'></i> Updating...</span>";

        try {
            await changeStudentPassword(current, next);
            showToast("Password updated", "fa-key");
            closeModal(modal);
        } catch (err) {
            errEl.textContent = friendlyStudentAuthError(err);
            errEl.style.display = "block";
        } finally {
            btn.disabled = false;
            btn.innerHTML = "<span><i class='fa-solid fa-key'></i> Update Password</span>";
        }
    });
}

function closeModal(modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}

/* ---------- Digital ID Card ---------- */
function setupIdCard() {
    const overlay = document.getElementById("idCardOverlay");

    document.getElementById("viewIdCardBtn").addEventListener("click", () => {
        renderIdCard();
        overlay.classList.add("open");
    });
    document.getElementById("idCardClose").addEventListener("click", () => overlay.classList.remove("open"));
    overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.classList.remove("open"); });

    document.getElementById("printIdBtn").addEventListener("click", () => window.print());

    document.getElementById("downloadIdBtn").addEventListener("click", () => {
        html2canvas(document.getElementById("idCard"), { backgroundColor: null, scale: 2 }).then(canvas => {
            const link = document.createElement("a");
            link.download = `BCA-Hub-ID-${currentProfile.uniqueId}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    });
}

function renderIdCard() {
    const p = currentProfile;
    document.getElementById("idCardPhoto").innerHTML = avatarHtml(p.photoURL, p.gender);
    document.getElementById("idCardName").textContent = p.name;
    document.getElementById("idCardUid").textContent = p.uniqueId;
    document.getElementById("idCardCollege").textContent = p.college;
    document.getElementById("idCardSemester").textContent = p.semester;
    document.getElementById("idCardYear").textContent = YEAR_LABELS[p.year] || p.year;
    document.getElementById("idCardCity").textContent = p.city;

    const qrEl = document.getElementById("idCardQr");
    qrEl.innerHTML = "";
    const verifyUrl = `${window.location.origin}${window.location.pathname.replace("profile.html", "verify.html")}?id=${encodeURIComponent(p.uniqueId)}`;
    new QRCode(qrEl, { text: verifyUrl, width: 56, height: 56, correctLevel: QRCode.CorrectLevel.M });
}
