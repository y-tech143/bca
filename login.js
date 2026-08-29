/* =========================================================================
   LOGIN PAGE LOGIC
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

let loginMethod = "email";

document.addEventListener("DOMContentLoaded", () => {
    if (typeof FIREBASE_IS_CONFIGURED === "undefined" || !FIREBASE_IS_CONFIGURED) {
        document.getElementById("firebaseWarning").style.display = "flex";
        document.getElementById("loginArea").style.display = "none";
        return;
    }

    // Explicit LOCAL persistence — the student stays logged in across browser
    // restarts until they hit Logout, on this device.
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
        auth.onAuthStateChanged(user => {
            if (user) window.location.href = "profile.html"; // already logged in
        });
    });

    setupMethodToggle();
    setupLoginForm();
    setupForgotPassword();
});

function setupMethodToggle() {
    const emailBtn = document.getElementById("methodEmailBtn");
    const idBtn = document.getElementById("methodIdBtn");
    const emailWrap = document.getElementById("emailFieldWrap");
    const idWrap = document.getElementById("idFieldWrap");

    emailBtn.addEventListener("click", () => {
        loginMethod = "email";
        emailBtn.classList.add("active"); idBtn.classList.remove("active");
        emailWrap.style.display = ""; idWrap.style.display = "none";
    });
    idBtn.addEventListener("click", () => {
        loginMethod = "id";
        idBtn.classList.add("active"); emailBtn.classList.remove("active");
        idWrap.style.display = ""; emailWrap.style.display = "none";
    });
}

function setupLoginForm() {
    document.getElementById("loginForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const errEl = document.getElementById("loginError");
        errEl.style.display = "none";
        document.getElementById("loginSuccess").style.display = "none";

        const password = document.getElementById("loginPassword").value;
        const btn = document.getElementById("loginSubmitBtn");
        btn.disabled = true;
        btn.innerHTML = "<span><i class='fa-solid fa-spinner fa-spin'></i> Logging in...</span>";

        try {
            if (loginMethod === "email") {
                const email = document.getElementById("loginEmail").value.trim();
                await loginWithEmail(email, password);
            } else {
                const id = document.getElementById("loginStudentId").value.trim();
                await loginWithStudentId(id, password);
            }
            window.location.href = "profile.html";
        } catch (err) {
            errEl.textContent = friendlyStudentAuthError(err);
            errEl.style.display = "block";
            btn.disabled = false;
            btn.innerHTML = "<span><i class='fa-solid fa-right-to-bracket'></i> Log In</span>";
        }
    });
}

function setupForgotPassword() {
    const link = document.getElementById("forgotPasswordLink");
    const loginArea = document.getElementById("loginArea");
    const forgotArea = document.getElementById("forgotArea");
    const backBtn = document.getElementById("backToLoginBtn");

    link.addEventListener("click", (e) => {
        e.preventDefault();
        loginArea.style.display = "none";
        forgotArea.style.display = "block";
    });
    backBtn.addEventListener("click", () => {
        forgotArea.style.display = "none";
        loginArea.style.display = "block";
    });

    document.getElementById("forgotForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const errEl = document.getElementById("forgotError");
        const okEl = document.getElementById("forgotSuccess");
        errEl.style.display = "none"; okEl.style.display = "none";

        const identifier = document.getElementById("forgotIdentifier").value.trim();
        const btn = document.getElementById("forgotSubmitBtn");
        btn.disabled = true;
        btn.innerHTML = "<span><i class='fa-solid fa-spinner fa-spin'></i> Sending...</span>";

        try {
            await sendPasswordReset(identifier);
            okEl.textContent = "Reset link sent! Check your registered email inbox (and spam folder).";
            okEl.style.display = "block";
        } catch (err) {
            errEl.textContent = friendlyStudentAuthError(err);
            errEl.style.display = "block";
        } finally {
            btn.disabled = false;
            btn.innerHTML = "<span><i class='fa-solid fa-paper-plane'></i> Send Reset Link</span>";
        }
    });
}
