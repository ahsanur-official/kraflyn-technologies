import { Service, ProblemTrigger, SupportRequest, Mentor, Review, User, AcademicOrder } from '../types';

export const UNIVERSITIES: string[] = [
  'Pundra University of Science and Technology (PUB)',
  'Bangladesh University of Engineering and Technology (BUET)',
  'University of Dhaka (DU)',
  'North South University (NSU)',
  'BRAC University (BRACU)',
  'Shahjalal University of Science and Technology (SUST)',
  'Islamic University of Technology (IUT)',
  'Rajshahi University of Engineering & Technology (RUET)',
  'Chittagong University of Engineering & Technology (CUET)',
  'Khulna University of Engineering & Technology (KUET)',
  'Ahsanullah University of Science and Technology (AUST)',
  'American International University-Bangladesh (AIUB)',
  'United International University (UIU)',
  'Daffodil International University (DIU)',
  'East West University (EWU)',
  'Independent University, Bangladesh (IUB)',
  'Jahangirnagar University (JU)',
  'University of Rajshahi (RU)',
  'Other / International University'
];

export const DEPARTMENTS: string[] = [
  'Computer Science & Engineering (CSE)',
  'Software Engineering (SWE)',
  'Electrical & Electronic Engineering (EEE)',
  'Information & Communication Technology (ICT)',
  'Civil Engineering (CE)',
  'Mechanical Engineering (ME)',
  'Business Administration (BBA / MBA)',
  'Economics & Development Studies',
  'Mathematics & Statistics',
  'Physics / Applied Physics',
  'Pharmacy / Biotechnology',
  'English & Modern Languages',
  'Other Department'
];

