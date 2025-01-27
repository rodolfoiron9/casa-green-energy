import { motion } from "framer-motion";
import { Zap, Droplets, Wrench } from "lucide-react";

const services = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Air Source Heat Pumps",
    description: "Energy-efficient heating solutions that reduce your carbon footprint.",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Plumbing Systems",
    description: "Modern plumbing solutions for optimal water management.",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Electrical Services",
    description: "Professional electrical installations and maintenance.",
  },
];

const Services = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-casa-navy text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white/80 backdrop-blur-lg
                         border border-gray-200 shadow-lg
                         hover:border-casa-gold transition-all duration-300"
            >
              <div className="text-casa-gold mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-casa-navy mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;