import { Service, ProblemTrigger, SupportRequest, Mentor, Review, User, AcademicOrder, ProjectItem, SiteSettings } from '../types';

export const UNIVERSITIES: string[] = [
  'FinTech & Banking',
  'E-Commerce & Retail',
  'SaaS & Cloud Platforms',
  'HealthTech & Medical',
  'EdTech & E-Learning',
  'Real Estate & PropTech',
  'Logistics & Supply Chain',
  'Media & Publishing',
  'Marketing & Advertising',
  'NGO & Non-Profit Organization',
  'Tech Startup & Innovation Lab',
  'Corporate Enterprise',
  'Consulting & Professional Services',
  'Other Business / Personal Venture'
];

export const DEPARTMENTS: string[] = [
  'Full-Stack Web Engineering',
  'UI/UX & Product Design',
  'WordPress & CMS Engineering',
  'Data Science & Business Intelligence',
  'Mobile App Development',
  'Cloud Infrastructure & DevOps',
  'E-Commerce Architecture',
  'API & Microservices Backend',
  'Machine Learning & AI Pipelines',
  'Brand Strategy & Visual Identity'
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
    id: 'design',
    title: 'Design & UI/UX',
    subtitle: 'Human-Centered Craft',
    iconName: 'Layout',
    color: 'from-blue-600 to-indigo-600',
    badge: 'Pixel Precision',
    content: 'We craft intuitive, engaging digital experiences, scalable Figma design systems, interactive prototypes, and captivating brand identities that captivate users and elevate market positioning.',
    points: [
      'Interactive Figma Prototypes & User Flows',
      'Design Systems, Tokens & Component Libraries',
      'High-Converting SaaS & Landing Page Designs',
      'Comprehensive Brand Identity & Vector Kits'
    ]
  },
  {
    id: 'development',
    title: 'Web & Software Dev',
    subtitle: 'Modern Engineering',
    iconName: 'Code',
    color: 'from-purple-600 to-indigo-600',
    badge: 'Clean Code',
    content: 'Full-stack engineering built for reliability and scale. We utilize React, Next.js, Node.js, TypeScript, PostgreSQL, and cloud infrastructure to create ultra-fast, secure, and production-ready applications.',
    points: [
      'Next.js & React Full-Stack Web Applications',
      'Secure REST & GraphQL APIs with Microservices',
      'Scalable Database Design & ORM Migrations',
      'Docker, CI/CD, and Automated Cloud Deployments'
    ]
  },
  {
    id: 'wordpress',
    title: 'WordPress Solutions',
    subtitle: 'Speed & Scalability',
    iconName: 'Globe',
    color: 'from-teal-600 to-emerald-600',
    badge: 'WordPress Wing',
    content: 'Custom-coded, lightweight WordPress architectures, WooCommerce e-commerce engines, Gutenberg blocks, and comprehensive speed & security hardening without relying on bloated templates.',
    points: [
      'Custom PHP 8+ Theme Development from Figma',
      'WooCommerce Online Stores & Payment Gateways',
      'Sub-second Speed & 90+ Core Web Vitals Optimization',
      'Zero-Downtime Migration & Enterprise Security'
    ]
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis & BI',
    subtitle: 'Actionable Intelligence',
    iconName: 'BarChart2',
    color: 'from-amber-500 to-orange-600',
    badge: 'Data Lab',
    content: 'Transforming complex datasets into clear business insights. We build interactive Power BI/Tableau dashboards, automated ETL pipelines, predictive ML models, and statistical intelligence reports.',
    points: [
      'Interactive Power BI, Tableau & Streamlit Dashboards',
      'Exploratory Data Analysis (EDA) & Statistical Reports',
      'Predictive Machine Learning & Classification Pipelines',
      'Automated Web Scraping & Clean ETL Pipelines'
    ]
  }
];

export const NEXORA_PILLARS = KRAFLYN_PILLARS;

