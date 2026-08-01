/* =========================================================================
   📢 SECTION 1: LIVE NOTICE BOARD DATA
   ========================================================================= */
const ADMIN_NOTICES = [
    { title: "IMPORTANT QUESTION HINDI SEM 2ND ", date: "June 3, 2026", tag: "Live now", important: true },
    { title: "🔥 Sem 2nd Update: OS, DBMS & COA Notes & PYQs Are Now Live!", date: "May 27, 2026", tag: "UPDATE", important: true },
    { title: "Syllabus for 1st 2nd Semesters ", date: "May 27, 2026", tag: "LIVE NOW", important: true },
    { title: "BCA Sem 2nd Main Examination Forms 2026 Are Open - Last Date May 28", date: "May 26, 2026", tag: "Exam", important: true },
    { title: "BCA Sem 2nd Main Examination Forms 2026 Are Open - Last Date May 25", date: "May 20, 2026", tag: "Exam", important: true },
    { title: "Website Under Devlopment", date: "April 15, 2026", tag: "UPDATE", important: false }
];

/* =========================================================================
   📚 SECTION 2: BCA FULL SEMESTER & SUBJECTS DATABASE
   ========================================================================= */
const ACADEMIC_DATABASE = [
    {
        semesterName: "BCA Semester 1 <br> Work in progress",
        status: "under-development",
        semesterSyllabus: [{ title: "All Subject", url: "https://drive.google.com/file/d/1B1Qkak_kw08hrVx8qUEa42IFIAr4UYut/preview" }],
        subjects: [
            { name: "Computer Fundamentals & Office Automation", icon: "fa-desktop",
                notes: [
                    { title: "Unit 1: Input Output Devices & Memory Architecture", url: "notes/sem1/cfoa-u1.pdf" },
                    { title: "Unit 2: MS Office Tools (Word, Excel, PPT) Guide", url: "notes/sem1/ms-office.pdf" }
                ],
                previousYearPapers: [], pdfs: [{ title: "Computer Fundamentals Textbook PDF", url: "pdfs/sem1/cfoa-book.pdf" }],
                guessPapers: [], assignments: [{ title: "Assignment 1: Component Block Diagram", url: "pdfs/sem1/cfoa-assign.pdf" }],
                practicals: [{ title: "MS Excel & Word Lab Practical File", url: "pdfs/sem1/cfoa-lab.pdf" }],
                videoLinks: [{ title: "Computer Architecture Video Playlist", url: "https://youtube.com/sample-cfoa" }]
            },
            { name: "Programming Principles & C Language", icon: "fa-code",
                notes: [
                    { title: "Unit 1: Flowcharts, Algorithms & Intro to C", url: "notes/sem1/c-unit1.pdf" },
                    { title: "Unit 2: Functions, Arrays and Strings Concept", url: "notes/sem1/c-unit2.pdf" }
                ],
                previousYearPapers: [], pdfs: [{ title: "Let Us C - Yashavant Kanetkar Reference Book", url: "pdfs/sem1/let-us-c.pdf" }],
                guessPapers: [{ title: "C Language Most Important Guess Paper 2026", url: "pdfs/sem1/c-guess.pdf" }],
                assignments: [], practicals: [{ title: "Final C Programming Lab Solved File", url: "pdfs/sem1/c-lab.pdf" }], videoLinks: []
            },
            { name: "Principle of Management", icon: "fa-users",
                notes: [{ title: "Planning & Organizing Strategy Notes", url: "notes/sem1/pom-u1.pdf" }],
                previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
            }
        ]
    },
    {
        semesterName: "BCA Semester 2",
        semesterSyllabus: "https://drive.google.com/file/d/1B1Qkak_kw08hrVx8qUEa42IFIAr4UYut/preview",
        subjects: [
            { name: "Operating System (OS)", icon: "fa-sitemap",
                notes: [
                    { title: "Syllabus for 1st 2nd Semesters ", url: "https://docs.google.com/document/d/1B1Qkak_kw08hrVx8qUEa42IFIAr4UYut/preview" },
                    { title: "Operating System ", url: "https://drive.google.com/file/d/1QW3PKe2-8ay2DOO2v9kWqZ0yzMVyuTf0/preview" },
                    { title: "LINUX OPERATING SYSTEM  ", url: "https://docs.google.com/document/d/15ENbzIvsj5gnNVjCThGorlVFocx7hqmz/preview" },
                    { title: "UNIT NO: - 4  MEMORY MANAGEMENT  ", url: "https://drive.google.com/file/d/1wsjn0DRSFwfONDF0RxY28UqCDllSOrLa/preview" },
                    { title: "File Concepts — Operations & Attributes", url: "https://docs.google.com/document/d/14wgZgyKyCZ6pGcPHwcjz7PUbph7MepKA/preview" },
                    { title: "os unit 3rd Device Management ", url: "https://docs.google.com/document/d/1ogRPjAjea1s3UEWRlArP9sumV7KzCWSZ/preview" }
                ],
                previousYearPapers: [
                    { title: "BCA Sem All Subject PYQ ", url: "https://drive.google.com/file/d/1X3MoycBM4-eCS6s2aad4jTmchXE0Uory/preview" },
                    { title: "BCA sem 2nd Operating system PYQ 2018", url: "https://drive.google.com/file/d/1ZJkpp3cTqDP8QfwSSlCc0A89p69HIXlr/preview" }
                ],
                pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
            },
            { name: "Database Management System (DBMS)", icon: "fa-database",
                notes: [
                    { title: "Syllabus for 1st 2nd Semesters ", url: "https://docs.google.com/document/d/1B1Qkak_kw08hrVx8qUEa42IFIAr4UYut/preview" },
                    { title: "DBMS NOTES", url: "https://drive.google.com/file/d/1ZvGFRYP4p7V1Ydqp3yG4TOk4Fo-3OPsv/preview" },
                    { title: "SQL DELETE & WHERE CLAUSE", url: "https://drive.google.com/file/d/1P6VmgadZzUcF4HGACw4XrVe-bgCD9QTe/preview" }
                ],
                previousYearPapers: [{ title: "BCA Sem All Subject PYQ ", url: "https://drive.google.com/file/d/1X3MoycBM4-eCS6s2aad4jTmchXE0Uory/preview" }],
                pdfs: [{ title: "DatabaseManagementSystemBook ", url: "https://drive.google.com/file/d/1wX6lZAQFsorm3iiQEQsBIE2bITrEPWP3/preview" }],
                guessPapers: [], assignments: [], practicals: [{ title: "SQL Queries Lab Manual", url: "pdfs/sem2/dbms-sql.pdf" }], videoLinks: []
            },
            { name: "Computer Organization & Architecture (COA)", icon: "fa-network-wired",
                notes: [
                    { title: "Syllabus for 1st 2nd Semesters ", url: "https://docs.google.com/document/d/1B1Qkak_kw08hrVx8qUEa42IFIAr4UYut/preview" },
                    { title: "COA unit 1 ", url: "https://docs.google.com/document/d/1Yv456bL3ft4UBgdTtGJOEnK6Amm1gvW2/preview" },
                    { title: "COA unit 2 ", url: "https://docs.google.com/document/d/15DztE0v38XnNeplo9cWiPL5vFBOpE7-l/preview" },
                    { title: "COA unit 3 ", url: "https://docs.google.com/document/d/1UGHxz2So6rguE1eJyIkrQ8lx_qBpdbLS/preview" },
                    { title: "Computer Organization and Architecture-notes", url: "https://drive.google.com/file/d/1wQrcp_JIjYSeckKXLX7HwU8iTisBduWb/preview" }
                ],
                previousYearPapers: [{ title: "BCA Sem All Subject PYQ ", url: "https://drive.google.com/file/d/1X3MoycBM4-eCS6s2aad4jTmchXE0Uory/preview" }],
                pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
            },
            { name: "Hindi", icon: "fa-pen-nib",
                notes: [{ title: "IMPORTANT QUESTION HINDI", url: "https://docs.google.com/document/d/1h5QkXM0-kQVSoFsvvQcgm5_buaifLDlw/preview" }],
                previousYearPapers: [{ title: "संपूर्ण हल प्रश्न-पत्र अनिवार्य हिंदी (साहित्य) — सेमेस्टर II (परीक्षा 2025)", url: "https://docs.google.com/document/d/17yW5YZIFaQDqgDsK2_8uFRD_yfekdRvo/preview" }],
                pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
            },
            { name: "English", icon: "fa-book-atlas", status: "under-development",
                notes: [], previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
            },
            { name: "Digital Enhancement", icon: "fa-microchip",
                notes: [{ title: "DIGITAL ENHACMENT QUESTIONS BANK ", url: "https://docs.google.com/document/d/1ZZsTDAYF5W_N7oV28toX9FLiEjXu8DKX/preview" }],
                previousYearPapers: [
                    { title: "previousYearPapers 2025", url: "https://rrbmuniv.cespl.co.in/uploads/file/VAC-52T-002-Digital%20Enhancement%20SET%20-%20A.pdf" },
                    { title: "previousYearPapers 2025 SET 2", url: "https://rrbmuniv.cespl.co.in/uploads/file/VAC-52T-002-Digital%20Enhancement%20SET%20-%20A.pdf" }
                ],
                pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
            },
            { name: "Introduction to Office Productivity Software", icon: "fa-file-excel", status: "under-development",
                notes: [{ title: "MS Office Notes", url: "notes/sem1/ms-office.pdf" }],
                previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
            }
        ]
    },
    { semesterName: "BCA Semester 3 <br> Work in progress ", status: "under-development",
        subjects: [
            { name: "Object Oriented Programming Using C++", icon: "fa-cubes", notes: [{ title: "Polymorphism, Inheritance & Encapsulation Guide", url: "notes/sem3/cpp-oops.pdf" }], previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [{ title: "C++ Solved Program Lab File", url: "pdfs/sem3/cpp-file.pdf" }], videoLinks: [] },
            { name: "Operating System (OS)", icon: "fa-sliders", notes: [{ title: "CPU Scheduling Algorithms (FCFS, SJF, Round Robin)", url: "notes/sem3/os-scheduling.pdf" }], previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: [] },
            { name: "Web Technology - HTML, CSS & JS", icon: "fa-html5", notes: [{ title: "JavaScript Dom Manipulation Essentials", url: "notes/sem3/js-dom.pdf" }], previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [{ title: "Responsive Web Design Portfolio Practical", url: "pdfs/sem3/web-lab.pdf" }], videoLinks: [] }
        ]
    },
    { semesterName: "BCA Semester 4 <br> Work in progress", status: "under-development",
        subjects: [
            { name: "Java Programming Language", icon: "fa-brands fa-java", notes: [{ title: "Java Exception Handling & Multithreading Notes", url: "notes/sem4/java-core.pdf" }], previousYearPapers: [], pdfs: [{ title: "Core Java Complete E-Book Standard Edition", url: "pdfs/sem4/java-book.pdf" }], guessPapers: [], assignments: [], practicals: [{ title: "Java Core Programs Compilation File", url: "pdfs/sem4/java-lab.pdf" }], videoLinks: [] },
            { name: "Computer Networks (CN)", icon: "fa-network-wired", notes: [{ title: "OSI Reference Model vs TCP/IP Layers Architecture", url: "notes/sem4/cn-osi.pdf" }], previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: [] },
            { name: "Software Engineering", icon: "fa-diagram-project", notes: [{ title: "SDLC Models (Waterfall, Spiral & Agile Methodology)", url: "notes/sem4/sdlc.pdf" }], previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: [] }
        ]
    },
    { semesterName: "BCA Semester 5 <br> Work in progress", status: "under-development",
        subjects: [
            { name: "Python Web Development & Programming", icon: "fa-brands fa-python", notes: [{ title: "Unit 1: Python Basics, Lists, Tuples & Dictionaries", url: "notes/sem5/python-basics.pdf" }, { title: "Unit 2: Object Oriented Python & File Handling", url: "notes/sem5/python-oop.pdf" }], previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [{ title: "Python Lab Programs Complete File", url: "pdfs/sem5/python-lab.pdf" }], videoLinks: [{ title: "Python Full Course Walkthrough", url: "https://youtube.com/python-course" }] },
            { name: "Information Security & Cyber Laws", icon: "fa-shield-halved", notes: [{ title: "Cryptography, Firewalls & Indian IT Act 2000 Notes", url: "notes/sem5/cyber-security.pdf" }], previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: [] },
            { name: "Cloud Computing Technologies", icon: "fa-cloud", notes: [{ title: "SaaS, PaaS, IaaS Deployment Model Configurations", url: "notes/sem5/cloud.pdf" }], previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: [] }
        ]
    },
    { semesterName: "BCA Semester 6 <br> Work in progress", status: "under-development",
        subjects: [
            { name: "Artificial Intelligence & Machine Learning", icon: "fa-brain", notes: [{ title: "Introduction to Neural Networks & Expert Systems", url: "notes/sem6/ai-intro.pdf" }], previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: [{ title: "AI Basics for Beginners Video Guide", url: "https://youtube.com/ai-basics" }] },
            { name: "Major Capstone Project Viva Guide", icon: "fa-file-zipper", notes: [{ title: "How to Prepare Project Synopses and PPT Reports", url: "notes/sem6/project-guide.pdf" }], previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [{ title: "Sample SRS Document (Software Requirement Specification)", url: "pdfs/sem6/sample-srs.pdf" }], practicals: [], videoLinks: [] }
        ]
    }
];

