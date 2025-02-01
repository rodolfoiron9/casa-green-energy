import { motion } from "framer-motion";
import { Shield, Award, Leaf, PiggyBank, Clock, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "MCS Certified",
    description: "Fully accredited installations"
  },
  {
    icon: Award,
    title: "10 Year Warranty",
    description: "Peace of mind guarantee"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce carbon footprint"
  },
  {
    icon: PiggyBank,
    title: "Save Money",
    description: "Lower energy bills"
  },
  {
    icon: Clock,
    title: "Quick Install",
    description: "Efficient service"
  },
  {
    icon: ThumbsUp,
    title: "Expert Support",
    description: "24/7 assistance"
  }
];

export function HeroFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6
                     border border-white/20 hover:bg-white/20 hover:scale-105
                     transition-all duration-300 group"
        >
          <feature.icon className="w-12 h-12 text-casa-gold mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-white/70">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}