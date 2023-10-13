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

import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { GrInProgress } from "react-icons/gr";

import hooBank from "../assets/hoobank.png";
import comingSoon from "../assets/coming-soon.jpg";
import portfolio from "../assets/portfolio.jpg";
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
    id: "about",
    href: "#about",
    iconType: AiOutlineUser,
  },
  {
    id: "skills",
    href: "#skills",
    iconType: RiServiceLine,
  },
  {
    id: "portfolio",
    href: "#portfolio",
    iconType: BiBook,
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
          "Jquery",
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
    id: "hoobank",
    title: "Web Design for a Digital Bank",
    description:
      "Mockup for an electronic bank for cryptocurrencies and payments.",
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
  // {
  //   id: "portfolio-01",
  //   title: "React Portfolio",
  //   description: "See the files of this Web Portfolio",
  //   img: hooBank,
  //   links: [
  //     {
  //       id: "github",
  //       state: true,
  //       hrefGithub: "https://github.com/emaadev/hoobank",
  //     },
  //     {
  //       id: "demolive",
  //       state: true,
  //       hrefLive: "https://emaadev.github.io/hoobank/",
  //     },
  //   ],
  //   iconTechnologies: [
  //     {
  //       id: "react",
  //       IconType: FaReact,
  //     },
  //     {
  //       id: "tailwindcss",
  //       IconType: SiTailwindcss,
  //     },
  //   ],
  // },
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
