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
  'Design & Architecture',
  'Other Department'
];

export interface BrandPillar {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
  badge: string;
  points?: string[];
  content: string;
}

export const KRAFLYN_PILLARS: BrandPillar[] = [
  {
    id: 'mission',
    title: 'Our Mission',
    subtitle: 'Purpose & Commitment',
    iconName: 'Target',
    color: 'from-blue-600 to-indigo-600',
    badge: 'Empowerment',
    content: 'Empowering students by providing affordable, quality and reliable digital solutions in design, development and academic support.'
  },
  {
    id: 'vision',
    title: 'Our Vision',
    subtitle: 'Future Outlook',
    iconName: 'Eye',
    color: 'from-purple-600 to-indigo-600',
    badge: 'Leadership',
    content: 'To become the most trusted digital support platform for students and educational communities in Bangladesh and beyond.'
  },
  {
    id: 'values',
    title: 'Our Values',
    subtitle: 'Core Principles',
    iconName: 'Diamond',
    color: 'from-teal-600 to-emerald-600',
    badge: 'Excellence',
    content: 'Guided by high ethical standards, precision craftsmanship and customer satisfaction.',
    points: [
      'Quality First',
      'Student Focused',
      'Integrity & Transparency',
      'Creativity & Innovation',
      'On-time Delivery'
    ]
  },
  {
    id: 'why-kraflyn',
    title: 'Why Kraflyn Technologies?',
    subtitle: 'Our Differentiator',
    iconName: 'Heart',
    color: 'from-rose-500 to-pink-600',
    badge: 'Impact',
    content: "We don't just complete tasks, we empower students to learn, build, and grow in their academic and professional journey."
  }
];

export const NEXORA_PILLARS = KRAFLYN_PILLARS;