export const SERVICES: Service[] = [
  {
    id: 'course-support',
    title: 'Course Support',
    iconName: 'BookOpen',
    shortDesc: 'Conceptual clarity, syllabus breakdown, and 1-to-1 tutoring for tough academic courses.',
    fullDesc: 'Stuck with complex algorithms, discrete math, electronics, or core theories? Get personalized 1-on-1 tutoring sessions, step-by-step topic breakdowns, past paper walkthroughs, and exam preparation strategies tailored to your university syllabus.',
    category: 'Academic Support',
    startingPrice: 300,
    typicalTurnaround: '12 - 24 Hours',
    deliverables: [
      '1-on-1 live interactive conceptual session',
      'Curated handwritten/digital notes & summaries',
      'Past semester exam question solutions',
      'Formula sheets & key concepts cheat-sheet',
      'Follow-up doubt clearing on WhatsApp/Meet'
    ],
    tag: 'Popular'
  },
  {
    id: 'programming-lab',
    title: 'Programming & Lab',
    iconName: 'Code',
    shortDesc: 'Hands-on debugging, algorithm implementation, and lab task guidance.',
    fullDesc: 'Get stuck on segmentation faults, recursive algorithms, or framework bugs? Work with experienced developers in C/C++, Java, Python, JavaScript, OOP, Data Structures, DB, and Web Development to master your lab tasks with full conceptual understanding.',
    category: 'Technical Support',
    startingPrice: 400,
    typicalTurnaround: '6 - 18 Hours',
    deliverables: [
      'Line-by-line code explanation and logic flow',
      'Live debugging assistance and error resolution',
      'Clean coding practices and indentation review',
      'Sample test cases and edge case analysis',
      'Lab viva questions prep on written code'
    ],
    tag: 'High Demand'
  },
  {
    id: 'assignment-guidance',
    title: 'Assignment Guidance',
    iconName: 'FileText',
    shortDesc: 'Structured methodology, problem solving approach, and academic citation reviews.',
    fullDesc: 'Comprehensive academic guidance on how to structure your assignments, conduct independent research, organize citations, verify mathematical derivations, and present your arguments convincingly while maintaining strict academic integrity.',
    category: 'Academic Support',
    startingPrice: 350,
    typicalTurnaround: '12 - 36 Hours',
    deliverables: [
      'Problem breakdown & step-by-step outline',
      'Reference material & bibliography curation',
      'Mathematical derivation & logic verification',
      'Draft proofreading & structural critique',
      'Plagiarism check and citation formatting (IEEE/APA)'
    ]
  },
  {
    id: 'lab-report',
    title: 'Lab Report Support',
    iconName: 'FlaskConical',
    shortDesc: 'Data plotting, error calculations, apparatus explanation, and standard formatting.',
    fullDesc: 'Transform raw lab experiment data into polished, professional laboratory reports. Mentors guide you through statistical calculations, MATLAB/Origin graphing, error tolerance analysis, and standard departmental reporting standards.',
    category: 'Technical Support',
    startingPrice: 250,
    typicalTurnaround: '8 - 24 Hours',
    deliverables: [
      'Experimental procedure and objective structuring',
      'High-resolution graphs & tabular data plotting',
      'Standard error and deviation calculations',
      'Result discussion & conclusion drafting guidance',
      'Standard LaTeX / Word formatting template'
    ]
  },
  {
    id: 'presentation-viva',
    title: 'Presentation & Viva',
    iconName: 'Mic',
    shortDesc: 'Slide deck structuring, speech rehearsals, and mock faculty viva preparation.',
    fullDesc: 'Overcome presentation anxiety and ace your defense. Get slide design feedback, elevator pitch rehearsal, expected critical faculty questioning simulations, and body language coaching for mid-term, final, or project defenses.',
    category: 'Communication',
    startingPrice: 300,
    typicalTurnaround: '12 - 24 Hours',
    deliverables: [
      'Slide deck review (Visual balance, bullet optimization)',
      '1-on-1 Mock viva with difficult counter-questions',
      'Speaking script & transition cues formulation',
      'Q&A survival tactics for strict faculties',
      'Confidence building & body language feedback'
    ],
    tag: 'Quick Turnaround'
  },
  {
    id: 'research-support',
    title: 'Research Support',
    iconName: 'Microscope',
    shortDesc: 'Topic selection, literature review matrices, dataset sourcing, and methodology design.',
    fullDesc: 'Bridge the gap between raw ideas and publication-ready academic papers. Receive mentorship on scoping novelty, systematically categorizing IEEE/ACM/Springer papers, experimental design, and statistical data validation.',
    category: 'Research',
    startingPrice: 800,
    typicalTurnaround: '24 - 48 Hours',
    deliverables: [
      'Research gap identification & problem formulation',
      'Systematic Literature Review (SLR) matrix template',
      'Dataset curation & preprocessing guidance',
      'Methodology & architecture diagram discussion',
      'Target journal/conference selection advice'
    ]
  },
  {
    id: 'thesis-mentorship',
    title: 'Thesis Mentorship',
    iconName: 'GraduationCap',
    shortDesc: 'Step-by-step guidance throughout your undergraduate or masters thesis journey.',
    fullDesc: 'End-to-end guidance from proposal defense to final book submission. Work with published researchers who assist you through literature review, algorithm implementation, benchmark comparisons, thesis formatting, and defense rehearsals.',
    category: 'Final Year',
    startingPrice: 1200,
    typicalTurnaround: 'Milestone-based',
    deliverables: [
      'Proposal & topic validation with faculty expectations',
      'Literature review structuring & citation management',
      'Methodology design and benchmark comparisons',
      'Full book chapter-by-chapter review & refinement',
      'Pre-defense mock panel and slides preparation'
    ],
    tag: 'Flagship Program'
  },
  {
    id: 'final-year-project',
    title: 'Final Year Project (FYP)',
    iconName: 'Rocket',
    shortDesc: 'Architecture design, tech stack selection, milestone tracking, and prototype guidance.',
    fullDesc: 'Turn your capstone project or engineering prototype into a standout achievement. Get guidance on system architecture (Microservices, AI pipelines, IoT, Mobile, Web), clean git workflows, documentation, and phase-wise faculty presentations.',
    category: 'Final Year',
    startingPrice: 1000,
    typicalTurnaround: 'Sprint / Milestone',
    deliverables: [
      'System Architecture & ERD / UML diagramming review',
      'Technology stack consultation & environment setup',
      'Sprint planning & milestone progress reviews',
      'Software Requirements Specification (SRS) review',
      'Final project demonstration & defense prep'
    ],
    tag: 'Comprehensive'
  }
];

