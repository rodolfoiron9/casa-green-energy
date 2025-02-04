import { motion } from "framer-motion";
import { Shield, Award, Leaf } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Shield,
      title: "Expert Installation",
      description: "MCS certified installations with 10-year warranty coverage"
    },
    {
      icon: Leaf,
      title: "Sustainable Solutions",
      description: "Specializing in heat pumps and renewable energy systems"
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Award-winning customer service and support"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-casa-navy mb-4">
            About CASA Contracts
          </h2>
          <p className="text-lg text-casa-navy/70 max-w-2xl mx-auto">
            We specialize in sustainable energy solutions, providing expert installation
            and maintenance of heat pumps, renewable energy systems, and modern
            electrical solutions for homes and businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200
                       hover:border-casa-gold transition-all duration-300 group"
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-casa-gold group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-casa-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-casa-navy/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}