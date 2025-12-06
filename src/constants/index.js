import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,

  carrent,
  jobit,
  tripguide,
  threejs,
  foodie,
  luna_crm,
  fiscal_dashboard,
  lex_ai,
  tuko,
  analytics,
  digital_oasis,
  logo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const skills = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Node.js", "FastAPI", "Flask"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Firebase", "Supabase", "PostgreSQL", "MongoDB", "Docker"],
  },
  {
    title: "Special Interests",
    items: ["AI agents", "automation", "UI engineering", "product prototyping"],
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Freelance",
    icon: logo,
    iconBg: "#383E56",
    date: "Dec 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Co-host & Producer",
    company_name: "Tuko Sawa Podcast",
    icon: tuko,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Present",
    points: [
      "Produce and co-host a Gen Z – focused podcast centered on culture, creativity, self-growth, and tech.",
      "Manage research, episode structuring, content strategy, and digital storytelling.",
      "Built a small but growing community through consistent releases, engagement, and creative promos.",
      "Leveraged analytics to guide content direction and growth strategy.",
    ],
  },
  {
    title: "AI & Data Enthusiast",
    company_name: "10alytics hackathon",
    icon: analytics,
    iconBg: "#383E56",
    date: "Dec 2025",
    points: [
      "Explored real-world datasets to build insights and solutions applying data analytics and machine learning approaches.",
      "Strengthened collaborative problem-solving skills under intense time constraints.",
      "Gained experience presenting data-backed recommendations for real impact.",
    ],
  },
  {
    title: "Backhouse & Support Assistant",
    company_name: "Digital Oasis",
    icon: digital_oasis,
    iconBg: "#E6DEDD",
    date: "Apr 2025 - May 2025",
    points: [
      "Managed daily communication workflows, including email organization, message triage, and timely responses.",
      "Handled scheduling, reminders, calendar coordination, and logistics planning.",
      "Conducted online research to support decision-making and personal projects.",
      "Created simple digital systems for task tracking, file organization, and productivity.",
      "Assisted with travel arrangements, bookings, and itinerary planning.",
      "Delivered all tasks with confidentiality, reliability, and a strong sense of initiative.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rivaldo was reliable, organized, and proactive. He managed my schedule and tasks smoothly and consistently made my workload lighter.",
    name: "Sara Lee",
    designation: "CEO",
    company: "Digital Oasis",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "His ability to take an idea and turn it into a functional prototype is impressive. He thinks like both a technologist and a storyteller.",
    name: "Chris Nganga",
    designation: "Startup Co-Founder & Collaborator",
    company: "Foodie",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Reliable, focused, and curious. Rivaldo approaches every project like a builder—always looking for how to improve the experience.",
    name: "Chakin",
    designation: "Mentor/instructor",
    company: "PLP Academy",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Foodie",
    description:
      "A platform that connects independent chefs to food lovers looking for unique, affordable meals. Chefs create profiles, list dishes, attract customers, and manage orders — creating new earning opportunities while giving users access to diverse food options.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: foodie,
    source_code_link: "https://github.com/rivaldo56/foodie-v2",
  },
  {
    name: "Luna CRM",
    description:
      "A simple CRM designed for small African businesses to manage leads, customers, communication, and follow-ups.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: luna_crm,
    source_code_link: "https://github.com/rivaldo56/Luna-CRM",
  },
  {
    name: "Fiscal Intelligence",
    description:
      "A dashboard that visualizes Kenya’s budget, spending patterns, and fiscal indicators to support transparency and civic awareness.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "plotly",
        color: "pink-text-gradient",
      },
    ],
    image: fiscal_dashboard,
    source_code_link: "https://github.com/rivaldo56/Fiscal-Intelligence",
  },
  {
    name: "LEX",
    description:
      "A basic AI-powered coding assistant that helps developers debug, generate boilerplate, and accelerate workflow.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "vectordb",
        color: "pink-text-gradient",
      },
    ],
    image: lex_ai,
    source_code_link: "https://github.com/rivaldo56/Lex_python_coding_assistant-",
  },
];

export { services, skills, experiences, testimonials, projects };
