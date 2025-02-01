import { createBrowserRouter } from "react-router-dom";
import Auth from "@/pages/Auth";
import Dashboard from "@/pages/Dashboard";
import Overview from "@/pages/dashboard/Overview";
import Leads from "@/pages/dashboard/Leads";
import Subscribers from "@/pages/dashboard/Subscribers";
import Forms from "@/pages/dashboard/Forms";
import BlogPosts from "@/pages/dashboard/BlogPosts";
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import CaseStudies from "@/pages/resources/CaseStudies";
import EnergySavingTips from "@/pages/resources/EnergySavingTips";
import Faqs from "@/pages/resources/Faqs";
import GovernmentGrants from "@/pages/resources/GovernmentGrants";
import AirSourceHeatPumps from "@/pages/services/AirSourceHeatPumps";
import ElectricalServices from "@/pages/services/ElectricalServices";
import GreenEnergySystems from "@/pages/services/GreenEnergySystems";
import HomeEnergySolutions from "@/pages/services/HomeEnergySolutions";
import MaintenanceServices from "@/pages/services/MaintenanceServices";
import WarrantyProtection from "@/pages/services/WarrantyProtection";

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
      {
        path: "blog-posts",
        element: <BlogPosts />,
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
  {
    path: "/resources/case-studies",
    element: <CaseStudies />,
  },
  {
    path: "/resources/energy-saving-tips",
    element: <EnergySavingTips />,
  },
  {
    path: "/resources/faqs",
    element: <Faqs />,
  },
  {
    path: "/resources/government-grants",
    element: <GovernmentGrants />,
  },
  {
    path: "/services/air-source-heat-pumps",
    element: <AirSourceHeatPumps />,
  },
  {
    path: "/services/electrical-services",
    element: <ElectricalServices />,
  },
  {
    path: "/services/green-energy-systems",
    element: <GreenEnergySystems />,
  },
  {
    path: "/services/home-energy-solutions",
    element: <HomeEnergySolutions />,
  },
  {
    path: "/services/maintenance-services",
    element: <MaintenanceServices />,
  },
  {
    path: "/services/warranty-protection",
    element: <WarrantyProtection />,
  },
]);