// Core Services across the 4 Pillars
export const SERVICES: Service[] = [
  // 1. DESIGN & UI/UX
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design for Web & Mobile Apps',
    iconName: 'Layout',
    shortDesc: 'Pixel-perfect interactive Figma prototypes, user journeys, wireframes, and scalable design systems.',
    fullDesc: 'End-to-end user experience and user interface engineering for modern SaaS, web platforms, and mobile apps. We deliver comprehensive Figma files with auto-layouts, responsive variants, typography scales, design tokens, and developer handoff specs.',
    category: 'Design Services',
    startingPrice: 450,
    typicalTurnaround: '3 - 7 Days',
    deliverables: [
      'Interactive Figma prototype with realistic clickable flows',
      'Responsive screen layouts (Desktop, Tablet & Mobile)',
      'Comprehensive Design System (Tokens, Icons, Colors, Typography)',
      'Developer handoff documentation & asset exports (SVG/PNG)',
      'User testing flows and wireframe architecture'
    ],
    tag: 'Flagship'
  },
  {
    id: 'mobile-app-uiux',
    title: 'Mobile App UI/UX Design (iOS & Android)',
    iconName: 'Smartphone',
    shortDesc: 'Native iOS & Android mobile interfaces, Apple Human Interface & Google Material 3 guidelines, and micro-interactions.',
    fullDesc: 'Modern mobile app UI/UX design tailored for intuitive thumb navigation, seamless bottom sheets, gesture flows, dark/light modes, and interactive component states in Figma. Ready for React Native or Flutter developer handoff.',
    category: 'Design Services',
    startingPrice: 500,
    typicalTurnaround: '4 - 8 Days',
    deliverables: [
      '15-30+ high-fidelity mobile application screens in Figma',
      'Clickable user journeys & interactive screen transitions',
      'iOS Human Interface & Android Material 3 compliance specs',
      'Exportable SVG/PNG asset library & typography tokens',
      'Developer handoff documentation with component variants'
    ],
    tag: 'High Demand'
  },
  {
    id: 'landing-page-design',
    title: 'High-Converting Landing Page Design',
    iconName: 'Sparkles',
    shortDesc: 'Modern, conversion-focused landing page visual designs optimized for SaaS, products, and lead generation.',
    fullDesc: 'Crafting persuasive, visually captivating landing page layouts designed to maximize user engagement and conversions. Includes hero sections, feature grids, social proof testimonials, pricing matrices, and CTA sections.',
    category: 'Design Services',
    startingPrice: 350,
    typicalTurnaround: '2 - 4 Days',
    deliverables: [
      'Full page visual design in Figma (Desktop & Mobile)',
      'Copywriting layout structure & visual hierarchy',
      'Custom 2D/3D visual graphics and icon styling',
      'Optimized for fast front-end coding',
      'Unlimited minor revisions until launch'
    ],
    tag: 'High Conversion'
  },
  {
    id: 'design-system-tokens',
    title: 'Design System & Component Library (Figma to Code)',
    iconName: 'Layers',
    shortDesc: 'Scalable design tokens, auto-layout component library, typography scale, and developer handoff specs.',
    fullDesc: 'Standardize your product UI across your entire engineering team. We architect structured Figma design systems with semantic color tokens, typography scales, 40+ atomic components with interactive variants, spacing grids, and Storybook/Tailwind alignment.',
    category: 'Design Services',
    startingPrice: 600,
    typicalTurnaround: '5 - 10 Days',
    deliverables: [
      'Master Figma component library with Auto-Layout 5.0 and variables',
      'Semantic color, typography, spacing, and elevation tokens',
      '40+ atomic UI components (Buttons, Inputs, Modals, Tables, Badges)',
      'Light and Dark mode variant system',
      'Developer handoff style guide & Storybook ready token JSON'
    ],
    tag: 'Scale Ready'
  },
  {
    id: 'saas-dashboard-ux',
    title: 'SaaS Dashboard & Web Application UX Design',
    iconName: 'LayoutDashboard',
    shortDesc: 'Data-dense web application interfaces, complex table filters, multi-role views, and executive metrics UX.',
    fullDesc: 'Design user-friendly dashboards for complex B2B SaaS, CRM, or administrative platforms. We map out intuitive navigation hierarchies, dense data tables with filtering and bulk actions, customizable widgets, and responsive layouts.',
    category: 'Design Services',
    startingPrice: 550,
    typicalTurnaround: '4 - 7 Days',
    deliverables: [
      'Multi-screen SaaS dashboard workflows in Figma',
      'Data-dense table design with sorting, pagination, and action modals',
      'Analytics visual charts, KPI metric cards & quick actions',
      'Role-based permissions UI states (Admin, Manager, Member)',
      'Interactive Figma prototypes with realistic dashboard interactions'
    ],
    tag: 'SaaS Specialist'
  },
  {
    id: 'brand-identity-logo',
    title: 'Brand Identity & Logo Suite',
    iconName: 'Layers',
    shortDesc: 'Distinctive vector logo marks, color harmony, typography guides, and complete brand stylebooks.',
    fullDesc: 'Establish a powerful, cohesive brand identity that commands attention in your market. We deliver multiple unique conceptual directions, complete vector source files (SVG, EPS, AI, PDF), brand color codes (HEX, RGB, CMYK), and stationery templates.',
    category: 'Design Services',
    startingPrice: 300,
    typicalTurnaround: '3 - 5 Days',
    deliverables: [
      '3-5 distinct creative logo concepts with revisions',
      'Vector master files (SVG, EPS, AI, PDF, Transparent PNG)',
      'Comprehensive Brand Guidelines (Colors, Typography, Usage rules)',
      'Social media avatars, banner kits, and favicon assets',
      'Full intellectual property & commercial rights transfer'
    ],
    tag: 'Brand Suite'
  },
  {
    id: 'pitch-deck-presentation',
    title: 'Investor Pitch Deck & Corporate Presentation',
    iconName: 'Presentation',
    shortDesc: 'Compelling, beautifully formatted presentation decks for fundraising, sales, and executive keynotes.',
    fullDesc: 'Transform complex business narratives and data metrics into clear, investor-ready slide presentations. Designed in Figma, PowerPoint, or Google Slides with custom data visualizations and master slide templates.',
    category: 'Design Services',
    startingPrice: 250,
    typicalTurnaround: '2 - 3 Days',
    deliverables: [
      'Custom styled PPTX / Keynote / Figma presentation deck',
      'Clean typography, infographic charts & balanced metrics',
      'Slide master template for easy internal reuse',
      'Exported high-res PDF handouts and speaker notes',
      'Commercial vector icon sets included'
    ]
  },

  // 2. WEB & SOFTWARE DEVELOPMENT
  {
    id: 'custom-fullstack-webapp',
    title: 'Custom Full-Stack Web Application',
    iconName: 'Code',
    shortDesc: 'Scalable web applications built with React, Next.js, Node.js/Express, TypeScript, and PostgreSQL/MongoDB.',
    fullDesc: 'End-to-end custom software development tailored to your exact business workflow. We architect robust backend microservices/APIs, responsive frontend interfaces with Tailwind CSS, secure authentication (JWT/OAuth), role-based permissions, and automated database migrations.',
    category: 'Development Services',
    startingPrice: 1400,
    typicalTurnaround: '7 - 21 Days',
    deliverables: [
      'Production-ready Next.js / React + Node.js codebase',
      'PostgreSQL / MongoDB database schema & ORM integration',
      'Secure Authentication, RBAC (Admin, Staff, Customer)',
      'RESTful / GraphQL APIs with comprehensive Swagger/Postman docs',
      'Docker containerization, CI/CD pipeline & Cloud deployment',
      '30 days complimentary post-launch bug fixing & maintenance'
    ],
    tag: 'Enterprise Core'
  },
  {
    id: 'mobile-app-development',
    title: 'Cross-Platform Mobile App (React Native / Flutter)',
    iconName: 'Smartphone',
    shortDesc: 'High-performance iOS & Android mobile apps with offline caching, push notifications, and API synchronization.',
    fullDesc: 'Launch native-grade mobile applications with a unified codebase. We build responsive cross-platform apps using React Native or Flutter, complete with Firebase Auth/FCM notifications, camera/storage device APIs, secure token storage, and REST API synchronization.',
    category: 'Development Services',
    startingPrice: 1600,
    typicalTurnaround: '10 - 20 Days',
    deliverables: [
      'Cross-platform iOS and Android production build packages (APK / IPA)',
      'Clean modular React Native or Flutter codebase with TypeScript/Dart',
      'Push notifications setup (Firebase Cloud Messaging)',
      'Offline data caching & biometric authentication integration',
      'Google Play Console & Apple App Store submission support'
    ],
    tag: 'Mobile App'
  },
  {
    id: 'ai-llm-integration',
    title: 'AI Agent & LLM Chatbot Integration (Gemini / OpenAI / RAG)',
    iconName: 'Cpu',
    shortDesc: 'Custom contextual AI chatbot on your business data, LangChain/Vector DB pipelines, and automated customer workflows.',
    fullDesc: 'Supercharge your platform with conversational generative AI. We integrate Google Gemini or OpenAI LLMs trained on your company knowledge base via Retrieval-Augmented Generation (RAG), Pinecone/pgvector vector stores, token management, function calling, and live streaming web chat widgets.',
    category: 'Development Services',
    startingPrice: 850,
    typicalTurnaround: '4 - 8 Days',
    deliverables: [
      'Custom LLM API pipeline (Gemini / OpenAI / Claude) with rate limiting',
      'Retrieval-Augmented Generation (RAG) vector embeddings on business docs',
      'Embeddable web chat widget with markdown and streaming responses',
      'Structured JSON output extraction for automated CRM data entry',
      'Admin monitoring panel for token usage and conversation logs'
    ],
    tag: 'AI Powered'
  },
  {
    id: 'saas-mvp-sprint',
    title: 'Rapid SaaS MVP Development (Sprint to Launch in 14 Days)',
    iconName: 'Zap',
    shortDesc: 'Launch your startup in 14 days with Next.js, authentication, Stripe/bKash subscription billing, and database CRUD.',
    fullDesc: 'Go from concept to paying customers fast. Designed for startup founders who need a rapid, production-ready MVP. Includes Next.js App Router, Tailwind UI, Supabase / PostgreSQL database, user auth, subscription billing, and email notifications.',
    category: 'Development Services',
    startingPrice: 1800,
    typicalTurnaround: '10 - 14 Days',
    deliverables: [
      'Complete end-to-end MVP web application launched on Vercel/Supabase',
      'User authentication (Email/Password, Google OAuth)',
      'Recurring subscription billing (Stripe / bKash recurring / SSLCommerz)',
      'Core user dashboard with full CRUD data workflows',
      'Transactional email setup (Resend / SendGrid) and analytics tracking'
    ],
    tag: 'Founder Favorite'
  },
  {
    id: 'frontend-engineering-spa',
    title: 'Modern Frontend Web App (React / Next.js / Tailwind)',
    iconName: 'Monitor',
    shortDesc: 'Ultra-fast, responsive, accessible Single Page Applications (SPA) with smooth animations and state management.',
    fullDesc: 'Convert any Figma or design spec into clean, modular, accessible, and ultra-fast React or Next.js code. Fully responsive across ultra-wide desktops to mobile devices, integrated with API hooks, state managers (Zustand/Redux), and smooth motion transitions.',
    category: 'Development Services',
    startingPrice: 750,
    typicalTurnaround: '4 - 8 Days',
    deliverables: [
      'Pixel-perfect translation from Figma / Sketch to React + Tailwind',
      'TypeScript for type safety and clean architecture',
      'Responsive layout across mobile, tablet, and desktop viewports',
      'API client integration (Axios/TanStack Query)',
      'SEO-optimized meta tags, Lighthouse 95+ performance rating'
    ],
    tag: 'Popular'
  },
  {
    id: 'backend-api-architecture',
    title: 'Backend API & Microservices Architecture',
    iconName: 'Server',
    shortDesc: 'Robust RESTful and GraphQL APIs built with Node.js, Express, Fastify, Python, or Go.',
    fullDesc: 'Secure, high-throughput backend APIs designed to scale under heavy traffic. Includes structured database migrations, input sanitization/validation (Zod/Joi), JWT/OAuth2 security, webhook integrations, rate-limiting, and error telemetry.',
    category: 'Development Services',
    startingPrice: 800,
    typicalTurnaround: '3 - 7 Days',
    deliverables: [
      'Modular REST / GraphQL API endpoints with clean routing',
      'Secure authentication & authorization middleware',
      'PostgreSQL / MySQL / Redis caching integration',
      'Postman Collection & interactive OpenAPI/Swagger docs',
      'Automated unit & integration test coverage'
    ]
  },
  {
    id: 'cloud-devops-cicd',
    title: 'Cloud Infrastructure, Docker & CI/CD Pipelines (AWS / GCP / Vercel)',
    iconName: 'Cloud',
    shortDesc: 'Automated GitHub Actions deployments, Docker containerization, Nginx reverse proxy, and cloud scaling.',
    fullDesc: 'Set up reliable, automated cloud environments for your web applications. We configure Docker multi-stage builds, automated testing & deployment pipelines with GitHub Actions, AWS EC2/S3 or GCP Cloud Run hosting, SSL certificate automation, and server monitoring.',
    category: 'Development Services',
    startingPrice: 450,
    typicalTurnaround: '2 - 5 Days',
    deliverables: [
      'Multi-stage optimized Dockerfile and docker-compose configurations',
      'Automated CI/CD pipeline with GitHub Actions (Build, Test, Deploy)',
      'Cloud server deployment (AWS, GCP, DigitalOcean, or Vercel)',
      'Nginx reverse proxy, automatic SSL certificates (Let\'s Encrypt)',
      'Uptime telemetry, automated log rotation, and server alerts'
    ],
    tag: 'DevOps & Cloud'
  },
  {
    id: 'ecommerce-custom-platform',
    title: 'Custom E-Commerce Store & Payment Engine',
    iconName: 'ShoppingBag',
    shortDesc: 'Full-featured online store with inventory management, cart, checkout, and local/global payment gateways.',
    fullDesc: 'Launch an online storefront that converts visitors into customers. Includes product catalogs with multi-variant options, coupon & discount engine, automated order invoicing, customer accounts, and automated integration with bKash, Nagad, SSLCommerz, Stripe, and PayPal.',
    category: 'Development Services',
    startingPrice: 1500,
    typicalTurnaround: '7 - 14 Days',
    deliverables: [
      'Custom storefront with lightning-fast catalog search & filters',
      'Shopping cart & multi-step secure checkout workflow',
      'Payment gateway integrations (bKash, Nagad, SSLCommerz, Stripe)',
      'Merchant admin dashboard for orders, stock & sales analytics',
      'Automated SMS & Email order confirmation notifications'
    ],
    tag: 'E-Commerce'
  },

  // 3. WORDPRESS SOLUTIONS
  {
    id: 'custom-wordpress-dev',
    title: 'Custom WordPress Theme & Site Development',
    iconName: 'Globe',
    shortDesc: 'Tailored WordPress websites, custom PHP/Block themes, Gutenberg blocks, and seamless CMS architectures.',
    fullDesc: 'Ditch bloated third-party themes. We build lightweight, ultra-fast, custom WordPress themes precisely matching your Figma designs. Fully editable from the WP admin without breaking, optimized for Core Web Vitals, and built with modern PHP 8+ and clean modular architecture.',
    category: 'WordPress Services',
    startingPrice: 450,
    typicalTurnaround: '3 - 7 Days',
    deliverables: [
      '100% custom lightweight WordPress theme matching Figma design',
      'Gutenberg / Elementor editable custom section blocks',
      'Mobile-first responsive styling and cross-browser testing',
      'Essential SEO, security & automated backup configuration',
      'Client video walkthrough on how to edit and manage content'
    ],
    tag: 'WordPress Core'
  },
  {
    id: 'figma-to-wordpress',
    title: 'Figma to WordPress / Elementor / Bricks Builder Conversion',
    iconName: 'Layers',
    shortDesc: 'Pixel-perfect conversion of Figma UI designs into clean, editable WordPress pages without bloat.',
    fullDesc: 'Transform your Figma, Adobe XD, or Sketch designs into clean, high-performance WordPress pages using Elementor Pro, Bricks Builder, or Gutenberg blocks. Every layout is 100% responsive, optimized for fast loading, and easy for non-technical team members to edit.',
    category: 'WordPress Services',
    startingPrice: 350,
    typicalTurnaround: '3 - 5 Days',
    deliverables: [
      'Pixel-perfect Figma to WordPress conversion with 100% fidelity',
      'Clean DOM structure without unnecessary wrapper bloat',
      'Fully responsive across mobile, tablet, and widescreen desktops',
      'Global typography and color palette configuration',
      'Basic on-page SEO tags and asset image optimization'
    ],
    tag: 'Pixel Perfect'
  },
  {
    id: 'woocommerce-store-dev',
    title: 'WooCommerce E-Commerce Store & Gateway Setup',
    iconName: 'ShoppingBag',
    shortDesc: 'Turnkey WooCommerce online shops with Bangladeshi & international payment gateways, shipping, and inventory.',
    fullDesc: 'Complete WooCommerce store setup built to drive online sales. Includes product catalog setup, variable attributes, cart & customized checkout pages, coupon systems, and seamless integration with bKash, Nagad, Rocket, SSLCommerz, Pathao/Steadfast couriers, and Stripe.',
    category: 'WordPress Services',
    startingPrice: 600,
    typicalTurnaround: '4 - 9 Days',
    deliverables: [
      'Complete WooCommerce installation, theme & catalog setup',
      'bKash, Nagad, Rocket, Card & Cash on Delivery payment gateways',
      'Courier shipping calculator & order tracking setup',
      'Customized frictionless one-page checkout option',
      'Inventory stock management and low-stock alerts'
    ],
    tag: 'WooCommerce'
  },
  {
    id: 'lms-membership-portal',
    title: 'LMS (E-Learning) & Membership Portal on WordPress',
    iconName: 'GraduationCap',
    shortDesc: 'Complete video course platform, student quizzes, certificates, and recurring membership paywalls.',
    fullDesc: 'Build your own Udemy or Coursera-style e-learning platform or exclusive membership community on WordPress using Tutor LMS, LearnDash, or MemberPress. Includes video security, lesson progression, quizzes, certificates, and bKash/Card payment integrations.',
    category: 'WordPress Services',
    startingPrice: 750,
    typicalTurnaround: '5 - 10 Days',
    deliverables: [
      'Complete LMS setup (Tutor LMS / LearnDash / MemberPress)',
      'Protected video lessons with secure embedding (Vimeo/BunnyCDN/YouTube)',
      'Interactive student quizzes, assignments, and auto-generated certificates',
      'Payment gateway setup (bKash, Nagad, Stripe) for single or subscription courses',
      'Instructor & Student front-end account dashboards'
    ],
    tag: 'EdTech Solution'
  },
  {
    id: 'multivendor-marketplace',
    title: 'Multi-Vendor Marketplace Platform (Dokan / WCFM)',
    iconName: 'ShoppingBag',
    shortDesc: 'Amazon/Daraz-style multi-seller marketplace with vendor dashboards, automated commission splits, and payouts.',
    fullDesc: 'Create a thriving multi-seller e-commerce marketplace using Dokan Pro or WCFM. Vendors can register, upload their own products, manage inventory, and request payout withdrawals, while the platform owner earns automated commission on every sale.',
    category: 'WordPress Services',
    startingPrice: 950,
    typicalTurnaround: '7 - 14 Days',
    deliverables: [
      'Multi-vendor platform setup with Dokan / WCFM on WooCommerce',
      'Dedicated vendor registration, front-end dashboard, and store pages',
      'Automated admin commission deduction per product category or vendor',
      'Vendor payout withdrawal management (bKash, Bank, PayPal)',
      'Customer product reviews and verified seller badges'
    ],
    tag: 'Marketplace'
  },
  {
    id: 'wordpress-speed-security-fix',
    title: 'WordPress Speed Optimization & Security Hardening',
    iconName: 'Zap',
    shortDesc: 'Boost Google PageSpeed scores to 90+, achieve sub-second load times, malware cleanup, and security lockdown.',
    fullDesc: 'Transform slow, vulnerable WordPress websites into lightning-fast, fortress-secure platforms. We optimize databases, minify CSS/JS, configure Redis/LiteSpeed caching, implement WebP image compression, setup Cloudflare CDN, remove malware, and patch security vulnerabilities.',
    category: 'WordPress Services',
    startingPrice: 250,
    typicalTurnaround: '24 - 48 Hours',
    deliverables: [
      'Google PageSpeed score boosted to 90+ (Desktop & Mobile)',
      'Server TTFB (Time to First Byte) under 300ms',
      'Image lossless compression & Next-Gen WebP delivery',
      'Database table cleaning & transient sweep',
      'Firewall configuration, brute-force protection & SSL lockdown'
    ],
    tag: 'Speed & Fix'
  },
  {
    id: 'wordpress-monthly-retainer',
    title: 'WordPress Maintenance, Backup & Security Retainer Support',
    iconName: 'ShieldCheck',
    shortDesc: 'Peace of mind for your WordPress website with weekly updates, cloud backups, 24/7 uptime monitoring & quick fixes.',
    fullDesc: 'Keep your business website always online, updated, and secure. We handle core/plugin/theme updates on staging first to avoid crashes, run daily off-site cloud backups, monitor uptime every 60 seconds, remove security threats, and provide 3 hours of included monthly design/content tweaks.',
    category: 'WordPress Services',
    startingPrice: 199,
    typicalTurnaround: 'Monthly Retainer',
    deliverables: [
      'Weekly safe plugin, theme, and WordPress core updates with staging tests',
      'Daily automated off-site cloud backups (Google Drive / AWS S3)',
      '24/7 uptime monitoring with instant downtime alert response',
      'Continuous security scans, malware cleanup, and firewall protection',
      '3 hours of complimentary content/banner/design adjustments every month'
    ],
    tag: 'Care Plan'
  },

  // 4. DATA ANALYSIS & BI
  {
    id: 'bi-interactive-dashboard',
    title: 'Interactive BI Dashboards (Power BI / Tableau / Streamlit)',
    iconName: 'BarChart2',
    shortDesc: 'Dynamic executive dashboards, real-time KPI trackers, interactive filters, and visual business reporting.',
    fullDesc: 'Turn raw, fragmented business datasets into actionable intelligence. We build intuitive, interactive dashboards in Power BI, Tableau, or Streamlit with dynamic slicers, DAX calculated measures, trend forecasts, executive summary views, and automated refresh pipelines.',
    category: 'Data Analysis',
    startingPrice: 450,
    typicalTurnaround: '3 - 7 Days',
    deliverables: [
      'Interactive Power BI (.pbix) / Tableau workbook / Streamlit app',
      'Complex DAX / Calculated fields and KPI card indicators',
      'Automated scheduled data refresh and source connector setup',
      'Executive summary page with exportable PDF/Excel views',
      'User guide documentation on navigating and filtering insights'
    ],
    tag: 'BI Flagship'
  },
  {
    id: 'ecommerce-rfm-analytics',
    title: 'Customer Analytics & RFM Segmentation for E-Commerce',
    iconName: 'Users',
    shortDesc: 'Customer Lifetime Value (CLV), churn prediction, RFM clustering, and actionable marketing cohorts.',
    fullDesc: 'Identify your most valuable shoppers and stop customer churn. We analyze historical transactions to calculate Recency, Frequency, and Monetary (RFM) scores, Customer Lifetime Value (CLV), repurchase cycles, and produce targeted customer cohorts for email and SMS marketing campaigns.',
    category: 'Data Analysis',
    startingPrice: 500,
    typicalTurnaround: '3 - 6 Days',
    deliverables: [
      'RFM customer segmentation model (Champions, Loyal, At-Risk, Lost)',
      'Customer Lifetime Value (CLV) distribution and cohort retention heatmaps',
      'Actionable customer list exports tagged for Meta Ads and SMS campaigns',
      'Interactive Power BI / Python dashboard for customer segment tracking',
      'Executive summary with 5 high-impact marketing recommendations'
    ],
    tag: 'E-Com Growth'
  },
  {
    id: 'excel-sheets-automation',
    title: 'Automated Reporting & Google Sheets / Excel VBA Automation',
    iconName: 'FileSpreadsheet',
    shortDesc: 'Automate daily manual spreadsheet tasks with custom Apps Script, VBA macros, dynamic formulas, and PDF reports.',
    fullDesc: 'Eliminate hours of repetitive manual data entry. We write robust Google Apps Scripts and Excel VBA macros to automatically import, transform, format, validate, and email PDF reports to management on a daily or weekly schedule.',
    category: 'Data Analysis',
    startingPrice: 250,
    typicalTurnaround: '2 - 4 Days',
    deliverables: [
      'Automated Google Apps Script or Excel VBA macro file (.xlsm / Google Sheet)',
      'One-click data cleanup, consolidation, and PDF report generator',
      'Automated scheduled email dispatch with PDF attachments',
      'Advanced formula architecture (QUERY, INDEX/MATCH, LAMBDA, ARRAYFORMULA)',
      'Video walkthrough demonstrating how the automation runs'
    ],
    tag: 'Fast Automation'
  },
  {
    id: 'financial-sales-forecasting',
    title: 'Financial Modeling, Sales Forecasting & Valuation Dashboards',
    iconName: 'TrendingUp',
    shortDesc: 'Dynamic financial 3-statement models, runway burn rate, scenario simulations, and valuation decks.',
    fullDesc: 'Build clean, transparent financial projections for startup fundraising or corporate budgeting. Includes connected 3-statement models (P&L, Balance Sheet, Cash Flow), dynamic scenario toggles (Best/Base/Worst case), runway burn analysis, and valuation benchmarks.',
    category: 'Data Analysis',
    startingPrice: 600,
    typicalTurnaround: '4 - 8 Days',
    deliverables: [
      'Dynamic 3-statement financial projection model in Excel / Google Sheets',
      'Scenario analysis toggle (Base, Conservative, Aggressive revenue cases)',
      'Cash flow runway tracker and monthly burn rate visual charts',
      'Discounted Cash Flow (DCF) & revenue multiple valuation summaries',
      'Investor-ready executive summary sheet with key SaaS/unit metrics'
    ],
    tag: 'Finance & CFO'
  },
  {
    id: 'nlp-sentiment-analytics',
    title: 'NLP & Customer Feedback Sentiment Intelligence',
    iconName: 'MessageSquare',
    shortDesc: 'Automated sentiment scoring on product reviews, support tickets, and social mentions with BERT/Python.',
    fullDesc: 'Mine unstructured customer text to uncover what your users really think. Using Natural Language Processing (BERT, VADER, RoBERTa), we scrape, clean, and classify thousands of customer reviews or support transcripts to highlight product pain points, sentiment trends, and feature requests.',
    category: 'Data Analysis',
    startingPrice: 450,
    typicalTurnaround: '3 - 6 Days',
    deliverables: [
      'Cleaned NLP dataset with positive, neutral, and negative sentiment scores',
      'Topic modeling (LDA / BERTopic) identifying key customer complaint themes',
      'Interactive visual sentiment trends over time with WordClouds and heatmaps',
      'Documented Python Jupyter Notebook (.ipynb) with complete NLP pipeline',
      'Executive action report on key product and customer experience issues'
    ],
    tag: 'NLP & Text AI'
  },
  {
    id: 'eda-statistical-modeling',
    title: 'Exploratory Data Analysis (EDA) & Statistical Insights',
    iconName: 'TrendingUp',
    shortDesc: 'In-depth Python/R statistical analysis, data cleaning, correlation matrices, and comprehensive insight reports.',
    fullDesc: 'Deep-dive statistical analysis on your company or survey datasets. We clean messy raw data, handle outliers and missing values, perform hypothesis testing, build correlation distributions, and deliver clear visual conclusions with Jupyter Notebooks and executive summaries.',
    category: 'Data Analysis',
    startingPrice: 350,
    typicalTurnaround: '3 - 6 Days',
    deliverables: [
      'Cleaned, normalized dataset (CSV, XLSX, SQL dump)',
      'Documented Jupyter Notebook (.ipynb) with Python (Pandas/Seaborn/Plotly)',
      'Statistical distribution charts, heatmaps & correlation analysis',
      'Executive insights presentation summarizing actionable findings',
      'Reproducible clean data processing scripts'
    ]
  },
  {
    id: 'ml-predictive-modeling',
    title: 'Machine Learning & Predictive Analytics Pipeline',
    iconName: 'Cpu',
    shortDesc: 'Custom ML models for customer churn, sales forecasting, classification, NLP, and automated prediction APIs.',
    fullDesc: 'Leverage machine learning to predict business outcomes. We engineer features, train and benchmark classification/regression models (Scikit-Learn, XGBoost, TensorFlow, PyTorch), evaluate ROC-AUC/RMSE metrics, and deploy lightweight inference APIs (FastAPI/Flask).',
    category: 'Data Analysis',
    startingPrice: 850,
    typicalTurnaround: '5 - 10 Days',
    deliverables: [
      'Trained and validated ML model (.pkl / .onnx / .h5)',
      'Feature importance analysis & model explainability (SHAP values)',
      'Model performance benchmarking report (Accuracy, Precision, Recall, F1)',
      'FastAPI / Flask endpoint for live real-time prediction queries',
      'Complete training pipeline & Docker configuration'
    ],
    tag: 'Advanced AI'
  },
  {
    id: 'web-scraping-etl-automation',
    title: 'Web Scraping & Automated ETL Pipelines',
    iconName: 'Database',
    shortDesc: 'Automated data extraction from complex websites, APIs, PDF reports into clean structured databases.',
    fullDesc: 'Extract high-value market, pricing, lead, and competitor data at scale. Using Python (Scrapy, Playwright, BeautifulSoup, Selenium), we build robust scrapers with proxy rotation, anti-bot bypass, data validation, and automated exports into PostgreSQL, MongoDB, or Google Sheets.',
    category: 'Data Analysis',
    startingPrice: 300,
    typicalTurnaround: '2 - 4 Days',
    deliverables: [
      'Structured, deduplicated dataset in CSV, JSON, or SQL format',
      'Automated scraping script with error handling & retry logic',
      'Proxy rotation & pagination handling for large-scale data pulls',
      'Scheduled cron job or cloud trigger setup (AWS Lambda / GitHub Actions)',
      'Comprehensive documentation on running and scaling the scraper'
    ]
  }
];

