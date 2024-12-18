import { c,Ml, GenAi, Df,po,yc } from "../assets/images";
import {
    car,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    typescript
} from "../assets/icons";


export const skills = [
    
    {
        imageUrl: 'https://logowik.com/content/uploads/images/911_c_logo.jpg',
        name: "C++",
        type: "Language",
    },
    {
        imageUrl: 'https://logohistory.net/wp-content/uploads/2023/06/Python-Emblem.png',
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },    
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Student Intern",
        company_name: "Robolution",
        icon: 'https://th.bing.com/th/id/OIP.Y-S6jw6aOk1N7pERBAYPAwHaHr?rs=1&pid=ImgDetMain',
        iconBg: "#000000",
        date: "Jan 2024 - Sep 2024",
        points: [
            "Collaborated with a team to create a bionic hand prototype.",
            "Used Python, OpenCV, and MediaPipe for real-time gesture recognition and flex sensors for detecting bending and motion.",
            "Integrated NodeMCU for wireless control, achieving 90 % accuracy in diverse conditions.",
            "With enhanced human-computer interaction, presented an innovative prosthetic solution.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: yc,
        name: 'YC Directory',
        description: [
            'Developed a comprehensive online directory for startups to seamlessly share, connect, and showcase their pitches effectively.',
            'Providing an intuitive and user-friendly environment, fostering collaboration and growth within the startup community.',
            'Tech Stack :',
            'Sanity for content management.',
            'Next.jsfor server-side rendering and NextAuth for GitHub authentication',
            'Sentry for error tracking & Shadcn UI for user interface components'
        ],
        link: 'https://yc-directory-4csj.vercel.app/',
        linktext: 'Click Here'
    },
    {
        iconUrl: po,
        name: '3D Portfolio Website',
        description: [
            'Built a portfolio website featuring interactive 3D animations and smooth transitions',
            'The design features clean, minimalist, and intuitive UI elements.',
            'Used: Three.js and React.'
        ],
        link: '/',
        linktext: 'Click Here'
    },
];

export const certificates= [
    {
        img: c,
        title: "C Programming",
        detail: 'Udemy-certified C programmer with proven expertise in developing robust and efficient code.' 
    },
    {   
        img: Ml,
        title: "ML and AI",
        detail: 'Completed courses in Data Engineering, Machine Learning, and AI, acquiring essential knowledge and hands-on experience with tools like NumPy, Pandas, TensorFlow, and other relevant technologies.' 
    },
    {
        img: GenAi,
        title: "Generative AI",
        detail: 'completed a course on Generative AI by Google Cloud, gaining comprehensive knowledge of its fundamentals and practical applications.' 
    },
    {
        img: '',
        title: "Smart India Hackathon",
        detail: 'Participated in the internal hackathon of Smart India Hackathon (SIH), organized by the CSE department of our college, and developed a comprehensive website to showcase the rich tourism of India, highlighting its unexplored places'  
    },
    {
        img: Df,
        title: "DevQuest 24",
        detail: 'My team Bit_IT secured first place in DevFest 2024, organized by the IETE Club of our college.' 
    },
]