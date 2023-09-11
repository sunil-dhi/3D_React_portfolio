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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Designer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
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
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Front-End Developer",
      company_name: "Yukt Softwares",
      icon: meta,
      iconBg: "#383E56",
      date: "January 2022 - May 2022",
      points: [
        "Developed and maintained web applications using React.js and other related technologies.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implemented responsive design and ensuring cross-browser compatibility.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Antixo Global",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "April 2019 - June 2020",
      points: [
        "Forged comprehensive source code review, resulting in a reduction of up to 25% in software defects.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implemented and utilized memoization, Lazy loading to prevent re-render and resulting in 15% reduction of load times",
         "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
 
  
  const projects = [
    {
      name: "E-commerce store",
      description:
        "Web-based platform that allows users to search, add to cart, and manage clothing product from various p",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Material-UI",
          color: "green-text-gradient",
        },
        {
          name: "Styled Components",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/sunil-dhi/EcommerceFrontend",
    },
    {
      name: "Intuituve Quiz App",
      description:
        " A single page Web application that enables users to play quiz with more than 20 categories with advanced functionality using Material-UI",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Css3",
          color: "green-text-gradient",
        },
        {
          name: "Material-UI",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/sunil-dhi/ReactJs_Quiz-App"
    },
    {
      name: "Food Application",
      description:
        "A comprehensive food blog web application with implementation of Html, Css, Reactjs with lots of food types and categories with contact form",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "React-router",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/sunil-dhi/React-Food-App"
    },
    {
      name: "Personal Portfolio ",
      description:
        "A comprehensive Personal portfolio illustrating my skills, work experience and projects completed with contact form implemented using form.io",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "Smooth-scroll",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/sunil-dhi/ReactPPortfolioUpdated"
    },
  ];
  
  export { services, technologies, experiences, projects };