export const PROBLEM_TRIGGERS: ProblemTrigger[] = [
  {
    id: 'triage-1',
    text: 'I need a modern SaaS web app or custom frontend in React / Next.js',
    serviceId: 'custom-fullstack-webapp',
    icon: 'Code',
    description: 'Scalable full-stack web engineering, clean TypeScript code, responsive Tailwind design, and database architecture.',
    defaultCourse: 'Full-Stack Web App',
    defaultExpectation: 'Production-ready web application with authentication and cloud deployment'
  },
  {
    id: 'triage-mobile-app',
    text: 'I need a cross-platform mobile app (iOS & Android)',
    serviceId: 'mobile-app-development',
    icon: 'Smartphone',
    description: 'Native-feel mobile apps built with React Native or Flutter, push notifications, and backend API integration.',
    defaultCourse: 'Cross-Platform Mobile App',
    defaultExpectation: 'Production build APK/IPA packages with Firebase notifications and store submission setup'
  },
  {
    id: 'triage-ai-llm',
    text: 'I want to integrate an AI agent or LLM chatbot (Gemini / OpenAI)',
    serviceId: 'ai-llm-integration',
    icon: 'Cpu',
    description: 'RAG on company documents, conversational customer support bot, and automated generative workflows.',
    defaultCourse: 'AI Agent & LLM Chatbot Integration',
    defaultExpectation: 'Embeddable web chat widget trained on custom data with API rate-limiting'
  },
  {
    id: 'triage-2',
    text: 'I need high-converting UI/UX design & interactive Figma prototypes',
    serviceId: 'ui-ux-design',
    icon: 'Layout',
    description: 'Pixel-perfect mobile & web interfaces, design tokens, clickable user flows, and developer handoff specs.',
    defaultCourse: 'UI/UX Product Design',
    defaultExpectation: 'Interactive Figma prototype with responsive layouts and component library'
  },
  {
    id: 'triage-mobile-ui',
    text: 'I need native mobile app UI/UX design (iOS & Android)',
    serviceId: 'mobile-app-uiux',
    icon: 'Smartphone',
    description: 'Apple Human Interface & Material 3 designs, thumb flows, micro-interactions, and 15-30+ screens.',
    defaultCourse: 'Mobile App UI/UX Design',
    defaultExpectation: 'Figma prototype with responsive mobile layouts and developer asset specs'
  },
  {
    id: 'triage-saas-mvp',
    text: 'I need to rapidly launch a SaaS MVP in 14 days',
    serviceId: 'saas-mvp-sprint',
    icon: 'Zap',
    description: 'Next.js App Router + Supabase + Stripe/bKash billing + Auth launched quickly for paying users.',
    defaultCourse: 'Rapid SaaS MVP Sprint',
    defaultExpectation: 'Live deployed web application ready to accept paying subscribers'
  },
  {
    id: 'triage-3',
    text: 'I need a fast WordPress website or WooCommerce online store',
    serviceId: 'custom-wordpress-dev',
    icon: 'Globe',
    description: 'Custom theme coding, WooCommerce checkout setup, bKash/Nagad payment gateways, and 90+ PageSpeed score.',
    defaultCourse: 'WordPress / WooCommerce Website',
    defaultExpectation: 'Custom WordPress site with easy content editing and mobile responsiveness'
  },
  {
    id: 'triage-figma-wp',
    text: 'I want to convert my Figma design into WordPress / Elementor / Bricks',
    serviceId: 'figma-to-wordpress',
    icon: 'Layers',
    description: 'Pixel-perfect conversion with clean DOM, fast loading speed, and easy visual content editing.',
    defaultCourse: 'Figma to WordPress Conversion',
    defaultExpectation: '100% pixel-perfect responsive WordPress website matching Figma designs'
  },
  {
    id: 'triage-lms-platform',
    text: 'I want an online course (LMS) or membership site on WordPress',
    serviceId: 'lms-membership-portal',
    icon: 'GraduationCap',
    description: 'Video courses, quizzes, certificates, and recurring subscription paywalls with local payment gateways.',
    defaultCourse: 'LMS E-Learning & Membership Platform',
    defaultExpectation: 'Complete LMS platform with protected video lessons and bKash/Card payments'
  },
  {
    id: 'triage-wp-speed',
    text: 'My WordPress site is slow or needs speed optimization and security',
    serviceId: 'wordpress-speed-security-fix',
    icon: 'Zap',
    description: 'Sub-second load times, Core Web Vitals optimization, database cleaning, CDN, and malware removal.',
    defaultCourse: 'WordPress Speed & Security Optimization',
    defaultExpectation: 'Google PageSpeed 90+ score and complete security lockdown'
  },
  {
    id: 'triage-4',
    text: 'I need Power BI / Tableau dashboards or business data analytics',
    serviceId: 'bi-interactive-dashboard',
    icon: 'BarChart2',
    description: 'Transform complex raw data into interactive KPI dashboards, trend forecasting, and executive reporting.',
    defaultCourse: 'Business Intelligence Dashboard',
    defaultExpectation: 'Interactive Power BI / Tableau workbook with DAX measures and automated refresh'
  },
  {
    id: 'triage-rfm-analytics',
    text: 'I need e-commerce customer analytics & RFM segmentation',
    serviceId: 'ecommerce-rfm-analytics',
    icon: 'Users',
    description: 'Customer Lifetime Value (CLV), churn prevention, RFM clustering, and marketing cohorts.',
    defaultCourse: 'Customer RFM Analytics',
    defaultExpectation: 'Customer segment cohorts with actionable insights for retargeting campaigns'
  },
  {
    id: 'triage-sheets-automation',
    text: 'I want to automate Google Sheets / Excel reports with Apps Script / VBA',
    serviceId: 'excel-sheets-automation',
    icon: 'FileSpreadsheet',
    description: 'One-click data cleanup, automated daily PDF report emails, and advanced formula modeling.',
    defaultCourse: 'Excel / Google Sheets Automation',
    defaultExpectation: 'Automated spreadsheet script eliminating manual repetitive data entry'
  },
  {
    id: 'triage-5',
    text: 'I need machine learning models, Python data science, or web scraping',
    serviceId: 'ml-predictive-modeling',
    icon: 'Cpu',
    description: 'Predictive analytics, statistical distributions, customer segmentation, and automated data extraction.',
    defaultCourse: 'Data Science & Machine Learning',
    defaultExpectation: 'Jupyter Notebook with cleaned data, trained model, and evaluation report'
  }
];

