import { motion } from "framer-motion";
import { Lightbulb, Leaf, Home, Thermometer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EnergySavingTips = () => {
  const tips = [
    {
      title: "Smart Lighting Solutions",
      description: "Switch to LED bulbs and install motion sensors to reduce unnecessary lighting usage.",
      icon: Lightbulb,
    },
    {
      title: "Efficient Heating & Cooling",
      description: "Maintain optimal temperature settings and regularly service your HVAC systems.",
      icon: Thermometer,
    },
    {
      title: "Home Insulation",
      description: "Ensure proper insulation in walls, roof, and windows to minimize heat loss.",
      icon: Home,
    },
    {
      title: "Green Energy Practices",
      description: "Incorporate renewable energy solutions and energy-efficient appliances.",
      icon: Leaf,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-[#f8f8f8] via-[#f1f1f1] to-[#e5e5e5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-casa-navy mb-4">Energy Saving Tips</h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Practical advice to help you reduce energy consumption and save money.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-casa-gold/10 flex items-center justify-center">
                    <tip.icon className="w-6 h-6 text-casa-gold" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-casa-navy">
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-casa-navy/80">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-casa-navy mb-4">
            Need Professional Advice?
          </h2>
          <p className="text-casa-navy/80 mb-8">
            Our experts are here to help you implement these energy-saving solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-casa-gold text-white px-8 py-3 rounded-lg 
                     hover:bg-casa-gold/90 transition-colors duration-300"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default EnergySavingTips;