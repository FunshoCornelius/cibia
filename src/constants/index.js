import {
  BadgeCheck,
  BarChart4,
  GraduationCap,
  ShieldCheck,
  BookOpen,
  TrendingUp,
  Award,
  Users,
  BarChart3,
  Target,
  Globe,
  Briefcase,
  Code,
  Activity,
  Building,
  Trophy,
} from "lucide-react";

export const routes = [
  {
    text: "About CIBIA",
    href: "/about",
  },
  {
    text: "Membership",
    href: "/membership",
  },
  {
    text: "Certifications",
    href: "/certifications",
  },
  {
    text: "Qualifications",
    href: "/qualifications",
  },
  {
    text: "Portal",
    href: "/portal",
  },
  {
    text: "Resources",
    href: "/resources",
  },
];

export const ValuableInfosArr = [
  {
    title: "Membership",
    description:
      "The Chartered Institute of Business Intelligence and Analytics will provide you with the necessary tools, resources and support to reach your full potentials.",
    link: "/membersip-upgrade",
    linkText: "Become a Member",
  },
  {
    title: "Qualification",
    description:
      "You want to earn more and upgrade your career. Our syllabus is designed help you achieve your goal. We will deliver professional pathways for learners at all levels.",
    link: "/",
    linkText: "Get Qualified",
  },
  {
    title: "Networking",
    description:
      "As a member of the institute, you will be exposed to wider range of network of professionals globally and also you will gain international industry recognition.",
    link: "/",
    linkText: "Network With Industry Leaders",
  },
];

export const footerLinksArr = [
  {
    title: "Information",
    links: [
      {
        text: "Why Join Us",
        href: "/why-join-us",
      },
      {
        text: "Annual Subscription",
        href: "/annual-subscription",
      },
      {
        text: "C.P.D.",
        href: "/c-p-d",
      },
      {
        text: "Diploma",
        href: "/diploma",
      },
      {
        text: "Executive Diploma",
        href: "/executive-diploma",
      },
      {
        text: "Advanced Diploma",
        href: "/advanced-diploma",
      },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        text: "Objective",
        href: "/objective",
      },
      {
        text: "Council Members",
        href: "/council-members",
      },
      {
        text: "Country Directors",
        href: "/country-directors",
      },
      {
        text: "Membership Grade",
        href: "/membership-grade",
      },
      {
        text: "Events",
        href: "/events",
      },
      {
        text: "News & Article",
        href: "/news",
      },
    ],
  },
];

export const aboutFeatures = [
  {
    title: "Professional Certification",
    desc: "Gain globally recognized certifications that validate your expertise in business intelligence and analytics.",
    iconColor: "#0f4c81",
    bgColor: "bg-[#1e6ba7aa]",
  },
  {
    title: "Career Advancement",
    desc: "Access exclusive job opportunities, career development programs, and mentorship from industry leaders.",
    iconColor: "#7c2d12",
    bgColor: "bg-[#e25822aa]",
  },
  {
    title: "Networking Opportunities",
    desc: "Connect with a global community of professionals, experts, and organizations through events, forums, and conferences.",
    iconColor: "#084c61",
    bgColor: "bg-[#0f8a9d99]",
  },
  {
    title: "Exclusive Training & Workshops",
    desc: "Participate in specialized training programs, webinars, and hands-on workshops led by industry experts.",
    iconColor: "#5a2a82",
    bgColor: "bg-[#a864e8aa]",
  },
  {
    title: "Access to Research & Insights",
    desc: "Stay updated with the latest trends, case studies, whitepapers, and reports in data analytics and business intelligence.",
    iconColor: "#274c77",
    bgColor: "bg-[#6096baa0]",
  },
  {
    title: "Continuous Learning & Development",
    desc: "Enjoy access to online courses, e-learning resources, and professional development programs to enhance your skills.",
    iconColor: "#3e6c0a",
    bgColor: "bg-[#a2c659aa]",
    preserveTextOnHover: true,
  },
];

export const upgradeOptions = [
  {
    title: "Graduate to Associate",
    short: "After 3 MCPDs and 3 years of active membership.",
    designation: "ACIBIA",
    condition:
      "Complete three (3) MCPDs within 3 years. Once done, send the required documents to Info@.org.",
    details: [
      "Annual subscription fee to date",
      "A copy of your application letter for membership upgrade",
      "A copy of your degree or additional certificate",
    ],
  },
  {
    title: "Associate to Full Member",
    short: "After 3–5 years experience or a higher qualification.",
    designation: "MCIBIA",
    condition:
      "Eligible after gaining 3–5 years experience in Business Intelligence and Analytics or obtaining a higher qualification.",
    details: [
      "Receipts of all annual subscription fees to date",
      "A copy of your Associate Member Certificate",
      "A copy of your application letter for membership upgrade",
      "A copy of your credentials or additional certificate, if any",
    ],
  },
  {
    title: "Full Member to Fellow",
    short: "After 5 years as Full Member or with higher qualifications.",
    designation: "FCIBIA",
    condition:
      "Upgrade after 5 years as a Full Member or upon obtaining an additional professional qualification.",
    details: [
      "Receipts of all annual subscription fees to date",
      "A copy of your Full Membership Certificate",
      "A copy of your application letter for membership upgrade",
      "A copy of your degree or additional certificate, if any",
    ],
  },
];

export const objectives = [
  {
    id: 1,
    title: "Promote Research & Innovation",
    description:
      "To support research initiatives, promoting innovation, and advancement in business intelligence and analytics.",
  },
  {
    id: 2,
    title: "Establish Recognized Qualifications",
    description:
      "To establish recognized qualifications, demonstrating expertise and commitment to the field.",
  },
  {
    id: 3,
    title: "Grow Membership & Representation",
    description:
      "To grow the membership database, increasing diversity and representation from various industries.",
  },
  {
    id: 4,
    title: "Collaborate with Key Stakeholders",
    description:
      "To collaborate with organizations, academia, and industry leaders to advance the field.",
  },
  {
    id: 5,
    title: "Enhance Career Opportunities",
    description:
      "To enhance career prospects and opportunities for professionals in the field.",
  },
  {
    id: 6,
    title: "Foster a Professional Community",
    description:
      "To foster a vibrant community of professionals, facilitating networking, collaboration, and knowledge sharing.",
  },
  {
    id: 7,
    title: "Advance Excellence in Practice",
    description:
      "To advance in the practice of excellence in business intelligence and analytics, promoting excellence in the field.",
  },
];

export const subscriptionTiers = [
  {
    title: "Student",
    amount: "$20",
    bgColor: "bg-[#e0f2fe]",
    textColor: "text-[#0369a1]",
  },
  {
    title: "Graduate",
    amount: "$30",
    bgColor: "bg-[#ede9fe]",
    textColor: "text-[#6b21a8]",
  },
  {
    title: "Associate",
    amount: "$50",
    bgColor: "bg-[#fef3c7]",
    textColor: "text-[#92400e]",
  },
  {
    title: "Full Member",
    amount: "$60",
    bgColor: "bg-[#dcfce7]",
    textColor: "text-[#166534]",
  },
  {
    title: "Fellow",
    amount: "$75",
    bgColor: "bg-[#ffe4e6]",
    textColor: "text-[#be123c]",
  },
];

export const membershipCategories = [
  {
    title: "Student Membership",
    description: [
      "Open to undergraduate and postgraduate students pursuing degrees in business intelligence, data analytics, statistics, or related fields.",
      " Gain Access to educational resources, mentorship programs, and industry events.",
    ],
    bgColor: "bg-sky-100",
  },
  {
    title: "Graduate Membership",
    description: [
      "Open to undergraduate students with HND/B.Sc in Business or IT or any related courses.",
      " For recent graduates who are transitioning into the business intelligence field.",
      " Gain access to resources and mentorship.",
    ],
    bgColor: "bg-indigo-100",
  },
  {
    title: "Associate Membership (ACIBIA)",
    description: [
      "For early-career professionals with foundational experience in business or IT in any related courses.",
      " Eligibility: A degree/HND in a relevant field or equivalent professional qualification with a minimum of 4 years experience.",
      " Associate membership of relevant and recognized professional bodies may also be considered.",
      " Members may use ACIBIA after their names.",
    ],
    bgColor: "bg-purple-100",
  },
  {
    title: "Full Membership (MCIBIA)",
    description: [
      "Designed for experienced professionals with a proven track record in business or IT. ",
      "Eligibility:  HND/B.Sc in Business or IT-related courses with a minimum of eight years of professional experience and relevant qualifications.",
      " Full membership of relevant and recognized professional bodies may also be considered.",
      " Members may use MCIBIA after their names.",
    ],
    bgColor: "bg-amber-100",
  },
  {
    title: "Fellowship (FCIBIA)",
    description: [
      "Designed for experienced professionals with a proven track record in business or IT. ",
      "Eligibility:  HND/B.Sc in Business or IT-related courses with a minimum of eight years of professional experience and relevant qualifications.",
      " Full membership of relevant and recognized professional bodies may also be considered.",
      " Members may use MCIBIA after their names.",
    ],

    bgColor: "bg-emerald-100",
  },
];