export const PROBLEM_TRIGGERS: ProblemTrigger[] = [
  {
    id: 'struggling-course',
    text: "I don't understand my course",
    serviceId: 'course-support',
    icon: 'BookOpen',
    description: 'Get matched with a top peer mentor for 1-to-1 concept coaching before midterms or finals.',
    defaultExpectation: 'Need clear conceptual breakdown of difficult chapters and past paper solutions.'
  },
  {
    id: 'stuck-lab',
    text: "I have a lab task / coding error",
    serviceId: 'programming-lab',
    icon: 'Code',
    description: 'Live debugging, logic explanation, and algorithm walkthrough for your CSE/EEE labs.',
    defaultExpectation: 'Code has logic bugs/runtime errors; need step-by-step guidance on how to fix and explain in lab viva.'
  },
  {
    id: 'presentation-trouble',
    text: "I need help with presentation",
    serviceId: 'presentation-viva',
    icon: 'Presentation',
    description: 'Slide design review, rehearsal coaching, and speaking transitions to impress your teacher.',
    defaultExpectation: 'Review my PowerPoint slides and help me prepare speaking notes and answers for Q&A.'
  },
  {
    id: 'viva-tomorrow',
    text: "I have a viva tomorrow / this week",
    serviceId: 'presentation-viva',
    icon: 'Mic',
    description: 'Emergency mock viva simulation with expected questions from faculty trends.',
    defaultExpectation: 'Mock viva session to test my conceptual understanding and help me answer confidently under pressure.'
  },
  {
    id: 'thesis-start',
    text: "I don't know how to start my thesis",
    serviceId: 'thesis-mentorship',
    icon: 'GraduationCap',
    description: 'Topic narrowing, research gap identification, and proposal defense preparation.',
    defaultExpectation: 'Guidance on choosing an impactful research topic, finding papers, and drafting the thesis proposal.'
  },
  {
    id: 'project-stuck',
    text: "My final project is stuck",
    serviceId: 'final-year-project',
    icon: 'Rocket',
    description: 'Architectural troubleshooting, backend/frontend integration, or ML model guidance.',
    defaultExpectation: 'Need help resolving architecture bottlenecks, dataset integration, and preparing the SRS report.'
  },
  {
    id: 'research-paper',
    text: "Need research methodology & writing support",
    serviceId: 'research-support',
    icon: 'Microscope',
    description: 'Literature review matrix, dataset validation, experimental analysis, and paper drafting.',
    defaultExpectation: 'Need guidance structuring my methodology, data analysis, and formatting for IEEE submission.'
  },
  {
    id: 'lab-report-due',
    text: "Need lab report review & graph analysis",
    serviceId: 'lab-report',
    icon: 'FlaskConical',
    description: 'Data plotting, error margin calculations, and standard academic formatting.',
    defaultExpectation: 'Help formatting the lab data, plotting error curves, and reviewing the discussion section.'
  }
];

