export type Language = 'en' | 'bn';

export interface TranslationDictionary {
  // Top Hotline Bar
  hotlineText: string;
  trackOrderStatus: string;
  directWhatsApp: string;
  adminPortalBtn: string;
  backToStudentWeb: string;

  // Nav
  home: string;
  services: string;
  portfolio: string;
  howItWorks: string;
  reviews: string;
  trackOrder: string;
  faq: string;
  team: string;
  ourTeam: string;
  about: string;
  aboutUs: string;
  contact: string;
  cart: string;
  empty: string;
  orderNow: string;

  // Team Section
  teamBadge: string;
  teamHeading: string;
  teamSubtitle: string;
  meetTheExperts: string;
  allSpecialists: string;
  filterSpecialty: string;
  viewProfile: string;
  bookSpecialist: string;
  specialistExperience: string;
  specialistProjects: string;
  specialistRating: string;
  specialistAvailability: string;

  // Hero
  heroBadge: string;
  heroTitle1: string;
  heroTitleHighlight: string;
  heroTitle2: string;
  heroSubtitle: string;
  heroBrowseBtn: string;
  heroDirectOrderBtn: string;
  heroStatStudents: string;
  heroStatStudentsLabel: string;
  heroStatSatisfaction: string;
  heroStatSatisfactionLabel: string;
  heroStatUniversities: string;
  heroStatUniversitiesLabel: string;
  heroStatTurnaround: string;
  heroStatTurnaroundLabel: string;

  // Pillars
  pillarsBadge: string;
  pillarsHeading: string;
  pillarsSubtitle: string;
  missionTitle: string;
  missionDesc: string;
  visionTitle: string;
  visionDesc: string;
  valuesTitle: string;
  whyNexoraTitle: string;
  whyNexoraDesc: string;

  // Problem Triage
  triageBadge: string;
  triageHeading: string;
  triageSubtitle: string;
  triageAll: string;
  triageClickToOrder: string;

  // Services
  servicesBadge: string;
  servicesHeading: string;
  servicesSubtitle: string;
  startingPrice: string;
  turnaround: string;
  addToCart: string;
  viewDetails: string;
  directOrder: string;
  allCategories: string;
  filterByDept: string;

  // Categories
  catDesign: string;
  catDev: string;
  catWordPress: string;
  catDataAnalysis: string;
  catStudent: string;

  // How It Works
  howItWorksBadge: string;
  howItWorksHeading: string;
  howItWorksSubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;

  // Reviews
  reviewsBadge: string;
  reviewsHeading: string;
  reviewsSubtitle: string;
  aggregateRating: string;
  basedOnReviews: string;
  verifiedStudent: string;
  writeReviewBtn: string;
  filterAllReviews: string;
  submitReview: string;

  // FAQ
  faqBadge: string;
  faqHeading: string;
  faqSubtitle: string;

  // Cart
  cartTitle: string;
  cartEmptyTitle: string;
  cartEmptySubtitle: string;
  supportTier: string;
  tierStandard: string;
  tierExpress: string;
  tierVip: string;
  urgencyFee: string;
  total: string;
  proceedToOrder: string;
  clearCart: string;
  removeItem: string;

  // Order Modal
  orderModalHeading: string;
  orderModalTitle: string;
  orderModalSubtitle: string;
  trackOrderHeading: string;
  trackOrderSubtitle: string;
  orderIdOrPhonePlaceholder: string;
  stepContact: string;
  stepAcademic: string;
  stepRequirements: string;
  fullName: string;
  fullNamePlaceholder: string;
  phoneNumber: string;
  phonePlaceholder: string;
  whatsappNumber: string;
  whatsappPlaceholder: string;
  universityName: string;
  selectUniversity: string;
  departmentName: string;
  selectDepartment: string;
  semesterOrBatch: string;
  semesterPlaceholder: string;
  courseTitle: string;
  coursePlaceholder: string;
  courseCode: string;
  courseCodePlaceholder: string;
  deadlineDate: string;
  problemDetails: string;
  problemDetailsPlaceholder: string;
  preferredContactMethod: string;
  uploadFiles: string;
  uploadFilesHint: string;
  confirmOrderBtn: string;
  cancelBtn: string;

  // Order Success
  orderSuccessTitle: string;
  orderSuccessSubtitle: string;
  orderIdLabel: string;
  whatsappCoordinatorBtn: string;
  whatsappCoordinatorHint: string;
  trackOrderBtn: string;
  backHomeBtn: string;

  // Order Tracker
  trackerTitle: string;
  trackerSubtitle: string;
  trackerInputPlaceholder: string;
  searchBtn: string;
  statusOrderReceived: string;
  statusMentorAssigned: string;
  statusStudentContacted: string;
  statusInProgress: string;
  statusDelivered: string;
  noOrderFound: string;
  noOrderFoundHint: string;
  orderDetails: string;
  assignedMentor: string;
  notYetAssigned: string;
  orderAmount: string;
  studentInfo: string;
  latestUpdates: string;

  // Write Review Modal
  writeReviewTitle: string;
  writeReviewSubtitle: string;
  yourRating: string;
  gradeOutcomeLabel: string;
  gradeOutcomePlaceholder: string;
  reviewCommentLabel: string;
  reviewCommentPlaceholder: string;
  submitReviewBtn: string;

  // Footer
  footerAbout: string;
  quickLinks: string;
  popularServices: string;
  directContact: string;
  confidentialMentorship: string;
  copyright: string;

  // Admin Portal
  adminHeaderTitle: string;
  adminHeaderSubtitle: string;
  adminStatTotalOrders: string;
  adminStatTodayOrders: string;
  adminStatInProgress: string;
  adminStatDelivered: string;
  adminStatTotalRevenue: string;
  adminStatAvgOrderValue: string;
  tabAllOrders: string;
  tabReviewsManagement: string;
  searchOrdersPlaceholder: string;
  filterStatusAll: string;
  orderTableId: string;
  orderTableStudent: string;
  orderTableUniversity: string;
  orderTableCourse: string;
  orderTableDeadline: string;
  orderTableMentor: string;
  orderTableAmount: string;
  orderTableStatus: string;
  orderTableAction: string;
  manageOrderBtn: string;
  editOrderTitle: string;
  saveChangesBtn: string;
  assignMentorLabel: string;
  updateStatusLabel: string;
  adminNoteLabel: string;
  deleteOrderConfirm: string;
}

