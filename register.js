/* =========================================================================
   REGISTER PAGE LOGIC
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

document.addEventListener("DOMContentLoaded", () => {
    if (typeof FIREBASE_IS_CONFIGURED === "undefined" || !FIREBASE_IS_CONFIGURED) {
        document.getElementById("firebaseWarning").style.display = "flex";
        document.getElementById("registerForm").style.display = "none";
        return;
    }

    setupPhotoPreview();
    setupRegisterForm();
});

function setupPhotoPreview() {
    const input = document.getElementById("regPhoto");
    const preview = document.getElementById("photoPreview");
    const genderSelect = document.getElementById("regGender");

    function renderDefault() {
        preview.innerHTML = defaultAvatarSvg(genderSelect.value || "male");
    }
    renderDefault();
    genderSelect.addEventListener("change", () => { if (!input.files[0]) renderDefault(); });

    input.addEventListener("change", () => {
        const file = input.files[0];
        if (!file) { renderDefault(); return; }
        if (!file.type.startsWith("image/")) { showToast("Please choose an image file.", "fa-triangle-exclamation"); input.value = ""; return; }
        if (file.size > 2 * 1024 * 1024) { showToast("Photo must be under 2MB.", "fa-triangle-exclamation"); input.value = ""; return; }
        const reader = new FileReader();
        reader.onload = (e) => { preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`; };
        reader.readAsDataURL(file);
    });
}

function setupRegisterForm() {
    document.getElementById("registerForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const errEl = document.getElementById("registerError");
        errEl.style.display = "none";

        const name = document.getElementById("regName").value.trim();
        const email = document.getElementById("regEmail").value.trim();
        const password = document.getElementById("regPassword").value;
        const confirmPassword = document.getElementById("regConfirmPassword").value;
        const semester = document.getElementById("regSemester").value;
        const year = document.getElementById("regYear").value;
        const city = document.getElementById("regCity").value.trim();
        const college = document.getElementById("regCollege").value.trim();
        const gender = document.getElementById("regGender").value;
        const photoFile = document.getElementById("regPhoto").files[0] || null;

        if (!isValidHumanField(name)) return showError(errEl, "Please enter a valid name (letters only).");
        if (!isValidHumanField(city)) return showError(errEl, "Please enter a valid city name (letters only).");
        if (!isValidCollegeField(college)) return showError(errEl, "Please enter a valid college name.");
        if (!gender) return showError(errEl, "Please select your gender.");
        if (password !== confirmPassword) return showError(errEl, "Passwords don't match.");
        if (password.length < 6) return showError(errEl, "Password should be at least 6 characters.");

        const btn = document.getElementById("registerSubmitBtn");
        btn.disabled = true;
        btn.innerHTML = "<span><i class='fa-solid fa-spinner fa-spin'></i> Creating your account...</span>";

        try {
            const { uniqueId } = await registerStudent({ name, email, password, semester, year, city, college, gender, photoFile });
            showToast(`Account created! Your Student ID is ${uniqueId}`, "fa-circle-check");
            setTimeout(() => { window.location.href = "profile.html"; }, 1200);
        } catch (err) {
            showError(errEl, friendlyStudentAuthError(err));
            btn.disabled = false;
            btn.innerHTML = "<span><i class='fa-solid fa-user-plus'></i> Create Account</span>";
        }
    });
}

function showError(el, message) {
    el.textContent = message;
    el.style.display = "block";
}
