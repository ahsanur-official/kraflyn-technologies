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

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  bn: {
    // Top Hotline Bar
    hotlineText: 'একাডেমিক সাপোর্ট হটলাইন: +880 1712-345678 (WhatsApp সক্রিয় সকাল ৮:০০ - রাত ১১:৩০)',
    trackOrderStatus: 'অর্ডার ট্র্যাক করুন',
    directWhatsApp: 'সরাসরি WhatsApp হেল্প',
    adminPortalBtn: 'অ্যাডমিন পোর্টাল',
    backToStudentWeb: '← স্টুডেন্ট ওয়েবসাইটে ফিরে যান',

    // Nav
    home: 'হোম',
    services: 'একাডেমিক সার্ভিসসমূহ',
    howItWorks: 'কীভাবে কাজ করে',
    reviews: 'শিক্ষার্থীদের রিভিউ',
    trackOrder: 'ট্র্যাক অর্ডার',
    faq: 'প্রশ্নোত্তর',
    aboutUs: 'আমাদের সম্পর্কে',
    contact: 'যোগাযোগ',
    cart: 'কার্ট',
    empty: 'খালি',
    orderNow: 'সরাসরি অর্ডার',

    // Hero
    heroBadge: '🎓 বাংলাদেশের ১ নম্বর বিশ্ববিদ্যালয় একাডেমিক মেন্টরশিপ প্ল্যাটফর্ম',
    heroTitle1: 'আপনার একাডেমিক সমস্যা,',
    heroTitleHighlight: 'একটি নির্ভরযোগ্য সমাধান।',
    heroTitle2: 'পরীক্ষার প্রস্তুতি থেকে থিসিস ডিফেন্স পর্যন্ত।',
    heroSubtitle: 'কঠিন কোর্স বুঝতে সমস্যা? ল্যাব রিপোর্টে এরর? থিসিস পেপারে দিকনির্দেশনা চান? শীর্ষ বিশ্ববিদ্যালয়ের অভিজ্ঞ মেন্টরদের সাথে সরাসরি ১-অন-১ সাপোর্ট নিন এবং নিশ্চিত করুন কাঙ্ক্ষিত গ্রেড।',
    heroBrowseBtn: 'সব সার্ভিস দেখুন',
    heroDirectOrderBtn: 'সরাসরি অর্ডার দিন',
    heroStatStudents: '৮৫০+',
    heroStatStudentsLabel: 'সফল শিক্ষার্থী',
    heroStatSatisfaction: '৯৯.৪%',
    heroStatSatisfactionLabel: 'সন্তুষ্টির হার',
    heroStatUniversities: '২৫+',
    heroStatUniversitiesLabel: 'বিশ্ববিদ্যালয় কভার্ড',
    heroStatTurnaround: '৬-২৪ ঘণ্টা',
    heroStatTurnaroundLabel: 'দ্রুত ডেলিভারি',

    // Problem Triage
    triageBadge: '🎯 আপনার বর্তমান প্রয়োজন নির্বাচন করুন',
    triageHeading: 'আপনার একাডেমিক প্রয়োজন অনুযায়ী দ্রুত সাহায্য নিন',
    triageSubtitle: 'ক্লিক করলেই তাৎক্ষণিক সঠিক সার্ভিস ও সরাসরি অর্ডারের সুযোগ পাবেন।',
    triageAll: 'সকল ক্যাটাগরি',
    triageClickToOrder: 'অর্ডার করতে ক্লিক করুন →',

    // Services
    servicesBadge: '⚡ আমাদের একাডেমিক সার্ভিসসমূহ',
    servicesHeading: 'আপনার বিশ্ববিদ্যালয়ের সকল বিষয়ের জন্য সমন্বিত সাপোর্ট',
    servicesSubtitle: 'প্রতিটি সার্ভিসে রয়েছে অভিজ্ঞ মেন্টরদের ডেডিকেটেড ১-অন-১ গাইডেন্স ও সর্বোচ্চ গোপনীয়তা।',
    startingPrice: 'শুরুর মূল্য',
    turnaround: 'আনুমানিক সময়',
    addToCart: 'কার্টে যোগ করুন',
    viewDetails: 'বিস্তারিত দেখুন',
    directOrder: 'এখনই অর্ডার করুন',
    allCategories: 'সকল সার্ভিস',
    filterByDept: 'বিভাগ অনুযায়ী ফিল্টার:',

    // How It Works
    howItWorksBadge: '📋 সহজ ৪ ধাপের প্রসেস',
    howItWorksHeading: 'কীভাবে কাজ করে Edu Quest?',
    howItWorksSubtitle: 'অর্ডার প্লেস করা থেকে শুরু করে সমাধান পাওয়া পর্যন্ত প্রতিটি ধাপ একদম সহজ ও স্বচ্ছ।',
    step1Title: '১. সার্ভিস সিলেক্ট বা অর্ডার দিন',
    step1Desc: 'আপনার কোর্সের নাম, নির্দিষ্ট সমস্যা বা রিকোয়ারমেন্ট লিখে সরাসরি অর্ডার দিন বা কার্ট থেকে চেকআউট করুন।',
    step2Title: '২. তাৎক্ষণিক WhatsApp কো-অর্ডিনেশন',
    step2Desc: 'অর্ডারের সাথে সাথে আমাদের একাডেমিক কো-অর্ডিনেটর আপনার সাথে WhatsApp-এ যোগাযোগ করে কনফার্ম করবেন।',
    step3Title: '৩. এক্সপার্ট মেন্টর নিয়োগ ও লাইভ গাইডেন্স',
    step3Desc: 'আপনার বিষয়ের টপ ইউনিভার্সিটির বিশেষজ্ঞ মেন্টর অ্যাসাইন হয়ে কোড/নোটস/থিওরি পুঙ্খানুপুঙ্খ বুঝিয়ে দেবেন।',
    step4Title: '৪. ফাইনাল ডেলিভারি ও ভাইভা প্রস্তুতি',
    step4Desc: 'সময়মতো সমাধান প্রাপ্তি এবং ল্যাব বা থিসিস ভাইভায় সেরা ফলাফলের জন্য প্রশ্নোত্তরের পূর্ণাঙ্গ প্রস্তুতি।',

    // Reviews
    reviewsBadge: '⭐ শিক্ষার্থীদের অভিজ্ঞতা',
    reviewsHeading: 'বিভিন্ন বিশ্ববিদ্যালয়ের শিক্ষার্থীদের বাস্তব রিভিউ',
    reviewsSubtitle: 'BUET, DU, NSU, BRAC, PUB, AUST, UIU সহ দেশের শীর্ষ বিশ্ববিদ্যালয়ের শিক্ষার্থীদের বিশ্বস্ত মতামত।',
    aggregateRating: '৪.৯ / ৫.০',
    basedOnReviews: '৮৫০+ ভেরিফাইড শিক্ষার্থীর রিভিউয়ের ভিত্তিতে',
    verifiedStudent: 'ভেরিফাইড শিক্ষার্থী',
    writeReviewBtn: 'আপনার রিভিউ দিন ✍️',
    filterAllReviews: 'সকল রিভিউ',
    submitReview: 'রিভিউ সাবমিট করুন',

    // FAQ
    faqBadge: '❓ সাধারণ জিজ্ঞাসা',
    faqHeading: 'সচরাচর জিজ্ঞাসিত প্রশ্নোত্তর',
    faqSubtitle: 'অর্ডার প্রক্রিয়া, মেন্টর নিয়োগ, পেমেন্ট এবং একাডেমিক গোপনীয়তা সম্পর্কিত তথ্যাবলী।',

    // Cart
    cartTitle: 'আপনার সাপোর্ট কার্ট',
    cartEmptyTitle: 'আপনার কার্ট বর্তমানে খালি আছে',
    cartEmptySubtitle: 'আপনার পছন্দের একাডেমি সার্ভিস সিলেক্ট করে কার্টে যোগ করুন।',
    supportTier: 'সাপোর্ট টিয়ার',
    tierStandard: 'স্ট্যান্ডার্ড সাপোর্ট',
    tierExpress: 'এক্সপ্রেস ২৪ ঘণ্টা সাপোর্ট (+৳২০০)',
    tierVip: 'ভিআইপি ১-অন-১ মেন্টরশিপ (+৳৫০০)',
    urgencyFee: 'জরুরি ফি',
    total: 'সর্বমোট',
    proceedToOrder: 'অর্ডার কনফার্ম করতে এগিয়ে যান →',
    clearCart: 'কার্ট খালি করুন',
    removeItem: 'রিমুভ',

    // Order Modal
    orderModalTitle: 'একাডেমিক সাপোর্ট অর্ডার ফর্ম',
    orderModalSubtitle: 'আপনার প্রয়োজন সঠিকভাবে জানিয়ে দিন, দ্রুততম সময়ে সেরা মেন্টর নিয়োগ দেওয়া হবে।',
    stepContact: 'যোগাযোগের তথ্য',
    stepAcademic: 'একাডেমিক বিবরণ',
    stepRequirements: 'সমস্যা ও ফাইল আপলোড',
    fullName: 'আপনার পূর্ণ নাম *',
    fullNamePlaceholder: 'যেমন: মো: আহসানুর রহমান',
    phoneNumber: 'মোবাইল নম্বর *',
    phonePlaceholder: '017XXXXXXXX',
    whatsappNumber: 'WhatsApp নম্বর *',
    whatsappPlaceholder: '017XXXXXXXX (যোগাযোগের জন্য)',
    universityName: 'বিশ্ববিদ্যালয় *',
    selectUniversity: '-- বিশ্ববিদ্যালয় নির্বাচন করুন --',
    departmentName: 'বিভাগ / ডিপার্টমেন্ট *',
    selectDepartment: '-- ডিপার্টমেন্ট নির্বাচন করুন --',
    semesterOrBatch: 'সেমিস্টার / ব্যাচ',
    semesterPlaceholder: 'যেমন: ৮ম সেমিস্টার / ব্যাচ ১৮',
    courseTitle: 'কোর্সের নাম *',
    coursePlaceholder: 'যেমন: Data Structures / Algorithm / Thesis',
    courseCode: 'কোর্স কোড (যদি থাকে)',
    courseCodePlaceholder: 'যেমন: CSE 225',
    deadlineDate: 'ডেডলাইন / কবে লাগবে? *',
    problemDetails: 'আপনার সমস্যার বিস্তারিত বিবরণ *',
    problemDetailsPlaceholder: 'কী ধরনের সাহায্য প্রয়োজন? কোন অ্যালগরিদম বা চ্যাপ্টারে সমস্যা? বিস্তারিত লিখুন...',
    preferredContactMethod: 'যোগাযোগের মাধ্যম',
    uploadFiles: 'অ্যাসাইনমেন্ট/ল্যাব/থিসিস ফাইল আপলোড (ঐচ্ছিক)',
    uploadFilesHint: 'PDF, DOCX, ZIP, C/C++/PY বা ছবি ড্র্যাগ ও ড্রপ করুন (সর্বোচ্চ ২৫MB)',
    confirmOrderBtn: 'অর্ডার নিশ্চিত করুন 🚀',
    cancelBtn: 'বাতিল',

    // Order Success
    orderSuccessTitle: 'অর্ডার সফলভাবে গ্রহণ করা হয়েছে!',
    orderSuccessSubtitle: 'আপনার একাডেমি অর্ডারটি Edu Quest অপারেশনে তালিকাভুক্ত হয়েছে।',
    orderIdLabel: 'অর্ডার আইডি:',
    whatsappCoordinatorBtn: 'তাৎক্ষণিক WhatsApp-এ যোগাযোগ করুন 💬',
    whatsappCoordinatorHint: 'দ্রুত প্রসেসিং ও মেন্টর নিশ্চিত করতে উপরের বাটনে ক্লিক করে WhatsApp-এ মেসেজ পাঠান।',
    trackOrderBtn: 'অর্ডার স্ট্যাটাস ট্র্যাক করুন',
    backHomeBtn: 'হোম পেজে ফিরে যান',

    // Order Tracker
    trackerTitle: 'অর্ডার ট্র্যাকিং সিস্টেম',
    trackerSubtitle: 'আপনার অর্ডার আইডি বা মোবাইল নম্বর দিয়ে সরাসরি বর্তমান অগ্রগতি দেখুন।',
    trackerInputPlaceholder: 'অর্ডার আইডি (যেমন: EQ-ORD-...) বা ফোন নম্বর দিন',
    searchBtn: 'খুঁজুন',
    statusOrderReceived: '১. অর্ডার গ্রহণ',
    statusMentorAssigned: '২. মেন্টর নিয়োগ',
    statusStudentContacted: '৩. শিক্ষার্থীর সাথে যোগাযোগ',
    statusInProgress: '৪. কাজ চলছে',
    statusDelivered: '৫. ডেলিভারি সম্পন্ন',
    noOrderFound: 'কোনো অর্ডার পাওয়া যায়নি',
    noOrderFoundHint: 'দয়া করে সঠিক অর্ডার আইডি বা মোবাইল নম্বর টাইপ করুন।',
    orderDetails: 'অর্ডারের বিবরণ',
    assignedMentor: 'নিযুক্ত মেন্টর:',
    notYetAssigned: 'কো-অর্ডিনেটর যাচাই করছেন',
    orderAmount: 'মূল্য:',
    studentInfo: 'শিক্ষার্থীর তথ্য',
    latestUpdates: 'সর্বশেষ আপডেট',

    // Write Review Modal
    writeReviewTitle: 'আপনার মূল্যবান মতামত দিন',
    writeReviewSubtitle: 'Edu Quest-এর মেন্টরশিপ কেমন ছিল? আপনার মন্তব্য অন্য শিক্ষার্থীদের সাহায্য করবে।',
    yourRating: 'আপনার রেটিং *',
    gradeOutcomeLabel: 'প্রাপ্ত ফলাফল / গ্রেড (যদি থাকে)',
    gradeOutcomePlaceholder: 'যেমন: A+ গ্রেড পেয়েছি / ডিফেন্সে প্রথম হয়েছি',
    reviewCommentLabel: 'আপনার মন্তব্য *',
    reviewCommentPlaceholder: 'মেন্টর কেমন সহায়তা করেছেন? সময়মতো ডেলিভারি পেয়েছেন কি না? বিস্তারিত লিখুন...',
    submitReviewBtn: 'রিভিউ সাবমিট করুন ✨',

    // Footer
    footerAbout: 'Edu Quest হল বাংলাদেশের বিশ্ববিদ্যালয় শিক্ষার্থীদের জন্য একটি সমন্বিত একাডেমি সাপোর্ট প্ল্যাটফর্ম। কোর্স সাপোর্ট, ল্যাব রিপোর্ট, প্রোগ্রামিং অ্যাসাইনমেন্ট, প্রেজেন্টেশন এবং থিসিস গবেষণায় নির্ভরযোগ্য দিকনির্দেশনা প্রদান করাই আমাদের লক্ষ্য।',
    quickLinks: 'দ্রুত লিংক',
    popularServices: 'জনপ্রিয় সার্ভিসসমূহ',
    directContact: 'সরাসরি যোগাযোগ',
    confidentialMentorship: '১০০% শিক্ষার্থী গোপনীয়তা সংরক্ষিত',
    copyright: 'সর্বস্বত্ব সংরক্ষিত। Edu Quest একাডেমিক সাপোর্ট প্ল্যাটফর্ম।',

    // Admin Portal
    adminHeaderTitle: 'Edu Quest অ্যাডমিন কন্ট্রোল প্যানেল',
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
    orderTableUniversity: 'বিশ্ববিদ্যালয় ও কোর্স',
    orderTableCourse: 'সার্ভিস ও রিকোয়ারমেন্ট',
    orderTableDeadline: 'ডেডলাইন',
    orderTableMentor: 'নিযুক্ত মেন্টর',
    orderTableAmount: 'অ্যামাউন্ট',
    orderTableStatus: 'স্ট্যাটাস',
    orderTableAction: 'অ্যাকশন',
    manageOrderBtn: 'ম্যানেজ করুন ⚙️',
    editOrderTitle: 'অর্ডার আপডেট ও মেন্টর নিয়োগ',
    saveChangesBtn: 'সংরক্ষণ করুন',
    assignMentorLabel: 'মেন্টরের নাম দিন:',
    updateStatusLabel: 'অর্ডার স্ট্যাটাস পরিবর্তন করুন:',
    adminNoteLabel: 'অ্যাডমিন ইন্টারনাল নোট:',
    deleteOrderConfirm: 'আপনি কি নিশ্চিত এই অর্ডারটি মুছে ফেলতে চান?'
  },
  en: {
    // Top Hotline Bar
    hotlineText: 'Academic Support Hotline: +880 1712-345678 (WhatsApp Active 8:00 AM - 11:30 PM)',
    trackOrderStatus: 'Track Order Status',
    directWhatsApp: 'Direct WhatsApp Help',
    adminPortalBtn: 'Admin Portal',
    backToStudentWeb: '← Return to Student Website',

    // Nav
    home: 'Home',
    services: 'Academic Services',
    howItWorks: 'How It Works',
    reviews: 'Student Reviews',
    trackOrder: 'Track Order',
    faq: 'FAQ',
    aboutUs: 'About Us',
    contact: 'Contact',
    cart: 'Cart',
    empty: 'Empty',
    orderNow: 'Order Now',

    // Hero
    heroBadge: "🎓 Bangladesh's #1 University Academic Mentorship Platform",
    heroTitle1: 'Your Academic Challenges,',
    heroTitleHighlight: 'One Trusted Solution.',
    heroTitle2: 'From Mid-term Prep to Final Thesis Defense.',
    heroSubtitle: 'Struggling with tough courses, lab report bugs, coding assignments, or thesis papers? Get personalized 1-on-1 mentorship from top university graduates to secure your target grade.',
    heroBrowseBtn: 'Browse All Services',
    heroDirectOrderBtn: 'Place Direct Order',
    heroStatStudents: '850+',
    heroStatStudentsLabel: 'Students Mentored',
    heroStatSatisfaction: '99.4%',
    heroStatSatisfactionLabel: 'Satisfaction Rate',
    heroStatUniversities: '25+',
    heroStatUniversitiesLabel: 'Universities Covered',
    heroStatTurnaround: '6 - 24h',
    heroStatTurnaroundLabel: 'Fast Turnaround',

    // Problem Triage
    triageBadge: '🎯 Quick Problem Finder',
    triageHeading: 'Get Instant Academic Support for Your Exact Need',
    triageSubtitle: 'Click on your current challenge below to immediately view solutions and place an order.',
    triageAll: 'All Categories',
    triageClickToOrder: 'Click to Order →',

    // Services
    servicesBadge: '⚡ Specialized Academic Services',
    servicesHeading: 'Comprehensive Academic Guidance Across All Subjects',
    servicesSubtitle: 'Every service is backed by verified subject-matter experts, dedicated 1-on-1 tutoring, and strict student confidentiality.',
    startingPrice: 'Starting Price',
    turnaround: 'Estimated Turnaround',
    addToCart: 'Add to Cart',
    viewDetails: 'View Details',
    directOrder: 'Order Now',
    allCategories: 'All Services',
    filterByDept: 'Filter by Category:',

    // How It Works
    howItWorksBadge: '📋 Simple 4-Step Process',
    howItWorksHeading: 'How Edu Quest Works',
    howItWorksSubtitle: 'From placing your support request to final guidance and defense preparation, our workflow is transparent and student-centric.',
    step1Title: '1. Select Service or Order Directly',
    step1Desc: 'Describe your course name, specific assignment problem or thesis topic, and submit with your preferred deadline.',
    step2Title: '2. Instant WhatsApp Coordination',
    step2Desc: 'Our operations team connects with you on WhatsApp within minutes to confirm project scope and requirements.',
    step3Title: '3. Expert Mentor Matching & Live Guidance',
    step3Desc: 'We assign a top-tier graduate mentor in your exact subject area who breaks down the theory, code, and solution step-by-step.',
    step4Title: '4. Final Delivery & Defense Prep',
    step4Desc: 'Receive clear, well-documented guidance on time with follow-up doubt clearing to help you ace your lab viva or defense.',

    // Reviews
    reviewsBadge: '⭐ Real Student Feedback',
    reviewsHeading: 'Verified Student Reviews Across Universities',
    reviewsSubtitle: 'Trusted by hundreds of students from BUET, DU, NSU, BRAC, PUB, AUST, UIU, and other leading institutions.',
    aggregateRating: '4.9 / 5.0',
    basedOnReviews: 'Based on 850+ verified student reviews',
    verifiedStudent: 'Verified Student',
    writeReviewBtn: 'Write a Review ✍️',
    filterAllReviews: 'All Reviews',
    submitReview: 'Submit Review',

    // FAQ
    faqBadge: '❓ Frequently Asked Questions',
    faqHeading: 'Everything You Need to Know',
    faqSubtitle: 'Clear answers regarding mentor assignment, turnaround times, payment options, and academic integrity.',

    // Cart
    cartTitle: 'Your Support Cart',
    cartEmptyTitle: 'Your Cart is Currently Empty',
    cartEmptySubtitle: 'Browse our academic services and add the support you need.',
    supportTier: 'Support Tier',
    tierStandard: 'Standard Support',
    tierExpress: 'Express 24h Support (+৳200)',
    tierVip: 'VIP 1-on-1 Mentorship (+৳500)',
    urgencyFee: 'Urgency Fee',
    total: 'Total',
    proceedToOrder: 'Proceed to Checkout →',
    clearCart: 'Clear Cart',
    removeItem: 'Remove',

    // Order Modal
    orderModalTitle: 'Academic Support Order Form',
    orderModalSubtitle: 'Provide your course details and problem description. Our coordinator will match the best mentor for you.',
    stepContact: 'Contact Details',
    stepAcademic: 'Academic Information',
    stepRequirements: 'Problem & Attachments',
    fullName: 'Your Full Name *',
    fullNamePlaceholder: 'e.g. Md. Ehsanur Rahaman',
    phoneNumber: 'Phone Number *',
    phonePlaceholder: '017XXXXXXXX',
    whatsappNumber: 'WhatsApp Number *',
    whatsappPlaceholder: '017XXXXXXXX (For live updates)',
    universityName: 'University *',
    selectUniversity: '-- Select University --',
    departmentName: 'Department *',
    selectDepartment: '-- Select Department --',
    semesterOrBatch: 'Semester / Batch',
    semesterPlaceholder: 'e.g. 8th Semester / Batch 18',
    courseTitle: 'Course Title *',
    coursePlaceholder: 'e.g. Data Structures / Algorithms / Thesis',
    courseCode: 'Course Code (Optional)',
    courseCodePlaceholder: 'e.g. CSE 225',
    deadlineDate: 'Target Deadline *',
    problemDetails: 'Detailed Problem Description *',
    problemDetailsPlaceholder: 'Explain what support you need, which algorithms/topics are giving errors, specific requirements...',
    preferredContactMethod: 'Preferred Contact Method',
    uploadFiles: 'Upload Assignment / Lab / Code Files (Optional)',
    uploadFilesHint: 'Drag & drop PDF, DOCX, ZIP, or code files (Max 25MB)',
    confirmOrderBtn: 'Confirm & Place Order 🚀',
    cancelBtn: 'Cancel',

    // Order Success
    orderSuccessTitle: 'Order Successfully Placed!',
    orderSuccessSubtitle: 'Your academic support order has been registered in the Edu Quest queue.',
    orderIdLabel: 'Order ID:',
    whatsappCoordinatorBtn: 'Connect on WhatsApp Now 💬',
    whatsappCoordinatorHint: 'Click above to message our academic coordinator on WhatsApp for instant mentor matching.',
    trackOrderBtn: 'Track Order Status',
    backHomeBtn: 'Back to Home',

    // Order Tracker
    trackerTitle: 'Live Order Tracker',
    trackerSubtitle: 'Enter your Order ID or registered mobile number to view real-time progress.',
    trackerInputPlaceholder: 'Enter Order ID (e.g. EQ-ORD-...) or Phone number',
    searchBtn: 'Search',
    statusOrderReceived: '1. Order Received',
    statusMentorAssigned: '2. Mentor Assigned',
    statusStudentContacted: '3. Contacted Student',
    statusInProgress: '4. In Progress',
    statusDelivered: '5. Delivered & Completed',
    noOrderFound: 'No Order Found',
    noOrderFoundHint: 'Please check your Order ID or phone number and try again.',
    orderDetails: 'Order Details',
    assignedMentor: 'Assigned Mentor:',
    notYetAssigned: 'Matching best mentor...',
    orderAmount: 'Total Amount:',
    studentInfo: 'Student Information',
    latestUpdates: 'Latest Coordination Updates',

    // Write Review Modal
    writeReviewTitle: 'Share Your Experience',
    writeReviewSubtitle: 'How was your mentorship with Edu Quest? Your feedback inspires fellow students.',
    yourRating: 'Your Rating *',
    gradeOutcomeLabel: 'Grade / Defense Outcome (Optional)',
    gradeOutcomePlaceholder: 'e.g. Secured A+ / Thesis Phase 1 Approved',
    reviewCommentLabel: 'Your Review *',
    reviewCommentPlaceholder: 'Describe how the mentor guided you, whether delivery was on time, and your learning experience...',
    submitReviewBtn: 'Submit Review ✨',

    // Footer
    footerAbout: 'Edu Quest is an integrated academic support and mentorship platform for university students across Bangladesh. We provide trusted 1-on-1 guidance in course concepts, lab reports, programming assignments, and thesis research.',
    quickLinks: 'Quick Links',
    popularServices: 'Popular Services',
    directContact: 'Direct Contact',
    confidentialMentorship: '100% Confidential Student Mentorship',
    copyright: 'All rights reserved. Edu Quest Academic Support Platform.',

    // Admin Portal
    adminHeaderTitle: 'Edu Quest Admin Operations Hub',
    adminHeaderSubtitle: 'Manage incoming student orders, mentor assignments, delivery pipelines, and customer reviews in real-time.',
    adminStatTotalOrders: 'Total Orders Placed',
    adminStatTodayOrders: 'New Orders Today',
    adminStatInProgress: 'In Progress',
    adminStatDelivered: 'Delivered',
    adminStatTotalRevenue: 'Estimated Volume',
    adminStatAvgOrderValue: 'Avg Order Value',
    tabAllOrders: 'All Student Orders',
    tabReviewsManagement: 'Customer Reviews',
    searchOrdersPlaceholder: 'Search by Order ID, student name, phone, or university...',
    filterStatusAll: 'All Statuses',
    orderTableId: 'Order ID',
    orderTableStudent: 'Student & Contact',
    orderTableUniversity: 'University & Course',
    orderTableCourse: 'Service & Needs',
    orderTableDeadline: 'Deadline',
    orderTableMentor: 'Assigned Mentor',
    orderTableAmount: 'Amount',
    orderTableStatus: 'Status',
    orderTableAction: 'Action',
    manageOrderBtn: 'Manage ⚙️',
    editOrderTitle: 'Update Order & Assign Mentor',
    saveChangesBtn: 'Save Changes',
    assignMentorLabel: 'Mentor Name:',
    updateStatusLabel: 'Update Pipeline Status:',
    adminNoteLabel: 'Admin Internal Note:',
    deleteOrderConfirm: 'Are you sure you want to delete this order record?'
  }
};

