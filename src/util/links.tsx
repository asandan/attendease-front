import {
  CircleUserRound,
  Contact,
  LayoutDashboard,
  SearchSlash,
  Home
} from "lucide-react";

export const LINKS = [
  {
    title: "Home",
    url: "/",
    icon: <Home />,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    title: "My profile",
    url: "/user-profile",
    icon: <CircleUserRound />,
  },
  {
    title: "About us",
    url: "/about",
    icon: <SearchSlash />,
  },
  {
    title: "Contacts",
    url: "/contact",
    icon: <Contact />,
  },
];
