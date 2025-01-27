import { motion } from "framer-motion";
import { Home, Battery, Lightbulb, ThermometerSun } from "lucide-react";

const HomeEnergySolutions = () => {
  const solutions = [
    {
      title: "Energy Audits",
      description: "Comprehensive assessment of your home's energy usage and efficiency opportunities.",
      icon: <ThermometerSun className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Smart Home Integration",
      description: "Installation of smart thermostats and energy monitoring systems.",
      icon: <Home className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Battery Storage",
      description: "Home battery solutions to store excess energy and reduce peak consumption.",
      icon: <Battery className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "LED Lighting Upgrades",
      description: "Energy-efficient lighting solutions for your entire home.",
      icon: <Lightbulb className="w-8 h-8 text-casa-gold" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1f1f1] to-[#e5e5e5] pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-4">Home Energy Solutions</h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Comprehensive energy solutions to make your home more efficient and sustainable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                {solution.icon}
                <h2 className="text-2xl font-bold text-casa-navy">{solution.title}</h2>
              </div>
              <p className="text-casa-navy/80">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeEnergySolutions;