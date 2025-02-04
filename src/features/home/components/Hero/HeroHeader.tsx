import { motion } from "framer-motion";

export function HeroHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-casa-navy bg-white/90 px-6 py-4 rounded-lg shadow-lg mb-6 leading-tight inline-block">
        Transform Your Home with Green Energy Solutions
      </h1>
      <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed bg-casa-navy/80 p-4 rounded-lg shadow-md">
        Expert installation of heat pumps, solar panels, and smart energy systems. 
        Save money while saving the planet with our professional services.
      </p>
    </motion.div>
  );
}