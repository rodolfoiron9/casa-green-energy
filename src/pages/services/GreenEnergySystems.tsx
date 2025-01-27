import { motion } from "framer-motion";
import { Sun, Wind, Droplets, Leaf } from "lucide-react";

const GreenEnergySystems = () => {
  const systems = [
    {
      title: "Solar PV Systems",
      description: "Harness solar energy with high-efficiency photovoltaic panels.",
      icon: <Sun className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Wind Energy Solutions",
      description: "Small-scale wind turbines for residential power generation.",
      icon: <Wind className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Rainwater Harvesting",
      description: "Sustainable water management systems for your property.",
      icon: <Droplets className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Biomass Solutions",
      description: "Clean, renewable energy from organic materials.",
      icon: <Leaf className="w-8 h-8 text-casa-gold" />
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
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-4">Green Energy Systems</h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Sustainable energy solutions for a greener future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                {system.icon}
                <h2 className="text-2xl font-bold text-casa-navy">{system.title}</h2>
              </div>
              <p className="text-casa-navy/80">{system.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GreenEnergySystems;