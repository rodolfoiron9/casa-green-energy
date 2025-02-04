import { motion } from "framer-motion";
import { Leaf, Thermometer, Home, Zap, Shield } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Air Source Heat Pumps",
    description: "Efficient heating solutions that reduce carbon footprint and energy costs. Government grant of £7,500 available.",
    icon: Thermometer,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
  },
  {
    title: "Electrical Services",
    description: "Complete electrical solutions from installation to maintenance, ensuring safety and efficiency.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "Home Energy Solutions",
    description: "Comprehensive home energy assessments and sustainable improvements for modern living.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "Maintenance Services",
    description: "Regular maintenance and servicing to keep your systems running at peak efficiency.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    title: "Green Energy Systems",
    description: "Renewable energy installations for a sustainable future, including solar and wind solutions.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    title: "Warranty & Protection",
    description: "Extended warranty options and protection plans for your peace of mind.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
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
          <h1 className="text-5xl font-bold text-casa-navy mb-2">Our Services</h1>
          <h2 className="text-4xl font-bold text-casa-navy/90 mb-2">Comprehensive Solutions</h2>
          <h3 className="text-3xl text-casa-navy/80 mb-4">For Your Home and Business</h3>
          <p className="text-casa-navy/70 text-lg max-w-2xl mx-auto">
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