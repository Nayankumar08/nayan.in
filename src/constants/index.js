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
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "education",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Education",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Angular",
  //   icon: angular,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Persue Bachelers",
    company_name: "A.B.E.S Engineering College",
    company_website: "https://www.businessnext.com/crm",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "Nov 2022- Present",
    points: [
      "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering at ABES Engineering College, Ghaziabad. As a full-stack developer specializing in the React framework, I have worked on various web applications, focusing on building scalable and efficient solutions. My academic journey has provided me with hands-on experience in front-end and back-end development, database management.",
    ],
  },
  {
    title: "Intermediate",
    company_name: "D.D.P.S Govindpuram",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Apr 2022",
    points: [
      "I completed my **Intermediate (12th)** from **DDPS Govindpuram**, where I built a strong academic foundation. During this time, I developed an interest in technology and programming, which later led me to pursue a career in full-stack development.",
    ],
  },
  {
    title: "High School",
    company_name: "L.B.S.S Secondary School",
    company_website: "https://newgensoft.com/home-india/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Mar 2019 - Apr 2020",
    points: [
      "I completed my **10th grade** from **LBSS Kavi Nagar**, focusing on a well-rounded academic curriculum. This phase helped me develop a strong analytical mindset and discipline, laying the foundation for my further studies in engineering.",
    ],
  },
];

const projects = [
  {
    name: "project 1",
    description: " Description about proeject 1 Shridhar_Rai_Resume.pdf",
    tags: [
      {
        name: "technology1",
        color: "blue-text-gradient",
      },
      {
        name: "2",
        color: "green-text-gradient",
      },
      {
        name: "if 3 used",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://www.linkedin.com/in/nayan-kumar-64445128b/",
  },
  {
    name: "project 2",
    description: "Description about proeject 1 Shridhar_Rai_Resume.pdf",
    tags: [
      {
        name: "technology1",
        color: "blue-text-gradient",
      },
      {
        name: "2",
        color: "green-text-gradient",
      },
      {
        name: "if 3 used",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://www.linkedin.com/in/nayan-kumar-64445128b/",
  },
  {
    name: "project 2",
    description: "Description about proeject 1 Shridhar_Rai_Resume.pdf",
    tags: [
      {
        name: "technology1",
        color: "blue-text-gradient",
      },
      {
        name: "2",
        color: "green-text-gradient",
      },
      {
        name: "if 3 used",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://www.linkedin.com/in/nayan-kumar-64445128b/",
  },
];

const personalInfo = {
  name: "Nayan",
  fullName: "Nayan Kumar",
  email: "nknkumar1503@gmail.com",
  role: "Full Stack Developer",
  about: `I'm a skilled Full Stack developer with experience in Tailwind and
  JavaScript, and expertise in frameworks like React.Js, 
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  // resume:
  //   "https://drive.google.com/file/d/1vmiPiCLaCuqM0uuDcXQlAd8pY8yBDEOU/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/nayan-kumar-64445128b/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Nayankumar08",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_320d5xm",
  TEMPLATE_ID: "service_320d5xm",
  PUBLIC_KEY: "CWcKaWiLZdtNC3JMQ",
};
