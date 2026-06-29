import blueImage from './images/blue.png';
import profilePic from './images/harsh-pfp-ai.jpeg';
import avataarImage from './images/avataar.png';
import crmImage from './images/crm.png';
import letsxchangeImage from './images/letsxchange.png';
import myStartUpEquityImage from './images/mystartupequity.png';
import myAlphaDojoImage from './images/myalphadojo.png';
import utilisationImage from './images/utilisation.png';
import vaackImage from './images/vaack.png';

import { Certification, ContactMe, ProfileBanner, Project, Skill, TimelineItem, WorkPermit } from './types';

export const staticProfileBanner: ProfileBanner = {
  backgroundImage: { url: blueImage },
  headline: 'Harshvardhan Singh Sikarwar',
  resumeLink: {
    url: 'https://drive.google.com/file/d/1h7-CvcSRxF5CzdcSzvPv_q4pchhqz4SA/view?usp=sharing',
  },
  linkedinLink: 'https://www.linkedin.com/in/harsh-vardhan-sikarwar-12aa86237/',
  profileSummary: 'Full Stack Developer focused on building polished product experiences, practical automation, and cloud-backed web applications.',
};

export const staticWorkPermit: WorkPermit = {
  visaStatus: 'Indian Citizen',
};

export const staticTimeline: TimelineItem[] = [
    {
        timelineType: 'work',
        name: 'Freelance',
        title: 'Full Stack Developer',
        techStack: 'ReactJS, Node.js, MongoDB, AWS',    
    summaryPoints: [
      'Developed and deployed several full-stack web applications, leveraging ReactJS for the frontend and Node.js with MongoDB for the backend.',
      'Implemented RESTful APIs and integrated third-party services to enhance application functionality and user experience.',
    ],
    dateRange: 'Jan 2025 - Present',
    },
    {
    timelineType: 'work',
    name: 'Badkul Technology',
    title: 'Frontend Developer Intern',
    techStack: 'ReactJS, Next.js , TailwindCSS, Figma',
    summaryPoints: [
      'Developed and deployed 2 responsive, production-ready websites using ReactJS and Next.js, translating Figma designs into pixel-perfect user interfaces.',
      'Collaborated with UI/UX designers to optimize layouts, improve user experience, and streamline the development-to-deployment workflow.',
    ],
    dateRange: 'Sep 2025 - Jan 2026',
    },
  {
    timelineType: 'work',
    name: 'Oceansfay Digital',
    title: 'Web Developer and Digital Marketer',
    techStack: 'PHP, WordPress, JavaScript, HTML, CSS, SEO, Google Ads, Social Media Marketing',
    summaryPoints: [
      'Developed and maintained 30+ WordPress websites, collaborating directly with clients to gather requirements and deliver customized business solutions.',
      'Managed SEO and Google Ads campaigns to improve website visibility, drive traffic, and support clients digital marketing objectives.',
    ],
    dateRange: 'Apr 2025 - Aug 2025',
  },
  {
    timelineType: 'work',
    name: 'Starial',
    title: 'Web Developer Intern',
    techStack: 'ReactJS, TailwindCSS, Figma',
    summaryPoints: [
      'Built and deployed 3 responsive, production-ready websites using Tailwind CSS and JavaScript, translating Figma designs into pixel-perfect user interfaces.',
      'Collaborated with UI/UX designers to optimize layouts, improve user experience, and streamline the development-to-deployment workflow.',
    ],
    dateRange: 'Dec 2024 - Mar 2025',
  },
  {
    timelineType: 'education',
    name: 'Bachelor of Technology (B.Tech)',
    title: 'Jabalpur Engineering College, India',
    techStack: '',
    summaryPoints: ['Focused on software engineering, algorithms, and web development fundamentals.'],
    dateRange: '2023 - 2027',
  },
];

export const staticSkills: Skill[] = [
  { name: 'React', category: 'Frontend', description: 'Building interactive user interfaces.', icon: 'FaReact' },
  { name: 'TypeScript', category: 'Frontend', description: 'Typed JavaScript for maintainable apps.', icon: 'SiTypescript' },
  { name: 'HTML5', category: 'Frontend', description: 'Semantic markup for accessible layouts.', icon: 'SiHtml5' },
  { name: 'CSS3', category: 'Frontend', description: 'Responsive styling and visual polish.', icon: 'SiCss3' },
  { name: 'Node.js', category: 'Backend', description: 'JavaScript services and APIs.', icon: 'FaNodeJs' },
  { name: 'Express.js', category: 'Backend', description: 'Lightweight server-side routing.', icon: 'FaNodeJs' },
  { name: 'AWS', category: 'Cloud', description: 'Infrastructure and deployment workflows.', icon: 'FaAws' },
  { name: 'PostgreSQL', category: 'Data', description: 'Relational data modelling and queries.', icon: 'SiPostgresql' },
  { name: 'MongoDB', category: 'Data', description: 'Document-oriented persistence.', icon: 'SiMysql' },
  { name: 'GitHub', category: 'Tools', description: 'Source control and collaboration.', icon: 'FaGitAlt' },
 { name: 'Figma', category: 'Tools', description: 'UI design and prototyping.', icon: 'SiFigma' },
];

export const staticProjects: Project[] = [
  {
    title: 'Ghummaker.com',
    description: 'A multitenant SaaS platform for travel agencies to manage bookings, itineraries, and customer interactions.',
    techUsed: 'ReactJS, Node.js, Next.js, TailwindCSS',
    image: { url: avataarImage },
  },
  {
    title: 'AI Resueme Analyzer',
    description: 'A web application that uses AI to analyze resumes and provide feedback on formatting, content, and keyword optimization.',
    techUsed: 'ReactJS, Next.js, Puter.js, TailwindCSS',
    image: { url: crmImage },
  },

];

export const staticContactMe: ContactMe = {
  profilePicture: { url: profilePic },
  name: 'Harshvardhan Singh Sikarwar',
  title: 'Full Stack Developer',
  summary: 'I build useful software with a focus on clarity, maintainability, and user experience.',
  companyUniversity: 'Available for new opportunities',
  linkedinLink: 'https://www.linkedin.com/in/harsh-vardhan-sikarwar-12aa86237/',
  email: 'hvsikarwar@gmail.com',
  phoneNumber: '+91 9165366317',
};

export const staticCertifications: Certification[] = [
  { title: 'React Fundamentals', issuer: 'Udemy', issuedDate: '2024', link: '/projects', iconName: 'udemy' },
  { title: 'Cloud Foundations', issuer: 'Coursera', issuedDate: '2024', link: '/work-experience', iconName: 'coursera' },
  { title: 'Software Engineering Basics', issuer: 'University', issuedDate: '2023', link: '/skills', iconName: 'university' },
];