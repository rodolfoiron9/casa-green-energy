import { motion } from "framer-motion";
import { ArrowRight, Home, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 to-gray-100/90 z-0" />
        
        {/* Floating Icons Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ y: Math.random() * 100 }}
              animate={{
                y: [Math.random() * -50, Math.random() * 50],
                x: [Math.random() * -50, Math.random() * 50],
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
              <Home className="w-12 h-12 text-casa-gold/20" />
            </motion.div>
          ))}
        </motion.div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-casa-navy mb-6">
              Heating, Plumbing, Electrics
              <span className="block text-2xl md:text-3xl mt-2 text-casa-gold">
                Built for Comfort and Sustainability
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Professional heating, plumbing, and electrical services for your home.
              We specialize in sustainable solutions that save you money while protecting the environment.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-casa-navy hover:bg-casa-navy/90 text-white px-8 py-6 text-lg rounded-full 
                          shadow-lg hover:shadow-xl transition-all duration-300 
                          border border-white/20 backdrop-blur-sm"
              >
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-casa-navy mb-4">
              Why Choose CASA?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing sustainable, efficient solutions for your home
              comfort needs. Our expertise spans heat pumps, renewable energy, and modern
              electrical systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="w-10 h-10" />,
                title: "Sustainable Solutions",
                description: "Energy-efficient systems that reduce your carbon footprint and utility bills.",
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Expert Installation",
                description: "Professional installation by certified technicians with years of experience.",
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Smart Integration",
                description: "Modern systems that work together for optimal home comfort and efficiency.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="text-casa-gold mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-casa-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Testimonials Section */}
      <TestimonialsCarousel />

      {/* Floating CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 5,
        }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link to="/contact">
          <Button
            size="lg"
            className="bg-casa-gold hover:bg-casa-gold/90 text-white rounded-full shadow-lg
                      hover:shadow-xl transition-all duration-300"
          >
            Get a Quote <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Index;