const IMPORTANT_LINKS = [
    { title: "Join BCA WhatsApp Group for Updates", url: "https://chat.whatsapp.com/IzRAswcbKYF2nsx2sCtGEd" },
    { title: "Rajasthan University Exam Portal", url: "https://erp.univraj.org/" },
    { title: "BCA SEM 2ND EXAM 2026 TIME TABLE ", url: "https://del1.vultrobjects.com/ruptdata/newsDocs/newsDocs_1780489744.pdf" }
];

// Set this to your next real exam date (ISO format) to power the live countdown on the dashboard.
// Set date to null to hide the countdown card entirely.
const NEXT_EXAM = { title: "BCA Sem 2nd Main Examination", date: "2026-08-15T09:00:00" };

/* =========================================================================
   👥 TEAM DATA
   ========================================================================= */
const TEAM_MEMBERS = [
    { name: "", gender: "male", role: "Founder", dept: "leadership", icon: "fa-crown",
        intro: "Leads the vision, growth, and future of BCA Hub.",
        bio: "Started BCA Hub as a first-year passion project so every BCA student could get organized notes for free. Now sets the direction for what gets built next." },
    { name: "", gender: "female", role: "Co-Founder", dept: "leadership", icon: "fa-handshake",
        intro: "Supports operations, planning, and community development.",
        bio: "Keeps the day-to-day running smoothly — from planning new features to growing the student community that keeps BCA Hub alive." },
    { name: "", gender: "male", role: "Technical Head", dept: "tech", icon: "fa-code",
        intro: "Develops, maintains, and improves the website, features, and security.",
        bio: "Builds and ships everything you click on this site, keeps it fast and secure, and is usually the first to try out a new feature idea." },
    { name: "", gender: "male", role: "Academic Head", dept: "academics", icon: "fa-book-open",
        intro: "Reviews study materials and ensures educational quality.",
        bio: "Cross-checks every note and paper against the actual syllabus before it goes live, so what you study here is accurate and exam-relevant." },
    { name: "", gender: "female", role: "Notes Manager", dept: "academics", icon: "fa-folder-open",
        intro: "Manages notes, PDFs, PYQs, practical files, and study resources.",
        bio: "Organizes every unit, note, and practical file into the right semester and subject folder, so you can always find what you need in seconds." },
    { name: "", gender: "male", role: "Content Manager", dept: "content", icon: "fa-pen-nib",
        intro: "Creates blogs, announcements, descriptions, and educational content.",
        bio: "Writes the notices, announcements, and descriptions across the site — the reason updates actually make sense when you read them." },
    { name: "", gender: "female", role: "Graphic Designer", dept: "content", icon: "fa-palette",
        intro: "Designs banners, posters, certificates, thumbnails, and branding assets.",
        bio: "Designs everything visual — banners, certificates, social posts — and keeps BCA Hub's look consistent across every platform." },
    { name: "r", gender: "female", role: "Social Media Manager", dept: "content", icon: "fa-hashtag",
        intro: "Handles promotions, social media platforms, and student engagement.",
        bio: "Runs BCA Hub's social presence, shares updates the moment they go live, and keeps students engaged between semesters." },
    { name: "", gender: "female", role: "Student Support", dept: "support", icon: "fa-comments",
        intro: "Helps students, answers queries, and collects feedback.",
        bio: "The first person you'll hear back from if something's broken or confusing — collects feedback and makes sure it actually gets acted on." },
    { name: "", gender: "male", role: "PYQ & Resources Manager", dept: "academics", icon: "fa-file-lines",
        intro: "Maintains Previous Year Papers, syllabus, practical files, and additional learning resources.",
        bio: "Hunts down every previous year paper and syllabus update so you're never studying from an outdated version." }
];

function teamDeptLabel(dept) {
    return { leadership: "Leadership", tech: "Technical", academics: "Academics", content: "Content & Design", support: "Support" }[dept] || dept;
}
function teamInitials(name) {
    return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
}

