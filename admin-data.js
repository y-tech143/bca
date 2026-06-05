// =========================================================================
// 📢 SECTION 1: LIVE NOTICE BOARD (NOTICE BOARD MANAGEMENT)
// =========================================================================
// 💡 KAISE USE KAREIN?
// Naya notice daalna hai? To bas niche diye gaye block ko copy kijiye, 
// comma (,) lagakar paste kijiye aur text badal lijiye.
//
// -> important: true  (Likhne se notice par RED color ka "Exam/Alert" badge aayega)
// -> important: false (Likhne se notice par BLUE color ka "Syllabus/Update" badge aayega)

const ADMIN_NOTICES = [
  ,
  {
        title: "JOIN WHATSAAP FOR UPDATES ",
        tag: "Live now ",
        important: true
    },
   {
        title: "IMPORTANT DIGITAL ENHANCMENET SEM 2ND ",
        date: "June 5, 2026",
        tag: "Live now ",
        important: true
    },
  {
        title: "IMPORTANT QUESTION HINDI SEM 2ND ",
        date: "June 3, 2026",
        tag: "Live now ",
        important: true
    },
   {
        title: "🔥 Sem 2nd Update: OS, DBMS & COA Notes & PYQs Are Now Live!",
        date: "May 27, 2026",
        tag: "UPDATE",
        important: true // Isse red badge aayega taaki sabki nazar pade
    },
     {
        title: "Syllabus for 1st 2nd Semesters ",
        date: "May 27, 2026",
        tag: "LIVE NOW",
        important: true // Isse red badge aayega taaki sabki nazar pade
    },
    
    {
        title: "BCA Sem 2nd Main Examination Forms 2026 Are Open - Last Date May 28",
        date: "May 26, 2026",
        tag: "Exam",
        important: true
    },
    {
        title: "BCA Sem 2nd Main Examination Forms 2026 Are Open - Last Date May 25",
        date: "May 20, 2026",
        tag: "Exam",
        important: true
    },
     {
        title: "Website Under Devlopment",
        date: "April 15, 2026",
        tag: "UPDATE",
        important: false
    }
   // <-- Agla notice jodne se pehle yahan comma (,) zaroor lagayein
];



// =========================================================================
// 📚 SECTION 2: BCA FULL SEMESTER & SUBJECTS DATABASE (6 SEMESTERS)
// =========================================================================
// 💡 KAISE USE KAREIN (ADMIN EASY GUIDE)?
//
// 1. Agar kisi subject me Naya Notes/PDF daalna hai:
//    Uss subject ke andar "notes:" ya "pdfs:" ke square brackets [ ] dhoondhein.
//    Wahan par bas aise likhein -> { title: "Aapke Notes Ka Naam", url: "link_ya_path" }
//
// 2. Local File vs Online Link:
//    - Agar aapne file folder me rakhi hai: "notes/c-unit1.pdf"
//    - Agar aapke paas Google Drive/Mega ka link hai: "https://drive.google.com/..."
//
// 3. Agar koi category khali rakhni hai:
//    Usko aise hi chhod dein -> [] (Website par automatically dikhayega: "No resource links uploaded yet.")

