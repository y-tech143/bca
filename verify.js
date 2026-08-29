/* =========================================================================
   VERIFY PAGE LOGIC
   ========================================================================= */
const YEAR_LABELS_V = { 1: "1st Year", 2: "2nd Year", 3: "3rd Year" };

document.addEventListener("DOMContentLoaded", async () => {
    const content = document.getElementById("verifyContent");

    if (typeof FIREBASE_IS_CONFIGURED === "undefined" || !FIREBASE_IS_CONFIGURED) {
        content.innerHTML = `<div class="auth-warning"><i class="fa-solid fa-triangle-exclamation"></i> Firebase isn't configured yet on this deployment.</div>`;
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) {
        content.innerHTML = `
            <span class="verify-badge invalid"><i class="fa-solid fa-circle-xmark"></i> No ID provided</span>
            <p style="color: var(--text-dim); font-size: 0.85rem;">This page is meant to be opened by scanning a BCA Hub student ID card's QR code.</p>
        `;
        return;
    }

    try {
        const profile = await getPublicProfile(id);
        if (!profile) {
            content.innerHTML = `
                <span class="verify-badge invalid"><i class="fa-solid fa-circle-xmark"></i> Not a valid BCA Hub ID</span>
                <p style="color: var(--text-dim); font-size: 0.85rem;">No student record matches <strong>${escapeHtmlV(id)}</strong>.</p>
            `;
            return;
        }

        content.innerHTML = `
            <span class="verify-badge"><i class="fa-solid fa-circle-check"></i> Verified BCA Hub Student</span>
            <div class="profile-avatar" style="margin: 0 auto 1.2rem;">${profile.photoURL ? `<img src="${profile.photoURL}" alt="Student photo">` : defaultAvatarSvg("male")}</div>
            <h2 style="font-family: var(--font-display); margin-bottom: 0.2rem;">${escapeHtmlV(profile.name)}</h2>
            <p class="profile-uid" style="display:block; margin-bottom: 1.4rem;">${escapeHtmlV(profile.uniqueId)}</p>
            <div class="profile-grid" style="grid-template-columns: 1fr 1fr; text-align: left;">
                <div class="profile-field glass"><div class="profile-field-label">College</div><div class="profile-field-value">${escapeHtmlV(profile.college)}</div></div>
                <div class="profile-field glass"><div class="profile-field-label">Semester</div><div class="profile-field-value">Semester ${profile.semester}</div></div>
                <div class="profile-field glass"><div class="profile-field-label">Year</div><div class="profile-field-value">${YEAR_LABELS_V[profile.year] || profile.year}</div></div>
                <div class="profile-field glass"><div class="profile-field-label">City</div><div class="profile-field-value">${escapeHtmlV(profile.city)}</div></div>
            </div>
        `;
    } catch (err) {
        content.innerHTML = `<div class="auth-error">Couldn't verify this ID right now — please try again shortly.</div>`;
    }
});

function escapeHtmlV(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