// A small original line-illustration bust icon — not a photo, just a clean gender-styled
// silhouette so each card has more visual identity than plain initials.
function teamAvatarSvg(gender) {
    const hair = gender === "female"
        ? `<path d="M14 34c0-14 8-24 18-24s18 10 18 24c-2-2-6-4-9-4-3 4-9 6-9 6s-6-2-9-6c-3 0-7 2-9 4z" fill="rgba(0,0,0,0.18)"/>`
        : `<path d="M16 30c1-12 8-20 16-20s15 8 16 20c-3-3-9-5-16-5s-13 2-16 5z" fill="rgba(0,0,0,0.18)"/>`;
    return `
        <svg viewBox="0 0 64 64" class="team-avatar-svg" aria-hidden="true">
            <circle cx="32" cy="24" r="13" fill="rgba(255,255,255,0.9)"/>
            <path d="M8 58c2-14 12-22 24-22s22 8 24 22" fill="rgba(255,255,255,0.9)"/>
            ${hair}
        </svg>
    `;
}

function renderTeamDeptLegend() {
    const el = document.getElementById("teamDeptLegend");
    if (!el) return;
    const counts = {};
    TEAM_MEMBERS.forEach(m => { counts[m.dept] = (counts[m.dept] || 0) + 1; });
    el.innerHTML = Object.keys(counts).map(d => `<span class="team-dept-chip"><strong>${counts[d]}</strong> ${teamDeptLabel(d)}</span>`).join('');
}

/* =========================================================================
   🔧 GENERIC HELPERS
   ========================================================================= */
function esc(str) { return String(str == null ? "" : str).replace(/'/g, "\\'"); }

function getDownloadUrl(url) {
    if (!url) return "#";
    const driveFile = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
    if (driveFile) return `https://drive.google.com/uc?export=download&id=${driveFile[1]}`;
    const docsFile = url.match(/docs\.google\.com\/document\/d\/([^/]+)/);
    if (docsFile) return `https://docs.google.com/document/d/${docsFile[1]}/export?format=pdf`;
    return url;
}

function renderResourceRow(item, semesterName, subjectName) {
    if (!item || !item.title) return "";
    const saved = isBookmarked(item.url);
    const studied = isStudied(item.url);
    return `
        <div class="link-item">
            <span class="item-title">${item.title}</span>
            <div class="resource-actions">
                <button class="bookmark-btn ${saved ? 'saved' : ''}" data-cursor-label="Save" title="${saved ? 'Remove from saved' : 'Save for later'}"
                    onclick="toggleBookmark(this, '${esc(item.title)}', '${esc(item.url)}', '${esc(semesterName || '')}', '${esc(subjectName || '')}')">
                    <i class="fa-solid fa-star"></i>
                </button>
                <button class="bookmark-btn ${studied ? 'studied' : ''}" data-cursor-label="Studied" title="${studied ? 'Mark as not studied' : 'Mark as studied'}"
                    onclick="toggleStudied(this, '${esc(item.url)}')">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button class="icon-btn" data-cursor-label="Share" title="Share" onclick="shareResource('${esc(item.title)}', '${esc(item.url)}')">
                    <i class="fa-solid fa-share-nodes"></i>
                </button>
                <button data-cursor-label="View" onclick="trackRecentView('${esc(item.title)}', '${esc(item.url)}', '${esc(semesterName || '')}', '${esc(subjectName || '')}'); openPremiumModal('${esc(item.title)}', '${esc(item.url)}')" class="download-btn view-btn">
                    <i class="fa-solid fa-eye"></i> View
                </button>
                <a href="${getDownloadUrl(item.url)}" target="_blank" rel="noopener" download data-cursor-label="Get" class="download-btn dl-btn"
                    onclick="trackRecentView('${esc(item.title)}', '${esc(item.url)}', '${esc(semesterName || '')}', '${esc(subjectName || '')}'); showToast('Download started: ${esc(item.title)}', 'fa-download')">
                    <i class="fa-solid fa-download"></i> Download
                </a>
            </div>
        </div>
    `;
}

function calculateStats() {
    let subjectCount = 0, resourceCount = 0;
    const keys = ['notes', 'pdfs', 'previousYearPapers', 'guessPapers', 'assignments', 'practicals', 'videoLinks'];
    ACADEMIC_DATABASE.forEach(sem => {
        if (sem.status === "under-development" || !sem.subjects) return;
        sem.subjects.forEach(sub => {
            subjectCount++;
            keys.forEach(k => resourceCount += (sub[k] || []).filter(i => i && i.title).length);
        });
    });
    return { semesters: ACADEMIC_DATABASE.length, subjects: subjectCount, resources: resourceCount };
}

function showToast(message, icon) {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid ${icon || 'fa-circle-check'}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2600);
}

/* =========================================================================
   ⭐ BOOKMARKS ("Saved for later")
   ========================================================================= */
const BOOKMARK_KEY = "bcaHubBookmarks";
function getBookmarks() { try { return JSON.parse(localStorage.getItem(BOOKMARK_KEY)) || []; } catch (e) { return []; } }
function isBookmarked(url) { return getBookmarks().some(b => b.url === url); }

function toggleBookmark(btnEl, title, url, semesterName, subjectName) {
    let bookmarks = getBookmarks();
    const idx = bookmarks.findIndex(b => b.url === url);
    if (idx > -1) {
        bookmarks.splice(idx, 1);
        if (btnEl) btnEl.classList.remove("saved");
        showToast("Removed from Saved", "fa-star");
    } else {
        bookmarks.push({ title, url, semesterName, subjectName });
        if (btnEl) btnEl.classList.add("saved");
        showToast("Saved for later", "fa-star");
    }
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
    if (document.getElementById("savedResourcesContainer")) renderSavedResources();
}

function renderSavedResources() {
    const container = document.getElementById("savedResourcesContainer");
    if (!container) return;
    const bookmarks = getBookmarks();
    if (bookmarks.length === 0) {
        container.innerHTML = '<p class="empty">Tap the ⭐ on any resource to save it here for quick access later.</p>';
        return;
    }
    container.innerHTML = bookmarks.map(b => `
        <div class="link-row">
            <div>
                <span style="display:block; font-weight:500; font-size:0.9rem;">${b.title}</span>
                <small style="color:var(--text-dim);">${b.semesterName || ''}${b.subjectName ? ' &bull; ' + b.subjectName : ''}</small>
            </div>
            <div class="resource-actions">
                <button class="bookmark-btn saved" data-cursor-label="Remove" onclick="toggleBookmark(this, '${esc(b.title)}', '${esc(b.url)}', '${esc(b.semesterName || '')}', '${esc(b.subjectName || '')}')"><i class="fa-solid fa-star"></i></button>
                <button data-cursor-label="View" onclick="openPremiumModal('${esc(b.title)}', '${esc(b.url)}')" class="download-btn view-btn"><i class="fa-solid fa-eye"></i> View</button>
                <a href="${getDownloadUrl(b.url)}" target="_blank" rel="noopener" download data-cursor-label="Get" class="download-btn dl-btn"><i class="fa-solid fa-download"></i> Download</a>
            </div>
        </div>
    `).join('');
}

/* =========================================================================
   🕘 RECENTLY VIEWED — auto-tracked, last 8, most recent first
   ========================================================================= */
const RECENT_KEY = "bcaHubRecent";

function trackRecentView(title, url, semesterName, subjectName) {
    let recent = getRecent().filter(r => r.url !== url);
    recent.unshift({ title, url, semesterName, subjectName, ts: Date.now() });
    recent = recent.slice(0, 8);
    localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
    if (document.getElementById("recentResourcesContainer")) renderRecentlyViewed();
}

function getRecent() { try { return JSON.parse(localStorage.getItem(RECENT_KEY)) || []; } catch (e) { return []; } }

function renderRecentlyViewed() {
    const container = document.getElementById("recentResourcesContainer");
    if (!container) return;
    const recent = getRecent();
    if (!recent.length) {
        container.innerHTML = '<p class="empty">Resources you view or download will show up here, so you can pick up where you left off.</p>';
        return;
    }
    container.innerHTML = recent.map(r => `
        <div class="link-row">
            <div>
                <span style="display:block; font-weight:500; font-size:0.9rem;">${r.title}</span>
                <small style="color:var(--text-dim);">${r.semesterName || ''}${r.subjectName ? ' &bull; ' + r.subjectName : ''}</small>
            </div>
            <div class="resource-actions">
                <button data-cursor-label="View" onclick="openPremiumModal('${esc(r.title)}', '${esc(r.url)}')" class="download-btn view-btn"><i class="fa-solid fa-eye"></i> View</button>
            </div>
        </div>
    `).join('');
}

/* =========================================================================
   ✅ STUDY PROGRESS — mark any resource as studied, per-subject % shown on cards
   ========================================================================= */
const PROGRESS_KEY = "bcaHubProgress";
function getProgress() { try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || []; } catch (e) { return []; } }
function isStudied(url) { return getProgress().includes(url); }

