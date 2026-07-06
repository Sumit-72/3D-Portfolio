import { c, Ml, GenAi, Df, po, yc, bito, rm, dog_breed, dequeue } from "../assets/images";
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
    // Languages
    {
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        name: "C++",
        type: "Language",
    },
    {
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Language",
    },
    {
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        name: "SQL",
        type: "Language",
    },
    // Frameworks
    {
        imageUrl: react,
        name: "React.js",
        type: "Framework",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Framework",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Framework",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Framework",
    },
    // Libraries & AI Tools
    {
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
        name: "NumPy",
        type: "Library",
    },
    {
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
        name: "pandas",
        type: "Library",
    },
    {
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
        name: "Matplotlib",
        type: "Library",
    },
    {
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
        name: "scikit-learn",
        type: "Library",
    },
    {
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        name: "TensorFlow",
        type: "Library",
    },
    {
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
        name: "Keras",
        type: "Library",
    },
    {
        imageUrl: 'https://images.seeklogo.com/logo-png/51/2/langchain-logo-png_seeklogo-512852.png',
        name: "LangChain",
        type: "Library",
    },
    // Cloud & DevOps
    {
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
        name: "GCP",
        type: "Cloud & DevOps",
    },
    {
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        name: "Docker",
        type: "Cloud & DevOps",
    },
    // Tools
    {
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        name: "VS Code",
        type: "Tool",
    },
    {
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg',
        name: "PyCharm",
        type: "Tool",
    },
    {
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
        name: "IntelliJ",
        type: "Tool",
    },
    {
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
        name: "Postman",
        type: "Tool",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Tool",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Tool",
    },
];

export const fundamentals = [
    "Data Structures and Algorithms",
    "Object-Oriented Programming (OOP)",
    "Operating Systems (OS)",
    "Database Management Systems (DBMS)",
    "Retrieval-Augmented Generation (RAG)"
];

export const experiences = [
    {
        title: "SDE Intern",
        company_name: "Axis Bank",
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZgQByuraXtPFVtTK9pcoGvDycwBln9HKkfg8KL8EE_w&s',
        iconBg: "#ffffff",
        date: "May 2026 – Jul 2026",
        points: [
            "Designed and documented 20+ UAT and Production credit card decisioning workflows, improving clarity of business logic, process transitions, developer handoffs, overall system understanding, and integration-level traceability across services.",
            "Built a Copilot Studio AI agent leveraging internal workflow documentation and production decisioning logic to automate developer support, reducing onboarding and issue-resolution time by 40% while enhancing debugging efficiency and cross-team knowledge sharing.",
            "Optimized and secured backend services for Insta Credit Card Automation, CCUtility Multithreading, and VIKI workflows by resolving critical issues across 10+ backend services in UAT and production, improving system performance and integration reliability.",
            "Automated salary slip OCR extraction for credit card applications by developing a Java/Spring Boot application integrated with the Axis Bank VisionXtract API, reducing processing time by 80% while eliminating manual data entry and streamlining operations."
        ],
    },
    {
        title: "Student Intern",
        company_name: "Robolution",
        icon: 'https://th.bing.com/th/id/OIP.Y-S6jw6aOk1N7pERBAYPAwHaHr?rs=1&pid=ImgDetMain',
        iconBg: "#000000",
        date: "Jan 2024 - Sep 2024",
        points: [
            "Collaborated with a team to create a bionic hand prototype.",
            "Used Python, OpenCV, and MediaPipe for real-time gesture recognition and flex sensors for detecting bending and motion.",
            "Integrated NodeMCU for wireless control.",
            "With enhanced human-computer interaction, presented an innovative prosthetic solution.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Sumit-72',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sumitshekhar65/',
    }
];

export const projects = [
    {
        iconUrl: dog_breed,
        name: 'Dog Breed Identification',
        description: [
            'Trained a deep learning model to classify dog breeds using a Kaggle dataset with 10,000+ labeled images across 120 distinct breeds.',
            'Leveraged transfer learning with the MobileNet architecture, achieving over 90% accuracy on diverse and complex image inputs.',
            'Deployed the model via Streamlit, enabling real-time breed predictions through an interactive and user-friendly web interface.'
        ],
        link: 'https://dog-breed-id.streamlit.app',
        linktext: 'Explore Dog Vision',
        github: 'https://github.com/Sumit-72/Dog-Breed-Identification'
    },
    {
        iconUrl: dequeue,
        name: 'Dequeue',
        description: [
            'Collaborated on a team project to build a Self-Service Mobile Checkout Platform that reduced customer wait times by up to 50% and targeted a 30% increase in store revenue.',
            'Developed and deployed a responsive frontend using React, TypeScript, TailwindCSS, and Zustand, aimed to serve 5,000+ daily users.',
            'Integrated Scanbot SDK for 99% barcode scanning accuracy and Razorpay for secure payments.',
            'Implemented a scalable backend with Node.js, Express, and MongoDB, supporting 10,000+ products with RESTful APIs, CRUD operations, real-time inventory tracking, and an AI-based recommendation engine using Hugging Face Inference API.'
        ],
        link: 'https://dequeue-checkout.vercel.app',
        linktext: 'Visit Dequeue',
        github: 'https://github.com/Sumit-72/Dequeue'
    },
    {
        iconUrl: bito,
        name: 'BitOverflow',
        description: [
            'Created an all-in-one student community platform featuring Q&A forums, event updates, club portals, campus navigator, personalized user dashboards, and a leaderboard system — aimed at boosting student engagement by over 70%+.',
            'Developed with Next.js, Tailwind CSS, and Appwrite for authentication and backend, delivering a modern, responsive UI.',
            'Maintained 99.9% uptime, scored 95+ in Lighthouse, 100 in SEO, and ranked #2 on Google for targeted college-related queries.'
        ],
        link: 'https://bit-overflow.vercel.app/',
        linktext: 'Visit BitOverflow',
        github: 'https://github.com/Sumit-72/BitOverflow'
    },
    {
        iconUrl: yc,
        name: 'YC Directory',
        description: [
            'Developed a comprehensive online directory for startups to seamlessly share, connect, and showcase their pitches effectively.',
            'Providing an intuitive and user-friendly environment, fostering collaboration and growth within the startup community.',
            'Tech Stack: Next.js, Sanity, TailwindCSS, Sentry'
        ],
        link: 'https://yc-directory-4csj.vercel.app/',
        linktext: 'Explore YC Directory',
        github: 'https://github.com/Sumit-72/yc_Directory'
    },
    {
        iconUrl: rm,
        name: 'ReMaps',
        description: [
            'A campus navigation tool built for newcomers and visitors to easily find locations within the college.',
            'Features Google Maps integration, a location directory, and smart search/filter options.',
            'Tech: React, Google Maps API.'
        ],
        link: 'https://re-maps.vercel.app',
        linktext: 'Explore ReMaps',
        github: 'https://github.com/Sumit-72/ReMaps'
    },
    {
        iconUrl: po,
        name: '3D Portfolio Website',
        description: [
            'Built a portfolio website featuring interactive 3D animations and smooth transitions.',
            'The design features clean, minimalist, and intuitive UI elements.',
            'Used: Three.js and React.'
        ],
        link: '/',
        linktext: 'Explore Portfolio',
        github: 'https://github.com/Sumit-72/3D-Portfolio'
    },
];


export const certificates = [
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