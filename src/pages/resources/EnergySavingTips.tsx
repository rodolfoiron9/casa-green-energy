import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const EnergySavingTips = () => {
  const tips = [
    {
      title: "Smart Heating Control",
      description: "Install a smart thermostat to optimize your heating schedule and save up to 31% on energy bills."
    },
    {
      title: "LED Lighting",
      description: "Switch to LED bulbs which use up to 90% less energy and last up to 25 times longer than traditional bulbs."
    },
    {
      title: "Insulation",
      description: "Ensure proper insulation in your walls and loft to reduce heat loss and save on heating costs."
    },
    {
      title: "Energy-Efficient Appliances",
      description: "Choose appliances with high energy ratings to reduce your electricity consumption."
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
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-casa-gold/20 to-casa-gold/30
                        flex items-center justify-center">
            <Lightbulb className="w-8 h-8 text-casa-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-4">Energy Saving Tips</h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Practical advice to help you reduce your energy consumption and save money.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-casa-navy mb-4">{tip.title}</h2>
              <p className="text-casa-navy/80">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnergySavingTips;