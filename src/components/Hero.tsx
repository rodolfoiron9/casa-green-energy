import { motion } from "framer-motion";
import { ArrowRight, Package, Truck, Headphones, Calculator, Phone, FileText, HelpCircle, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { toast } from "sonner";

const Hero = () => {
  const [showHelp, setShowHelp] = useState(false);
  const [selectedService, setSelectedService] = useState("heat-pumps");
  const [postcode, setPostcode] = useState("");

  const services = [
    { id: "heat-pumps", label: "Air Source Heat Pumps" },
    { id: "electrical-services", label: "Electrical Services" },
    { id: "energy-solutions", label: "Home Energy Solutions" },
    { id: "maintenance", label: "Maintenance Services" },
    { id: "green-energy", label: "Green Energy Systems" },
    { id: "warranty", label: "Warranty & Protection" }
  ];

  const handleSubmit = () => {
    if (!selectedService || !postcode) {
      toast.error("Please select a service and enter your postcode");
      return;
    }
    toast.success(`Booking submitted for ${selectedService} service in ${postcode}`);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-casa-navy via-casa-navy/95 to-casa-blue/90 overflow-hidden">
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.344 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413L30 11.8l7.07 7.414v-.001zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E')",
          backgroundSize: '30px 30px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
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

          {/* Service Selection and Postcode Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
          >
            <Select
              value={selectedService}
              onValueChange={setSelectedService}
            >
              <SelectTrigger className="w-full md:w-[200px] bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="I need help with..." />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-lg border-white/20">
                {services.map((service) => (
                  <SelectItem
                    key={service.id}
                    value={service.id}
                    className="text-casa-navy hover:text-casa-gold transition-colors"
                  >
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              type="text"
              placeholder="Enter postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="w-full md:w-[200px] bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />

            <Button
              onClick={handleSubmit}
              className="w-full md:w-auto bg-casa-gold text-casa-navy hover:bg-white 
                       transition-all duration-300 font-semibold"
            >
              Book Now
            </Button>
          </motion.div>

          {/* How Can I Help You Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Button
              onClick={() => setShowHelp(!showHelp)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white 
                       text-casa-navy font-semibold rounded-full 
                       hover:bg-casa-gold transition-all duration-300"
            >
              <HelpCircle className="w-5 h-5" />
              How Can I Help You?
            </Button>

            {showHelp && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20
                           flex items-center gap-3 p-6 rounded-xl"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Calculator className="w-6 h-6" />
                  <div className="text-left">
                    <h3 className="font-semibold">Get a Quote</h3>
                    <p className="text-sm opacity-80">Quick estimate for your project</p>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20
                           flex items-center gap-3 p-6 rounded-xl"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Phone className="w-6 h-6" />
                  <div className="text-left">
                    <h3 className="font-semibold">Talk to an Expert</h3>
                    <p className="text-sm opacity-80">Get professional advice</p>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20
                           flex items-center gap-3 p-6 rounded-xl"
                  onClick={() => window.location.href = '/blog'}
                >
                  <FileText className="w-6 h-6" />
                  <div className="text-left">
                    <h3 className="font-semibold">Browse Resources</h3>
                    <p className="text-sm opacity-80">Guides and documentation</p>
                  </div>
                </Button>
              </motion.div>
            )}
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-casa-gold 
                     text-casa-navy font-semibold rounded-full 
                     hover:bg-white transition-all duration-300"
          >
            Explore Our Products
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
          {[
            {
              icon: Package,
              title: "Quality Materials",
              description: "Premium building supplies"
            },
            {
              icon: Headphones,
              title: "Expert Advice",
              description: "Professional guidance"
            },
            {
              icon: Truck,
              title: "Fast Delivery",
              description: "Reliable shipping"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6
                         border border-white/20 hover:bg-white/20
                         transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-casa-gold mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
