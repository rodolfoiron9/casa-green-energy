import { motion } from "framer-motion";
import { ArrowRight, Home, Leaf, Sun } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-casa-navy to-casa-blue">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(9)].map((_, i) => {
          const Icon = i % 3 === 0 ? Home : i % 3 === 1 ? Leaf : Sun;
          return (
            <motion.div
              key={i}
              className="absolute"
              initial={{ y: Math.random() * 100 }}
              animate={{
                y: [Math.random() * 100, Math.random() * -100],
                x: [Math.random() * 100, Math.random() * -100],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Icon className="w-12 h-12 text-casa-gold/20" />
            </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Renewable Energy Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
        >
          Transform your home with sustainable energy solutions. 
          Take advantage of the £7,500 government grant today.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full 
                     text-white border border-white/20 
                     flex items-center gap-2 mx-auto
                     hover:bg-white/20 hover:border-casa-gold 
                     transition-all duration-300
                     animate-glow"
        >
          Discover Our Services
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;