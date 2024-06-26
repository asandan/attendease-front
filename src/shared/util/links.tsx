import {
  CircleUserRound,
  Contact,
  SearchSlash,
  Home,
  Calendar,
  FileText,
  FileCheck2,
  FilePenLine,
  UserCheck,
} from "lucide-react";
import { ACCESS_TYPES } from "./constants";

export interface Link {
  title: string;
  url: string;
  icon: JSX.Element;
  accessType: ACCESS_TYPES;
}

export const LINKS: Link[] = [
  {
    title: "Home",
    url: "/",
    icon: <Home />,
    accessType: ACCESS_TYPES.ALL,
  },
  {
    title: "My attendance",
    url: "/attendance",
    icon: <Calendar />,
    accessType: ACCESS_TYPES.STUDENT,
  },
  {
    title: "Medical certifications",
    url: "/medical-certifications",
    icon: <FileText />,
    accessType: ACCESS_TYPES.ALL,
  },
  {
    title: "Edit user data",
    url: "/edit-user-profile",
    icon: <FilePenLine />,
    accessType: ACCESS_TYPES.ALL,
  },
  {
    title: "My profile",
    url: "/my-profile",
    icon: <CircleUserRound />,
    accessType: ACCESS_TYPES.ALL,
  },
  {
    title: "Mark student",
    url: "/mark-student",
    icon: <UserCheck />,
    accessType: ACCESS_TYPES.ALL,
  },
  // {
  //   title: "About us",
  //   url: "/about",
  //   icon: <SearchSlash />,
  //   accessType: ACCESS_TYPES.ALL,
  // },
  // {
  //   title: "Contacts",
  //   url: "/contact",
  //   icon: <Contact />,
  //   accessType: ACCESS_TYPES.ALL,
  // },
  {
    title: "Students medical certifications",
    url: "/medical-certifications-admin",
    icon: <FileCheck2 />,
    accessType: ACCESS_TYPES.ALL,
  },
];