// All 45 Comprehensive Services grouped strictly by the 3 Core Pillars from the official Kraflyn Technologies catalog
export const SERVICES: Service[] = [
  // ==========================================
  // 1. DESIGN SERVICES (15 Services)
  // ==========================================
  {
    id: 'poster-banner-flyer',
    title: 'Poster / Banner / Flyer',
    iconName: 'Layout',
    shortDesc: 'Eye-catching posters, fest banners, promotional flyers and roll-ups designed for print and web.',
    fullDesc: 'Custom visual designs for department festivals, university events, hackathons, seminars, and promotional campaigns. We deliver print-ready high-resolution vector files (CMYK/RGB, 300 DPI) with source files included.',
    category: 'Design Services',
    startingPrice: 300,
    typicalTurnaround: '6 - 18 Hours',
    deliverables: [
      'High-resolution Print Ready PDF & PNG (300 DPI)',
      'Social Media optimized aspect ratios (1:1, 4:5, 16:9)',
      'Editable Source Files (PSD / AI / Canva / Figma)',
      'Unlimited revisions until final satisfaction',
      'Fast turnaround within 6 to 18 hours'
    ],
    tag: 'Popular'
  },
  {
    id: 'presentation-ppt-design',
    title: 'Presentation & PPT Design',
    iconName: 'Presentation',
    shortDesc: 'Modern, high-impact slide decks, defense presentations, and interactive keynote templates.',
    fullDesc: 'Transform dull bullet points into persuasive, beautifully animated presentations for thesis defense, capstone projects, business pitches, and class seminars with custom vector infographics and balanced layout hierarchy.',
    category: 'Design Services',
    startingPrice: 350,
    typicalTurnaround: '12 - 24 Hours',
    deliverables: [
      'Custom styled PPTX / Keynote / Google Slides deck',
      'Clean typography, color harmony & visual data charts',
      'Dynamic transition animations & slide master templates',
      'Presenter speaking notes formatting & PDF handouts',
      'Full commercial fonts and vector icon pack'
    ],
    tag: 'High Demand'
  },
  {
    id: 'social-media-creatives',
    title: 'Social Media Creatives',
    iconName: 'Share2',
    shortDesc: 'Engaging post graphics, story covers, carousels, and club event social media branding.',
    fullDesc: 'Stop the scroll with high-converting social media creatives for Facebook, Instagram, LinkedIn, and club pages. Designed with modern aesthetics, clean typography, and optimized formats for maximum engagement.',
    category: 'Design Services',
    startingPrice: 250,
    typicalTurnaround: '6 - 12 Hours',
    deliverables: [
      'Square posts, portrait carousels & 9:16 vertical stories',
      'Custom club branding & campaign hashtag highlights',
      'Source files in Figma / Photoshop / Illustrator',
      'Exported in lightweight web-optimized PNG & JPG',
      'Content copywriting guidance & aesthetic presets'
    ]
  },
  {
    id: 'logo-brand-identity',
    title: 'Logo & Brand Identity',
    iconName: 'Sparkles',
    shortDesc: 'Unique vector logos, brand color palettes, typography guidelines, and complete brand identity.',
    fullDesc: 'Establish a memorable identity for your startup, university club, personal brand, or project. Includes multiple logo concepts, monochrome variants, typography guidelines, color palettes, and full brand book documentation.',
    category: 'Design Services',
    startingPrice: 600,
    typicalTurnaround: '24 - 48 Hours',
    deliverables: [
      '3-5 distinct creative logo design concepts',
      'Vector master files (SVG, EPS, AI, PDF, Transparent PNG)',
      'Comprehensive Brand Identity Guidelines (Colors & Fonts)',
      'Social media profile avatars & banner kits',
      'Full intellectual property ownership & copyright transfer'
    ],
    tag: 'Creative Choice'
  },
  {
    id: 'cv-resume-design',
    title: 'CV / Resume Design',
    iconName: 'FileText',
    shortDesc: 'Modern, professional, ATS-friendly resumes and LaTeX / Word executive CV templates.',
    fullDesc: 'Stand out in job applications, internships, and scholarship screenings. We craft clean, ATS-compliant resumes with optimal typographic hierarchy, skill matrices, and impactful achievement formatting.',
    category: 'Design Services',
    startingPrice: 250,
    typicalTurnaround: '6 - 12 Hours',
    deliverables: [
      'ATS-friendly single & two-page modern resume templates',
      'Editable Word (.docx), LaTeX source, and print-ready PDF',
      'Matching cover letter template styling',
      'Keyword optimization for tech, engineering & business roles',
      'Free minor contact/experience updates within 30 days'
    ],
    tag: 'Must Have'
  },
  {
    id: 'certificate-id-card-design',
    title: 'Certificate & ID Card Design',
    iconName: 'Award',
    shortDesc: 'Official event participation certificates, merit awards, and customized student ID card layouts.',
    fullDesc: 'Professional certificates for hackathons, club fests, webinars, and workshop completions. Complete with dynamic placeholder fields, custom guilloche security patterns, and matching badge/ID card designs.',
    category: 'Design Services',
    startingPrice: 200,
    typicalTurnaround: '6 - 18 Hours',
    deliverables: [
      'Print-ready high-DPI certificate layouts (A4 & US Letter)',
      'Custom lanyard badge & plastic ID card templates (CR80)',
      'Bulk automated name/ID mail-merge compatible setup',
      'Vector seals, ribbon badges, and guilloche security patterns',
      'Editable AI / PSD / Canva source templates'
    ]
  },
  {
    id: 'research-poster',
    title: 'Research Poster',
    iconName: 'Columns',
    shortDesc: 'IEEE/conference scientific presentation posters with data visualizations and clean structure.',
    fullDesc: 'Display your research paper findings with academic rigor and visual clarity. Designed specifically for academic conferences, thesis defense showcases, and symposium poster sessions (A0, A1, 36x48 inches).',
    category: 'Design Services',
    startingPrice: 500,
    typicalTurnaround: '12 - 24 Hours',
    deliverables: [
      'Standard conference poster dimensions (A0, A1, 36x48 inch)',
      'High-res vector diagram integration & chart formatting',
      'Mathematical formulas & LaTeX equation placement',
      'Print-ready 300 DPI PDF + editable PowerPoint/Illustrator file',
      'Color scheme optimized for distance reading'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    iconName: 'Layers',
    shortDesc: 'Interactive web & mobile app prototypes, wireframes, user journeys, and Figma design systems.',
    fullDesc: 'Bring your digital product or final year software project to life. We design intuitive, pixel-perfect user interfaces, interactive Figma clickable prototypes, design systems, and responsive web/mobile components.',
    category: 'Design Services',
    startingPrice: 1200,
    typicalTurnaround: '24 - 72 Hours',
    deliverables: [
      'Interactive Figma prototypes with clickable user flows',
      'Responsive desktop, tablet & mobile screen layouts',
      'Component library, auto-layout, design tokens & typography',
      'Developer handoff specs with CSS parameters & assets',
      'User journey maps and wireframe documentation'
    ],
    tag: 'Premium'
  },
  {
    id: 'infographic-design',
    title: 'Infographic Design',
    iconName: 'BarChart2',
    shortDesc: 'Data-driven visual storytelling, process roadmaps, and educational concept breakdown charts.',
    fullDesc: 'Turn intricate statistics, timelines, survey findings, and system workflows into beautiful, easy-to-digest infographics for academic papers, presentations, or business reports.',
    category: 'Design Services',
    startingPrice: 400,
    typicalTurnaround: '12 - 24 Hours',
    deliverables: [
      'Custom vector illustrations, icons, and chart graphics',
      'Logical hierarchy and visual storytelling flow',
      'Web-optimized and ultra-high-resolution print formats',
      'Source files in Adobe Illustrator or Figma',
      'Color palettes aligned with your research or brand theme'
    ]
  },
  {
    id: 'brochure-pamphlet-design',
    title: 'Brochure / Pamphlet Design',
    iconName: 'BookOpen',
    shortDesc: 'Bi-fold & tri-fold brochures, corporate profile booklets, and department fest event catalogs.',
    fullDesc: 'Multi-page event schedules, department magazines, club admission guides, and corporate brochures formatted with precise folding margins, bleed areas, and elegant typography.',
    category: 'Design Services',
    startingPrice: 450,
    typicalTurnaround: '12 - 36 Hours',
    deliverables: [
      'Bi-fold, tri-fold, or multi-page booklet layouts',
      'Exact print bleeds, margins, and crop marks for press',
      'Curated stock imagery and vector graphic assets',
      'Interactive clickable PDF version for digital distribution',
      'Editable Adobe InDesign / Illustrator / Canva source'
    ]
  },
  {
    id: 'menu-price-list-design',
    title: 'Menu / Price List Design',
    iconName: 'ListOrdered',
    shortDesc: 'Clear, modern service rate sheets, digital cafeteria menus, and price catalog layouts.',
    fullDesc: 'Clean, appetizing, and organized price lists and menu boards for campus cafes, student business ventures, and freelance service pricing sheets.',
    category: 'Design Services',
    startingPrice: 350,
    typicalTurnaround: '8 - 24 Hours',
    deliverables: [
      'Single-sheet, multi-page, or digital screen menu formats',
      'Easy-to-read pricing columns and item categorization',
      'Print-ready high-resolution files + digital TV display format',
      'QR code integration for contactless digital viewing',
      'Easily editable source template for future price updates'
    ]
  },
  {
    id: 'tshirt-merchandise-design',
    title: 'T-shirt & Merchandise Design',
    iconName: 'Tag',
    shortDesc: 'Custom club jerseys, batch hoodies, conference tote bags, mugs, and merchandise vector artwork.',
    fullDesc: 'Custom vector artwork tailored specifically for screen printing, DTF, embroidery, and sublimation on batch t-shirts, graduation hoodies, varsity jackets, and club merchandise.',
    category: 'Design Services',
    startingPrice: 400,
    typicalTurnaround: '12 - 24 Hours',
    deliverables: [
      'Vector art with exact Pantone/CMYK screen print separations',
      'Realistic 3D apparel mockups for batch previews',
      'Front, back, and sleeve detailed print artwork',
      'Scalable AI / EPS / SVG / Transparent PNG (300 DPI)',
      'Commercial print release and production guide'
    ]
  },
  {
    id: 'photo-editing-retouching',
    title: 'Photo Editing & Retouching',
    iconName: 'Image',
    shortDesc: 'Professional portrait retouching, background removal, event color grading, and restoration.',
    fullDesc: 'High-end photo editing for graduation portraits, passport/visa photos, club event albums, product photography, and campus event coverage.',
    category: 'Design Services',
    startingPrice: 200,
    typicalTurnaround: '4 - 12 Hours',
    deliverables: [
      'Natural skin tone retouching & blemish removal',
      'Background cleanup, studio backdrop replacement & isolation',
      'Color grading, contrast balancing, and lighting enhancement',
      'High-res master output without compression loss',
      'Batch processing available for campus event albums'
    ]
  },
  {
    id: 'thesis-project-report-design',
    title: 'Thesis / Project Report Design',
    iconName: 'Book',
    shortDesc: 'Complete academic book layout, cover page styling, LaTeX template design, and diagram polish.',
    fullDesc: 'Ensure your undergraduate or graduate thesis meets strict university formatting guidelines with elegant cover pages, preliminary pages, table of contents, list of figures, and vector architecture diagram styling.',
    category: 'Design Services',
    startingPrice: 500,
    typicalTurnaround: '12 - 36 Hours',
    deliverables: [
      'University-compliant cover page & spine layout design',
      'LaTeX / Word automated table of contents & header/footer setup',
      'High-resolution diagram redrawing & chart polishing',
      'Strict margin adherence for hardcover binding',
      'Digital interactive PDF with bookmarks + print ready copy'
    ],
    tag: 'Academic Focus'
  },
  {
    id: 'illustration-custom-design',
    title: 'Illustration & Custom Design',
    iconName: 'Palette',
    shortDesc: 'Custom vector illustrations, mascots, creative digital artwork, and icon set development.',
    fullDesc: 'Handcrafted vector artwork, character illustrations, university fest mascots, custom icon systems, and bespoke graphics tailored to your exact creative vision.',
    category: 'Design Services',
    startingPrice: 600,
    typicalTurnaround: '24 - 48 Hours',
    deliverables: [
      'Unique custom vector illustration in your chosen aesthetic',
      'Layered source files (AI, SVG, PSD, High-Res PNG)',
      'Transparent background versions for web/app integration',
      'Color palette variations for light and dark modes',
      'Full commercial usage rights'
    ]
  },
  {
    id: 'figma-design',
    title: 'Figma UI/UX & Prototype Design',
    iconName: 'Figma',
    shortDesc: 'Professional Figma wireframes, responsive mobile & web interfaces, design tokens, and interactive clickable prototypes.',
    fullDesc: 'Bring your digital product, startup idea, or academic capstone project to life with pixel-perfect Figma UI/UX designs. Includes user research, user flows, low-to-high fidelity wireframes, auto-layout responsive components, scalable design systems (design tokens, colors, typography hierarchy), interactive clickable prototypes, and seamless developer handoff specs.',
    category: 'Design Services',
    startingPrice: 1200,
    typicalTurnaround: '24 - 72 Hours',
    deliverables: [
      'Complete Editable Figma Source File (.fig) with Auto-Layout',
      'Interactive Clickable Prototype Link for Live User Testing & Defense',
      'Modern Responsive Screens (Desktop, Tablet & Mobile Views)',
      'Design System with Reusable Component Library & Typography Tokens',
      'Production Developer Handoff with SVG/PNG Asset Exports',
      'Unlimited revisions until final satisfaction'
    ],
    subServices: [
      {
        id: 'figma-mobile-app',
        title: 'Mobile App UI/UX Design (iOS & Android)',
        price: 1500,
        turnaround: '24 - 48 Hours',
        recommendedFor: 'Startup MVPs, Capstone Projects & Student App Submissions',
        deliverables: [
          '5-10 High-Fidelity Mobile App Screens (Light/Dark Mode)',
          'Interactive Clickable Prototype with transitions & gestures',
          'Auto-Layout 5.0 components & SVG vector icons pack',
          'Full .fig source file + export-ready slices for Flutter/React Native'
        ]
      },
      {
        id: 'figma-web-dashboard',
        title: 'Web App & Admin Dashboard UI/UX',
        price: 2000,
        turnaround: '48 - 72 Hours',
        recommendedFor: 'SaaS Platforms, University Portals & Management Systems',
        deliverables: [
          'Responsive Desktop, Tablet & Mobile Breakpoints',
          'Complex Data Tables, Charts, Analytics & Filter Modals',
          'Reusable Component Variants, Forms & Interactive States',
          'Pixel-perfect developer handoff specifications'
        ]
      },
      {
        id: 'figma-landing-page',
        title: 'High-Converting Landing Page Design',
        price: 1200,
        turnaround: '24 - 36 Hours',
        recommendedFor: 'Product Launches, Club Events & Tech Startups',
        deliverables: [
          'Custom Hero Section, Feature Grids, Pricing & FAQ modules',
          'Modern Glassmorphism / Clean Minimalist styling',
          'Desktop + Mobile Adaptive Layouts',
          'Interactive Figma prototype with hover & scroll animations'
        ]
      },
      {
        id: 'figma-design-system',
        title: 'Design System & Component Library Creation',
        price: 1800,
        turnaround: '48 Hours',
        recommendedFor: 'Scaling Engineering Teams & Production Codebases',
        deliverables: [
          'Color Tokens, Semantic Hierarchy & WCAG AA Contrast Ratios',
          'Typography System (H1-H6, Body, Caption, Display)',
          'Atomic Components (Buttons, Inputs, Modals, Cards, Badges)',
          'Auto-Layout & Variants Guidelines Documentation'
        ]
      }
    ],
    tag: 'Trending'
  },

  // ==========================================
  // 2. DEVELOPMENT SERVICES (15 Services)
  // ==========================================
  {
    id: 'personal-portfolio-website',
    title: 'Personal / Portfolio Website',
    iconName: 'Globe',
    shortDesc: 'Modern, high-performance personal portfolio showcasing your projects, resume, and skills.',
    fullDesc: 'Build an impressive personal brand with an ultra-fast, responsive portfolio website built with modern frameworks (React, Next.js, Tailwind CSS). Includes dynamic project showcases, downloadable resume, contact forms, and GitHub integration.',
    category: 'Development Services',
    startingPrice: 1500,
    typicalTurnaround: '24 - 48 Hours',
    deliverables: [
      'Fully responsive, lightning-fast modern web portfolio',
      'Interactive project gallery with live demo and source links',
      'Direct contact form integrated with email / WhatsApp',
      'Free domain connecting & deployment to Vercel / GitHub Pages',
      'Clean TypeScript / Tailwind source code repository'
    ],
    tag: 'Best Seller'
  },
  {
    id: 'university-club-website',
    title: 'University / Club Website',
    iconName: 'Users',
    shortDesc: 'Complete portal for student organizations, fest registrations, executive member profiles, and blogs.',
    fullDesc: 'All-in-one portal for university clubs, IEEE student branches, and departmental forums. Features member directories, event registration forms with payment verification, photo galleries, and announcement blogs.',
    category: 'Development Services',
    startingPrice: 2500,
    typicalTurnaround: '48 - 96 Hours',
    deliverables: [
      'Dynamic event registration & ticket generation system',
      'Executive committee & alumni directory with filterable roles',
      'Club news, blog, and past achievements gallery',
      'Admin dashboard to manage applicants and export Excel sheets',
      'Mobile-first responsive design with fast loading speeds'
    ],
    tag: 'Recommended'
  },
  {
    id: 'business-ecommerce-website',
    title: 'Business / E-commerce Website',
    iconName: 'ShoppingBag',
    shortDesc: 'Full-featured online store with product catalog, cart, checkout, and local payment integration.',
    fullDesc: 'Launch your online store or business website with complete product management, cart, checkout, automated invoice generation, customer accounts, and seamless bKash/Nagad/SSLCommerz payment gateways.',
    category: 'Development Services',
    startingPrice: 4500,
    typicalTurnaround: '3 - 7 Days',
    deliverables: [
      'Complete product catalog with filters, search, and variants',
      'Shopping cart, secure checkout, and automated PDF invoicing',
      'Integrated payment gateways (bKash, Nagad, Rocket, Cards)',
      'Powerful admin panel for stock, order status, and customer logs',
      'SEO optimization & Google Analytics tracking integration'
    ],
    tag: 'Enterprise'
  },
  {
    id: 'web-application',
    title: 'Web Application',
    iconName: 'Code',
    shortDesc: 'Full-stack SaaS platforms, custom portals, management systems, and interactive dashboards.',
    fullDesc: 'Custom web application development using modern tech stacks (React, Node.js, Next.js, Express, PostgreSQL, MongoDB). Engineered for scalability, security, fast execution, and delightful user experiences.',
    category: 'Development Services',
    startingPrice: 3500,
    typicalTurnaround: '3 - 7 Days',
    deliverables: [
      'Fullstack modern architecture with React/Next.js & Node.js',
      'Role-based access control (RBAC), authentication & session security',
      'Robust relational or NoSQL database integration',
      'Comprehensive REST/GraphQL API layer with automated validation',
      'Complete documentation and Git repository handover'
    ],
    tag: 'Custom Built'
  },
  {
    id: 'mobile-application',
    title: 'Mobile Application (Android/iOS)',
    iconName: 'Smartphone',
    shortDesc: 'Cross-platform mobile apps with Flutter or React Native delivering smooth native performance.',
    fullDesc: 'Build powerful Android and iOS mobile applications for your startup, university capstone project, or client. Features smooth 60 FPS animations, push notifications, offline storage, camera/GPS integrations, and backend sync.',
    category: 'Development Services',
    startingPrice: 5000,
    typicalTurnaround: '5 - 10 Days',
    deliverables: [
      'Cross-platform Flutter / React Native codebase',
      'Ready-to-publish Android APK / AAB and iOS build bundle',
      'Firebase push notifications, cloud storage & auth setup',
      'Offline caching & responsive UI for all screen sizes',
      'Google Play Store / Apple App Store submission assistance'
    ],
    tag: 'Cross-Platform'
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    iconName: 'Server',
    shortDesc: 'Scalable server architecture, RESTful/GraphQL APIs, microservices, and secure auth systems.',
    fullDesc: 'Solid, secure, and well-structured server-side backends built with Node.js, Express, Python (FastAPI/Django), or Go. Handles heavy traffic, async job queues, rate limiting, and structured logging.',
    category: 'Development Services',
    startingPrice: 2000,
    typicalTurnaround: '24 - 72 Hours',
    deliverables: [
      'Clean modular MVC / Clean Architecture code structure',
      'JWT/OAuth2 secure authentication and token refresh rotation',
      'Swagger / Postman interactive API documentation collection',
      'Input sanitization, CORS protection & rate limiting',
      'Deployment on cloud VPS / Docker containerization'
    ]
  },
  {
    id: 'database-development',
    title: 'Database Development',
    iconName: 'Database',
    shortDesc: 'Relational & NoSQL database schema design, indexing, complex query optimization, and migrations.',
    fullDesc: 'Design resilient database architectures in PostgreSQL, MySQL, MongoDB, Redis, or Firestore. We normalize schemas, write complex aggregation pipelines, establish indexing strategies, and optimize slow queries.',
    category: 'Development Services',
    startingPrice: 1200,
    typicalTurnaround: '12 - 36 Hours',
    deliverables: [
      'Normalized ERD diagrams & database schema definitions',
      'Optimized SQL queries, stored procedures & views',
      'Index strategy to eliminate query bottlenecks',
      'Automated migration scripts (Drizzle, Prisma, TypeORM)',
      'Backup strategies and data seeding routines'
    ]
  },
  {
    id: 'api-development-integration',
    title: 'API Development & Integration',
    iconName: 'Network',
    shortDesc: 'Custom REST/GraphQL APIs and seamless integration with third-party webhooks and services.',
    fullDesc: 'Connect your applications with external APIs including SMS gateways, Google Maps, Firebase, OpenAI/Gemini AI models, weather APIs, social auth, and webhook event handlers.',
    category: 'Development Services',
    startingPrice: 1000,
    typicalTurnaround: '12 - 24 Hours',
    deliverables: [
      'Secure third-party API connectivity with fallback retries',
      'Webhook listener implementation with signature verification',
      'Clean error handling & formatted response payloads',
      'Postman collection for immediate team testing',
      'Environment variable configuration & secret protection'
    ]
  },
  {
    id: 'bug-fixing-maintenance',
    title: 'Bug Fixing & Maintenance',
    iconName: 'Wrench',
    shortDesc: 'Fast debugging, runtime error fixing, dependency upgrades, and code refactoring.',
    fullDesc: 'Encountering cryptic build errors, console crashes, broken styles, or dependency conflicts? Our senior developers quickly trace stack traces, resolve logic flaws, and optimize code reliability.',
    category: 'Development Services',
    startingPrice: 500,
    typicalTurnaround: '4 - 12 Hours',
    deliverables: [
      'Root cause diagnosis with clear explanation',
      'Clean code fix with zero regression side-effects',
      'Security patch verification and dependency upgrades',
      'Performance audit and console error cleanup',
      'Follow-up testing to ensure permanent resolution'
    ],
    tag: 'Quick Fix'
  },
  {
    id: 'domain-hosting-setup',
    title: 'Domain & Hosting Setup',
    iconName: 'Cloud',
    shortDesc: 'DNS configuration, SSL certificate installation, cPanel/VPS deployment, and custom domain email.',
    fullDesc: 'Get your website live without hassle. We handle nameserver pointing, DNS records (A, CNAME, MX, TXT for SPF/DKIM), free auto-renewing SSL certificates, and cloud deployment on Vercel, Netlify, or VPS.',
    category: 'Development Services',
    startingPrice: 400,
    typicalTurnaround: '2 - 6 Hours',
    deliverables: [
      'Domain DNS mapping (Nameservers, A Records, CNAMEs)',
      'Free Let\'s Encrypt SSL/TLS Certificate setup (HTTPS)',
      'Professional business email configuration (e.g. info@yourdomain)',
      'Web server hosting configuration (Nginx, Apache, Node.js)',
      'Automated deployment pipeline setup from GitHub'
    ]
  },
  {
    id: 'payment-gateway-integration',
    title: 'Payment Gateway Integration',
    iconName: 'CreditCard',
    shortDesc: 'Integration of local (bKash, Nagad, Rocket, SSLCommerz) and international (Stripe) gateways.',
    fullDesc: 'Accept online payments seamlessly. We integrate official merchant APIs for bKash Tokenized/Checkout API, Nagad PGW, SSLCommerz, ShurjoPay, AamarPay, and international Stripe/PayPal with instant callback verification.',
    category: 'Development Services',
    startingPrice: 1200,
    typicalTurnaround: '12 - 24 Hours',
    deliverables: [
      'Official Merchant API integration with secure backend verification',
      'Instant payment IPN / Webhook callback transaction recording',
      'Automated order confirmation and SMS/Email receipts',
      'Sandbox testing mode + seamless production switchover',
      'Refund and failed transaction handling logic'
    ],
    tag: 'Essential'
  },
  {
    id: 'admin-dashboard-development',
    title: 'Admin Dashboard Development',
    iconName: 'LayoutDashboard',
    shortDesc: 'Feature-packed administration panels with analytics charts, data tables, and user management.',
    fullDesc: 'Manage your operations with a custom admin control center. Includes interactive analytics charts, searchable/sortable paginated tables, CSV export, role permissions, and audit logs.',
    category: 'Development Services',
    startingPrice: 2500,
    typicalTurnaround: '2 - 4 Days',
    deliverables: [
      'Dynamic data visualizer charts (Recharts / Chart.js)',
      'Advanced data tables with search, filter, sort & pagination',
      'Export data to Excel / CSV / PDF with one click',
      'Multi-role permission controls (Admin, Manager, Viewer)',
      'Dark mode / Light mode responsive user interface'
    ]
  },
  {
    id: 'custom-feature-development',
    title: 'Custom Feature Development',
    iconName: 'Cpu',
    shortDesc: 'Custom algorithmic modules, automated scripts, web scraping, and bespoke business tools.',
    fullDesc: 'Need a specific feature that standard templates don\'t offer? We build custom calculators, automated background schedulers, web scrapers (Puppeteer/BeautifulSoup), PDF report generators, and AI integrations.',
    category: 'Development Services',
    startingPrice: 1000,
    typicalTurnaround: '12 - 48 Hours',
    deliverables: [
      'Bespoke feature coded to your exact functional specification',
      'Modular, reusable, and thoroughly documented code',
      'Integration into your existing application codebase',
      'Unit testing and edge-case validation',
      'Deployment walkthrough and live demonstration'
    ]
  },
  {
    id: 'website-speed-optimization',
    title: 'Website Speed Optimization',
    iconName: 'Zap',
    shortDesc: 'Core Web Vitals enhancement, image compression, caching, asset bundling, and 90+ Google Score.',
    fullDesc: 'Speed up your sluggish website. We optimize Core Web Vitals (LCP, FID, CLS), compress media assets to WebP/AVIF, implement lazy loading, minify JavaScript/CSS, and configure server caching.',
    category: 'Development Services',
    startingPrice: 600,
    typicalTurnaround: '6 - 18 Hours',
    deliverables: [
      'Comprehensive Google PageSpeed Insights & GTmetrix audit',
      'Asset compression, code splitting & script deferral',
      'Database query optimization & object caching setup',
      'CDN integration (Cloudflare) for global low latency',
      'Before-and-after performance metrics report'
    ]
  },
  {
    id: 'website-security-backup',
    title: 'Website Security & Backup',
    iconName: 'ShieldCheck',
    shortDesc: 'Malware removal, SQLi/XSS vulnerability patching, automated cloud backups, and firewall setup.',
    fullDesc: 'Protect your valuable digital assets. We audit code vulnerabilities, enforce HTTPS, configure Cloudflare DDoS mitigation, sanitize inputs against SQL injection & XSS, and setup automated cloud backups.',
    category: 'Development Services',
    startingPrice: 800,
    typicalTurnaround: '12 - 24 Hours',
    deliverables: [
      'Complete security vulnerability scan & malware cleanup',
      'Firewall, brute-force protection & rate-limit configuration',
      'Automated daily/weekly encrypted cloud backup routines',
      'Security headers (CSP, HSTS, X-Frame-Options) configuration',
      'Disaster recovery documentation and 1-click restore plan'
    ]
  },
  {
    id: 'wordpress-development',
    title: 'WordPress Website & Customization',
    iconName: 'Wordpress',
    shortDesc: 'Custom WordPress development, Elementor/Gutenberg page building, WooCommerce online store setup, and speed optimization.',
    fullDesc: 'End-to-end WordPress web development and customization for businesses, blogs, club portals, portfolio sites, and full-scale WooCommerce stores. Built with modern Elementor Pro or Gutenberg block editors, mobile-first responsiveness, custom post types, local payment gateways (bKash/Nagad/Cards), Yoast/RankMath SEO configuration, 90+ PageSpeed optimization, and enterprise security firewall protection.',
    category: 'WordPress Services',
    startingPrice: 2000,
    typicalTurnaround: '2 - 5 Days',
    deliverables: [
      'Complete Custom WordPress Website with Premium Responsive Layout',
      'WooCommerce Store Setup with Product Variations, Cart & Checkout',
      'Local & Global Payment Gateway Integration (bKash, Nagad, SSLCommerz, Stripe)',
      '90+ Google Core Web Vitals Speed Optimization & Caching Setup',
      'On-Page SEO Configuration (RankMath/Yoast) & Security Firewall',
      'Easy-to-manage Drag & Drop Admin Dashboard + Video Tutorial Guide'
    ],
    subServices: [
      {
        id: 'wp-business-corporate',
        title: 'Business, Club & Corporate Website',
        price: 2000,
        turnaround: '2 - 3 Days',
        recommendedFor: 'Startups, Agencies, University Clubs & Department Portals',
        deliverables: [
          '5-8 Custom Designed Pages with Elementor Pro / Block Theme',
          'Contact & Inquiry Forms with WhatsApp and Email Notifications',
          'Social Media Feeds, Photo Gallery & Event Management',
          'SSL Setup, Mobile Optimization & Basic SEO'
        ]
      },
      {
        id: 'wp-woocommerce-store',
        title: 'Full WooCommerce Online Store Setup',
        price: 3500,
        turnaround: '3 - 5 Days',
        recommendedFor: 'Clothing Brands, Electronics, Bookstores & Multi-Product Vendors',
        deliverables: [
          'Product Inventory, Variations (Size/Color) & Stock Management',
          'bKash, Nagad, Rocket & Credit Card Gateway Integration',
          'Automated Invoicing, Coupon System & Delivery Zone Rates',
          'Customer Order Tracking & Email Notification Flow'
        ]
      },
      {
        id: 'wp-speed-security-cleanup',
        title: 'Speed Optimization & Malware Cleanup',
        price: 1000,
        turnaround: '12 - 24 Hours',
        recommendedFor: 'Slow Loading Sites & Hacked / Compromised Installations',
        deliverables: [
          '90+ Google PageSpeed / GTmetrix Performance Optimization',
          'Redis/Memcached, WebP Image Compression & CDN Setup',
          'Malware, Backdoor & Blacklist Removal + Clean Backup',
          'Cloudflare WAF & Login Brute Force Hardening'
        ]
      },
      {
        id: 'wp-custom-theme-plugin',
        title: 'Custom Plugin, ACF & Bug Fixing',
        price: 1500,
        turnaround: '24 - 48 Hours',
        recommendedFor: 'Custom Features, PHP Errors & Database Migration',
        deliverables: [
          'Advanced Custom Fields (ACF Pro) & Custom Post Types (CPT)',
          'PHP/JavaScript Conflicts & Critical Error Debugging',
          'Seamless Server-to-Server / Domain Migration (Zero Downtime)',
          'REST API Endpoints & Third-party Webhook Integration'
        ]
      }
    ],
    tag: 'Popular'
  },
  {
    id: 'wordpress-woocommerce',
    title: 'WooCommerce Store & Payment Gateway',
    iconName: 'ShoppingBag',
    shortDesc: 'Complete WooCommerce store setup, automated bKash/Nagad/Cards checkout, inventory & PDF invoices.',
    fullDesc: 'High-converting end-to-end WooCommerce e-commerce development. Product variations, local payment gateways (bKash/Nagad/Cards/SSLCommerz), dynamic shipping calculation, automated PDF invoice generation, coupon system, and WhatsApp order alerts.',
    category: 'WordPress Services',
    startingPrice: 3500,
    typicalTurnaround: '3 - 6 Days',
    deliverables: [
      'Fully Responsive WooCommerce Shop & Conversion-Optimized Checkout',
      'Automated bKash, Nagad, Rocket & Cards Payment Gateway Integration',
      'Product Variations (Color/Size), Custom Filters & Category Taxonomy',
      'Automated PDF Invoicing & Real-Time Customer Order Tracking',
      'Instant Admin WhatsApp & Email Order Notification Flow',
      'Comprehensive Store Inventory & Product Management Video Tutorial'
    ],
    subServices: [
      {
        id: 'wp-woo-starter',
        title: 'Starter Online Boutique / Store',
        price: 2500,
        turnaround: '2 - 3 Days',
        recommendedFor: 'F-Commerce brands, single-product dropshippers & boutiques',
        deliverables: [
          '10-20 Product Catalog Listings with Categories',
          'bKash & Nagad Payment Integration',
          'City/Suburban Delivery Rate Calculations',
          'WhatsApp Chat & Order Notifications'
        ]
      },
      {
        id: 'wp-woo-full-enterprise',
        title: 'Full-Scale Multi-Variation E-Commerce',
        price: 4500,
        turnaround: '4 - 6 Days',
        recommendedFor: 'Apparel brands, tech gear stores & retail merchants',
        deliverables: [
          'Color/Size Swatches, Custom Attributes & Unlimited Items',
          'SSLCommerz / Shurjopay / Stripe Gateway Integration',
          'Coupon Engines, Flash Sale Timers & Slide Cart Drawer',
          'Automated PDF Invoices & Courier API Integration Preparation'
        ]
      },
      {
        id: 'wp-woo-gateway-pos',
        title: 'Payment Gateway & POS/Invoice Setup',
        price: 1800,
        turnaround: '24 - 48 Hours',
        recommendedFor: 'Existing WordPress sites needing bKash/Nagad & POS',
        deliverables: [
          'bKash / Nagad Merchant API & Tokenized Checkout',
          'Automated Order Confirmation SMS Notification Gateway',
          'WooCommerce POS & Barcode Scanner Integration',
          'Checkout Security Audit & Strict SSL Verification'
        ]
      }
    ],
    tag: 'Popular'
  },
  {
    id: 'wordpress-speed-seo',
    title: 'Speed Optimization & Technical SEO',
    iconName: 'Zap',
    shortDesc: '90+ Google PageSpeed, LiteSpeed/WP Rocket caching, WebP conversion & RankMath/Yoast SEO.',
    fullDesc: 'Accelerate your WordPress site to under 1 second loading time and score 90+ on Google PageSpeed Insights & GTmetrix. Includes LiteSpeed/WP Rocket caching, WebP image conversion, CSS/JS minification, database bloat purge, and RankMath/Yoast on-page schema configuration.',
    category: 'WordPress Services',
    startingPrice: 1000,
    typicalTurnaround: '12 - 24 Hours',
    deliverables: [
      '90+ Performance Score on Google PageSpeed Insights & GTmetrix',
      'Google Core Web Vitals (LCP, INP, CLS) Green Thresholds',
      'WP Rocket / LiteSpeed Cache & Redis Object Cache Configuration',
      'Next-Gen WebP Image Compression & Smart Lazy-Loading',
      'Database Optimization & Unused CSS/JS Deferral / Minification',
      'RankMath / Yoast SEO, XML Sitemap & Rich Schema Markup Setup'
    ],
    subServices: [
      {
        id: 'wp-speed-core',
        title: '90+ Google PageSpeed Boost',
        price: 1000,
        turnaround: '12 - 18 Hours',
        recommendedFor: 'Slow sites needing fast mobile & desktop loading',
        deliverables: [
          '90+ Mobile & Desktop PageSpeed Guaranteed',
          'Advanced Cache & CDN Setup',
          'Lossless WebP Compression',
          'Before / After Benchmark Report'
        ]
      },
      {
        id: 'wp-tech-seo-schema',
        title: 'Technical SEO & Rich Schema Setup',
        price: 1200,
        turnaround: '24 Hours',
        recommendedFor: 'Websites aiming for high Google organic ranking',
        deliverables: [
          'Google Search Console & GA4 Setup',
          'XML Sitemap, Robots.txt & Canonical Rules',
          'Organization, FAQ & Product Schema Markup',
          'Broken Links & 404 Redirect Audit'
        ]
      }
    ],
    tag: 'Fast 12h'
  },
  {
    id: 'wordpress-security-malware',
    title: 'Malware Removal & Security Hardening',
    iconName: 'ShieldCheck',
    shortDesc: 'Emergency hacked site recovery, virus cleanup, blacklist removal & Wordfence firewall setup.',
    fullDesc: 'Immediate recovery from hacks, Japanese spam injections, crypto-miners, and phishing redirects. Complete file-system scan, backdoor elimination, Google Safe Browsing blacklist de-listing, Cloudflare WAF setup, and hardened login security.',
    category: 'WordPress Services',
    startingPrice: 1500,
    typicalTurnaround: '6 - 24 Hours',
    deliverables: [
      'Deep-level File System & SQL Database Malware Scan',
      'Complete Eradication of Backdoors, Trojans & Phishing Shells',
      'Google Safe Browsing & Security Blacklist De-listing Request',
      'Wordfence WAF & Two-Factor Authentication (2FA) Setup',
      'wp-config.php & .htaccess Strict Security Hardening',
      'Clean Encrypted Off-Site Backup to Google Drive / Cloud'
    ],
    subServices: [
      {
        id: 'wp-emergency-cleanup',
        title: 'Emergency Malware & Backdoor Cleanup',
        price: 1500,
        turnaround: '6 - 12 Hours',
        recommendedFor: 'Compromised websites with malware warnings or redirects',
        deliverables: [
          '100% Infected File Sanitization & Core Reinstallation',
          'Database Injected Spam & PHP Backdoor Removal',
          'Google Red Screen Blacklist De-listing Application',
          'Upload Directory Shell Cleanup'
        ]
      },
      {
        id: 'wp-security-hardening',
        title: 'Security Hardening & WAF Protection',
        price: 1000,
        turnaround: '12 Hours',
        recommendedFor: 'Preventing future brute-force attacks & zero-day exploits',
        deliverables: [
          'Cloudflare WAF Custom Security Rules',
          'Custom Admin Login URL & Brute-Force Rate Limiting',
          'Disable XML-RPC & File Editor Lockout',
          'Automated Off-site Daily Backup Routine'
        ]
      }
    ],
    tag: 'Emergency'
  },
  {
    id: 'wordpress-custom-theme-plugin',
    title: 'Custom Plugin, ACF & PHP Development',
    iconName: 'Code',
    shortDesc: 'Tailored WordPress plugin development, ACF Pro, Custom Post Types & REST API integration.',
    fullDesc: 'Custom WordPress PHP development for bespoke functionality. Advanced Custom Fields (ACF Pro), custom post types, taxonomy architectures, external REST API integrations, webhooks, and custom shortcodes.',
    category: 'WordPress Services',
    startingPrice: 1800,
    typicalTurnaround: '2 - 4 Days',
    deliverables: [
      'Bespoke WordPress Plugin Coded to WP Coding Standards',
      'Advanced Custom Fields (ACF Pro) & Custom Post Type Architecture',
      'Custom REST API Endpoints & Third-Party Webhook Syncing',
      'Custom Checkout Actions & Payment Gateway Callbacks',
      'Child Theme Development & Template Hierarchy Overrides',
      'PHP Conflict Resolution & Memory Limit Debugging'
    ],
    subServices: [
      {
        id: 'wp-plugin-dev',
        title: 'Custom Plugin from Scratch',
        price: 2500,
        turnaround: '2 - 3 Days',
        recommendedFor: 'Unique business logic, custom calculators & portals',
        deliverables: [
          'Modular WP Plugin Structure & Admin Options Panel',
          'Custom Database Tables & Nonce Security Verification',
          'Dynamic Shortcodes & Custom Elementor Widgets',
          'Technical Documentation & Clean Codebase'
        ]
      },
      {
        id: 'wp-acf-cpt',
        title: 'ACF Pro & Custom Post Types',
        price: 1400,
        turnaround: '24 - 48 Hours',
        recommendedFor: 'Real estate, car directory, case studies & team listings',
        deliverables: [
          'Custom Post Types & Custom Taxonomies',
          'ACF Pro Repeaters & Flexible Content Fields',
          'Frontend Single & Archive Layout Templates',
          'Dynamic AJAX Filter & Search Integration'
        ]
      }
    ],
    tag: 'Advanced'
  },
  {
    id: 'wordpress-migration-redesign',
    title: 'Zero-Downtime Migration & UI Redesign',
    iconName: 'Layers',
    shortDesc: 'Seamless hosting transfer, domain migration, and modern responsive UI/UX redesign.',
    fullDesc: 'Zero-downtime server migration, cPanel to VPS transfer, domain URL update without broken links or SEO loss, plus modern aesthetic redesign from legacy themes to sleek Elementor / Block templates.',
    category: 'WordPress Services',
    startingPrice: 1200,
    typicalTurnaround: '12 - 36 Hours',
    deliverables: [
      '100% Data Integrity Server Migration with Zero Downtime',
      'cPanel, Plesk, VPS, Hostinger & Cloudways Migration',
      'Domain Change & Serialized Database URL Safe Replacement',
      'Legacy Theme Overhaul into Modern Ultra-Fast Responsive Design',
      'Business Email Accounts & DNS / Cloudflare Records Setup',
      'Comprehensive Post-Migration Functionality & Form Testing'
    ],
    subServices: [
      {
        id: 'wp-host-migration',
        title: 'Hosting & Server Migration',
        price: 800,
        turnaround: '6 - 12 Hours',
        recommendedFor: 'Moving to a faster host or dedicated VPS',
        deliverables: [
          'Complete Database & Media Files Transfer',
          'SSL Certificate Setup & DNS Propagation',
          'Zero Downtime & Zero Data Loss Guarantee'
        ]
      },
      {
        id: 'wp-ui-redesign-overhaul',
        title: 'Full Modern UI/UX Redesign',
        price: 2200,
        turnaround: '2 - 3 Days',
        recommendedFor: 'Modernizing outdated templates with modern aesthetics',
        deliverables: [
          'Modern Color Palette, Typography & Mobile Layouts',
          'Elementor Pro / Block Lightweight Architecture',
          'Preserving Existing Content & SEO URL Slugs'
        ]
      }
    ],
    tag: 'Safe'
  },

  // ==========================================
  // 3. STUDENT SUPPORT (15 Services)
  // ==========================================
  {
    id: 'final-year-project-guidance',
    title: 'Final Year Project Guidance',
    iconName: 'CheckSquare',
    shortDesc: 'End-to-end guidance for capstone projects, system architecture, SRS documentation, and defense.',
    fullDesc: 'Turn your university capstone project into an outstanding academic achievement. Work with experienced engineering mentors on project feasibility, software architecture, SRS documentation, milestone execution, and defense presentations.',
    category: 'Student Support',
    startingPrice: 1500,
    typicalTurnaround: '24 - 72 Hours',
    deliverables: [
      'System Architecture & ERD / UML diagramming review',
      'Software Requirements Specification (SRS) review & polish',
      'Sprint planning & milestone progress guidance',
      'Prototype troubleshooting and feature demonstration prep',
      'Final project defense mock questioning rehearsal'
    ],
    tag: 'Flagship'
  },
  {
    id: 'research-paper-formatting',
    title: 'Research Paper Formatting',
    iconName: 'FileCheck',
    shortDesc: 'IEEE, Springer, ACM, Elsevier, and APA standard LaTeX / Word paper formatting and citation styling.',
    fullDesc: 'Ensure your research paper conforms strictly to target journal and conference author guidelines. We format two-column IEEE/ACM layouts, LaTeX Overleaf templates, bibliography references (BibTeX/Mendeley), and equation alignments.',
    category: 'Student Support',
    startingPrice: 500,
    typicalTurnaround: '12 - 24 Hours',
    deliverables: [
      'Strict adherence to IEEE, ACM, Springer, Elsevier, or APA styles',
      'Complete LaTeX / Overleaf source files or polished Word document',
      'Standardized BibTeX citations & cross-reference verification',
      'Vector diagram & figure caption alignment styling',
      'Mathematical equations & algorithm pseudo-code formatting'
    ],
    tag: 'High Demand'
  },
  {
    id: 'dataset-technical-guidance',
    title: 'Dataset & Technical Guidance',
    iconName: 'Binary',
    shortDesc: 'Data collection methods, cleaning, exploratory analysis (EDA), and machine learning preprocessing.',
    fullDesc: 'Get expert guidance on sourcing benchmarks, web scraping datasets, data cleaning, handling missing values, exploratory data analysis (EDA), feature engineering, and preparing datasets for Machine Learning models in Python/R/SPSS.',
    category: 'Student Support',
    startingPrice: 600,
    typicalTurnaround: '12 - 36 Hours',
    deliverables: [
      'Dataset curation & benchmark sourcing strategies',
      'Data cleaning, normalization & feature engineering pipelines',
      'Exploratory Data Analysis (EDA) charts and correlation matrices',
      'Python (Pandas, NumPy, Scikit-learn) / SPSS scripts',
      'Data visualization plots formatted for publication'
    ]
  },
  {
    id: 'programming-support',
    title: 'Programming Support (Any Language)',
    iconName: 'Terminal',
    shortDesc: 'Hands-on debugging, algorithm logic breakdown, and conceptual coaching in C++, Java, Python, JS.',
    fullDesc: 'Master tricky programming concepts, data structures (Trees, Graphs, DP), Object-Oriented Programming (OOP), and lab problem sets in C, C++, Java, Python, JavaScript, PHP, or Assembly with live step-by-step logic coaching.',
    category: 'Student Support',
    startingPrice: 400,
    typicalTurnaround: '6 - 18 Hours',
    deliverables: [
      'Line-by-line logic explanation and concept breakdown',
      'Live debugging assistance and segmentation fault resolution',
      'Clean coding practices, time complexity (Big-O) analysis',
      'Edge-case test scenarios and input validation',
      'Lab viva questions prep on written code'
    ],
    tag: 'Popular'
  },
  {
    id: 'github-portfolio-setup',
    title: 'GitHub / Portfolio Setup',
    iconName: 'GitBranch',
    shortDesc: 'Professional GitHub profile README, Git workflow mastery, repository showcases, and pinning.',
    fullDesc: 'Transform your GitHub into a recruiter magnet. We build dynamic GitHub profile READMEs with live stats widgets, organize clean repository structures, write compelling project documentation, and teach proper branch/PR workflows.',
    category: 'Student Support',
    startingPrice: 350,
    typicalTurnaround: '6 - 12 Hours',
    deliverables: [
      'Custom styled dynamic GitHub profile README with live stats',
      'Professional project README.md templates with demo GIF badges',
      'Git branching, commit hygiene, and pull request workflows',
      'Repository organization with open-source licensing & badges',
      'Pinning strategy highlighting your best engineering projects'
    ]
  },
  {
    id: 'cv-linkedin-optimization',
    title: 'CV / LinkedIn Optimization',
    iconName: 'UserCheck',
    shortDesc: 'ATS resume audit, LinkedIn headline & summary revamp, and recruiter networking strategy.',
    fullDesc: 'Optimize your professional profile for tech jobs, internships, and research assistantships. We audit your resume keywords, craft captivating LinkedIn headlines/summaries, and coach you on cold outreach to recruiters.',
    category: 'Student Support',
    startingPrice: 400,
    typicalTurnaround: '12 - 24 Hours',
    deliverables: [
      'ATS score audit and tailored keyword enhancement',
      'LinkedIn profile overhaul (Headline, About, Experience bullets)',
      'Project impact quantification using STAR/XYZ methodology',
      'Networking and cold email connection message templates',
      'Personal branding tips to attract engineering recruiters'
    ],
    tag: 'Career Growth'
  },
  {
    id: 'presentation-preparation',
    title: 'Presentation Preparation',
    iconName: 'Mic',
    shortDesc: 'Slide structure critique, defense rehearsal coaching, and faculty counter-question simulations.',
    fullDesc: 'Conquer presentation anxiety and deliver standout defense talks. We help you structure your speaking points, rehearse transitions, manage time constraints, and anticipate tough cross-examination questions from strict faculty panels.',
    category: 'Student Support',
    startingPrice: 350,
    typicalTurnaround: '8 - 24 Hours',
    deliverables: [
      '1-on-1 Mock defense rehearsal with difficult counter-questions',
      'Slide timing analysis and transition cues formulation',
      'Speaking script formulation & bullet distillation',
      'Q&A survival tactics for rigorous academic defense panels',
      'Confidence building and body language feedback'
    ]
  },
  {
    id: 'scholarship-admission-guidance',
    title: 'Scholarship / Admission Guidance',
    iconName: 'GraduationCap',
    shortDesc: 'Statement of Purpose (SOP), Motivation Letters, research proposals, and professor email drafting.',
    fullDesc: 'Get accepted into top global universities (USA, Canada, Europe, Australia, Japan). Work with alumni who have won Erasmus Mundus, Fulbright, and Graduate Assistantships to draft compelling SOPs, CVs, and cold emails to professors.',
    category: 'Student Support',
    startingPrice: 800,
    typicalTurnaround: '24 - 48 Hours',
    deliverables: [
      'Line-by-line review of Statement of Purpose (SOP) & Motivation Letters',
      'Academic CV tailored for international admissions',
      'Cold email templates for contacting prospective research supervisors',
      'Scholarship application strategy & recommendation letter guidance',
      'Visa and university interview mock preparation session'
    ],
    tag: 'Global Study'
  },
  {
    id: 'thesis-report-writing-support',
    title: 'Thesis / Report Writing Support',
    iconName: 'BookOpen',
    shortDesc: 'Chapter structuring, systematic literature reviews, methodology synthesis, and proofreading.',
    fullDesc: 'Comprehensive academic mentorship on structuring your undergraduate/masters thesis. We help formulate research questions, build Systematic Literature Review (SLR) matrices, articulate methodology, and polish academic English.',
    category: 'Student Support',
    startingPrice: 1000,
    typicalTurnaround: '24 - 72 Hours',
    deliverables: [
      'Chapter-by-chapter structuring & academic writing guidance',
      'Systematic Literature Review (SLR) matrix template & synthesis',
      'Methodology articulation and experimental setup description',
      'Grammar, flow, and academic tone refinement',
      'Citation verification and bibliography alignment'
    ]
  },
  {
    id: 'plagiarism-check-assistance',
    title: 'Plagiarism Check Assistance',
    iconName: 'Search',
    shortDesc: 'Official Turnitin similarity report analysis, ethical paraphrasing, and citation alignment.',
    fullDesc: 'Ensure your manuscript and reports are 100% compliant with university similarity thresholds. Receive official similarity index breakdown reports, citation corrections, and guidance on ethical paraphrasing.',
    category: 'Student Support',
    startingPrice: 250,
    typicalTurnaround: '2 - 6 Hours',
    deliverables: [
      'Complete similarity percentage and highlighted matching sources report',
      'Identification of accidental plagiarism vs common academic phrases',
      'Guidance on restructuring sentences and proper paraphrasing',
      'Missing citation restoration in IEEE/APA/Harvard formats',
      'Fast turnaround within 2 to 6 hours'
    ],
    tag: 'Fast Delivery'
  },
  {
    id: 'technical-workshops-courses',
    title: 'Technical Workshops & Courses',
    iconName: 'Video',
    shortDesc: 'Live cohort bootcamps on Web Development, AI/ML, UI/UX, Git, and Competitive Programming.',
    fullDesc: 'Hands-on, project-based technical masterclasses led by industry practitioners and top competitive programmers. Learn in-demand skills through live coding, assignments, and personalized mentor code reviews.',
    category: 'Student Support',
    startingPrice: 500,
    typicalTurnaround: 'Scheduled Cohorts',
    deliverables: [
      'Live interactive video sessions with real-time Q&A',
      'Full access to session recordings, source code & lecture slides',
      'Hands-on capstone project review & feedback from mentors',
      'Certificate of Completion with verifiable credentials',
      'Exclusive access to private alumni & peer discord/WhatsApp community'
    ]
  },
  {
    id: 'interview-preparation',
    title: 'Interview Preparation',
    iconName: 'Briefcase',
    shortDesc: 'Mock technical coding interviews, system design discussions, and behavioral HR interview coaching.',
    fullDesc: 'Ace your next software engineering or graduate job interview. Practice Data Structures & Algorithms live on whiteboard/coderpad, discuss basic system design, and receive structured feedback on behavioral questions.',
    category: 'Student Support',
    startingPrice: 600,
    typicalTurnaround: '12 - 24 Hours',
    deliverables: [
      '1-on-1 Mock coding interview session simulating top tech companies',
      'Detailed feedback report on problem-solving speed, code quality & communication',
      'System design basics & architectural trade-offs discussion',
      'Behavioral interview coaching using the STAR framework',
      'Curated DSA question bank tailored to target company patterns'
    ]
  },
  {
    id: 'study-plan-academic-guidance',
    title: 'Study Plan & Academic Guidance',
    iconName: 'Calendar',
    shortDesc: 'Personalized semester study roadmap, CGPA recovery planning, and time management coaching.',
    fullDesc: 'Feeling overwhelmed by credits, lab deadlines, and exams? Work with top-performing academic mentors to audit your syllabus, design a realistic weekly study routine, and execute a strategic CGPA improvement plan.',
    category: 'Student Support',
    startingPrice: 300,
    typicalTurnaround: '6 - 12 Hours',
    deliverables: [
      'Tailored weekly timetable balancing classes, labs & self-study',
      'High-yield topic prioritization roadmap for upcoming exams',
      'CGPA recovery calculation model & target grade milestones',
      'Curated textbook chapters, video lecture links & notes list',
      'Weekly progress check-in & accountability support'
    ]
  },
  {
    id: 'problem-solving-debugging',
    title: 'Problem Solving & Debugging Help',
    iconName: 'HelpCircle',
    shortDesc: 'Urgent troubleshooting, mathematical derivations, logic resolution, and homework concept guidance.',
    fullDesc: 'Get immediate help when you are stuck on difficult assignments, mathematical proofs, circuit calculations, or programming bugs. Connect with a mentor to get unstuck with complete conceptual clarity.',
    category: 'Student Support',
    startingPrice: 350,
    typicalTurnaround: '3 - 12 Hours',
    deliverables: [
      'Direct, step-by-step problem dissection and solution logic',
      'Mathematical formula verification and derivation steps',
      'Comprehensive explanation of underlying core theorems',
      'Interactive doubt clearing on WhatsApp / Google Meet',
      'Related practice problems to solidify understanding'
    ],
    tag: 'Instant Support'
  },
  {
    id: 'mentorship-career-guidance',
    title: 'Mentorship & Career Guidance',
    iconName: 'Compass',
    shortDesc: '1-on-1 career mapping with industry software engineers, researchers, and university alumni.',
    fullDesc: 'Get clarity on your future roadmap (Software Engineering, Data Science/AI, Cyber Security, Higher Studies abroad, or Product Management). Discuss career pathways, skill acquisition timelines, and industry expectations.',
    category: 'Student Support',
    startingPrice: 500,
    typicalTurnaround: '12 - 24 Hours',
    deliverables: [
      '1-on-1 private video mentorship session with industry specialist',
      'Personalized 6-month skill development and portfolio roadmap',
      'Honest feedback on current technical skill strengths & gaps',
      'Guidance on open-source contributions & internship applications',
      'Direct networking connection with professional alumni network'
    ]
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis & Statistical Modeling',
    iconName: 'LineChart',
    shortDesc: 'Comprehensive data cleaning, Exploratory Data Analysis (EDA), statistical modeling, Power BI/Tableau dashboards, and research visualization.',
    fullDesc: 'Transform raw tabular data into actionable statistical insights, publication-ready visual charts, and predictive models. Expert analysis across Python (Pandas, NumPy, Scikit-learn, Seaborn), R, IBM SPSS, and Advanced Excel. Covers data sanitization, outlier filtering, hypothesis testing (ANOVA, T-tests, Regression), correlation matrices, interactive Power BI/Tableau dashboards, and comprehensive summary reports with interpretation notes.',
    category: 'Data Analysis',
    startingPrice: 800,
    typicalTurnaround: '12 - 36 Hours',
    deliverables: [
      'Fully Commented Source Code & Scripts (Python Jupyter / R / SPSS syntax)',
      'Cleaned & Preprocessed Dataset (CSV / XLSX / SPSS .sav)',
      'High-Resolution Statistical Charts & Publication-Ready Visualizations',
      'Comprehensive Summary Report with Key Findings & Hypothesis Interpretation',
      'Interactive Dashboard (Power BI / Tableau / Excel Pivot)',
      '1-on-1 Methodology Walkthrough & Results Defense Coaching'
    ],
    subServices: [
      {
        id: 'data-spss-stats',
        title: 'IBM SPSS Statistical Analysis & Hypothesis Testing',
        price: 800,
        turnaround: '12 - 24 Hours',
        recommendedFor: 'Thesis Questionnaires, Social Science & Business Research',
        deliverables: [
          'Cronbach’s Alpha Reliability & Normality Testing (Shapiro-Wilk)',
          'Independent T-Tests, Paired T-Tests, Chi-Square & One-Way ANOVA',
          'Linear / Multiple / Logistic Regression Analysis',
          'SPSS .sav Output files & APA-style summary table writeup'
        ]
      },
      {
        id: 'data-python-r-eda',
        title: 'Python / R Data Cleaning, EDA & Machine Learning',
        price: 1500,
        turnaround: '24 - 48 Hours',
        recommendedFor: 'Computer Science, Data Engineering & AI Capstone Projects',
        deliverables: [
          'Missing Value Imputation, Outlier Treatment & Feature Engineering',
          'Pandas, NumPy, Seaborn & Matplotlib Visualization Suite',
          'Supervised / Unsupervised ML Classification & Regression Models',
          'Jupyter Notebook (.ipynb) with clean markdown explanations'
        ]
      },
      {
        id: 'data-powerbi-tableau',
        title: 'Power BI & Tableau Interactive Dashboard',
        price: 1200,
        turnaround: '24 - 36 Hours',
        recommendedFor: 'Business Intelligence, Corporate Reports & Live Presentations',
        deliverables: [
          'Interactive Drill-Down Visuals, KPI Cards & Custom Slicers',
          'DAX Formulas, Calculated Measures & Power Query ETL Pipelines',
          'Automated Refresh Config & Mobile Layout Optimization',
          '.pbix / Tableau Package File + Video Walkthrough'
        ]
      },
      {
        id: 'data-excel-pivot-modeling',
        title: 'Advanced Excel Analytics & Financial Modeling',
        price: 600,
        turnaround: '6 - 18 Hours',
        recommendedFor: 'Accounting, Finance & MBA Coursework Assignments',
        deliverables: [
          'Dynamic Pivot Tables, VLOOKUP/XLOOKUP & Nested Logic Formulas',
          'What-If Analysis, Scenario Manager & Solver Optimization',
          'Professional Corporate Presentation Charts & Automated Macros (VBA)',
          'Clean, error-free Excel workbook (.xlsx)'
        ]
      }
    ],
    tag: 'High Demand'
  },
  {
    id: 'data-python-eda-ml',
    title: 'Python Data Science, EDA & Machine Learning',
    iconName: 'Binary',
    shortDesc: 'Jupyter Notebook, Pandas, NumPy, Scikit-learn ML models, feature engineering & Seaborn plots.',
    fullDesc: 'End-to-end Python data science pipelines for thesis, capstones, and industry research. Comprehensive preprocessing, outlier elimination, exploratory data analysis (EDA) with Seaborn/Matplotlib, supervised/unsupervised ML algorithms (Random Forest, XGBoost, SVM, KMeans), and performance evaluation metrics.',
    category: 'Data Analysis',
    startingPrice: 1500,
    typicalTurnaround: '24 - 48 Hours',
    deliverables: [
      'Fully Documented Jupyter Notebook (.ipynb) with Clean Markdown Explanations',
      'Sanitized & Normalized Dataset (CSV / Parquet / Pandas Dataframe)',
      'Publication-Quality Seaborn/Matplotlib Visualizations & Correlation Heatmaps',
      'Supervised / Unsupervised Machine Learning Model Training & Tuning',
      'Performance Evaluation Suite (Accuracy, Precision, Recall, F1-Score, ROC-AUC)',
      'Methodology Defense Documentation & Technical Walkthrough'
    ],
    subServices: [
      {
        id: 'data-py-eda-viz',
        title: 'Data Cleaning & Exploratory Analysis (EDA)',
        price: 1000,
        turnaround: '12 - 24 Hours',
        recommendedFor: 'Raw datasets needing cleaning & exploratory graphs',
        deliverables: [
          'Missing Value Imputation & Outlier Detection',
          'Distribution Plots, Boxplots & Heatmaps',
          'Clean Jupyter Notebook & Data Dictionary'
        ]
      },
      {
        id: 'data-py-ml-classification',
        title: 'Machine Learning & Predictive Modeling',
        price: 1800,
        turnaround: '24 - 48 Hours',
        recommendedFor: 'Final year thesis, prediction models & benchmarking',
        deliverables: [
          'Multi-Algorithm Benchmarking (RF, XGBoost, SVM, Logistic)',
          'Hyperparameter Tuning via GridSearchCV',
          'Confusion Matrix, Classification Report & ROC Curves',
          'Trained Serialized Model Files (.pkl / .joblib)'
        ]
      },
      {
        id: 'data-py-nlp-sentiment',
        title: 'NLP Text Analysis & Sentiment Classification',
        price: 2200,
        turnaround: '2 - 3 Days',
        recommendedFor: 'Social media sentiments, review classification & text mining',
        deliverables: [
          'Text Tokenization, Stopwords Removal & Lemmatization',
          'TF-IDF & Word Embeddings Vector Space Pipeline',
          'Sentiment Classification & Topic Modeling (LDA)',
          'Wordclouds & Frequency Distribution Plots'
        ]
      }
    ],
    tag: 'ML & AI'
  },
  {
    id: 'data-powerbi-tableau-standalone',
    title: 'Power BI & Tableau Interactive Dashboards',
    iconName: 'BarChart',
    shortDesc: 'Drill-through KPI dashboards, advanced DAX measures, Power Query ETL & executive visual storytelling.',
    fullDesc: 'Executive-level interactive Business Intelligence dashboards built with Microsoft Power BI and Tableau. Advanced Power Query ETL data blending, complex DAX measures, custom KPI scorecards, mobile layout optimization, and interactive drill-through capabilities.',
    category: 'Data Analysis',
    startingPrice: 1200,
    typicalTurnaround: '24 - 48 Hours',
    deliverables: [
      'Full Interactive Source File (.pbix / .twbx) with Embedded Modeling',
      'Custom DAX Calculated Columns, Dynamic Measures & Time Intelligence',
      'Automated Power Query ETL Data Cleansing & Refresh Architecture',
      'Executive KPI Scorecards, Gauge Visuals & Drill-Through Filters',
      'Mobile Device View Layout & Seamless Navigation Bookmarks',
      'Comprehensive Video Walkthrough & Presentation Documentation'
    ],
    subServices: [
      {
        id: 'bi-sales-finance-dashboard',
        title: 'Sales & Financial KPI Dashboard',
        price: 1500,
        turnaround: '24 - 36 Hours',
        recommendedFor: 'E-commerce, Retail, Sales Teams & Financial Reporting',
        deliverables: [
          'Month-over-Month (MoM) & Year-over-Year (YoY) Growth Metrics',
          'Product-wise Revenue, Discounts & Net Margin Visuals',
          'Customer Acquisition & Churn Visual Indicators'
        ]
      },
      {
        id: 'bi-hr-ops-dashboard',
        title: 'HR & Operational Analytics Dashboard',
        price: 1200,
        turnaround: '24 Hours',
        recommendedFor: 'Employee metrics, payroll, attendance & operational workflows',
        deliverables: [
          'Employee Performance, Attrition Rate & Demographics',
          'Departmental Budget Utilization & Headcount Tracking',
          'Dynamic Date Range & Department Slicers'
        ]
      }
    ],
    tag: 'Popular'
  },
  {
    id: 'data-excel-modeling',
    title: 'Advanced Excel Analytics & Financial Modeling',
    iconName: 'FileSpreadsheet',
    shortDesc: 'Dynamic Pivot tables, XLOOKUP, What-If scenarios, Solver optimization & automated VBA macros.',
    fullDesc: 'Professional Excel spreadsheet modeling and analytical automation for MBA assignments, business plans, and corporate accounting. Complex nested formula structures, dynamic pivot dashboards, discounted cash flow (DCF) valuations, sensitivity matrices, and automated VBA macros.',
    category: 'Data Analysis',
    startingPrice: 600,
    typicalTurnaround: '6 - 18 Hours',
    deliverables: [
      'Error-Free Formatted Excel Workbook (.xlsx / .xlsm)',
      'Dynamic Pivot Tables, Slicers & Timeline Filter Dashboards',
      'XLOOKUP, Nested INDEX-MATCH, SUMIFS & Complex Logic Formulas',
      'What-If Scenario Manager, Goal Seek & Solver Optimization Models',
      'Corporate Presentation Charts (Waterfall, Tornado, Combo Visuals)',
      'Custom VBA Macro Automation Routines (as requested)'
    ],
    subServices: [
      {
        id: 'excel-pivot-formula',
        title: 'Pivot Dashboards & Advanced Formulas',
        price: 600,
        turnaround: '6 - 12 Hours',
        recommendedFor: 'Data organization, sales summary & student coursework',
        deliverables: [
          'Clean Pivot Summary Tables & Charts',
          'XLOOKUP & Dynamic Array Calculations',
          'Conditional Color Formatting & Dropdown Validations'
        ]
      },
      {
        id: 'excel-financial-valuation',
        title: 'Financial Valuation & Budgeting Model',
        price: 1200,
        turnaround: '12 - 24 Hours',
        recommendedFor: 'MBA finance projects, startup pitch decks & DCF models',
        deliverables: [
          '3-Statement Integrated Model (P&L, Balance Sheet, Cash Flow)',
          'DCF Valuation & WACC Sensitivity Analysis',
          'Break-Even & Scenario Matrix Tables'
        ]
      }
    ],
    tag: 'Fast Turnaround'
  },
  {
    id: 'data-research-survey',
    title: 'Survey Data Cleaning & Qualitative Analysis',
    iconName: 'Search',
    shortDesc: 'Likert scale cleaning, demographic profiling, outlier purging & NVivo thematic coding.',
    fullDesc: 'Specialized data sanitization and thematic analysis for academic research questionnaires and interviews. Cleans raw exports from Google Forms, KoboToolbox, Qualtrics, handles reverse-coded Likert questions, cross-tabulates demographics, and executes NVivo thematic coding for qualitative datasets.',
    category: 'Data Analysis',
    startingPrice: 700,
    typicalTurnaround: '12 - 24 Hours',
    deliverables: [
      'Sanitized & Formatted Survey Dataset (.xlsx / .sav / .csv)',
      'Reverse-Coded Item Scoring & Variable Codebook Documentation',
      'Demographic Frequency Tables & Chi-Square Cross-Tabulations',
      'Qualitative Open-Ended Interview Thematic Coding Matrix',
      'Descriptive Methodology Section Summary Writeup',
      'Outlier & Incomplete Response Purging Audit'
    ],
    subServices: [
      {
        id: 'survey-quant-cleaning',
        title: 'Survey Coding & Cross-Tabulation',
        price: 700,
        turnaround: '12 Hours',
        recommendedFor: 'Google Forms / KoboToolbox raw survey exports',
        deliverables: [
          'Numerical Variable Coding & Label Dictionary',
          'Demographic Frequency Breakdown Tables',
          'Clean Publication Bar & Pie Charts'
        ]
      },
      {
        id: 'survey-qual-thematic',
        title: 'Qualitative Thematic Analysis (NVivo)',
        price: 1100,
        turnaround: '24 Hours',
        recommendedFor: 'In-depth interviews & focus group discussions',
        deliverables: [
          'Transcript Coding & Node Categorization',
          'Theme Hierarchy Diagrams & Quotation Matrix',
          'Methodological Thematic Summary Writeup'
        ]
      }
    ],
    tag: 'Research'
  },
  {
    id: 'data-scraping-automation',
    title: 'Web Scraping, Data Mining & Pipelines',
    iconName: 'Database',
    shortDesc: 'Automated data extraction using Python BeautifulSoup, Selenium, Scrapy & clean CSV/JSON pipelines.',
    fullDesc: 'Automated web scraping and data harvesting tailored for research datasets, market intelligence, directory aggregation, and competitor pricing. Built using Python BeautifulSoup, Scrapy, and Selenium with anti-bot rate-limiting and structured CSV/JSON/SQL output.',
    category: 'Data Analysis',
    startingPrice: 1000,
    typicalTurnaround: '12 - 36 Hours',
    deliverables: [
      'Sanitized & Normalized Dataset Output (CSV / Excel / JSON / SQL)',
      'Complete Python Web Scraping Script & Executable Notebook',
      'E-Commerce Catalogs, Pricing, Reviews, Emails & Image Links Extraction',
      'Dynamic JavaScript Pagination & Infinite Scroll Handling via Selenium',
      'Duplicate Purging & Regular Expression Data Sanitization',
      'Scheduled Automation Cron Guide & Database Integration'
    ],
    subServices: [
      {
        id: 'scraping-ecommerce-leads',
        title: 'E-Commerce & Directory Scraping',
        price: 1000,
        turnaround: '12 - 18 Hours',
        recommendedFor: 'Product pricing, competitor research & business leads',
        deliverables: [
          '1,000 to 50,000+ Clean Extracted Rows',
          'Product Titles, Pricing, Specs, Ratings & Media Links',
          'Structured Excel / CSV File Delivery'
        ]
      },
      {
        id: 'scraping-selenium-custom',
        title: 'Dynamic Selenium Scraper & Bot',
        price: 1600,
        turnaround: '24 - 36 Hours',
        recommendedFor: 'JavaScript dynamic platforms, authentication & custom forms',
        deliverables: [
          'Headless Selenium Crawler with Session Storage',
          'Automated Dropdown Interactions & Pagination Traversal',
          'Reusable Python Source Code & Video Tutorial'
        ]
      }
    ],
    tag: 'Automated'
  }
];

export const PROBLEM_TRIGGERS: ProblemTrigger[] = [
  {
    id: 'design-flyer-ppt',
    text: "Need presentation slides or event poster design",
    serviceId: 'presentation-ppt-design',
    icon: 'Presentation',
    description: 'Custom slide decks, defense presentations, and event banners designed with professional aesthetics.',
    defaultExpectation: 'Need polished presentation slides for class defense and matching event promotional creatives.'
  },
  {
    id: 'portfolio-website',
    text: "Want a modern personal portfolio or club website",
    serviceId: 'personal-portfolio-website',
    icon: 'Globe',
    description: 'Fast, responsive, modern websites showcasing your skills, projects, or student club events.',
    defaultExpectation: 'Need a fast React/Next.js personal portfolio with live demo links and custom domain deployment.'
  },
  {
    id: 'final-year-project',
    text: "My final year capstone project is stuck",
    serviceId: 'final-year-project-guidance',
    icon: 'CheckSquare',
    description: 'Architectural troubleshooting, backend/frontend integration, or ML model guidance.',
    defaultExpectation: 'Need help resolving architecture bottlenecks, dataset integration, and preparing the SRS report.'
  },
  {
    id: 'programming-debugging',
    text: "I have a lab task / coding error",
    serviceId: 'programming-support',
    icon: 'Terminal',
    description: 'Live debugging, logic explanation, and algorithm walkthrough for your CSE/EEE labs.',
    defaultExpectation: 'Code has logic bugs/runtime errors; need step-by-step guidance on how to fix and explain in lab viva.'
  },
  {
    id: 'research-formatting',
    text: "Need IEEE / Springer research paper formatting",
    serviceId: 'research-paper-formatting',
    icon: 'FileCheck',
    description: 'Strict IEEE, Springer, ACM, and APA standard LaTeX / Word paper formatting.',
    defaultExpectation: 'Need paper formatted in IEEE two-column LaTeX style with verified citations and clear diagrams.'
  },
  {
    id: 'ats-resume-linkedin',
    text: "Need ATS-friendly resume & LinkedIn revamp",
    serviceId: 'cv-resume-design',
    icon: 'FileText',
    description: 'High-impact ATS-friendly resume formatting and LinkedIn optimization for job applications.',
    defaultExpectation: 'Professional resume design with clean layout, keyword optimization, and LaTeX/Word editable source.'
  },
  {
    id: 'ecommerce-web-app',
    text: "Need custom web application / e-commerce portal",
    serviceId: 'business-ecommerce-website',
    icon: 'ShoppingBag',
    description: 'Full-stack web applications with bKash/Nagad payment gateways, admin panels, and databases.',
    defaultExpectation: 'Need full-stack web application with secure backend, database schema, and payment integration.'
  },
  {
    id: 'plagiarism-check',
    text: "Need Turnitin plagiarism check & proofreading",
    serviceId: 'plagiarism-check-assistance',
    icon: 'Search',
    description: 'Turnitin similarity report analysis, ethical paraphrasing, and citation corrections.',
    defaultExpectation: 'Need similarity report breakdown with citation check and guidance to lower similarity index.'
  },
  {
    id: 'figma-ui-ux-trigger',
    text: "Need Figma UI/UX prototype & app/web design",
    serviceId: 'figma-design',
    icon: 'Figma',
    description: 'Interactive wireframing, mobile app & web screens, design systems, and clickable prototype testing.',
    defaultExpectation: 'Need high-fidelity Figma UI/UX screens with interactive prototyping, component design system, and developer assets.'
  },
  {
    id: 'wordpress-site-trigger',
    text: "Need WordPress website / WooCommerce online shop",
    serviceId: 'wordpress-development',
    icon: 'Wordpress',
    description: 'Elementor Pro/Gutenberg design, e-commerce setup, local bKash/Nagad checkout, and speed optimization.',
    defaultExpectation: 'Need complete responsive WordPress site with modern layout, payment gateways, and drag-and-drop admin panel.'
  },
  {
    id: 'wordpress-speed-malware-trigger',
    text: "WordPress site is slow, hacked, or has malware",
    serviceId: 'wordpress-speed-seo',
    icon: 'Zap',
    description: '90+ Google PageSpeed boost, Core Web Vitals optimization, hack cleanup, and Wordfence firewall.',
    defaultExpectation: 'Need urgent WordPress speed optimization to score 90+ PageSpeed and eliminate all malware/backdoors.'
  },
  {
    id: 'data-analysis-trigger',
    text: "Need SPSS / R statistical thesis analysis & hypothesis testing",
    serviceId: 'data-analysis',
    icon: 'LineChart',
    description: 'Data cleaning, ANOVA, T-Tests, regression modeling, APA-7 tables, and findings interpretation.',
    defaultExpectation: 'Need statistical data analysis in SPSS/R, clean dataset, high-res publication charts, and detailed APA interpretation report.'
  },
  {
    id: 'data-python-ml-trigger',
    text: "Need Python Machine Learning, EDA or Power BI dashboard",
    serviceId: 'data-python-eda-ml',
    icon: 'Binary',
    description: 'Pandas/Seaborn EDA, predictive ML models, confusion matrices, and interactive Power BI drill-through dashboards.',
    defaultExpectation: 'Need documented Jupyter Notebook with clean EDA visuals, machine learning model benchmarks, and interactive KPI visuals.'
  }
];

export const INITIAL_REQUESTS: SupportRequest[] = [
  {
    id: 'NX-2026-00125',
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
    serviceId: 'final-year-project-guidance',
    serviceTitle: 'Final Year Project Guidance',
    courseName: 'Capstone Project & Defense',
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
      }
    ],
    assignedMentorId: 'mentor-1',
    assignedMentorName: 'Tanvir Ahmed (BUET ML Researcher)',
    status: 'in_progress',
    paymentStatus: 'paid',
    paymentDetails: {
      id: 'pay-1',
      requestId: 'NX-2026-00125',
      amount: 2200,
      method: 'bKash',
      transactionId: '9K2L88X19B',
      senderNumber: '01712345678',
      status: 'verified',
      submittedAt: '2026-08-19 14:30',
      verifiedAt: '2026-08-19 14:45'
    },
    adminNotes: [
      'Student contacted via WhatsApp. Shared baseline Colab notebook.',
      'Assigned Tanvir Ahmed (BUET CSE alumni). 1st session completed on 20 Aug.'
    ],
    createdAt: '2026-08-19 12:10',
    updatedAt: '2026-08-20 18:00'
  }
];

