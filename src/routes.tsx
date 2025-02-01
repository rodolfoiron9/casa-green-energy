import { createBrowserRouter } from "react-router-dom";
import Auth from "@/pages/Auth";
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import Admin from "@/pages/admin/Admin";
import BlogManagement from "@/pages/admin/BlogManagement";

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
    path: "/admin/blog",
    element: <BlogManagement />,
  },
]);