export const DICTIONARY: Record<Language, TranslationDictionary> = {
  en: {
    // Top Hotline Bar
    hotlineText: 'Kraflyn Technologies • Digital Engineering & Data Lab: +880 1712-345678 (WhatsApp Support 24/7)',
    trackOrderStatus: 'Live Project Tracker',
    directWhatsApp: 'Direct WhatsApp',
    adminPortalBtn: 'Admin Dashboard',
    backToStudentWeb: '← Return to Public Site',

    // Nav
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio & Case Studies',
    howItWorks: 'Workflow',
    reviews: 'Client Testimonials',
    trackOrder: 'Track Project',
    faq: 'FAQ',
    team: 'Our Team',
    ourTeam: 'Specialist Team',
    about: 'About Us',
    aboutUs: 'About Us',
    contact: 'Contact Us',
    cart: 'Project Cart',
    empty: 'Empty',
    orderNow: 'Start Project',

    // Team Section
    teamBadge: 'Meet Our Experts',
    teamHeading: 'The Minds Behind Kraflyn Technologies',
    teamSubtitle: 'A multidisciplinary team of senior software architects, UI/UX designers, WordPress engineers, and data scientists dedicated to building exceptional digital products.',
    meetTheExperts: 'Explore All Specialists',
    allSpecialists: 'All Disciplines',
    filterSpecialty: 'Filter by Department / Domain:',
    viewProfile: 'View Full Profile',
    bookSpecialist: 'Consult / Hire Specialist',
    specialistExperience: 'Experience',
    specialistProjects: 'Completed Projects',
    specialistRating: 'Rating',
    specialistAvailability: 'Availability',

    // Hero
    heroBadge: '✨ CREATIVE DESIGN • FULL-STACK DEV • WORDPRESS • DATA ANALYSIS',
    heroTitle1: 'Architecting High-Impact',
    heroTitleHighlight: 'Web & Data Solutions',
    heroTitle2: 'For Modern Businesses',
    heroSubtitle: 'Kraflyn Technologies delivers end-to-end digital craftsmanship: modern UI/UX design, custom full-stack web engineering, high-performance WordPress systems, and deep business data analytics for startups, enterprises, and innovators.',
    heroBrowseBtn: 'Explore Services & Pricing',
    heroDirectOrderBtn: 'Launch Your Project 🚀',
    heroStatStudents: '350+',
    heroStatStudentsLabel: 'Delivered Projects',
    heroStatSatisfaction: '99.8%',
    heroStatSatisfactionLabel: 'Client Satisfaction',
    heroStatUniversities: '100%',
    heroStatUniversitiesLabel: 'On-Time Delivery',
    heroStatTurnaround: '24-48 hrs',
    heroStatTurnaroundLabel: 'Rapid Sprint Start',

    // Pillars
    pillarsBadge: 'Core Principles',
    pillarsHeading: 'Engineering Excellence & Precision',
    pillarsSubtitle: 'The foundational pillars powering every digital product, web system, and analytical dashboard we construct.',
    missionTitle: 'Our Mission',
    missionDesc: 'To empower organizations and creators with scalable web applications, compelling UI/UX design, robust WordPress architectures, and actionable data intelligence.',
    visionTitle: 'Our Vision',
    visionDesc: 'To be the most reliable, modern tech and design engineering partner globally, accelerating digital transformation through clean code and data-driven insights.',
    valuesTitle: 'Our Core Values',
    whyNexoraTitle: 'Why Partner with Kraflyn Technologies?',
    whyNexoraDesc: 'We merge technical excellence with business strategy. Clean architecture, rigorous testing, pixel precision, and proactive communication guaranteed on every sprint.',

    // Problem Triage
    triageBadge: 'Solution Matcher',
    triageHeading: 'What Digital Solution Do You Need?',
    triageSubtitle: 'Select your immediate technical requirement below to explore deliverables, tech stacks, and direct timelines.',
    triageAll: 'All Domains',
    triageClickToOrder: 'Get Started with Solution →',

    // Services
    servicesBadge: 'Core Capabilities',
    servicesHeading: 'OUR SPECIALIZED SERVICE SUITE',
    servicesSubtitle: 'Explore our 4 core engineering wings: Design & UI/UX, Full-Stack Web Development, WordPress Solutions, and Data Analysis & BI.',
    startingPrice: 'Starting from',
    turnaround: 'Timeline:',
    addToCart: 'Add to Scope',
    viewDetails: 'View Details',
    directOrder: 'Quick Order',
    allCategories: 'All Domains',
    filterByDept: 'Filter by Core Domain:',

    // Categories
    catDesign: '1. Design & UI/UX',
    catDev: '2. Web & Software Dev',
    catWordPress: '3. WordPress Solutions',
    catDataAnalysis: '4. Data Analysis & BI',
    catStudent: 'All Capabilities',

    // How It Works
    howItWorksBadge: 'Project Lifecycle',
    howItWorksHeading: 'From Concept to Production in 4 Steps',
    howItWorksSubtitle: 'A structured, agile development process designed for rapid turnaround, quality assurance, and transparent updates.',
    step1Title: '1. Scope & Requirement Analysis',
    step1Desc: 'Choose your desired service, submit project specifications, Figma links, or dataset requirements.',
    step2Title: '2. Architecture & Technical Plan',
    step2Desc: 'Our lead engineer aligns with you on WhatsApp / Google Meet to confirm timeline, milestones, and deliverables.',
    step3Title: '3. Agile Execution & Milestones',
    step3Desc: 'We build with clean code, modern stacks, and live staging previews with real-time feedback loops.',
    step4Title: '4. Testing, Delivery & Launch',
    step4Desc: 'Final QA, performance audits, full source code / dashboard handoff, and complimentary post-launch support.',

    // Reviews
    reviewsBadge: 'Client Success',
    reviewsHeading: 'What Our Clients & Partners Say',
    reviewsSubtitle: 'Real feedback and business outcomes achieved with our design, web development, and data analysis solutions.',
    aggregateRating: '4.98 / 5.0',
    basedOnReviews: 'Based on 250+ verified project deliveries',
    verifiedStudent: 'Verified Client / Business',
    writeReviewBtn: 'Submit Feedback ✍️',
    filterAllReviews: 'All Reviews',
    submitReview: 'Submit Review',

    // FAQ
    faqBadge: 'Got Questions?',
    faqHeading: 'Frequently Asked Questions',
    faqSubtitle: 'Everything you need to know about our tech stacks, pricing models, revisions, source code ownership, and timelines.',

    // Cart
    cartTitle: 'Project Scope Cart',
    cartEmptyTitle: 'Your Scope Cart is Empty',
    cartEmptySubtitle: 'Browse our Design, Web Development, WordPress, and Data Analysis services to build your project bundle.',
    supportTier: 'Delivery Sprint Tier:',
    tierStandard: 'Standard Sprint (Regular Pace)',
    tierExpress: 'Express Fast-Track (+৳1,500)',
    tierVip: 'Dedicated Priority Lead (+৳3,000)',
    urgencyFee: 'Sprint Priority Fee:',
    total: 'Estimated Total:',
    proceedToOrder: 'Proceed to Project Initiation →',
    clearCart: 'Clear Scope',
    removeItem: 'Remove',

    // Order Modal
    orderModalHeading: 'Project Initiation Form',
    orderModalTitle: 'Start Your Project',
    orderModalSubtitle: 'Provide your technical requirements below. Our lead specialist will reach out within 15 minutes.',
    trackOrderHeading: 'Live Project Tracker',
    trackOrderSubtitle: 'Track your project status in real-time with Project ID or Phone Number',
    orderIdOrPhonePlaceholder: 'Enter Project ID (e.g. KT-ORD-...) or Phone Number',
    stepContact: '1. Client Details',
    stepAcademic: '2. Project Scope & Stack',
    stepRequirements: '3. Technical Specs & Files',
    fullName: 'Client / Representative Name *',
    fullNamePlaceholder: 'e.g. John Doe / Tech Lead',
    phoneNumber: 'Phone Number *',
    phonePlaceholder: '017xxxxxxxx',
    whatsappNumber: 'WhatsApp Number *',
    whatsappPlaceholder: '017xxxxxxxx (for instant milestone updates)',
    universityName: 'Company / Organization / Brand *',
    selectUniversity: 'Enter company or brand name',
    departmentName: 'Industry / Business Domain *',
    selectDepartment: 'Select your industry or field',
    semesterOrBatch: 'Project Type / Platform',
    semesterPlaceholder: 'e.g. SaaS MVP, E-Commerce, Dashboard, Redesign',
    courseTitle: 'Project Title / Goal *',
    coursePlaceholder: 'e.g. Next.js SaaS Web App / Power BI Sales Dashboard',
    courseCode: 'Tech Stack / Tools Preference (Optional)',
    courseCodePlaceholder: 'e.g. React, Tailwind, Python, WordPress, PostgreSQL',
    deadlineDate: 'Target Delivery Deadline *',
    problemDetails: 'Detailed Project Scope & Feature Requirements *',
    problemDetailsPlaceholder: 'Describe the core features, design requirements, dataset columns, page count, or technical requirements...',
    preferredContactMethod: 'Preferred Communication Channel:',
    uploadFiles: 'Attach Brief, Wireframes, Datasets, or PRD (Optional)',
    uploadFilesHint: 'PDF, DOCX, ZIP, CSV, JSON, PNG, Figma Link (Max 50 MB)',
    confirmOrderBtn: 'Initiate Project ✨',
    cancelBtn: 'Cancel',

    // Order Success
    orderSuccessTitle: '🎉 Project Request Received!',
    orderSuccessSubtitle: 'Our technical lead will review your specifications and connect with you on WhatsApp within 15 minutes.',
    orderIdLabel: 'Your Unique Project Tracking ID:',
    whatsappCoordinatorBtn: 'Chat Directly with Technical Lead',
    whatsappCoordinatorHint: 'Click to start instant WhatsApp discussion regarding project architecture and milestones.',
    trackOrderBtn: 'Track Project Progress',
    backHomeBtn: 'Return to Home',

    // Order Tracker
    trackerTitle: 'Live Project Status Tracker',
    trackerSubtitle: 'Check the real-time engineering and design progress of your project.',
    trackerInputPlaceholder: 'Enter Project ID (e.g. KT-ORD-...) or Phone Number',
    searchBtn: 'Search',
    statusOrderReceived: '1. Brief Received',
    statusMentorAssigned: '2. Lead Assigned',
    statusStudentContacted: '3. Architecture Finalized',
    statusInProgress: '4. Development & Design',
    statusDelivered: '5. QA & Delivered',
    noOrderFound: 'No Project Found',
    noOrderFoundHint: 'Please verify your Project ID or phone number and try again.',
    orderDetails: 'Project Scope & Details',
    assignedMentor: 'Assigned Lead Specialist:',
    notYetAssigned: 'Assigning domain specialist',
    orderAmount: 'Estimated Value:',
    studentInfo: 'Client & Company Information',
    latestUpdates: 'Milestone Progress',

    // Write Review Modal
    writeReviewTitle: 'Share Your Experience',
    writeReviewSubtitle: 'How was the quality, communication, and turnaround of our team on your project?',
    yourRating: 'Your Overall Rating *',
    gradeOutcomeLabel: 'Business Outcome / Result Achieved (Optional)',
    gradeOutcomePlaceholder: 'e.g. 10x Faster Load Speed / Seamless Product Launch',
    reviewCommentLabel: 'Detailed Feedback *',
    reviewCommentPlaceholder: 'Share your thoughts on the code quality, design precision, and responsiveness of the team...',
    submitReviewBtn: 'Submit Testimonial ✨',

    // Footer
    footerAbout: 'Kraflyn Technologies is a full-service digital engineering and design agency specializing in modern Web Development, UI/UX Design, custom WordPress architectures, and advanced Data Analytics. Create. Connect. Grow.',
    quickLinks: 'Quick Links',
    popularServices: 'Featured Capabilities',
    directContact: 'Direct Contact',
    confidentialMentorship: '100% NDA & Code Ownership Guaranteed',
    copyright: 'All Rights Reserved © 2026 Kraflyn Technologies. Create. Connect. Grow.',

    // Admin Portal
    adminHeaderTitle: 'Kraflyn Technologies Control Panel',
    adminHeaderSubtitle: 'Manage client orders, engineering assignments, portfolio showcases, services, and live inquiries.',
    adminStatTotalOrders: 'Total Client Projects',
    adminStatTodayOrders: 'New Orders Today',
    adminStatInProgress: 'Active Sprints',
    adminStatDelivered: 'Delivered Projects',
    adminStatTotalRevenue: 'Total Pipeline Value',
    adminStatAvgOrderValue: 'Average Project Size',
    tabAllOrders: 'Client Projects',
    tabReviewsManagement: 'Reviews & Feedback',
    searchOrdersPlaceholder: 'Search by Project ID, Client, Company, or Tech Stack...',
    filterStatusAll: 'All Statuses',
    orderTableId: 'Project ID',
    orderTableStudent: 'Client & Contact',
    orderTableUniversity: 'Company & Domain',
    orderTableCourse: 'Scope & Tech Stack',
    orderTableDeadline: 'Deadline',
    orderTableMentor: 'Assigned Lead',
    orderTableAmount: 'Value',
    orderTableStatus: 'Status',
    orderTableAction: 'Actions',
    manageOrderBtn: 'Manage ⚙️',
    editOrderTitle: 'Update Project & Assign Specialist',
    saveChangesBtn: 'Save Changes',
    assignMentorLabel: 'Assigned Lead Specialist:',
    updateStatusLabel: 'Update Sprint Status:',
    adminNoteLabel: 'Internal Technical Notes:',
    deleteOrderConfirm: 'Are you sure you want to delete this project order?'
  },
  bn: {
    // Top Hotline Bar
    hotlineText: 'ক্র্যাফলিন টেকনোলজিস • ডিজিটাল ইঞ্জিনিয়ারিং ও ডাটা ল্যাব: +৮৮০ ১৭১২-৩৪৫৬৭৮ (২৪/৭ WhatsApp সাপোর্ট)',
    trackOrderStatus: 'লাইভ প্রজেক্ট ট্র্যাকার',
    directWhatsApp: 'সরাসরি WhatsApp হেল্প',
    adminPortalBtn: 'অ্যাডমিন ড্যাশবোর্ড',
    backToStudentWeb: '← মূল ওয়েবসাইটে ফিরে যান',

    // Nav
    home: 'হোম',
    services: 'সকল সার্ভিসসমূহ',
    portfolio: 'পোর্টফোলিও ও কেস স্টাডি',
    howItWorks: 'কাজের ধাপ',
    reviews: 'ক্লায়েন্ট রিভিউ',
    trackOrder: 'প্রজেক্ট ট্র্যাকিং',
    faq: 'প্রশ্নোত্তর (FAQ)',
    team: 'আমাদের টিম',
    ourTeam: 'টিম মেম্বার ও স্পেশালিস্ট',
    about: 'আমাদের সম্পর্কে',
    aboutUs: 'আমাদের সম্পর্কে',
    contact: 'যোগাযোগ',
    cart: 'প্রজেক্ট কার্ট',
    empty: 'খালি',
    orderNow: 'প্রজেক্ট শুরু করুন',

    // Team Section
    teamBadge: 'আমাদের অভিজ্ঞ টিম',
    teamHeading: 'ক্র্যাফলিন টেকনোলজিসের বিশেষজ্ঞ টিম',
    teamSubtitle: 'অভিজ্ঞ ফুল-স্ট্যাক ইঞ্জিনিয়ার, UI/UX ডিজাইনার, ওয়ার্ডপ্রেস বিশেষজ্ঞ এবং ডাটা সায়েন্টিস্টদের সমন্বয়ে গঠিত শক্তিশালী টিম।',
    meetTheExperts: 'সকল স্পেশালিস্ট দেখুন',
    allSpecialists: 'সকল ডিপার্টমেন্ট',
    filterSpecialty: 'ডোমেন অনুযায়ী ফিল্টার করুন:',
    viewProfile: 'সম্পূর্ণ প্রোফাইল দেখুন',
    bookSpecialist: 'পরামর্শ / স্পেশালিস্ট বুক করুন',
    specialistExperience: 'অভিজ্ঞতা',
    specialistProjects: 'সম্পন্ন প্রজেক্ট',
    specialistRating: 'রেটিং',
    specialistAvailability: 'উপলব্ধতা',

    // Hero
    heroBadge: '✨ ক্রিয়েটিভ ডিজাইন • ফুল-স্ট্যাক ডেভেলপমেন্ট • ওয়ার্ডপ্রেস • ডাটা অ্যানালাইসিস',
    heroTitle1: 'আধুনিক ব্যবসা ও স্টার্টআপের জন্য',
    heroTitleHighlight: 'ওয়েব ও ডাটা সল্যুশন',
    heroTitle2: 'প্রফেশনাল ডিজিটাল প্ল্যাটফর্ম',
    heroSubtitle: 'ক্র্যাফলিন টেকনোলজিস (Kraflyn Technologies) প্রদান করে বিশ্বমানের ক্রিয়েটিভ UI/UX ডিজাইন, আধুনিক ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন, হাই-পারফরম্যান্স ওয়ার্ডপ্রেস সল্যুশন এবং গভীর বিজনেস ডাটা অ্যানালাইসিস।',
    heroBrowseBtn: 'সার্ভিস ও প্রাইসিং দেখুন',
    heroDirectOrderBtn: 'প্রজেক্ট শুরু করুন 🚀',
    heroStatStudents: '৩৫০+',
    heroStatStudentsLabel: 'সফলভাবে সম্পন্ন প্রজেক্ট',
    heroStatSatisfaction: '৯৯.৮%',
    heroStatSatisfactionLabel: 'ক্লায়েন্ট সন্তুষ্টির হার',
    heroStatUniversities: '১০০%',
    heroStatUniversitiesLabel: 'অন-টাইম ডেলিভারি',
    heroStatTurnaround: '২৪-৪৮ ঘণ্টা',
    heroStatTurnaroundLabel: 'দ্রুত স্প্রিন্ট শুরু',

    // Pillars
    pillarsBadge: 'আমাদের লক্ষ্য ও নীতিমালা',
    pillarsHeading: 'ইঞ্জিনিয়ারিং এক্সিলেন্স ও প্রিসিশন',
    pillarsSubtitle: 'যে মানসম্মত প্রযুক্তির ওপর ভিত্তি করে ক্র্যাফলিন টেকনোলজিস প্রতিটি সফটওয়্যার ও ডাটা ড্যাশবোর্ড নির্মাণ করে।',
    missionTitle: 'আমাদের মিশন',
    missionDesc: 'স্কেলেবল ওয়েব অ্যাপ্লিকেশন, চমৎকার UI/UX ডিজাইন, নির্ভরযোগ্য ওয়ার্ডপ্রেস আর্কিটেকচার এবং বিজনেস ডাটা অ্যানালাইসিসের মাধ্যমে ক্লায়েন্টদের প্রবৃদ্ধি ত্বরান্বিত করা।',
    visionTitle: 'আমাদের ভিশন',
    visionDesc: 'বাংলাদেশ ও আন্তর্জাতিক পরিমণ্ডলে সবচেয়ে নির্ভরযোগ্য ও আধুনিক ডিজিটাল ইঞ্জিনিয়ারিং পার্টনার হিসেবে সুপরিচিত হওয়া।',
    valuesTitle: 'আমাদের মূল্যবোধ',
    whyNexoraTitle: 'কেন ক্র্যাফলিন টেকনোলজিসের সাথে কাজ করবেন?',
    whyNexoraDesc: 'আমরা শুধু কোড লিখি না, আপনার বিজনেসের জন্য স্কেলেবল সমাধান এবং নিখুঁত ইউজার এক্সপেরিয়েন্স নিশ্চিত করি।',

    // Problem Triage
    triageBadge: 'সহজ সল্যুশন ফাইন্ডার',
    triageHeading: 'আপনার কি ধরনের ডিজিটাল সমাধান প্রয়োজন?',
    triageSubtitle: 'ডিজাইন, ফুল-স্ট্যাক ডেভেলপমেন্ট, ওয়ার্ডপ্রেস কিংবা ডাটা অ্যানালাইসিস—নিচে সিলেক্ট করে সরাসরি সমাধান নিন।',
    triageAll: 'সকল ডোমেন',
    triageClickToOrder: 'সরাসরি প্রজেক্ট শুরু করতে ক্লিক করুন →',

    // Services
    servicesBadge: 'আমাদের কোর সার্ভিসসমূহ',
    servicesHeading: 'OUR SPECIALIZED SERVICE SUITE',
    servicesSubtitle: 'ডিজাইন ও UI/UX, সফটওয়্যার ডেভেলপমেন্ট, ওয়ার্ডপ্রেস সল্যুশন এবং ডাটা অ্যানালাইসিস—সবকিছু এক প্ল্যাটফর্মে।',
    startingPrice: 'শুরু মাত্র',
    turnaround: 'ডেলিভারি টাইম:',
    addToCart: 'কার্টে যোগ করুন',
    viewDetails: 'বিস্তারিত দেখুন',
    directOrder: 'সরাসরি অর্ডার',
    allCategories: 'সকল সার্ভিস',
    filterByDept: 'ক্যাটাগরি ফিল্টার:',

    // Categories
    catDesign: '১. ডিজাইন ও UI/UX',
    catDev: '২. ওয়েব ও সফটওয়্যার ডেভ',
    catWordPress: '৩. ওয়ার্ডপ্রেস সল্যুশন',
    catDataAnalysis: '৪. ডাটা অ্যানালাইসিস ও BI',
    catStudent: 'সকল ডোমেন',

    // How It Works
    howItWorksBadge: 'কাজের ধাপ',
    howItWorksHeading: 'মাত্র ৪টি ধাপে প্রজেক্ট বাস্তবায়ন',
    howItWorksSubtitle: 'কোনো দীর্ঘ জটিলতা ছাড়াই দ্রুত সময়ে প্রজেক্ট ডেলিভারি ও মান নিয়ন্ত্রণ নিশ্চিত করার আধুনিক অ্যাজাইল পদ্ধতি।',
    step1Title: '১. রিকোয়ারমেন্ট সাবমিট',
    step1Desc: 'প্রয়োজনীয় সার্ভিস সিলেক্ট করে প্রজেক্টের বর্ণনা, ফিগমা লিংক বা ডাটা ফাইল দিয়ে অর্ডার দিন।',
    step2Title: '২. টেকনিক্যাল প্ল্যান ও আলোচনা',
    step2Desc: '১৫ মিনিটের মধ্যে আমাদের টেকনিক্যাল লিড WhatsApp-এ ডেডলাইন ও আর্কিটেকচার চূড়ান্ত করবেন।',
    step3Title: '৩. ডেভেলপমেন্ট ও ডিজাইন স্প্রিন্ট',
    step3Desc: 'ক্লিন কোড ও আধুনিক ফ্রেমওয়ার্ক দিয়ে কাজ এগিয়ে নেওয়া এবং লাইভ স্ট্যাজিং প্রিভিউ প্রদর্শন।',
    step4Title: '৪. টেস্টিং, ডেলিভারি ও সাপোর্ট',
    step4Desc: 'সম্পূর্ণ সোর্স কোড/ড্যাশবোর্ড হ্যান্ডওভার এবং প্রজেক্ট পরবর্তী ফ্রি সাপোর্ট ও রিভিশন।',

    // Reviews
    reviewsBadge: 'ক্লায়েন্ট মন্তব্য',
    reviewsHeading: 'আমাদের ক্লায়েন্ট ও পার্টনারদের অভিজ্ঞতা',
    reviewsSubtitle: 'দেশ-বিদেশের বিভিন্ন স্টার্টআপ, কোম্পানি ও প্রফেশনালদের বাস্তব প্রজেক্টের ফিডব্যাক।',
    aggregateRating: '৪.৯৮ / ৫.০',
    basedOnReviews: '২৫০+ ভেরিফাইড প্রজেক্ট ডেলিভারির ওপর ভিত্তি করে',
    verifiedStudent: 'ভেরিফাইড ক্লায়েন্ট / বিজনেস',
    writeReviewBtn: 'রিভিউ লিখুন ✍️',
    filterAllReviews: 'সকল রিভিউ',
    submitReview: 'রিভিউ সাবমিট করুন',

    // FAQ
    faqBadge: 'সাধারণ জিজ্ঞাসা',
    faqHeading: 'সচরাচর জিজ্ঞাসিত প্রশ্নসমূহ',
    faqSubtitle: 'ক্র্যাফলিন টেকনোলজিসের টেক স্ট্যাক, প্রাইসিং, সোর্স কোড ওরিজিনালিটি এবং সাপোর্ট নিয়ে যাবতীয় উত্তর।',

    // Cart
    cartTitle: 'আপনার প্রজেক্ট স্কোপ কার্ট',
    cartEmptyTitle: 'আপনার কার্ট খালি রয়েছে',
    cartEmptySubtitle: 'ডিজাইন, ডেভেলপমেন্ট, ওয়ার্ডপ্রেস বা ডাটা অ্যানালাইসিস সার্ভিস বেছে নিয়ে কার্টে যোগ করুন।',
    supportTier: 'স্প্রিন্ট প্যাকেজ টিয়ার:',
    tierStandard: 'স্ট্যান্ডার্ড স্প্রিন্ট (স্বাভাবিক সময়)',
    tierExpress: 'এক্সপ্রেস ফাস্ট-ট্র্যাক (+৳১,৫০০)',
    tierVip: 'ডেডিকেটেড প্রায়োরিটি লিড (+৳৩,০০০)',
    urgencyFee: 'জরুরি স্প্রিন্ট ফি:',
    total: 'আনুমানিক সর্বমোট:',
    proceedToOrder: 'প্রজেক্ট চূড়ান্ত করতে এগিয়ে যান →',
    clearCart: 'কার্ট খালি করুন',
    removeItem: 'মুছে ফেলুন',

    // Order Modal
    orderModalHeading: 'প্রজেক্ট অর্ডার ফর্ম',
    orderModalTitle: 'প্রজেক্ট শুরু করুন',
    orderModalSubtitle: 'নিচের তথ্যগুলো পূরণ করুন। টেকনিক্যাল লিড দ্রুত যোগাযোগ করে কাজ শুরু করবেন।',
    trackOrderHeading: 'লাইভ প্রজেক্ট ট্র্যাকার',
    trackOrderSubtitle: 'আপনার প্রজেক্ট আইডি বা ফোন নম্বর দিয়ে বর্তমান অগ্রগতি পর্যবেক্ষণ করুন',
    orderIdOrPhonePlaceholder: 'প্রজেক্ট আইডি (যেমন: KT-ORD-...) অথবা মোবাইল নম্বর লিখুন',
    stepContact: '১. ক্লায়েন্ট ও যোগাযোগের তথ্য',
    stepAcademic: '২. প্রজেক্টের পরিধি ও টেক স্ট্যাক',
    stepRequirements: '৩. বিস্তারিত রিকোয়ারমেন্ট ও ফাইল',
    fullName: 'ক্লায়েন্ট / প্রতিনিধির নাম *',
    fullNamePlaceholder: 'আপনার পূর্ণ নাম লিখুন',
    phoneNumber: 'মোবাইল নম্বর *',
    phonePlaceholder: '০১৭xxxxxxxx',
    whatsappNumber: 'WhatsApp নম্বর *',
    whatsappPlaceholder: '০১৭xxxxxxxx (সরাসরি আপডেটের জন্য)',
    universityName: 'কোম্পানি / প্রতিষ্ঠান / ব্র্যান্ড *',
    selectUniversity: 'আপনার প্রতিষ্ঠান বা ব্র্যান্ডের নাম লিখুন',
    departmentName: 'ইন্ডাস্ট্রি / বিজনেসের ধরন *',
    selectDepartment: 'আপনার ইন্ডাস্ট্রির ধরন নির্বাচন করুন',
    semesterOrBatch: 'প্রজেক্টের ধরন',
    semesterPlaceholder: 'যেমন: SaaS MVP, E-Commerce, Dashboard, Redesign',
    courseTitle: 'প্রজেক্টের নাম বা লক্ষ্য *',
    coursePlaceholder: 'যেমন: Next.js SaaS Web App / Power BI Sales Dashboard',
    courseCode: 'পছন্দের টেক স্ট্যাক (যদি থাকে)',
    courseCodePlaceholder: 'যেমন: React, Tailwind, Python, WordPress, PostgreSQL',
    deadlineDate: 'টার্গেট ডেলিভারি ডেডলাইন *',
    problemDetails: 'কাজের বিস্তারিত রিকোয়ারমেন্ট ও ফিচার লিস্ট *',
    problemDetailsPlaceholder: 'প্রজেক্টের মূল ফিচার, পেজ সংখ্যা, ডিজাইন পছন্দ বা ডাটা রিকোয়ারমেন্ট বিস্তারিত লিখুন...',
    preferredContactMethod: 'যোগাযোগের মাধ্যম:',
    uploadFiles: 'ফাইল, ড্রাফট বা ব্রিফ আপলোড (ঐচ্ছিক)',
    uploadFilesHint: 'PDF, DOCX, ZIP, CSV, JSON, PNG (সর্বোচ্চ ৫০ MB)',
    confirmOrderBtn: 'প্রজেক্ট নিশ্চিত করুন ✨',
    cancelBtn: 'বাতিল',

    // Order Success
    orderSuccessTitle: '🎉 আপনার প্রজেক্ট রিকোয়েস্ট গ্রহণ করা হয়েছে!',
    orderSuccessSubtitle: 'আমাদের টেকনিক্যাল লিড খুব শীঘ্রই WhatsApp-এ আপনার সাথে যোগাযোগ করবেন।',
    orderIdLabel: 'আপনার ইউনিক প্রজেক্ট ট্র্যাকিং আইডি:',
    whatsappCoordinatorBtn: 'সরাসরি WhatsApp টেকনিক্যাল লিডের সাথে চ্যাট করুন',
    whatsappCoordinatorHint: 'দ্রুত প্রসেসিং নিশ্চিত করতে উপরের বাটনে ক্লিক করে WhatsApp-এ আপনার প্রজেক্ট আইডি পাঠান।',
    trackOrderBtn: 'প্রজেক্ট অগ্রগতি ট্র্যাক করুন',
    backHomeBtn: 'হোম পেজে ফিরে যান',

    // Order Tracker
    trackerTitle: 'প্রজেক্ট ট্র্যাকিং সিস্টেম',
    trackerSubtitle: 'আপনার প্রজেক্ট আইডি বা ফোন নম্বর দিয়ে লাইভ কোডিং ও ডিজাইনের অগ্রগতি দেখুন।',
    trackerInputPlaceholder: 'প্রজেক্ট আইডি (যেমন: KT-ORD-...) বা ফোন নম্বর দিন',
    searchBtn: 'খুঁজুন',
    statusOrderReceived: '১. ব্রিফ গ্রহণ',
    statusMentorAssigned: '২. টেক লিড নিয়োগ',
    statusStudentContacted: '৩. আর্কিটেকচার ফাইনাল',
    statusInProgress: '৪. ডেভেলপমেন্ট ও ডিজাইন চলমান',
    statusDelivered: '৫. ডেলিভারি ও লঞ্চ সম্পন্ন',
    noOrderFound: 'কোনো প্রজেক্ট পাওয়া যায়নি',
    noOrderFoundHint: 'দয়া করে সঠিক প্রজেক্ট আইডি বা ফোন নম্বর টাইপ করুন।',
    orderDetails: 'প্রজেক্টের বিবরণ',
    assignedMentor: 'নিযুক্ত টেকনিক্যাল লিড:',
    notYetAssigned: 'স্পেশালিস্ট নিয়োগ করা হচ্ছে',
    orderAmount: 'আনুমানিক ভ্যালু:',
    studentInfo: 'ক্লায়েন্ট ও কোম্পানির তথ্য',
    latestUpdates: 'সর্বশেষ অগ্রগতি',

    // Write Review Modal
    writeReviewTitle: 'আপনার অভিজ্ঞতা শেয়ার করুন',
    writeReviewSubtitle: 'ক্র্যাফলিন টেকনোলজিসের কোড কোয়ালিটি ও কাজের মান কেমন ছিল?',
    yourRating: 'আপনার রেটিং *',
    gradeOutcomeLabel: 'বিজনেসের ফলাফল বা আউটকাম (ঐচ্ছিক)',
    gradeOutcomePlaceholder: 'যেমন: সাইটের স্পিড দ্বিগুণ হয়েছে / সফল প্রোডাক্ট লঞ্চ',
    reviewCommentLabel: 'আপনার মতামত *',
    reviewCommentPlaceholder: 'কাজের মান, সময়ানুবর্তিতা এবং টিমের সাপোর্ট কেমন ছিল বিস্তারিত লিখুন...',
    submitReviewBtn: 'রিভিউ সাবমিট করুন ✨',

    // Footer
    footerAbout: 'ক্র্যাফলিন টেকনোলজিস (Kraflyn Technologies) হল একটি আধুনিক ডিজিটাল ইঞ্জিনিয়ারিং স্টুডিও যা ক্রিয়েটিভ ডিজাইন, আধুনিক ওয়েব ডেভেলপমেন্ট, ওয়ার্ডপ্রেস এবং বিজনেস ডাটা অ্যানালাইসিস সেবা প্রদান করে। Create. Connect. Grow.',
    quickLinks: 'দ্রুত লিংক',
    popularServices: 'জনপ্রিয় সার্ভিসসমূহ',
    directContact: 'সরাসরি যোগাযোগ',
    confidentialMentorship: '১০০% কোড মালিকানা ও ডেটা সুরক্ষা গ্যারান্টি',
    copyright: 'সর্বস্বত্ব সংরক্ষিত © ২০২৬ ক্র্যাফলিন টেকনোলজিস (Kraflyn Technologies)। Create. Connect. Grow.',

    // Admin Portal
    adminHeaderTitle: 'ক্র্যাফলিন টেকনোলজিস অ্যাডমিন কন্ট্রোল প্যানেল',
    adminHeaderSubtitle: 'সকল ক্লায়েন্ট অর্ডার, টেক লিড অ্যাসাইনমেন্ট, পোর্টফোলিও ও সার্ভিস এক নজরে নিয়ন্ত্রণ করুন।',
    adminStatTotalOrders: 'মোট প্রজেক্ট সংখ্যা',
    adminStatTodayOrders: 'আজকের নতুন অর্ডার',
    adminStatInProgress: 'চলমান স্প্রিন্ট',
    adminStatDelivered: 'ডেলিভারি সম্পন্ন',
    adminStatTotalRevenue: 'মোট আনুমানিক ভ্যালু',
    adminStatAvgOrderValue: 'গড় প্রজেক্ট সাইজ',
    tabAllOrders: 'ক্লায়েন্ট প্রজেক্ট তালিকা',
    tabReviewsManagement: 'রিভিউ মডারেশন',
    searchOrdersPlaceholder: 'প্রজেক্ট আইডি, ক্লায়েন্ট, কোম্পানি বা টেক স্ট্যাক দিয়ে খুঁজুন...',
    filterStatusAll: 'সকল স্ট্যাটাস',
    orderTableId: 'প্রজেক্ট আইডি',
    orderTableStudent: 'ক্লায়েন্ট ও যোগাযোগ',
    orderTableUniversity: 'কোম্পানি ও ইন্ডাস্ট্রি',
    orderTableCourse: 'স্কোপ ও টেক স্ট্যাক',
    orderTableDeadline: 'ডেডলাইন',
    orderTableMentor: 'নিযুক্ত টেক লিড',
    orderTableAmount: 'ভ্যালু',
    orderTableStatus: 'স্ট্যাটাস',
    orderTableAction: 'অ্যাকশন',
    manageOrderBtn: 'ম্যানেজ করুন ⚙️',
    editOrderTitle: 'প্রজেক্ট আপডেট ও টেক লিড নিয়োগ',
    saveChangesBtn: 'সংরক্ষণ করুন',
    assignMentorLabel: 'টেক লিডের নাম দিন:',
    updateStatusLabel: 'স্প্রিন্ট স্ট্যাটাস পরিবর্তন করুন:',
    adminNoteLabel: 'ইন্টারনাল নোট:',
    deleteOrderConfirm: 'আপনি কি নিশ্চিত এই প্রজেক্টটি মুছে ফেলতে চান?'
  }
};