export const INITIAL_ORDERS: AcademicOrder[] = [
  {
    id: 'NX-ORD-8841',
    items: [
      {
        id: 'cart-1',
        serviceId: 'presentation-ppt-design',
        serviceTitle: 'Presentation & PPT Design',
        category: 'Design Services',
        basePrice: 350,
        packageTier: 'Standard Support',
        urgencyFee: 0,
        totalPrice: 350,
        courseName: 'CSE-4200 Capstone Defense',
        quantity: 1
      },
      {
        id: 'cart-2',
        serviceId: 'personal-portfolio-website',
        serviceTitle: 'Personal / Portfolio Website',
        category: 'Development Services',
        basePrice: 1500,
        packageTier: 'VIP 1-on-1 Mentorship',
        urgencyFee: 200,
        totalPrice: 1700,
        courseName: 'Career & Industry Prep',
        quantity: 1
      }
    ],
    totalAmount: 2050,
    customerName: 'Md. Ahsanur Rahaman',
    phone: '01712-345678',
    whatsapp: '01712-345678',
    email: 'ahsanur@example.com',
    university: 'Pundra University of Science and Technology (PUB)',
    department: 'Computer Science & Engineering (CSE)',
    batchOrSemester: '4th Year / 8th Semester',
    courseName: 'Final Defense Presentation & Portfolio',
    courseCode: 'CSE-4200',
    requirements: 'Need a stunning 15-slide defense slide deck with clean typography and custom diagrams, plus a personal portfolio setup on GitHub Pages.',
    deadline: '2026-08-25',
    preferredContact: 'WhatsApp',
    attachments: [],
    status: 'in_progress',
    assignedMentorName: 'Engr. Tahmidul Islam (BUET)',
    createdAt: '2026-08-20 10:30',
    updatedAt: '2026-08-20 11:15',
    notes: ['Initial review done. Sent slide outline on WhatsApp.']
  }
];

