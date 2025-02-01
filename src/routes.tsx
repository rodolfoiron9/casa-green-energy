import { createBrowserRouter } from "react-router-dom";
import Auth from "@/pages/Auth";
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import Admin from "@/pages/admin/Admin";
import BlogManagement from "@/pages/admin/BlogManagement";
import Templates from "@/pages/admin/Templates";
import Settings from "@/pages/admin/Settings";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AdminLayout } from "@/components/admin/AdminLayout";

// Create placeholder components for new routes
const PlaceholderPage = () => (
  <AdminLayout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Coming Soon</h1>
      <p>This page is under development.</p>
    </div>
  </AdminLayout>
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
  // Admin routes wrapped with ProtectedRoute and AdminLayout
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Admin />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/blog",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <BlogManagement />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/templates",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Templates />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/settings",
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Settings />
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  // New admin routes with proper wrapping
  {
    path: "/admin/forms",
    element: <ProtectedRoute><PlaceholderPage /></ProtectedRoute>,
  },
  {
    path: "/admin/faqs",
    element: <ProtectedRoute><PlaceholderPage /></ProtectedRoute>,
  },
  {
    path: "/admin/footer",
    element: <ProtectedRoute><PlaceholderPage /></ProtectedRoute>,
  },
  {
    path: "/admin/server-content",
    element: <ProtectedRoute><PlaceholderPage /></ProtectedRoute>,
  },
  {
    path: "/admin/leads",
    element: <ProtectedRoute><PlaceholderPage /></ProtectedRoute>,
  },
  {
    path: "/admin/bookings",
    element: <ProtectedRoute><PlaceholderPage /></ProtectedRoute>,
  },
  {
    path: "/admin/downloads",
    element: <ProtectedRoute><PlaceholderPage /></ProtectedRoute>,
  },
  {
    path: "/admin/subscribers",
    element: <ProtectedRoute><PlaceholderPage /></ProtectedRoute>,
  },
  {
    path: "/admin/database",
    element: <ProtectedRoute><PlaceholderPage /></ProtectedRoute>,
  },
  {
    path: "/admin/chatbot",
    element: <ProtectedRoute><PlaceholderPage /></ProtectedRoute>,
  },
  {
    path: "/admin/api-keys",
    element: <ProtectedRoute><PlaceholderPage /></ProtectedRoute>,
  },
  {
    path: "/admin/analytics",
    element: <ProtectedRoute><PlaceholderPage /></ProtectedRoute>,
  },
  {
    path: "/admin/activity",
    element: <ProtectedRoute><PlaceholderPage /></ProtectedRoute>,
  },
  {
    path: "/admin/docs",
    element: <ProtectedRoute><PlaceholderPage /></ProtectedRoute>,
  },
  {
    path: "/admin/support",
    element: <ProtectedRoute><PlaceholderPage /></ProtectedRoute>,
  },
]);