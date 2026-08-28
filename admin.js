/* =========================================================================
   BCA HUB — ADMIN PANEL LOGIC
   Everything here talks directly to Firestore. There is no server — Firestore
   Security Rules (see SETUP_GUIDE.md) are what actually keep writes locked
   to logged-in admins; this UI just makes that easy to use.
   ========================================================================= */

const CATEGORY_LABELS = {
    notes: "Notes", previousYearPapers: "Previous Year Papers", pdfs: "Reference PDF",
    guessPapers: "Guess Paper", assignments: "Assignment", practicals: "Practical", videoLinks: "Video Lecture"
};

let SUBJECTS_CACHE = [];

document.addEventListener("DOMContentLoaded", () => {
    if (typeof FIREBASE_IS_CONFIGURED === "undefined" || !FIREBASE_IS_CONFIGURED) {
        document.getElementById("firebaseWarning").style.display = "flex";
        document.getElementById("loginForm").style.display = "none";
        return;
    }

    auth.onAuthStateChanged(user => {
        if (user) showDashboard(user);
        else showLogin();
    });

    setupLoginForm();
    setupLogout();
    setupTabs();
    setupNoticeForm();
    setupSubjectForm();
    setupResourceForm();
    setupLinkForm();
    setupResourceFilter();
});

function showLogin() {
    document.getElementById("loginScreen").style.display = "flex";
    document.getElementById("adminDashboard").style.display = "none";
}

function showDashboard(user) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("adminDashboard").style.display = "block";
    document.getElementById("loggedInAs").textContent = user.email;

    // Live lists only need to be wired up once, right after we know we're authenticated
    if (!window.__adminListsWired) {
        window.__adminListsWired = true;
        watchNotices();
        watchSubjects();
        watchResources();
        watchLinks();
    }
}

/* ---------- Auth ---------- */
function setupLoginForm() {
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;
        const errEl = document.getElementById("loginError");
        errEl.style.display = "none";

        auth.signInWithEmailAndPassword(email, password).catch(err => {
            errEl.textContent = friendlyAuthError(err);
            errEl.style.display = "block";
        });
    });
}
function friendlyAuthError(err) {
    if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
        return "Incorrect email or password.";
    }
    if (err.code === "auth/invalid-email") return "That doesn't look like a valid email address.";
    return err.message || "Couldn't log in — please try again.";
}
function setupLogout() {
    document.getElementById("logoutBtn").addEventListener("click", () => auth.signOut());
}

/* ---------- Tabs ---------- */
function setupTabs() {
    document.querySelectorAll(".admin-tab").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".admin-tab").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".admin-panel").forEach(p => p.classList.remove("active"));
            btn.classList.add("active");
            document.getElementById("panel-" + btn.dataset.tab).classList.add("active");
        });
    });
}

/* ---------- Toasts (self-contained copy so admin.js has no dependency on script.js) ---------- */
function showToast(message, icon) {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid ${icon || 'fa-circle-check'}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2600);
}

function confirmDelete(label) {
    return window.confirm(`Delete "${label}"? This can't be undone.`);
}

/* =========================================================================
   📢 NOTICES
   ========================================================================= */
