import { Course, Testimonial, USPItem } from '../types';

export const COURSES: Course[] = [
  // Basic & Diploma Courses
  {
    id: 'bcc',
    name: 'Basic Computer Course (BCC)',
    code: 'BCC-01',
    category: 'basic',
    duration: '3 Months',
    eligibility: '10th Pass or equivalent',
    shortDescription: 'Master fundamental computer operations, office applications, and internet essentials.',
    description: 'Perfect for beginners, this course provides a strong foundation in computer operations. You will learn to navigate operating systems, use office productivity suites, search the internet safely, and handle basic security and email communication.',
    keyTopics: [
      'Computer Fundamentals & OS (Windows)',
      'MS Office Suite (Word, PowerPoint)',
      'Internet Essentials & Safe Browsing',
      'Email Etiquette & Communication',
      'Basic Hardware & Troubleshooting Concept'
    ],
    icon: 'Monitor',
    fee: '₹1,500/Month',
    careerOpportunities: ['Office Assistant', 'Data Entry Operator', 'Front Desk Executive', 'Customer Support Associate']
  },
  {
    id: 'dca',
    name: 'Diploma in Computer Applications (DCA)',
    code: 'DCA-02',
    category: 'basic',
    duration: '6 Months',
    eligibility: '10th / 12th Pass',
    shortDescription: 'A structured 6-month program covering office productivity, accounting, and visual tools.',
    description: 'This comprehensive diploma covers MS Office at an intermediate level, database management concepts, financial accounting basics, and internet publishing. Designed to make you job-ready for modern office administration.',
    keyTopics: [
      'Operating Systems (Windows/Linux Intro)',
      'Advanced MS Office (Word, Excel, PPT)',
      'Database Concepts using MS Access',
      'Introduction to Financial Accounting (Tally Basic)',
      'Graphic Design Basics (Photoshop & CorelDraw)'
    ],
    icon: 'BookOpen',
    popular: true,
    fee: '₹1,800/Month',
    careerOpportunities: ['Computer Operator', 'Admin Assistant', 'Account Assistant', 'Documentation Specialist']
  },
  {
    id: 'adca',
    name: 'Advanced Diploma in Computer Applications (ADCA)',
    code: 'ADCA-03',
    category: 'basic',
    duration: '12 Months',
    eligibility: '12th Pass / Graduate',
    shortDescription: 'Our most prestigious 1-year diploma covering office applications, web tech, accounting, and graphics.',
    description: 'The ADCA is designed for individuals seeking complete mastery of office technologies, financial database tools, programming concepts, and digital design. It combines multiple certificates into an industry-grade package.',
    keyTopics: [
      'Semester 1: Computer Fundamentals, OS, MS Office (Advanced Excel), HTML/CSS',
      'Semester 2: Financial Accounting with Tally Prime + GST, DTP (Photoshop, CorelDraw)',
      'Semester 3: Programming Concepts (C/C++ or Python basics)',
      'Semester 4: System Maintenance, Project Work & Soft Skills Training'
    ],
    icon: 'Award',
    popular: true,
    fee: '₹2,000/Month',
    careerOpportunities: ['System Administrator', 'Office Manager', 'Graphic & DTP Designer', 'Technical Support Specialist']
  },
  // Professional & Accounting
  {
    id: 'tally-gst',
    name: 'Tally Prime with GST',
    code: 'TALLY-01',
    category: 'accounting',
    duration: '3 Months',
    eligibility: '12th Pass (Commerce preferred, but open to all)',
    shortDescription: 'Become a certified GST and accounting expert with modern Tally Prime hands-on lessons.',
    description: 'This professional course bridges the gap between accounting theory and digital application. Learn journal entries, ledger management, banking reconciliations, payroll, inventory tracking, and GST returns filing (CGST, SGST, IGST).',
    keyTopics: [
      'Double Entry System & Accounting Concepts',
      'Company Creation & Ledger Configuration in Tally Prime',
      'Inventory Management & Stock Categories',
      'GST Activation, E-Way Bill, and GST Returns (GSTR-1, 2, 3B)',
      'Payroll Management & TDS/TCS'
    ],
    icon: 'Calculator',
    popular: true,
    fee: '₹2,500/Month',
    careerOpportunities: ['Junior Accountant', 'Tally Operator', 'Taxation Assistant', 'Billing Executive']
  },
  {
    id: 'adv-excel',
    name: 'Advanced Excel & Data Analysis',
    code: 'EXCEL-02',
    category: 'accounting',
    duration: '2 Months',
    eligibility: 'Basic knowledge of MS Excel',
    shortDescription: 'Master formulas, dynamic dashboards, pivot tables, and VBA automation.',
    description: 'Excel is the backbone of business decision-making. Learn to write complex nested formulas, manipulate thousands of records with Pivot Tables, create beautiful visual dashboards, and automate tasks with macros.',
    keyTopics: [
      'Advanced Formulas (VLOOKUP, HLOOKUP, XLOOKUP, INDEX/MATCH)',
      'Pivot Tables, Slicers, and Dynamic Charts',
      'Data Cleaning, Sorting, and Power Query basics',
      'Interactive Dashboard Design for Business Reports',
      'Introduction to Macros & VBA Automation'
    ],
    icon: 'FileSpreadsheet',
    fee: '₹2,000/Month',
    careerOpportunities: ['Data Analyst', 'MIS Executive', 'Business Analyst', 'Reporting Analyst']
  },
  {
    id: 'fin-accounting',
    name: 'Financial Accounting & Banking',
    code: 'FIN-03',
    category: 'accounting',
    duration: '4 Months',
    eligibility: '12th Pass or Graduate',
    shortDescription: 'Comprehensive manual and computerized accounting course for banking and finance aspirants.',
    description: 'Learn standard business accounting methods from scratch. Covers double-entry journals, ledgers, trial balances, and financial statement generation alongside digital tools, online banking operations, and tax fundamentals.',
    keyTopics: [
      'Fundamentals of Financial Accounting',
      'Preparation of Balance Sheets & Profit & Loss Statements',
      'Banking Operations & Reconciliation (BRS)',
      'Taxation Systems & Auditing Basics',
      'Computerized Accounting Integration'
    ],
    icon: 'Wallet',
    fee: '₹2,200/Month',
    careerOpportunities: ['Accounts Officer', 'Financial clerk', 'Cashier / Teller', 'Audit Associate']
  },
  // Programming & Development
  {
    id: 'python',
    name: 'Python Programming',
    code: 'PY-01',
    category: 'programming',
    duration: '3 Months',
    eligibility: '10th / 12th Pass with basic math skills',
    shortDescription: 'Learn Python from syntax basics to file handling, OOP, and data analytics libraries.',
    description: 'Learn one of the world\'s most popular and versatile programming languages. This course teaches algorithmic thinking, core syntax, object-oriented programming (OOP), file manipulation, and introduces you to libraries like Pandas and Matplotlib.',
    keyTopics: [
      'Python Syntax, Variables, and Data Types',
      'Control Flow (If-Else, Loops) and Functions',
      'Data Structures (Lists, Tuples, Dictionaries)',
      'Object-Oriented Programming (Classes & Inheritance)',
      'File Handling & Introduction to Data Science Libraries'
    ],
    icon: 'Terminal',
    fee: '₹3,000/Month',
    careerOpportunities: ['Python Developer Trainee', 'Software Support Analyst', 'Data Specialist', 'QA Engineer']
  },
  {
    id: 'web-dev',
    name: 'Full-Stack Web Development',
    code: 'WEB-02',
    category: 'programming',
    duration: '6 Months',
    eligibility: '12th Pass / College Students',
    shortDescription: 'Build beautiful responsive websites and full web applications using HTML, CSS, JS, and React.',
    description: 'A modern, intensive curriculum designed to turn students into capable developers. Starting from semantic HTML5 and responsive CSS layout engines, we advance into modern ES6+ JavaScript and dynamic React.js application design.',
    keyTopics: [
      'HTML5, Semantic Tags, CSS3 Grid & Flexbox',
      'Responsive Web Design & CSS Frameworks (Tailwind CSS)',
      'Modern JavaScript (ES6+, DOM, Fetch API, Async/Await)',
      'React.js Component Architecture, State & Hooks',
      'Git, GitHub, and Frontend Deployment Workflows'
    ],
    icon: 'Code',
    popular: true,
    fee: '₹3,500/Month',
    careerOpportunities: ['Frontend Developer', 'Web Designer', 'React Developer', 'UI Specialist']
  },
  {
    id: 'c-cpp',
    name: 'C & C++ Programming',
    code: 'CPP-03',
    category: 'programming',
    duration: '3 Months',
    eligibility: 'Basic Computer knowledge',
    shortDescription: 'The gold standard for learning memory management, structures, pointers, and core OOP.',
    description: 'Master computer science fundamentals. Learning C & C++ forces you to understand memory allocation, pointers, compiler workflows, and system optimization, forming a superb stepping stone for high-level software engineering.',
    keyTopics: [
      'Introduction to C Syntax & Data Types',
      'Pointers, References, and Memory Management',
      'Structures, Unions, and File Streams in C',
      'C++ Object-Oriented Principles (Polymorphism, Encapsulation)',
      'Standard Template Library (STL) & Data Structures Intro'
    ],
    icon: 'Cpu',
    fee: '₹2,500/Month',
    careerOpportunities: ['Embedded Systems Trainee', 'System Software Associate', 'C++ Developer', 'Academic Instructor']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rahul Sharma',
    role: 'Senior MIS Executive',
    company: 'Wipro Limited',
    review: 'Unique Computer Center completely changed my career path. I joined the Advanced Excel and Tally Prime course. The practical, daily lab assignments and the personal attention from the faculty helped me clear my technical round at Wipro in the very first attempt.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&fit=crop&q=80',
    courseTaken: 'Advanced Excel & Tally Prime',
    year: '2025'
  },
  {
    id: 't2',
    name: 'Priya Patel',
    role: 'Frontend Developer',
    company: 'Cognizant',
    review: 'The Web Development course here is outstanding. Unlike other institutes that just read slides, Unique Computer Center focuses entirely on hands-on project building. I built a real portfolio that won me a scholarship and ultimately my current job.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&fit=crop&q=80',
    courseTaken: 'Full-Stack Web Development',
    year: '2024'
  },
  {
    id: 't3',
    name: 'Amit Kumar',
    role: 'Accounts Officer',
    company: 'Axis Bank',
    review: 'I completed my DCA and ADCA diploma from Unique Computer Center. The fees are highly affordable, and the lab infrastructure with high-speed internet is fantastic. The mock interviews conducted near graduation boosted my confidence immensely.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&fit=crop&q=80',
    courseTaken: 'ADCA (Advanced Diploma)',
    year: '2025'
  },
  {
    id: 't4',
    name: 'Anjali Verma',
    role: 'Graphic Designer',
    company: 'Freelance & PrintMedia',
    review: 'The CorelDraw and Photoshop training under ADCA was incredibly deep. The trainers have real industry experience and helped me understand branding, typography, and print requirements. Best decision of my professional life!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&fit=crop&q=80',
    courseTaken: 'Graphic Design (ADCA module)',
    year: '2026'
  }
];

