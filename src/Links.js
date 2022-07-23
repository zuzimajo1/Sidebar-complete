
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io5";



export const Links = [
  {
    icon: <FaIcons.FaHome />,
    name: "Home",
    to: "/",
    cName: "nav-class",
  },
  {
    icon: <RiIcons.RiTeamFill />,
    name: "Team",
    to: "/team",
    cName: "nav-class",
  },
  {
    icon: <FaIcons.FaFolderOpen />,
    name: "Projects",
    to: "/projects",
    cName: "nav-class",
  },
  {
    icon: <FaIcons.FaCalendarAlt />,
    name: "Calendar",
    to: "/calendar",
    cName: "nav-class",
  },
  {
    icon: <IoIcons.IoDocumentTextOutline />,
    name: "Documents",
    to: "/documents",
    cName: "nav-class",
  },
];

export const Socials = [
  {
    social: <FaIcons.FaFacebook />,
    site: "https://facebook.com",
  },
  {
    social: <GrIcons.GrTwitter />,
    site: "https://twitter.com",
  },
  {
    social: <AiIcons.AiFillLinkedin />,
    site: "https://linkedin.com",
  },
  {
    social: <GiIcons.GiCutDiamond />,
    site: "#",
  },
];
