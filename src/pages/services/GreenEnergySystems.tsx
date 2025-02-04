import { motion } from "framer-motion";
import { Sun, Wind, Battery, Leaf } from "lucide-react";

const GreenEnergySystems = () => {
  const iconProps = { className: "w-8 h-8", color: "#F2FCE2" };
  
  const systems = [
    {
      title: "Solar Panel Systems",
      description: "Harness the power of the sun with our high-efficiency solar panels.",
      icon: <Sun {...iconProps} />,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
    },
    {
      title: "Wind Energy Solutions",
      description: "Small-scale wind turbines for residential and commercial use.",
      icon: <Wind {...iconProps} />,
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Energy Storage",
      description: "Battery systems to store excess energy for later use.",
      icon: <Battery {...iconProps} />,
      image: "https://images.unsplash.com/photo-1620677368158-32b12ebeda84?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Eco-Friendly Integration",
      description: "Seamlessly integrate green energy systems into your property.",
      icon: <Leaf {...iconProps} />,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={system.image} 
                  alt={system.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-casa-navy rounded-full p-3">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GreenEnergySystems;