export const INITIAL_REQUESTS: SupportRequest[] = [
  {
    id: 'ES-20260820-00125',
    studentId: 'user-std-1',
    studentName: 'Md. Ehsanur Rahaman',
    studentEmail: 'ehsan.cse@pundra.edu.bd',
    studentPhone: '+880 1712-345678',
    studentWhatsApp: '+880 1712-345678',
    studentFacebook: 'https://facebook.com/ehsanur.rahaman',
    university: 'Pundra University of Science and Technology (PUB)',
    department: 'Computer Science & Engineering (CSE)',
    studentUniId: 'CSE-2021-042',
    batch: 'Batch 18',
    semester: '8th Semester',
    serviceId: 'thesis-mentorship',
    serviceTitle: 'Thesis Mentorship',
    courseName: 'Undergraduate Thesis & Research',
    courseCode: 'CSE-4200',
    teacherName: 'Dr. Shah Alam',
    academicLevel: '4th Year',
    problemStatement: 'Working on "Deep Learning for Bangla Handwritten Text Recognition". I have gathered raw data from CMATERdb but struggling with transformer-based sequence modeling (TrOCR) and evaluation metrics (WER/CER). Need step-by-step guidance on methodology and writing chapter 3.',
    whatDoneSoFar: 'Collected 10,000 image samples, resized and augmented. Ran a baseline CNN but accuracy is under 70%.',
    expectedOutcome: 'Understand how to adapt pre-trained vision encoder-decoder models, calculate CER/WER correctly, and outline Chapter 3 & 4.',
    deadline: '2026-08-28',
    preferredContact: 'WhatsApp',
    preferredTime: 'Evening',
    expectedBudget: '৳1,000 – ৳3,000',
    agreedPrice: 2200,
    attachments: [
      {
        id: 'att-1',
        name: 'Bangla_OCR_Proposal_Draft.pdf',
        size: '2.4 MB',
        type: 'PDF',
        uploadedAt: '2026-08-19'
      },
      {
        id: 'att-2',
        name: 'sample_dataset_metadata.csv',
        size: '410 KB',
        type: 'CSV',
        uploadedAt: '2026-08-19'
      }
    ],
    assignedMentorId: 'mentor-1',
    assignedMentorName: 'Tanvir Ahmed (BUET ML Researcher)',
    status: 'in_progress',
    paymentStatus: 'paid',
    paymentDetails: {
      id: 'pay-101',
      requestId: 'ES-20260820-00125',
      amount: 2200,
      method: 'bKash',
      transactionId: 'BK9A82D01F',
      senderNumber: '01712345678',
      status: 'verified',
      submittedAt: '2026-08-19 14:30',
      verifiedAt: '2026-08-19 14:45'
    },
    adminNotes: [
      'Assigned to Tanvir Ahmed due to Bangla NLP/Vision expertise.',
      'Initial 1-on-1 scheduled for Aug 22, 8:00 PM via Google Meet.'
    ],
    createdAt: '2026-08-19 11:20',
    updatedAt: '2026-08-19 14:45'
  },
  {
    id: 'ES-20260818-00118',
    studentId: 'user-std-1',
    studentName: 'Md. Ehsanur Rahaman',
    studentEmail: 'ehsan.cse@pundra.edu.bd',
    studentPhone: '+880 1712-345678',
    studentWhatsApp: '+880 1712-345678',
    university: 'Pundra University of Science and Technology (PUB)',
    department: 'Computer Science & Engineering (CSE)',
    academicLevel: '4th Year',
    serviceId: 'course-support',
    serviceTitle: 'Course Support',
    courseName: 'Digital Signal Processing (DSP)',
    courseCode: 'CSE-4103',
    teacherName: 'Prof. Rafiqul Islam',
    problemStatement: 'Need assistance understanding FFT algorithms, Butterworth filter design in MATLAB, and Z-transform properties for the upcoming final exam.',
    whatDoneSoFar: 'Read textbook chapters 4 and 5, but getting confused during problem solving.',
    expectedOutcome: 'Solved 10 previous semester problems and understand filter design workflow.',
    deadline: '2026-08-18',
    preferredContact: 'Google Meet',
    preferredTime: 'Night',
    expectedBudget: '৳500 – ৳1,000',
    agreedPrice: 800,
    attachments: [
      {
        id: 'att-3',
        name: 'DSP_Previous_Question_2024.pdf',
        size: '1.8 MB',
        type: 'PDF',
        uploadedAt: '2026-08-16'
      }
    ],
    assignedMentorId: 'mentor-2',
    assignedMentorName: 'Naimul Hasan (EEE Mentor)',
    status: 'completed',
    paymentStatus: 'paid',
    createdAt: '2026-08-16 10:00',
    updatedAt: '2026-08-18 22:30',
    rating: 5,
    reviewComment: 'The mentor broke down Z-transform and filter poles so simply. Scored full marks in my DSP quiz!'
  },
  {
    id: 'ES-20260820-00130',
    studentId: 'user-std-2',
    studentName: 'Samira Chowdhury',
    studentEmail: 'samira.c@northsouth.edu',
    studentPhone: '+880 1819-987654',
    studentWhatsApp: '+880 1819-987654',
    university: 'North South University (NSU)',
    department: 'Computer Science & Engineering (CSE)',
    academicLevel: '2nd Year',
    serviceId: 'programming-lab',
    serviceTitle: 'Programming & Lab',
    courseName: 'Data Structures & Algorithms',
    courseCode: 'CSE225',
    problemStatement: 'Binary Search Tree (BST) recursive deletion and AVL tree balance rotation implementation in C++. Facing segmentation faults on left-right double rotations.',
    deadline: '2026-08-22',
    preferredContact: 'WhatsApp',
    preferredTime: 'Evening',
    expectedBudget: '৳500 – ৳1,000',
    agreedPrice: 650,
    attachments: [
      {
        id: 'att-4',
        name: 'avl_tree_lab_assignment.cpp',
        size: '14 KB',
        type: 'CPP',
        uploadedAt: '2026-08-20'
      }
    ],
    status: 'payment_pending',
    paymentStatus: 'pending_verification',
    paymentDetails: {
      id: 'pay-102',
      requestId: 'ES-20260820-00130',
      amount: 650,
      method: 'Nagad',
      transactionId: 'NG771B902A',
      senderNumber: '01819987654',
      status: 'pending_verification',
      submittedAt: '2026-08-20 09:15'
    },
    createdAt: '2026-08-20 08:30',
    updatedAt: '2026-08-20 09:15'
  },
  {
    id: 'ES-20260820-00133',
    studentId: 'user-std-3',
    studentName: 'Farhan Kabir',
    studentEmail: 'farhan.k@bracu.ac.bd',
    studentPhone: '+880 1623-112233',
    studentWhatsApp: '+880 1623-112233',
    university: 'BRAC University (BRACU)',
    department: 'Electrical & Electronic Engineering (EEE)',
    academicLevel: '3rd Year',
    serviceId: 'presentation-viva',
    serviceTitle: 'Presentation & Viva',
    courseName: 'Microprocessor & Microcontrollers (8086)',
    courseCode: 'EEE305',
    problemStatement: 'Have a crucial lab viva on 8086 assembly memory segmentation and interrupt vectors next Tuesday. Need a 45-minute intense mock viva drill.',
    deadline: '2026-08-25',
    preferredContact: 'Google Meet',
    preferredTime: 'Night',
    expectedBudget: '৳200 – ৳500',
    attachments: [],
    status: 'under_review',
    paymentStatus: 'unpaid',
    createdAt: '2026-08-20 09:50',
    updatedAt: '2026-08-20 09:50'
  }
];

