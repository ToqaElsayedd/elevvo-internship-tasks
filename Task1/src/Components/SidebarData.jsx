import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Contact from "@mui/icons-material/Mail";
import Analytics from "@mui/icons-material/Assessment";
import Dashboard from "@mui/icons-material/Dashboard";
import Projects from "@mui/icons-material/FolderShared";
import Settings from "@mui/icons-material/Settings";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Analytics",
    icon: <Analytics />,
    link: "/analytics",
  },
  {
    title: "Dashboard",
    icon: <Dashboard />,
    link: "/dashboard",
  },
  {
    title: "Projects",
    icon: <Projects />,
    link: "/projects",
  },
  {
    title: "Contact",
    icon: <Contact />,
    link: "/contact",
  },
  {
    title: "Settings",
    icon: <Settings />,
    link: "/settings",
  },
];
