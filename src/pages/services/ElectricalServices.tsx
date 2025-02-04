import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ElectricalServices = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-casa-blue/10
                        flex items-center justify-center">
            <Zap className="w-8 h-8 text-casa-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-6">Electrical Services</h1>
          <p className="text-lg text-casa-navy/80 max-w-2xl mx-auto mb-8">
            Complete electrical solutions from installation to maintenance, ensuring safety and efficiency.
          </p>
          <Link to="/contact">
            <Button className="bg-casa-blue hover:bg-casa-blue/90 text-white flex items-center gap-2">
              Get Quote <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg p-8 shadow-md border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-casa-navy mb-4">Our Services</h2>
            <ul className="space-y-3 text-casa-navy/80">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-casa-blue"></div>
                Electrical installations
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-casa-blue"></div>
                Safety inspections
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-casa-blue"></div>
                Maintenance and repairs
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-casa-blue"></div>
                Emergency services
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-casa-blue"></div>
                Energy efficiency upgrades
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg p-8 shadow-md border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-casa-navy mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-casa-navy/80">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-casa-blue"></div>
                Certified professionals
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-casa-blue"></div>
                24/7 emergency support
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-casa-blue"></div>
                Competitive pricing
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-casa-blue"></div>
                Quality workmanship guarantee
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-casa-blue"></div>
                Full insurance coverage
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalServices;