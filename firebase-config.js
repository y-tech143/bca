/* =========================================================================
   🔥 FIREBASE CONFIGURATION
   ─────────────────────────────────────────────────────────────────────────
   This is the ONLY file you need to edit to connect the site to your own
   free Firebase project. Full step-by-step instructions are in
   SETUP_GUIDE.md — the short version:

   1. Go to https://console.firebase.google.com → "Add project" (free tier
      is enough for this).
   2. Build > Firestore Database > Create database (start in production mode).
   3. Build > Authentication > Sign-in method > enable "Email/Password".
   4. Authentication > Users tab > "Add user" — this becomes your admin
      login (use your own email + a strong password).
   5. Project settings (⚙️ icon, top left) > General tab > scroll to
      "Your apps" > click the </> (web) icon > register an app (any
      nickname) > it will show you a `firebaseConfig` object — copy just
      the values into the object below.
   6. Firestore Database > Rules tab > paste in the rules from
      SETUP_GUIDE.md, then click "Publish".

   That's it — once this file has your real values, index.html and
   admin.html both start working with your live database automatically.
   ========================================================================= */

const firebaseConfig = {
    apiKey: "AIzaSyAb8yOFtvNWwmXEY74f8dGnatZplmFfWCo",
    authDomain: "bca-hub-7e5ec.firebaseapp.com",
    projectId: "bca-hub-7e5ec",
    storageBucket: "bca-hub-7e5ec.firebasestorage.app",
    messagingSenderId: "404096974272",
    appId: "1:404096974272:web:3baa2bb76ca5492632dc25"
};

// Detects whether the placeholder values above have actually been replaced yet.
const FIREBASE_IS_CONFIGURED = !!(firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith("PASTE_"));

if (FIREBASE_IS_CONFIGURED) {
    firebase.initializeApp(firebaseConfig);
}

// `db` and `auth` are used everywhere else in script.js / admin.js.
// They're left undefined (rather than throwing) if Firebase isn't
// configured yet, so the site can show a helpful message instead of a
// blank white screen.
const db = FIREBASE_IS_CONFIGURED ? firebase.firestore() : null;
const auth = FIREBASE_IS_CONFIGURED ? firebase.auth() : null;