const ACADEMIC_DATABASE = [
    
    // ==================== BCA SEMESTER 1 ====================
    {
        semesterName: "BCA Semester 1 <br> Work in progress",
         status: "under-development", // Bas ye line likhte hi aapka custom UI show ho jayega
         semesterSyllabus: [
        { title: "All Subject", url: "https://drive.google.com/file/d/1B1Qkak_kw08hrVx8qUEa42IFIAr4UYut/preview" },
    ],
         // Bas ye line likhte hi aapka custom UI show ho jayega  
      //   { title: "", url: "" },
        subjects: [
            {
                name: "Computer Fundamentals & Office Automation",
                icon: "fa-desktop", // Icon badalne ke liye FontAwesome icon class use karein
                notes: [
                    { title: "Unit 1: Input Output Devices & Memory Architecture", url: "notes/sem1/cfoa-u1.pdf" },
                    { title: "Unit 2: MS Office Tools (Word, Excel, PPT) Guide", url: "notes/sem1/ms-office.pdf" }
                ],
                previousYearPapers: [], // <-- Saare Semesters ke liye khali key ready hai
                pdfs: [{ title: "Computer Fundamentals Textbook PDF", url: "pdfs/sem1/cfoa-book.pdf" }],
                guessPapers: [],
                assignments: [{ title: "Assignment 1: Component Block Diagram", url: "pdfs/sem1/cfoa-assign.pdf" }],
                practicals: [{ title: "MS Excel & Word Lab Practical File", url: "pdfs/sem1/cfoa-lab.pdf" }],
                videoLinks: [{ title: "Computer Architecture Video Playlist", url: "https://youtube.com/sample-cfoa" }]
            },
            {
                name: "Programming Principles & C Language",
                icon: "fa-code",
                notes: [
                    { title: "Unit 1: Flowcharts, Algorithms & Intro to C", url: "notes/sem1/c-unit1.pdf" },
                    { title: "Unit 2: Functions, Arrays and Strings Concept", url: "notes/sem1/c-unit2.pdf" }
                ],
                previousYearPapers: [],
                pdfs: [{ title: "Let Us C - Yashavant Kanetkar Reference Book", url: "pdfs/sem1/let-us-c.pdf" }],
                guessPapers: [{ title: "C Language Most Important Guess Paper 2026", url: "pdfs/sem1/c-guess.pdf" }],
                assignments: [],
                practicals: [{ title: "Final C Programming Lab Solved File", url: "pdfs/sem1/c-lab.pdf" }],
                videoLinks: []
            },
            {
                name: "Principle of Management",
                icon: "fa-users",
                notes: [{ title: "Planning & Organizing Strategy Notes", url: "notes/sem1/pom-u1.pdf" }],
                previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
            }
        ]
    },

    // ==================== BCA SEMESTER 2 ====================
    // ==================== BCA SEMESTER 2 ====================
{
    semesterName: "BCA Semester 2", // <--- Yahan niche add karein
   semesterName: "BCA Semester 2", 
    semesterSyllabus: "https://drive.google.com/file/d/1B1Qkak_kw08hrVx8qUEa42IFIAr4UYut/preview", 
   
    subjects: [
        {
                name: "Operating System (OS)",
                icon: "fa-sitemap",
                notes: [
                     { title: "Syllabus for 1st 2nd Semesters ", url: "https://docs.google.com/document/d/1B1Qkak_kw08hrVx8qUEa42IFIAr4UYut/preview" },
                    { title: "Operating System ", url: "https://drive.google.com/file/d/1QW3PKe2-8ay2DOO2v9kWqZ0yzMVyuTf0/preview" },
                    { title: "LINUX OPERATING SYSTEM  ", url: "https://docs.google.com/document/d/15ENbzIvsj5gnNVjCThGorlVFocx7hqmz/preview" },
                    { title: "UNIT NO: - 4  MEMORY MANAGEMENT  ", url: "https://drive.google.com/file/d/1wsjn0DRSFwfONDF0RxY28UqCDllSOrLa/preview" },
                    { title: "File Concepts — Operations & Attributes", url: "https://docs.google.com/document/d/14wgZgyKyCZ6pGcPHwcjz7PUbph7MepKA/preview" },
                    { title: "os unit 3rd Device Management ", url: "https://docs.google.com/document/d/1ogRPjAjea1s3UEWRlArP9sumV7KzCWSZ/preview" },
                   { title: "LINUX OPERATING SYSTEM  ", url: "https://docs.google.com/document/d/15ENbzIvsj5gnNVjCThGorlVFocx7hqmz/preview" },
                ],
                previousYearPapers: [  // <-- FIXED: 'PYQQuestions' ko badal kar hamari nayi key 'previousYearPapers' kar diya hai!
                       { title: "BCA Sem All Subject PYQ ", url: "https://drive.google.com/file/d/1X3MoycBM4-eCS6s2aad4jTmchXE0Uory/preview" },
                     { title: "BCA sem 2nd Operating system PYQ 2018", url: "https://drive.google.com/file/d/1ZJkpp3cTqDP8QfwSSlCc0A89p69HIXlr/preview" },
                     { title: "", url: "" },
                    
                ],
                pdfs: [],
                guessPapers: [],       // <-- Guess Papers apni jagah alag se safe hai!
                assignments: [],
                practicals: [],
                videoLinks: []
            },
            {
    name: "Database Management System (DBMS)",
    icon: "fa-database",
    notes: [
         { title: "Syllabus for 1st 2nd Semesters ", url: "https://docs.google.com/document/d/1B1Qkak_kw08hrVx8qUEa42IFIAr4UYut/preview" },
        { title: "DBMS NOTES", url: "https://drive.google.com/file/d/1ZvGFRYP4p7V1Ydqp3yG4TOk4Fo-3OPsv/preview" },
        { title: "SQL DELETE & WHERE CLAUSE", url: "https://drive.google.com/file/d/1P6VmgadZzUcF4HGACw4XrVe-bgCD9QTe/preview" } // <-- Naya Notes Link ekdum sahi jagah par!
    ],
    previousYearPapers: [
          { title: "BCA Sem All Subject PYQ ", url: "https://drive.google.com/file/d/1X3MoycBM4-eCS6s2aad4jTmchXE0Uory/preview" },
        { title: "r", url: "h" }
    ], 
    pdfs: [
         { title: "DatabaseManagementSystemBook ", url: "https://drive.google.com/file/d/1wX6lZAQFsorm3iiQEQsBIE2bITrEPWP3/preview" }
    ], 
    guessPapers: [
        { title: "", url: "" }
    ], 
    assignments: [], 
    practicals: [
        { title: "SQL Queries Lab Manual", url: "pdfs/sem2/dbms-sql.pdf" }
    ], 
    videoLinks: []
},

           {
    name: "Computer Organization & Architecture (COA)",
    icon: "fa-network-wired", // Premium architectural network icon
    notes: [
         { title: "Syllabus for 1st 2nd Semesters ", url: "https://docs.google.com/document/d/1B1Qkak_kw08hrVx8qUEa42IFIAr4UYut/preview" },
          { title: "COA unit 1 ", url: "https://docs.google.com/document/d/1Yv456bL3ft4UBgdTtGJOEnK6Amm1gvW2/preview" },
         { title: "COA unit 2 ", url: "https://docs.google.com/document/d/15DztE0v38XnNeplo9cWiPL5vFBOpE7-l/preview" },
         { title: "COA unit 3 ", url: "https://docs.google.com/document/d/1UGHxz2So6rguE1eJyIkrQ8lx_qBpdbLS/preview" },
        { title: "Computer Organization and Architecture-notes", url: "https://drive.google.com/file/d/1wQrcp_JIjYSeckKXLX7HwU8iTisBduWb/preview" }
    ],
    previousYearPapers: [
          { title: "BCA Sem All Subject PYQ ", url: "https://drive.google.com/file/d/1X3MoycBM4-eCS6s2aad4jTmchXE0Uory/preview" },
    ], 
    pdfs: [], 
    guessPapers: [], 
    assignments: [], 
    practicals: [], 
    videoLinks: []
    
},
{
            name: "Hindi",
            icon: "fa-pen-nib", // Hindi ke liye kalam (pen)
             
            notes: [
                  { title: "IMPORTANT QUESTION HINDI", url: "https://docs.google.com/document/d/1h5QkXM0-kQVSoFsvvQcgm5_buaifLDlw/preview" },
            ], 
  previousYearPapers: [
      { title: "संपूर्ण हल प्रश्न-पत्र अनिवार्य हिंदी (साहित्य) — सेमेस्टर II (परीक्षा 2025)", url: "https://docs.google.com/document/d/17yW5YZIFaQDqgDsK2_8uFRD_yfekdRvo/preview" },
  ], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
        },
        {
            name: "English",
            icon: "fa-book-atlas", // English literature/books ke liye
            status: "under-development",
            notes: [], previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
        },

        {
            name: "Digital Enhancement",
            icon: "fa-microchip", // Digital aur tech ke liye chip icon
            
            notes: [{ title: "DIGITAL ENHACMENT QUESTIONS BANK ", url: "https://docs.google.com/document/d/1ZZsTDAYF5W_N7oV28toX9FLiEjXu8DKX/preview" },], 
            previousYearPapers: [  { title: "previousYearPapers 2025", url: "https://rrbmuniv.cespl.co.in/uploads/file/VAC-52T-002-Digital%20Enhancement%20SET%20-%20A.pdf" },
                 { title: "previousYearPapers 2025 SET 2", url: "https://rrbmuniv.cespl.co.in/uploads/file/VAC-52T-002-Digital%20Enhancement%20SET%20-%20A.pdf" },
            ],
             pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
        },
{
            name: "Introduction to Office Productivity Software",
            icon: "fa-file-excel", // Excel/Office tools ke liye
            status: "under-development",
            notes: [
                { title: "MS Office Notes", url: "notes/sem1/ms-office.pdf" }
            ],
            previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
        }


        ]
    },

    // ==================== BCA SEMESTER 3 ====================
    {
        semesterName: "BCA Semester 3 <br> Work in progress ",
        status: "under-development", // Bas ye line likhte hi aapka custom UI show ho jayega
        subjects: [
            {
                name: "Object Oriented Programming Using C++",
                icon: "fa-cubes",
                notes: [{ title: "Polymorphism, Inheritance & Encapsulation Guide", url: "notes/sem3/cpp-oops.pdf" }],
                previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], 
                practicals: [{ title: "C++ Solved Program Lab File", url: "pdfs/sem3/cpp-file.pdf" }], 
                videoLinks: []
            },
            {
                name: "Operating System (OS)",
                icon: "fa-sliders",
                notes: [{ title: "CPU Scheduling Algorithms (FCFS, SJF, Round Robin)", url: "notes/sem3/os-scheduling.pdf" }],
                previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
            },
            {
                name: "Web Technology - HTML, CSS & JS",
                icon: "fa-html5",
                notes: [{ title: "JavaScript Dom Manipulation Essentials", url: "notes/sem3/js-dom.pdf" }],
                previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], 
                practicals: [{ title: "Responsive Web Design Portfolio Practical", url: "pdfs/sem3/web-lab.pdf" }], 
                videoLinks: []
            }
        ]
    },

    // ==================== BCA SEMESTER 4 ====================
    {
        semesterName: "BCA Semester 4 <br> Work in progress",
        status: "under-development", // Bas ye line likhte hi aapka custom UI show ho jayega
        subjects: [
            {
                name: "Java Programming Language",
                icon: "fa-brands fa-java",
                notes: [{ title: "Java Exception Handling & Multithreading Notes", url: "notes/sem4/java-core.pdf" }],
                previousYearPapers: [], pdfs: [{ title: "Core Java Complete E-Book Standard Edition", url: "pdfs/sem4/java-book.pdf" }], 
                guessPapers: [], assignments: [], 
                practicals: [{ title: "Java Core Programs Compilation File", url: "pdfs/sem4/java-lab.pdf" }], 
                videoLinks: []
            },
            {
                name: "Computer Networks (CN)",
                icon: "fa-network-wired",
                notes: [{ title: "OSI Reference Model vs TCP/IP Layers Architecture", url: "notes/sem4/cn-osi.pdf" }],
                previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
            },
            {
                name: "Software Engineering",
                icon: "fa-diagram-project",
                notes: [{ title: "SDLC Models (Waterfall, Spiral & Agile Methodology)", url: "notes/sem4/sdlc.pdf" }],
                previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
            }
        ]
    },

    // ==================== BCA SEMESTER 5 ====================
    {
        semesterName: "BCA Semester 5 <br> Work in progress",
        status: "under-development", // Bas ye line likhte hi aapka custom UI show ho jayega
        subjects: [
            {
                name: "Python Web Development & Programming",
                icon: "fa-brands fa-python",
                notes: [
                    { title: "Unit 1: Python Basics, Lists, Tuples & Dictionaries", url: "notes/sem5/python-basics.pdf" },
                    { title: "Unit 2: Object Oriented Python & File Handling", url: "notes/sem5/python-oop.pdf" },
                ],
                previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], 
                practicals: [{ title: "Python Lab Programs Complete File", url: "pdfs/sem5/python-lab.pdf" }], 
                videoLinks: [{ title: "Python Full Course Walkthrough", url: "https://youtube.com/python-course" }],
            },
            {
                name: "Information Security & Cyber Laws",
                icon: "fa-shield-halved",
                notes: [{ title: "Cryptography, Firewalls & Indian IT Act 2000 Notes", url: "notes/sem5/cyber-security.pdf" }],
                previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
            },
            {
                name: "Cloud Computing Technologies",
                icon: "fa-cloud",
                notes: [{ title: "SaaS, PaaS, IaaS Deployment Model Configurations", url: "notes/sem5/cloud.pdf" }],
                previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], videoLinks: []
            }
        ]
    },

    // ==================== BCA SEMESTER 6 ====================
    {
        semesterName: "BCA Semester 6 <br> Work in progress",
        status: "under-development", // Bas ye line likhte hi aapka custom UI show ho jayega
        subjects: [
            {
                name: "Artificial Intelligence & Machine Learning",
                icon: "fa-brain",
                notes: [{ title: "Introduction to Neural Networks & Expert Systems", url: "notes/sem6/ai-intro.pdf" }],
                previousYearPapers: [], pdfs: [], guessPapers: [], assignments: [], practicals: [], 
                videoLinks: [{ title: "AI Basics for Beginners Video Guide", url: "https://youtube.com/ai-basics" }]
            },
            {
                name: "Major Capstone Project Viva Guide",
                icon: "fa-file-zipper",
                notes: [{ title: "How to Prepare Project Synopses and PPT Reports", url: "notes/sem6/project-guide.pdf" }],
                previousYearPapers: [], pdfs: [], guessPapers: [], 
                assignments: [{ title: "Sample SRS Document (Software Requirement Specification)", url: "pdfs/sem6/sample-srs.pdf" }], 
                practicals: [], videoLinks: []
            }
        ]
    }
];