export const certifications = [
  {
    id: "cap",
    title: "Certified Analytics Professional (CAP)",
    icon: <BadgeCheck className="text-blue-500 w-6 h-6" />,
    summary:
      "Vendor-neutral certification validating your ability to translate complex data into actionable insights.",
    modules: [
      "Artificial Intelligence",
      "Data Mining & Informatics",
      "Data Science",
      "Visualization & Presentation",
      "Database System & Security",
      "Network Analysis & Optimization",
      "Statistics for Data Science",
    ],
    duration: "Online: 6–12 weeks | Self-paced: 6–12 months",
    image: "/images/associate.jpeg",
  },
  {
    id: "cda",
    title: "Certified Data Analyst (CDA)",
    icon: <BarChart4 className="text-orange-500 w-6 h-6" />,
    summary:
      "Validates ability to collect, process, and analyze data to drive decision-making.",
    modules: [
      "Data Preparation & Cleaning",
      "Data Analysis",
      "Advanced Machine Learning",
      "Data Governance & Ethics",
      "Advanced Visualization",
    ],
    duration: "Online: 6–12 weeks | Instructor-Led: 3–6 months",
    image: "/images/associate.jpeg",
  },
  {
    id: "cbae",
    title: "Certified Business Analytics Expert (CBAE)",
    icon: <GraduationCap className="text-purple-500 w-6 h-6" />,
    summary:
      "Expert-level certification in data storytelling, predictive analytics, and decision-making.",
    modules: [
      "Business Strategy & Analytics",
      "Data Analytics in Action",
      "Machine Learning & NLP",
      "Retail & Strategic Decision-Making",
      "Data Driven Innovation",
    ],
    duration: "Self-paced: 3–6 months | Instructor-Led: 10–16 weeks",
    image: "/images/associate.jpeg",
  },
  {
    id: "cbil",
    title: "Certified Business Intelligence Leader (CIBL)",
    icon: <ShieldCheck className="text-green-600 w-6 h-6" />,
    summary:
      "Demonstrates leadership in BI strategy, architecture, and governance.",
    modules: [
      "BI Strategy & Governance",
      "Data Architecture",
      "Industry Applications",
      "Leadership & Communication",
      "Strategic BI Decision Making",
    ],
    duration: "Online: 6–12 weeks | Blended: 3–6 months",
    image: "/images/associate.jpeg",
  },
];

export const qualificationStages = [
  {
    stage: "Foundation",
    color: "bg-blue-50 border-blue-200",
    badgeColor: "bg-blue-500",
    icon: BookOpen,
    description: "Essential business and analytics fundamentals",
    levels: [
      {
        level: "Level 1",
        subtitle: "Core Business Fundamentals",
        courses: [
          "Principles of Accounting",
          "Communication Skills",
          "Business Economics",
          "Management Information System",
          "Principles of Management & Leadership",
        ],
        icon: Building,
        brochure: "/documents/FOUNDATION I_075441.doc",
      },
      {
        level: "Level 2",
        subtitle: "Analytics Foundations",
        courses: [
          "Applied Statistics for Business Intelligence",
          "Fundamentals of Business Intelligence & Analytics",
          "Data Management & SQL",
          "Artificial Intelligence for Business Excellence",
          "Marketing Analytics",
        ],
        icon: BarChart3,
        brochure: "/documents/FOUNDATION LEVEL 2_075439.docx",
      },
    ],
  },
  {
    stage: "Intermediate",
    color: "bg-emerald-50 border-emerald-200",
    badgeColor: "bg-emerald-500",
    icon: TrendingUp,
    description: "Practical skills in data analysis and BI",
    levels: [
      {
        level: "Level 1",
        subtitle: "Applied Analytics",
        courses: [
          "Application of Analytics in Business",
          "Big Data Technologies",
          "Python for Business Analytics",
          "Data Visualization & Reporting",
          "Strategic Change Management",
        ],
        icon: Code,
        brochure: "/documents/INTERMEDIATE LEVEL 1_075444.docx",
      },
      {
        level: "Level 2",
        subtitle: "Advanced Techniques",
        courses: [
          "Advanced Data Analytics Techniques",
          "Business Research",
          "Financial Intelligence",
          "International Human Resource Management",
          "Ethics & Governance in Data Analytics",
        ],
        icon: Activity,
        brochure: "/public/documents/INTERMEDIATE LEVEL 2_075446.docx",
      },
    ],
  },
  {
    stage: "Skilled",
    color: "bg-purple-50 border-purple-200",
    badgeColor: "bg-purple-500",
    icon: Award,
    description: "Master advanced strategic decision making",
    levels: [
      {
        level: "Level 1",
        subtitle: "Strategic Leadership",
        courses: [
          "Data Analytics for Strategic Decision Making",
          "Managing Data-Driven Innovation Tools",
          "Intelligence Business Information Systems",
          "Digital Business & E-Commerce Management",
        ],
        icon: Target,
        brochure: "/public/documents/SKILLED LEVEL 1_075442.docx",
      },
      {
        level: "Level 2",
        subtitle: "Expert Mastery",
        courses: [
          "Advanced Enterprise Architecture for Business Intelligence",
          "Advanced Artificial Intelligence",
          "Advanced Digital Transformation and Analytics Strategy",
          "The Global Professional",
        ],
        icon: Trophy,
        brochure: "/public/documents/SKILLED LEVEL 2_075433.docx",
      },
    ],
  },
];

export const careerBenefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "85% of graduates report career advancement within 12 months",
    bgColor: "bg-[#ffe4e6]",
    textColor: "text-[#be123c]",
  },
  {
    icon: Briefcase,
    title: "Industry Recognition",
    description:
      "Globally recognized certification accepted by leading employers",
    bgColor: "bg-[#dcfce7]",
    textColor: "text-[#166534]",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Open doors to international career prospects",
    bgColor: "bg-[#ede9fe]",
    textColor: "text-[#6b21a8]",
  },
  {
    icon: Users,
    title: "Professional Network",
    description: "Join a community of 10,000+ certified professionals",
    bgColor: "bg-[#fef3c7]",
    textColor: "text-[#92400e]",
  },
];