export const TRANSLATIONS = DICTIONARY;

export interface BilingualSubService {
  id: string;
  price: number;
  turnaround: string;
  title: { bn: string; en: string };
  deliverables: { bn: string[]; en: string[] };
  recommendedFor?: { bn: string; en: string };
}

export interface BilingualService {
  id: string;
  iconName: string;
  category: 'Design Services' | 'Development Services' | 'WordPress Services' | 'Data Analysis';
  startingPrice: number;
  typicalTurnaround: string;
  tag?: string;
  title: { bn: string; en: string };
  shortDesc: { bn: string; en: string };
  fullDesc: { bn: string; en: string };
  deliverables: { bn: string[]; en: string[] };
  subServices?: BilingualSubService[];
}

export const BILINGUAL_SERVICES: BilingualService[] = [
  // ========================================================
  // 1. DESIGN & UI/UX SERVICES
  // ========================================================
  {
    id: 'ui-ux-design',
    iconName: 'Layout',
    category: 'Design Services',
    startingPrice: 3500,
    typicalTurnaround: '3 - 7 Days',
    tag: 'Flagship',
    title: {
      en: 'UI/UX Design for Web & Mobile Apps',
      bn: 'ওয়েব ও মোবাইল অ্যাপ UI/UX ডিজাইন'
    },
    shortDesc: {
      en: 'Pixel-perfect interactive Figma prototypes, user journeys, wireframes, and scalable design systems.',
      bn: 'ইউজার-সেন্ট্রিক ইন্টারেক্টিভ ফিগমা প্রোটোটাইপ, ওয়্যারফ্রেম, ইউজার জার্নি এবং স্কেলেবল ডিজাইন সিস্টেম।'
    },
    fullDesc: {
      en: 'End-to-end user experience and user interface engineering for modern SaaS, web platforms, and mobile apps. We deliver comprehensive Figma files with auto-layouts, responsive variants, typography scales, design tokens, and developer handoff specs.',
      bn: 'আধুনিক SaaS, ওয়েব অ্যাপ্লিকেশন ও মোবাইল অ্যাপের জন্য কমপ্লিট UI/UX ডিজাইন। অটো-লেআউট, রেসপনসিভ ভ্যারিয়েন্ট, ডিজাইন টোকেন ও ডেভেলপার হ্যান্ডঅফ সহ ফুল ফিগমা প্রজেক্ট ফাইল।'
    },
    deliverables: {
      en: [
        'Interactive Figma prototype with realistic clickable flows',
        'Responsive screen layouts (Desktop, Tablet & Mobile)',
        'Comprehensive Design System (Tokens, Icons, Colors, Typography)',
        'Developer handoff documentation & asset exports (SVG/PNG)',
        'User testing flows and wireframe architecture'
      ],
      bn: [
        'ক্লিকেবল ফ্লো সহ ফুল ইন্টারেক্টিভ ফিগমা প্রোটোটাইপ',
        'ডেস্কটপ, ট্যাবলেট ও মোবাইলের জন্য ফুল রেসপনসিভ লেআউট',
        'সম্পূর্ণ ডিজাইন সিস্টেম ও কম্পোনেন্ট লাইব্রেরি',
        'ডেভেলপার হ্যান্ডঅফ স্পেক্স এবং অপটিমাইজড অ্যাসেট এক্সপোর্ট',
        'ইউজার টেস্টিং ওয়্যারফ্রেম ও আর্কিটেকচার ডায়েরি'
      ]
    },
    subServices: [
      {
        id: 'uiux-starter',
        price: 3500,
        turnaround: '3 Days',
        title: { en: 'Landing Page / 3 Core Screens', bn: 'ল্যান্ডিং পেজ / ৩টি কোর স্ক্রিন' },
        deliverables: {
          en: ['Up to 3 high-fidelity responsive screens', 'Figma source file with auto-layout', '2 rounds of revisions'],
          bn: ['৩টি হাই-ফিডেলিটি রেসপনসিভ স্ক্রিন', 'অটো-লেআউট সহ ফিগমা সোর্স ফাইল', '২ রাউন্ড রিভিশন']
        }
      },
      {
        id: 'uiux-fullapp',
        price: 8500,
        turnaround: '7 Days',
        title: { en: 'Complete Web / Mobile App UI (10-15 Screens)', bn: 'সম্পূর্ণ ওয়েব বা মোবাইল অ্যাপ UI (১০-১৫ স্ক্রিন)' },
        deliverables: {
          en: ['10-15 responsive interactive screens', 'Complete Design System & Components', 'Clickable Figma prototype & handoff specs'],
          bn: ['১০-১৫টি রেসপনসিভ স্ক্রিন', 'সম্পূর্ণ ডিজাইন সিস্টেম ও টোকেন', 'ক্লিকেবল প্রোটোটাইপ ও ডেভেলপার হ্যান্ডঅফ']
        }
      }
    ]
  },
  {
    id: 'mobile-app-uiux',
    iconName: 'Smartphone',
    category: 'Design Services',
    startingPrice: 4500,
    typicalTurnaround: '4 - 8 Days',
    tag: 'High Demand',
    title: {
      en: 'Mobile App UI/UX Design (iOS & Android)',
      bn: 'মোবাইল অ্যাপ UI/UX ডিজাইন (iOS ও Android)'
    },
    shortDesc: {
      en: 'Native iOS & Android mobile interfaces, Apple Human Interface & Google Material 3 guidelines, and micro-interactions.',
      bn: 'iOS ও Android প্ল্যাটফর্মের জন্য আধুনিক মোবাইল অ্যাপ ইন্টারফেস, ন্যাভিগেশন ফ্লো ও ফিগমা প্রোটোটাইপ।'
    },
    fullDesc: {
      en: 'Modern mobile app UI/UX design tailored for intuitive thumb navigation, seamless bottom sheets, gesture flows, dark/light modes, and interactive component states in Figma. Ready for React Native or Flutter developer handoff.',
      bn: 'স্মার্টফোন ব্যবহারকারীদের স্বাচ্ছন্দ্যের জন্য আধুনিক মোবাইল অ্যাপ UI/UX ডিজাইন। বটম শীট, জেসচার ন্যাভিগেশন, ডার্ক/লাইট মোড এবং রিয়েল-টাইম ক্লিকেবল প্রোটোটাইপ।'
    },
    deliverables: {
      en: [
        '15-30+ high-fidelity mobile application screens in Figma',
        'Clickable user journeys & interactive screen transitions',
        'iOS Human Interface & Android Material 3 compliance specs',
        'Exportable SVG/PNG asset library & typography tokens',
        'Developer handoff documentation with component variants'
      ],
      bn: [
        '১৫-৩০+ হাই-ফিডেলিটি মোবাইল অ্যাপ স্ক্রিন (Figma)',
        'ক্লিকেবল ইউজার জার্নি ও স্ক্রিন ট্রানজিশন প্রোটোটাইপ',
        'Apple iOS এবং Google Material 3 গাইডলাইন স্পেক্স',
        'এক্সপোর্টেবল ভেক্টর অ্যাসেট লাইব্রেরি ও টাইপোগ্রাফি টোকেন',
        'React Native বা Flutter ডেভেলপার হ্যান্ডঅফ ফাইল'
      ]
    },
    subServices: [
      {
        id: 'mobile-ui-basic',
        price: 4500,
        turnaround: '4 Days',
        title: { en: 'Core MVP Screens (8-12 Screens)', bn: 'কোর MVP স্ক্রিন (৮-১২ স্ক্রিন)' },
        deliverables: {
          en: ['8-12 mobile screens (Splash, Auth, Home, Profile, Detail)', 'Clickable Figma prototype', 'Asset export bundle'],
          bn: ['৮-১২টি মোবাইল স্ক্রিন (অথ, হোম, প্রোফাইল, ডিটেইল)', 'ক্লিকেবল ফিগমা প্রোটোটাইপ', 'অ্যাসেট এক্সপোর্ট বান্ডেল']
        }
      },
      {
        id: 'mobile-ui-full',
        price: 9000,
        turnaround: '8 Days',
        title: { en: 'Full App Experience (20-30 Screens)', bn: 'ফুল অ্যাপ এক্সপেরিয়েন্স (২০-৩০ স্ক্রিন)' },
        deliverables: {
          en: ['20-30 screens with edge cases & error states', 'Design token library & dark mode variants', 'Complete component handoff specs'],
          bn: ['২০-৩০টি স্ক্রিন সহ এরর ও এম্পটি স্টেট', 'ডিজাইন টোকেন লাইব্রেরি ও ডার্ক মোড ভ্যারিয়েন্ট', 'কম্পোনেন্ট হ্যান্ডঅফ স্পেক্স']
        }
      }
    ]
  },
  {
    id: 'landing-page-design',
    iconName: 'Sparkles',
    category: 'Design Services',
    startingPrice: 2000,
    typicalTurnaround: '2 - 4 Days',
    tag: 'High Conversion',
    title: {
      en: 'High-Converting Landing Page Design',
      bn: 'হাই-কনভার্টিং ল্যান্ডিং পেজ ডিজাইন'
    },
    shortDesc: {
      en: 'Modern, conversion-focused landing page visual designs optimized for SaaS, products, and lead generation.',
      bn: 'স্টার্টআপ ও ব্যবসার জন্য সেলস-অপটিমাইজড দৃষ্টিনন্দন ল্যান্ডিং পেজ ডিজাইন।'
    },
    fullDesc: {
      en: 'Crafting persuasive, visually captivating landing page layouts designed to maximize user engagement and conversions. Includes hero sections, feature grids, social proof testimonials, pricing matrices, and CTA sections.',
      bn: 'ক্লায়েন্ট কনভার্সন বাড়ানোর জন্য আধুনিক হিরো সেকশন, ফিচার গ্রিড, সোশ্যাল প্রুফ এবং কল-টু-অ্যাকশন সমৃদ্ধ ল্যান্ডিং পেজ ডিজাইন।'
    },
    deliverables: {
      en: [
        'Full page visual design in Figma (Desktop & Mobile)',
        'Copywriting layout structure & visual hierarchy',
        'Custom 2D/3D visual graphics and icon styling',
        'Optimized for fast front-end coding',
        'Unlimited minor revisions until launch'
      ],
      bn: [
        'ফিগমায় ডেস্কটপ ও মোবাইলের জন্য ফুল পেজ ভিজ্যুয়াল ডিজাইন',
        'কনভার্শন অপটিমাইজড কনটেন্ট স্ট্রাকচার ও ভিজ্যুয়াল হায়ারার্কি',
        'কাস্টম গ্রাফিক্স ও ভেক্টর আইকন কালেকশন',
        'ফ্রন্টএন্ড ডেভেলপমেন্টের জন্য প্রস্তুত হ্যান্ডঅফ ফাইল',
        'আনলিমিটেড রিভিশন ও প্রজেক্ট সাপোর্ট'
      ]
    }
  },
  {
    id: 'design-system-tokens',
    iconName: 'Layers',
    category: 'Design Services',
    startingPrice: 5000,
    typicalTurnaround: '5 - 10 Days',
    tag: 'Scale Ready',
    title: {
      en: 'Design System & Component Library (Figma to Code)',
      bn: 'ডিজাইন সিস্টেম ও কম্পোনেন্ট লাইব্রেরি আর্কিটেকচার'
    },
    shortDesc: {
      en: 'Scalable design tokens, auto-layout component library, typography scale, and developer handoff specs.',
      bn: 'স্কেলেবল ডিজাইন টোকেন, কালার ও টাইপোগ্রাফি স্কেল, পুনঃব্যবহারযোগ্য ৪০+ UI কম্পোনেন্ট ও রুলবুক।'
    },
    fullDesc: {
      en: 'Standardize your product UI across your entire engineering team. We architect structured Figma design systems with semantic color tokens, typography scales, 40+ atomic components with interactive variants, spacing grids, and Storybook/Tailwind alignment.',
      bn: 'আপনার প্রোডাক্ট ও ডেভেলপার টিমের জন্য সার্বজনীন ডিজাইন সিস্টেম। সেমান্টিক কালার টোকেন, ৪০+ কাস্টম UI কম্পোনেন্ট (বাটন, ইনপুট, মোডাল, টেবিল), লাইট/ডার্ক মোড এবং Tailwind CSS ফ্রেন্ডলি ভ্যারিয়েবল গাইড।'
    },
    deliverables: {
      en: [
        'Master Figma component library with Auto-Layout 5.0 and variables',
        'Semantic color, typography, spacing, and elevation tokens',
        '40+ atomic UI components (Buttons, Inputs, Modals, Tables, Badges)',
        'Light and Dark mode variant system',
        'Developer handoff style guide & Storybook ready token JSON'
      ],
      bn: [
        'অটো-লেআউট ৫.০ ও ভ্যারিয়েবল সহ মাস্টার ফিগমা কম্পোনেন্ট লাইব্রেরি',
        'সেমান্টিক কালার, টাইপোগ্রাফি, স্পেসিং ও এলিভেশন টোকেন',
        '৪০+ এটমিক UI কম্পোনেন্ট (বাটন, ইনপুট, মোডাল, টেবিল, ড্রপডাউন)',
        'লাইট ও ডার্ক মোড ভ্যারিয়েন্ট সিস্টেম',
        'ডেভেলপার স্টাইলগাইড ও Storybook-রেডি JSON এক্সপোর্ট'
      ]
    }
  },
  {
    id: 'saas-dashboard-ux',
    iconName: 'LayoutDashboard',
    category: 'Design Services',
    startingPrice: 4200,
    typicalTurnaround: '4 - 7 Days',
    tag: 'SaaS Specialist',
    title: {
      en: 'SaaS Dashboard & Web Application UX Design',
      bn: 'SaaS ড্যাশবোর্ড ও ওয়েব প্ল্যাটফর্ম UX/UI ডিজাইন'
    },
    shortDesc: {
      en: 'Data-dense web application interfaces, complex table filters, multi-role views, and executive metrics UX.',
      bn: 'কমপ্লেক্স ডাটা টেবিল, মাল্টি-রোল পারমিশন ভিউ, অ্যানালিটিক্স উইজেট ও ইন্টারেক্টিভ SaaS ড্যাশবোর্ড ডিজাইন।'
    },
    fullDesc: {
      en: 'Design user-friendly dashboards for complex B2B SaaS, CRM, or administrative platforms. We map out intuitive navigation hierarchies, dense data tables with filtering and bulk actions, customizable widgets, and responsive layouts.',
      bn: 'জটিল B2B SaaS, CRM বা ERP প্ল্যাটফর্মের জন্য ক্লান্তিহীন ড্যাশবোর্ড ইন্টারফেস ডিজাইন। ফিল্টারিং সহ ডাটা টেবিল, অ্যাকশন মোডাল, রিয়েল-টাইম মেট্রিক কার্ড এবং মাল্টি-রোল পারমিশন ভিউ।'
    },
    deliverables: {
      en: [
        'Multi-screen SaaS dashboard workflows in Figma',
        'Data-dense table design with sorting, pagination, and action modals',
        'Analytics visual charts, KPI metric cards & quick actions',
        'Role-based permissions UI states (Admin, Manager, Member)',
        'Interactive Figma prototypes with realistic dashboard interactions'
      ],
      bn: [
        'ফিগমায় মাল্টি-স্ক্রিন SaaS ড্যাশবোর্ড ওয়ার্কফ্লো',
        'ডাটা-ডেনস টেবিল ডিজাইন (সর্টিং, ফিল্টারিং ও বালক অ্যাকশন)',
        'অ্যানালিটিক্স ভিজ্যুয়াল চার্ট ও কেপিআই কার্ড লেআউট',
        'রোল-বেসড পারমিশন ইন্টারফেস স্টেট (এডমিন, ম্যানেজার, মেম্বার)',
        'ইন্টারেক্টিভ ফিগমা প্রোটোটাইপ'
      ]
    }
  },
  {
    id: 'brand-identity-logo',
    iconName: 'Layers',
    category: 'Design Services',
    startingPrice: 2500,
    typicalTurnaround: '3 - 5 Days',
    tag: 'Brand Suite',
    title: {
      en: 'Brand Identity & Logo Suite',
      bn: 'ব্র্যান্ড আইডেন্টিটি ও লোগো স্যুট'
    },
    shortDesc: {
      en: 'Distinctive vector logo marks, color harmony, typography guides, and complete brand stylebooks.',
      bn: 'অনন্য ভেক্টর লোগো, ব্র্যান্ড কালার প্যালেট, টাইপোগ্রাফি গাইড এবং পূর্ণাঙ্গ স্টাইলবুক।'
    },
    fullDesc: {
      en: 'Establish a powerful, cohesive brand identity that commands attention in your market. We deliver multiple unique conceptual directions, complete vector source files (SVG, EPS, AI, PDF), brand color codes (HEX, RGB, CMYK), and stationery templates.',
      bn: 'আপনার ব্যবসা বা স্টার্টআপের জন্য প্রিমিয়াম ব্র্যান্ড আইডেন্টিটি। ৩-৪টি ইউনিক লোগো কনসেপ্ট, ফুল ভেক্টর মাস্টার ফাইল, কালার গাইডলাইন এবং সোশ্যাল মিডিয়া ব্র্যান্ড কিট।'
    },
    deliverables: {
      en: [
        '3-5 distinct creative logo concepts with revisions',
        'Vector master files (SVG, EPS, AI, PDF, Transparent PNG)',
        'Comprehensive Brand Guidelines (Colors, Typography, Usage rules)',
        'Social media avatars, banner kits, and favicon assets',
        'Full intellectual property & commercial rights transfer'
      ],
      bn: [
        '৩-৫টি স্বতন্ত্র ক্রিয়েটিভ লোগো কনসেপ্ট',
        'মাস্টার ভেক্টর ফাইল (SVG, EPS, AI, PDF, PNG)',
        'সম্পূর্ণ ব্র্যান্ড গাইডলাইন ডকুমেন্টেশন',
        'সোশ্যাল মিডিয়া প্রোফাইল ও ব্যানার কিট',
        '১০০% বাণিজ্যিক কপিরাইট ও ওনারশিপ ট্রান্সফার'
      ]
    }
  },
  {
    id: 'pitch-deck-presentation',
    iconName: 'Presentation',
    category: 'Design Services',
    startingPrice: 1800,
    typicalTurnaround: '2 - 3 Days',
    title: {
      en: 'Investor Pitch Deck & Corporate Presentation',
      bn: 'ইনভেস্টর পিচ ডেক ও কর্পোরেট প্রেজেন্টেশন'
    },
    shortDesc: {
      en: 'Compelling, beautifully formatted presentation decks for fundraising, sales, and executive keynotes.',
      bn: 'ফান্ডরাইজিং, বিজনেস পিচ এবং এক্সিকিউটিভ মিটিংয়ের জন্য প্রফেশনাল স্লাইড ডেক।'
    },
    fullDesc: {
      en: 'Transform complex business narratives and data metrics into clear, investor-ready slide presentations. Designed in Figma, PowerPoint, or Google Slides with custom data visualizations and master slide templates.',
      bn: 'ব্যাবসায়িক পরিকল্পনা ও ডাটা চার্টকে দৃষ্টিনন্দন স্লাইড প্রেজেন্টেশনে রূপান্তর। কাস্টম ডাটা ভিজ্যুয়ালাইজেশন, ট্রানজিশন এবং এডিটেবল স্লাইড মাস্টার।'
    },
    deliverables: {
      en: [
        'Custom styled PPTX / Keynote / Figma presentation deck',
        'Clean typography, infographic charts & balanced metrics',
        'Slide master template for easy internal reuse',
        'Exported high-res PDF handouts and speaker notes',
        'Commercial vector icon sets included'
      ],
      bn: [
        'কাস্টম স্টাইল্ড PPTX / Google Slides / Figma ডেক',
        'ইনফোগ্রাফিক চার্ট ও ব্যালান্সড মেট্রিক্স লেআউট',
        'পরবর্তীতে ব্যবহারের জন্য স্লাইড মাস্টার টেমপ্লেট',
        'প্রিন্ট-রেডি PDF হ্যান্ডআউট ও স্পিকার নোটস',
        'ফ্রি ভেক্টর আইকন প্যাক ও কমার্শিয়াল ফন্টস'
      ]
    }
  },

  // ========================================================
  // 2. WEB & SOFTWARE DEVELOPMENT SERVICES
  // ========================================================
  {
    id: 'custom-fullstack-webapp',
    iconName: 'Code',
    category: 'Development Services',
    startingPrice: 12000,
    typicalTurnaround: '7 - 21 Days',
    tag: 'Enterprise Core',
    title: {
      en: 'Custom Full-Stack Web Application',
      bn: 'কাস্টম ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন'
    },
    shortDesc: {
      en: 'Scalable web applications built with React, Next.js, Node.js/Express, TypeScript, and PostgreSQL/MongoDB.',
      bn: 'React, Next.js, Node.js, TypeScript এবং PostgreSQL/MongoDB দিয়ে স্কেলেবল আধুনিক ওয়েব অ্যাপ।'
    },
    fullDesc: {
      en: 'End-to-end custom software development tailored to your exact business workflow. We architect robust backend microservices/APIs, responsive frontend interfaces with Tailwind CSS, secure authentication (JWT/OAuth), role-based permissions, and automated database migrations.',
      bn: 'আপনার ব্যবসার জন্য সম্পূর্ণ কাস্টম ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন। সুরক্ষিত অথেন্টিকেশন, রোল-বেসড অ্যাক্সেস কন্ট্রোল, স্পিড অপটিমাইজেশন, REST/GraphQL API এবং ক্লাউড ডিপ্লয়মেন্ট।'
    },
    deliverables: {
      en: [
        'Production-ready Next.js / React + Node.js codebase',
        'PostgreSQL / MongoDB database schema & ORM integration',
        'Secure Authentication, RBAC (Admin, Staff, Customer)',
        'RESTful / GraphQL APIs with comprehensive Swagger/Postman docs',
        'Docker containerization, CI/CD pipeline & Cloud deployment',
        '30 days complimentary post-launch bug fixing & maintenance'
      ],
      bn: [
        'প্রোডাকশন-রেডি Next.js / React + Node.js কোডবেস',
        'PostgreSQL / MongoDB ডাটাবেস স্কিমা ও ORM ইন্টিগ্রেশন',
        'সুরক্ষিত অথেনটিকেশন ও রোল-বেসড এক্সেস কন্ট্রোল',
        'সম্পূর্ণ API ডকুমেন্টেশন (Swagger/Postman)',
        'ক্লাউড ডিপ্লয়মেন্ট ও CI/CD পাইপলাইন কনফিগারেশন',
        '৩০ দিনের ফ্রি পোস্ট-লঞ্চ মেইনটেন্যান্স ও বাগ ফিক্সিং'
      ]
    },
    subServices: [
      {
        id: 'fullstack-mvp',
        price: 12000,
        turnaround: '7 - 10 Days',
        title: { en: 'SaaS MVP / Core Feature App', bn: 'SaaS MVP / কোর ফিচার অ্যাপ' },
        deliverables: {
          en: ['Next.js + Tailwind + Node.js setup', 'Auth + DB CRUD for 3-5 core models', 'Cloud deployment on Vercel / Railway'],
          bn: ['Next.js + Tailwind + Node.js সেটআপ', 'অথেনটিকেশন + ৩-৫টি কোর মডেল CRUD', 'ক্লাউড হোস্টিং ও ডিপ্লয়মেন্ট']
        }
      },
      {
        id: 'fullstack-enterprise',
        price: 25000,
        turnaround: '15 - 25 Days',
        title: { en: 'Comprehensive Enterprise Platform', bn: 'পূর্ণাঙ্গ এন্টারপ্রাইজ প্ল্যাটফর্ম' },
        deliverables: {
          en: ['Multi-role architecture, payment gateway, background queues', 'Advanced caching, analytics logs, automated tests', 'Full CI/CD & production monitoring setup'],
          bn: ['মাল্টি-রোল আর্কিটেকচার, পেমেন্ট গেটওয়ে, ব্যাকগ্রাউন্ড কিউ', 'এডভান্সড ক্যাশিং, অ্যানালিটিক্স ও অটোমেটেড টেস্ট', 'কমপ্লিট CI/CD ও মনিটরিং সেটআপ']
        }
      }
    ]
  },
  {
    id: 'mobile-app-development',
    iconName: 'Smartphone',
    category: 'Development Services',
    startingPrice: 14000,
    typicalTurnaround: '10 - 20 Days',
    tag: 'Mobile App',
    title: {
      en: 'Cross-Platform Mobile App (React Native / Flutter)',
      bn: 'ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ ডেভেলপমেন্ট (React Native / Flutter)'
    },
    shortDesc: {
      en: 'High-performance iOS & Android mobile apps with offline caching, push notifications, and API synchronization.',
      bn: 'একই কোডবেসে iOS ও Android মোবাইল অ্যাপ, পুশ নোটিফিকেশন, অফলাইন ক্যাশিং ও ব্যাকএন্ড API সিঙ্ক।'
    },
    fullDesc: {
      en: 'Launch native-grade mobile applications with a unified codebase. We build responsive cross-platform apps using React Native or Flutter, complete with Firebase Auth/FCM notifications, camera/storage device APIs, secure token storage, and REST API synchronization.',
      bn: 'একই সঙ্গে iOS ও Android উভয়ের জন্য হাই-পারফরম্যান্স মোবাইল অ্যাপ্লিকেশন। ফায়ারবেস অথেনটিকেশন, পুশ নোটিফিকেশন, ক্যামেরা ও ডিভাইস পারমিশন, অফলাইন ডাটা স্টোরেজ এবং প্লে স্টোর / অ্যাপ স্টোর ডিপ্লয়মেন্ট সাপোর্ট।'
    },
    deliverables: {
      en: [
        'Cross-platform iOS and Android production build packages (APK / IPA)',
        'Clean modular React Native or Flutter codebase with TypeScript/Dart',
        'Push notifications setup (Firebase Cloud Messaging)',
        'Offline data caching & biometric authentication integration',
        'Google Play Console & Apple App Store submission support'
      ],
      bn: [
        'iOS ও Android এর জন্য প্রোডাকশন বিল্ড প্যাকেজ (APK / IPA)',
        'ক্লিন মডুলার React Native / Flutter কোডবেস',
        'Firebase ক্লাউড মেসেজিং পুশ নোটিফিকেশন সেটআপ',
        'বায়োমেট্রিক অথেন্টিকেশন ও অফলাইন ক্যাশিং',
        'গুগল প্লে স্টোর ও অ্যাপল স্টোর সাবমিশন গাইড ও সাপোর্ট'
      ]
    },
    subServices: [
      {
        id: 'mobile-dev-mvp',
        price: 14000,
        turnaround: '10 - 14 Days',
        title: { en: 'MVP Mobile Application', bn: 'MVP মোবাইল অ্যাপ্লিকেশন' },
        deliverables: {
          en: ['Core 5-8 screens, Auth + Profile + Main API feeds', 'Android & iOS test builds', 'Firebase setup'],
          bn: ['কোর ৫-৮টি স্ক্রিন, অথ + প্রোফাইল + মেইন ফিড', 'Android ও iOS টেস্ট বিল্ড', 'Firebase সেটআপ']
        }
      },
      {
        id: 'mobile-dev-pro',
        price: 26000,
        turnaround: '18 - 25 Days',
        title: { en: 'Full Production App with Store Launch', bn: 'ফুল প্রোডাকশন অ্যাপ ও স্টোর পাবলিশিং' },
        deliverables: {
          en: ['Multi-feature app, in-app payments, background sync', 'Push notifications, analytics, crash reporting', 'App Store & Play Store publishing'],
          bn: ['মাল্টি-ফিচার অ্যাপ, ইন-অ্যাপ পেমেন্ট, ব্যাকগ্রাউন্ড সিঙ্ক', 'পুশ নোটিফিকেশন ও ক্র্যাশ রিপোর্টিং', 'প্লে স্টোর ও অ্যাপ স্টোর পাবলিশিং']
        }
      }
    ]
  },
  {
    id: 'ai-llm-integration',
    iconName: 'Cpu',
    category: 'Development Services',
    startingPrice: 7500,
    typicalTurnaround: '4 - 8 Days',
    tag: 'AI Powered',
    title: {
      en: 'AI Agent & LLM Chatbot Integration (Gemini / OpenAI / RAG)',
      bn: 'AI এজেন্ট ও এলএলএম চ্যাটবট ইন্টিগ্রেশন (Gemini / OpenAI)'
    },
    shortDesc: {
      en: 'Custom contextual AI chatbot on your business data, LangChain/Vector DB pipelines, and automated customer workflows.',
      bn: 'আপনার কোম্পানির ডকে ট্রেইনড কাস্টম AI চ্যাটবট, ভেক্টর ডাটাবেস ও জেনারেটিভ AI অটোমেশন।'
    },
    fullDesc: {
      en: 'Supercharge your platform with conversational generative AI. We integrate Google Gemini or OpenAI LLMs trained on your company knowledge base via Retrieval-Augmented Generation (RAG), Pinecone/pgvector vector stores, token management, function calling, and live streaming web chat widgets.',
      bn: 'আপনার ব্যবসায় জেনারেটিভ AI এর শক্তি যুক্ত করুন। আপনার নিজস্ব কোম্পানি ডাটা ও পলিসির উপর কাস্টম RAG পাইপলাইন, গুগল জেমিনি / OpenAI ইন্টিগ্রেশন, লাইভ স্ট্রিমিং চ্যাট উইজেট এবং ফাংশন কলিং অটোমেশন।'
    },
    deliverables: {
      en: [
        'Custom LLM API pipeline (Gemini / OpenAI / Claude) with rate limiting',
        'Retrieval-Augmented Generation (RAG) vector embeddings on business docs',
        'Embeddable web chat widget with markdown and streaming responses',
        'Structured JSON output extraction for automated CRM data entry',
        'Admin monitoring panel for token usage and conversation logs'
      ],
      bn: [
        'কাস্টম LLM API পাইপলাইন (Gemini / OpenAI) ও রেট লিমিটার',
        'কোম্পানি ডকুমেন্টের উপর RAG ভেক্টর এমবেডিংস (pgvector/Pinecone)',
        'ওয়েবসাইটে এমবেডযোগ্য লাইভ স্ট্রিমিং চ্যাট উইজেট',
        'অটোমেটেড ডাটা এন্ট্রির জন্য স্ট্রাকচার্ড JSON এক্সট্রাকশন',
        'টোকেন খরচ ও কনভারসেশন হিস্টোরি মনিটরিং প্যানেল'
      ]
    },
    subServices: [
      {
        id: 'ai-chatbot-widget',
        price: 7500,
        turnaround: '4 - 5 Days',
        title: { en: 'Knowledge-Base Web Chatbot (RAG)', bn: 'নলেজ-বেস ওয়েব চ্যাটবট (RAG)' },
        deliverables: {
          en: ['Vector search on up to 50 company docs/PDFs', 'Web chat widget with markdown formatting', 'Gemini / OpenAI setup with prompt engineering'],
          bn: ['৫০টি ডকুমেন্ট/PDF এর ওপর ভেক্টর সার্চ', 'ওয়েবসাইটের জন্য লাইভ চ্যাট উইজেট', 'জেমিনি/OpenAI প্রম্পট অপটিমাইজেশন']
        }
      },
      {
        id: 'ai-workflow-agent',
        price: 15000,
        turnaround: '8 - 12 Days',
        title: { en: 'Autonomous AI Agent & Tool Calling', bn: 'অটোনোমাস AI এজেন্ট ও টুল কলিং' },
        deliverables: {
          en: ['Multi-step function calling (DB lookups, Email send, Lead creation)', 'Conversation memory & session persistence', 'Admin analytics dashboard'],
          bn: ['মাল্টি-স্টেপ ফাংশন কলিং (ডাটাবেস কোয়েরি, ইমেইল প্রেরণ)', 'মেমরি পারসিস্টেন্স ও সেশন হিস্টোরি', 'এডমিন অ্যানালিটিক্স প্যানেল']
        }
      }
    ]
  },
  {
    id: 'saas-mvp-sprint',
    iconName: 'Zap',
    category: 'Development Services',
    startingPrice: 15000,
    typicalTurnaround: '10 - 14 Days',
    tag: 'Founder Favorite',
    title: {
      en: 'Rapid SaaS MVP Development (Sprint to Launch in 14 Days)',
      bn: 'র‍্যাপিড SaaS MVP ডেভেলপমেন্ট (১৪ দিনের স্প্রিন্ট)'
    },
    shortDesc: {
      en: 'Launch your startup in 14 days with Next.js, authentication, Stripe/bKash subscription billing, and database CRUD.',
      bn: '১৪ দিনে স্টার্টআপ লঞ্চ: Next.js + Tailwind + অথেনটিকেশন + সাবস্ক্রিপশন বিলিং ও ডাটাবেস CRUD।'
    },
    fullDesc: {
      en: 'Go from concept to paying customers fast. Designed for startup founders who need a rapid, production-ready MVP. Includes Next.js App Router, Tailwind UI, Supabase / PostgreSQL database, user auth, subscription billing, and email notifications.',
      bn: 'স্টার্টআপ ফাউন্ডারদের জন্য দ্রুততম সময়ে লাইভ প্রোডাক্ট তৈরি। Next.js অ্যাপ রাউটার, ইউজার অথেন্টিকেশন, সাবস্ক্রিপশন পেমেন্ট গেটওয়ে, ড্যাশবোর্ড এবং অটোমেটেড ইমেইল সহ ১৪ দিনে কমপ্লিট লঞ্চ।'
    },
    deliverables: {
      en: [
        'Complete end-to-end MVP web application launched on Vercel/Supabase',
        'User authentication (Email/Password, Google OAuth)',
        'Recurring subscription billing (Stripe / bKash recurring / SSLCommerz)',
        'Core user dashboard with full CRUD data workflows',
        'Transactional email setup (Resend / SendGrid) and analytics tracking'
      ],
      bn: [
        'Vercel ও Supabase এ লাইভ প্রোডাকশন MVP ওয়েব অ্যাপ',
        'ইউজার অথেন্টিকেশন (ইমেইল/পাসওয়ার্ড ও গুগল লগইন)',
        'রিকারিং সাবস্ক্রিপশন বিলিং ও পেমেন্ট ইন্টিগ্রেশন',
        'কাস্টমার ড্যাশবোর্ড ও কোর ফিচার CRUD ওয়ার্কফ্লো',
        'ট্রানজেকশনাল ইমেইল (Resend) ও ইউজার অ্যানালিটিক্স'
      ]
    }
  },
  {
    id: 'frontend-engineering-spa',
    iconName: 'Monitor',
    category: 'Development Services',
    startingPrice: 6000,
    typicalTurnaround: '4 - 8 Days',
    tag: 'Popular',
    title: {
      en: 'Modern Frontend Web App (React / Next.js / Tailwind)',
      bn: 'আধুনিক ফ্রন্টএন্ড ওয়েব অ্যাপ (React / Next.js)'
    },
    shortDesc: {
      en: 'Ultra-fast, responsive, accessible Single Page Applications (SPA) with smooth animations and state management.',
      bn: 'Tailwind CSS, Framer Motion ও TypeScript দিয়ে দ্রুতগতির রেসপনসিভ ফ্রন্টএন্ড ওয়েব অ্যাপ।'
    },
    fullDesc: {
      en: 'Convert any Figma or design spec into clean, modular, accessible, and ultra-fast React or Next.js code. Fully responsive across ultra-wide desktops to mobile devices, integrated with API hooks, state managers (Zustand/Redux), and smooth motion transitions.',
      bn: 'ফিগমা বা যেকোনো ডিজাইন থেকে পিক্সেল-পারফেক্ট মডার্ন React/Next.js ফ্রন্টএন্ড কোডিং। রেসপনসিভ লেআউট, স্মুথ মোশন এনিমেশন এবং স্টেট ম্যানেজমেন্ট ইন্টিগ্রেশন।'
    },
    deliverables: {
      en: [
        'Pixel-perfect translation from Figma / Sketch to React + Tailwind',
        'TypeScript for type safety and clean architecture',
        'Responsive layout across mobile, tablet, and desktop viewports',
        'API client integration (Axios/TanStack Query)',
        'SEO-optimized meta tags, Lighthouse 95+ performance rating'
      ],
      bn: [
        'ফিগমা থেকে পিক্সেল-পারফেক্ট React + Tailwind কোডিং',
        'টাইপ-সেফ TypeScript ও মডুলার কম্পোনেন্ট আর্কিটেকচার',
        'মোবাইল, ট্যাবলেট ও ডেস্কটপের জন্য ১০০% রেসপনসিভ',
        'API ক্লায়েন্ট ইন্টিগ্রেশন (TanStack Query/Axios)',
        'Lighthouse ৯৫+ পারফরম্যান্স ও SEO অপটিমাইজেশন'
      ]
    }
  },
  {
    id: 'backend-api-architecture',
    iconName: 'Server',
    category: 'Development Services',
    startingPrice: 5000,
    typicalTurnaround: '3 - 7 Days',
    title: {
      en: 'Backend API & Microservices Architecture',
      bn: 'ব্যাকএন্ড API ও মাইক্রোসার্ভিসেস আর্কিটেকচার'
    },
    shortDesc: {
      en: 'Robust RESTful and GraphQL APIs built with Node.js, Express, Fastify, Python, or Go.',
      bn: 'Node.js, Express, Python বা Go দিয়ে সুরক্ষিত ও হাই-পারফরম্যান্স REST/GraphQL API।'
    },
    fullDesc: {
      en: 'Secure, high-throughput backend APIs designed to scale under heavy traffic. Includes structured database migrations, input sanitization/validation (Zod/Joi), JWT/OAuth2 security, webhook integrations, rate-limiting, and error telemetry.',
      bn: 'উচ্চ ট্রাফিকের জন্য সুরক্ষিত ব্যাকএন্ড API। ডাটাবেস মাইগ্রেশন, ইনপুট ভ্যালিডেশন, ওয়েবহুক ইন্টিগ্রেশন, রেট-লিমিটিং এবং বিস্তারিত ডকুমেন্টেশন।'
    },
    deliverables: {
      en: [
        'Modular REST / GraphQL API endpoints with clean routing',
        'Secure authentication & authorization middleware',
        'PostgreSQL / MySQL / Redis caching integration',
        'Postman Collection & interactive OpenAPI/Swagger docs',
        'Automated unit & integration test coverage'
      ],
      bn: [
        'ক্লিন রাউটিং সহ মডুলার REST / GraphQL API',
        'সুরক্ষিত অথেনটিকেশন ও অথোরাইজেশন মিডলওয়্যার',
        'Redis ক্যাশিং ও ডাটাবেস অপটিমাইজেশন',
        'ইন্টারেক্টিভ Swagger / Postman API ডকস',
        'ইউনিট টেস্টিং ও ডিপ্লয়মেন্ট স্ক্রিপ্ট'
      ]
    }
  },
  {
    id: 'cloud-devops-cicd',
    iconName: 'Cloud',
    category: 'Development Services',
    startingPrice: 4500,
    typicalTurnaround: '2 - 5 Days',
    tag: 'DevOps & Cloud',
    title: {
      en: 'Cloud Infrastructure, Docker & CI/CD Pipelines (AWS / GCP / Vercel)',
      bn: 'ক্লাউড ইনফ্রাস্ট্রাকচার, ডকার ও CI/CD অটোমেশন'
    },
    shortDesc: {
      en: 'Automated GitHub Actions deployments, Docker containerization, Nginx reverse proxy, and cloud scaling.',
      bn: 'GitHub Actions CI/CD অটোমেশন, ডকার কন্টেইনারাইজেশন, AWS/GCP ক্লাউড ডিপ্লয়মেন্ট ও SSL সিকিউরিটি।'
    },
    fullDesc: {
      en: 'Set up reliable, automated cloud environments for your web applications. We configure Docker multi-stage builds, automated testing & deployment pipelines with GitHub Actions, AWS EC2/S3 or GCP Cloud Run hosting, SSL certificate automation, and server monitoring.',
      bn: 'আপনার অ্যাপের নিরবচ্ছিন্ন আপটাইমের জন্য আধুনিক DevOps সেটআপ। ডকার কন্টেইনারাইজেশন, GitHub Actions অটোমেটেড ডিপ্লয়মেন্ট, AWS / GCP / DigitalOcean কনফিগারেশন, Nginx রিভার্স প্রক্সি এবং ফ্রি SSL সেটআপ।'
    },
    deliverables: {
      en: [
        'Multi-stage optimized Dockerfile and docker-compose configurations',
        'Automated CI/CD pipeline with GitHub Actions (Build, Test, Deploy)',
        'Cloud server deployment (AWS, GCP, DigitalOcean, or Vercel)',
        'Nginx reverse proxy, automatic SSL certificates (Let\'s Encrypt)',
        'Uptime telemetry, automated log rotation, and server alerts'
      ],
      bn: [
        'অপটিমাইজড Dockerfile ও docker-compose ফাইল',
        'GitHub Actions দিয়ে অটোমেটেড CI/CD ডিপ্লয়মেন্ট পাইপলাইন',
        'AWS, GCP বা DigitalOcean ক্লাউড সার্ভার কনফিগারেশন',
        'Nginx রিভার্স প্রক্সি ও অটোমেটিক SSL সার্টিফিকেট সেটআপ',
        'সার্ভার হেলথ মনিটরিং ও ডাউনটাইম অ্যালার্ট সেটআপ'
      ]
    }
  },
  {
    id: 'ecommerce-custom-platform',
    iconName: 'ShoppingBag',
    category: 'Development Services',
    startingPrice: 9000,
    typicalTurnaround: '7 - 14 Days',
    tag: 'E-Commerce',
    title: {
      en: 'Custom E-Commerce Store & Payment Engine',
      bn: 'কাস্টম ই-কমার্স প্ল্যাটফর্ম ও পেমেন্ট গেটওয়ে'
    },
    shortDesc: {
      en: 'Full-featured online store with inventory management, cart, checkout, and local/global payment gateways.',
      bn: 'প্রোডাক্ট ক্যাটালগ, ইনভেন্টরি, কার্ট এবং bKash/Nagad/Stripe পেমেন্ট গেটওয়ে সহ ই-কমার্স প্ল্যাটফর্ম।'
    },
    fullDesc: {
      en: 'Launch an online storefront that converts visitors into customers. Includes product catalogs with multi-variant options, coupon & discount engine, automated order invoicing, customer accounts, and automated integration with bKash, Nagad, SSLCommerz, Stripe, and PayPal.',
      bn: 'আধুনিক ই-কমার্স প্ল্যাটফর্ম। প্রোডাক্ট ভ্যারিয়েন্ট, কার্ট ও চেকআউট, ইনভয়েস জেনারেশন এবং bKash, Nagad, SSLCommerz ও আন্তর্জাতিক কার্ড পেমেন্ট গেটওয়ে ইন্টিগ্রেশন।'
    },
    deliverables: {
      en: [
        'Custom storefront with lightning-fast catalog search & filters',
        'Shopping cart & multi-step secure checkout workflow',
        'Payment gateway integrations (bKash, Nagad, SSLCommerz, Stripe)',
        'Merchant admin dashboard for orders, stock & sales analytics',
        'Automated SMS & Email order confirmation notifications'
      ],
      bn: [
        'দ্রুতগতির প্রোডাক্ট সার্চ ও ফিল্টারিং সহ কাস্টম স্টোরফ্রন্ট',
        'স্মুথ শপিং কার্ট ও সিকিউর চেকআউট ওয়ার্কফ্লো',
        'bKash, Nagad, SSLCommerz ও Stripe পেমেন্ট ইন্টিগ্রেশন',
        'অর্ডার ও স্টক ট্র্যাকিংয়ের জন্য মার্চেন্ট এডমিন প্যানেল',
        'স্বয়ংক্রিয় SMS ও ইমেইল নোটিফিকেশন সিস্টেম'
      ]
    }
  },

  // ========================================================
  // 3. WORDPRESS SOLUTIONS & WING
  // ========================================================
  {
    id: 'custom-wordpress-dev',
    iconName: 'Globe',
    category: 'WordPress Services',
    startingPrice: 4000,
    typicalTurnaround: '3 - 7 Days',
    tag: 'WordPress Core',
    title: {
      en: 'Custom WordPress Theme & Site Development',
      bn: 'কাস্টম ওয়ার্ডপ্রেস থিম ও ওয়েবসাইট ডেভেলপমেন্ট'
    },
    shortDesc: {
      en: 'Tailored WordPress websites, custom PHP/Block themes, Gutenberg blocks, and seamless CMS architectures.',
      bn: 'ব্যবসায়িক ওয়েবসাইটের জন্য কাস্টম ওয়ার্ডপ্রেস থিম, গুটেনবার্গ ব্লক এবং সম্পূর্ণ CMS সেটআপ।'
    },
    fullDesc: {
      en: 'Ditch bloated third-party themes. We build lightweight, ultra-fast, custom WordPress themes precisely matching your Figma designs. Fully editable from the WP admin without breaking, optimized for Core Web Vitals, and built with modern PHP 8+ and clean modular architecture.',
      bn: 'কোনো ভারী টেমপ্লেট নয়—ফিগমা থেকে ১০০% কাস্টম কোডেড লাইটওয়েট ওয়ার্ডপ্রেস ওয়েবসাইট। এডমিন প্যানেল থেকে সহজে এডিট করার সুবিধা, স্পিড অপটিমাইজেশন এবং এসইও ফ্রেন্ডলি কাঠামো।'
    },
    deliverables: {
      en: [
        '100% custom lightweight WordPress theme matching Figma design',
        'Gutenberg / Elementor editable custom section blocks',
        'Mobile-first responsive styling and cross-browser testing',
        'Essential SEO, security & automated backup configuration',
        'Client video walkthrough on how to edit and manage content'
      ],
      bn: [
        'ফিগমা অনুযায়ী ১০০% কাস্টম লাইটওয়েট ওয়ার্ডপ্রেস থিম',
        'সহজে কনটেন্ট এডিট করার জন্য কাস্টম গুটেনবার্গ / এলিমেন্টর ব্লক',
        'মোবাইল-ফার্স্ট রেসপনসিভ ডিজাইন ও ক্রস-ব্রাউজার টেস্টিং',
        'SEO, সিকিউরিটি ও স্বয়ংক্রিয় ব্যাকআপ কনফিগারেশন',
        'সাইট ম্যানেজ ও কনটেন্ট আপডেটের জন্য ভিডিও গাইড'
      ]
    },
    subServices: [
      {
        id: 'wp-starter',
        price: 4000,
        turnaround: '3 Days',
        title: { en: '1-5 Pages Business Website', bn: '১-৫ পেজ বিজনেস ওয়েবসাইট' },
        deliverables: {
          en: ['Up to 5 custom pages, contact forms, mobile responsiveness, basic SEO'],
          bn: ['৫টি পেজ, কন্টাক্ট ফর্ম, মোবাইল রেসপনসিভনেস ও বেসিক এসইও']
        }
      },
      {
        id: 'wp-advanced',
        price: 8000,
        turnaround: '7 Days',
        title: { en: 'Full Dynamic Corporate / News Portal', bn: 'ফুল ডাইনামিক কর্পোরেট / নিউজ পোর্টাল' },
        deliverables: {
          en: ['Custom Post Types, Advanced Custom Fields (ACF), multi-language, high traffic caching'],
          bn: ['কাস্টম পোস্ট টাইপস, ACF ইন্টিগ্রেশন, বহুভাষিক সাপোর্ট ও হাই-ট্রাফিক ক্যাশিং']
        }
      }
    ]
  },
  {
    id: 'figma-to-wordpress',
    iconName: 'Layers',
    category: 'WordPress Services',
    startingPrice: 3500,
    typicalTurnaround: '3 - 5 Days',
    tag: 'Pixel Perfect',
    title: {
      en: 'Figma to WordPress / Elementor / Bricks Builder Conversion',
      bn: 'ফিগমা থেকে ওয়ার্ডপ্রেস / এলিমেন্টর / ব্রিকস কনভার্শন'
    },
    shortDesc: {
      en: 'Pixel-perfect conversion of Figma UI designs into clean, editable WordPress pages without bloat.',
      bn: 'ফিগমা ডিজাইন থেকে ১০০% নিখুঁত ওয়ার্ডপ্রেস / এলিমেন্টর / ব্রিকস পেজ বিল্ডার কনভার্শন।'
    },
    fullDesc: {
      en: 'Transform your Figma, Adobe XD, or Sketch designs into clean, high-performance WordPress pages using Elementor Pro, Bricks Builder, or Gutenberg blocks. Every layout is 100% responsive, optimized for fast loading, and easy for non-technical team members to edit.',
      bn: 'আপনার যে কোনো ফিগমা বা স্কেচ ডিজাইনকে ওয়ার্ডপ্রেসে রূপান্তর। এলিমেন্টর প্রো, ব্রিকস বিল্ডার বা গুটেনবার্গ দিয়ে প্রতিটি সেকশন হুবহু তৈরি করা হয় যেন যে কেউ সহজে টেক্সট ও ছবি পরিবর্তন করতে পারে।'
    },
    deliverables: {
      en: [
        'Pixel-perfect Figma to WordPress conversion with 100% fidelity',
        'Clean DOM structure without unnecessary wrapper bloat',
        'Fully responsive across mobile, tablet, and widescreen desktops',
        'Global typography and color palette configuration',
        'Basic on-page SEO tags and asset image optimization'
      ],
      bn: [
        'ফিগমা ডিজাইন থেকে ১০০% নিখুঁত ওয়ার্ডপ্রেস কনভার্শন',
        'ক্লিন কোড ও আননেসেসারি প্লাগইন মুক্ত লাইটওয়েট স্ট্রাকচার',
        'মোবাইল, ট্যাবলেট ও বড় স্ক্রিনে পারফেক্ট রেসপনসিভনেস',
        'গ্লোবাল ফন্ট ও কালার প্যালেট সেটআপ',
        'ইমেজ অপটিমাইজেশন ও বেসিক অন-পেজ এসইও'
      ]
    }
  },
  {
    id: 'woocommerce-store-dev',
    iconName: 'ShoppingBag',
    category: 'WordPress Services',
    startingPrice: 5500,
    typicalTurnaround: '4 - 9 Days',
    tag: 'WooCommerce',
    title: {
      en: 'WooCommerce E-Commerce Store & Gateway Setup',
      bn: 'WooCommerce ই-কমার্স স্টোর ও পেমেন্ট সেটআপ'
    },
    shortDesc: {
      en: 'Turnkey WooCommerce online shops with Bangladeshi & international payment gateways, shipping, and inventory.',
      bn: 'bKash/Nagad পেমেন্ট, কুরিয়ার ইন্টিগ্রেশন ও ইনভেন্টরি সহ কমপ্লিট WooCommerce স্টোর।'
    },
    fullDesc: {
      en: 'Complete WooCommerce store setup built to drive online sales. Includes product catalog setup, variable attributes, cart & customized checkout pages, coupon systems, and seamless integration with bKash, Nagad, Rocket, SSLCommerz, Pathao/Steadfast couriers, and Stripe.',
      bn: 'অনলাইনে বিক্রয় বাড়ানোর জন্য সম্পূর্ণ WooCommerce অনলাইন স্টোর। প্রোডাক্ট ভ্যারিয়েন্ট, কাস্টমাইজড চেকআউট, কুপন ডিসকাউন্ট এবং bKash, Nagad ও কুরিয়ার ট্র্যাকিং ইন্টিগ্রেশন।'
    },
    deliverables: {
      en: [
        'Complete WooCommerce installation, theme & catalog setup',
        'bKash, Nagad, Rocket, Card & Cash on Delivery payment gateways',
        'Courier shipping calculator & order tracking setup',
        'Customized frictionless one-page checkout option',
        'Inventory stock management and low-stock alerts'
      ],
      bn: [
        'কমপ্লিট WooCommerce ইন্সটলেশন ও ক্যাটালগ কনফিগারেশন',
        'bKash, Nagad, Rocket, কার্ড ও ক্যাশ অন ডেলিভারি গেটওয়ে',
        'কুরিয়ার শিপিং ও অর্ডার ট্র্যাকিং সেটআপ',
        'দ্রুত কেনাকাটার জন্য কাস্টম ওয়ান-পেজ চেকআউট',
        'ইনভেন্টরি স্টক ট্র্যাকিং ও লো-স্টক এলার্ট'
      ]
    }
  },
  {
    id: 'lms-membership-portal',
    iconName: 'GraduationCap',
    category: 'WordPress Services',
    startingPrice: 6500,
    typicalTurnaround: '5 - 10 Days',
    tag: 'EdTech Solution',
    title: {
      en: 'LMS (E-Learning) & Membership Portal on WordPress',
      bn: 'অনলাইন কোর্স (LMS) ও মেম্বারশিপ পোর্টাল ডেভেলপমেন্ট'
    },
    shortDesc: {
      en: 'Complete video course platform, student quizzes, certificates, and recurring membership paywalls.',
      bn: 'LearnDash / Tutor LMS সেটআপ, ভিডিও লেসন সিকিউরিটি, কুইজ, সার্টিফিকেট ও সাবস্ক্রিপশন মেম্বারশিপ।'
    },
    fullDesc: {
      en: 'Build your own Udemy or Coursera-style e-learning platform or exclusive membership community on WordPress using Tutor LMS, LearnDash, or MemberPress. Includes video security, lesson progression, quizzes, certificates, and bKash/Card payment integrations.',
      bn: 'ওয়ার্ডপ্রেসে আপনার নিজস্ব ই-লার্নিং একাডেমি তৈরি করুন। সিকিউর ভিডিও প্লেয়ার, কুইজ সিস্টেম, অটোমেটেড কোর্স সার্টিফিকেট এবং বিকাশ/নগদ বা কার্ডের মাধ্যমে পেমেন্ট করে কোর্স এনরোলমেন্ট সিস্টেম।'
    },
    deliverables: {
      en: [
        'Complete LMS setup (Tutor LMS / LearnDash / MemberPress)',
        'Protected video lessons with secure embedding (Vimeo/BunnyCDN/YouTube)',
        'Interactive student quizzes, assignments, and auto-generated certificates',
        'Payment gateway setup (bKash, Nagad, Stripe) for single or subscription courses',
        'Instructor & Student front-end account dashboards'
      ],
      bn: [
        'কমপ্লিট LMS সেটআপ (Tutor LMS / LearnDash / MemberPress)',
        'সুরক্ষিত ভিডিও লেসন প্লেয়ার ইন্টিগ্রেশন (BunnyCDN/Vimeo)',
        'কুইজ, অ্যাসাইনমেন্ট ও স্বয়ংক্রিয় কোর্স সার্টিফিকেট সিস্টেম',
        'কোর্স বিক্রির জন্য bKash, Nagad ও আন্তর্জাতিক পেমেন্ট গেটওয়ে',
        'টিচার ও স্টুডেন্টদের জন্য আলাদা ড্যাশবোর্ড'
      ]
    }
  },
  {
    id: 'multivendor-marketplace',
    iconName: 'ShoppingBag',
    category: 'WordPress Services',
    startingPrice: 8500,
    typicalTurnaround: '7 - 14 Days',
    tag: 'Marketplace',
    title: {
      en: 'Multi-Vendor Marketplace Platform (Dokan / WCFM)',
      bn: 'মাল্টি-ভেন্ডর মার্কেটপ্লেস ই-কমার্স (Dokan / WCFM)'
    },
    shortDesc: {
      en: 'Amazon/Daraz-style multi-seller marketplace with vendor dashboards, automated commission splits, and payouts.',
      bn: 'মাল্টিপল সেলার স্টোর, আলাদা ভেন্ডর ড্যাশবোর্ড, অটোমেটেড কমিশন ও উইথড্রয়াল সহ দারাজ/অ্যামাজন স্টাইল মার্কেটপ্লেস।'
    },
    fullDesc: {
      en: 'Create a thriving multi-seller e-commerce marketplace using Dokan Pro or WCFM. Vendors can register, upload their own products, manage inventory, and request payout withdrawals, while the platform owner earns automated commission on every sale.',
      bn: 'অ্যামাজন বা দারাজের মতো বহু বিক্রেতার মার্কেটপ্লেস প্ল্যাটফর্ম। যে কেউ ভেন্ডর হিসেবে রেজিস্ট্রেশন করে প্রোডাক্ট আপলোড করতে পারবে, আর আপনি প্রতি বিক্রিতে নির্দিষ্ট কমিশন অটোমেটিকভাবে পেয়ে যাবেন।'
    },
    deliverables: {
      en: [
        'Multi-vendor platform setup with Dokan / WCFM on WooCommerce',
        'Dedicated vendor registration, front-end dashboard, and store pages',
        'Automated admin commission deduction per product category or vendor',
        'Vendor payout withdrawal management (bKash, Bank, PayPal)',
        'Customer product reviews and verified seller badges'
      ],
      bn: [
        'Dokan / WCFM দিয়ে সম্পূর্ণ মাল্টি-ভেন্ডর মার্কেটপ্লেস কনফিগারেশন',
        'আলাদা ভেন্ডর রেজিস্ট্রেশন, স্টোর পেজ ও ফ্রন্টএন্ড ড্যাশবোর্ড',
        'অটোমেটেড এডমিন কমিশন পার্সেন্টেজ ক্যালকুলেশন',
        'ভেন্ডর উইথড্রয়াল ও পেমেন্ট ডিসবার্সমেন্ট সিস্টেম',
        'কাস্টমার রিভিউ ও ভেরিফায়েড সেলার ব্যাজ সিস্টেম'
      ]
    }
  },
  {
    id: 'wordpress-speed-security-fix',
    iconName: 'Zap',
    category: 'WordPress Services',
    startingPrice: 2500,
    typicalTurnaround: '24 - 48 Hours',
    tag: 'Speed & Fix',
    title: {
      en: 'WordPress Speed Optimization & Security Hardening',
      bn: 'ওয়ার্ডপ্রেস স্পিড অপটিমাইজেশন ও সিকিউরিটি ফিক্স'
    },
    shortDesc: {
      en: 'Boost Google PageSpeed scores to 90+, achieve sub-second load times, malware cleanup, and security lockdown.',
      bn: 'Google PageSpeed ৯০+ স্কোর অর্জন, লোডিং স্পিড বৃদ্ধি, ম্যালওয়্যার ক্লিনআপ ও সিকিউরিটি প্রটেকশন।'
    },
    fullDesc: {
      en: 'Transform slow, vulnerable WordPress websites into lightning-fast, fortress-secure platforms. We optimize databases, minify CSS/JS, configure Redis/LiteSpeed caching, implement WebP image compression, setup Cloudflare CDN, remove malware, and patch security vulnerabilities.',
      bn: 'আপনার স্লো ও অনিরাপদ ওয়েবসাইটকে সুপার ফাস্ট এবং সুরক্ষিত প্ল্যাটফর্মে রূপান্তর। ডাটাবেস অপটিমাইজেশন, কোড মিনিফিকেশন, Redis/LiteSpeed ক্যাশিং, ক্লাউডফ্লেয়ার CDN এবং ম্যালওয়্যার রিমুভাল।'
    },
    deliverables: {
      en: [
        'Google PageSpeed score boosted to 90+ (Desktop & Mobile)',
        'Server TTFB (Time to First Byte) under 300ms',
        'Image lossless compression & Next-Gen WebP delivery',
        'Database table cleaning & transient sweep',
        'Firewall configuration, brute-force protection & SSL lockdown'
      ],
      bn: [
        'Google PageSpeed স্কোর ৯০+ এ উন্নীত করা',
        'সার্ভার লোডিং টাইম ও TTFB উল্লেখযোগ্যভাবে কমানো',
        'ইমেজ কম্প্রেশন ও আধুনিক WebP ফরম্যাটে রূপান্তর',
        'ডাটাবেস টেবিল ক্লিনআপ ও ক্যাশিং কনফিগারেশন',
        'ফায়ারওয়াল সেটআপ, ব্রুট-ফোর্স প্রটেকশন ও SSL কনফিগারেশন'
      ]
    }
  },
  {
    id: 'wordpress-monthly-retainer',
    iconName: 'ShieldCheck',
    category: 'WordPress Services',
    startingPrice: 2500,
    typicalTurnaround: 'Monthly Retainer',
    tag: 'Care Plan',
    title: {
      en: 'WordPress Maintenance, Backup & Security Retainer Support',
      bn: 'ওয়ার্ডপ্রেস মাসিক রক্ষণাবেক্ষণ ও সিকিউরিটি সাপোর্ট'
    },
    shortDesc: {
      en: 'Peace of mind for your WordPress website with weekly updates, cloud backups, 24/7 uptime monitoring & quick fixes.',
      bn: 'ওয়েবসাইটের নিরবচ্ছিন্ন সুরক্ষায় সাপ্তাহিক আপডেট, দৈনিক ক্লাউড ব্যাকআপ, ২৪/৭ মনিটরিং ও টেকনিক্যাল ফিক্স।'
    },
    fullDesc: {
      en: 'Keep your business website always online, updated, and secure. We handle core/plugin/theme updates on staging first to avoid crashes, run daily off-site cloud backups, monitor uptime every 60 seconds, remove security threats, and provide 3 hours of included monthly design/content tweaks.',
      bn: 'ওয়েবসাইট ক্র্যাশ বা হ্যাক হওয়ার ভয় দূর করুন। আমাদের মাসিক কেয়ার প্ল্যানে পাচ্ছেন নিরাপদ প্লাগইন ও থিম আপডেট, দৈনিক অফ-সাইট ক্লাউড ব্যাকআপ, প্রতি মিনিটে আপটাইম মনিটরিং এবং যেকোনো প্রয়োজনে প্রতি মাসে ৩ ঘণ্টা ফ্রি কনটেন্ট বা ডিজাইন সাপোর্ট।'
    },
    deliverables: {
      en: [
        'Weekly safe plugin, theme, and WordPress core updates with staging tests',
        'Daily automated off-site cloud backups (Google Drive / AWS S3)',
        '24/7 uptime monitoring with instant downtime alert response',
        'Continuous security scans, malware cleanup, and firewall protection',
        '3 hours of complimentary content/banner/design adjustments every month'
      ],
      bn: [
        'স্টেজিংয়ে টেস্ট করে নিরাপদ প্লাগইন ও ওয়ার্ডপ্রেস কোর আপডেট',
        'প্রতিদিনের স্বয়ংক্রিয় ক্লাউড ব্যাকআপ (Google Drive/AWS)',
        '২৪/৭ নিরবচ্ছিন্ন আপটাইম মনিটরিং ও ইনস্ট্যান্ট অ্যালার্ট রেসপন্স',
        'নিয়মিত সিকিউরিটি স্ক্যান, ম্যালওয়্যার ক্লিন ও ফায়ারওয়াল রক্ষণাবেক্ষণ',
        'প্রতি মাসে ৩ ঘণ্টার যেকোনো ডিজাইন বা কনটেন্ট আপডেট সাপোর্ট'
      ]
    }
  },

  // ========================================================
  // 4. DATA ANALYSIS & BUSINESS INTELLIGENCE
  // ========================================================
  {
    id: 'bi-interactive-dashboard',
    iconName: 'BarChart2',
    category: 'Data Analysis',
    startingPrice: 4500,
    typicalTurnaround: '3 - 7 Days',
    tag: 'BI Flagship',
    title: {
      en: 'Interactive BI Dashboards (Power BI / Tableau / Streamlit)',
      bn: 'ইন্টারেক্টিভ BI ড্যাশবোর্ড (Power BI / Tableau)'
    },
    shortDesc: {
      en: 'Dynamic executive dashboards, real-time KPI trackers, interactive filters, and visual business reporting.',
      bn: 'Power BI, Tableau বা Python দিয়ে আকর্ষণীয় বিজনেস কেপিআই ড্যাশবোর্ড ও ভিজ্যুয়াল রিপোর্ট।'
    },
    fullDesc: {
      en: 'Turn raw, fragmented business datasets into actionable intelligence. We build intuitive, interactive dashboards in Power BI, Tableau, or Streamlit with dynamic slicers, DAX calculated measures, trend forecasts, executive summary views, and automated refresh pipelines.',
      bn: 'অগোছালো ডাটাকে স্পষ্ট বিজনেস ইনসাইটে রূপান্তর। Power BI বা Tableau-তে কাস্টম DAX ক্যালকুলেশন, ডাইনামিক ফিল্টার, ট্রেন্ড অ্যানালাইসিস এবং এক্সিকিউটিভ ড্যাশবোর্ড তৈরি।'
    },
    deliverables: {
      en: [
        'Interactive Power BI (.pbix) / Tableau workbook / Streamlit app',
        'Complex DAX / Calculated fields and KPI card indicators',
        'Automated scheduled data refresh and source connector setup',
        'Executive summary page with exportable PDF/Excel views',
        'User guide documentation on navigating and filtering insights'
      ],
      bn: [
        'ইন্টারেক্টিভ Power BI (.pbix) বা Tableau ওয়ার্কবুক ফাইল',
        'কাস্টম DAX পরিমাপক ও ভিজ্যুয়াল কেপিআই ইন্ডিকেটর',
        'অটোমেটেড ডাটা রিফ্রেশ ও সোর্স কানেকশন সেটআপ',
        'এক্সিকিউটিভ সামারি পেজ ও এক্সপোর্টেবল রিপোর্ট',
        'ড্যাশবোর্ড ব্যবহারের বিস্তারিত ইউজার গাইড'
      ]
    },
    subServices: [
      {
        id: 'bi-single',
        price: 4500,
        turnaround: '3 Days',
        title: { en: 'Single-Page Executive KPI Dashboard', bn: 'সিঙ্গেল-পেজ এক্সিকিউটিভ KPI ড্যাশবোর্ড' },
        deliverables: {
          en: ['Up to 5 data sources, 8-10 interactive visuals, DAX measures'],
          bn: ['৫টি পর্যন্ত ডাটা সোর্স, ৮-১০টি ভিজ্যুয়াল ও DAX ক্যালকুলেশন']
        }
      },
      {
        id: 'bi-enterprise',
        price: 9500,
        turnaround: '7 Days',
        title: { en: 'Multi-Tab Enterprise BI Suite (3-5 Views)', bn: 'মাল্টি-ট্যাব এন্টারপ্রাইজ BI স্যুট (৩-৫ ভিউ)' },
        deliverables: {
          en: ['Sales, Finance, Operations & HR tabs, automated data pipeline, row-level security'],
          bn: ['সেলস, ফাইন্যান্স ও অপারেশনাল ট্যাব, অটোমেটেড ডাটা পাইপলাইন ও সিকিউরিটি']
        }
      }
    ]
  },
  {
    id: 'ecommerce-rfm-analytics',
    iconName: 'Users',
    category: 'Data Analysis',
    startingPrice: 4500,
    typicalTurnaround: '3 - 6 Days',
    tag: 'E-Com Growth',
    title: {
      en: 'Customer Analytics & RFM Segmentation for E-Commerce',
      bn: 'ই-কমার্স কাস্টমার অ্যানালিটিক্স ও RFM সেগমেন্টেশন'
    },
    shortDesc: {
      en: 'Customer Lifetime Value (CLV), churn prediction, RFM clustering, and actionable marketing cohorts.',
      bn: 'কাস্টমার পার্চেজ বিহেভিয়ার, লয়্যালটি সেগমেন্টেশন, ড্রপ-অফ অ্যানালাইসিস ও রিটার্গেটিং লিস্ট তৈরি।'
    },
    fullDesc: {
      en: 'Identify your most valuable shoppers and stop customer churn. We analyze historical transactions to calculate Recency, Frequency, and Monetary (RFM) scores, Customer Lifetime Value (CLV), repurchase cycles, and produce targeted customer cohorts for email and SMS marketing campaigns.',
      bn: 'আপনার ই-কমার্সের কোন কাস্টমাররা সবচেয়ে বেশি লাভজনক তা নির্ধারণ করুন। RFM মডেলিং ও ক্লাস্টারিং এর মাধ্যমে চ্যাম্পিয়ন, লয়্যাল, ও ড্রপ-আউট ঝুঁকিপূর্ণ কাস্টমারদের আলাদা করে স্পেশাল ক্যাম্পেইনের জন্য টার্গেটেড লিস্ট তৈরি।'
    },
    deliverables: {
      en: [
        'RFM customer segmentation model (Champions, Loyal, At-Risk, Lost)',
        'Customer Lifetime Value (CLV) distribution and cohort retention heatmaps',
        'Actionable customer list exports tagged for Meta Ads and SMS campaigns',
        'Interactive Power BI / Python dashboard for customer segment tracking',
        'Executive summary with 5 high-impact marketing recommendations'
      ],
      bn: [
        'RFM কাস্টমার ক্লাস্টারিং মডেল (চ্যাম্পিয়ন, লয়্যাল, রিস্কি, লস্ট গ্রুপ)',
        'কাস্টমার লাইফটাইম ভ্যালু (CLV) ও কোহোর্ট রিটেনশন হিটম্যাপ',
        'Meta Ads এবং SMS ক্যাম্পেইনের জন্য রেডি সেগমেন্টেড কাস্টমার লিস্ট',
        'গ্রাহক ধরে রাখার স্ট্র্যাটেজি সহ ভিজ্যুয়াল অ্যানালিটিক্স ড্যাশবোর্ড',
        'সেলস দ্বিগুণ করার জন্য ৫টি কার্যকর ডেটা-ড্রিভেন সুপারিশ'
      ]
    }
  },
  {
    id: 'excel-sheets-automation',
    iconName: 'FileSpreadsheet',
    category: 'Data Analysis',
    startingPrice: 2500,
    typicalTurnaround: '2 - 4 Days',
    tag: 'Fast Automation',
    title: {
      en: 'Automated Reporting & Google Sheets / Excel VBA Automation',
      bn: 'এক্সেল ও গুগল শিটস অটোমেশন ও অটো রিপোর্টিং'
    },
    shortDesc: {
      en: 'Automate daily manual spreadsheet tasks with custom Apps Script, VBA macros, dynamic formulas, and PDF reports.',
      bn: 'গুগল অ্যাপস স্ক্রিপ্ট ও VBA ম্যাক্রো দিয়ে এক্সেল বা শিটসের প্রতিদিনের কাজ স্বয়ংক্রিয় করা ও ওয়ান-ক্লিক রিপোর্ট।'
    },
    fullDesc: {
      en: 'Eliminate hours of repetitive manual data entry. We write robust Google Apps Scripts and Excel VBA macros to automatically import, transform, format, validate, and email PDF reports to management on a daily or weekly schedule.',
      bn: 'প্রতিদিনের ক্লান্তিকর এক্সেল কাজকে এক ক্লিকে নিয়ে আসুন। কাস্টম Apps Script বা VBA ম্যাক্রোর সাহায্যে অটোমেটেড ডাটা ফরম্যাটিং, ক্যালকুলেশন, ইনভয়েস জেনারেটর এবং স্বয়ংক্রিয় ইমেইল রিপোর্টিং সেটআপ।'
    },
    deliverables: {
      en: [
        'Automated Google Apps Script or Excel VBA macro file (.xlsm / Google Sheet)',
        'One-click data cleanup, consolidation, and PDF report generator',
        'Automated scheduled email dispatch with PDF attachments',
        'Advanced formula architecture (QUERY, INDEX/MATCH, LAMBDA, ARRAYFORMULA)',
        'Video walkthrough demonstrating how the automation runs'
      ],
      bn: [
        'Google Apps Script বা Excel VBA অটোমেশন ফাইল (.xlsm / Sheet)',
        'এক ক্লিকে ডাটা কনসলিডেশন ও PDF ইনভয়েস/রিপোর্ট তৈরি',
        'নির্দিষ্ট সময়ে ম্যানেজমেন্টের কাছে স্বয়ংক্রিয় ইমেইল প্রেরক স্ক্রিপ্ট',
        'উন্নত ফর্মুলা আর্কিটেকচার (QUERY, LAMBDA, ARRAYFORMULA)',
        'অটোমেশনটি কীভাবে চালাতে হবে তার ভিডিও গাইড'
      ]
    }
  },
  {
    id: 'financial-sales-forecasting',
    iconName: 'TrendingUp',
    category: 'Data Analysis',
    startingPrice: 5500,
    typicalTurnaround: '4 - 8 Days',
    tag: 'Finance & CFO',
    title: {
      en: 'Financial Modeling, Sales Forecasting & Valuation Dashboards',
      bn: 'ফাইন্যান্সিয়াল মডেলিং ও রেভিনিউ ফোরকাস্টিং ড্যাশবোর্ড'
    },
    shortDesc: {
      en: 'Dynamic financial 3-statement models, runway burn rate, scenario simulations, and valuation decks.',
      bn: 'বাজেট প্রজেকশন, ক্যাশ-ফ্লো সিমুলেশন, বার্ন রেট এবং ইনভেস্টরদের জন্য আকর্ষণীয় রেভিনিউ ফোরকাস্টিং মডেল।'
    },
    fullDesc: {
      en: 'Build clean, transparent financial projections for startup fundraising or corporate budgeting. Includes connected 3-statement models (P&L, Balance Sheet, Cash Flow), dynamic scenario toggles (Best/Base/Worst case), runway burn analysis, and valuation benchmarks.',
      bn: 'স্টার্টআপ ফান্ডরাইজিং বা বার্ষিক বাজেটের জন্য পেশাদার আর্থিক মডেল। ৩-স্টেটমেন্ট ফোরকাস্টিং (P&L, ব্যালেন্স শীট, ক্যাশ ফ্লো), বেস্ট/ওয়ার্স্ট কেস দৃশ্যকল্প টগল এবং ইনভেস্টরদের সন্তুষ্ট করার মতো ভ্যালুয়েশন প্রেজেন্টেশন।'
    },
    deliverables: {
      en: [
        'Dynamic 3-statement financial projection model in Excel / Google Sheets',
        'Scenario analysis toggle (Base, Conservative, Aggressive revenue cases)',
        'Cash flow runway tracker and monthly burn rate visual charts',
        'Discounted Cash Flow (DCF) & revenue multiple valuation summaries',
        'Investor-ready executive summary sheet with key SaaS/unit metrics'
      ],
      bn: [
        'ডাইনামিক ৩-স্টেটমেন্ট ফাইন্যান্সিয়াল মডেল (Excel / Google Sheets)',
        'সিনেরিও অ্যানালাইসিস টগল (কনজারভেটিভ, বেস ও অপটিমিস্টিক রেভিনিউ ভিউ)',
        'ক্যাশ রানওয়ে ট্র্যাকার ও মান্থলি বার্ন রেট চার্ট',
        'DCF ও রেভিনিউ মাল্টিপল ভ্যালুয়েশন সামারি',
        'ইনভেস্টরদের জন্য আকর্ষণীয় SaaS ইউনিট ইকোনমিক্স শিট'
      ]
    }
  },
  {
    id: 'nlp-sentiment-analytics',
    iconName: 'MessageSquare',
    category: 'Data Analysis',
    startingPrice: 4000,
    typicalTurnaround: '3 - 6 Days',
    tag: 'NLP & Text AI',
    title: {
      en: 'NLP & Customer Feedback Sentiment Intelligence',
      bn: 'NLP কাস্টমার রিভিউ ও সেন্টিমেন্ট অ্যানালাইসিস'
    },
    shortDesc: {
      en: 'Automated sentiment scoring on product reviews, support tickets, and social mentions with BERT/Python.',
      bn: 'হাজার হাজার কাস্টমার রিভিউ ও ফিডব্যাক থেকে পজিটিভ/নেগেটিভ সেন্টিমেন্ট এবং প্রোডাক্ট ইমপ্রুভমেন্ট ইনসাইট।'
    },
    fullDesc: {
      en: 'Mine unstructured customer text to uncover what your users really think. Using Natural Language Processing (BERT, VADER, RoBERTa), we scrape, clean, and classify thousands of customer reviews or support transcripts to highlight product pain points, sentiment trends, and feature requests.',
      bn: 'হাজার হাজার টেক্সট রিভিউ বা কাস্টমার সাপোর্ট চ্যাট থেকে লুকানো তথ্য বের করার আধুনিক NLP টেকনোলজি। কাস্টমারদের প্রধান অভিযোগ, পজিটিভ অনুভূতি ও নতুন ফিচার চাহিদার গভীর ইনসাইট রিপোর্ট।'
    },
    deliverables: {
      en: [
        'Cleaned NLP dataset with positive, neutral, and negative sentiment scores',
        'Topic modeling (LDA / BERTopic) identifying key customer complaint themes',
        'Interactive visual sentiment trends over time with WordClouds and heatmaps',
        'Documented Python Jupyter Notebook (.ipynb) with complete NLP pipeline',
        'Executive action report on key product and customer experience issues'
      ],
      bn: [
        'পজিটিভ, নিউট্রাল ও নেগেটিভ সেন্টিমেন্ট স্কোর সহ প্রসেসড ডেটাসেট',
        'টপিক মডেলিং দ্বারা গ্রাহকদের প্রধান সমস্যার ক্যাটাগরি বিশ্লেষণ',
        'সময়ানুযায়ী সেন্টিমেন্ট পরিবর্তন ও ভিজ্যুয়াল ওয়ার্ড-ক্লাউড চার্ট',
        'Python Jupyter Notebook (.ipynb) এর কমপ্লিট সোর্স কোড',
        'প্রোডাক্ট কোয়ালিটি বৃদ্ধির জন্য এক্সিকিউটিভ রিপোর্ট'
      ]
    }
  },
  {
    id: 'eda-statistical-modeling',
    iconName: 'TrendingUp',
    category: 'Data Analysis',
    startingPrice: 3500,
    typicalTurnaround: '3 - 6 Days',
    title: {
      en: 'Exploratory Data Analysis (EDA) & Statistical Insights',
      bn: 'এক্সপ্লোরেটরি ডাটা অ্যানালাইসিস ও স্ট্যাটিস্টিক্যাল রিপোর্ট'
    },
    shortDesc: {
      en: 'In-depth Python/R statistical analysis, data cleaning, correlation matrices, and comprehensive insight reports.',
      bn: 'Python/R দিয়ে গভীর ডাটা ক্লিনিং, পরিসংখ্যানগত বিশ্লেষণ, কোরিলেশন ও পূর্ণাঙ্গ ইনসাইট রিপোর্ট।'
    },
    fullDesc: {
      en: 'Deep-dive statistical analysis on your company or survey datasets. We clean messy raw data, handle outliers and missing values, perform hypothesis testing, build correlation distributions, and deliver clear visual conclusions with Jupyter Notebooks and executive summaries.',
      bn: 'জটিল ডাটাবেসের পুঙ্খানুপুঙ্খ পরিসংখ্যানগত বিশ্লেষণ। ডাটা ক্লিনিং, মিসিং ভ্যালু ও আউটলায়ার হ্যান্ডলিং, হাইপোথিসিস টেস্টিং এবং Jupyter Notebook সহ সুনির্দিষ্ট রিপোর্ট প্রদান।'
    },
    deliverables: {
      en: [
        'Cleaned, normalized dataset (CSV, XLSX, SQL dump)',
        'Documented Jupyter Notebook (.ipynb) with Python (Pandas/Seaborn/Plotly)',
        'Statistical distribution charts, heatmaps & correlation analysis',
        'Executive insights presentation summarizing actionable findings',
        'Reproducible clean data processing scripts'
      ],
      bn: [
        'পরিশোধিত ও নরমালাইজড ডাটা ফাইল (CSV/Excel/SQL)',
        'Python কোড সহ কমপ্লিট Jupyter Notebook (.ipynb)',
        'পরিসংখ্যানগত ডিস্ট্রিবিউশন চার্ট, হিটম্যাপ ও কোরিলেশন গ্রাফ',
        'সুনির্দিষ্ট ইনসাইট ও সিদ্ধান্ত সমৃদ্ধ প্রেজেন্টেশন রিপোর্ট',
        'ডাটা প্রসেসিংয়ের অটোমেটেড স্ক্রিপ্ট'
      ]
    }
  },
  {
    id: 'ml-predictive-modeling',
    iconName: 'Cpu',
    category: 'Data Analysis',
    startingPrice: 6500,
    typicalTurnaround: '5 - 10 Days',
    tag: 'Advanced AI',
    title: {
      en: 'Machine Learning & Predictive Analytics Pipeline',
      bn: 'মেশিন লার্নিং ও প্রেডিক্টিভ অ্যানালিটিক্স পাইপলাইন'
    },
    shortDesc: {
      en: 'Custom ML models for customer churn, sales forecasting, classification, NLP, and automated prediction APIs.',
      bn: 'সেলস ফোরকাস্টিং, কাস্টমার ক্লাসিফিকেশন ও প্রেডিকশনের জন্য কাস্টম মেশিন লার্নিং মডেল ও API।'
    },
    fullDesc: {
      en: 'Leverage machine learning to predict business outcomes. We engineer features, train and benchmark classification/regression models (Scikit-Learn, XGBoost, TensorFlow, PyTorch), evaluate ROC-AUC/RMSE metrics, and deploy lightweight inference APIs (FastAPI/Flask).',
      bn: 'আপনার ব্যবসার ভবিষ্যৎ প্রবণতা নির্ধারণে মেশিন লার্নিং মডেল। ফিচার ইঞ্জিনিয়ারিং, মডেল ট্রেইনিং (XGBoost, Scikit-learn), পারফরম্যান্স ইভ্যালুয়েশন এবং FastAPI দিয়ে প্রেডিকশন API ডেভেলপমেন্ট।'
    },
    deliverables: {
      en: [
        'Trained and validated ML model (.pkl / .onnx / .h5)',
        'Feature importance analysis & model explainability (SHAP values)',
        'Model performance benchmarking report (Accuracy, Precision, Recall, F1)',
        'FastAPI / Flask endpoint for live real-time prediction queries',
        'Complete training pipeline & Docker configuration'
      ],
      bn: [
        'ট্রেইনড ও ভ্যালিডেটেড ML মডেল (.pkl/.onnx)',
        'ফিচার ইমপর্ট্যান্স অ্যানালাইসিস ও SHAP ভ্যালু রিপোর্ট',
        'মডেল এক্যুরেসি ও পারফরম্যান্স মেট্রিক্স বিশ্লেষণ',
        'লাইভ প্রেডিকশন রিকোয়েস্টের জন্য FastAPI রেডি এন্ডপয়েন্ট',
        'সম্পূর্ণ ট্রেইনিং পাইপলাইন কোড ও ডকার সেটআপ'
      ]
    }
  },
  {
    id: 'web-scraping-etl-automation',
    iconName: 'Database',
    category: 'Data Analysis',
    startingPrice: 3000,
    typicalTurnaround: '2 - 4 Days',
    title: {
      en: 'Web Scraping & Automated ETL Pipelines',
      bn: 'ওয়েব স্ক্র্যাপিং ও অটোমেটেড ETL পাইপলাইন'
    },
    shortDesc: {
      en: 'Automated data extraction from complex websites, APIs, PDF reports into clean structured databases.',
      bn: 'যেকোনো ওয়েবসাইট, API বা ডকুমেন্ট থেকে স্বয়ংক্রিয় ডাটা সংগ্রহ এবং ডাটাবেস লোডিং।'
    },
    fullDesc: {
      en: 'Extract high-value market, pricing, lead, and competitor data at scale. Using Python (Scrapy, Playwright, BeautifulSoup, Selenium), we build robust scrapers with proxy rotation, anti-bot bypass, data validation, and automated exports into PostgreSQL, MongoDB, or Google Sheets.',
      bn: 'মার্কেট ডাটা, প্রোডাক্ট প্রাইসিং ও লিড কালেকশনের জন্য অটোমেটেড স্ক্র্যাপিং। প্রক্সি রোটেশন, ক্লিন ভ্যালিডেশন এবং PostgreSQL, MongoDB বা Google Sheets-এ স্বয়ংক্রিয় ডাটা এক্সপোর্ট।'
    },
    deliverables: {
      en: [
        'Structured, deduplicated dataset in CSV, JSON, or SQL format',
        'Automated scraping script with error handling & retry logic',
        'Proxy rotation & pagination handling for large-scale data pulls',
        'Scheduled cron job or cloud trigger setup (AWS Lambda / GitHub Actions)',
        'Comprehensive documentation on running and scaling the scraper'
      ],
      bn: [
        'ক্লিন ও ডুপ্লিকেট-মুক্ত ডাটা ফাইল (CSV, JSON, SQL)',
        'স্বয়ংক্রিয় এরর হ্যান্ডলিং সহ স্ক্র্যাপিং কোড স্ক্রিপ্ট',
        'অটোমেটেড পেজিনেশন ও প্রক্সি রোটেশন কনফিগারেশন',
        'নির্ধারিত সময়ে রান করার জন্য ক্লাউড ক্রন জব সেটআপ',
        'স্ক্রিপ্ট ব্যবহারের পূর্ণাঙ্গ গাইডলাইন'
      ]
    }
  }
];

