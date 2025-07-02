export interface Skill {
  name: string;
  /** Font Awesome class string OR path to SVG */
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface TimelineItem {
  company: string;
  position: string;
  details: string[];
  duration: string;
  current: boolean;
  type: 'work' | 'education';
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
  isHobby?: boolean; // Added optional isHobby property
}

export interface HeroData {
  name: string;
  title: string;
  description: string;
  resumeUrl: string;
  resumeFilename: string;
}

export interface ContactData {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export const heroData: HeroData = {
  name: 'Martin Justin Medina',
  title: 'Full-stack Web Developer',
  description: 'Love building cool stuff and picking up new tech along the way.',
  resumeUrl: 'https://1drv.ms/b/c/931bfb673de21cbb/Ebsc4j1n-xsggJMaCwAAAAAB1fQ-AcSjlLznelARfLGefg?e=md5Hgd',
  resumeFilename: '',
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Javascript', icon: 'fab fa-js-square' },
      { name: 'Typescript', icon: '/logos/typescript.svg' },
      { name: 'Nuxt', icon: '/logos/nuxt.svg' },
      { name: 'Vue', icon: 'fab fa-vuejs' },
      { name: 'Tailwind', icon: '/logos/tailwindcss.svg' },
      { name: 'Inertia', icon: '/logos/inertiajs.svg' },
      { name: 'Jquery', icon: '/logos/jquery.svg' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Laravel', icon: 'fab fa-laravel' },
      { name: 'PHP', icon: 'fab fa-php' },
      { name: 'Express', icon: '/logos/express.svg' },
      { name: 'NodeJS', icon: 'fab fa-node-js' },
    ],
  },
  {
    title: 'Databases',
    skills: [{ name: 'MySQL', icon: 'fas fa-database' }],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'Docker', icon: 'fab fa-docker' },
      { name: 'Jira', icon: 'fab fa-jira' },
      { name: 'Confluence', icon: 'fab fa-confluence' },
    ],
  },
];

export const historyItems: TimelineItem[] = [
  {
    company: 'Goteam Philippines',
    position: 'Full-stack Web Developer',
    details: [
      'TBA',
    ],
    duration: '2023 - present',
    current: true,
    type: 'work' as const,
  },
  {
    company: 'Cafe24 Philippines',
    position: 'Senior Web Developer',
    details: [
      'Led and guided junior web developers, overseeing their work and supporting their growth.',
      'Worked closely with PMs, QA, and developers to keep projects aligned with goals.',
      'Created technical analyses, development plans, and deployment strategies to guide and document project work.',
      'Developed new features and maintained internal applications, including reservation tools integrated with Slack.',
      'Provided support, maintenance, and improvements for other internal applications.',
    ],
    duration: '2021 - 2023',
    current: false,
    type: 'work' as const,
  },
  {
    company: 'Cafe24 Philippines',
    position: 'Junior Web Developer',
    details: [
      'Modernized legacy systems to OOP and built new features for business websites.',
      'Created internal tools for employee evaluations and performance tracking.',
    ],
    duration: '2018 - 2021',
    current: false,
    type: 'work' as const,
  },
  {
    company: 'Sutherland Global Services',
    position: 'IT Support Intern',
    details: [
      'Provided technical support by troubleshooting hardware issues, network connectivity problems, software glitches, and system errors.',
      'Assisted users in resolving technical concerns to ensure minimal downtime and smooth operations.',
    ],
    duration: '2017',
    current: false,
    type: 'work' as const,
  },
  {
    company: 'STI College',
    position: 'Bachelor of Science in Information Technology',
    details: [],
    duration: '2014 - 2018',
    current: false,
    type: 'education' as const,
  },
];

export const projects: Project[] = [
  {
    title: 'Soho Business Center',
    description:
      'Shared office spaces designed for e‑commerce entrepreneurs, offering workspaces and logistics support',
    imageUrl: 'https://img.cafe24.com/images/common/cafe24.svg',
    link: 'https://soho.cafe24.com/',
    tags: ['PHP', 'Javascript'],
  },
  {
    title: 'Microblog',
    description:
      'A simple social media platform for sharing short posts, media, and real-time conversations. Connect, engage, and explore topics.',
    imageUrl: 'https://placehold.co/600x400/gray/white',
    link: '#',
    tags: ['Laravel', 'Nuxt', 'Tailwind'],
    isHobby: true,
  },
  {
    title: 'Todo',
    description:
      'A clean, easy app to manage tasks and stay organized.',
    imageUrl: 'https://placehold.co/600x400/gray/white',
    link: '#',
    tags: ['Laravel', 'InertiaJS', 'Tailwind'],
    isHobby: true,
  }
];

export const contactData: ContactData = {
  email: 'martin.justin04@gmail.com',
  githubUrl: 'https://github.com/mj-medina',
  linkedinUrl: 'https://www.linkedin.com/in/martin-justin-medina-08a041280/',
};