function toggleStudied(btnEl, url) {
    let done = getProgress();
    const idx = done.indexOf(url);
    if (idx > -1) { done.splice(idx, 1); btnEl.classList.remove("studied"); showToast("Marked as not studied yet", "fa-rotate-left"); }
    else { done.push(url); btnEl.classList.add("studied"); showToast("Marked as studied", "fa-check"); }
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(done));
    refreshVisibleProgressBars();
}

// Recomputes any subject-progress bars currently on screen (e.g. after toggling a checkbox
// while the accordion for that subject is open on the same page).
function refreshVisibleProgressBars() {
    document.querySelectorAll("[data-progress-urls]").forEach(bar => {
        const urls = JSON.parse(bar.getAttribute("data-progress-urls"));
        const done = getProgress();
        const completed = urls.filter(u => done.includes(u)).length;
        const pct = urls.length ? Math.round((completed / urls.length) * 100) : 0;
        bar.querySelector(".progress-fill").style.width = pct + "%";
        bar.querySelector(".progress-label").textContent = `${completed}/${urls.length} studied`;
    });
}

function subjectResourceUrls(subData) {
    const keys = ['notes', 'pdfs', 'previousYearPapers', 'guessPapers', 'assignments', 'practicals', 'videoLinks'];
    let urls = [];
    keys.forEach(k => (subData[k] || []).forEach(i => { if (i && i.title) urls.push(i.url); }));
    return urls;
}

/* =========================================================================
   🔗 SHARE — native share sheet where available, WhatsApp link otherwise
   ========================================================================= */
function shareResource(title, url) {
    const shareUrl = getDownloadUrl(url);
    if (navigator.share) {
        navigator.share({ title, text: `${title} — BCA Hub`, url: shareUrl }).catch(() => {});
    } else {
        window.open(`https://wa.me/?text=${encodeURIComponent(title + " — " + shareUrl)}`, "_blank");
    }
}

/* =========================================================================
   ⏳ EXAM COUNTDOWN
   ========================================================================= */
function renderExamCountdown() {
    const el = document.getElementById("examCountdown");
    if (!el || !NEXT_EXAM || !NEXT_EXAM.date) return;

    function tick() {
        const diff = new Date(NEXT_EXAM.date).getTime() - Date.now();
        if (diff <= 0) { el.innerHTML = `<span class="countdown-label">${NEXT_EXAM.title}</span><span class="countdown-value">Happening now / passed</span>`; return; }
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        el.innerHTML = `
            <span class="countdown-label"><i class="fa-solid fa-hourglass-half"></i> ${NEXT_EXAM.title}</span>
            <span class="countdown-value">${d}d ${h}h ${m}m <span class="countdown-suffix">left</span></span>
        `;
    }
    tick();
    if (el.dataset.bound) return;
    el.dataset.bound = "1";
    setInterval(tick, 60000);
}
(function runPreloader() {
    const el = document.getElementById("preloader");
    const countEl = document.getElementById("preloaderCount");
    let n = 0;
    const timer = setInterval(() => {
        n += Math.ceil(Math.random() * 20);
        if (n >= 100) { n = 100; clearInterval(timer); }
        countEl.textContent = n;
        if (n === 100) {
            setTimeout(() => {
                el.classList.add("hidden");
                initApp();
            }, 200);
        }
    }, 80);
})();

/* =========================================================================
   🧠 APP INIT
   ========================================================================= */
let isNoticesExpanded = false;

function initApp() {
    setupThemeControl();
    setupCursor();
    setupNavbar();
    setupSearchEngine();
    setupSearchShortcut();
    setupQuickSearch();
    setupDisclaimerStrip();
    setupTeamLazyLoad();
    setupTeamStatics();
    buildTicker();
    renderHomeDashboard();
    updateFooter();
    setInterval(updateFooter, 30000);
}

window.addEventListener("pageshow", (e) => { if (e.persisted) renderHomeDashboard(); });

/* =========================================================================
   📄 HOME DASHBOARD
   ========================================================================= */
function renderHomeDashboard() {
    const context = document.getElementById("dynamicContentContext");
    const stats = calculateStats();
    context.innerHTML = `
        <section class="hero">
            <p class="eyebrow reveal-line"><span class="dot-pulse"></span> BCA Notes &middot; PYQs &middot; Syllabus</p>
            <h1 class="hero-headline">
                <span class="line"><span class="line-inner">Everything you need</span></span>
                <span class="line"><span class="line-inner">for your <em class="gradient-text">BCA journey.</em></span></span>
            </h1>
            <p class="hero-sub">Free, organized, semester-wise notes, previous year papers, solved assignments and practicals — built by a student, for students.</p>
            <div class="hero-actions">
                <button class="btn-glow" data-cursor-label="Go" onclick="document.getElementById('semestersGrid').scrollIntoView({behavior:'smooth', block:'start'})"><span>Browse Semesters</span></button>
                <button class="btn-ghost" onclick="scrollToNotices()"><span>View Notices</span></button>
            </div>
            <div class="countdown-card glass reveal-up" id="examCountdown"></div>
        </section>

        <div class="stats-grid">
            <div class="stat-card glass reveal-up"><span class="stat-number" data-target="${stats.semesters}">0</span><span class="stat-label">Semesters</span></div>
            <div class="stat-card glass reveal-up"><span class="stat-number" data-target="${stats.subjects}" data-suffix="+">0</span><span class="stat-label">Subjects</span></div>
            <div class="stat-card glass reveal-up"><span class="stat-number" data-target="${stats.resources}" data-suffix="+">0</span><span class="stat-label">Resources</span></div>
            <div class="stat-card glass reveal-up"><span class="stat-number" data-target="100" data-suffix="%">0</span><span class="stat-label">Free, always</span></div>
        </div>

        <div class="dashboard-layout">
            <section>
                <div class="section-head reveal-up"><h2 class="section-title"><i class="fa-solid fa-layer-group"></i> Choose Semester</h2></div>
                <div class="grid-system" id="semestersGrid"></div>
            </section>

            <aside id="noticesPanel">
                <div class="section-head reveal-up"><h2 class="section-title"><i class="fa-solid fa-bell"></i> Notice Board</h2></div>
                <div class="notice-section glass reveal-up">
                    <div id="noticesContainer"></div>
                </div>
            </aside>
        </div>

        <div class="links-box-wrapper glass reveal-up">
            <h3 class="links-box-title"><i class="fa-solid fa-clock-rotate-left"></i> Recent Downloads &amp; Views</h3>
            <div id="recentResourcesContainer" class="links-scroll-box"></div>
        </div>

        <div class="links-box-wrapper glass reveal-up" id="savedResourcesPanel">
            <h3 class="links-box-title"><i class="fa-solid fa-star"></i> My Saved Resources</h3>
            <div id="savedResourcesContainer" class="links-scroll-box"></div>
        </div>

        <div class="links-box-wrapper glass reveal-up" id="importantLinksPanel">
            <h3 class="links-box-title"><i class="fa-solid fa-link"></i> Important Links</h3>
            <div id="linksContainer" class="links-scroll-box"></div>
        </div>
    `;

    initDashboardSystem();
    renderImportantLinks();
    renderSavedResources();
    renderRecentlyViewed();
    renderExamCountdown();
    playHeroReveal();
    observeReveals();
    observeCounters();

    const searchInput = document.getElementById("liveSearchInput");
    if (searchInput) searchInput.value = "";
}

function scrollToNotices() { scrollToDashboardPanel("noticesPanel"); }
function scrollToSavedResources() { scrollToDashboardPanel("savedResourcesPanel"); }
function scrollToImportantLinks() { scrollToDashboardPanel("importantLinksPanel"); }