function setupNoticeForm() {
    document.getElementById("noticeForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("noticeTitle").value.trim();
        const date = document.getElementById("noticeDate").value.trim();
        const tag = document.getElementById("noticeTag").value.trim();
        const important = document.getElementById("noticeImportant").checked;
        if (!title || !date || !tag) return;

        db.collection("notices").add({ title, date, tag, important, createdAt: firebase.firestore.FieldValue.serverTimestamp() })
            .then(() => { showToast("Notice published", "fa-bell"); e.target.reset(); })
            .catch(err => showToast("Couldn't publish: " + err.message, "fa-triangle-exclamation"));
    });
}
function watchNotices() {
    db.collection("notices").orderBy("createdAt", "desc").onSnapshot(snap => {
        const list = document.getElementById("noticesList");
        if (snap.empty) { list.innerHTML = '<p class="admin-list-empty">No notices yet — add your first one.</p>'; return; }
        list.innerHTML = snap.docs.map(doc => {
            const n = doc.data();
            return `
                <div class="admin-list-item">
                    <div class="admin-list-item-text">
                        <strong>${escapeHtml(n.title)}</strong>
                        <small>${escapeHtml(n.date)} &bull; ${escapeHtml(n.tag)}${n.important ? ' &bull; ⚠️ important' : ''}</small>
                    </div>
                    <button class="admin-delete-btn" onclick="deleteNotice('${doc.id}', '${escapeHtml(n.title).replace(/'/g, "\\'")}')"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
        }).join('');
    }, err => showToast("Sync error: " + err.message, "fa-triangle-exclamation"));
}
function deleteNotice(id, title) {
    if (!confirmDelete(title)) return;
    db.collection("notices").doc(id).delete().then(() => showToast("Notice deleted", "fa-trash"));
}

/* =========================================================================
   📚 SUBJECTS
   ========================================================================= */
function setupSubjectForm() {
    document.getElementById("subjectForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const semester = parseInt(document.getElementById("subjectSemester").value, 10);
        const name = document.getElementById("subjectName").value.trim();
        const icon = document.getElementById("subjectIcon").value.trim() || "fa-book";
        if (!name) return;

        db.collection("subjects").add({ semester, name, icon, order: Date.now() })
            .then(() => { showToast("Subject added", "fa-book"); e.target.reset(); })
            .catch(err => showToast("Couldn't add: " + err.message, "fa-triangle-exclamation"));
    });
}
function watchSubjects() {
    db.collection("subjects").onSnapshot(snap => {
        SUBJECTS_CACHE = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        renderSubjectsList();
        populateResourceSubjectDropdown();
    }, err => showToast("Sync error: " + err.message, "fa-triangle-exclamation"));
}
function renderSubjectsList() {
    const list = document.getElementById("subjectsList");
    if (!SUBJECTS_CACHE.length) { list.innerHTML = '<p class="admin-list-empty">No subjects yet — add your first one.</p>'; return; }
    const sorted = [...SUBJECTS_CACHE].sort((a, b) => a.semester - b.semester || (a.order || 0) - (b.order || 0));
    list.innerHTML = sorted.map(s => `
        <div class="admin-list-item">
            <div class="admin-list-item-text">
                <strong><i class="fa-solid ${s.icon || 'fa-book'}"></i> ${escapeHtml(s.name)}</strong>
                <small>Semester ${s.semester}</small>
            </div>
            <button class="admin-delete-btn" onclick="deleteSubject('${s.id}', '${escapeHtml(s.name).replace(/'/g, "\\'")}')"><i class="fa-solid fa-trash"></i></button>
        </div>
    `).join('');
}
function deleteSubject(id, name) {
    if (!confirmDelete(name)) return;
    showToast("Deleting subject and its resources...", "fa-hourglass-half");
    db.collection("resources").where("subjectId", "==", id).get().then(snap => {
        const batch = db.batch();
        snap.docs.forEach(d => batch.delete(d.ref));
        batch.delete(db.collection("subjects").doc(id));
        return batch.commit();
    }).then(() => showToast("Subject deleted", "fa-trash"))
      .catch(err => showToast("Couldn't delete: " + err.message, "fa-triangle-exclamation"));
}

/* =========================================================================
   📄 RESOURCES
   ========================================================================= */
function populateResourceSubjectDropdown() {
    const semSelect = document.getElementById("resourceSemester");
    const subSelect = document.getElementById("resourceSubject");
    const semester = parseInt(semSelect.value, 10);

    const subjectsForSem = SUBJECTS_CACHE.filter(s => s.semester === semester).sort((a, b) => (a.order || 0) - (b.order || 0));
    const options = [`<option value="SYLLABUS_${semester}">📄 Syllabus (whole semester)</option>`]
        .concat(subjectsForSem.map(s => `<option value="${s.id}">${escapeHtml(s.name)}</option>`));
    subSelect.innerHTML = options.join('');
}
document.addEventListener("DOMContentLoaded", () => {
    const semSelect = document.getElementById("resourceSemester");
    if (semSelect) semSelect.addEventListener("change", populateResourceSubjectDropdown);
});

function setupResourceForm() {
    document.getElementById("resourceForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const subjectId = document.getElementById("resourceSubject").value;
        const category = document.getElementById("resourceCategory").value;
        const title = document.getElementById("resourceTitle").value.trim();
        const url = document.getElementById("resourceUrl").value.trim();
        if (!subjectId || !title || !url) return;

        db.collection("resources").add({ subjectId, category, title, url, createdAt: firebase.firestore.FieldValue.serverTimestamp() })
            .then(() => {
                showToast("Resource published — live on the site now", "fa-file-circle-check");
                document.getElementById("resourceTitle").value = "";
                document.getElementById("resourceUrl").value = "";
            })
            .catch(err => showToast("Couldn't publish: " + err.message, "fa-triangle-exclamation"));
    });
}

let RESOURCES_CACHE = [];
let resourceFilterTerm = "";

function watchResources() {
    db.collection("resources").orderBy("createdAt", "desc").onSnapshot(snap => {
        RESOURCES_CACHE = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        renderResourcesList();
    }, err => showToast("Sync error: " + err.message, "fa-triangle-exclamation"));
}
function subjectLabelFor(subjectId) {
    if (subjectId.startsWith("SYLLABUS_")) return `Semester ${subjectId.split("_")[1]} Syllabus`;
    const sub = SUBJECTS_CACHE.find(s => s.id === subjectId);
    return sub ? `Sem ${sub.semester} — ${sub.name}` : "Unknown subject";
}
function renderResourcesList() {
    const list = document.getElementById("resourcesList");
    const term = resourceFilterTerm.toLowerCase();
    const filtered = RESOURCES_CACHE.filter(r =>
        !term || r.title.toLowerCase().includes(term) || subjectLabelFor(r.subjectId).toLowerCase().includes(term)
    );
    if (!filtered.length) { list.innerHTML = '<p class="admin-list-empty">No resources match yet.</p>'; return; }
    list.innerHTML = filtered.map(r => `
        <div class="admin-list-item">
            <div class="admin-list-item-text">
                <strong>${escapeHtml(r.title)}</strong>
                <small>${escapeHtml(subjectLabelFor(r.subjectId))} &bull; ${CATEGORY_LABELS[r.category] || r.category}</small>
            </div>
            <button class="admin-delete-btn" onclick="deleteResource('${r.id}', '${escapeHtml(r.title).replace(/'/g, "\\'")}')"><i class="fa-solid fa-trash"></i></button>
        </div>
    `).join('');
}
function setupResourceFilter() {
    const input = document.getElementById("resourceFilter");
    if (!input) return;
    input.addEventListener("input", () => { resourceFilterTerm = input.value; renderResourcesList(); });
}
function deleteResource(id, title) {
    if (!confirmDelete(title)) return;
    db.collection("resources").doc(id).delete().then(() => showToast("Resource deleted", "fa-trash"));
}

/* =========================================================================
   🔗 IMPORTANT LINKS
   ========================================================================= */
function setupLinkForm() {
    document.getElementById("linkForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("linkTitle").value.trim();
        const url = document.getElementById("linkUrl").value.trim();
        if (!title || !url) return;

        db.collection("importantLinks").add({ title, url, createdAt: firebase.firestore.FieldValue.serverTimestamp() })
            .then(() => { showToast("Link added", "fa-link"); e.target.reset(); })
            .catch(err => showToast("Couldn't add: " + err.message, "fa-triangle-exclamation"));
    });
}
function watchLinks() {
    db.collection("importantLinks").orderBy("createdAt", "asc").onSnapshot(snap => {
        const list = document.getElementById("linksList");
        if (snap.empty) { list.innerHTML = '<p class="admin-list-empty">No links yet — add your first one.</p>'; return; }
        list.innerHTML = snap.docs.map(doc => {
            const l = doc.data();
            return `
                <div class="admin-list-item">
                    <div class="admin-list-item-text">
                        <strong>${escapeHtml(l.title)}</strong>
                        <small>${escapeHtml(l.url)}</small>
                    </div>
                    <button class="admin-delete-btn" onclick="deleteLink('${doc.id}', '${escapeHtml(l.title).replace(/'/g, "\\'")}')"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
        }).join('');
    }, err => showToast("Sync error: " + err.message, "fa-triangle-exclamation"));
}
function deleteLink(id, title) {
    if (!confirmDelete(title)) return;
    db.collection("importantLinks").doc(id).delete().then(() => showToast("Link deleted", "fa-trash"));
}

/* ---------- Helper ---------- */
function escapeHtml(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// Initialize the resource-subject dropdown once on load (semester 1 default)
document.addEventListener("DOMContentLoaded", () => {
    if (typeof FIREBASE_IS_CONFIGURED !== "undefined" && FIREBASE_IS_CONFIGURED) {
        setTimeout(populateResourceSubjectDropdown, 500);
    }
});