export const MENTORS: Mentor[] = [
  {
    id: 'mentor-1',
    userId: 'user-mentor-1',
    name: 'Engr. Tanvir Ahmed',
    email: 'tanvir.ahmed@buet.ac.bd',
    phone: '+880 1788-990011',
    whatsapp: '+880 1788-990011',
    university: 'BUET (Alumni)',
    department: 'CSE',
    qualification: 'M.Sc. in Computer Science (Ongoing, BUET), B.Sc. CSE',
    expertise: ['Machine Learning', 'Bangla NLP', 'Computer Vision', 'Python', 'PyTorch', 'Thesis Writing'],
    experience: '4+ years mentoring 120+ undergraduate thesis & project students with 5 IEEE conference publications.',
    portfolio: 'https://github.com/tanvir-ai-research',
    linkedIn: 'https://linkedin.com/in/tanvir-ai',
    availableTime: 'Evenings & Weekends (7 PM - 11 PM)',
    expectedRate: '৳600 - ৳1200 / session or milestone',
    verificationStatus: 'approved',
    rating: 4.9,
    totalCompletedSessions: 84,
    earnings: 68500,
    bio: 'Passionate about helping students demystify deep learning and successfully defend high-scoring undergraduate theses.'
  },
  {
    id: 'mentor-2',
    userId: 'user-mentor-2',
    name: 'Naimul Hasan',
    email: 'naimul.eee@du.ac.bd',
    phone: '+880 1911-223344',
    whatsapp: '+880 1911-223344',
    university: 'University of Dhaka',
    department: 'EEE',
    qualification: 'B.Sc. in EEE (DU), Silver Medalist in Engineering Olympiad',
    expertise: ['Digital Signal Processing', 'Circuit Simulation (Proteus/Multisim)', 'MATLAB', 'Microcontrollers (Arduino/ESP32)'],
    experience: '3 years coaching university students across EEE & CSE for hardware labs and mathematical theory.',
    portfolio: 'https://naimul-circuits.dev',
    availableTime: 'Afternoon & Night (3 PM - 10 PM)',
    expectedRate: '৳500 - ৳900 / session',
    verificationStatus: 'approved',
    rating: 4.8,
    totalCompletedSessions: 52,
    earnings: 39200,
    bio: 'Specialist in breaking down complex mathematical transforms into visual, intuitive engineering concepts.'
  },
  {
    id: 'mentor-3',
    userId: 'user-mentor-3',
    name: 'Anika Tabassum',
    email: 'anika.tabassum@sust.edu',
    phone: '+880 1555-443322',
    whatsapp: '+880 1555-443322',
    university: 'SUST',
    department: 'Software Engineering',
    qualification: 'Senior Software Engineer & SUST SWE Graduate',
    expertise: ['Data Structures & Algorithms', 'C++', 'Java Spring Boot', 'React', 'Git & Software Architecture'],
    experience: 'Former competitive programmer (ICPC Regionalist) and mentor for university coding labs.',
    portfolio: 'https://github.com/anika-swe',
    availableTime: 'Weekdays Night (8 PM - 11:30 PM)',
    expectedRate: '৳450 - ৳800 / session',
    verificationStatus: 'approved',
    rating: 5.0,
    totalCompletedSessions: 41,
    earnings: 31000,
    bio: 'Dedicated to helping students master core programming fundamentals without stress or blind copy-pasting.'
  },
  {
    id: 'mentor-4',
    userId: 'user-mentor-4',
    name: 'Dr. Kazi Mahfuzur',
    email: 'kazi.mahfuz@researchhub.org',
    phone: '+880 1822-334455',
    whatsapp: '+880 1822-334455',
    university: 'IUT / International PhD Scholar',
    department: 'ICT',
    qualification: 'Post-Doc Fellow, Former Assistant Professor',
    expertise: ['Systematic Literature Review', 'Research Methodology', 'LaTeX Typesetting', 'Journal Submissions', 'Plagiarism Reduction'],
    experience: '8+ years in academic publishing with 18 Scopus/SCI indexed papers.',
    availableTime: 'Flexible (Morning & Night)',
    expectedRate: '৳1000 - ৳2500 / milestone',
    verificationStatus: 'approved',
    rating: 4.95,
    totalCompletedSessions: 96,
    earnings: 114000,
    bio: 'Empowering students to write clean, ethical, and high-impact academic research papers.'
  },
  {
    id: 'mentor-5',
    userId: 'user-mentor-5',
    name: 'Sabbir Hossain',
    email: 'sabbir.iot@nsu.edu',
    phone: '+880 1733-889900',
    whatsapp: '+880 1733-889900',
    university: 'North South University',
    department: 'CSE',
    qualification: 'B.Sc. CSE (Final Year High Honors)',
    expertise: ['Embedded Systems', 'IoT Prototypes', 'Raspberry Pi', 'Firebase', 'Mobile App Dev (Flutter)'],
    experience: 'Led 14 successful capstone hardware-software integrated projects.',
    availableTime: 'Afternoon & Evening',
    expectedRate: '৳500 - ৳1000 / session',
    verificationStatus: 'pending',
    rating: 4.7,
    totalCompletedSessions: 8,
    earnings: 5600,
    bio: 'Hands-on hardware & IoT enthusiast who turns complex circuit diagrams into working prototypes.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    requestId: 'EQ-ORD-1018',
    studentName: 'Md. Ehsanur Rahaman',
    university: 'Pundra University of Science & Technology (PUB)',
    department: 'CSE',
    serviceTitle: 'Course Support',
    rating: 5,
    gradeOutcome: 'A+ (3.92 GPA)',
    comment: 'Digital Signal Processing (DSP) এর ফিল্টার ডিজাইন ও Z-transform নিয়ে খুব বিপদে ছিলাম। Edu Quest এর ভাইয়া ২ ঘণ্টার মধ্যে সম্পূর্ণ কনসেপ্ট ক্লিয়ার করে বিগত ৩ বছরের প্রশ্ন সলভ করিয়ে দেন। এক্সামে দারুণ করেছি!',
    date: 'Aug 18, 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-2',
    requestId: 'EQ-ORD-1004',
    studentName: 'Nusrat Jahan',
    university: 'BRAC University',
    department: 'CSE',
    serviceTitle: 'Thesis Mentorship',
    rating: 5,
    gradeOutcome: 'Faculty Approved Proposal',
    comment: 'I was completely stuck on how to formulate the research gap and methodology for my Deep Learning thesis. The mentor helped me organize the literature matrix and dataset pipeline step-by-step. Saved me weeks of confusion!',
    date: 'Aug 15, 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-3',
    requestId: 'EQ-ORD-0992',
    studentName: 'Arafat Hossain',
    university: 'BUET',
    department: 'EEE',
    serviceTitle: 'Presentation & Viva',
    rating: 5,
    gradeOutcome: 'Defended with Distinction (Grade A)',
    comment: 'ভাইভার আগের দিন মক সেশনে এমন কিছু ট্রিকি প্রশ্ন প্র্যাকটিস করিয়েছিলেন যা পরের দিন এক্সটার্নাল ফ্যাকাল্টি সরাসরি জিজ্ঞেস করেছিল! কনফিডেন্স অনেক বেড়ে গিয়েছিল।',
    date: 'Aug 11, 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-4',
    requestId: 'EQ-ORD-0985',
    studentName: 'Tahmidul Islam',
    university: 'North South University (NSU)',
    department: 'CSE',
    serviceTitle: 'Programming & Lab',
    rating: 5,
    gradeOutcome: 'Full 20/20 Lab Marks',
    comment: 'C++ AVL Tree double rotation এ সেগমেন্টেশন ফল্ট আসছিল। অর্ডার প্লেস করার ২০ মিনিটের মাথায় Edu Quest থেকে যোগাযোগ করে লাইভ কোড রিভিউ দিয়ে লাইন বাই লাইন ডিবাগ বুঝিয়ে দিল। অসাধারণ সার্ভিস!',
    date: 'Aug 07, 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-5',
    requestId: 'EQ-ORD-0971',
    studentName: 'Sadia Sultana Mim',
    university: 'University of Dhaka (DU)',
    department: 'Economics & Statistics',
    serviceTitle: 'Research Support',
    rating: 5,
    gradeOutcome: 'Manuscript Accepted for Review',
    comment: 'Econometrics data analysis in STATA & SPSS was giving severe heteroscedasticity errors. Edu Quest mentor corrected the regression models and explained standard error adjustments smoothly.',
    date: 'Aug 02, 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-6',
    requestId: 'EQ-ORD-0960',
    studentName: 'Rifat Al Mamun',
    university: 'Ahsanullah University (AUST)',
    department: 'Mechanical Engineering',
    serviceTitle: 'Lab Report Support',
    rating: 5,
    gradeOutcome: 'Top 5% in Class',
    comment: 'Fluid mechanics lab report calculation, MATLAB plotting and error analysis was done cleanly with standard LaTeX formatting templates. Delivery on time without any delay.',
    date: 'Jul 29, 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-7',
    requestId: 'EQ-ORD-0945',
    studentName: 'Fariha Tasnim',
    university: 'United International University (UIU)',
    department: 'Software Engineering',
    serviceTitle: 'Final Year Project (FYP)',
    rating: 5,
    gradeOutcome: 'Project Phase 1 Approved',
    comment: 'আমাদের ফাইনাল ইয়ার প্রজেক্টে React + FastAPI + PostgreSQL আর্কিটেকচার সেটআপ এবং SRS ডকুমেন্টেশন প্রিপারেশনে Edu Quest পুরো টিমকে সঠিক পথ দেখিয়েছে।',
    date: 'Jul 24, 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80'
  }
];

