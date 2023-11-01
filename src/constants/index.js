import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GiAchievement } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BiLogoPhp } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoJquery } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { GrInProgress } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiStreamlit } from "react-icons/si";

import hooBank from "../assets/hoobank.png";
import comingSoon from "../assets/coming-soon.jpg";
import portfolio from "../assets/portfolio.jpg";
// import weatherApp from "../assets/weatherapp.jpg";
import liveChatApp from "../assets/live-chat-app.jpg";
import fixdate from "../assets/fixdate.jpg";
import financeManager from "../assets/finance-manager.jpg";
import graphicDesign from "../assets/graphic-design.png";
import webDevelopment from "../assets/web-development.png";
import softSkills from "../assets/soft-skills.png";

export const socialMediaLinks = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/emanuel-nu%C3%B1ez-337897206/",
    title: "LinkedIn",
    iconType: BsLinkedin,
  },
  {
    id: "github",
    href: "https://github.com/emaadev",
    title: "GitHub",
    iconType: BsGithub,
  },
  {
    id: "email",
    href: "mailto:emanuel.nu02@gmail.com",
    title: "Gmail",
    iconType: BiLogoGmail,
  },
  {
    id: "whatsapp",
    href: "https://wa.me/1173614700",
    title: "WhatsApp",
    iconType: IoLogoWhatsapp,
  },
];

export const navIcons = [
  {
    id: "home",
    href: "#",
    iconType: AiOutlineHome,
  },
  {
    id: "portfolio",
    href: "#portfolio",
    iconType: BiBook,
  },
  {
    id: "skills",
    href: "#skills",
    iconType: RiServiceLine,
  },
  {
    id: "about",
    href: "#about",
    iconType: AiOutlineUser,
  },
  {
    id: "contact",
    href: "#contact",
    iconType: BiMessageSquareDetail,
  },
];

export const aboutMe = [
  {
    id: "experience",
    title: "Experience",
    description: "+3 Years Working",
    iconType: GiAchievement,
  },
  {
    id: "projects",
    title: "Projects",
    description: "+20 Done Projects",
    iconType: AiOutlineFundProjectionScreen,
  },
  {
    id: "companies",
    title: "Companies",
    description: "3 Companies Experience",
    iconType: BsFillPersonCheckFill,
  },
];

export const skills = [
  {
    id: "web-development",
    value: [
      {
        title: "Web Development",
        button: "Tap for details",
        description: [
          "CSS3",
          "Bootstrap",
          "JavaScript",
          "TypeScript",
          "ReactJS",
          "NodeJS",
          "TailwindCSS",
          "SQL",
          "jQuery",
          "PHP",
          "Git",
          "GitHub",
        ],
        src: webDevelopment,
      },
    ],
  },
  {
    id: "graphic-design",
    value: [
      {
        title: "Graphic Design",
        button: "Tap for details",
        description: [
          "AdobeXd",
          "After Effects",
          "Figma",
          "Framer Motion",
          "Illustrator",
          "Lightroom",
          "Photoshop",
          "Premiere Pro",
        ],
        src: graphicDesign,
      },
    ],
  },
  {
    id: "soft-skills",
    value: [
      {
        title: "Soft Skills",
        button: "Tap for details",
        description: [
          "Responsibility",
          "Communication",
          "Assertiveness",
          "Initiative",
          "Punctuality",
          "Empathy",
          "Ease of Learning",
          "Organization",
          "Kindness",
          "Ease of Problem Solving",
        ],
        src: softSkills,
      },
    ],
  },
];

export const technologies = [
  {
    id: "react",
    href: "https://react.dev/",
    iconType: FaReact,
  },
  {
    id: "tailwind-css",
    href: "https://tailwindcss.com/",
    iconType: SiTailwindcss,
  },
];

export const contact = [
  {
    id: "email",
    title: "Email",
    href: "mailto:emanuel.nu02@gmail.com",
    description: "emanuel.nu02@gmail.com",
    iconType: BiLogoGmail,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/emanuel-nu%C3%B1ez-337897206/",
    description: "Emanuel Nuñez",
    iconType: BsLinkedin,
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    href: "https://wa.me/1173614700",
    description: "+54 9 11 7361-4700",
    iconType: IoLogoWhatsapp,
  },
];

