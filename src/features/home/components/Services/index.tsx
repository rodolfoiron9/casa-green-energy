import { motion } from "framer-motion";
import { Leaf, Thermometer, Home, Zap, Shield } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Air Source Heat Pumps",
    description: "Efficient heating solutions that reduce carbon footprint and energy costs. Government grant of £7,500 available.",
    icon: Thermometer,
  },
  {
    title: "Electrical Services",
    description: "Complete electrical solutions from installation to maintenance, ensuring safety and efficiency.",
    icon: Zap,
  },
  {
    title: "Home Energy Solutions",
    description: "Comprehensive home energy assessments and sustainable improvements for modern living.",
    icon: Home,
  },
  {
    title: "Maintenance Services",
    description: "Regular maintenance and servicing to keep your systems running at peak efficiency.",
    icon: Shield,
  },
  {
    title: "Green Energy Systems",
    description: "Renewable energy installations for a sustainable future, including solar and wind solutions.",
    icon: Leaf,
  },
  {
    title: "Warranty & Protection",
    description: "Extended warranty options and protection plans for your peace of mind.",
    icon: Shield,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#f8f8f8] via-[#f1f1f1] to-[#e5e5e5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-casa-navy mb-4">Our Services</h2>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Comprehensive renewable energy solutions for your home and business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}