export const USPS: USPItem[] = [
  {
    id: 'usp-1',
    title: 'ISO & Government Certified',
    description: 'Gain valuable, globally recognized certificates that enhance your resume and pass government job verification standard checks.',
    icon: 'Award'
  },
  {
    id: 'usp-2',
    title: '1:1 Computer Ratio Labs',
    description: 'Every student gets their own modern computer workstation during lab hours. Practical, self-paced learning is our cornerstone.',
    icon: 'Laptop'
  },
  {
    id: 'usp-3',
    title: 'Highly Certified Trainers',
    description: 'Learn from active industry professionals and certified educators with 8+ years of expertise in software, finance, and design.',
    icon: 'Users'
  },
  {
    id: 'usp-4',
    title: 'Affordable Fees & Instalments',
    description: 'Quality technical education shouldn\'t break the bank. Pay in easy monthly instalments with zero interest or processing overhead.',
    icon: 'IndianRupee'
  },
  {
    id: 'usp-5',
    title: 'Regular Mock Tests & Exams',
    description: 'Evaluate your learning through weekly practice sessions, mock exams, and individual design portfolio evaluations.',
    icon: 'ClipboardCheck'
  },
  {
    id: 'usp-6',
    title: 'Placement Assistance',
    description: 'Access a dedicated placement cell offering resume drafting support, HR mock interviews, and direct recruitment drives with partners.',
    icon: 'Briefcase'
  }
];