export const MOCK_MENTORS: Mentor[] = [
  {
    id: 'lead-eng-1',
    name: 'Md. Ahsanur Rahaman',
    email: 'ahsanur@kraflyn.com',
    phone: '+880 1712-345678',
    whatsapp: '+880 1712-345678',
    roleTitle: 'Co-Founder & Lead Full-Stack Architect',
    roleTitleEn: 'Co-Founder & Lead Full-Stack Architect',
    roleTitleBn: 'কো-ফাউন্ডার ও লিড ফুল-স্ট্যাক আর্কিটেক্ট',
    companyOrOrg: 'Kraflyn Technologies',
    domain: 'Full-Stack Web Engineering',
    expertise: ['React', 'Next.js 14', 'TypeScript', 'Node.js', 'PostgreSQL', 'Cloud Infrastructure', 'System Architecture', 'REST & GraphQL APIs'],
    skills: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Docker', 'AWS', 'Tailwind CSS'],
    experience: '6+ Years in Enterprise Web Engineering',
    qualification: 'B.Sc. in Computer Science & Engineering',
    availableTime: 'Full Time (24/7 Priority Lead)',
    rating: 5.0,
    completedProjects: 98,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    bio: 'Lead architect directing large-scale SaaS platforms, React ecosystems, and database schemas with extreme focus on code maintainability and performance.',
    bioEn: 'Architecting scalable web applications, microservices, and enterprise cloud solutions with clean code, sub-second latency, and rock-solid reliability.',
    bioBn: 'স্কেলেবল ওয়েব অ্যাপ্লিকেশন, মাইক্রোসার্ভিস এবং ক্লাউড আর্কিটেকচার পরিচালনায় অভিজ্ঞ। ক্লিন কোড ও পারফরম্যান্স-ফার্স্ট ইঞ্জিনিয়ারিংয়ের বিশেষজ্ঞ।',
    achievements: ['98+ Production Web Apps Delivered', '100% On-Time Sprint Record', 'Top Rated Technology Lead'],
    badge: 'Co-Founder & Lead Architect',
    featured: true,
    location: 'Dhaka, Bangladesh',
    github: 'https://github.com/kraflyn',
    linkedIn: 'https://linkedin.com/company/kraflyn-tech',
    portfolio: 'https://kraflyn.com'
  },
  {
    id: 'lead-ds-1',
    name: 'Md. Masjidul Islam',
    email: 'masjidul@kraflyn.com',
    phone: '+880 1611-778899',
    whatsapp: '+880 1611-778899',
    roleTitle: 'Lead Data Scientist & AI Systems Specialist',
    roleTitleEn: 'Lead Data Scientist & AI Systems Specialist',
    roleTitleBn: 'লিড ডাটা সায়েন্টিস্ট ও এআই সিস্টেমস স্পেশালিস্ট',
    companyOrOrg: 'Kraflyn Technologies',
    domain: 'Data Analysis & BI',
    expertise: ['Power BI', 'Tableau', 'Python', 'Pandas', 'Machine Learning', 'SQL Analytics', 'ETL Pipelines', 'Statistical Modeling', 'DAX Calculations'],
    skills: ['Power BI', 'Python', 'Tableau', 'SQL Server', 'Pandas', 'Scikit-Learn', 'ETL Pipelines', 'DAX'],
    experience: '5+ Years in Data Analytics & AI Modeling',
    qualification: 'M.Sc. in Data Science & Applied Statistics',
    availableTime: '11:00 AM - 9:00 PM',
    rating: 4.98,
    completedProjects: 85,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    bio: 'Transforms complex business data into executive Power BI/Tableau dashboards, automated ETL pipelines, and predictive ML models for measurable business growth.',
    bioEn: 'Empowering C-level executives with real-time business intelligence dashboards, automated reporting pipelines, and predictive statistical analytics.',
    bioBn: 'বিজনেস ডাটাকে রূপান্তর করে এক্সিকিউটিভ Power BI ও Tableau ড্যাশবোর্ড এবং প্রেডিক্টিভ অ্যানালিটিক্যাল মডেল তৈরি করেন।',
    achievements: ['85+ Enterprise BI Dashboards Delivered', 'Published AI Researcher', 'Automated 100+ Data Pipelines'],
    badge: 'Data Intelligence Lead',
    featured: true,
    location: 'Dhaka, Bangladesh',
    linkedIn: 'https://linkedin.com/company/kraflyn-tech',
    github: 'https://github.com/kraflyn'
  },
  {
    id: 'lead-wp-1',
    name: 'Md. Atikur Rahman',
    email: 'atikur@kraflyn.com',
    phone: '+880 1933-445566',
    whatsapp: '+880 1933-445566',
    roleTitle: 'Senior Web Architect & CMS Specialist',
    roleTitleEn: 'Senior Web Architect & CMS Specialist',
    roleTitleBn: 'সিনিয়র ওয়েব আর্কিটেক্ট ও সিএমএস স্পেশালিস্ট',
    companyOrOrg: 'Kraflyn Technologies',
    domain: 'WordPress Solutions',
    expertise: ['Custom WordPress', 'PHP 8', 'WooCommerce', 'Payment Gateways', 'Speed Optimization', 'Security Hardening', 'Gutenberg Blocks', 'Database Tuning'],
    skills: ['WordPress', 'PHP 8.2', 'WooCommerce', 'Payment Gateways', 'MySQL', 'Redis Cache', 'REST API'],
    experience: '5+ Years in CMS & Store Architecture',
    qualification: 'B.Sc. in Software Engineering',
    availableTime: '12:00 PM - 10:00 PM',
    rating: 4.97,
    completedProjects: 92,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    bio: 'Expert in developing lightweight custom WordPress themes, WooCommerce stores with international & local payment gateways, and sub-second speed optimization.',
    bioEn: 'Building ultra-fast WooCommerce platforms, custom PHP theme architectures, and robust security setups with zero reliance on bloated page-builders.',
    bioBn: 'কাস্টম পিএইচপি ৮ ওয়ার্ডপ্রেস থিম, দ্রুতগতির ই-কমার্স স্টোর এবং পেমেন্ট গেটওয়ে ইন্টিগ্রেশনে ৫+ বছরের অভিজ্ঞতা।',
    achievements: ['90+ Live WooCommerce Stores', '95+ Google PageSpeed Score Specialist', 'Zero Security Breach Record'],
    badge: 'WordPress & CMS Lead',
    featured: true,
    location: 'Dhaka, Bangladesh',
    github: 'https://github.com/kraflyn',
    linkedIn: 'https://linkedin.com/company/kraflyn-tech'
  },
  {
    id: 'lead-des-1',
    name: 'Mst. Somaiya Alom Asha',
    email: 'somaiya@kraflyn.com',
    phone: '+880 1822-998877',
    whatsapp: '+880 1822-998877',
    roleTitle: 'Lead UI/UX Designer & Product Strategist',
    roleTitleEn: 'Lead UI/UX Designer & Product Strategist',
    roleTitleBn: 'লিড UI/UX ডিজাইনার ও প্রোডাক্ট স্ট্র্যাটেজিস্ট',
    companyOrOrg: 'Kraflyn Technologies',
    domain: 'Design & UI/UX',
    expertise: ['Figma', 'UI/UX Design', 'Design Systems', 'Mobile App UX', 'Brand Identity', 'Design Tokens', 'Micro-interactions', 'User Research'],
    skills: ['Figma', 'Design Systems', 'Auto-Layout 5.0', 'Wireframing', 'Prototyping', 'Design Tokens', 'Adobe CC'],
    experience: '5+ Years in Digital Product Design',
    qualification: 'B.Des in Product Design & Multimedia',
    availableTime: '10:00 AM - 8:00 PM',
    rating: 4.99,
    completedProjects: 89,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    bio: 'Specialist in crafting high-conversion landing pages, complex SaaS web app interfaces, and cohesive design systems that bridge visual aesthetics with intuitive functionality.',
    bioEn: 'Crafting user-centered interfaces, scalable Figma component libraries, and interactive SaaS prototypes that convert visitors into loyal customers.',
    bioBn: 'উচ্চ রূপান্তরশীল ল্যান্ডিং পেজ, জটিল SaaS অ্যাপ্লিকেশন ইন্টারফেস এবং আধুনিক ফিগমা ডিজাইন সিস্টেম তৈরিতে পারদর্শী।',
    achievements: ['85+ Figma Prototypes Delivered', 'Red Dot Design Recognition', '8 Complete Design Systems Built'],
    badge: 'Design & Strategy Lead',
    featured: true,
    location: 'Dhaka, Bangladesh',
    linkedIn: 'https://linkedin.com/company/kraflyn-tech',
    portfolio: 'https://figma.com/@kraflyn'
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    clientName: 'Mahmudur Rahman',
    companyOrOrg: 'Apex Logistics & Freight',
    serviceTitle: 'Custom Full-Stack Web Application',
    rating: 5,
    comment: 'Kraflyn Technologies developed our real-time shipment dispatch portal using Next.js and PostgreSQL. The code quality is top-notch, delivery was 3 days ahead of deadline, and the UI is incredibly snappy.',
    date: '2026-08-18',
    impactOutcome: '10x Faster Dispatch & Zero Downtime',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-2',
    clientName: 'Sarah Jenkins',
    companyOrOrg: 'Aura Skincare Inc.',
    serviceTitle: 'WooCommerce E-Commerce Store & Gateway Setup',
    rating: 5,
    comment: 'Our online store conversion rate jumped by 42% after Kraflyn redesigned and rebuilt our WooCommerce site. Payment integration with bKash and Stripe worked seamlessly right out of the box!',
    date: '2026-08-14',
    impactOutcome: '+42% Sales Conversion Rate',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-3',
    clientName: 'Tanvir Chowdhury',
    companyOrOrg: 'Finova Insights Ltd.',
    serviceTitle: 'Interactive BI Dashboards (Power BI)',
    rating: 5,
    comment: 'The Power BI dashboard built by Dr. Ariful gave our executive board instant visibility across 8 regional branches. Complex DAX calculations and automated data refresh are working flawlessly.',
    date: '2026-08-10',
    impactOutcome: 'Real-time Executive Visibility',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-4',
    clientName: 'Nusrat Jahan',
    companyOrOrg: 'TechBridge Ventures',
    serviceTitle: 'UI/UX Design for Web & Mobile Apps',
    rating: 5,
    comment: 'Tasnim and the design team delivered a complete Figma design system for our SaaS platform with 25+ responsive screens. Clean auto-layouts, dark mode tokens, and pristine prototypes.',
    date: '2026-08-04',
    impactOutcome: 'Investor Seed Funding Secured',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-5',
    clientName: 'Rafiqul Islam',
    companyOrOrg: 'Daily Bangla News Portal',
    serviceTitle: 'WordPress Speed Optimization & Security Hardening',
    rating: 5,
    comment: 'Our news portal was suffering from 6-second load times under high traffic. Kraflyn optimized the database and caching, bringing load time down to 0.7 seconds with a 98 PageSpeed score!',
    date: '2026-07-29',
    impactOutcome: '98 Google PageSpeed Score',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80'
  }
];

