import { createBrowserRouter } from "react-router-dom";
import Auth from "@/pages/Auth";
import Dashboard from "@/pages/Dashboard";
import Overview from "@/pages/dashboard/Overview";
import Leads from "@/pages/dashboard/Leads";
import Subscribers from "@/pages/dashboard/Subscribers";
import Forms from "@/pages/dashboard/Forms";
import BlogPosts from "@/pages/dashboard/BlogPosts";
import Templates from "@/pages/dashboard/Templates";
import Analytics from "@/pages/dashboard/Analytics";
import EmailCampaigns from "@/pages/dashboard/EmailCampaigns";
import Seo from "@/pages/dashboard/Seo";
import ApiKeys from "@/pages/dashboard/ApiKeys";
import Database from "@/pages/dashboard/Database";
import ServerStatus from "@/pages/dashboard/ServerStatus";
import Security from "@/pages/dashboard/Security";
import Faqs from "@/pages/dashboard/Faqs";
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import AiChat from "@/pages/dashboard/AiChat";
import AiContent from "@/pages/dashboard/AiContent";
import AiAnalytics from "@/pages/dashboard/AiAnalytics";
import Chatbot from "@/pages/dashboard/Chatbot";

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
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Overview />,
      },
      // AI Features
      {
        path: "ai-chat",
        element: <AiChat />,
      },
      {
        path: "ai-content",
        element: <AiContent />,
      },
      {
        path: "ai-analytics",
        element: <AiAnalytics />,
      },
      {
        path: "chatbot",
        element: <Chatbot />,
      },
      // Lead Management
      {
        path: "leads",
        element: <Leads />,
      },
      {
        path: "subscribers",
        element: <Subscribers />,
      },
      {
        path: "forms",
        element: <Forms />,
      },
      // Content Management
      {
        path: "blog-posts",
        element: <BlogPosts />,
      },
      {
        path: "faqs",
        element: <Faqs />,
      },
      {
        path: "templates",
        element: <Templates />,
      },
      // Marketing
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "email-campaigns",
        element: <EmailCampaigns />,
      },
      {
        path: "seo",
        element: <Seo />,
      },
      // System
      {
        path: "api-keys",
        element: <ApiKeys />,
      },
      {
        path: "database",
        element: <Database />,
      },
      {
        path: "server",
        element: <ServerStatus />,
      },
      {
        path: "security",
        element: <Security />,
      },
    ],
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
]);