// Notices/Saved/Links only exist on the home dashboard view, so if the user is deep in a
// semester or subject page, this brings them home first, then scrolls to the right panel.
function scrollToDashboardPanel(panelId) {
    const el = document.getElementById(panelId);
    if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    renderHomeDashboard();
    requestAnimationFrame(() => {
        const el2 = document.getElementById(panelId);
        if (el2) el2.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

// The Our Team section is always present in the page (not swapped by the SPA router),
// so this just scrolls straight to it.
function scrollToTeam() {
    const el = document.getElementById("team");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function initDashboardSystem() {
    renderLiveNotices();
    const semGrid = document.getElementById("semestersGrid");
    if (!semGrid) return;
    semGrid.innerHTML = ACADEMIC_DATABASE.map((sem, index) => `
        <div class="ui-card glass clickable reveal-up" data-cursor-label="Open" onclick="openSemesterView(${index})">
            <i class="fa-solid fa-folder-open card-icon gradient-text"></i>
            <h3>${sem.semesterName}</h3>
            <p>Click to open resources</p>
        </div>
    `).join('');
    attachTilt(semGrid.querySelectorAll(".ui-card"));
    semGrid.querySelectorAll(".reveal-up").forEach(el => revealObserver.observe(el));
}

/* =========================================================================
   📢 NOTICES + TICKER
   ========================================================================= */
function renderLiveNotices() {
    const box = document.getElementById("noticesContainer");
    if (!box) return;
    if (!ADMIN_NOTICES.length) { box.innerHTML = '<p class="empty">No active announcements.</p>'; return; }

    const toRender = isNoticesExpanded ? ADMIN_NOTICES : ADMIN_NOTICES.slice(0, 3);
    let html = toRender.map(n => `
        <div class="notice-card">
            <h4>${n.title}</h4>
            <div class="notice-footer">
                <span><i class="fa-solid fa-calendar-day"></i> ${n.date}</span>
                <span class="badge ${n.important ? 'danger' : 'info'}">${n.tag}</span>
            </div>
        </div>
    `).join('');

    if (ADMIN_NOTICES.length > 3) {
        html += `<button class="view-toggle" onclick="toggleNoticesVisibility()">${isNoticesExpanded ? '- View Less' : `+ View More (${ADMIN_NOTICES.length - 3} More)`}</button>`;
    }
    box.innerHTML = html;
}
function toggleNoticesVisibility() { isNoticesExpanded = !isNoticesExpanded; renderLiveNotices(); }

function buildTicker() {
    const track = document.getElementById("tickerTrack");
    const noticeItems = ADMIN_NOTICES.map(n => `
        <span class="ticker-item"><span class="badge-dot ${n.important ? 'danger' : 'info'}"></span> <strong>${n.tag}:</strong> ${n.title}</span>
    `).join('');
    const disclaimerChip = `<span class="ticker-item"><span class="badge-dot info"></span> <strong>Disclaimer:</strong> Free educational resources only — no exam-passing guarantees, no shortcuts.</span>`;
    const itemsHTML = noticeItems + disclaimerChip;
    track.innerHTML = itemsHTML + itemsHTML; // duplicated for a seamless loop
}

/* =========================================================================
   🔗 IMPORTANT LINKS
   ========================================================================= */
function renderImportantLinks() {
    const container = document.getElementById("linksContainer");
    if (!container) return;
    if (!IMPORTANT_LINKS.length) { container.innerHTML = '<p class="empty">No links available.</p>'; return; }
    container.innerHTML = IMPORTANT_LINKS.map(link => `
        <div class="link-row">
            <span>${link.title}</span>
            <div class="resource-actions">
                <a href="${link.url}" target="_blank" rel="noopener" data-cursor-label="Open" class="icon-btn" title="Open link"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <a href="${getDownloadUrl(link.url)}" target="_blank" rel="noopener" download data-cursor-label="Get" class="icon-btn" title="Download"><i class="fa-solid fa-download"></i></a>
            </div>
        </div>
    `).join('');
}

/* =========================================================================
   📁 SEMESTER / SUBJECT VIEWS
   ========================================================================= */
function openSemesterView(semIndex) {
    const context = document.getElementById("dynamicContentContext");
    const data = ACADEMIC_DATABASE[semIndex];

    if (data.status === "under-development") {
        context.innerHTML = `
            <div class="action-bar">
                <button class="back-btn" data-cursor-label="Back" onclick="renderHomeDashboard()"><i class="fa-solid fa-arrow-left"></i> Home Dashboard</button>
                <h2 class="section-title">${data.semesterName}</h2>
            </div>
            <div class="glass reveal-up" style="padding:4rem 2rem;text-align:center;border-radius:var(--r-lg);">
                <i class="fa-solid fa-screwdriver-wrench" style="font-size:3rem;color:var(--accent-a);margin-bottom:1.2rem;"></i>
                <h3 class="section-title" style="justify-content:center;">Semester Under Construction</h3>
                <p style="color:var(--text-dim);max-width:520px;margin:0.8rem auto 0;">Work in progress! Keep an eye on this space — exclusive content will be uploaded shortly.</p>
            </div>
        `;
        observeReveals();
        return;
    }

    let html = `
        <div class="action-bar">
            <button class="back-btn" data-cursor-label="Back" onclick="renderHomeDashboard()"><i class="fa-solid fa-arrow-left"></i> Home Dashboard</button>
            <h2 class="section-title">${data.semesterName} Resources</h2>
        </div>
        <div class="grid-system">
            ${data.semesterSyllabus ? `
                <div class="ui-card glass clickable reveal-up" data-cursor-label="Open" onclick="handleSyllabusClick(${semIndex})">
                    <i class="fa-solid fa-book-open card-icon gradient-text"></i>
                    <h3>Semester Syllabus</h3>
                    <p>View syllabus options</p>
                </div>` : ''}
            ${data.subjects.map((sub, subIndex) => {
                const dev = sub.status === "under-development";
                const urls = dev ? [] : subjectResourceUrls(sub);
                const done = getProgress();
                const completed = urls.filter(u => done.includes(u)).length;
                const pct = urls.length ? Math.round((completed / urls.length) * 100) : 0;
                return `
                    <div class="ui-card glass clickable reveal-up" data-cursor-label="${dev ? 'Soon' : 'Open'}" onclick="openSubjectCategories(${semIndex}, ${subIndex})">
                        <i class="fa-solid ${sub.icon || 'fa-book'} card-icon ${dev ? '' : 'gradient-text'}" style="${dev ? 'color:var(--accent-a);' : ''}"></i>
                        <h3>${sub.name}</h3>
                        <p class="${dev ? 'warn' : ''}">${dev ? '<i class="fa-solid fa-clock"></i> Coming Soon' : 'Click to open resources'}</p>
                        ${!dev && urls.length ? `
                            <div class="progress-bar" data-progress-urls='${JSON.stringify(urls)}' onclick="event.stopPropagation()">
                                <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
                                <span class="progress-label">${completed}/${urls.length} studied</span>
                            </div>` : ''}
                    </div>`;
            }).join('')}
        </div>
    `;
    context.innerHTML = html;
    attachTilt(context.querySelectorAll(".ui-card"));
    observeReveals();
}

function handleSyllabusClick(semIndex) {
    const data = ACADEMIC_DATABASE[semIndex];
    const syllabusData = data.semesterSyllabus;
    if (!Array.isArray(syllabusData)) { openPremiumModal('Semester Syllabus', syllabusData); return; }

    const modalHtml = `
        <div id="syllabusChoiceModal" style="position:fixed;inset:0;background:rgba(6,6,6,0.75);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;z-index:2500;padding:1.2rem;">
            <div class="glass" style="width:100%;max-width:380px;border-radius:var(--r-lg);padding:2rem;text-align:center;position:relative;">
                <button onclick="document.getElementById('syllabusChoiceModal').remove()" style="position:absolute;top:1rem;right:1rem;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:center;"><i class="fa-solid fa-xmark"></i></button>
                <i class="fa-solid fa-book-open gradient-text" style="font-size:2.2rem;margin-bottom:0.8rem;"></i>
                <h3 style="font-family:var(--font-display);margin-bottom:0.3rem;">Select Syllabus</h3>
                <p style="color:var(--text-dim);font-size:0.85rem;margin-bottom:1.4rem;">Which resource do you want to view?</p>
                <div style="display:flex;flex-direction:column;gap:0.7rem;">
                    ${syllabusData.map(syl => `
                        <button class="syl-choice-btn" onclick="openPremiumModal('${esc(syl.title)}', '${esc(syl.url)}'); document.getElementById('syllabusChoiceModal').remove();">
                            <i class="fa-solid fa-file-pdf"></i> ${syl.title}
                        </button>`).join('')}
                </div>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function openSubjectCategories(semIndex, subIndex) {
    const context = document.getElementById("dynamicContentContext");
    const semData = ACADEMIC_DATABASE[semIndex];
    const subData = semData.subjects[subIndex];
    const cleanSemName = semData.semesterName.replace(/<br>.*/i, '').trim();

    if (subData.status === "under-development") {
        context.innerHTML = `
            <div class="action-bar">
                <button class="back-btn" data-cursor-label="Back" onclick="openSemesterView(${semIndex})"><i class="fa-solid fa-arrow-left"></i> Back to ${cleanSemName}</button>
                <h2 class="section-title">${subData.name}</h2>
            </div>
            <div class="glass reveal-up" style="padding:4rem 2rem;text-align:center;border-radius:var(--r-lg);">
                <i class="fa-solid fa-laptop-code gradient-text" style="font-size:3rem;margin-bottom:1.2rem;"></i>
                <h3 class="section-title" style="justify-content:center;">Content Coming Soon!</h3>
                <p style="color:var(--text-dim);max-width:500px;margin:0.8rem auto 0;">We're organizing premium notes, assignments, and PYQs for <b>${subData.name}</b>. Stay tuned!</p>
            </div>
        `;
        observeReveals();
        return;
    }

    let html = `
        <div class="action-bar">
            <button class="back-btn" data-cursor-label="Back" onclick="openSemesterView(${semIndex})"><i class="fa-solid fa-arrow-left"></i> Back to ${cleanSemName}</button>
            <h2 class="section-title">${subData.name} Resources</h2>
        </div>
        <div>
    `;

    const categories = [
        { key: 'notes', title: 'Premium Study Notes', icon: 'fa-file-lines' },
        { key: 'previousYearPapers', title: 'Previous Year Papers (PYQs)', icon: 'fa-clock-rotate-left' },
        { key: 'pdfs', title: 'Reference Books & PDFs', icon: 'fa-book' },
        { key: 'guessPapers', title: 'Guess Papers', icon: 'fa-lightbulb' },
        { key: 'assignments', title: 'Solved Assignments', icon: 'fa-pen-to-square' },
        { key: 'practicals', title: 'Practical Files & Lab Work', icon: 'fa-code' },
        { key: 'videoLinks', title: 'Video Lectures & Tutorials', icon: 'fa-video' }
    ];

    let found = false;
    categories.forEach(cat => {
        const items = (subData[cat.key] || []).filter(i => i && i.title);
        if (items.length) {
            found = true;
            html += `
                <div class="accordion-item glass">
                    <div class="accordion-header" data-cursor-label="Toggle" onclick="toggleAccordion(this)">
                        <span><i class="fa-solid ${cat.icon} gradient-text"></i> ${cat.title} (${items.length})</span>
                        <i class="fa-solid fa-chevron-down arrow-icon"></i>
                    </div>
                    <div class="accordion-body">
                        ${items.map(item => renderResourceRow(item, cleanSemName, subData.name)).join('')}
                    </div>
                </div>
            `;
        }
    });

    if (!found) html += `<div class="glass reveal-up" style="padding:3rem;text-align:center;border-radius:var(--r-lg);"><i class="fa-solid fa-folder-open" style="font-size:2.4rem;color:var(--text-dim);margin-bottom:1rem;"></i><p style="color:var(--text-dim);">No resources uploaded yet for this subject.</p></div>`;

    html += `</div>`;
    context.innerHTML = html;
    observeReveals();
}

function toggleAccordion(headerElement) {
    const body = headerElement.nextElementSibling;
    const arrow = headerElement.querySelector(".arrow-icon");
    const isOpen = body.style.display === "block";
    body.style.display = isOpen ? "none" : "block";
    arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
}

/* =========================================================================
   🔎 SEARCH
   ========================================================================= */
function setupSearchEngine() {
    const search = document.getElementById("liveSearchInput");
    if (!search) return;
    search.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase().trim();
        const context = document.getElementById("dynamicContentContext");
        if (term.length < 2) { if (term.length === 0) renderHomeDashboard(); return; }

        let html = `
            <div class="action-bar">
                <button class="back-btn" data-cursor-label="Clear" onclick="renderHomeDashboard()"><i class="fa-solid fa-xmark"></i> Clear Search</button>
                <h2 class="section-title">Results for "${e.target.value}"</h2>
            </div>
            <div class="glass" style="padding:1.4rem;border-radius:var(--r-lg);">
        `;
        let found = false;

        ACADEMIC_DATABASE.forEach(sem => {
            if (sem.status === "under-development") return;
            const cleanSemName = sem.semesterName.replace(/<br>.*/i, '').trim();
            sem.subjects.forEach(sub => {
                if (sub.status === "under-development") return;
                ['notes', 'pdfs', 'previousYearPapers', 'guessPapers', 'assignments', 'practicals', 'videoLinks'].forEach(key => {
                    (sub[key] || []).forEach(item => {
                        if (item.title && (item.title.toLowerCase().includes(term) || sub.name.toLowerCase().includes(term))) {
                            found = true;
                            html += `
                                <div class="link-item">
                                    <div>
                                        <span class="item-title" style="display:block;">${item.title}</span>
                                        <small style="color:var(--text-dim);">${cleanSemName} &bull; ${sub.name}</small>
                                    </div>
                                    <div class="resource-actions">
                                        <button class="bookmark-btn ${isBookmarked(item.url) ? 'saved' : ''}" data-cursor-label="Save" onclick="toggleBookmark(this, '${esc(item.title)}', '${esc(item.url)}', '${esc(cleanSemName)}', '${esc(sub.name)}')"><i class="fa-solid fa-star"></i></button>
                                        <button class="bookmark-btn ${isStudied(item.url) ? 'studied' : ''}" data-cursor-label="Studied" onclick="toggleStudied(this, '${esc(item.url)}')"><i class="fa-solid fa-check"></i></button>
                                        <button class="icon-btn" data-cursor-label="Share" onclick="shareResource('${esc(item.title)}', '${esc(item.url)}')"><i class="fa-solid fa-share-nodes"></i></button>
                                        <button data-cursor-label="View" onclick="trackRecentView('${esc(item.title)}', '${esc(item.url)}', '${esc(cleanSemName)}', '${esc(sub.name)}'); openPremiumModal('${esc(item.title)}', '${esc(item.url)}')" class="download-btn view-btn"><i class="fa-solid fa-eye"></i> View</button>
                                        <a href="${getDownloadUrl(item.url)}" target="_blank" rel="noopener" download data-cursor-label="Get" class="download-btn dl-btn" onclick="trackRecentView('${esc(item.title)}', '${esc(item.url)}', '${esc(cleanSemName)}', '${esc(sub.name)}'); showToast('Download started: ${esc(item.title)}', 'fa-download')"><i class="fa-solid fa-download"></i> Download</a>
                                    </div>
                                </div>`;
                        }
                    });
                });
            });
        });

        if (!found) html += `<p class="empty">No matches found for your search query.</p>`;
        html += `</div>`;
        context.innerHTML = html;
    });
}

function setupSearchShortcut() {
    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            const input = document.getElementById("liveSearchInput");
            if (input) input.focus();
        }
    });
}

/* =========================================================================
   🖼️ FILE PREVIEW MODAL
   ========================================================================= */
function openPremiumModal(title, url) {
    document.getElementById("modalFileTitle").innerText = title;
    document.getElementById("modalIframeViewer").src = url + (url.includes('#') ? '' : '#toolbar=0&navpanes=0&scrollbar=0');
    document.getElementById("premiumFileModal").classList.add("open");
    document.getElementById("premiumFileModal").setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}
function closePremiumModal() {
    document.getElementById("premiumFileModal").classList.remove("open");
    document.getElementById("premiumFileModal").setAttribute("aria-hidden", "true");
    document.getElementById("modalIframeViewer").src = "";
    document.body.style.overflow = "";
}
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closePremiumModal(); closeTeamProfile(); } });

/* =========================================================================
   🤖 AI DOUBT ASSISTANT
   ========================================================================= */
function openAiAssistantView() {
    const context = document.getElementById("dynamicContentContext");
    context.innerHTML = `
        <div class="action-bar">
            <button class="back-btn" data-cursor-label="Back" onclick="renderHomeDashboard()"><i class="fa-solid fa-arrow-left"></i> Back to Dashboard</button>
        </div>
        <div class="glass reveal-up" style="width:100%;height:600px;border-radius:var(--r-lg);overflow:hidden;">
            <iframe src="https://cdn.jotfor.ms/agent/embedjs/019ee5219662765a812afde3152c0c6d222c/embed.html" width="100%" height="100%" style="border:none;"></iframe>
        </div>
    `;
    observeReveals();
}

/* =========================================================================
   👥 TEAM SECTION — lazily built once it nears the viewport
   ========================================================================= */
function setupTeamLazyLoad() {
    const section = document.getElementById("team");
    if (!section) return;
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { buildTeamSection(); obs.unobserve(section); }
        });
    }, { rootMargin: "300px 0px" });
    obs.observe(section);
}

function buildTeamSection() {
    renderTeamCards();
    renderTeamDeptLegend();
    setupTeamSearchAndFilter();
    generateTeamParticles();
    observeReveals();
    observeCounters();
}

function renderTeamCards() {
    const grid = document.getElementById("teamGrid");
    if (!grid) return;
    grid.innerHTML = TEAM_MEMBERS.map((m, i) => `
        <div class="team-card glass clickable" data-dept="${m.dept}" data-cursor-label="View" onclick="openTeamProfile(${i})">
            <div class="team-avatar">
                ${teamAvatarSvg(m.gender)}
                <span class="team-avatar-badge"><i class="fa-solid ${m.icon}"></i></span>
            </div>
            <h3 class="team-name">${m.name}</h3>
            <p class="team-role">${m.role}</p>
            <p class="team-intro">${m.intro}</p>
            <button class="team-view-btn" onclick="event.stopPropagation(); openTeamProfile(${i})">
                <i class="fa-solid fa-user"></i> View Profile
            </button>
        </div>
    `).join('');
    attachTilt(grid.querySelectorAll(".team-card"));
    staggerRevealTeamCards();
}

// Fade-up + zoom, one by one, as the grid scrolls into view
function staggerRevealTeamCards() {
    const cards = Array.from(document.querySelectorAll("#teamGrid .team-card"));
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const idx = cards.indexOf(entry.target);
                setTimeout(() => entry.target.classList.add("in-view"), idx * 90);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    cards.forEach(c => obs.observe(c));
}

function setupTeamSearchAndFilter() {
    const searchInput = document.getElementById("teamSearchInput");
    const filterBtns = document.querySelectorAll("#teamFilterBar .filter-pill");
    const emptyState = document.getElementById("teamEmptyState");
    let activeDept = "all";

    function applyFilters() {
        const term = searchInput.value.toLowerCase().trim();
        let anyVisible = false;
        document.querySelectorAll("#teamGrid .team-card").forEach((card, i) => {
            const m = TEAM_MEMBERS[i];
            const matchesDept = activeDept === "all" || m.dept === activeDept;
            const matchesTerm = !term || m.name.toLowerCase().includes(term) || m.role.toLowerCase().includes(term);
            const show = matchesDept && matchesTerm;
            card.classList.toggle("hidden-card", !show);
            if (show) anyVisible = true;
        });
        emptyState.style.display = anyVisible ? "none" : "block";
    }

    if (searchInput) searchInput.addEventListener("input", applyFilters);
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeDept = btn.dataset.dept;
            applyFilters();
        });
    });
}

// Lightweight floating particles, purely decorative, contained within the team section
function generateTeamParticles() {
    const container = document.getElementById("teamParticles");
    if (!container) return;
    const count = window.innerWidth < 600 ? 10 : 20;
    let html = "";
    for (let i = 0; i < count; i++) {
        const left = Math.random() * 100;
        const size = 3 + Math.random() * 5;
        const duration = 14 + Math.random() * 10;
        const delay = Math.random() * duration;
        const drift = Math.round(Math.random() * 80 - 40) + "px";
        html += `<span class="team-particle" style="left:${left}%; width:${size}px; height:${size}px; animation-duration:${duration}s; animation-delay:-${delay}s; --drift:${drift};"></span>`;
    }
    container.innerHTML = html;
}

/* ---------- Team profile modal ---------- */
function openTeamProfile(idx) {
    const m = TEAM_MEMBERS[idx];
    document.getElementById("teamModalBody").innerHTML = `
        <div class="team-modal-avatar"><span>${teamInitials(m.name)}</span></div>
        <h3>${m.name}</h3>
        <p class="team-modal-role">${m.role}</p>
        <p class="team-modal-bio">${m.bio}</p>
        <span class="team-dept-badge">${teamDeptLabel(m.dept)}</span>
    `;
    const modal = document.getElementById("teamProfileModal");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}
function closeTeamProfile() {
    const modal = document.getElementById("teamProfileModal");
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function setupTeamStatics() {
    const closeBtn = document.getElementById("teamModalClose");
    const modal = document.getElementById("teamProfileModal");
    if (closeBtn) closeBtn.addEventListener("click", closeTeamProfile);
    if (modal) modal.addEventListener("click", (e) => { if (e.target === modal) closeTeamProfile(); });

    const joinBtn = document.getElementById("joinTeamBtn");
    if (joinBtn) joinBtn.addEventListener("click", () => {
        showToast("Reach out on our WhatsApp group to join the team!", "fa-hand-sparkles");
        window.open(IMPORTANT_LINKS[0].url, "_blank");
    });
}

/* =========================================================================
   💧 RIPPLE EFFECT — applied globally via delegation, so it covers every button
   ========================================================================= */
document.addEventListener("click", (e) => {
    const btn = e.target.closest("button, a.btn-glow, a.download-btn");
    if (!btn) return;
    const computed = getComputedStyle(btn);
    if (computed.position === "static") btn.style.position = "relative";
    btn.style.overflow = btn.style.overflow || "hidden";

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const span = document.createElement("span");
    span.className = "ripple-span";
    span.style.width = span.style.height = size + "px";
    span.style.left = (e.clientX - rect.left - size / 2) + "px";
    span.style.top = (e.clientY - rect.top - size / 2) + "px";
    btn.appendChild(span);
    setTimeout(() => span.remove(), 650);
});

/* =========================================================================
   🖱️ MOTION ENGINE — cursor, magnetic, tilt, reveals, counters
   ========================================================================= */
function playHeroReveal() {
    const lines = document.querySelectorAll(".line-inner");
    const eyebrow = document.querySelector(".eyebrow.reveal-line");
    if (window.gsap) {
        gsap.to(eyebrow, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
        gsap.to(lines, { y: "0%", duration: 1, stagger: 0.12, ease: "power4.out", delay: 0.15 });
        gsap.to(".hero-sub, .hero-actions", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.5, stagger: 0.1 });
    } else {
        if (eyebrow) eyebrow.classList.add("in-view");
        lines.forEach((l, i) => setTimeout(() => l.style.transform = "translateY(0)", 150 + i * 120));
        document.querySelectorAll(".hero-sub, .hero-actions").forEach(el => el.classList.add("in-view"));
    }
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("in-view"); revealObserver.unobserve(entry.target); }
    });
}, { threshold: 0.12 });

function observeReveals() { document.querySelectorAll(".reveal-up:not(.in-view)").forEach(el => revealObserver.observe(el)); }

function observeCounters() {
    document.querySelectorAll(".stat-number").forEach(el => {
        if (el.dataset.counted) return;
        counterObserver.observe(el);
    });
}
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.dataset.counted = "1";
        const target = parseInt(el.getAttribute("data-target"), 10) || 0;
        const suffix = el.getAttribute("data-suffix") || "";
        const duration = 1200, start = performance.now();
        function frame(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (p < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
        counterObserver.unobserve(el);
    });
}, { threshold: 0.4 });

function attachTilt(nodeList) {
    nodeList.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width - 0.5;
            const py = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(700px) rotateX(${py * -6}deg) rotateY(${px * 6}deg) translateY(-4px)`;
        });
        card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
}

function setupCursor() {
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isTouch) { document.body.classList.add("no-custom-cursor"); return; }

    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    const label = document.getElementById("cursorLabel");
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
        dot.style.left = mouseX + "px"; dot.style.top = mouseY + "px";
    });
    (function tick() {
        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;
        ring.style.left = ringX + "px"; ring.style.top = ringY + "px";
        requestAnimationFrame(tick);
    })();

    // Delegated hover so dynamically-rendered buttons/cards get the cursor effect automatically
    document.addEventListener("mouseover", (e) => {
        const t = e.target.closest("[data-cursor-label]");
        if (t) { const text = t.getAttribute("data-cursor-label"); if (text) { label.textContent = text; ring.classList.add("cursor-hover"); } }
    });
    document.addEventListener("mouseout", (e) => {
        const t = e.target.closest("[data-cursor-label]");
        if (t) { ring.classList.remove("cursor-hover"); label.textContent = ""; }
    });
}