export interface BilingualFaq {
  q: { en: string; bn: string };
  a: { en: string; bn: string };
}

export const BILINGUAL_FAQS: BilingualFaq[] = [
  {
    q: {
      en: 'What core services does Kraflyn Technologies provide?',
      bn: 'ক্র্যাফলিন টেকনোলজিস কী কী মূল সার্ভিস প্রদান করে?'
    },
    a: {
      en: 'We specialize in 4 core digital pillars: (1) UI/UX & Digital Product Design (Figma, Design Systems), (2) Custom Full-Stack Web Development (Next.js, React, Node.js, Python), (3) High-Performance WordPress & WooCommerce Solutions, and (4) Data Analysis & Business Intelligence (Power BI, Python, ETL & ML).',
      bn: 'আমরা ৪টি মূল ডিজিটাল পিলারে বিশেষজ্ঞ: (১) UI/UX ও ডিজিটাল প্রোডাক্ট ডিজাইন (Figma, ডিজাইন সিস্টেম), (২) কাস্টম ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট (Next.js, React, Node.js, Python), (৩) হাই-পারফরম্যান্স ওয়ার্ডপ্রেস ও ই-কমার্স সলিউশন, এবং (৪) ডাটা অ্যানালাইসিস ও বিজনেস ইন্টেলিজেন্স (Power BI, Python, ETL ও মেশিন লার্নিং)।'
    }
  },
  {
    q: {
      en: 'How do you guarantee project delivery timelines and code quality?',
      bn: 'আপনারা কীভাবে প্রজেক্ট ডেলিভারি টাইমলাইন ও কোডের মান নিশ্চিত করেন?'
    },
    a: {
      en: 'Every project is assigned to a dedicated Lead Specialist. We implement rigorous version control with Git, automated linting, responsive cross-browser testing, and milestone check-ins via WhatsApp and Google Meet to ensure 100% on-time delivery.',
      bn: 'প্রতিটি প্রজেক্টে একজন ডেডিকেটেড লিড স্পেশালিস্ট নিযুক্ত থাকেন। আমরা কঠোর Git ভার্সন কন্ট্রোল, অটোমেটেড লিন্টিং, ক্রস-ব্রাউজার রেসপনসিভ টেস্টিং এবং WhatsApp ও Google Meet-এ নিয়মিত মাইলস্টোন আপডেটের মাধ্যমে ১০০% অন-টাইম ডেলিভারি নিশ্চিত করি।'
    }
  },
  {
    q: {
      en: 'Do you provide post-delivery support and revisions?',
      bn: 'ডেলিভারির পর আপনারা কি কোনো রিভিশন বা সাপোর্ট প্রদান করেন?'
    },
    a: {
      en: 'Yes! All deliverables include free post-launch support and revisions within the project scope. We guide you through server deployment, admin panel training, and source code walkthroughs.',
      bn: 'হ্যাঁ! আমাদের প্রতিটি সার্ভিসে নির্দিষ্ট মেয়াদে ফ্রি পোস্ট-লঞ্চ সাপোর্ট ও রিভিশন অন্তর্ভুক্ত থাকে। আমরা সার্ভার ডিপ্লয়মেন্ট, অ্যাডমিন প্যানেল ট্রেনিং এবং সোর্স কোড ওয়ান-টু-ওয়ান গাইডেন্স প্রদান করি।'
    }
  },
  {
    q: {
      en: 'What payment methods do you support in Bangladesh and globally?',
      bn: 'আপনারা কী কী পেমেন্ট মেথড সাপোর্ট করেন?'
    },
    a: {
      en: 'We accept local Bangladeshi payments via bKash, Nagad, Rocket, Bank Transfer, as well as international payments via Wise, Payoneer, and Stripe/Credit Cards. You only pay after initial consultation and requirement lock.',
      bn: 'আমরা bKash, Nagad, Rocket, ব্যাংক ট্রান্সফারের পাশাপাশি আন্তর্জাতিক ক্লায়েন্টদের জন্য Wise, Payoneer এবং Stripe ক্রেডিট কার্ড সাপোর্ট করি। প্রাথমিক কনসালটেশন ও রিকোয়ারমেন্ট কনফার্মেশনের পরেই কেবল পেমেন্ট করতে হয়।'
    }
  },
  {
    q: {
      en: 'Can I request a custom feature set or enterprise NDA?',
      bn: 'আমি কি কাস্টম ফিচার বা নন-ডিসক্লোজার চুক্তি (NDA) অনুরোধ করতে পারি?'
    },
    a: {
      en: 'Absolutely. We regularly sign NDAs with enterprise clients and startup founders to protect proprietary business logic, datasets, and trade secrets with complete confidentiality.',
      bn: 'অবশ্যই। আমরা এন্টারপ্রাইজ ক্লায়েন্ট ও স্টার্টআপদের সাথে শতভাগ ডাটা প্রাইভেসি এবং প্রোপাইটারি কোড সুরক্ষায় সম্পূর্ণ কনফিডেন্সিয়াল NDA চুক্তি সম্পাদন করি।'
    }
  }
];

