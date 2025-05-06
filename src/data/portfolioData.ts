// src/data/portfolioData.ts

// --- Interfaces --- 
export interface Skill {
  name: string;
  icon: string; // Font Awesome class string OR path to SVG
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

// --- Portfolio Data --- 

export const heroData: HeroData = {
  name: "Martin Doe", // TODO: Update Name
  title: "Mid-Fullstack Developer",
  description: "Passionate developer with experience in building modern web applications using Vue, Laravel, and more. Always eager to learn and contribute to impactful projects.",
  resumeUrl: "/path/to/your/resume.pdf", // TODO: Update Path
  resumeFilename: "MartinDoe_Resume.pdf" // TODO: Update Filename
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Javascript', icon: 'fab fa-js-square' },
      { name: 'Typescript', icon: '/src/assets/logos/typescript.svg' },
      { name: 'Nuxt', icon: '/src/assets/logos/nuxt.svg' },
      { name: 'Vue', icon: 'fab fa-vuejs' },
      { name: 'Tailwind', icon: '/src/assets/logos/tailwindcss.svg' },
      { name: 'Inertia', icon: '/src/assets/logos/inertiajs.svg' },
      { name: 'Jquery', icon: '/src/assets/logos/jquery.svg' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Laravel', icon: 'fab fa-laravel' },
      { name: 'PHP', icon: 'fab fa-php' },
      { name: 'Express', icon: '/src/assets/logos/express.svg' },
      { name: 'NodeJS', icon: 'fab fa-node-js' },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'fas fa-database' }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'Docker', icon: 'fab fa-docker' },
      { name: 'Jira', icon: 'fab fa-jira' },
      { name: 'Confluence', icon: 'fab fa-confluence' },
    ]
  }
];

export const historyItems: TimelineItem[] = [
  {
    company: 'Goteam Philippines',
    position: 'Mid-Fullstack Developer',
    details: [
      'Worked on full-stack features',
      'Implemented RESTful APIs',
      'Optimized database queries',
    ],
    duration: '2023 - present',
    current: true,
    type: 'work' as const,
  },
  {
    company: 'Cafe24 Philippines',
    position: 'Senior Web Developer',
    details: [
      'Developed e-commerce features',
      'Maintained legacy systems',
      'Integrated third-party services',
      'Collaborated with designers for UI improvements',
    ],
    duration: '2018 - 2023',
    current: false,
    type: 'work' as const,
  },
  {
    company: 'Sutherland Global Services',
    position: 'IT Support Intern',
    details: [
      'Provided technical support',
      'Documented support processes',
      'Assisted in hardware troubleshooting',
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
    title: 'Project Alpha',
    description: 'A web application built with Vue and Laravel for managing tasks.',
    imageUrl: 'https://via.placeholder.com/400x250/777/eee?text=Project+Alpha',
    link: '#',
    tags: ['Vue', 'Laravel', 'Tailwind']
  },
  {
    title: 'Project Beta',
    description: 'An e-commerce storefront developed using Nuxt and Express.',
    imageUrl: 'https://via.placeholder.com/400x250/ddd/777?text=Project+Beta',
    link: '#',
    tags: ['Nuxt', 'Node.js', 'Flowbite']
  },
  {
    title: 'Project Gamma',
    description: 'A personal blog site created with VuePress and Markdown.',
    imageUrl: 'https://via.placeholder.com/400x250/eee/777?text=Project+Gamma',
    link: '#',
    tags: ['VuePress', 'Markdown', 'Static Site']
  },
];

export const contactData: ContactData = {
  email: 'your.email@example.com', // TODO: Update Email
  githubUrl: 'https://github.com/yourusername', // TODO: Update GitHub
  linkedinUrl: 'https://linkedin.com/in/yourusername' // TODO: Update LinkedIn
}; 