export const BILINGUAL_SERVICES = [
  {
    id: 'course-support',
    iconName: 'BookOpen',
    category: 'Academic Support',
    startingPrice: 300,
    typicalTurnaround: '12 - 24 Hours',
    tag: 'Popular',
    title: {
      bn: 'কোর্স সাপোর্ট ও পরীক্ষার প্রস্তুতি',
      en: 'Course Support & Exam Prep'
    },
    shortDesc: {
      bn: 'কঠিন একাডেমিক কোর্সের কনসেপচুয়াল বোঝাপড়া, সিলেবাস ব্রেকডাউন এবং ১-অন-১ টিউটরিং।',
      en: 'Conceptual clarity, syllabus breakdown, and 1-to-1 tutoring for challenging academic courses.'
    },
    fullDesc: {
      bn: 'অ্যালগরিদম, ডিসক্রিট ম্যাথ, ইলেকট্রনিক্স বা ফান্ডামেন্টাল থিওরি বুঝতে সমস্যায় পড়েছেন? বিশ্ববিদ্যালয়ের সিলেবাস অনুযায়ী ব্যক্তিগত ১-অন-১ লাইভ টিউটরিং, বিগত সেমিস্টারের প্রশ্ন সমাধান এবং গোছানো নোটস পান।',
      en: 'Stuck with complex algorithms, discrete math, electronics, or core theories? Get personalized 1-on-1 tutoring sessions, step-by-step topic breakdowns, past paper walkthroughs, and exam preparation strategies.'
    },
    deliverables: {
      bn: [
        '১-অন-১ লাইভ ইন্টারেক্টিভ কনসেপচুয়াল সেশন',
        'গোছানো ডিজিটাল নোটস ও ফর্মুলা শিট',
        'বিগত সেমিস্টার পরীক্ষার প্রশ্ন সমাধান',
        'গুরুত্বপূর্ণ টপিকের চ্যাপ্টার সামারি',
        'WhatsApp/Meet-এ প্রশ্নোত্তরের সুযোগ'
      ],
      en: [
        '1-on-1 live interactive conceptual session',
        'Curated digital notes & formula cheat-sheets',
        'Past semester exam question solutions',
        'Important chapter summary & topic breakdowns',
        'Follow-up doubt clearing on WhatsApp/Meet'
      ]
    }
  },
  {
    id: 'programming-lab',
    iconName: 'Code',
    category: 'Technical Support',
    startingPrice: 400,
    typicalTurnaround: '6 - 18 Hours',
    tag: 'High Demand',
    title: {
      bn: 'প্রোগ্রামিং ও ল্যাব কোড সাপোর্ট',
      en: 'Programming & Lab Code Support'
    },
    shortDesc: {
      bn: 'হাতে-কলমে ডিবাগিং, অ্যালগরিদম ইমপ্লিমেন্টেশন এবং ল্যাব টাস্ক গাইডেন্স।',
      en: 'Hands-on debugging, algorithm implementation, and lab task guidance.'
    },
    fullDesc: {
      bn: 'Segmentation fault, রিকার্সিভ অ্যালগরিদম বা ফ্রেমওয়ার্ক এররে আটকে আছেন? C/C++, Java, Python, JavaScript, OOP, Data Structures, Database ও Web Development-এ অভিজ্ঞদের সহায়তায় ল্যাব টাস্ক আয়ত্ত করুন।',
      en: 'Get stuck on segmentation faults, recursive algorithms, or framework bugs? Work with experienced developers in C/C++, Java, Python, JavaScript, OOP, Data Structures, DB, and Web Development to master your lab tasks.'
    },
    deliverables: {
      bn: [
        'লাইন-বাই-লাইন কোড ব্যাখ্যা ও লজিক বিশ্লেষণ',
        'লাইভ ডিবাগিং সহায়তা ও এরর ফিক্সিং',
        'ক্লিন কোডিং স্ট্যান্ডার্ড ও ইনডেন্টেশন রিভিউ',
        'টেস্ট কেস ও এজ কেস সমাধান',
        'ল্যাব ভাইভায় কোড ব্যাখ্যার প্রস্তুতি'
      ],
      en: [
        'Line-by-line code explanation and logic flow',
        'Live debugging assistance and error resolution',
        'Clean coding practices and indentation review',
        'Sample test cases and edge case analysis',
        'Lab viva questions prep on written code'
      ]
    }
  },
  {
    id: 'assignment-guidance',
    iconName: 'FileText',
    category: 'Academic Support',
    startingPrice: 350,
    typicalTurnaround: '12 - 36 Hours',
    title: {
      bn: 'অ্যাসাইনমেন্ট গাইডেন্স ও মেথডোলজি',
      en: 'Assignment Guidance & Methodology'
    },
    shortDesc: {
      bn: 'গোছানো সমস্যা সমাধান কাঠামো, একাডেমিক রেফারেন্সিং এবং ড্রাফট রিভিউ।',
      en: 'Structured methodology, problem solving approach, and academic citation reviews.'
    },
    fullDesc: {
      bn: 'অ্যাসাইনমেন্টের নির্ভুল স্ট্রাকচার গঠন, গাণিতিক সমাধান যাচাই, সঠিক রেফারেন্সিং ও সাইটেশন ফরম্যাটিং এবং একাডেমিক স্ট্যান্ডার্ড বজায় রাখার পূর্ণাঙ্গ গাইডেন্স।',
      en: 'Comprehensive academic guidance on how to structure your assignments, conduct independent research, organize citations, verify mathematical derivations, and present arguments convincingly.'
    },
    deliverables: {
      bn: [
        'প্রবলেম ব্রেকডাউন ও ধাপে ধাপে আউটলাইন',
        'রেফারেন্স মেটেরিয়াল ও বিব্লিওগ্রাফি কিউরেশন',
        'ম্যাথমেটিকাল ডেরিভেশন ও লজিক ভেরিফিকেশন',
        'ড্রাফট প্রুফরিডিং ও স্ট্রাকচারাল ক্রিটিক',
        'প্ল্যাজিয়ারিজম চেক ও সাইটেশন ফরম্যাট (IEEE/APA)'
      ],
      en: [
        'Problem breakdown & step-by-step outline',
        'Reference material & bibliography curation',
        'Mathematical derivation & logic verification',
        'Draft proofreading & structural critique',
        'Plagiarism check and citation formatting (IEEE/APA)'
      ]
    }
  },
  {
    id: 'lab-report',
    iconName: 'FlaskConical',
    category: 'Technical Support',
    startingPrice: 250,
    typicalTurnaround: '8 - 24 Hours',
    title: {
      bn: 'ল্যাব রিপোর্ট ও ডেটা প্লটিং',
      en: 'Lab Report & Data Plotting'
    },
    shortDesc: {
      bn: 'এক্সপেরিমেন্টাল ডেটা প্লটিং, ক্যালকুলেশন, এরর অ্যানালাইসিস ও স্ট্যান্ডার্ড ফরম্যাট।',
      en: 'Data plotting, error calculations, apparatus explanation, and standard formatting.'
    },
    fullDesc: {
      bn: 'ল্যাবের কাঁচা ডেটাকে প্রফেশনাল রিপোর্টে রূপান্তর করুন। ম্যাটল্যাব/অরিজিন গ্রাফিং, এরর ক্যালকুলেশন, রেজাল্ট ডিসকাশন এবং ডিপার্টমেন্টাল স্ট্যান্ডার্ড অনুযায়ী রিপোর্ট প্রস্তুতের দিকনির্দেশনা।',
      en: 'Transform raw lab experiment data into polished, professional laboratory reports. Mentors guide you through statistical calculations, MATLAB/Origin graphing, error tolerance analysis, and standard reporting.'
    },
    deliverables: {
      bn: [
        'এক্সপেরিমেন্টাল প্রসিডিউর ও অবজেক্টিভ স্ট্রাকচারিং',
        'হাই-রেজোলিউশন গ্রাফ ও টেবুলার ডেটা প্লটিং',
        'স্ট্যান্ডার্ড এরর ও ডেভিয়েশন ক্যালকুলেশন',
        'রেজাল্ট ডিসকাশন ও কনক্লুশন ড্রাফটিং গাইডেন্স',
        'স্ট্যান্ডার্ড LaTeX / Word ফরম্যাটিং টেমপ্লেট'
      ],
      en: [
        'Experimental procedure and objective structuring',
        'High-resolution graphs & tabular data plotting',
        'Standard error and deviation calculations',
        'Result discussion & conclusion drafting guidance',
        'Standard LaTeX / Word formatting template'
      ]
    }
  },
  {
    id: 'presentation-viva',
    iconName: 'Mic',
    category: 'Communication',
    startingPrice: 300,
    typicalTurnaround: '12 - 24 Hours',
    tag: 'Quick Turnaround',
    title: {
      bn: 'প্রেজেন্টেশন স্লাইড ও ভাইভা ডিফেন্স',
      en: 'Presentation & Viva Defense'
    },
    shortDesc: {
      bn: 'স্লাইড ডেক ডিজাইন, স্পিচ রিহার্সাল এবং ফ্যাকাল্টি মক ভাইভা প্রিপারেশন।',
      en: 'Slide deck structuring, speech rehearsals, and mock faculty viva preparation.'
    },
    fullDesc: {
      bn: 'প্রেজেন্টেশনের জড়তা দূর করে কনফিডেন্সের সাথে ডিফেন্স দিন। আকর্ষণীয় স্লাইড ডিজাইন ফিডব্যাক, ফ্যাকাল্টির সম্ভাব্য কঠিন প্রশ্নোত্তরের মক রিহার্সাল ও স্পিকিং টিপস।',
      en: 'Overcome presentation anxiety and ace your defense. Get slide design feedback, elevator pitch rehearsal, expected critical faculty questioning simulations, and body language coaching.'
    },
    deliverables: {
      bn: [
        'স্লাইড ডেক অপটিমাইজেশন ও ভিজ্যুয়াল ব্যালেন্স',
        '১-অন-১ মক ভাইভায় সম্ভাব্য কাউন্টার-কোয়েশ্চেন',
        'স্পিকিং স্ক্রিপ্ট ও ট্রানজিশন কিউস তৈরি',
        'কড়া ফ্যাকাল্টিদের সামলানোর Q&A স্ট্র্যাটেজি',
        'কনফিডেন্স বিল্ডিং ও বডি ল্যাঙ্গুয়েজ গাইড'
      ],
      en: [
        'Slide deck review (Visual balance, bullet optimization)',
        '1-on-1 Mock viva with difficult counter-questions',
        'Speaking script & transition cues formulation',
        'Q&A survival tactics for strict faculties',
        'Confidence building & body language feedback'
      ]
    }
  },
  {
    id: 'research-support',
    iconName: 'Microscope',
    category: 'Research',
    startingPrice: 800,
    typicalTurnaround: '24 - 48 Hours',
    title: {
      bn: 'রিসার্চ সাপোর্ট ও পেপার গাইডেন্স',
      en: 'Research Support & Paper Guidance'
    },
    shortDesc: {
      bn: 'টপিক নির্বাচন, লিটারেচার রিভিউ ম্যাট্রিক্স, ডেটাসেট কিউরেশন ও মেথডোলজি।',
      en: 'Topic selection, literature review matrices, dataset sourcing, and methodology design.'
    },
    fullDesc: {
      bn: 'রিসার্চ আইডিয়া থেকে পাবলিকেশন যোগ্য পেপার তৈরি পর্যন্ত দিকনির্দেশনা। IEEE/ACM/Springer পেপার অ্যানালাইসিস, মেথডোলজি ডিজাইন এবং ডেটা অ্যানালাইসিস কৌশল।',
      en: 'Bridge the gap between raw ideas and publication-ready academic papers. Receive mentorship on scoping novelty, systematically categorizing IEEE/ACM/Springer papers, experimental design, and data validation.'
    },
    deliverables: {
      bn: [
        'রিসার্চ গ্যাপ চিহ্নিতকরণ ও প্রবলেম ফর্মুলেশন',
        'সিস্টেমেটিক লিটারেচার রিভিউ (SLR) ম্যাট্রিক্স টেমপ্লেট',
        'ডেটাসেট কিউরেশন ও প্রি-প্রসেসিং গাইডেন্স',
        'মেথডোলজি ও আর্কিটেকচার ডায়াগ্রাম ডিসকাশন',
        'জার্নাল / কনফারেন্স সিলেকশন পরামর্শ'
      ],
      en: [
        'Research gap identification & problem formulation',
        'Systematic Literature Review (SLR) matrix template',
        'Dataset curation & preprocessing guidance',
        'Methodology & architecture diagram discussion',
        'Target journal/conference selection advice'
      ]
    }
  },
  {
    id: 'thesis-mentorship',
    iconName: 'GraduationCap',
    category: 'Final Year',
    startingPrice: 1200,
    typicalTurnaround: 'Milestone-based',
    tag: 'Top Rated',
    title: {
      bn: 'থিসিস মেন্টরশিপ ও বুক রাইটিং',
      en: 'Thesis Mentorship & Book Writing'
    },
    shortDesc: {
      bn: 'আন্ডারগ্রাজুয়েট বা মাস্টার্স থিসিসের প্রপোজাল থেকে ফাইনাল ডিফেন্স পর্যন্ত ফুল মেন্টরিং।',
      en: 'Step-by-step guidance throughout your undergraduate or masters thesis journey.'
    },
    fullDesc: {
      bn: 'প্রপোজাল ডিফেন্স থেকে শুরু করে ফাইনাল বুক সাবমিশন পর্যন্ত এন্ড-টু-এন্ড মেন্টরশিপ। টপ পাবলিশড রিসার্চারদের সাথে লিটারেচার রিভিউ, অ্যালগরিদম, বেঞ্চমার্ক ও বুক ফরম্যাটিং।',
      en: 'End-to-end guidance from proposal defense to final book submission. Work with published researchers who assist you through literature review, algorithm implementation, and defense rehearsals.'
    },
    deliverables: {
      bn: [
        'প্রপোজাল ও টপিক ভ্যালিডেশন',
        'লিটারেচার রিভিউ স্ট্রাকচারিং ও সাইটেশন ম্যানেজমেন্ট',
        'মেথডোলজি ডিজাইন ও বেঞ্চমার্ক কম্প্যারিজন',
        'চ্যাপ্টার-বাই-চ্যাপ্টার রিভিউ ও রিফাইনমেন্ট',
        'ফাইনাল ডিফেন্স মক সিমুলেশন ও স্লাইড ডেক'
      ],
      en: [
        'Proposal & topic validation with faculty expectations',
        'Literature review structuring & citation management',
        'Methodology design and benchmark comparisons',
        'Full book chapter-by-chapter review & refinement',
        'Final defense mock viva & presentation deck review'
      ]
    }
  },
  {
    id: 'fyp-support',
    iconName: 'Layers',
    category: 'Final Year',
    startingPrice: 1000,
    typicalTurnaround: 'Sprint-based',
    title: {
      bn: 'ফাইনাল ইয়ার প্রজেক্ট (FYP) কনসালটেশন',
      en: 'Final Year Project (FYP) Mentorship'
    },
    shortDesc: {
      bn: 'সফটওয়্যার/হার্ডওয়্যার আর্কিটেকচার, SRS ডকুমেন্টেশন ও প্রজেক্ট ফেজ ডিফেন্স।',
      en: 'Software/Hardware architecture, SRS documentation, and project phase defenses.'
    },
    fullDesc: {
      bn: 'ফাইনাল ইয়ার ক্যাপস্টোন প্রজেক্টে ওয়েব, মোবাইল, আইওটি বা এআই আর্কিটেকচার সেটআপ, ডাটাবেস ডিজাইন, SRS রিপোর্ট প্রস্তুত এবং ফেজ ওয়াইজ প্রজেক্ট রিভিউ।',
      en: 'End-to-end engineering guidance for software, hardware, IoT, and AI final year projects. Mentors help with system architecture, database modeling, SRS/UML documentation, and defense prep.'
    },
    deliverables: {
      bn: [
        'সিস্টেম আর্কিটেকচার ও ডাটাবেস স্কিমা ডিজাইন',
        'SRS, Use Case ও ক্লাস ডায়াগ্রাম রিভিউ',
        'টেকনোলজি স্ট্যাক সিলেকশন ও এনভায়রনমেন্ট সেটআপ',
        'ফেজ-১ ও ফেজ-২ ডিফেন্স প্রিপারেশন',
        'প্রজেক্ট রিপোর্ট ডকুমেন্টেশন টেমপ্লেট'
      ],
      en: [
        'System architecture & database schema review',
        'SRS, Use Case, and Class Diagram structure',
        'Tech stack selection & environment setup',
        'Phase-1 & Phase-2 milestone defense prep',
        'Project report documentation template'
      ]
    }
  }
];