export const INITIAL_ORDERS: AcademicOrder[] = [
  {
    id: 'EQ-ORD-2024-8841',
    items: [
      {
        id: 'ci-1',
        serviceId: 'thesis-mentorship',
        serviceTitle: 'Thesis Mentorship',
        category: 'Final Year',
        basePrice: 1200,
        packageTier: 'VIP 1-on-1 Mentorship',
        urgencyFee: 0,
        totalPrice: 1200,
        courseName: 'Undergraduate Thesis (CSE-4200)',
        quantity: 1
      }
    ],
    totalAmount: 1200,
    customerName: 'Md. Ehsanur Rahaman',
    phone: '+880 1712-345678',
    whatsapp: '+880 1712-345678',
    email: 'ehsan.cse@pundra.edu.bd',
    university: 'Pundra University of Science and Technology (PUB)',
    department: 'Computer Science & Engineering (CSE)',
    batchOrSemester: '8th Semester / Batch 18',
    courseName: 'Undergraduate Thesis',
    courseCode: 'CSE-4200',
    requirements: 'Bangla Handwritten Text Recognition methodology refinement, transformer vision encoder-decoder pipeline guidance and chapter 3 literature matrix.',
    deadline: '2026-08-28',
    preferredContact: 'WhatsApp',
    attachments: [
      {
        id: 'att-1',
        name: 'Bangla_OCR_Draft_Proposal.pdf',
        size: '2.4 MB',
        type: 'PDF',
        uploadedAt: '2026-08-19'
      }
    ],
    status: 'in_progress',
    assignedMentorName: 'Engr. Tanvir Ahmed (BUET ML Researcher)',
    createdAt: '2026-08-19 11:20 AM',
    updatedAt: '2026-08-19 02:45 PM',
    notes: [
      'Order placed via Edu Quest website.',
      'Operations coordinator reached out on WhatsApp within 12 minutes.',
      'Specialist mentor assigned and 1-on-1 scheduled.'
    ]
  },
  {
    id: 'EQ-ORD-2024-8835',
    items: [
      {
        id: 'ci-2',
        serviceId: 'programming-lab',
        serviceTitle: 'Programming & Lab',
        category: 'Technical Support',
        basePrice: 400,
        packageTier: 'Express 24h Support',
        urgencyFee: 150,
        totalPrice: 550,
        courseName: 'Data Structures & Algorithms (CSE225)',
        quantity: 1
      }
    ],
    totalAmount: 550,
    customerName: 'Samira Chowdhury',
    phone: '+880 1819-987654',
    whatsapp: '+880 1819-987654',
    university: 'North South University (NSU)',
    department: 'CSE',
    courseName: 'Data Structures & Algorithms',
    courseCode: 'CSE225',
    requirements: 'AVL tree recursive rotations and segmentation fault resolution in C++.',
    deadline: '2026-08-22',
    preferredContact: 'WhatsApp',
    attachments: [],
    status: 'delivered_completed',
    assignedMentorName: 'Anika Tabassum (Senior SWE & SUST Graduate)',
    createdAt: '2026-08-20 08:30 AM',
    updatedAt: '2026-08-20 11:15 AM',
    notes: [
      'Debugging code delivered with visual stack explanation.',
      'Student confirmed full comprehension for lab viva.'
    ]
  }
];

