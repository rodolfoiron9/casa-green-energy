import { createBrowserRouter } from "react-router-dom";
import Auth from "@/pages/Auth";
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import Dashboard from "@/pages/admin/Dashboard";
import AIChatPage from "@/pages/admin/AIChatPage";
import { AdminLayout } from "@/components/admin/AdminLayout";

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
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "ai-chat",
        element: <AIChatPage />,
      },
      {
        path: "new-post",
        element: <Dashboard />, // TODO: Implement NewPost component
      },
      {
        path: "settings",
        element: <Dashboard />, // TODO: Implement Settings component
      },
      {
        path: "activity",
        element: <Dashboard />, // TODO: Implement Activity component
      },
    ],
  },
]);