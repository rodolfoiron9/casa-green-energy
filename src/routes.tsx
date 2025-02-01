import { createBrowserRouter } from "react-router-dom";
import Auth from "@/pages/Auth";
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import Admin from "@/pages/admin/Admin";
import Profile from "@/pages/admin/Profile";
import Settings from "@/pages/admin/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/profile",
    element: <Profile />,
  },
  {
    path: "/admin/settings",
    element: <Settings />,
  },
]);