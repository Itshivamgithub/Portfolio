import {
  mobile,
  backend,
  creator,
  web,
  StudyNotion,
  ShivamBook,
  Portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
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
    title: "Frontend Developer",
    icon: creator,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS 3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "github",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "github actions",
    icon: "https://www.vectorlogo.zone/logos/github/github-tile.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "aws",
    icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  },
  {
    name: "Vercel",
    icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
  },
  {
    name: "Render",
    icon: "https://cdn.simpleicons.org/render",
  },
];

const projects = [
  {
    name: "StudyNotion",
    description:
      "StudyNotion is a comprehensive MERN-stack learning platform that enables educators to create, manage, and deliver courses while providing students with an engaging learning experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
    ],
    image: StudyNotion,
    source_code_link: "https://github.com/Itshivamgithub/StudyNotion",
  },
  {
    name: "Shivam Books",
    description:
      "Shivam Books is a cross-platform book referral application built with React Native and the MERN stack, enabling users to discover, recommend, and manage books through a seamless and user-friendly mobile experience.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: ShivamBook,
    source_code_link: "https://github.com/Itshivamgithub/Shivam-Books",
  },
  {
    name: "Portfolio",
    description:
      "Personal Portfolio is a modern web application showcasing my projects, technical skills, achievements, and professional journey in an interactive and responsive design.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, projects };
