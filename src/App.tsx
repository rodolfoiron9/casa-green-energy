import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import AiChatDialog from "./components/AiChatDialog";

const queryClient = new QueryClient();

// Wrapper component to handle conditional footer rendering
const AppContent = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="relative min-h-screen flex flex-col">
      <Toaster />
      <Sonner />
      <Navigation />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
      {!isDashboard && <Footer />}
      <div className="fixed bottom-6 right-6 z-50">
        <AiChatDialog />
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;