export type Language = 'bn' | 'en';

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
  howItWorks: string;
  reviews: string;
  trackOrder: string;
  faq: string;
  about: string;
  aboutUs: string;
  contact: string;
  cart: string;
  empty: string;
  orderNow: string;

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

  // Pillars from Image
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
  orderModalTitle: string;
  orderModalSubtitle: string;
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
  bn: {
    // Top Hotline Bar
    hotlineText: 'ক্রাফ্লিন টেকনোলজিস সাপোর্ট হটলাইন: +৮৮০ ১৭১২-৩৪৫৬৭৮ (সকাল ৮:০০ - রাত ১১:৩০ WhatsApp এক্টিভ)',
    trackOrderStatus: 'অর্ডার স্ট্যাটাস ট্র্যাক করুন',
    directWhatsApp: 'সরাসরি WhatsApp হেল্প',
    adminPortalBtn: 'অ্যাডমিন পোর্টাল',
    backToStudentWeb: '← মূল ওয়েবসাইটে ফিরে যান',

    // Nav
    home: 'হোম',
    services: 'সকল সার্ভিসসমূহ',
    howItWorks: 'কীভাবে কাজ করে',
    reviews: 'শিক্ষার্থীদের রিভিউ',
    trackOrder: 'অর্ডার ট্র্যাকিং',
    faq: 'প্রশ্নোত্তর (FAQ)',
    about: 'আমাদের সম্পর্কে',
    aboutUs: 'আমাদের সম্পর্কে',
    contact: 'যোগাযোগ',
    cart: 'কার্ট',
    empty: 'খালি',
    orderNow: 'অর্ডার করুন',

    // Hero
    heroBadge: '✨ DESIGN • DEVELOPMENT • STUDENT SUPPORT',
    heroTitle1: 'Create. Connect. Grow.',
    heroTitleHighlight: 'Kraflyn Technologies',
    heroTitle2: 'ডিজিটাল সল্যুশন ও টেক প্ল্যাটফর্ম',
    heroSubtitle: 'ক্রাফ্লিন টেকনোলজিস (Kraflyn Technologies) হল একটি ওয়ান-স্টপ ডিজিটাল প্ল্যাটফর্ম যা শিক্ষার্থী, ক্লাব, গবেষক এবং তরুণ পেশাদারদের জন্য ক্রিয়েটিভ ডিজাইন, আধুনিক ওয়েব ও সফটওয়্যার ডেভেলপমেন্ট এবং সম্পূর্ণ একাডেমিক ও টেকনিক্যাল সাপোর্ট প্রদান করে।',
    heroBrowseBtn: 'সকল সার্ভিস এক্সপ্লোর করুন',
    heroDirectOrderBtn: 'সরাসরি অর্ডার করুন 🚀',
    heroStatStudents: '৫,০০০+',
    heroStatStudentsLabel: 'সন্তুষ্ট শিক্ষার্থী ও প্রজেক্ট',
    heroStatSatisfaction: '৯৯.৪%',
    heroStatSatisfactionLabel: 'সফল ক্লায়েন্ট সন্তুষ্টি',
    heroStatUniversities: '৪৫+',
    heroStatUniversitiesLabel: 'ক্যাম্পাস ও স্টুডেন্ট ক্লাব',
    heroStatTurnaround: '২-২৪ ঘণ্টা',
    heroStatTurnaroundLabel: 'সুপার ফাস্ট ডেলিভারি',

    // Pillars from Image
    pillarsBadge: 'আমাদের লক্ষ্য ও নীতিমালা',
    pillarsHeading: 'আমাদের মিশন, ভিশন ও মূল্যবোধ',
    pillarsSubtitle: 'যে আদর্শ ও প্রতিশ্রুতির উপর ভিত্তি করে ক্রাফ্লিন টেকনোলজিস শিক্ষা ও পেশাগত যাত্রাকে সফল করে তুলছে।',
    missionTitle: 'আমাদের মিশন',
    missionDesc: 'ডিজাইন, ডেভেলপমেন্ট ও একাডেমিক সাপোর্টে সুলভ, মানসম্মত এবং নির্ভরযোগ্য ডিজিটাল সমাধান দিয়ে শিক্ষার্থীদের ক্ষমতায়ন করা।',
    visionTitle: 'আমাদের ভিশন',
    visionDesc: 'বাংলাদেশ এবং বহির্বিশ্বের শিক্ষার্থী ও প্রফেশনাল কমিউনিটির কাছে সবচেয়ে বিশ্বস্ত ডিজিটাল সাপোর্ট প্ল্যাটফর্ম হিসেবে প্রতিষ্ঠিত হওয়া।',
    valuesTitle: 'আমাদের মূল্যবোধ',
    whyNexoraTitle: 'কেন Kraflyn Technologies?',
    whyNexoraDesc: 'আমরা শুধু কাজ সম্পন্ন করি না, আমরা শিক্ষার্থীদের তাদের একাডেমিক ও প্রফেশনাল যাত্রায় শিখতে, তৈরি করতে এবং এগিয়ে যেতে সক্ষম করে তুলি।',

    // Problem Triage
    triageBadge: 'সহজ সমস্যা সমাধান ফাইন্ডার',
    triageHeading: 'আপনার প্রয়োজন কী? ২ ক্লিকে সার্ভিস নিন',
    triageSubtitle: 'ডিজাইন, ডেভেলপমেন্ট কিংবা একাডেমিক জটিলতা—নিচে আপনার প্রয়োজন সিলেক্ট করুন এবং সরাসরি সমাধান নিন।',
    triageAll: 'সকল ক্যাটাগরি',
    triageClickToOrder: 'সরাসরি অর্ডার করতে ক্লিক করুন →',

    // Services
    servicesBadge: 'আমাদের কোর সার্ভিসসমূহ',
    servicesHeading: 'OUR CORE SERVICES (A to Z)',
    servicesSubtitle: 'ডিজাইন, সফটওয়্যার ডেভেলপমেন্ট এবং স্টুডেন্ট সাপোর্ট—সকল ক্যাটাগরির ৪৫টি স্পেশালাইজড সার্ভিস এক প্ল্যাটফর্মে।',
    startingPrice: 'শুরু মাত্র',
    turnaround: 'ডেলিভারি টাইম:',
    addToCart: 'কার্টে যোগ করুন',
    viewDetails: 'বিস্তারিত দেখুন',
    directOrder: 'সরাসরি অর্ডার',
    allCategories: 'সকল সার্ভিস (৪৫)',
    filterByDept: 'ক্যাটাগরি অনুযায়ী ফিল্টার:',

    // Categories
    catDesign: '১. ডিজাইন সার্ভিস (১৫)',
    catDev: '২. ডেভেলপমেন্ট সার্ভিস (১৫)',
    catStudent: '৩. স্টুডেন্ট সাপোর্ট (১৫)',

    // How It Works
    howItWorksBadge: 'অর্ডার প্রক্রিয়া',
    howItWorksHeading: 'মাত্র ৪টি সহজ ধাপে সার্ভিস গ্রহণ করুন',
    howItWorksSubtitle: 'কোনো দীর্ঘ রেজিস্ট্রেশন ছাড়াই অতি দ্রুত আপনার প্রজেক্ট বা অ্যাসাইনমেন্টের সমাধান পান।',
    step1Title: '১. সার্ভিস সিলেক্ট করুন',
    step1Desc: 'ডিজাইন, ডেভেলপমেন্ট বা স্টুডেন্ট সাপোর্ট থেকে প্রয়োজনীয় সার্ভিস বেছে নিন বা কার্টে যোগ করুন।',
    step2Title: '২. রিকোয়ারমেন্ট দিন',
    step2Desc: 'আপনার নাম, WhatsApp নম্বর, ডেডলাইন ও কাজের বিস্তারিত দিয়ে অর্ডার ফর্মটি সাবমিট করুন।',
    step3Title: '৩. কো-অর্ডিনেটর কানেকশন',
    step3Desc: 'অর্ডার দেওয়ার ৫-১৫ মিনিটের মধ্যে আমাদের কো-অর্ডিনেটর WhatsApp-এ আপনার সাথে মেন্টর ও প্রজেক্ট ফাইনাল করবেন।',
    step4Title: '৪. ডেলিভারি ও সাপোর্ট',
    step4Desc: 'নির্ধারিত ডেডলাইনের মধ্যে মানসম্মত ডেলিভারি, সোর্স ফাইল ও প্রয়োজনীয় রিভিশন সাপোর্ট নিশ্চিত করা হবে।',

    // Reviews
    reviewsBadge: 'গ্রাহক ও শিক্ষার্থী মন্তব্য',
    reviewsHeading: 'শিক্ষার্থী ও ক্লায়েন্টরা কী বলছেন?',
    reviewsSubtitle: 'দেশের শীর্ষ বিশ্ববিদ্যালয় ও ক্লাবের শিক্ষার্থী ও তরুণ পেশাদারদের বাস্তব অভিজ্ঞতা।',
    aggregateRating: '৪.৯৫ / ৫.০',
    basedOnReviews: '১,২০০+ ভেরিফাইড প্রজেক্ট ও রিভিউর ওপর ভিত্তি করে',
    verifiedStudent: 'ভেরিফাইড শিক্ষার্থী / ক্লায়েন্ট',
    writeReviewBtn: 'রিভিউ লিখুন ✍️',
    filterAllReviews: 'সকল রিভিউ',
    submitReview: 'রিভিউ সাবমিট করুন',

    // FAQ
    faqBadge: 'সাধারণ জিজ্ঞাসা',
    faqHeading: 'সচরাচর জিজ্ঞাসিত প্রশ্নসমূহ',
    faqSubtitle: 'ক্রাফ্লিন টেকনোলজিসের সার্ভিস, ডেলিভারি টাইম, নিরাপত্তা ও পেমেন্ট নিয়ে সাধারণ প্রশ্নের উত্তর।',

    // Cart
    cartTitle: 'আপনার সার্ভিস কার্ট',
    cartEmptyTitle: 'আপনার কার্ট খালি রয়েছে',
    cartEmptySubtitle: 'প্রয়োজনীয় ডিজাইন, ডেভেলপমেন্ট বা একাডেমিক সার্ভিস বেছে নিয়ে কার্টে যোগ করুন।',
    supportTier: 'সার্ভিস প্যাকেজ টিয়ার:',
    tierStandard: 'স্ট্যান্ডার্ড সাপোর্ট (সাধারণ ডেলিভারি)',
    tierExpress: 'এক্সপ্রেস ২৪ ঘণ্টা সুপার ফাস্ট (+৳১৫০)',
    tierVip: 'ভিআইপি ১-অন-১ লাইভ গাইডেন্স (+৳৩০০)',
    urgencyFee: 'জরুরি ডেলিভারি ফি:',
    total: 'সর্বমোট প্রদেয়:',
    proceedToOrder: 'অর্ডার নিশ্চিত করতে এগিয়ে যান →',
    clearCart: 'কার্ট খালি করুন',
    removeItem: 'মুছে ফেলুন',

    // Order Modal
    orderModalTitle: 'সার্ভিস অর্ডার ফর্ম',
    orderModalSubtitle: 'নিচের তথ্যগুলো পূরণ করুন। অর্ডার সাবমিট হওয়ামাত্রই WhatsApp-এ যোগাযোগ করা হবে।',
    stepContact: '১. যোগাযোগ তথ্য',
    stepAcademic: '২. শিক্ষা ও প্রজেক্ট বিবরণ',
    stepRequirements: '৩. রিকোয়ারমেন্ট ও ফাইল',
    fullName: 'আপনার নাম *',
    fullNamePlaceholder: 'আপনার পূর্ণ নাম লিখুন (যেমন: মো: আহসানুর রহমান)',
    phoneNumber: 'মোবাইল নম্বর *',
    phonePlaceholder: '০১৭xxxxxxxx',
    whatsappNumber: 'WhatsApp নম্বর *',
    whatsappPlaceholder: '০১৭xxxxxxxx (সরাসরি আপডেটের জন্য)',
    universityName: 'বিশ্ববিদ্যালয় / প্রতিষ্ঠান *',
    selectUniversity: 'আপনার বিশ্ববিদ্যালয় বা প্রতিষ্ঠান নির্বাচন করুন',
    departmentName: 'ডিপার্টমেন্ট / ফিল্ড *',
    selectDepartment: 'আপনার বিভাগ নির্বাচন করুন',
    semesterOrBatch: 'সেমিস্টার / ব্যাচ / পেশা',
    semesterPlaceholder: 'যেমন: ৮র্থ সেমিস্টার / ব্যাচ ১৮ / প্রফেশনাল',
    courseTitle: 'কোর্স / প্রজেক্টের নাম *',
    coursePlaceholder: 'যেমন: ফাইনাল ডিফেন্স স্লাইড / পোর্টফোলিও ওয়েবসাইট',
    courseCode: 'কোর্স কোড / রেফারেন্স (যদি থাকে)',
    courseCodePlaceholder: 'যেমন: CSE-4200 / Brand Launch',
    deadlineDate: 'ডেলিভারি ডেডলাইন তারিখ *',
    problemDetails: 'কাজের বিস্তারিত বিবরণ ও রিকোয়ারমেন্ট *',
    problemDetailsPlaceholder: 'কাজের নির্দিষ্ট চাহিদা, কালার চয়েস, পেজ সংখ্যা, ফিচার লিস্ট অথবা যে যে বিষয়ে সহায়তা দরকার তা বিস্তারিত লিখুন...',
    preferredContactMethod: 'পছন্দসই যোগাযোগের মাধ্যম:',
    uploadFiles: 'প্রাসঙ্গিক ফাইল বা ড্রাফট আপলোড (ঐচ্ছিক)',
    uploadFilesHint: 'PDF, DOCX, ZIP, PNG, JPG (সর্বোচ্চ ২৫ MB)',
    confirmOrderBtn: 'অর্ডার নিশ্চিত করুন ✨',
    cancelBtn: 'বাতিল',

    // Order Success
    orderSuccessTitle: '🎉 অভিনন্দন! আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে।',
    orderSuccessSubtitle: 'অর্ডার গ্রহণের পর আমাদের টিম ৫-১৫ মিনিটের মধ্যে WhatsApp-এ সরাসরি যোগাযোগ করে আপনার প্রজেক্ট শুরু করবে।',
    orderIdLabel: 'আপনার ইউনিক অর্ডার ট্র্যাকিং আইডি:',
    whatsappCoordinatorBtn: 'সরাসরি WhatsApp কো-অর্ডিনেটরের সাথে চ্যাট করুন',
    whatsappCoordinatorHint: 'দ্রুত প্রসেসিং নিশ্চিত করতে উপরের বাটনে ক্লিক করে WhatsApp-এ আপনার অর্ডার আইডি পাঠান।',
    trackOrderBtn: 'অর্ডার স্ট্যাটাস ট্র্যাক করুন',
    backHomeBtn: 'হোম পেজে ফিরে যান',

    // Order Tracker
    trackerTitle: 'অর্ডার ট্র্যাকিং সিস্টেম',
    trackerSubtitle: 'আপনার অর্ডার আইডি বা মোবাইল নম্বর দিয়ে সরাসরি বর্তমান অগ্রগতি দেখুন।',
    trackerInputPlaceholder: 'অর্ডার আইডি (যেমন: NX-ORD-...) বা ফোন নম্বর দিন',
    searchBtn: 'খুঁজুন',
    statusOrderReceived: '১. অর্ডার গ্রহণ',
    statusMentorAssigned: '২. এক্সপার্ট নিয়োগ',
    statusStudentContacted: '৩. বিস্তারিত আলোচনা সম্পন্ন',
    statusInProgress: '৪. কাজ চলছে',
    statusDelivered: '৫. ডেলিভারি সম্পন্ন',
    noOrderFound: 'কোনো অর্ডার পাওয়া যায়নি',
    noOrderFoundHint: 'দয়া করে সঠিক অর্ডার আইডি বা মোবাইল নম্বর টাইপ করুন।',
    orderDetails: 'অর্ডারের বিবরণ',
    assignedMentor: 'নিযুক্ত এক্সপার্ট / মেন্টর:',
    notYetAssigned: 'কো-অর্ডিনেটর যাচাই করছেন',
    orderAmount: 'মূল্য:',
    studentInfo: 'শিক্ষার্থী / ক্লায়েন্টের তথ্য',
    latestUpdates: 'সর্বশেষ আপডেট',

    // Write Review Modal
    writeReviewTitle: 'আপনার মূল্যবান মতামত দিন',
    writeReviewSubtitle: 'Kraflyn Technologies-এর সাপোর্ট ও ডেলিভারি কেমন ছিল? আপনার মন্তব্য অন্য শিক্ষার্থীদের সাহায্য করবে।',
    yourRating: 'আপনার রেটিং *',
    gradeOutcomeLabel: 'প্রাপ্ত ফলাফল / গ্রেড (যদি থাকে)',
    gradeOutcomePlaceholder: 'যেমন: A+ গ্রেড পেয়েছি / প্রজেক্ট এক্সেপ্টেড',
    reviewCommentLabel: 'আপনার মন্তব্য *',
    reviewCommentPlaceholder: 'কাজের মান কেমন ছিল? সময়মতো ডেলিভারি পেয়েছেন কি না? বিস্তারিত লিখুন...',
    submitReviewBtn: 'রিভিউ সাবমিট করুন ✨',

    // Footer
    footerAbout: 'Kraflyn Technologies হল একটি সমন্বিত ডিজিটাল প্ল্যাটফর্ম যা শিক্ষার্থী, ক্লাব, গবেষক ও তরুণ পেশাদারদের জন্য ক্রিয়েটিভ ডিজাইন, আধুনিক ডেভেলপমেন্ট এবং পূর্ণাঙ্গ একাডেমিক ও টেকনিক্যাল সাপোর্ট প্রদান করে। Create. Connect. Grow.',
    quickLinks: 'দ্রুত লিংক',
    popularServices: 'জনপ্রিয় সার্ভিসসমূহ',
    directContact: 'সরাসরি যোগাযোগ',
    confidentialMentorship: '১০০% শিক্ষার্থী ও ডেটা গোপনীয়তা সংরক্ষিত',
    copyright: 'সর্বস্বত্ব সংরক্ষিত © ২০২৬ Kraflyn Technologies প্ল্যাটফর্ম। Create. Connect. Grow.',

    // Admin Portal
    adminHeaderTitle: 'Kraflyn Technologies অ্যাডমিন কন্ট্রোল প্যানেল',
    adminHeaderSubtitle: 'সকল শিক্ষার্থীর অর্ডার, মেন্টর অ্যাসাইনমেন্ট, পেমেন্ট ও ডেলিভারি অগ্রগতি এক নজরে পর্যবেক্ষণ করুন।',
    adminStatTotalOrders: 'মোট অর্ডার সংখ্যা',
    adminStatTodayOrders: 'আজকের নতুন অর্ডার',
    adminStatInProgress: 'কাজ চলমান',
    adminStatDelivered: 'ডেলিভারি সম্পন্ন',
    adminStatTotalRevenue: 'মোট আনুমানিক ভ্যালু',
    adminStatAvgOrderValue: 'গড় অর্ডার সাইজ',
    tabAllOrders: 'সকল অর্ডার তালিকা',
    tabReviewsManagement: 'রিভিউ মডারেশন',
    searchOrdersPlaceholder: 'অর্ডার আইডি, শিক্ষার্থী, ফোন নম্বর বা বিশ্ববিদ্যালয় দিয়ে খুঁজুন...',
    filterStatusAll: 'সকল স্ট্যাটাস',
    orderTableId: 'অর্ডার আইডি',
    orderTableStudent: 'শিক্ষার্থী ও যোগাযোগ',
    orderTableUniversity: 'প্রতিষ্ঠান ও ডিপার্টমেন্ট',
    orderTableCourse: 'সার্ভিস ও রিকোয়ারমেন্ট',
    orderTableDeadline: 'ডেডলাইন',
    orderTableMentor: 'নিযুক্ত এক্সপার্ট',
    orderTableAmount: 'অ্যামাউন্ট',
    orderTableStatus: 'স্ট্যাটাস',
    orderTableAction: 'অ্যাকশন',
    manageOrderBtn: 'ম্যানেজ করুন ⚙️',
    editOrderTitle: 'অর্ডার আপডেট ও এক্সপার্ট নিয়োগ',
    saveChangesBtn: 'সংরক্ষণ করুন',
    assignMentorLabel: 'এক্সপার্টের নাম দিন:',
    updateStatusLabel: 'অর্ডার স্ট্যাটাস পরিবর্তন করুন:',
    adminNoteLabel: 'অ্যাডমিন ইন্টারনাল নোট:',
    deleteOrderConfirm: 'আপনি কি নিশ্চিত এই অর্ডারটি মুছে ফেলতে চান?'
  },
  en: {
    // Top Hotline Bar
    hotlineText: 'Kraflyn Technologies Support Hotline: +880 1712-345678 (WhatsApp Active 8:00 AM - 11:30 PM)',
    trackOrderStatus: 'Track Order Status',
    directWhatsApp: 'Direct WhatsApp Help',
    adminPortalBtn: 'Admin Portal',
    backToStudentWeb: '← Return to Website',

    // Nav
    home: 'Home',
    services: 'All Services',
    howItWorks: 'How It Works',
    reviews: 'Student Reviews',
    trackOrder: 'Track Order',
    faq: 'FAQ',
    about: 'About Us',
    aboutUs: 'About Us',
    contact: 'Contact',
    cart: 'Cart',
    empty: 'Empty',
    orderNow: 'Order Now',

    // Hero
    heroBadge: '✨ DESIGN • DEVELOPMENT • STUDENT SUPPORT',
    heroTitle1: 'Create. Connect. Grow.',
    heroTitleHighlight: 'Kraflyn Technologies',
    heroTitle2: 'Digital & Academic Solutions',
    heroSubtitle: 'Kraflyn Technologies is a premier digital platform providing creative design, modern web & software development, and comprehensive academic & technical support for students, clubs, researchers and young professionals.',
    heroBrowseBtn: 'Browse All 45 Services',
    heroDirectOrderBtn: 'Place Direct Order 🚀',
    heroStatStudents: '5,000+',
    heroStatStudentsLabel: 'Satisfied Students & Projects',
    heroStatSatisfaction: '99.4%',
    heroStatSatisfactionLabel: 'Client Satisfaction Rate',
    heroStatUniversities: '45+',
    heroStatUniversitiesLabel: 'Campuses & Student Clubs',
    heroStatTurnaround: '2 - 24 Hours',
    heroStatTurnaroundLabel: 'Super Fast Turnaround',

    // Pillars from Image
    pillarsBadge: 'Our Guiding Principles',
    pillarsHeading: 'Our Mission, Vision & Values',
    pillarsSubtitle: 'The core foundations and principles that empower students and professionals to excel with Kraflyn Technologies.',
    missionTitle: 'Our Mission',
    missionDesc: 'Empowering students by providing affordable, quality and reliable digital solutions in design, development and academic support.',
    visionTitle: 'Our Vision',
    visionDesc: 'To become the most trusted digital support platform for students and educational communities in Bangladesh and beyond.',
    valuesTitle: 'Our Values',
    whyNexoraTitle: 'Why Kraflyn Technologies?',
    whyNexoraDesc: "We don't just complete tasks, we empower students to learn, build, and grow in their academic and professional journey.",

    // Problem Triage
    triageBadge: 'Quick Problem Triage',
    triageHeading: 'What Do You Need Help With Today?',
    triageSubtitle: 'Design, web development, or academic challenges—select your goal below and get instant expert assistance.',
    triageAll: 'All Categories',
    triageClickToOrder: 'Click to Order Directly →',

    // Services
    servicesBadge: 'Our Core Services',
    servicesHeading: 'OUR CORE SERVICES (A to Z)',
    servicesSubtitle: 'Design, Development, and Student Support—explore our 45 specialized services all under one trusted roof.',
    startingPrice: 'Starting from',
    turnaround: 'Delivery:',
    addToCart: 'Add to Cart',
    viewDetails: 'View Details',
    directOrder: 'Direct Order',
    allCategories: 'All Services (45)',
    filterByDept: 'Filter by Core Pillar:',

    // Categories
    catDesign: '1. Design Services (15)',
    catDev: '2. Development Services (15)',
    catStudent: '3. Student Support (15)',

    // How It Works
    howItWorksBadge: 'Seamless Workflow',
    howItWorksHeading: 'Get Your Service in 4 Simple Steps',
    howItWorksSubtitle: 'No tedious account creation. Quick order placement and rapid WhatsApp coordinator matching.',
    step1Title: '1. Choose Your Service',
    step1Desc: 'Browse Design, Development, or Student Support services and select the support tier you need.',
    step2Title: '2. Provide Requirements',
    step2Desc: 'Submit your contact info, project deadline, and specific requirements in a quick 2-minute form.',
    step3Title: '3. Coordinator Matching',
    step3Desc: 'Within 5-15 minutes, our team connects with you on WhatsApp to finalize scope and assign the best expert.',
    step4Title: '4. Delivery & Review',
    step4Desc: 'Receive pristine, high-standard deliverables within your deadline with revisions included.',

    // Reviews
    reviewsBadge: 'Verified Testimonials',
    reviewsHeading: 'What Our Students & Clients Say',
    reviewsSubtitle: 'Real feedback from students, researchers, and club executives across leading universities.',
    aggregateRating: '4.95 / 5.0',
    basedOnReviews: 'Based on 1,200+ verified project completions',
    verifiedStudent: 'Verified Student / Client',
    writeReviewBtn: 'Write a Review ✍️',
    filterAllReviews: 'All Reviews',
    submitReview: 'Submit Review',

    // FAQ
    faqBadge: 'Frequently Asked Questions',
    faqHeading: 'Got Questions? We Have Answers',
    faqSubtitle: 'Everything you need to know about Kraflyn Technologies services, turnaround times, confidentiality, and support.',

    // Cart
    cartTitle: 'Your Service Cart',
    cartEmptyTitle: 'Your Cart is Currently Empty',
    cartEmptySubtitle: 'Browse our Design, Development, and Student Support catalogs to add items to your cart.',
    supportTier: 'Service Package Tier:',
    tierStandard: 'Standard Support (Normal Turnaround)',
    tierExpress: 'Express 24h Super Fast (+৳150)',
    tierVip: 'VIP 1-on-1 Live Guidance (+৳300)',
    urgencyFee: 'Urgency / Priority Fee:',
    total: 'Total Amount:',
    proceedToOrder: 'Proceed to Secure Order →',
    clearCart: 'Clear Cart',
    removeItem: 'Remove',

    // Order Modal
    orderModalTitle: 'Service Order Form',
    orderModalSubtitle: 'Provide your project details below. Our coordinator will contact you on WhatsApp right away.',
    stepContact: '1. Contact Details',
    stepAcademic: '2. Academic / Project Info',
    stepRequirements: '3. Requirements & Files',
    fullName: 'Full Name *',
    fullNamePlaceholder: 'e.g. Md. Ahsanur Rahaman',
    phoneNumber: 'Phone Number *',
    phonePlaceholder: '017xxxxxxxx',
    whatsappNumber: 'WhatsApp Number *',
    whatsappPlaceholder: '017xxxxxxxx (for instant coordination)',
    universityName: 'University / Institution *',
    selectUniversity: 'Select your university or institution',
    departmentName: 'Department / Field *',
    selectDepartment: 'Select your department or field',
    semesterOrBatch: 'Semester / Batch / Profession',
    semesterPlaceholder: 'e.g. 8th Semester / Batch 18 / Professional',
    courseTitle: 'Course / Project Title *',
    coursePlaceholder: 'e.g. Final Defense Slides / Portfolio Website',
    courseCode: 'Course Code / Ref (Optional)',
    courseCodePlaceholder: 'e.g. CSE-4200 / Brand Launch',
    deadlineDate: 'Target Delivery Deadline *',
    problemDetails: 'Detailed Problem / Requirements *',
    problemDetailsPlaceholder: 'Describe your requirements, design preferences, features needed, or specific pain points...',
    preferredContactMethod: 'Preferred Contact Method:',
    uploadFiles: 'Attach Files or Drafts (Optional)',
    uploadFilesHint: 'PDF, DOCX, ZIP, PNG, JPG (Max 25 MB)',
    confirmOrderBtn: 'Confirm Order ✨',
    cancelBtn: 'Cancel',

    // Order Success
    orderSuccessTitle: '🎉 Order Received Successfully!',
    orderSuccessSubtitle: 'Our academic coordinator will reach out to you via WhatsApp within 5 to 15 minutes.',
    orderIdLabel: 'Your Unique Order Tracking ID:',
    whatsappCoordinatorBtn: 'Chat Directly with WhatsApp Coordinator',
    whatsappCoordinatorHint: 'Click the button above to send your Order ID to our WhatsApp coordinator for instant priority.',
    trackOrderBtn: 'Track Order Status',
    backHomeBtn: 'Return to Home',

    // Order Tracker
    trackerTitle: 'Order Tracking System',
    trackerSubtitle: 'Enter your Order ID or Phone Number to view live progress in real-time.',
    trackerInputPlaceholder: 'Enter Order ID (e.g. NX-ORD-...) or Phone Number',
    searchBtn: 'Search',
    statusOrderReceived: '1. Order Received',
    statusMentorAssigned: '2. Expert Assigned',
    statusStudentContacted: '3. Discussion Completed',
    statusInProgress: '4. In Progress',
    statusDelivered: '5. Completed & Delivered',
    noOrderFound: 'No Order Found',
    noOrderFoundHint: 'Please check your Order ID or mobile number and try again.',
    orderDetails: 'Order Details',
    assignedMentor: 'Assigned Expert / Mentor:',
    notYetAssigned: 'Coordinator is assigning the best specialist',
    orderAmount: 'Amount:',
    studentInfo: 'Student / Client Info',
    latestUpdates: 'Latest Updates',

    // Write Review Modal
    writeReviewTitle: 'Share Your Experience',
    writeReviewSubtitle: 'How was your experience with Kraflyn Technologies? Your feedback helps fellow students and creators.',
    yourRating: 'Your Rating *',
    gradeOutcomeLabel: 'Grade / Outcome Achieved (Optional)',
    gradeOutcomePlaceholder: 'e.g. A+ Grade / Accepted in Conference',
    reviewCommentLabel: 'Your Review Comment *',
    reviewCommentPlaceholder: 'How did the specialist assist you? Was delivery on-time? Share your honest thoughts...',
    submitReviewBtn: 'Submit Review ✨',

    // Footer
    footerAbout: 'Kraflyn Technologies is a one-stop digital platform providing creative design, modern development and complete academic & technical support for students, clubs, researchers and young professionals. Create. Connect. Grow.',
    quickLinks: 'Quick Links',
    popularServices: 'Popular Services',
    directContact: 'Direct Contact',
    confidentialMentorship: '100% Student & Data Confidentiality',
    copyright: 'All Rights Reserved © 2026 Kraflyn Technologies Platform. Create. Connect. Grow.',

    // Admin Portal
    adminHeaderTitle: 'Kraflyn Technologies Admin Control Panel',
    adminHeaderSubtitle: 'Monitor all student orders, mentor assignments, payments, and delivery progress in one place.',
    adminStatTotalOrders: 'Total Orders',
    adminStatTodayOrders: 'Today New Orders',
    adminStatInProgress: 'In Progress',
    adminStatDelivered: 'Delivered',
    adminStatTotalRevenue: 'Total Value',
    adminStatAvgOrderValue: 'Avg Order Value',
    tabAllOrders: 'All Orders List',
    tabReviewsManagement: 'Reviews Moderation',
    searchOrdersPlaceholder: 'Search by Order ID, Student, Phone, or University...',
    filterStatusAll: 'All Statuses',
    orderTableId: 'Order ID',
    orderTableStudent: 'Student & Contact',
    orderTableUniversity: 'Institution & Dept',
    orderTableCourse: 'Service & Requirements',
    orderTableDeadline: 'Deadline',
    orderTableMentor: 'Assigned Expert',
    orderTableAmount: 'Amount',
    orderTableStatus: 'Status',
    orderTableAction: 'Action',
    manageOrderBtn: 'Manage ⚙️',
    editOrderTitle: 'Update Order & Assign Specialist',
    saveChangesBtn: 'Save Changes',
    assignMentorLabel: 'Specialist Name:',
    updateStatusLabel: 'Update Status:',
    adminNoteLabel: 'Admin Internal Note:',
    deleteOrderConfirm: 'Are you sure you want to delete this order?'
  }
};

export const TRANSLATIONS = DICTIONARY;

export interface BilingualService {
  id: string;
  iconName: string;
  category: 'Design Services' | 'Development Services' | 'Student Support';
  startingPrice: number;
  typicalTurnaround: string;
  tag?: string;
  title: { bn: string; en: string };
  shortDesc: { bn: string; en: string };
  fullDesc: { bn: string; en: string };
  deliverables: { bn: string[]; en: string[] };
}

export const BILINGUAL_SERVICES: BilingualService[] = [
  // ========================================================
  // 1. DESIGN SERVICES (15 items)
  // ========================================================
  {
    id: 'poster-banner-flyer',
    iconName: 'Layout',
    category: 'Design Services',
    startingPrice: 300,
    typicalTurnaround: '6 - 18 Hours',
    tag: 'Popular',
    title: {
      bn: 'পোস্টার / ব্যানার / ফ্লায়ার ডিজাইন',
      en: 'Poster / Banner / Flyer'
    },
    shortDesc: {
      bn: 'ইভেন্ট পোস্টার, ফেস্ট ব্যানার, ক্লাব ফ্লায়ার এবং সোশ্যাল রোল-আপ ডিজাইন।',
      en: 'Eye-catching posters, fest banners, promotional flyers and roll-ups.'
    },
    fullDesc: {
      bn: 'বিশ্ববিদ্যালয়ের ক্লাব ফেস্ট, সেমিনার, হ্যাকাথন ও প্রমোশনাল ক্যাম্পেইনের জন্য হাই-রেজোলিউশন প্রিন্ট ও ওয়েব রেডি ভেক্টর ডিজাইন (CMYK/RGB, 300 DPI)।',
      en: 'Custom visual designs for department festivals, university events, hackathons, and promotional campaigns with print-ready 300 DPI vector files.'
    },
    deliverables: {
      bn: [
        'প্রিন্ট-রেডি হাই রেজোলিউশন PDF ও PNG (300 DPI)',
        'সোশ্যাল মিডিয়া অপটিমাইজড সাইজ (1:1, 4:5, 16:9)',
        'এডিটেবল সোর্স ফাইল (PSD / AI / Figma)',
        'আনলিমিটেড রিভিশন ও দ্রুত ডেলিভারি',
        '৬ থেকে ১৮ ঘণ্টার মধ্যে এক্সপ্রেস ডেলিভারি'
      ],
      en: [
        'High-resolution Print Ready PDF & PNG (300 DPI)',
        'Social Media optimized aspect ratios (1:1, 4:5, 16:9)',
        'Editable Source Files (PSD / AI / Canva / Figma)',
        'Unlimited revisions until final satisfaction',
        'Fast turnaround within 6 to 18 hours'
      ]
    }
  },
  {
    id: 'presentation-ppt-design',
    iconName: 'Presentation',
    category: 'Design Services',
    startingPrice: 350,
    typicalTurnaround: '12 - 24 Hours',
    tag: 'High Demand',
    title: {
      bn: 'প্রেজেন্টেশন ও PPT ডিজাইন',
      en: 'Presentation & PPT Design'
    },
    shortDesc: {
      bn: 'ডিফেন্স প্রেজেন্টেশন, পিচ ডেক এবং আকর্ষণীয় অ্যানিমেটেড পাওয়ারপয়েন্ট স্লাইড।',
      en: 'Modern, high-impact slide decks, defense presentations, and keynote templates.'
    },
    fullDesc: {
      bn: 'থিসিস ডিফেন্স, ক্যাপস্টোন প্রজেক্ট, বিজনেস পিচ ও ক্লাস সেমিনারের জন্য আধুনিক টাইপোগ্রাফি, ইনফোগ্রাফিক ডায়াগ্রাম ও ডায়নামিক ট্রানজিশন স্লাইড।',
      en: 'Transform dull bullet points into persuasive, beautifully animated presentations for thesis defense, capstone projects, and business pitches.'
    },
    deliverables: {
      bn: [
        'কাস্টম স্টাইল্ড PPTX / Google Slides ডেক',
        'ক্লিন টাইপোগ্রাফি, কালার হার্মনি ও ডায়াগ্রাম',
        'স্মুথ ট্রানজিশন ও স্লাইড মাস্টার টেমপ্লেট',
        'প্রেজেন্টার স্পিকিং নোটস ও PDF হ্যান্ডআউট',
        'ফ্রি ভেক্টর আইকন প্যাক ও কমার্শিয়াল ফন্ট'
      ],
      en: [
        'Custom styled PPTX / Keynote / Google Slides deck',
        'Clean typography, color harmony & visual data charts',
        'Dynamic transition animations & slide master templates',
        'Presenter speaking notes formatting & PDF handouts',
        'Full commercial fonts and vector icon pack'
      ]
    }
  },
  {
    id: 'social-media-creatives',
    iconName: 'Share2',
    category: 'Design Services',
    startingPrice: 250,
    typicalTurnaround: '6 - 12 Hours',
    title: {
      bn: 'সোশ্যাল মিডিয়া ক্রিয়েটিভস',
      en: 'Social Media Creatives'
    },
    shortDesc: {
      bn: 'ফেসবুক, ইনস্টাগ্রাম, লিঙ্কডইন পোস্ট গ্রাফিক্স, স্টোরি কভার ও ক্যারোসেল।',
      en: 'Engaging post graphics, story covers, carousels, and club social media branding.'
    },
    fullDesc: {
      bn: 'ফেসবুক পেজ, ইনস্টাগ্রাম, লিঙ্কডইন এবং ক্লাব সোশ্যাল মিডিয়ার জন্য নজরকাড়া হাই-কনভার্টিং গ্রাফিক্স ও ক্যারোসেল ডিজাইন।',
      en: 'High-converting social media creatives for Facebook, Instagram, LinkedIn, and club pages designed with modern aesthetics and typography.'
    },
    deliverables: {
      bn: [
        'স্কয়ার পোস্ট, ক্যারোসেল ও ৯:১৬ ভার্টিক্যাল স্টোরি',
        'কাস্টম ব্র্যান্ডিং ও ক্যাম্পেইন হাইলাইটস',
        'সোর্স ফাইল Figma / Photoshop / Illustrator',
        'লাইটওয়েট ওয়েব-অপটিমাইজড PNG ও JPG',
        'কন্টেন্ট কপিরাইটিং গাইডলাইন'
      ],
      en: [
        'Square posts, portrait carousels & 9:16 vertical stories',
        'Custom club branding & campaign hashtag highlights',
        'Source files in Figma / Photoshop / Illustrator',
        'Exported in lightweight web-optimized PNG & JPG',
        'Content copywriting guidance & aesthetic presets'
      ]
    }
  },
  {
    id: 'logo-brand-identity',
    iconName: 'Sparkles',
    category: 'Design Services',
    startingPrice: 600,
    typicalTurnaround: '24 - 48 Hours',
    tag: 'Creative Choice',
    title: {
      bn: 'লোগো ও ব্র্যান্ড আইডেন্টিটি',
      en: 'Logo & Brand Identity'
    },
    shortDesc: {
      bn: 'ইউনিক ভেক্টর লোগো, কালার প্যালেট, টাইপোগ্রাফি গাইড ও ফুল ব্র্যান্ড বুক।',
      en: 'Unique vector logos, brand color palettes, typography guidelines, and brand books.'
    },
    fullDesc: {
      bn: 'স্টার্টআপ, ক্লাব বা ব্যক্তিগত ব্র্যান্ডের জন্য স্মরণীয় লোগো এবং কমপ্লিট ব্র্যান্ড আইডেন্টিটি কিট।',
      en: 'Establish a memorable identity for your startup, university club, or personal brand with multiple concepts and a full brand book.'
    },
    deliverables: {
      bn: [
        '৩-৫টি স্বতন্ত্র সৃজনশীল লোগো কনসেপ্ট',
        'ভেক্টর মাস্টার ফাইলস (SVG, EPS, AI, PDF, PNG)',
        'সম্পূর্ণ ব্র্যান্ড আইডেন্টিটি গাইডলাইন বুক',
        'সোশ্যাল মিডিয়া প্রোফাইল ও ব্যানার কিট',
        '১০০% কপিরাইট ও ওনারশিপ ট্রান্সফার'
      ],
      en: [
        '3-5 distinct creative logo design concepts',
        'Vector master files (SVG, EPS, AI, PDF, Transparent PNG)',
        'Comprehensive Brand Identity Guidelines (Colors & Fonts)',
        'Social media profile avatars & banner kits',
        'Full intellectual property ownership & copyright transfer'
      ]
    }
  },
  {
    id: 'cv-resume-design',
    iconName: 'FileText',
    category: 'Design Services',
    startingPrice: 250,
    typicalTurnaround: '6 - 12 Hours',
    tag: 'Must Have',
    title: {
      bn: 'CV / রেজুমে ডিজাইন (ATS-Friendly)',
      en: 'CV / Resume Design'
    },
    shortDesc: {
      bn: 'আধুনিক প্রফেশনাল ATS-কমপ্লায়েন্ট রেজুমে ও LaTeX / Word এক্সিকিউটিভ সিভি।',
      en: 'Modern, professional, ATS-friendly resumes and LaTeX / Word executive CV templates.'
    },
    fullDesc: {
      bn: 'চাকরি, ইন্টার্নশিপ ও স্কলারশিপ অ্যাপ্লিকেশনে আলাদা নজর কাড়তে পরিষ্কার ফরম্যাটিং, স্কিল ম্যাট্রিক্স ও পারফেক্ট টাইপোগ্রাফি।',
      en: 'Stand out in job applications, internships, and scholarship screenings with ATS-compliant resumes and LaTeX/Word templates.'
    },
    deliverables: {
      bn: [
        'ATS-ফ্রেন্ডলি সিঙ্গেল ও ডাবল পেজ রেজুমে',
        'এডিটেবল Word (.docx), LaTeX সোর্স ও PDF',
        'ম্যাচিং কভার লেটার টেমপ্লেট স্টাইলিং',
        'টেক ও কর্পোরেট কি-ওয়ার্ড অপটিমাইজেশন',
        '৩০ দিনের মধ্যে ফ্রি কন্টাক্ট ইনফো আপডেট'
      ],
      en: [
        'ATS-friendly single & two-page modern resume templates',
        'Editable Word (.docx), LaTeX source, and print-ready PDF',
        'Matching cover letter template styling',
        'Keyword optimization for tech, engineering & business roles',
        'Free minor contact/experience updates within 30 days'
      ]
    }
  },
  {
    id: 'certificate-id-card-design',
    iconName: 'Award',
    category: 'Design Services',
    startingPrice: 200,
    typicalTurnaround: '6 - 18 Hours',
    title: {
      bn: 'সার্টিফিকেট ও আইডি কার্ড ডিজাইন',
      en: 'Certificate & ID Card Design'
    },
    shortDesc: {
      bn: 'অফিসিয়াল ইভেন্ট পার্টিসিপেশন সার্টিফিকেট, অ্যাওয়ার্ড ও স্টুডেন্ট আইডি কার্ড।',
      en: 'Official event participation certificates, merit awards, and ID card layouts.'
    },
    fullDesc: {
      bn: 'হ্যাকাথন, ক্লাব ফেস্ট, সেমিনার ও ওয়ার্কশপের সার্টিফিকেট এবং প্রেস্টিজিয়াস আইডি ব্যাজ ডিজাইন।',
      en: 'Professional certificates for hackathons, club fests, and workshops with custom guilloche patterns and ID badge layouts.'
    },
    deliverables: {
      bn: [
        'প্রিন্ট-রেডি হাই DPI সার্টিফিকেট লেআউট (A4)',
        'কাস্টম আইডি কার্ড ও ল্যানিয়ার্ড ব্যাজ টেমপ্লেট',
        'বাল্ক নেম প্রিন্টিং মেইল-মার্জ কম্প্যাটিবল সেটআপ',
        'ভেক্টর সিল, রিবন ব্যাজ ও সিকিউরিটি প্যাটার্ন',
        'এডিটেবল AI / PSD / Canva সোর্স টেমপ্লেট'
      ],
      en: [
        'Print-ready high-DPI certificate layouts (A4 & US Letter)',
        'Custom lanyard badge & plastic ID card templates (CR80)',
        'Bulk automated name/ID mail-merge compatible setup',
        'Vector seals, ribbon badges, and guilloche security patterns',
        'Editable AI / PSD / Canva source templates'
      ]
    }
  },
  {
    id: 'research-poster',
    iconName: 'Columns',
    category: 'Design Services',
    startingPrice: 500,
    typicalTurnaround: '12 - 24 Hours',
    title: {
      bn: 'রিসার্চ পোস্টার ডিজাইন',
      en: 'Research Poster'
    },
    shortDesc: {
      bn: 'IEEE ও আন্তর্জাতিক কনফারেন্সের সাইন্টিফিক প্রেজেন্টেশন পোস্টার (A0, A1)।',
      en: 'IEEE/conference scientific presentation posters with data visualizations.'
    },
    fullDesc: {
      bn: 'একাডেমিক কনফারেন্স ও থিসিস সিম্পোজিয়ামের জন্য ডাটা ভিজ্যুয়ালাইজেশন, ডায়াগ্রাম ও LaTeX সমীকরণসহ নিখুঁত পোস্টার।',
      en: 'Display your research paper findings with academic rigor and visual clarity for academic conferences and symposia (A0, A1, 36x48 inches).'
    },
    deliverables: {
      bn: [
        'স্ট্যান্ডার্ড কনফারেন্স সাইজ (A0, A1, 36x48 ইঞ্চি)',
        'হাই-রেজ ভেক্টর ডায়াগ্রাম ও চার্ট ফরম্যাটিং',
        'ম্যাথমেটিকাল ফর্মুলা ও সমীকরণ প্লেসমেন্ট',
        'প্রিন্ট-রেডি 300 DPI PDF + এডিটেবল সোর্স',
        'দূর থেকে পড়ার উপযোগী অপটিমাইজড কালার'
      ],
      en: [
        'Standard conference poster dimensions (A0, A1, 36x48 inch)',
        'High-res vector diagram integration & chart formatting',
        'Mathematical formulas & LaTeX equation placement',
        'Print-ready 300 DPI PDF + editable PowerPoint/Illustrator file',
        'Color scheme optimized for distance reading'
      ]
    }
  },
  {
    id: 'ui-ux-design',
    iconName: 'Layers',
    category: 'Design Services',
    startingPrice: 1200,
    typicalTurnaround: '24 - 72 Hours',
    tag: 'Premium',
    title: {
      bn: 'UI/UX ডিজাইন ও প্রোটোটাইপিং',
      en: 'UI/UX Design'
    },
    shortDesc: {
      bn: 'ওয়েব ও মোবাইল অ্যাপের ইন্টারঅ্যাক্টিভ Figma প্রোটোটাইপ ও ডিজাইন সিস্টেম।',
      en: 'Interactive web & mobile app prototypes, wireframes, and Figma design systems.'
    },
    fullDesc: {
      bn: 'ডিজিটাল প্রোডাক্ট বা ফাইনাল ইয়ার সফটওয়্যার প্রজেক্টের জন্য নিখুঁত ইউজার ইন্টারফেস ও ক্লিকেবল প্রোটোটাইপ।',
      en: 'Design intuitive, pixel-perfect user interfaces, interactive Figma clickable prototypes, design systems, and responsive layouts.'
    },
    deliverables: {
      bn: [
        'ইন্টারঅ্যাক্টিভ Figma ক্লিকেবল প্রোটোটাইপ',
        'রেসপনসিভ ডেস্কটপ, ট্যাবলেট ও মোবাইল স্ক্রিন',
        'কম্পোনেন্ট লাইব্রেরি, অটো-লেআউট ও টোকেনস',
        'ডেভেলপার হ্যান্ডঅফ স্পেক্স ও এসেট এক্সপোর্ট',
        'ওয়্যারফ্রেম ও ইউজার জার্নি ম্যাপ'
      ],
      en: [
        'Interactive Figma prototypes with clickable user flows',
        'Responsive desktop, tablet & mobile screen layouts',
        'Component library, auto-layout, design tokens & typography',
        'Developer handoff specs with CSS parameters & assets',
        'User journey maps and wireframe documentation'
      ]
    }
  },
  {
    id: 'infographic-design',
    iconName: 'BarChart2',
    category: 'Design Services',
    startingPrice: 400,
    typicalTurnaround: '12 - 24 Hours',
    title: {
      bn: 'ইনফোগ্রাফিক ডিজাইন',
      en: 'Infographic Design'
    },
    shortDesc: {
      bn: 'ডাটা-ড্রাইভেন ভিজ্যুয়াল স্টোরিটেলিং, প্রসেস রোডম্যাপ ও কনসেপ্ট চার্ট।',
      en: 'Data-driven visual storytelling, process roadmaps, and breakdown charts.'
    },
    fullDesc: {
      bn: 'জটিল পরিসংখ্যান, সার্ভে ফাইন্ডিংস এবং সিস্টেম ওয়ার্কফ্লোকে আকর্ষণীয় ও সহজবোধ্য ইনফোগ্রাফিকে রূপান্তর করুন।',
      en: 'Turn intricate statistics, timelines, survey findings, and system workflows into beautiful infographics for reports and papers.'
    },
    deliverables: {
      bn: [
        'কাস্টম ভেক্টর ইলাস্ট্রেশন ও চার্ট গ্রাফিক্স',
        'লজিক্যাল হায়ারার্কি ও ভিজ্যুয়াল স্টোরি ফ্লো',
        'ওয়েব ও আল্ট্রা-হাই রেজোলিউশন প্রিন্ট ফরম্যাট',
        'Adobe Illustrator / Figma সোর্স ফাইল',
        'আপনার ব্র্যান্ড কালারের সাথে সামঞ্জস্যপূর্ণ'
      ],
      en: [
        'Custom vector illustrations, icons, and chart graphics',
        'Logical hierarchy and visual storytelling flow',
        'Web-optimized and ultra-high-resolution print formats',
        'Source files in Adobe Illustrator or Figma',
        'Color palettes aligned with your research or brand theme'
      ]
    }
  },
  {
    id: 'brochure-pamphlet-design',
    iconName: 'BookOpen',
    category: 'Design Services',
    startingPrice: 450,
    typicalTurnaround: '12 - 36 Hours',
    title: {
      bn: 'ব্রোশিওর / প্যামফ্লেট ডিজাইন',
      en: 'Brochure / Pamphlet Design'
    },
    shortDesc: {
      bn: 'বাই-ফোল্ড ও ট্রাই-ফোল্ড ব্রোশিওর, কর্পোরেট বুকলেট ও ইভেন্ট ক্যাটালগ।',
      en: 'Bi-fold & tri-fold brochures, corporate booklets, and event catalogs.'
    },
    fullDesc: {
      bn: 'ডিপার্টমেন্টাল ম্যাগাজিন, ক্লাব অ্যাডমিশন গাইড এবং কর্পোরেট ব্রোশিওর নিখুঁত প্রিন্ট মার্জিনসহ প্রস্তুত।',
      en: 'Multi-page event schedules, department magazines, club admission guides, and corporate brochures formatted for press.'
    },
    deliverables: {
      bn: [
        'বাই-ফোল্ড, ট্রাই-ফোল্ড বা মাল্টি-পেজ বুকলেট লেআউট',
        'প্রেস প্রিন্টের জন্য ব্লিড, মার্জিন ও ক্রপ মার্কস',
        'কিউরেটেড স্টক ইমেজ ও ভেক্টর গ্রাফিক্স',
        'ডিজিটাল শেয়ারিংয়ের জন্য ইন্টারঅ্যাক্টিভ PDF',
        'এডিটেবল InDesign / Illustrator / Canva সোর্স'
      ],
      en: [
        'Bi-fold, tri-fold, or multi-page booklet layouts',
        'Exact print bleeds, margins, and crop marks for press',
        'Curated stock imagery and vector graphic assets',
        'Interactive clickable PDF version for digital distribution',
        'Editable Adobe InDesign / Illustrator / Canva source'
      ]
    }
  },
  {
    id: 'menu-price-list-design',
    iconName: 'ListOrdered',
    category: 'Design Services',
    startingPrice: 350,
    typicalTurnaround: '8 - 24 Hours',
    title: {
      bn: 'মেনু / প্রাইস লিস্ট ডিজাইন',
      en: 'Menu / Price List Design'
    },
    shortDesc: {
      bn: 'ক্যাফেটেরিয়া মেনু, ফ্রিল্যান্স রেট শিট এবং ডিজিটাল প্রাইস ক্যাটালগ।',
      en: 'Clear, modern service rate sheets, digital cafeteria menus, and price catalog layouts.'
    },
    fullDesc: {
      bn: 'ক্যাম্পাস ক্যাফে, স্টুডেন্ট স্টার্টআপ বা সার্ভিস বিজনেসের জন্য পরিপাটি ও সহজবোধ্য রেট চার্ট ও মেনু বোর্ড।',
      en: 'Clean, organized price lists and menu boards for campus cafes, student business ventures, and freelance services.'
    },
    deliverables: {
      bn: [
        'সিঙ্গেল-শিট বা ডিজিটাল স্ক্রিন মেনু ফরম্যাট',
        'সহজে পড়ার উপযোগী প্রাইসিং কলাম ও ক্যাটাগরি',
        'প্রিন্ট-রেডি ফাইল + ডিজিটাল TV ডিসপ্লে সাইজ',
        'কন্টাক্টলেস ভিউয়িংয়ের জন্য QR কোড ইন্টিগ্রেশন',
        'ভবিষ্যতে দাম পরিবর্তনের জন্য সহজে এডিটেবল সোর্স'
      ],
      en: [
        'Single-sheet, multi-page, or digital screen menu formats',
        'Easy-to-read pricing columns and item categorization',
        'Print-ready high-resolution files + digital TV display format',
        'QR code integration for contactless digital viewing',
        'Easily editable source template for future price updates'
      ]
    }
  },
  {
    id: 'tshirt-merchandise-design',
    iconName: 'Tag',
    category: 'Design Services',
    startingPrice: 400,
    typicalTurnaround: '12 - 24 Hours',
    title: {
      bn: 'টি-শার্ট ও মার্চেন্ডাইজ ডিজাইন',
      en: 'T-shirt & Merchandise Design'
    },
    shortDesc: {
      bn: 'ক্লাব জার্সি, ব্যাচ হুডি, কনফারেন্স টোট ব্যাগ ও মার্চেন্ডাইজ ভেক্টর আর্ট।',
      en: 'Custom club jerseys, batch hoodies, conference tote bags, and merchandise.'
    },
    fullDesc: {
      bn: 'ব্যাচ টি-শার্ট, গ্র্যাজুয়েশন হুডি, ভার্সিটি জ্যাকেট ও ক্লাবের মার্চেন্ডাইজ প্রিন্টিংয়ের জন্য রেডি ভেক্টর আর্টওয়ার্ক।',
      en: 'Custom vector artwork tailored specifically for screen printing, DTF, embroidery, and sublimation on batch apparel.'
    },
    deliverables: {
      bn: [
        'স্ক্রিন প্রিন্টিংয়ের জন্য Pantone/CMYK কালার সেপারেশন',
        'ব্যাচ প্রিভিউয়ের জন্য রিয়ালিস্টিক 3D মকআপ',
        'ফ্রন্ট, ব্যাক ও স্লিভ ডিটেইলড প্রিন্ট আর্ট',
        'স্কেলেবল AI / EPS / SVG / Transparent PNG',
        'কমার্শিয়াল প্রোডাকশন গাইড'
      ],
      en: [
        'Vector art with exact Pantone/CMYK screen print separations',
        'Realistic 3D apparel mockups for batch previews',
        'Front, back, and sleeve detailed print artwork',
        'Scalable AI / EPS / SVG / Transparent PNG (300 DPI)',
        'Commercial print release and production guide'
      ]
    }
  },
  {
    id: 'photo-editing-retouching',
    iconName: 'Image',
    category: 'Design Services',
    startingPrice: 200,
    typicalTurnaround: '4 - 12 Hours',
    title: {
      bn: 'ফটো এডিটিং ও রিটাচিং',
      en: 'Photo Editing & Retouching'
    },
    shortDesc: {
      bn: 'গ্র্যাজুয়েশন পোর্ট্রেট রিটাচিং, ব্যাকগ্রাউন্ড রিমুভ ও ইভেন্ট কালার গ্রেডিং।',
      en: 'Professional portrait retouching, background removal, and color grading.'
    },
    fullDesc: {
      bn: 'গ্র্যাজুয়েশন পোর্ট্রেট, পাসপোর্ট/ভিসা ছবি, ক্লাব ইভেন্ট অ্যালবাম ও প্রোডাক্ট ফটোর জন্য হাই-এন্ড রিটাচিং।',
      en: 'High-end photo editing for graduation portraits, visa photos, club event albums, and campus events.'
    },
    deliverables: {
      bn: [
        'ন্যাচারাল স্কিন রিটাচিং ও স্পট রিমুভাল',
        'ব্যাকগ্রাউন্ড ক্লিনআপ ও স্টুডিও ব্যাকড্রপ রিপ্লেসমেন্ট',
        'কালার গ্রেডিং, কনট্রাস্ট ও লাইটিং এনহ্যান্সমেন্ট',
        'কম্প্রেশন লস ছাড়া হাই-রেজ মাস্টার আউটপুট',
        'ক্যাম্পাস ইভেন্ট অ্যালবামের জন্য ব্যাচ প্রসেসিং'
      ],
      en: [
        'Natural skin tone retouching & blemish removal',
        'Background cleanup, studio backdrop replacement & isolation',
        'Color grading, contrast balancing, and lighting enhancement',
        'High-res master output without compression loss',
        'Batch processing available for campus event albums'
      ]
    }
  },
  {
    id: 'thesis-project-report-design',
    iconName: 'Book',
    category: 'Design Services',
    startingPrice: 500,
    typicalTurnaround: '12 - 36 Hours',
    tag: 'Academic Focus',
    title: {
      bn: 'থিসিস ও প্রজেক্ট রিপোর্ট ডিজাইন',
      en: 'Thesis / Project Report Design'
    },
    shortDesc: {
      bn: 'একাডেমিক বুক লেআউট, কভার পেজ স্টাইলিং ও LaTeX ডায়াগ্রাম পলিশ।',
      en: 'Complete academic book layout, cover page styling, and diagram polish.'
    },
    fullDesc: {
      bn: 'বিশ্ববিদ্যালয়ের কঠোর ফরম্যাটিং গাইডলাইন অনুযায়ী সুন্দর কভার পেজ, সূচিপত্র, ডায়াগ্রাম ও হার্ডবাইন্ডিং মার্জিন সেটআপ।',
      en: 'Ensure your undergraduate or graduate thesis meets strict university formatting guidelines with elegant cover pages and diagram styling.'
    },
    deliverables: {
      bn: [
        'বিশ্ববিদ্যালয় স্ট্যান্ডার্ড কভার ও স্পাইন লেআউট',
        'LaTeX / Word অটোমেটেড টেবিল অফ কন্টেন্টস',
        'হাই-রেজোলিউশন ডায়াগ্রাম রিড্রয়িং ও পলিশিং',
        'হার্ডবাইন্ডিংয়ের জন্য পারফেক্ট মার্জিন এডজাস্টমেন্ট',
        'ডিজিটাল ইন্টারঅ্যাক্টিভ PDF + প্রিন্ট কপি'
      ],
      en: [
        'University-compliant cover page & spine layout design',
        'LaTeX / Word automated table of contents & header/footer setup',
        'High-resolution diagram redrawing & chart polishing',
        'Strict margin adherence for hardcover binding',
        'Digital interactive PDF with bookmarks + print ready copy'
      ]
    }
  },
  {
    id: 'illustration-custom-design',
    iconName: 'Palette',
    category: 'Design Services',
    startingPrice: 600,
    typicalTurnaround: '24 - 48 Hours',
    title: {
      bn: 'ইলাস্ট্রেশন ও কাস্টম ডিজাইন',
      en: 'Illustration & Custom Design'
    },
    shortDesc: {
      bn: 'কাস্টম ভেক্টর ইলাস্ট্রেশন, ম্যাসকট, ডিজিটাল আর্টওয়ার্ক ও আইকন সেট।',
      en: 'Custom vector illustrations, mascots, creative digital artwork, and icon sets.'
    },
    fullDesc: {
      bn: 'হাতে তৈরি ভেক্টর আর্ট, ক্যারেক্টার ইলাস্ট্রেশন, ক্লাব ম্যাসকট এবং আপনার আইডিয়া অনুযায়ী ইউনিক ডিজিটাল আর্ট।',
      en: 'Handcrafted vector artwork, character illustrations, university fest mascots, and bespoke graphics tailored to your vision.'
    },
    deliverables: {
      bn: [
        'পছন্দসই স্টাইলে ইউনিক কাস্টম ভেক্টর ইলাস্ট্রেশন',
        'লেয়ার্ড সোর্স ফাইলস (AI, SVG, PSD, High-Res PNG)',
        'অ্যাপ ও ওয়েবের জন্য ট্রান্সপারেন্ট ব্যাকগ্রাউন্ড ভার্সন',
        'লাইট ও ডার্ক মোড কালার ভ্যারিয়েশন',
        'সম্পূর্ণ কমার্শিয়াল ব্যবহার অধিকার'
      ],
      en: [
        'Unique custom vector illustration in your chosen aesthetic',
        'Layered source files (AI, SVG, PSD, High-Res PNG)',
        'Transparent background versions for web/app integration',
        'Color palette variations for light and dark modes',
        'Full commercial usage rights'
      ]
    }
  },

  // ========================================================
  // 2. DEVELOPMENT SERVICES (15 items)
  // ========================================================
  {
    id: 'personal-portfolio-website',
    iconName: 'Globe',
    category: 'Development Services',
    startingPrice: 1500,
    typicalTurnaround: '24 - 48 Hours',
    tag: 'Best Seller',
    title: {
      bn: 'ব্যক্তিগত / পোর্টফোলিও ওয়েবসাইট',
      en: 'Personal / Portfolio Website'
    },
    shortDesc: {
      bn: 'আপনার প্রজেক্ট, সিভি ও স্কিল প্রদর্শনের জন্য সুপার ফাস্ট মডার্ন পোর্টফোলিও।',
      en: 'Modern, high-performance personal portfolio showcasing your projects and resume.'
    },
    fullDesc: {
      bn: 'React, Next.js ও Tailwind দিয়ে তৈরি গতিশীল রেসপনসিভ পোর্টফোলিও। লাইভ ডেমো লিংক, সিভি ডাউনলোড ও ফ্রি ডোমেন হোস্টিং সেটআপ।',
      en: 'Build an impressive personal brand with an ultra-fast, responsive portfolio website built with React/Next.js and Tailwind CSS.'
    },
    deliverables: {
      bn: [
        'ফুল রেসপনসিভ ও সুপার ফাস্ট মডার্ন ওয়েব পোর্টফোলিও',
        'লাইভ ডেমো ও সোর্স কোড লিংকযুক্ত প্রজেক্ট গ্যালারি',
        'WhatsApp ও ইমেইলে সরাসরি কন্টাক্ট ফর্ম',
        'Vercel / GitHub Pages-এ ফ্রি লাইভ ডেপ্লয়মেন্ট',
        'ক্লিন TypeScript / Tailwind কোড রিপোজিটরি'
      ],
      en: [
        'Fully responsive, lightning-fast modern web portfolio',
        'Interactive project gallery with live demo and source links',
        'Direct contact form integrated with email / WhatsApp',
        'Free domain connecting & deployment to Vercel / GitHub Pages',
        'Clean TypeScript / Tailwind source code repository'
      ]
    }
  },
  {
    id: 'university-club-website',
    iconName: 'Users',
    category: 'Development Services',
    startingPrice: 2500,
    typicalTurnaround: '48 - 96 Hours',
    tag: 'Recommended',
    title: {
      bn: 'ইউনিভার্সিটি / ক্লাব ওয়েবসাইট',
      en: 'University / Club Website'
    },
    shortDesc: {
      bn: 'স্টুডেন্ট ক্লাব পোর্টাল, ইভেন্ট রেজিস্ট্রেশন, মেম্বার ডিরেক্টরি ও ব্লগ।',
      en: 'Complete portal for student organizations, fest registrations, and blogs.'
    },
    fullDesc: {
      bn: 'ক্লাব ও ফোরামের জন্য অল-ইন-ওয়ান ওয়েব পোর্টাল। ইভেন্ট টিকেট সিস্টেম, এক্সিকিউটিভ ডিরেক্টরি এবং এডমিন ড্যাশবোর্ড।',
      en: 'All-in-one portal for university clubs and IEEE branches featuring member directories, event registration, and admin panel.'
    },
    deliverables: {
      bn: [
        'ডায়নামিক ইভেন্ট রেজিস্ট্রেশন ও টিকিট সিস্টেম',
        'এক্সিকিউটিভ কমিটি ও অ্যালামনাই ডিরেক্টরি',
        'ক্লাব নিউজ, ব্লগ ও ফটো গ্যালারি',
        'রেজিস্ট্রেশন ডেটা এক্সেলে এক্সপোর্ট করার অ্যাডমিন প্যানেল',
        'মোবাইল-ফার্স্ট অপটিমাইজড ডিজাইন'
      ],
      en: [
        'Dynamic event registration & ticket generation system',
        'Executive committee & alumni directory with filterable roles',
        'Club news, blog, and past achievements gallery',
        'Admin dashboard to manage applicants and export Excel sheets',
        'Mobile-first responsive design with fast loading speeds'
      ]
    }
  },
  {
    id: 'business-ecommerce-website',
    iconName: 'ShoppingBag',
    category: 'Development Services',
    startingPrice: 4500,
    typicalTurnaround: '3 - 7 Days',
    tag: 'Enterprise',
    title: {
      bn: 'বিজনেস / ই-কমার্স ওয়েবসাইট',
      en: 'Business / E-commerce Website'
    },
    shortDesc: {
      bn: 'ফুল-ফিচার্ড অনলাইন স্টোর, প্রোডাক্ট ক্যাটালগ ও বিকাশ/নগদ পেমেন্ট গেটওয়ে।',
      en: 'Full-featured online store with product catalog, cart, and payment integration.'
    },
    fullDesc: {
      bn: 'প্রোডাক্ট ফিল্টারিং, শপিং কার্ট, অটোমেটেড ইনভয়েস এবং বিকাশ, নগদ, রকেট ও কার্ড পেমেন্ট গেটওয়ে সম্বলিত ই-কমার্স প্ল্যাটফর্ম।',
      en: 'Launch your online store with product management, cart, checkout, automated invoicing, and bKash/Nagad/SSLCommerz gateways.'
    },
    deliverables: {
      bn: [
        'সার্চ ও ফিল্টারযুক্ত সম্পূর্ণ প্রোডাক্ট ক্যাটালগ',
        'শপিং কার্ট, চেকআউট ও অটো PDF ইনভয়েস',
        'বিকাশ, নগদ, রকেট ও কার্ড পেমেন্ট ইন্টিগ্রেশন',
        'স্টক ও অর্ডার ম্যানেজমেন্ট অ্যাডমিন প্যানেল',
        'এসইও ও গুগল অ্যানালিটিক্স সেটআপ'
      ],
      en: [
        'Complete product catalog with filters, search, and variants',
        'Shopping cart, secure checkout, and automated PDF invoicing',
        'Integrated payment gateways (bKash, Nagad, Rocket, Cards)',
        'Powerful admin panel for stock, order status, and customer logs',
        'SEO optimization & Google Analytics tracking integration'
      ]
    }
  },
  {
    id: 'web-application',
    iconName: 'Code',
    category: 'Development Services',
    startingPrice: 3500,
    typicalTurnaround: '3 - 7 Days',
    tag: 'Custom Built',
    title: {
      bn: 'ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন',
      en: 'Web Application'
    },
    shortDesc: {
      bn: 'কাস্টম SaaS প্ল্যাটফর্ম, ম্যানেজমেন্ট সিস্টেম ও ডায়নামিক রিয়েলটাইম পোর্টাল।',
      en: 'Full-stack SaaS platforms, custom portals, management systems, and dashboards.'
    },
    fullDesc: {
      bn: 'React, Node.js, Next.js, Express, PostgreSQL/MongoDB দিয়ে স্কেলেবল ও নিরাপদ কাস্টম ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট।',
      en: 'Custom web application development using modern tech stacks engineered for scalability, security, and delightful UX.'
    },
    deliverables: {
      bn: [
        'React/Next.js ও Node.js ভিত্তিক আধুনিক আর্কিটেকচার',
        'রোল-বেসড এক্সেস কন্ট্রোল (RBAC) ও সিকিউর সেশন',
        'রিলেশনাল বা NoSQL ডাটাবেস ইন্টিগ্রেশন',
        'সম্পূর্ণ ভ্যালিডেশনযুক্ত REST / GraphQL API',
        'কমপ্লিট ডকুমেন্টেশন ও গিট রিপোজিটরি হ্যান্ডওভার'
      ],
      en: [
        'Fullstack modern architecture with React/Next.js & Node.js',
        'Role-based access control (RBAC), authentication & session security',
        'Robust relational or NoSQL database integration',
        'Comprehensive REST/GraphQL API layer with automated validation',
        'Complete documentation and Git repository handover'
      ]
    }
  },
  {
    id: 'mobile-application',
    iconName: 'Smartphone',
    category: 'Development Services',
    startingPrice: 5000,
    typicalTurnaround: '5 - 10 Days',
    tag: 'Cross-Platform',
    title: {
      bn: 'মোবাইল অ্যাপ্লিকেশন (Android/iOS)',
      en: 'Mobile Application (Android/iOS)'
    },
    shortDesc: {
      bn: 'Flutter বা React Native দিয়ে তৈরি হাই-পারফরম্যান্স ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ।',
      en: 'Cross-platform mobile apps with Flutter or React Native with native performance.'
    },
    fullDesc: {
      bn: 'অ্যান্ড্রয়েড এবং আইওএস প্ল্যাটফর্মের জন্য ৬০ FPS স্মুথ অ্যানিমেশন, পুশ নোটিফিকেশন, অফলাইন স্টোরেজ ও ক্যামেরা/জিপিএস সমন্বিত অ্যাপ।',
      en: 'Build powerful Android and iOS mobile applications with push notifications, offline storage, camera/GPS integrations, and backend sync.'
    },
    deliverables: {
      bn: [
        'ক্রস-প্ল্যাটফর্ম Flutter / React Native কোডবেস',
        'রেডি Android APK / AAB ও iOS বিল্ড বান্ডেল',
        'Firebase পুশ নোটিফিকেশন, ক্লাউড স্টোরেজ ও Auth',
        'সকল স্ক্রিনের জন্য রেসপনসিভ UI ও অফলাইন ক্যাশিং',
        'Play Store / App Store পাবলিশিং সহায়তা'
      ],
      en: [
        'Cross-platform Flutter / React Native codebase',
        'Ready-to-publish Android APK / AAB and iOS build bundle',
        'Firebase push notifications, cloud storage & auth setup',
        'Offline caching & responsive UI for all screen sizes',
        'Google Play Store / Apple App Store submission assistance'
      ]
    }
  },
  {
    id: 'backend-development',
    iconName: 'Server',
    category: 'Development Services',
    startingPrice: 2000,
    typicalTurnaround: '24 - 72 Hours',
    title: {
      bn: 'ব্যাকএন্ড ডেভেলপমেন্ট ও সার্ভার',
      en: 'Backend Development'
    },
    shortDesc: {
      bn: 'স্কেলেবল সার্ভার আর্কিটেকচার, RESTful API, মাইক্রোসার্ভিস ও Auth সিকিউরিটি।',
      en: 'Scalable server architecture, RESTful/GraphQL APIs, and secure auth systems.'
    },
    fullDesc: {
      bn: 'Node.js, Express, Python (FastAPI/Django) দিয়ে তৈরি সিকিউর ব্যাকএন্ড, টোকেন রোটেশন, রেট লিমিটার ও রিকোয়েস্ট ভ্যালিডেশন।',
      en: 'Solid, secure, and well-structured server-side backends built with Node.js, Express, or Python handling async queues and structured logging.'
    },
    deliverables: {
      bn: [
        'মডুলার Clean Architecture কোড স্ট্রাকচার',
        'JWT / OAuth2 সিকিউর অথেন্টিকেশন ও রিফ্রেশ টোকেন',
        'Swagger / Postman ইন্টারেক্টিভ API কালেকশন',
        'ইনপুট স্যানিটাইজেশন, CORS ও রেট লিমিটিং',
        'ক্লাউড VPS বা Docker কন্টেইনারে ডেপ্লয়মেন্ট'
      ],
      en: [
        'Clean modular MVC / Clean Architecture code structure',
        'JWT/OAuth2 secure authentication and token refresh rotation',
        'Swagger / Postman interactive API documentation collection',
        'Input sanitization, CORS protection & rate limiting',
        'Deployment on cloud VPS / Docker containerization'
      ]
    }
  },
  {
    id: 'database-development',
    iconName: 'Database',
    category: 'Development Services',
    startingPrice: 1200,
    typicalTurnaround: '12 - 36 Hours',
    title: {
      bn: 'ডাটাবেস ডিজাইন ও অপটিমাইজেশন',
      en: 'Database Development'
    },
    shortDesc: {
      bn: 'রিলেশনাল (PostgreSQL, MySQL) ও NoSQL স্কিমা ডিজাইন, ইনডেক্সিং ও অপটিমাইজেশন।',
      en: 'Relational & NoSQL database schema design, indexing, and query optimization.'
    },
    fullDesc: {
      bn: 'নর্মালাইজড ERD স্কিমা তৈরি, কমপ্লেক্স কুয়েরি অপটিমাইজেশন, মাইগ্রেশন স্ক্রিপ্ট এবং ডাটাবেস পারফরম্যান্স বৃদ্ধি।',
      en: 'Design resilient database architectures in PostgreSQL, MySQL, MongoDB, or Firestore with indexing strategies and query tuning.'
    },
    deliverables: {
      bn: [
        'নর্মালাইজড ERD ডায়াগ্রাম ও স্কিমা ডেফিনিশন',
        'অপটিমাইজড SQL কুয়েরি, স্টোরড প্রসিডিউর ও ভিউস',
        'কুয়েরি বটলেনেক দূর করতে ইনডেক্সিং স্ট্র্যাটেজি',
        'অটোমেটেড মাইগ্রেশন স্ক্রিপ্টস (Prisma/Drizzle)',
        'ব্যাকআপ ও সিডিং স্ক্রিপ্টস'
      ],
      en: [
        'Normalized ERD diagrams & database schema definitions',
        'Optimized SQL queries, stored procedures & views',
        'Index strategy to eliminate query bottlenecks',
        'Automated migration scripts (Drizzle, Prisma, TypeORM)',
        'Backup strategies and data seeding routines'
      ]
    }
  },
  {
    id: 'api-development-integration',
    iconName: 'Network',
    category: 'Development Services',
    startingPrice: 1000,
    typicalTurnaround: '12 - 24 Hours',
    title: {
      bn: 'API ডেভেলপমেন্ট ও ইন্টিগ্রেশন',
      en: 'API Development & Integration'
    },
    shortDesc: {
      bn: 'থার্ড-পার্টি API, SMS গেটওয়ে, পেমেন্ট, Google Maps ও AI মডেল কানেকশন।',
      en: 'Custom REST/GraphQL APIs and seamless integration with third-party webhooks.'
    },
    fullDesc: {
      bn: 'আপনার অ্যাপে SMS গেটওয়ে, Google Maps, Firebase, OpenAI/Gemini এআই মডেল ও সোশ্যাল লগইন সহজে ইন্টিগ্রেট করুন।',
      en: 'Connect your applications with external APIs including SMS gateways, Google Maps, Firebase, OpenAI/Gemini AI models, and webhooks.'
    },
    deliverables: {
      bn: [
        'সিকিউর থার্ড-পার্টি API কানেক্টিভিটি ও ফেইলওভার রিট্রাই',
        'ওয়েবহুক লিসেনার ও সিগনেচার ভেরিফিকেশন',
        'ক্লিন এরর হ্যান্ডলিং ও ফরম্যাটেড রেসপন্স',
        'টিম টেস্টিংয়ের জন্য রেডি Postman কালেকশন',
        'এনভায়রনমেন্ট ভ্যারিয়েবল ও সিক্রেট প্রোটেকশন'
      ],
      en: [
        'Secure third-party API connectivity with fallback retries',
        'Webhook listener implementation with signature verification',
        'Clean error handling & formatted response payloads',
        'Postman collection for immediate team testing',
        'Environment variable configuration & secret protection'
      ]
    }
  },
  {
    id: 'bug-fixing-maintenance',
    iconName: 'Wrench',
    category: 'Development Services',
    startingPrice: 500,
    typicalTurnaround: '4 - 12 Hours',
    tag: 'Quick Fix',
    title: {
      bn: 'বাগ ফিক্সিং ও কোড মেইনটেন্যান্স',
      en: 'Bug Fixing & Maintenance'
    },
    shortDesc: {
      bn: 'রানটাইম এরর সমাধান, স্ট্যাকট্রেস ট্রেসিং, প্যাকেজ আপডেট ও দ্রুত সমাধান।',
      en: 'Fast debugging, runtime error fixing, dependency upgrades, and code refactoring.'
    },
    fullDesc: {
      bn: 'কনসোল ক্র্যাশ, ব্রোকেন স্টাইল, প্যাকেজ কনফ্লিক্ট বা লজিক বাগ নিমেষেই সমাধান করে কোডের নির্ভরযোগ্যতা ফিরিয়ে আনুন।',
      en: 'Senior developers quickly trace stack traces, resolve logic flaws, and optimize code reliability with zero side effects.'
    },
    deliverables: {
      bn: [
        'মূল কারণ নির্ণয় ও স্পষ্ট ব্যাখ্যাসহ রিপোর্ট',
        'পার্শ্বপ্রতিক্রিয়াহীন ক্লিন কোড ফিক্স',
        'সিকিউরিটি প্যাচ ও ডিপেনডেন্সি আপগ্রেড',
        'কনসোল এরর ক্লিনআপ ও পারফরম্যান্স চেক',
        'স্থায়ী সমাধান নিশ্চিত করতে ফলো-আপ টেস্টিং'
      ],
      en: [
        'Root cause diagnosis with clear explanation',
        'Clean code fix with zero regression side-effects',
        'Security patch verification and dependency upgrades',
        'Performance audit and console error cleanup',
        'Follow-up testing to ensure permanent resolution'
      ]
    }
  },
  {
    id: 'domain-hosting-setup',
    iconName: 'Cloud',
    category: 'Development Services',
    startingPrice: 400,
    typicalTurnaround: '2 - 6 Hours',
    title: {
      bn: 'ডোমেন ও হোস্টিং সেটআপ',
      en: 'Domain & Hosting Setup'
    },
    shortDesc: {
      bn: 'DNS পয়েন্ট, SSL সার্টিফিকেট ইন্সটল, cPanel/VPS লাইভ ও বিজনেস ইমেইল।',
      en: 'DNS configuration, SSL certificate installation, and custom domain email.'
    },
    fullDesc: {
      bn: 'আপনার ওয়েবসাইট ঝটপট লাইভ করুন। নেমসার্ভার ম্যাপিং, ফ্রি SSL (HTTPS), Nginx/Node.js কনফিগারেশন ও Vercel/VPS ডেপ্লয়মেন্ট।',
      en: 'Nameserver pointing, DNS records (A, CNAME, MX), free SSL certificates, and cloud deployment on Vercel, Netlify, or VPS.'
    },
    deliverables: {
      bn: [
        'ডোমেন DNS ম্যাপিং (A Records, CNAMEs, Nameservers)',
        'ফ্রি অটো-রিনিউয়িং Let\'s Encrypt SSL (HTTPS)',
        'প্রফেশনাল বিজনেস ইমেইল কনফিগারেশন',
        'ওয়েব সার্ভার হোস্টিং সেটআপ (Nginx, Node.js)',
        'GitHub থেকে অটোমেটেড ডেপ্লয়মেন্ট পাইপলাইন'
      ],
      en: [
        'Domain DNS mapping (Nameservers, A Records, CNAMEs)',
        'Free Let\'s Encrypt SSL/TLS Certificate setup (HTTPS)',
        'Professional business email configuration (e.g. info@yourdomain)',
        'Web server hosting configuration (Nginx, Apache, Node.js)',
        'Automated deployment pipeline setup from GitHub'
      ]
    }
  },
  {
    id: 'payment-gateway-integration',
    iconName: 'CreditCard',
    category: 'Development Services',
    startingPrice: 1200,
    typicalTurnaround: '12 - 24 Hours',
    tag: 'Essential',
    title: {
      bn: 'পেমেন্ট গেটওয়ে ইন্টিগ্রেশন',
      en: 'Payment Gateway Integration'
    },
    shortDesc: {
      bn: 'বিকাশ, নগদ, রকেট, SSLCommerz ও Stripe অটোমেটেড পেমেন্ট সিস্টেম।',
      en: 'Integration of local (bKash, Nagad, Rocket, SSLCommerz) & Stripe gateways.'
    },
    fullDesc: {
      bn: 'বিকাশ মার্চেন্ট API, নগদ PGW, SSLCommerz, ShurjoPay বা আন্তর্জাতিক Stripe সহজে আপনার ওয়েবসাইটে সংযুক্ত করুন।',
      en: 'Accept online payments seamlessly with official merchant APIs for bKash Checkout, Nagad, SSLCommerz, and Stripe with instant IPN callbacks.'
    },
    deliverables: {
      bn: [
        'অফিসিয়াল মার্চেন্ট API ও ব্যাকএন্ড ভেরিফিকেশন',
        'ইনস্ট্যান্ট পেমেন্ট IPN / ওয়েবহুক ট্রানজ্যাকশন লগ',
        'অটোমেটেড অর্ডার কনফার্মেশন ও রিসিপ্ট',
        'স্যান্ডবক্স টেস্টিং থেকে সরাসরি প্রোডাকশনে সুইচ',
        'ফেইল্ড ট্রানজ্যাকশন ও রিফান্ড হ্যান্ডলিং লজিক'
      ],
      en: [
        'Official Merchant API integration with secure backend verification',
        'Instant payment IPN / Webhook callback transaction recording',
        'Automated order confirmation and SMS/Email receipts',
        'Sandbox testing mode + seamless production switchover',
        'Refund and failed transaction handling logic'
      ]
    }
  },
  {
    id: 'admin-dashboard-development',
    iconName: 'LayoutDashboard',
    category: 'Development Services',
    startingPrice: 2500,
    typicalTurnaround: '2 - 4 Days',
    title: {
      bn: 'অ্যাডমিন ড্যাশবোর্ড ডেভেলপমেন্ট',
      en: 'Admin Dashboard Development'
    },
    shortDesc: {
      bn: 'অ্যানালিটিক্স চার্ট, ফিল্টারেবল ডেটা টেবিল, এক্সেল এক্সপোর্ট ও রোল কন্ট্রোল।',
      en: 'Feature-packed administration panels with analytics charts and user management.'
    },
    fullDesc: {
      bn: 'আপনার বিজনেস বা প্রজেক্ট পরিচালনার জন্য ইন্টারঅ্যাক্টিভ চার্ট, ইউজার ম্যানেজমেন্ট ও রিপোর্ট এক্সপোর্টসহ অ্যাডমিন প্যানেল।',
      en: 'Manage your operations with a custom admin control center featuring interactive analytics charts, paginated tables, CSV export, and role permissions.'
    },
    deliverables: {
      bn: [
        'ডায়নামিক চার্ট ভিজ্যুয়ালাইজার (Recharts / Chart.js)',
        'সার্চ, ফিল্টার ও পেজিনেশনযুক্ত অ্যাডভান্সড টেবিল',
        'এক ক্লিকে Excel / CSV / PDF ডেটা এক্সপোর্ট',
        'মাল্টি-রোল পারমিশন কন্ট্রোল (Admin, Manager)',
        'ডার্ক মোড / লাইট মোড সাপোর্টেড ক্লিন UI'
      ],
      en: [
        'Dynamic data visualizer charts (Recharts / Chart.js)',
        'Advanced data tables with search, filter, sort & pagination',
        'Export data to Excel / CSV / PDF with one click',
        'Multi-role permission controls (Admin, Manager, Viewer)',
        'Dark mode / Light mode responsive user interface'
      ]
    }
  },
  {
    id: 'custom-feature-development',
    iconName: 'Cpu',
    category: 'Development Services',
    startingPrice: 1000,
    typicalTurnaround: '12 - 48 Hours',
    title: {
      bn: 'কাস্টম ফিচার ডেভেলপমেন্ট',
      en: 'Custom Feature Development'
    },
    shortDesc: {
      bn: 'কাস্টম অ্যালগরিদম, অটোমেটেড স্ক্রিপ্ট, ওয়েব স্ক্র্যাপিং ও স্পেশাল টুলস।',
      en: 'Custom algorithmic modules, automated scripts, web scraping, and bespoke tools.'
    },
    fullDesc: {
      bn: 'স্ট্যান্ডার্ড টেমপ্লেটে না থাকা যেকোনো জটিল ফিচার, ব্যাকগ্রাউন্ড ক্রন জব, স্ক্র্যাপার বা এআই ইন্টিগ্রেশন কাস্টম কোডিং।',
      en: 'Build custom calculators, background schedulers, web scrapers (Puppeteer/BeautifulSoup), PDF report generators, and AI integrations.'
    },
    deliverables: {
      bn: [
        'আপনার সুনির্দিষ্ট চাহিদা অনুযায়ী কাস্টম কোডেড ফিচার',
        'মডুলার, রিইউজেবল ও ডকুমেন্টেড সোর্স কোড',
        'বিদ্যমান অ্যাপ্লিকেশনে সহজে ইন্টিগ্রেশন',
        'ইউনিট টেস্টিং ও এজ-কেস ভ্যালিডেশন',
        'লাইভ ডেমো ও ওয়াকথ্রু গাইড'
      ],
      en: [
        'Bespoke feature coded to your exact functional specification',
        'Modular, reusable, and thoroughly documented code',
        'Integration into your existing application codebase',
        'Unit testing and edge-case validation',
        'Deployment walkthrough and live demonstration'
      ]
    }
  },
  {
    id: 'website-speed-optimization',
    iconName: 'Zap',
    category: 'Development Services',
    startingPrice: 600,
    typicalTurnaround: '6 - 18 Hours',
    title: {
      bn: 'ওয়েবসাইট স্পিড অপটিমাইজেশন',
      en: 'Website Speed Optimization'
    },
    shortDesc: {
      bn: 'Core Web Vitals উন্নয়ন, ইমেজ কম্প্রেশন, ক্যাশিং ও ৯০+ গুগল স্কোর।',
      en: 'Core Web Vitals enhancement, image compression, caching, and 90+ score.'
    },
    fullDesc: {
      bn: 'ধীরগতির ওয়েবসাইটকে বিদ্যুৎগতির করে তুলুন। ইমেজ WebP ফরম্যাট রূপান্তর, স্ক্রিপ্ট মিনিফিকেশন ও ক্লাউডফেয়ার CDN সেটআপ।',
      en: 'Speed up your website by optimizing Core Web Vitals (LCP, FID, CLS), compressing media assets to WebP/AVIF, lazy loading, and CDN caching.'
    },
    deliverables: {
      bn: [
        'Google PageSpeed Insights & GTmetrix অডিট',
        'এসেট কম্প্রেশন, কোড স্প্লিটিং ও স্ক্রিপ্ট ডিফারাল',
        'ডাটাবেস কুয়েরি অপটিমাইজেশন ও ক্যাশিং সেটআপ',
        'Cloudflare CDN ইন্টিগ্রেশন',
        'বিফোর ও আফটার পারফরম্যান্স রিপোর্ট'
      ],
      en: [
        'Comprehensive Google PageSpeed Insights & GTmetrix audit',
        'Asset compression, code splitting & script deferral',
        'Database query optimization & object caching setup',
        'CDN integration (Cloudflare) for global low latency',
        'Before-and-after performance metrics report'
      ]
    }
  },
  {
    id: 'website-security-backup',
    iconName: 'ShieldCheck',
    category: 'Development Services',
    startingPrice: 800,
    typicalTurnaround: '12 - 24 Hours',
    title: {
      bn: 'ওয়েবসাইট সিকিউরিটি ও ব্যাকআপ',
      en: 'Website Security & Backup'
    },
    shortDesc: {
      bn: 'ম্যালওয়্যার রিমুভাল, SQLi/XSS প্রোটেকশন, ফায়ারওয়াল ও অটো ক্লাউড ব্যাকআপ।',
      en: 'Malware removal, SQLi/XSS patching, automated cloud backups, and firewall setup.'
    },
    fullDesc: {
      bn: 'আপনার মূল্যবান ওয়েবসাইট ও ডাটা সুরক্ষিত রাখুন। DDoS প্রোটেকশন, সিকিউরিটি হেডার ও সাপ্তাহিক ক্লাউড এনক্রিপ্টেড ব্যাকআপ।',
      en: 'Protect your valuable digital assets. Vulnerability audits, HTTPS enforcement, Cloudflare DDoS mitigation, and automated cloud backups.'
    },
    deliverables: {
      bn: [
        'সম্পূর্ণ সিকিউরিটি ভালনারেবিলিটি স্ক্যান ও ম্যালওয়্যার রিমুভ',
        'ফায়ারওয়াল ও ব্রুট-ফোর্স প্রোটেকশন সেটআপ',
        'অটোমেটেড এনক্রিপ্টেড ক্লাউড ব্যাকআপ রুটিন',
        'সিকিউরিটি হেডার্স (CSP, HSTS) কনফিগারেশন',
        'ডিজাস্টার রিকভারি ও ১-ক্লিক রিস্টোর গাইড'
      ],
      en: [
        'Complete security vulnerability scan & malware cleanup',
        'Firewall, brute-force protection & rate-limit configuration',
        'Automated daily/weekly encrypted cloud backup routines',
        'Security headers (CSP, HSTS, X-Frame-Options) configuration',
        'Disaster recovery documentation and 1-click restore plan'
      ]
    }
  },

  // ========================================================
  // 3. STUDENT SUPPORT (15 items)
  // ========================================================
  {
    id: 'final-year-project-guidance',
    iconName: 'CheckSquare',
    category: 'Student Support',
    startingPrice: 1500,
    typicalTurnaround: '24 - 72 Hours',
    tag: 'Flagship',
    title: {
      bn: 'ফাইনাল ইয়ার প্রজেক্ট গাইডেন্স (FYP)',
      en: 'Final Year Project Guidance'
    },
    shortDesc: {
      bn: 'ক্যাপস্টোন প্রজেক্টের সিস্টেম আর্কিটেকচার, SRS ডকুমেন্টেশন ও ডিফেন্স প্রিপারেশন।',
      en: 'End-to-end guidance for capstone projects, system architecture, SRS, and defense.'
    },
    fullDesc: {
      bn: 'আপনার আন্ডারগ্রাজুয়েট ফাইনাল ইয়ার ক্যাপস্টোন প্রজেক্টে এআই, ওয়েব, মোবাইল বা আইওটি আর্কিটেকচার, SRS ডকুমেন্টেশন ও ডিফেন্স রিহার্সাল সাপোর্ট।',
      en: 'Turn your capstone project into a standout achievement. Guidance on system architecture, SRS documentation, milestone execution, and defense.'
    },
    deliverables: {
      bn: [
        'সিস্টেম আর্কিটেকচার ও ERD / UML ডায়াগ্রাম রিভিউ',
        'সফটওয়্যার রিকোয়ারমেন্টস স্পেসিফিকেশন (SRS) পলিশিং',
        'স্প্রিন্ট প্ল্যানিং ও মাইলস্টোন প্রগ্রেস গাইডেন্স',
        'প্রোটোটাইপ ট্রাবলশুটিং ও ফিচার ডেমোস্ট্রেশন প্রিপারেশন',
        'ফাইনাল ডিফেন্সের মক কাউন্টার-কোয়েশ্চেনিং রিহার্সাল'
      ],
      en: [
        'System Architecture & ERD / UML diagramming review',
        'Software Requirements Specification (SRS) review & polish',
        'Sprint planning & milestone progress guidance',
        'Prototype troubleshooting and feature demonstration prep',
        'Final project defense mock questioning rehearsal'
      ]
    }
  },
  {
    id: 'research-paper-formatting',
    iconName: 'FileCheck',
    category: 'Student Support',
    startingPrice: 500,
    typicalTurnaround: '12 - 24 Hours',
    tag: 'High Demand',
    title: {
      bn: 'রিসার্চ পেপার ফরম্যাটিং (IEEE/Springer)',
      en: 'Research Paper Formatting'
    },
    shortDesc: {
      bn: 'IEEE, Springer, ACM, Elsevier এবং APA স্ট্যান্ডার্ড LaTeX / Word পেপার ফরম্যাটিং।',
      en: 'IEEE, Springer, ACM, Elsevier, and APA standard LaTeX / Word paper formatting.'
    },
    fullDesc: {
      bn: 'আপনার রিসার্চ পেপারকে টার্গেট জার্নাল বা কনফারেন্সের গাইডলাইন অনুযায়ী টু-কলাম LaTeX Overleaf বা Word ফরম্যাটে নিখুঁতভাবে সাজিয়ে নিন।',
      en: 'Ensure your research paper conforms strictly to target journal guidelines. Two-column IEEE/ACM layouts, LaTeX Overleaf templates, and BibTeX citations.'
    },
    deliverables: {
      bn: [
        'IEEE, ACM, Springer, Elsevier বা APA স্টাইলের কঠোর অনুসরণ',
        'সম্পূর্ণ LaTeX / Overleaf সোর্স ফাইল বা প্রিমিয়াম Word ফাইল',
        'স্ট্যান্ডার্ড BibTeX সাইটেশন ও রেফারেন্স যাচাই',
        'ভেক্টর ডায়াগ্রাম ও ফিগার ক্যাপশন অ্যালাইনমেন্ট',
        'গাণিতিক সমীকরণ ও অ্যালগরিদম সিউডোকোড ফরম্যাটিং'
      ],
      en: [
        'Strict adherence to IEEE, ACM, Springer, Elsevier, or APA styles',
        'Complete LaTeX / Overleaf source files or polished Word document',
        'Standardized BibTeX citations & cross-reference verification',
        'Vector diagram & figure caption alignment styling',
        'Mathematical equations & algorithm pseudo-code formatting'
      ]
    }
  },
  {
    id: 'dataset-technical-guidance',
    iconName: 'Binary',
    category: 'Student Support',
    startingPrice: 600,
    typicalTurnaround: '12 - 36 Hours',
    title: {
      bn: 'ডেটাসেট ও টেকনিক্যাল গাইডেন্স',
      en: 'Dataset & Technical Guidance'
    },
    shortDesc: {
      bn: 'ডাটা সংগ্রহ, ক্লিনিং, এক্সপ্লোরেটরি এনালাইসিস (EDA) ও মেশিন লার্নিং প্রি-প্রসেসিং।',
      en: 'Data collection methods, cleaning, exploratory analysis (EDA), and ML preprocessing.'
    },
    fullDesc: {
      bn: 'রিসার্চ বেঞ্চমার্ক ডাটা সংগ্রহ, ওয়েব স্ক্র্যাপিং, মিসিং ভ্যালু হ্যান্ডলিং, EDA ও পাইথন/SPSS-এ ডাটা প্রসেসিং কৌশল।',
      en: 'Expert guidance on sourcing benchmarks, web scraping datasets, data cleaning, exploratory data analysis (EDA), and preparing ML datasets.'
    },
    deliverables: {
      bn: [
        'ডেটাসেট কিউরেশন ও বেঞ্চমার্ক সোর্সিং কৌশল',
        'ডাটা ক্লিনিং, নরমালাইজেশন ও ফিচার ইঞ্জিনিয়ারিং পাইপলাইন',
        'Exploratory Data Analysis (EDA) চার্ট ও ম্যাট্রিক্স',
        'Python (Pandas, NumPy, Scikit-learn) / SPSS স্ক্রিপ্ট',
        'পাবলিকেশন মানের হাই-রেজোলিউশন ডাটা প্লট'
      ],
      en: [
        'Dataset curation & benchmark sourcing strategies',
        'Data cleaning, normalization & feature engineering pipelines',
        'Exploratory Data Analysis (EDA) charts and correlation matrices',
        'Python (Pandas, NumPy, Scikit-learn) / SPSS scripts',
        'Data visualization plots formatted for publication'
      ]
    }
  },
  {
    id: 'programming-support',
    iconName: 'Terminal',
    category: 'Student Support',
    startingPrice: 400,
    typicalTurnaround: '6 - 18 Hours',
    tag: 'Popular',
    title: {
      bn: 'প্রোগ্রামিং সাপোর্ট (যেকোনো ল্যাঙ্গুয়েজ)',
      en: 'Programming Support (Any Language)'
    },
    shortDesc: {
      bn: 'C++, Java, Python, JS-এ লাইভ ডিবাগিং, অ্যালগরিদম লজিক ও ল্যাব টাস্ক গাইডেন্স।',
      en: 'Hands-on debugging, algorithm logic breakdown, and conceptual coaching.'
    },
    fullDesc: {
      bn: 'ডাটা স্ট্রাকচার (Trees, Graphs, DP), OOP ও ল্যাব প্রবলেমে সেগমেন্টেশন ফল্ট বা রানটাইম এরর সমাধান ও ১-অন-১ লজিক কোচিং।',
      en: 'Master tricky programming concepts, data structures (Trees, Graphs, DP), OOP, and lab problem sets with live step-by-step logic coaching.'
    },
    deliverables: {
      bn: [
        'লাইন-বাই-লাইন কোড ব্যাখ্যা ও লজিক ফ্লো ডায়াগ্রাম',
        'লাইভ ডিবাগিং সহায়তা ও সেগমেন্টেশন ফল্ট সমাধান',
        'ক্লিন কোডিং প্র্যাকটিস ও টাইম কমপ্লেক্সিটি (Big-O) এনালাইসিস',
        'এজ-কেস টেস্টিং ও ইনপুট ভ্যালিডেশন',
        'লিখিত কোডের ওপর ল্যাব ভাইভা প্রস্তুতি'
      ],
      en: [
        'Line-by-line logic explanation and concept breakdown',
        'Live debugging assistance and segmentation fault resolution',
        'Clean coding practices, time complexity (Big-O) analysis',
        'Edge-case test scenarios and input validation',
        'Lab viva questions prep on written code'
      ]
    }
  },
  {
    id: 'github-portfolio-setup',
    iconName: 'GitBranch',
    category: 'Student Support',
    startingPrice: 350,
    typicalTurnaround: '6 - 12 Hours',
    title: {
      bn: 'GitHub / পোর্টফোলিও সেটআপ',
      en: 'GitHub / Portfolio Setup'
    },
    shortDesc: {
      bn: 'প্রফেশনাল GitHub README, গিট ওয়ার্কফ্লো, প্রজেক্ট শোকেস ও পিনিং স্ট্র্যাটেজি।',
      en: 'Professional GitHub profile README, Git workflow, repo showcases, and pinning.'
    },
    fullDesc: {
      bn: 'আপনার গিটহাব প্রোফাইলকে রিক্রুটারদের জন্য আকর্ষণীয় করে তুলুন। লাইভ স্ট্যাটস উইজেট, প্রজেক্ট ডেমো ব্যাজ ও প্রফেশনাল গিট ওয়ার্কফ্লো।',
      en: 'Transform your GitHub into a recruiter magnet with dynamic stats widgets, clean repository structures, compelling READMEs, and PR workflows.'
    },
    deliverables: {
      bn: [
        'লাইভ স্ট্যাটসযুক্ত কাস্টম ডাইনামিক GitHub Profile README',
        'ডেমো GIF ব্যাজযুক্ত প্রফেশনাল প্রজেক্ট README.md',
        'Git ব্রাঞ্চিং, কমিট হাইজিন ও পুল রিকোয়েস্ট নিয়মাবলী',
        'ওপেন-সোর্স লাইসেন্স ও ব্যাজসহ রিপোজিটরি সাজানো',
        'টপ ইঞ্জিনিয়ারিং প্রজেক্ট পিন করার কার্যকর স্ট্র্যাটেজি'
      ],
      en: [
        'Custom styled dynamic GitHub profile README with live stats',
        'Professional project README.md templates with demo GIF badges',
        'Git branching, commit hygiene, and pull request workflows',
        'Repository organization with open-source licensing & badges',
        'Pinning strategy highlighting your best engineering projects'
      ]
    }
  },
  {
    id: 'cv-linkedin-optimization',
    iconName: 'UserCheck',
    category: 'Student Support',
    startingPrice: 400,
    typicalTurnaround: '12 - 24 Hours',
    tag: 'Career Growth',
    title: {
      bn: 'CV ও LinkedIn অপটিমাইজেশন',
      en: 'CV / LinkedIn Optimization'
    },
    shortDesc: {
      bn: 'ATS রেজুমে অডিট, LinkedIn হেডলাইন ও সামারি রিভ্যাম্প এবং নেটওয়ার্কিং গাইড।',
      en: 'ATS resume audit, LinkedIn headline & summary revamp, and networking strategy.'
    },
    fullDesc: {
      bn: 'টেক জব ও ইন্টার্নশিপ পেতে আপনার রেজুমে ও লিঙ্কডইন প্রোফাইলকে আকর্ষণীয় করুন। STAR মেথডোলজি ও রিক্রুটার আউটরিচ কৌশল।',
      en: 'Optimize your professional profile for tech jobs and internships with keyword audits, captivating headlines, and cold outreach tips.'
    },
    deliverables: {
      bn: [
        'ATS স্কোর অডিট ও টেইলর্ড কি-ওয়ার্ড বৃদ্ধি',
        'LinkedIn প্রোফাইল রিভ্যাম্প (হেডলাইন, অ্যাবাউট ও এক্সপেরিয়েন্স)',
        'STAR/XYZ মেথডে প্রজেক্টের ইমপ্যাক্ট উপস্থাপন',
        'এইচআর ও রিক্রুটারদের মেসেজ পাঠানোর কোল্ড আউটরিচ টেমপ্লেট',
        'ইঞ্জিনিয়ারিং রিক্রুটার আকর্ষণের পার্সোনাল ব্র্যান্ডিং টিপস'
      ],
      en: [
        'ATS score audit and tailored keyword enhancement',
        'LinkedIn profile overhaul (Headline, About, Experience bullets)',
        'Project impact quantification using STAR/XYZ methodology',
        'Networking and cold email connection message templates',
        'Personal branding tips to attract engineering recruiters'
      ]
    }
  },
  {
    id: 'presentation-preparation',
    iconName: 'Mic',
    category: 'Student Support',
    startingPrice: 350,
    typicalTurnaround: '8 - 24 Hours',
    title: {
      bn: 'প্রেজেন্টেশন ও ডিফেন্স প্রিপারেশন',
      en: 'Presentation Preparation'
    },
    shortDesc: {
      bn: 'স্পিচ রিহার্সাল, স্লাইড ট্রানজিশন এবং ফ্যাকাল্টি কাউন্টার-কোয়েশ্চেনিং প্রস্তুতি।',
      en: 'Slide structure critique, defense rehearsal, and faculty question simulations.'
    },
    fullDesc: {
      bn: 'প্রেজেন্টেশনের জড়তা কাটিয়ে ক্লাসে ও ডিফেন্সে সেরা বক্তব্য দিন। ১-অন-১ মক ডিফেন্স ও কড়া শিক্ষকদের প্রশ্ন মোকাবিলার কৌশল।',
      en: 'Conquer presentation anxiety and deliver standout defense talks with structured speaking points, slide rehearsals, and counter-question coaching.'
    },
    deliverables: {
      bn: [
        '১-অন-১ মক ডিফেন্স রিহার্সালে সম্ভাব্য কঠিন প্রশ্ন সমাধান',
        'স্লাইড টাইমিং এনালাইসিস ও ট্রানজিশন স্ক্রিপ্ট তৈরি',
        'স্পিকিং স্ক্রিপ্ট ও বুলেট পয়েন্ট রিফাইনমেন্ট',
        'কড়া একাডেমিক ডিফেন্স প্যানেল সামলানোর Q&A স্ট্র্যাটেজি',
        'কনফিডেন্স বিল্ডিং ও বডি ল্যাঙ্গুয়েজ ফিডব্যাক'
      ],
      en: [
        '1-on-1 Mock defense rehearsal with difficult counter-questions',
        'Slide timing analysis and transition cues formulation',
        'Speaking script formulation & bullet distillation',
        'Q&A survival tactics for rigorous academic defense panels',
        'Confidence building and body language feedback'
      ]
    }
  },
  {
    id: 'scholarship-admission-guidance',
    iconName: 'GraduationCap',
    category: 'Student Support',
    startingPrice: 800,
    typicalTurnaround: '24 - 48 Hours',
    tag: 'Global Study',
    title: {
      bn: 'স্কলারশিপ ও অ্যাডমিশন গাইডেন্স',
      en: 'Scholarship / Admission Guidance'
    },
    shortDesc: {
      bn: 'SOP, মোটিভেশন লেটার, প্রফেসর ইমেইল ড্রাফটিং ও উচ্চশিক্ষার আবেদন গাইড।',
      en: 'Statement of Purpose (SOP), Motivation Letters, and professor email drafting.'
    },
    fullDesc: {
      bn: 'আমেরিকা, কানাডা, ইউরোপ বা অস্ট্রেলিয়ার উচ্চশিক্ষায় ভর্তির জন্য শক্তিশালী SOP, একাডেমিক সিভি এবং প্রফেসরদের সাথে যোগাযোগ কৌশল।',
      en: 'Get accepted into top global universities. Draft compelling SOPs, academic CVs, and cold emails to prospective research supervisors.'
    },
    deliverables: {
      bn: [
        'Statement of Purpose (SOP) ও মোটিভেশন লেটারের লাইন-বাই-লাইন রিভিউ',
        'আন্তর্জাতিক অ্যাডমিশনের উপযোগী একাডেমিক সিভি তৈরি',
        'সম্ভাব্য রিসার্চ সুপারভাইজারদের জন্য কোল্ড ইমেইল টেমপ্লেট',
        'স্কলারশিপ অ্যাপ্লিকেশন স্ট্র্যাটেজি ও রিকমেন্ডেশন লেটার গাইডেন্স',
        'ভিসা ও ইউনিভার্সিটি ইন্টারভিউ মক প্রিপারেশন সেশন'
      ],
      en: [
        'Line-by-line review of Statement of Purpose (SOP) & Motivation Letters',
        'Academic CV tailored for international admissions',
        'Cold email templates for contacting prospective research supervisors',
        'Scholarship application strategy & recommendation letter guidance',
        'Visa and university interview mock preparation session'
      ]
    }
  },
  {
    id: 'thesis-report-writing-support',
    iconName: 'BookOpen',
    category: 'Student Support',
    startingPrice: 1000,
    typicalTurnaround: '24 - 72 Hours',
    title: {
      bn: 'থিসিস ও রিপোর্ট রাইটিং সাপোর্ট',
      en: 'Thesis / Report Writing Support'
    },
    shortDesc: {
      bn: 'চ্যাপ্টার স্ট্রাকচারিং, লিটারেচার রিভিউ মেথডোলজি ও একাডেমিক প্রুফরিডিং।',
      en: 'Chapter structuring, systematic literature reviews, and proofreading.'
    },
    fullDesc: {
      bn: 'আন্ডারগ্রাজুয়েট বা মাস্টার্স থিসিস বই লেখার সার্বিক দিকনির্দেশনা। সিস্টেমেটিক লিটারেচার রিভিউ, মেথডোলজি ও একাডেমিক প্রুফরিডিং।',
      en: 'Comprehensive academic mentorship on structuring your thesis, Systematic Literature Review (SLR) matrices, and academic writing polish.'
    },
    deliverables: {
      bn: [
        'চ্যাপ্টার-বাই-চ্যাপ্টার স্ট্রাকচারিং ও একাডেমিক রাইটিং গাইডেন্স',
        'Systematic Literature Review (SLR) ম্যাট্রিক্স টেমপ্লেট',
        'মেথডোলজি বর্ণনা ও এক্সপেরিমেন্টাল সেটআপ রাইটিং',
        'গ্রামার, ফ্লো ও একাডেমিক টোন পরিমার্জন',
        'সাইটেশন ভেরিফিকেশন ও বিব্লিওগ্রাফি অ্যালাইনমেন্ট'
      ],
      en: [
        'Chapter-by-chapter structuring & academic writing guidance',
        'Systematic Literature Review (SLR) matrix template & synthesis',
        'Methodology articulation and experimental setup description',
        'Grammar, flow, and academic tone refinement',
        'Citation verification and bibliography alignment'
      ]
    }
  },
  {
    id: 'plagiarism-check-assistance',
    iconName: 'Search',
    category: 'Student Support',
    startingPrice: 250,
    typicalTurnaround: '2 - 6 Hours',
    tag: 'Fast Delivery',
    title: {
      bn: 'প্ল্যাজিয়ারিজম চেক ও সিমিলারিটি সাপোর্ট',
      en: 'Plagiarism Check Assistance'
    },
    shortDesc: {
      bn: 'অফিসিয়াল Turnitin সিমিলারিটি রিপোর্ট অ্যানালাইসিস ও এথিক্যাল প্যারাফ্রেজিং।',
      en: 'Official Turnitin similarity report analysis, paraphrasing, and citation alignment.'
    },
    fullDesc: {
      bn: 'আপনার পেপারের প্ল্যাজিয়ারিজম পার্সেন্টেজ যাচাই করুন। টার্নইটিন রিপোর্ট অ্যানালাইসিস, সাইটেশন কারেকশন ও সিমিলারিটি কমানোর গাইড।',
      en: 'Ensure your manuscript complies with university similarity thresholds. Receive official similarity index reports and ethical paraphrasing guidance.'
    },
    deliverables: {
      bn: [
        'হাইলাইটেড ম্যাচিং সোর্সসহ পূর্ণাঙ্গ টার্নইটিন সিমিলারিটি রিপোর্ট',
        'অনাকাঙ্ক্ষিত প্ল্যাজিয়ারিজম বনাম কমন বাক্যাংশ চিহ্নিতকরণ',
        'সেন্টেন্স রিস্ট্রাকচারিং ও সঠিক প্যারাফ্রেজিং পরামর্শ',
        'IEEE/APA ফরম্যাটে মিসিং সাইটেশন পুনঃস্থাপন',
        '২ থেকে ৬ ঘণ্টার মধ্যে সুপার ফাস্ট রিপোর্ট ডেলিভারি'
      ],
      en: [
        'Complete similarity percentage and highlighted matching sources report',
        'Identification of accidental plagiarism vs common academic phrases',
        'Guidance on restructuring sentences and proper paraphrasing',
        'Missing citation restoration in IEEE/APA/Harvard formats',
        'Fast turnaround within 2 to 6 hours'
      ]
    }
  },
  {
    id: 'technical-workshops-courses',
    iconName: 'Video',
    category: 'Student Support',
    startingPrice: 500,
    typicalTurnaround: 'Scheduled Cohorts',
    title: {
      bn: 'টেকনিক্যাল ওয়ার্কশপ ও কোর্স',
      en: 'Technical Workshops & Courses'
    },
    shortDesc: {
      bn: 'ওয়েব ডেভেলপমেন্ট, AI/ML, UI/UX, Git ও কোডিংয়ের লাইভ হ্যান্ডস-অন মাস্টারক্লাস।',
      en: 'Live cohort bootcamps on Web Dev, AI/ML, UI/UX, Git, and Programming.'
    },
    fullDesc: {
      bn: 'ইন্ডাস্ট্রি ইঞ্জিনিয়ারদের পরিচালনায় প্রজেক্ট-ভিত্তিক লাইভ টেকনিক্যাল বুটক্যাম্প। হ্যান্ডস-অন কোডিং, অ্যাসাইনমেন্ট ও সার্টিফিকেট।',
      en: 'Hands-on, project-based technical masterclasses led by industry practitioners. Live coding, assignments, and verified completion certificates.'
    },
    deliverables: {
      bn: [
        'রিয়েলটাইম Q&A সহ লাইভ ইন্টারঅ্যাক্টিভ ভিডিও সেশন',
        'সকল রেকর্ডিং, সোর্স কোড ও লেকচার স্লাইডে আজীবন এক্সেস',
        'হ্যান্ডস-অন ক্যাপস্টোন প্রজেক্ট ও মেন্টর কোড রিভিউ',
        'যাচাইযোগ্য ভেরিফায়েড সার্টিফিকেট অব কমপ্লিশন',
        'প্রাইভেট অ্যালামনাই ও পিয়ার কমিউনিটিতে এক্সক্লুসিভ এক্সেস'
      ],
      en: [
        'Live interactive video sessions with real-time Q&A',
        'Full access to session recordings, source code & lecture slides',
        'Hands-on capstone project review & feedback from mentors',
        'Certificate of Completion with verifiable credentials',
        'Exclusive access to private alumni & peer discord/WhatsApp community'
      ]
    }
  },
  {
    id: 'interview-preparation',
    iconName: 'Briefcase',
    category: 'Student Support',
    startingPrice: 600,
    typicalTurnaround: '12 - 24 Hours',
    title: {
      bn: 'ইন্টারভিউ প্রিপারেশন ও মক সেশন',
      en: 'Interview Preparation'
    },
    shortDesc: {
      bn: 'মক টেকনিক্যাল কোডিং ইন্টারভিউ, সিস্টেম ডিজাইন ও HR ইন্টারভিউ কোচিং।',
      en: 'Mock technical coding interviews, system design, and behavioral HR coaching.'
    },
    fullDesc: {
      bn: 'সফটওয়্যার ইঞ্জিনিয়ারিং ও কর্পোরেট জবের ইন্টারভিউতে সফল হতে লাইভ হোয়াইটবোর্ড কোডিং, DSA প্র্যাকটিস ও বিহেভিওরাল ফিডব্যাক।',
      en: 'Ace software engineering job interviews with live DSA coding, basic system design discussions, and structured STAR feedback.'
    },
    deliverables: {
      bn: [
        'টপ টেক কোম্পানির মতো ১-অন-১ লাইভ মক কোডিং ইন্টারভিউ',
        'প্রবলেম সলভিং স্পিড, কোড কোয়ালিটি ও কমিউনিকেশন ফিডব্যাক',
        'সিস্টেম ডিজাইন বেসিকস ও আর্কিটেকচারাল ট্রেড-অফ ডিসকাশন',
        'STAR ফ্রেমওয়ার্কে বিহেভিওরাল ইন্টারভিউ কোচিং',
        'টার্গেট কোম্পানির প্যাটার্ন অনুযায়ী বাছাইকৃত DSA প্রশ্নব্যাংক'
      ],
      en: [
        '1-on-1 Mock coding interview session simulating top tech companies',
        'Detailed feedback report on problem-solving speed, code quality & communication',
        'System design basics & architectural trade-offs discussion',
        'Behavioral interview coaching using the STAR framework',
        'Curated DSA question bank tailored to target company patterns'
      ]
    }
  },
  {
    id: 'study-plan-academic-guidance',
    iconName: 'Calendar',
    category: 'Student Support',
    startingPrice: 300,
    typicalTurnaround: '6 - 12 Hours',
    title: {
      bn: 'স্টাডি প্ল্যান ও একাডেমিক গাইডেন্স',
      en: 'Study Plan & Academic Guidance'
    },
    shortDesc: {
      bn: 'ব্যক্তিগত সেমিস্টার স্টাডি রোডম্যাপ, CGPA রিকভারি প্ল্যান ও টাইম ম্যানেজমেন্ট।',
      en: 'Personalized semester study roadmap, CGPA recovery, and time management.'
    },
    fullDesc: {
      bn: 'ক্রেডিট ও ল্যাবের চাপ সামলাতে টপ পারফর্মিং মেন্টরদের সহায়তায় সিলেবাস অডিট, সাপ্তাহিক রুটিন এবং স্ট্র্যাটেজিক CGPA উন্নয়ন প্ল্যান।',
      en: 'Audit your syllabus, design a realistic weekly study routine, and execute a strategic CGPA improvement plan with top university alumni.'
    },
    deliverables: {
      bn: [
        'ক্লাস, ল্যাব ও সেলফ-স্টাডির ভারসাম্যপূর্ণ সাপ্তাহিক টাইমটেবিল',
        'আসন্ন পরীক্ষার জন্য হাই-ইল্ড টপিক প্রায়োরিটাইজেশন রোডম্যাপ',
        'CGPA রিকভারি ক্যালকুলেশন মডেল ও টার্গেট গ্রেড মাইলস্টোন',
        'বাছাইকৃত টেক্সটবুক চ্যাপ্টার ও ভিডিও লেকচার রিসোর্স লিস্ট',
        'সাপ্তাহিক প্রগ্রেস চেক-ইন ও অ্যাকাউন্টেবিলিটি সাপোর্ট'
      ],
      en: [
        'Tailored weekly timetable balancing classes, labs & self-study',
        'High-yield topic prioritization roadmap for upcoming exams',
        'CGPA recovery calculation model & target grade milestones',
        'Curated textbook chapters, video lecture links & notes list',
        'Weekly progress check-in & accountability support'
      ]
    }
  },
  {
    id: 'problem-solving-debugging',
    iconName: 'HelpCircle',
    category: 'Student Support',
    startingPrice: 350,
    typicalTurnaround: '3 - 12 Hours',
    tag: 'Instant Support',
    title: {
      bn: 'প্রবলেম সলভিং ও ইনস্ট্যান্ট ডাউট হেল্প',
      en: 'Problem Solving & Debugging Help'
    },
    shortDesc: {
      bn: 'জরুরি অ্যাসাইনমেন্ট ডাউট, গাণিতিক সমাধান যাচাই ও লজিক জটিলতা নিরসন।',
      en: 'Urgent troubleshooting, mathematical derivations, logic resolution, and doubt help.'
    },
    fullDesc: {
      bn: 'অ্যাসাইনমেন্ট বা ল্যাব টাস্ক নিয়ে আটকে গেছেন? সরাসরি মেন্টরের সাথে যুক্ত হয়ে স্পষ্ট ব্যাখ্যার মাধ্যমে দ্রুত সমাধান পেয়ে যান।',
      en: 'Get immediate help when stuck on difficult assignments, mathematical proofs, circuit calculations, or programming bugs.'
    },
    deliverables: {
      bn: [
        'ধাপে ধাপে প্রবলেম ডিসেকশন ও সমাধান লজিক ব্যাখ্যা',
        'গাণিতিক সূত্র যাচাই ও ডেরিভেশন স্টেপস চেকিং',
        'মূল থিওরি ও কনসেপ্টের সার্বিক ধারণা স্পষ্টকরণ',
        'WhatsApp / Google Meet-এ সরাসরি ডাউট ক্লিয়ারিং',
        'ধারণা দৃঢ় করতে প্রাসঙ্গিক প্র্যাকটিস প্রবলেম'
      ],
      en: [
        'Direct, step-by-step problem dissection and solution logic',
        'Mathematical formula verification and derivation steps',
        'Comprehensive explanation of underlying core theorems',
        'Interactive doubt clearing on WhatsApp / Google Meet',
        'Related practice problems to solidify understanding'
      ]
    }
  },
  {
    id: 'mentorship-career-guidance',
    iconName: 'Compass',
    category: 'Student Support',
    startingPrice: 500,
    typicalTurnaround: '12 - 24 Hours',
    title: {
      bn: 'মেন্টরশিপ ও ক্যারিয়ার গাইডেন্স',
      en: 'Mentorship & Career Guidance'
    },
    shortDesc: {
      bn: 'ইন্ডাস্ট্রি সফটওয়্যার ইঞ্জিনিয়ার ও গবেষকদের সাথে ১-অন-১ ক্যারিয়ার ম্যাপিং।',
      en: '1-on-1 career mapping with industry software engineers and researchers.'
    },
    fullDesc: {
      bn: 'সফটওয়্যার ইঞ্জিনিয়ারিং, এআই/ডাটা সায়েন্স, সাইবার সিকিউরিটি বা বিদেশের উচ্চশিক্ষা নিয়ে ক্যারিয়ার পথরেখা ও স্কিল অর্জনের সঠিক দিকনির্দেশনা।',
      en: 'Discuss career pathways in Software Engineering, Data Science/AI, Cyber Security, or Higher Studies with seasoned industry professionals.'
    },
    deliverables: {
      bn: [
        'ইন্ডাস্ট্রি স্পেশালিস্টের সাথে ১-অন-১ প্রাইভেট ভিডিও মেন্টরশিপ সেশন',
        'ব্যক্তিগত ৬ মাসের স্কিল ডেভেলপমেন্ট ও পোর্টফোলিও রোডম্যাপ',
        'বর্তমান টেকনিক্যাল স্কিলের ওপর গঠনমূলক ফিডব্যাক',
        'ওপেন-সোর্স কন্ট্রিবিউশন ও ইন্টার্নশিপ অ্যাপ্লিকেশন স্ট্র্যাটেজি',
        'প্রফেশনাল অ্যালামনাই নেটওয়ার্কের সাথে সরাসরি কানেকশন'
      ],
      en: [
        '1-on-1 private video mentorship session with industry specialist',
        'Personalized 6-month skill development and portfolio roadmap',
        'Honest feedback on current technical skill strengths & gaps',
        'Guidance on open-source contributions & internship applications',
        'Direct networking connection with professional alumni network'
      ]
    }
  }
];

export const BILINGUAL_FAQS = [
  {
    q: {
      bn: 'Kraflyn Technologies কী এবং এখানে কী কী ধরনের সার্ভিস পাওয়া যায়?',
      en: 'What is Kraflyn Technologies and what services are offered?'
    },
    a: {
      bn: 'Kraflyn Technologies হল শিক্ষার্থী, ক্লাব, গবেষক ও তরুণ পেশাদারদের জন্য একটি ওয়ান-স্টপ ডিজিটাল প্ল্যাটফর্ম। এখানে ১) ডিজাইন সার্ভিস (পোস্টার, স্লাইড, লোগো, সিভি, UI/UX ইত্যাদি), ২) ডেভেলপমেন্ট সার্ভিস (পোর্টফোলিও, ক্লাব ওয়েবসাইট, ই-কমার্স, মোবাইল অ্যাপ ইত্যাদি), এবং ৩) স্টুডেন্ট সাপোর্ট (FYP গাইডেন্স, পেপার ফরম্যাটিং, কোডিং সাপোর্ট, SOP ইত্যাদি) প্রদান করা হয়।',
      en: 'Kraflyn Technologies is a premier digital platform providing 1) Design Services (Posters, PPTs, Logos, Resumes, UI/UX), 2) Development Services (Portfolios, Club Websites, E-commerce, Mobile Apps), and 3) Student Support (FYP Guidance, Paper Formatting, Programming, SOPs) for students, clubs, researchers, and creators.'
    }
  },
  {
    q: {
      bn: 'অর্ডার করার পর কত দ্রুত আপনাদের টিম যোগাযোগ করবে?',
      en: 'How quickly will your team contact me after placing an order?'
    },
    a: {
      bn: 'আমাদের সাপোর্ট হটলাইন ও WhatsApp প্রতিদিন সকাল ৮:০০ টা থেকে রাত ১১:৩০ টা পর্যন্ত সরাসরি সক্রিয় থাকে। সাধারণত অর্ডার সাবমিট করার ৫ থেকে ১৫ মিনিটের মধ্যেই আমাদের কো-অর্ডিনেটর সরাসরি WhatsApp-এ যোগাযোগ করবেন।',
      en: 'Our support hotline and WhatsApp are active daily from 8:00 AM to 11:30 PM. Typically, our coordinator reaches out on WhatsApp within 5 to 15 minutes of receiving your order.'
    }
  },
  {
    q: {
      bn: 'অর্ডার করার জন্য কি কোনো একাউন্ট তৈরি করতে হবে?',
      en: 'Do I need to create an account to place an order?'
    },
    a: {
      bn: 'না, কোনো একাউন্ট বা রেজিস্ট্রেশনের ঝামেলা নেই! শুধু আপনার নাম, মোবাইল, WhatsApp নম্বর এবং কাজের বিস্তারিত দিয়ে সরাসরি ২ মিনিটে অর্ডার করতে পারবেন। সাথে সাথেই আপনাকে একটি ইউনিক Order ID প্রদান করা হবে।',
      en: 'No account registration is required! You can place an order in under 2 minutes by providing your name, mobile, WhatsApp number, and requirements. You will instantly receive a unique Order ID.'
    }
  },
  {
    q: {
      bn: 'আমি কীভাবে আমার অর্ডারের অগ্রগতি ট্র্যাক করব?',
      en: 'How can I track the progress of my order?'
    },
    a: {
      bn: 'ওয়েবসাইটের উপরের "Track Order" অপশনে গিয়ে আপনার Order ID অথবা মোবাইল নম্বর দিলেই দেখতে পাবেন এক্সপার্ট নিয়োগ, কাজের অগ্রগতি এবং ডেলিভারি স্ট্যাটাস। এছাড়াও WhatsApp-এ সরাসরি লাইভ আপডেট দেওয়া হয়।',
      en: 'Click "Track Order" in the navigation and enter your Order ID or phone number to view live progress from specialist assignment to final delivery. You will also receive direct updates on WhatsApp.'
    }
  },
  {
    q: {
      bn: 'আমার প্রজেক্ট বা অ্যাকাডেমিক ফাইলের গোপনীয়তা কীভাবে রক্ষা করা হয়?',
      en: 'How is the privacy and confidentiality of my project files maintained?'
    },
    a: {
      bn: 'Kraflyn Technologies ১০০% ক্লায়েন্ট ও শিক্ষার্থী গোপনীয়তা ও সুরক্ষা নিশ্চিত করে। আপনার আপলোড করা ফাইল এবং ব্যক্তিগত তথ্য কঠোরভাবে সংরক্ষিত থাকে এবং শুধুমাত্র আপনার নির্ধারিত এক্সপার্ট ছাড়া অন্য কারও সাথে শেয়ার করা হয় না।',
      en: 'Kraflyn Technologies guarantees 100% confidentiality and data privacy. Your uploaded files and contact information are strictly protected and only shared with your assigned specialist.'
    }
  },
  {
    q: {
      bn: 'পেমেন্ট পদ্ধতি কীভাবে সম্পন্ন হয়?',
      en: 'How does the payment process work?'
    },
    a: {
      bn: 'অর্ডারের পর কো-অর্ডিনেটর WhatsApp-এ আপনার সাথে কাজের পরিধি ও সময় নিয়ে কথা বলে এক্সপার্ট নিয়োগ করবেন। এরপর বিকাশ (bKash), নগদ (Nagad), রকেট বা ব্যাংক ট্রান্সফারের মাধ্যমে সহজ ও নিরাপদভাবে পেমেন্ট সম্পন্ন করতে পারবেন।',
      en: 'After placing an order, our coordinator confirms the project scope on WhatsApp and assigns your specialist. Payments can then be completed securely via bKash, Nagad, Rocket, or Bank Transfer.'
    }
  }
];
