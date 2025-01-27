import React from 'react';
import { motion } from 'framer-motion';

const HeroHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        Transform Your Home with Green Energy Solutions
      </h1>
      <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
        Expert installation of heat pumps, solar panels, and smart energy systems. 
        Save money while saving the planet with our professional services.
      </p>
    </motion.div>
  );
};

export default HeroHeader;