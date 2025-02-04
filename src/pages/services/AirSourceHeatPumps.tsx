import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";

const AirSourceHeatPumps = () => {
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
            <Thermometer className="w-8 h-8" color="#0EB067" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-4">Air Source Heat Pumps</h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto mb-8">
            Efficient heating solutions that reduce carbon footprint and energy costs. Government grant of £7,500 available.
          </p>
          <Link to="/contact">
            <Button className="bg-casa-blue text-white hover:bg-casa-blue/90 flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-casa-navy mb-4">Benefits</h2>
            <ul className="space-y-3 text-casa-navy/80">
              <li>• Reduced carbon emissions</li>
              <li>• Lower energy bills</li>
              <li>• Government incentives available</li>
              <li>• Year-round heating and cooling</li>
              <li>• Long system lifespan</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-casa-navy mb-4">How It Works</h2>
            <p className="text-casa-navy/80">
              Air source heat pumps extract heat from the outside air and transfer it into your home.
              This process is highly efficient and can provide both heating in winter and cooling in summer.
              The system works similarly to a refrigerator but in reverse, using electricity to power the pump
              rather than directly heating your home.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AirSourceHeatPumps;