export const STATS = [
  { value: '12+', label: 'Years of Excellence' },
  { value: '5,000+', label: 'Successful Graduates' },
  { value: '15+', label: 'Industry Courses' },
  { value: '98%', label: 'Practical Satisfaction' }
];

export const CONTACT_INFO = {
  address: '1st Floor, Unique Plaza, Near Main City Square, Sector-5, Tech Hub, Pin-800001',
  phone: '+91 98765 43210 / +91 91234 56789',
  email: 'info@uniquecomputercenter.com',
  operatingHours: [
    { days: 'Monday - Saturday', hours: '08:00 AM - 08:00 PM' },
    { days: 'Sunday', hours: '09:00 AM - 01:00 PM (Practice Labs Only)' }
  ],
  mapEmbedUrl: 'https://maps.google.com/maps?q=Unique%20Computer%20Center%20Sector-5%20Tech%20Hub&t=&z=14&ie=UTF8&iwloc=&output=embed'
};

export const DIRECTOR_MESSAGE = {
  name: 'Er. Rajesh K. Mehta',
  title: 'Founder & Managing Director',
  credentials: 'B.Tech (CSE), MBA, 15+ Yrs Industry Experience',
  avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&fit=crop&q=80',
  message: 'At Unique Computer Center, we believe that digital literacy is not a luxury, but a fundamental necessity for progress. Our mission has always been to deliver top-quality, modern computer skills at an investment that is accessible to every section of society. We do not just teach syntax; we cultivate problem-solving minds, building careers through state-of-the-art practical exposure. I welcome you to step into our institute and take a decisive step towards an empowered, digital future.'
};
