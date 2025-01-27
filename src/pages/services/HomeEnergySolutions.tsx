import { motion } from "framer-motion";
import { Home, Lightbulb, LineChart, ThermometerSun } from "lucide-react";

const HomeEnergySolutions = () => {
  const services = [
    {
      title: "Energy Audits",
      description: "Comprehensive assessment of your home's energy usage and efficiency.",
      icon: <LineChart className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Smart Home Integration",
      description: "Installation of smart thermostats and energy monitoring systems.",
      icon: <Home className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "LED Lighting Solutions",
      description: "Energy-efficient lighting upgrades for your entire home.",
      icon: <Lightbulb className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Temperature Control",
      description: "Optimize your heating and cooling systems for maximum efficiency.",
      icon: <ThermometerSun className="w-8 h-8 text-casa-gold" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f8f8] to-[#e5e5e5] pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-4">
            Home Energy Solutions
          </h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Optimize your home's energy efficiency with our comprehensive solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-casa-navy/5 rounded-full p-3">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-casa-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-casa-navy/70">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeEnergySolutions;