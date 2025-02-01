import { createBrowserRouter } from "react-router-dom";
import Auth from "@/pages/Auth";
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import Admin from "@/pages/admin/Admin";
import BlogManagement from "@/pages/admin/BlogManagement";

// Create placeholder components for new routes
const PlaceholderPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Coming Soon</h1>
    <p>This page is under development.</p>
  </div>
);

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
  // New admin routes
  {
    path: "/admin/forms",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/faqs",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/footer",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/server-content",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/leads",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/bookings",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/downloads",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/subscribers",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/templates",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/database",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/chatbot",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/api-keys",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/analytics",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/activity",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/settings",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/docs",
    element: <PlaceholderPage />,
  },
  {
    path: "/admin/support",
    element: <PlaceholderPage />,
  },
]);