export const INITIAL_MENTORS: Mentor[] = [
  {
    id: 'mentor-1',
    userId: 'user-m-1',
    name: 'Tanvir Ahmed',
    email: 'tanvir.cse.buet@gmail.com',
    phone: '+880 1711-223344',
    whatsapp: '+880 1711-223344',
    university: 'Bangladesh University of Engineering and Technology (BUET)',
    department: 'Computer Science & Engineering (CSE)',
    qualification: 'B.Sc. in CSE (BUET), Published Researcher (IEEE/Springer)',
    expertise: ['Fullstack Web', 'Machine Learning', 'NLP', 'System Architecture', 'LaTeX Formatting'],
    experience: '4+ years guiding undergraduate projects, 6 IEEE conference publications.',
    availableTime: 'Evenings (6 PM - 11 PM)',
    expectedRate: '৳800 - ৳1500 / session',
    verificationStatus: 'approved',
    rating: 4.95,
    totalCompletedSessions: 84,
    earnings: 68500,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    bio: 'Passionate about demystifying complex computer science and AI concepts. Mentored 80+ university students in capstone projects and research publications.'
  },
  {
    id: 'mentor-2',
    userId: 'user-m-2',
    name: 'Nusrat Jahan',
    email: 'nusrat.du.cs@gmail.com',
    phone: '+880 1822-334455',
    whatsapp: '+880 1822-334455',
    university: 'University of Dhaka (DU)',
    department: 'Computer Science & Engineering (CSE)',
    qualification: 'M.Sc. in CSE, Senior UI/UX & Frontend Engineer',
    expertise: ['UI/UX Design', 'Figma', 'React/Next.js', 'Portfolio Building', 'Presentation Design'],
    experience: '3+ years designing production UI/UX and web apps for global clients.',
    availableTime: 'Afternoon & Night',
    expectedRate: '৳600 - ৳1200 / session',
    verificationStatus: 'approved',
    rating: 4.9,
    totalCompletedSessions: 62,
    earnings: 49000,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    bio: 'Dedicated to helping students craft industry-level UI/UX designs, slide decks, and responsive frontend web applications.'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    studentName: 'Sabbir Hossain',
    university: 'Pundra University of Science and Technology (PUB)',
    department: 'Computer Science & Engineering',
    serviceTitle: 'Presentation & PPT Design',
    rating: 5,
    comment: 'Kraflyn Technologies designed my final defense slide deck. The typography, color scheme, and diagrams were so clean that our faculty board praised our presentation structure!',
    date: '2026-08-18',
    gradeOutcome: 'A+ in Defense',
    verified: true
  },
  {
    id: 'rev-2',
    studentName: 'Farhana Akter',
    university: 'University of Dhaka (DU)',
    department: 'Software Engineering',
    serviceTitle: 'Personal / Portfolio Website',
    rating: 5,
    comment: 'Got my personal developer portfolio built and deployed in less than 48 hours. Responsive, lightning-fast, and helped me land an internship interview within a week!',
    date: '2026-08-15',
    gradeOutcome: 'Internship Offer',
    verified: true
  },
  {
    id: 'rev-3',
    studentName: 'Rakibul Islam',
    university: 'Rajshahi University of Engineering & Technology (RUET)',
    department: 'Electrical & Electronic Engineering (EEE)',
    serviceTitle: 'Research Paper Formatting',
    rating: 5,
    comment: 'Transformed our messy Word draft into a pristine IEEE two-column LaTeX document. Saved us hours of headache right before the conference submission deadline.',
    date: '2026-08-12',
    gradeOutcome: 'IEEE Paper Accepted',
    verified: true
  }
];

export const REVIEWS = INITIAL_REVIEWS;