export const MOCK_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'PulseFlow - Enterprise Cloud SaaS CRM & Billing Platform',
    category: 'Full-Stack Web',
    clientOrStudentName: 'PulseFlow Global',
    studentOrClient: 'PulseFlow Global',
    universityOrOrg: 'SaaS & Cloud Platforms',
    description: 'Comprehensive multi-tenant SaaS application featuring real-time client billing, recurring subscription engine, dynamic permission tiers, and automated analytics dashboard.',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma ORM', 'Stripe Billing', 'Docker'],
    deliverables: ['Full Source Code Repository', 'Automated CI/CD Pipeline', 'Swagger API Documentation', 'Docker Production Compose'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    liveDemoUrl: 'https://pulseflow-demo.kraflyn.app',
    liveUrl: 'https://pulseflow-demo.kraflyn.app',
    githubUrl: 'https://github.com/kraflyn/pulseflow-saas',
    featured: true,
    completionDate: '2026-08-15',
    rating: 5,
    gradeOutcome: 'Production Ready & Scaled to 50k Users',
    price: 3500,
    createdAt: '2026-08-15T10:00:00Z'
  },
  {
    id: 'proj-2',
    title: 'NovaPay - FinTech Mobile & Web Banking UI/UX Design System',
    category: 'Design & UI/UX',
    clientOrStudentName: 'NovaPay Technologies',
    studentOrClient: 'NovaPay Technologies',
    universityOrOrg: 'FinTech & Banking',
    description: 'End-to-end design system and interactive prototype for modern digital banking. 40+ high-fidelity mobile and desktop screens with custom auto-layout components and micro-interactions.',
    technologies: ['Figma', 'Design Systems', 'Auto-Layout 5.0', 'Prototyping', 'Design Tokens'],
    deliverables: ['Complete Figma Source File', 'Component Library & Tokens', 'Clickable Flow Prototype', 'Developer Asset Kit'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
    liveDemoUrl: 'https://figma.com/@kraflyn/novapay-ui',
    liveUrl: 'https://figma.com/@kraflyn/novapay-ui',
    featured: true,
    completionDate: '2026-08-12',
    rating: 5,
    gradeOutcome: 'Secured $1.2M Pre-Seed Funding',
    price: 1200,
    createdAt: '2026-08-12T14:00:00Z'
  },
  {
    id: 'proj-3',
    title: 'Aura Luxe - High-Conversion WooCommerce E-Commerce Portal',
    category: 'WordPress Solutions',
    clientOrStudentName: 'Aura Lifestyle Brand',
    studentOrClient: 'Aura Lifestyle Brand',
    universityOrOrg: 'E-Commerce & Retail',
    description: 'Custom-coded WooCommerce online store featuring instant AJAX cart, bKash and Nagad payment gateway integrations, automated courier shipping sync, and sub-second load times.',
    technologies: ['WordPress', 'WooCommerce', 'PHP 8.2', 'bKash Gateway', 'Redis Caching', 'Tailwind CSS'],
    deliverables: ['Custom WP Theme Files', 'Payment & Courier Setup', 'Admin Inventory Guide', 'Security Lockdown'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    liveDemoUrl: 'https://auraluxe-demo.kraflyn.app',
    liveUrl: 'https://auraluxe-demo.kraflyn.app',
    featured: true,
    completionDate: '2026-08-08',
    rating: 5,
    gradeOutcome: '99 Google PageSpeed & +38% Sales',
    price: 1400,
    createdAt: '2026-08-08T09:00:00Z'
  },
  {
    id: 'proj-4',
    title: 'OmniBI - Retail Sales & Supply Chain Intelligence Dashboard',
    category: 'Data Analysis & BI',
    clientOrStudentName: 'Omni Retail Holdings',
    studentOrClient: 'Omni Retail Holdings',
    universityOrOrg: 'Logistics & Supply Chain',
    description: 'Interactive Power BI and Python data pipeline connecting 14 warehouse inventories with live sales telemetry, predictive stockout forecasting, and regional KPI heatmaps.',
    technologies: ['Power BI', 'Python', 'Pandas', 'DAX Measures', 'SQL Data Warehouse', 'Streamlit'],
    deliverables: ['Power BI Workbook (.pbix)', 'Automated ETL Pipeline Script', 'Executive Summary Report', 'SQL Schema'],
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    liveDemoUrl: 'https://app.powerbi.com/view?demo=kraflyn-omnibi',
    liveUrl: 'https://app.powerbi.com/view?demo=kraflyn-omnibi',
    featured: true,
    completionDate: '2026-08-02',
    rating: 5,
    gradeOutcome: 'Reduced Stockouts by 28%',
    price: 1100,
    createdAt: '2026-08-02T16:00:00Z'
  },
  {
    id: 'proj-5',
    title: 'MedLink - Telemedicine & Real-time Doctor Booking App',
    category: 'Full-Stack Web',
    clientOrStudentName: 'MedLink Health Group',
    studentOrClient: 'MedLink Health Group',
    universityOrOrg: 'HealthTech & Medical',
    description: 'HIPAA-compliant web platform for telemedicine video consultations, electronic health record (EHR) management, automated prescription generation, and appointment scheduling.',
    technologies: ['React 18', 'Node.js', 'Express', 'WebRTC Video', 'MongoDB', 'Socket.io', 'Tailwind'],
    deliverables: ['Complete Web App Codebase', 'WebRTC Signaling Server', 'API Security Audit Report', 'Production Deployment'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    liveDemoUrl: 'https://medlink-demo.kraflyn.app',
    liveUrl: 'https://medlink-demo.kraflyn.app',
    featured: false,
    completionDate: '2026-07-24',
    rating: 5,
    gradeOutcome: 'Serving 15,000+ Active Patients',
    price: 2800,
    createdAt: '2026-07-24T11:00:00Z'
  },
  {
    id: 'proj-6',
    title: 'Apex Global Brand Identity & Executive Style Guide',
    category: 'Design & UI/UX',
    clientOrStudentName: 'Apex Advisory Partners',
    studentOrClient: 'Apex Advisory Partners',
    universityOrOrg: 'Corporate Enterprise',
    description: 'Complete corporate visual rebrand including 3D vector logo mark, custom typography pairing, executive presentation templates, stationery pack, and digital marketing design kit.',
    technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Typography Master'],
    deliverables: ['Vector AI/EPS/SVG Assets', 'Brand Guidelines Book (PDF)', 'Keynote / PPT Master Deck', 'Social Media Kit'],
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    featured: false,
    completionDate: '2026-07-18',
    rating: 5,
    gradeOutcome: 'Launched across 4 Global Offices',
    price: 650,
    createdAt: '2026-07-18T13:30:00Z'
  }
];

export const INITIAL_ORDERS: AcademicOrder[] = [
  {
    id: 'KT-ORD-2026-8841',
    customerName: 'Md. Ahsanur Rahaman',
    phone: '01712345678',
    whatsapp: '01712345678',
    email: 'client@technovate.com',
    companyOrOrg: 'Technovate Solutions Ltd.',
    industry: 'SaaS & Cloud Platforms',
    courseName: 'Custom Full-Stack SaaS Web Application',
    projectTitle: 'Next.js SaaS Analytics & Client Portal',
    techStack: 'Next.js 14, Tailwind CSS, PostgreSQL, Prisma, Auth',
    requirements: 'We require an enterprise client portal with multi-tenant permissions, billing dashboard, and webhook integrations.',
    deadline: '2026-09-10',
    totalAmount: 1700,
    items: [
      {
        id: 'item-1',
        serviceId: 'custom-fullstack-webapp',
        serviceTitle: 'Custom Full-Stack Web Application',
        category: 'Development Services',
        basePrice: 1400,
        packageTier: 'Dedicated Enterprise',
        urgencyFee: 300,
        totalPrice: 1700,
        projectScope: 'Next.js SaaS Portal + PostgreSQL Backend',
        quantity: 1
      }
    ],
    preferredContact: 'WhatsApp',
    attachments: [],
    status: 'in_progress',
    assignedMentorName: 'Md. Ahsanur Rahaman',
    assignedSpecialistName: 'Md. Ahsanur Rahaman',
    createdAt: '2026-08-25T14:30:00Z',
    updatedAt: '2026-08-26T08:00:00Z',
    notes: [
      'Project kick-off call completed via Google Meet.',
      'Figma wireframe review approved. Database architecture setup in progress.'
    ]
  },
  {
    id: 'KT-ORD-2026-8842',
    customerName: 'Amina Khatun',
    phone: '01898765432',
    whatsapp: '01898765432',
    email: 'amina@auraretail.com',
    companyOrOrg: 'Aura Lifestyle Store',
    industry: 'E-Commerce & Retail',
    courseName: 'WooCommerce Store & Payment Setup',
    projectTitle: 'E-Commerce Online Fashion Store',
    techStack: 'WordPress, WooCommerce, Stripe, PayPal, SSLCommerz',
    requirements: 'Setup complete WooCommerce shop with international checkout and courier shipping tracking.',
    deadline: '2026-09-02',
    totalAmount: 750,
    items: [
      {
        id: 'item-2',
        serviceId: 'woocommerce-store-dev',
        serviceTitle: 'WooCommerce E-Commerce Store & Gateway Setup',
        category: 'WordPress Services',
        basePrice: 600,
        packageTier: 'Priority Sprint',
        urgencyFee: 150,
        totalPrice: 750,
        projectScope: 'WooCommerce Store + Global Gateways',
        quantity: 1
      }
    ],
    preferredContact: 'WhatsApp',
    attachments: [],
    status: 'mentor_assigned',
    assignedMentorName: 'Md. Atikur Rahman',
    assignedSpecialistName: 'Md. Atikur Rahman',
    createdAt: '2026-08-26T05:00:00Z',
    updatedAt: '2026-08-26T06:30:00Z',
    notes: [
      'Specialist assigned. Payment gateway credentials received and verified.'
    ]
  },
  {
    id: 'KT-ORD-2026-8843',
    customerName: 'Zubair Al Mahmud',
    phone: '01755667788',
    whatsapp: '01755667788',
    email: 'zubair@dataspark.io',
    companyOrOrg: 'DataSpark Analytics',
    industry: 'FinTech & Banking',
    courseName: 'Interactive Power BI Dashboard',
    projectTitle: 'Executive Financial KPIs & Sales Dashboard',
    techStack: 'Power BI, DAX, Python, SQL Warehouse',
    requirements: 'Build interactive executive dashboard displaying quarterly branch performance, revenue variance, and customer acquisition metrics.',
    deadline: '2026-09-05',
    totalAmount: 600,
    items: [
      {
        id: 'item-3',
        serviceId: 'bi-interactive-dashboard',
        serviceTitle: 'Interactive BI Dashboards (Power BI)',
        category: 'Data Analysis',
        basePrice: 450,
        packageTier: 'Priority Sprint',
        urgencyFee: 150,
        totalPrice: 600,
        projectScope: 'Multi-Tab Power BI Financial Dashboard',
        quantity: 1
      }
    ],
    preferredContact: 'WhatsApp',
    attachments: [],
    status: 'order_received',
    createdAt: '2026-08-26T06:15:00Z',
    updatedAt: '2026-08-26T06:15:00Z',
    notes: [
      'New project inquiry submitted. Assigning Md. Masjidul Islam for data review.'
    ]
  }
];

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  notice: {
    enabled: true,
    badge: '🚀 NEW CLIENT SPRINT OFFER',
    text: 'Claim 15% discount on all Full-Stack Web Development, UI/UX Design & Data Analytics projects this month! Use code: KRAFLYN15',
    messageEn: 'Claim 15% discount on all Full-Stack Web Development, UI/UX Design & Data Analytics projects this month! Use code: KRAFLYN15',
    messageBn: 'চলতি মাসে সকল ওয়েব ডেভেলপমেন্ট, UI/UX ডিজাইন ও ডাটা অ্যানালাইসিস প্রজেক্টে ১৫% বিশেষ ছাড়! প্রোমোকোড: KRAFLYN15',
    type: 'promo',
    linkText: 'Explore Services',
    linkUrl: '#services',
    actionText: 'Explore Services',
    actionLink: '#services',
    discountCode: 'KRAFLYN15',
    discountPercent: 15
  },
  whatsappNumber: '+880 1712-345678',
  helplinePhone: '+880 1712-345678',
  supportEmail: 'contact@kraflyn.com',
  officeLocation: 'Dhaka & Rajshahi, Bangladesh (Global Remote 24/7)',
  facebookUrl: 'https://facebook.com/kraflyntechnologies',
  telegramUrl: 'https://t.me/kraflyntech',
  isOrderingPaused: false,
  pauseNoticeText: 'Development sprints are running at full velocity. Direct WhatsApp consultation is open 24/7.',
  heroStats: {
    totalProjectsCompleted: 350,
    completedProjects: 350,
    satisfactionRate: 99.8,
    successRate: 99.8,
    partnerUniversities: 100,
    activeMentors: 12,
    happyStudents: 350
  },
  socialLinks: {
    facebook: 'https://facebook.com/kraflyntechnologies',
    whatsapp: '+880 1712-345678',
    telegram: 'https://t.me/kraflyntech',
    github: 'https://github.com/kraflyn',
    linkedin: 'https://linkedin.com/company/kraflyn-technologies',
    youtube: 'https://youtube.com/@kraflyntech'
  }
};

export const REVIEWS = MOCK_REVIEWS;
export const INITIAL_PROJECTS = MOCK_PROJECTS;
export const PROJECTS_SHOWCASE = MOCK_PROJECTS;
