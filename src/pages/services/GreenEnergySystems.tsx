import { motion } from "framer-motion";
import { Sun, Wind, Battery, Leaf } from "lucide-react";

const GreenEnergySystems = () => {
  const systems = [
    {
      title: "Solar Panel Systems",
      description: "Harness the power of the sun with our high-efficiency solar panels.",
      icon: <Sun className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Wind Energy Solutions",
      description: "Small-scale wind turbines for residential and commercial use.",
      icon: <Wind className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Energy Storage",
      description: "Battery systems to store excess energy for later use.",
      icon: <Battery className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Eco-Friendly Integration",
      description: "Seamlessly integrate green energy systems into your property.",
      icon: <Leaf className="w-8 h-8 text-casa-gold" />
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
            Green Energy Systems
          </h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Sustainable energy solutions for a cleaner, greener future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-casa-navy/5 rounded-full p-3">
                  {system.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-casa-navy mb-2">
                    {system.title}
                  </h3>
                  <p className="text-casa-navy/70">
                    {system.description}
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

export default GreenEnergySystems;