export const BILINGUAL_FAQS = [
  {
    q: {
      bn: 'অর্ডার করার পর কত দ্রুত আপনাদের টিম যোগাযোগ করবে?',
      en: 'How quickly will your team contact me after placing an order?'
    },
    a: {
      bn: 'আমাদের সাপোর্ট হটলাইন ও WhatsApp প্রতিদিন সকাল ৮:০০ টা থেকে রাত ১১:৩০ টা পর্যন্ত সক্রিয় থাকে। সাধারণত অর্ডার করার ৫ থেকে ১৫ মিনিটের মধ্যেই আমাদের একাডেমিক কো-অর্ডিনেটর সরাসরি WhatsApp-এ যোগাযোগ করবেন।',
      en: 'Our support hotline and WhatsApp are active daily from 8:00 AM to 11:30 PM. Typically, our academic coordinator reaches out on WhatsApp within 5 to 15 minutes of receiving your order.'
    }
  },
  {
    q: {
      bn: 'অর্ডার করার জন্য কি কোনো একাউন্ট তৈরি করতে হবে?',
      en: 'Do I need to create an account to place an order?'
    },
    a: {
      bn: 'না, কোনো একাউন্ট বা রেজিস্ট্রেশনের ঝামেলা নেই! শুধু আপনার নাম, মোবাইল, WhatsApp নম্বর এবং কোর্স ডিটেইলস দিয়ে সরাসরি ২ মিনিটে অর্ডার করতে পারবেন। সাথে সাথেই আপনাকে একটি ইউনিক Order ID প্রদান করা হবে।',
      en: 'No account registration is required! You can place an order in under 2 minutes by providing your name, mobile, WhatsApp number, and course details. You will instantly receive a unique Order ID.'
    }
  },
  {
    q: {
      bn: 'আমি কীভাবে আমার অর্ডারের অগ্রগতি ট্র্যাক করব?',
      en: 'How can I track the progress of my order?'
    },
    a: {
      bn: 'ওয়েবসাইটের উপরের "Track Order" অপশনে গিয়ে আপনার Order ID অথবা মোবাইল নম্বর দিলেই দেখতে পাবেন মেন্টর নিয়োগ, কাজের অগ্রগতি এবং ডেলিভারি স্ট্যাটাস। এছাড়াও WhatsApp-এ সরাসরি লাইভ আপডেট দেওয়া হয়।',
      en: 'Click "Track Order" in the top navigation and enter your Order ID or phone number to view live progress from mentor matching to final delivery. You will also receive direct updates on WhatsApp.'
    }
  },
  {
    q: {
      bn: 'আমার অ্যাসাইনমেন্ট বা থিসিস ফাইলের গোপনীয়তা কীভাবে রক্ষা করা হয়?',
      en: 'How is the privacy and confidentiality of my academic files maintained?'
    },
    a: {
      bn: 'Edu Quest ১০০% শিক্ষার্থী গোপনীয়তা ও সুরক্ষা নিশ্চিত করে। আপনার আপলোড করা ফাইল এবং ব্যক্তিগত তথ্য কঠোরভাবে সংরক্ষিত থাকে এবং শুধুমাত্র আপনার নিযুক্ত অভিজ্ঞ মেন্টর ছাড়া অন্য কারও সাথে শেয়ার করা হয় না।',
      en: 'Edu Quest guarantees 100% student confidentiality and privacy. Your uploaded files and contact information are strictly protected and only shared with your assigned mentor for guidance.'
    }
  },
  {
    q: {
      bn: 'মেন্টরশিপ ও পেমেন্ট পদ্ধতি কীভাবে সম্পন্ন হয়?',
      en: 'How does the mentorship and payment process work?'
    },
    a: {
      bn: 'অর্ডারের পর কো-অর্ডিনেটর WhatsApp-এ আপনার সাথে বিষয়ের পরিধি ও সময় নিয়ে কথা বলে মেন্টর নিয়োগ করবেন। এরপর bKash, Nagad বা Bank Transfer-এর মাধ্যমে সহজ ও নিরাপদভাবে পেমেন্ট সম্পন্ন করতে পারবেন।',
      en: 'After placing an order, our coordinator confirms the scope on WhatsApp and assigns your mentor. Payments can then be completed securely and conveniently via bKash, Nagad, or Bank Transfer.'
    }
  },
  {
    q: {
      bn: 'Edu Quest-এর মেন্টররা কোন কোন বিশ্ববিদ্যালয়ের?',
      en: 'Which universities do Edu Quest mentors come from?'
    },
    a: {
      bn: 'আমাদের প্ল্যাটফর্মে BUET, DU, SUST, IUT, RUET, CUET, KUET, NSU, BRACU, PUB, AUST এবং UIU সহ দেশের শীর্ষ বিশ্ববিদ্যালয়ের সফল গ্র্যাজুয়েট ও গবেষক মেন্টর হিসেবে সংযুক্ত রয়েছেন।',
      en: 'Our mentors are accomplished graduates, researchers, and top-tier engineers from BUET, DU, SUST, IUT, RUET, CUET, KUET, NSU, BRACU, PUB, AUST, UIU, and other reputable institutions.'
    }
  }
];
