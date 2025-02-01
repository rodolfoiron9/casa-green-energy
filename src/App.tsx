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
import Auth from "./pages/Auth";
import AiChatDialog from "./components/AiChatDialog";
import Dashboard from "./pages/admin/Dashboard";

// Service Pages
import AirSourceHeatPumps from "./pages/services/AirSourceHeatPumps";
import ElectricalServices from "./pages/services/ElectricalServices";
import HomeEnergySolutions from "./pages/services/HomeEnergySolutions";
import MaintenanceServices from "./pages/services/MaintenanceServices";
import GreenEnergySystems from "./pages/services/GreenEnergySystems";
import WarrantyProtection from "./pages/services/WarrantyProtection";

// Resource Pages
import EnergySavingTips from "./pages/resources/EnergySavingTips";
import GovernmentGrants from "./pages/resources/GovernmentGrants";
import CaseStudies from "./pages/resources/CaseStudies";
import Faqs from "./pages/resources/Faqs";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="relative min-h-screen flex flex-col">
      <Toaster />
      <Sonner />
      {!isAdminRoute && <Navigation />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          
          {/* Service Routes */}
          <Route path="/services/air-source-heat-pumps" element={<AirSourceHeatPumps />} />
          <Route path="/services/electrical-services" element={<ElectricalServices />} />
          <Route path="/services/home-energy-solutions" element={<HomeEnergySolutions />} />
          <Route path="/services/maintenance-services" element={<MaintenanceServices />} />
          <Route path="/services/green-energy-systems" element={<GreenEnergySystems />} />
          <Route path="/services/warranty-protection" element={<WarrantyProtection />} />
          
          {/* Resource Routes */}
          <Route path="/resources/energy-saving-tips" element={<EnergySavingTips />} />
          <Route path="/resources/government-grants" element={<GovernmentGrants />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/faqs" element={<Faqs />} />
        </Routes>
      </div>
      {!isAdminRoute && <Footer />}
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