export const FAQS = [
  {
    q: 'How quickly will your team contact me after booking?',
    a: 'Usually within 30 to 90 minutes during active operating hours (8:00 AM – 11:30 PM). If you have an urgent deadline or a viva tomorrow, selecting WhatsApp as your preferred contact ensures immediate triage by our support coordinator.'
  },
  {
    q: 'Do I need an account to request academic support?',
    a: 'You can submit a support request as a guest in just 2 minutes! We will automatically generate your unique Request ID (e.g. ES-20260820-00125). You can optionally create an account anytime using Google or email to track all your requests, files, and mentor chats in one place.'
  },
  {
    q: 'Can I securely upload my assignment, code, or thesis draft files?',
    a: 'Yes! We support PDF, DOCX, PPTX, ZIP, C/C++/Python/Java source files, and research datasets. All files are securely kept between you and your verified mentor with strict privacy safeguards.'
  },
  {
    q: 'How does the pricing and payment system work?',
    a: 'Our model is transparent: Request → Contact & Triage → Scope Discussion → Agreed Budget → Mentorship. Once you and the mentor agree on the scope, you can easily pay via bKash, Nagad, Bank Transfer, or Debit/Credit Cards.'
  },
  {
    q: 'Do you provide 1-to-1 live tutoring sessions?',
    a: 'Yes! We conduct interactive 1-to-1 mentoring sessions over Google Meet, Zoom, or Discord with screen sharing, digital whiteboard walkthroughs, and live code debugging.'
  },
  {
    q: 'Can you help with final-year projects, thesis book writing, and defense?',
    a: 'Absolutely. We have specialized mentors holding Masters and PhDs from top engineering universities who guide you step-by-step through proposal defense, literature review matrices, architecture, implementation, LaTeX/Word formatting, and mock defenses.'
  },
  {
    q: 'What is your academic integrity and ethics policy?',
    a: 'EduSolve is a pure mentorship and academic coaching platform. We empower you to understand your coursework, learn debugging methodologies, and build problem-solving skills yourself. Mentors explain, teach, and guide — enabling you to defend and excel with authentic knowledge.'
  }
];

