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
        Quality Building Supplies for Every Project
      </h1>
      <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
        Your trusted partner in roofing and building materials. Professional service, 
        expert advice, and top-quality products.
      </p>
    </motion.div>
  );
};

export default HeroHeader;