export const projectCards = [
  {
    id: "live-chat-app",
    title: "Live Chat App",
    description:
      "Full Stack Live Chat App with Login Auth using ReactJS, NodeJS, Express & Stream API",
    img: liveChatApp,
    links: [
      {
        id: "github",
        content: "Github",
        state: true,
        href: "https://github.com/emaadev/live-chat-app",
        btnType: "alternativeBtn",
      },
      {
        id: "demolive",
        content: "Demo Live",
        state: true,
        href: "https://live-chat-app-project.netlify.app/",
        btnType: "variantBtn",
      },
    ],
    iconTechnologies: [
      {
        id: "react",
        IconType: FaReact,
      },
      {
        id: "tailwindcss",
        IconType: SiTailwindcss,
      },
      {
        id: "nodejs",
        IconType: FaNodeJs,
      },
      {
        id: "express",
        IconType: SiExpress,
      },
      {
        id: "streamapi",
        IconType: SiStreamlit,
      },
    ],
  },
  {
    id: "hoobank",
    title: "Web Design for a Digital Bank",
    description:
      "UI Design for an electronic bank for cryptocurrencies and payments",
    img: hooBank,
    links: [
      {
        id: "github",
        content: "Github",
        state: true,
        href: "https://github.com/emaadev/hoobank",
        btnType: "alternativeBtn",
      },
      {
        id: "demolive",
        content: "Demo Live",
        state: true,
        href: "https://emaadev.github.io/hoobank/",
        btnType: "variantBtn",
      },
    ],
    iconTechnologies: [
      {
        id: "react",
        IconType: FaReact,
      },
      {
        id: "tailwindcss",
        IconType: SiTailwindcss,
      },
    ],
  },
  {
    id: "fixdate",
    title: "Fixdate Brazil",
    description:
      "I've been working on Front-End Projects for 2 years in this company",
    img: fixdate,
    links: [
      {
        id: "github",
        content: "Website",
        state: true,
        href: "https://fixdate.io/br",
        btnType: "alternativeBtn",
      },
      {
        id: "demolive",
        content: "Demo Live",
        state: false,
        href: "https://emaadev.github.io/hoobank/",
        btnType: "variantBtn",
      },
    ],
    iconTechnologies: [
      {
        id: "php",
        IconType: BiLogoPhp,
      },
      {
        id: "jquery",
        IconType: BiLogoJquery,
      },
      {
        id: "mysql",
        IconType: SiMysql,
      },
      {
        id: "bootstrap",
        IconType: FaBootstrap,
      },
      {
        id: "react",
        IconType: FaReact,
      },
    ],
  },
  {
    id: "finance-manager",
    title: "Finance Manager",
    description: "Expenses and Incomes Manager for personal use",
    img: financeManager,
    links: [
      {
        id: "github",
        content: "Github",
        state: true,
        href: "https://github.com/emaadev/finance-manager",
        btnType: "alternativeBtn",
      },
      {
        id: "demolive",
        content: "Demo Live",
        state: true,
        href: "https://emaadev.github.io/finance-manager/",
        btnType: "variantBtn",
      },
    ],
    iconTechnologies: [
      {
        id: "react",
        IconType: FaReact,
      },
      {
        id: "tailwindcss",
        IconType: SiTailwindcss,
      },
    ],
  },
  // {
  //   id: "weather-app",
  //   title: "Weather App",
  //   description: "World Weather App with Maps",
  //   img: weatherApp,
  //   links: [
  //     {
  //       id: "github",
  //       content: "Github",
  //       state: true,
  //       href: "https://github.com/emaadev/weather-app",
  //       btnType: "alternativeBtn",
  //     },
  //     {
  //       id: "demolive",
  //       content: "Demo Live",
  //       state: false,
  //       href: "",
  //       btnType: "variantBtn",
  //     },
  //   ],
  //   iconTechnologies: [
  //     {
  //       id: "react",
  //       IconType: FaReact,
  //     },
  //   ],
  // },
  {
    id: "portfolio-01",
    title: "React Portfolio",
    description: "See the code of this Web Portfolio",
    img: portfolio,
    links: [
      {
        id: "github",
        content: "Github",
        state: true,
        href: "https://github.com/emaadev/react-portfolio",
        btnType: "alternativeBtn",
      },
      {
        id: "demolive",
        content: "Demo Live",
        state: false,
        href: "https://emanuel-nunez.online/",
        btnType: "variantBtn",
      },
    ],
    iconTechnologies: [
      {
        id: "react",
        IconType: FaReact,
      },
      {
        id: "tailwindcss",
        IconType: SiTailwindcss,
      },
    ],
  },
  {
    id: "null",
    title: "In progress...",
    description: "Updating",
    img: comingSoon,
    links: [
      {
        id: "github",
        content: "Github",
        state: false,
        href: "",
        btnType: "alternativeBtn",
      },
      {
        id: "demolive",
        content: "Demo Live",
        state: false,
        href: "",
        btnType: "variantBtn",
      },
    ],
    iconTechnologies: [
      {
        id: "updating",
        IconType: GrInProgress,
      },
    ],
  },
];

export default navIcons;
