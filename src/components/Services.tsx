import { motion } from "framer-motion";
import { Leaf, Thermometer, Home, Zap, Tool, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  const services = [
    {
      title: "Air Source Heat Pumps",
      description: "Efficient heating solutions that reduce carbon footprint and energy costs. Government grant of £7,500 available.",
      icon: Thermometer,
    },
    {
      title: "Electrical Services",
      description: "Complete electrical solutions from installation to maintenance, ensuring safety and efficiency.",
      icon: Zap,
    },
    {
      title: "Home Energy Solutions",
      description: "Comprehensive home energy assessments and sustainable improvements for modern living.",
      icon: Home,
    },
    {
      title: "Maintenance Services",
      description: "Regular maintenance and servicing to keep your systems running at peak efficiency.",
      icon: Tool,
    },
    {
      title: "Green Energy Systems",
      description: "Renewable energy installations for a sustainable future, including solar and wind solutions.",
      icon: Leaf,
    },
    {
      title: "Warranty & Protection",
      description: "Extended warranty options and protection plans for your peace of mind.",
      icon: Shield,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-casa-navy/95 to-casa-blue/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive renewable energy solutions for your home and business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:border-casa-gold 
                             transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-casa-gold/20 
                                flex items-center justify-center group-hover:bg-casa-gold/30 
                                transition-all duration-300">
                    <service.icon className="w-8 h-8 text-casa-gold" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;