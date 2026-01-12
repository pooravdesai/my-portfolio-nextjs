import { INavItem } from "@/types";
import {
  faHome,
  faUser,
  faBriefcase,
  faTimeline,
  faAward,
  faLaptopCode,
  faEnvelope,
  faFile,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export const navMenus: INavItem[] = [
  {
    name: "Home",
    link: "/#home",
    icon: faHome,
  },
  {
    name: "About",
    link: "/#about",
    icon: faUser,
  },
  // {
  //   name: "Services",
  //   link: "/#services",
  //   icon: faBriefcase,
  // },
  {
    name: "Experiences",
    link: "/#experiences",
    icon: faTimeline,
  },
  {
    name: "Projects",
    link: "/#projects-research",
    icon: faLaptopCode,
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: faAward,
  },
  {
    name: "Leadership",
    link: "/#leadership",
    icon: faHandshake,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: faEnvelope,
  },
  {
    name: "Resume",
    link: "/resume",
    icon: faFile,
  },
];