export const DEMO_USERS: Record<string, User> = {
  student: {
    id: 'user-std-1',
    name: 'Md. Ehsanur Rahaman',
    email: 'ehsan.cse@pundra.edu.bd',
    phone: '+880 1712-345678',
    whatsapp: '+880 1712-345678',
    facebook: 'https://facebook.com/ehsanur.rahaman',
    university: 'Pundra University of Science and Technology (PUB)',
    department: 'Computer Science & Engineering (CSE)',
    studentId: 'CSE-2021-042',
    batch: 'Batch 18',
    semester: '8th Semester',
    role: 'student',
    createdAt: '2026-01-15'
  },
  mentor: {
    id: 'user-mentor-1',
    name: 'Engr. Tanvir Ahmed',
    email: 'tanvir.ahmed@buet.ac.bd',
    phone: '+880 1788-990011',
    whatsapp: '+880 1788-990011',
    university: 'BUET (Alumni)',
    department: 'CSE',
    role: 'mentor',
    createdAt: '2025-06-10'
  },
  admin: {
    id: 'user-admin-1',
    name: 'EduSolve Admin Team',
    email: 'admin@edusolve.ac',
    phone: '+880 1700-000000',
    whatsapp: '+880 1700-000000',
    university: 'EduSolve HQ (Dhaka)',
    department: 'Academic Operations & Quality Control',
    role: 'admin',
    createdAt: '2025-01-01'
  }
};