// Magnetic pull is applied once to the static nav/hero-level elements
document.querySelectorAll(".magnetic").forEach(el => {
    el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${relX * 0.25}px, ${relY * 0.25}px)`;
    });
    el.addEventListener("mouseleave", () => {
        el.style.transition = "transform 0.4s var(--ease-soft)";
        el.style.transform = "translate(0,0)";
        setTimeout(() => { el.style.transition = ""; }, 400);
    });
});

/* =========================================================================
   🌗 THEME PANEL — presets (dark/light/amoled/blue/green/purple) + custom accent
   ========================================================================= */
const THEME_KEY = "bcaHubTheme";
const CUSTOM_ACCENT_KEY = "bcaHubCustomAccent";

function setupThemeControl() {
    const toggleBtn = document.getElementById("themeToggle");
    const panel = document.getElementById("themePanel");
    const picker = document.getElementById("customAccentPicker");
    const resetBtn = document.getElementById("resetAccentBtn");
    const allSwatches = document.querySelectorAll(".swatch");

    function applyPreset(name) {
        document.documentElement.setAttribute("data-theme", name);
        localStorage.setItem(THEME_KEY, name);
        allSwatches.forEach(s => s.classList.toggle("active", s.dataset.themeName === name));
    }

    // Restore saved preset + any custom accent override on load
    applyPreset(localStorage.getItem(THEME_KEY) || "dark");
    const savedAccent = localStorage.getItem(CUSTOM_ACCENT_KEY);
    if (savedAccent) applyCustomAccent(savedAccent, false);

    allSwatches.forEach(btn => {
        btn.addEventListener("click", () => {
            applyPreset(btn.dataset.themeName);
            showToast(`${btn.textContent.trim()} theme applied`, "fa-palette");
        });
    });

    if (picker) {
        picker.addEventListener("input", (e) => applyCustomAccent(e.target.value, true));
    }
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            document.documentElement.style.removeProperty("--accent-a");
            document.documentElement.style.removeProperty("--accent-b");
            document.documentElement.style.removeProperty("--accent-a-soft");
            document.documentElement.style.removeProperty("--accent-b-soft");
            localStorage.removeItem(CUSTOM_ACCENT_KEY);
            showToast("Custom accent reset", "fa-rotate-left");
        });
    }

    if (toggleBtn && panel) {
        toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const open = panel.classList.toggle("open");
            toggleBtn.setAttribute("aria-expanded", open);
        });
        document.addEventListener("click", (e) => {
            if (!panel.contains(e.target) && e.target !== toggleBtn) panel.classList.remove("open");
        });
    }

    // Mobile menu duplicates the same preset swatches — wire those up the same way
    document.querySelectorAll("#navMobile .swatch").forEach(btn => {
        btn.addEventListener("click", () => applyPreset(btn.dataset.themeName));
    });
}

// Derives a second accent color by rotating hue ~35°, so a single color-pick still
// produces the studio's signature two-tone glow instead of one flat color everywhere.
function applyCustomAccent(hex, persist) {
    const rgb = hexToRgb(hex);
    if (!rgb) return;
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const secondary = hslToHex((hsl.h + 35) % 360, hsl.s, Math.min(hsl.l + 15, 90));

    document.documentElement.style.setProperty("--accent-a", hex);
    document.documentElement.style.setProperty("--accent-b", secondary);
    document.documentElement.style.setProperty("--accent-a-soft", `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.18)`);
    const rgb2 = hexToRgb(secondary);
    if (rgb2) document.documentElement.style.setProperty("--accent-b-soft", `rgba(${rgb2.r}, ${rgb2.g}, ${rgb2.b}, 0.18)`);

    if (persist) localStorage.setItem(CUSTOM_ACCENT_KEY, hex);
}

function hexToRgb(hex) {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return m ? { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) } : null;
}
function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; }
    else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            default: h = (r - g) / d + 4;
        }
        h *= 60;
    }
    return { h, s: s * 100, l: l * 100 };
}
function hslToHex(h, s, l) {
    s /= 100; l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const toHex = x => Math.round(255 * x).toString(16).padStart(2, "0");
    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

/* =========================================================================
   📜 ROTATING DISCLAIMER STRIP
   ========================================================================= */
const DISCLAIMER_MESSAGES = [
    { title: "Strictly Clear Legal Disclaimer", text: "⚠️ This portal is created solely for self-study and academic guidance. It does not promise exam success, nor does it promote or encourage any form of academic dishonesty or cheating. All materials provided are 100% free for educational use." },
    { title: "Short & Direct", text: "📢 Academic Help Only: Free study notes and practice resources for students. Strictly no guarantee of passing exams, and zero tolerance/support for unfair exam practices." },
    { title: "Free Resource & Self-Study Focus", text: "📚 Student Support Portal: All learning materials, notes, and practical guides are completely FREE for self-learning. This platform has no connection with exam passing guarantees or cheating activities." },
    { title: "University Guidelines Compliant", text: "🛡️ Educational content provided here is strictly for reference and skill enhancement. We do not support, endorse, or provide any means for exam malpractice or guaranteed results." },
    { title: "Exam Preparation & Fair Usage", text: "🎯 For Learning Purposes Only: Use these notes to boost your preparation. This site is purely a resource hub and does not offer shortcut solutions, guaranteed passing, or illicit exam help." }
];

function setupDisclaimerStrip() {
    const el = document.getElementById("disclaimerText");
    if (!el) return;
    let i = 0;
    function show() {
        el.style.opacity = "0";
        setTimeout(() => {
            const d = DISCLAIMER_MESSAGES[i];
            el.innerHTML = `<strong class="disclaimer-title">${d.title}:</strong> ${d.text}`;
            el.style.opacity = "1";
            i = (i + 1) % DISCLAIMER_MESSAGES.length;
        }, 400);
    }
    show();
    setInterval(show, 8000);
}

/* =========================================================================
   🔎 QUICK-SEARCH DROPDOWN (instant preview, full results still on the page below)
   ========================================================================= */
function setupQuickSearch() {
    const input = document.getElementById("liveSearchInput");
    const dropdown = document.getElementById("quickSearchDropdown");
    const clearBtn = document.getElementById("searchClearBtn");
    if (!input || !dropdown) return;

    input.addEventListener("input", () => {
        const term = input.value.trim();
        clearBtn.classList.toggle("visible", term.length > 0);
        if (term.length < 2) { dropdown.classList.remove("open"); return; }

        const hits = searchResources(term).slice(0, 6);
        if (!hits.length) {
            dropdown.innerHTML = `<div class="quick-search-empty">No matches for "${term}"</div>`;
        } else {
            dropdown.innerHTML = hits.map(h => `
                <div class="quick-search-item" onclick="trackRecentView('${esc(h.title)}', '${esc(h.url)}', '${esc(h.sem)}', '${esc(h.sub)}'); openPremiumModal('${esc(h.title)}', '${esc(h.url)}'); document.getElementById('quickSearchDropdown').classList.remove('open');">
                    <strong>${h.title}</strong>
                    <small>${h.sem} &bull; ${h.sub}</small>
                </div>
            `).join('') + `<span class="quick-search-more">Press Enter to see all results</span>`;
        }
        dropdown.classList.add("open");
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") dropdown.classList.remove("open");
    });

    clearBtn.addEventListener("click", () => {
        input.value = "";
        clearBtn.classList.remove("visible");
        dropdown.classList.remove("open");
        renderHomeDashboard();
        input.focus();
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-box")) dropdown.classList.remove("open");
    });
}

// Shared by the quick-search dropdown and the full search view
function searchResources(term) {
    const t = term.toLowerCase();
    const results = [];
    ACADEMIC_DATABASE.forEach(sem => {
        if (sem.status === "under-development") return;
        const cleanSemName = sem.semesterName.replace(/<br>.*/i, '').trim();
        sem.subjects.forEach(sub => {
            if (sub.status === "under-development") return;
            ['notes', 'pdfs', 'previousYearPapers', 'guessPapers', 'assignments', 'practicals', 'videoLinks'].forEach(key => {
                (sub[key] || []).forEach(item => {
                    if (item.title && (item.title.toLowerCase().includes(t) || sub.name.toLowerCase().includes(t))) {
                        results.push({ title: item.title, url: item.url, sem: cleanSemName, sub: sub.name });
                    }
                });
            });
        });
    });
    return results;
}

/* =========================================================================
   🧭 NAVBAR + BACK TO TOP
   ========================================================================= */
function setupNavbar() {
    const nav = document.querySelector(".navbar");
    const ticker = document.getElementById("tickerBar");
    const toggle = document.getElementById("navToggle");
    const mobileMenu = document.getElementById("navMobile");
    let lastY = window.scrollY;

    window.addEventListener("scroll", () => {
        const y = window.scrollY;
        const hide = y > lastY && y > 200;
        nav.classList.toggle("nav-hidden", hide);
        if (ticker) ticker.style.opacity = hide ? "0" : "1";
        lastY = y;
        document.getElementById("backToTop").classList.toggle("visible", y > 500);
    });

    toggle.addEventListener("click", () => {
        const open = mobileMenu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open);
    });
}

document.getElementById("backToTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* =========================================================================
   🕒 FOOTER
   ========================================================================= */
function updateFooter() {
    document.getElementById("footerYear").textContent = new Date().getFullYear();
    document.getElementById("footerTime").textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/* =========================================================================
   🔒 BASIC COPY / INSPECT DETERRENCE
   Note: this only discourages casual copying — it cannot make client-side
   HTML/CSS/JS truly unreadable, since the browser must download and run it
   to display the page. See the message after this file for details.
   ========================================================================= */
document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("keydown", (e) => {
    const key = e.key ? e.key.toUpperCase() : "";
    if (key === "F12") { e.preventDefault(); return; }
    if (e.ctrlKey && e.shiftKey && (key === "I" || key === "J" || key === "C")) { e.preventDefault(); return; }
    if (e.ctrlKey && (key === "U" || key === "S")) { e.preventDefault(); return; }
    if ((e.ctrlKey || e.metaKey) && key === "P" && !e.target.closest("#premiumFileModal, #teamProfileModal")) { e.preventDefault(); return; }
});

document.addEventListener("dragstart", (e) => {
    if (e.target.closest("img, .team-avatar-svg")) e.preventDefault();
});

// Text selection is only blocked for decorative/UI text — inputs, resource titles,
// and notice text stay selectable so search boxes and copy-able info still work.
document.addEventListener("selectstart", (e) => {
    if (e.target.closest("input, textarea, .item-title, .notice-card, .quick-search-item")) return;
    if (e.target.closest(".hero-headline, .team-heading, .navbar, .nav-mobile")) e.preventDefault();
});