const IMPORTANT_LINKS = [
   { 
        title: "Join BCA WhatsApp Group for Updates", 
        url: "https://chat.whatsapp.com/IGVGUkdRXvYLSB594flU1n" 
    },
      { 
        title: "Rajasthan University Exam Portal", 
        url: "https://erp.univraj.org/" 
    },
      { 
        title: "BCA SEM 2ND EXAM 2026 TIME TABLE ", 
        url: "https://del1.vultrobjects.com/ruptdata/newsDocs/newsDocs_1780489744.pdf" 
    },
    
];
// ==========================================================================
// ☢️ THE ULTIMATE NUCLEAR LOOP FIX (ZERO DEPENDENCY - 100% WORKING)
// ==========================================================================

function ultimateLinksEngine() {
    let container = document.getElementById("linksContainer");
    
    // 1. Agar dabba screen par hai hi nahi (User back aaya hai aur dabba ud gaya)
    if (!container) {
        // Notice board ko dhoondo jiske niche hume ise chipkana hai
        const noticeBoard = document.querySelector(".notice-box-wrapper") || 
                            document.querySelector(".updates-card") || 
                            document.getElementById("noticeBoard") ||
                            document.querySelector(".notice-board") ||
                            document.querySelector(".links-box-wrapper"); // Backup selectors

        if (noticeBoard) {
            let newBox = document.createElement("div");
            newBox.className = "links-box-wrapper";
            newBox.style.marginTop = "24px";
            newBox.style.setProperty('display', 'block', 'important');
            
            newBox.innerHTML = `
                <h3 class="links-box-title"><i class="fa-solid fa-link"></i> Important Links</h3>
                <div id="linksContainer" class="links-scroll-box"></div>
            `;
            
            // Notice board ke theek niche naya dabba insert karo
            noticeBoard.parentNode.insertBefore(newBox, noticeBoard.nextSibling);
            container = document.getElementById("linksContainer");
        }
    }

    // 2. Agar container mil gaya hai par wo khali pada hai, toh links render karo
    if (container && container.innerHTML.trim() === "") {
        if (typeof IMPORTANT_LINKS !== 'undefined' && IMPORTANT_LINKS.length > 0) {
            container.innerHTML = IMPORTANT_LINKS.map(link => `
                <a href="${link.url}" class="link-row glassmorphism" target="_blank">
                    <span>${link.title}</span>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            `).join('');
        } else {
            container.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem; padding: 10px;">No links available.</p>';
        }
    }
}

// ⏱️ AUTOMATIC HEARTBEAT LOOP: Har 500ms (aadhe second) me check karega
// Chahe aap back aao, home dabao, ya kuch bhi karo, aadhe second me links wapas aa jayenge!
setInterval(ultimateLinksEngine, 500);

// Background safety triggers
window.addEventListener("pageshow", ultimateLinksEngine);
document.addEventListener("DOMContentLoaded", ultimateLinksEngine);
