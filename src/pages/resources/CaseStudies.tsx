import { motion } from "framer-motion";
import { Home, LineChart, ThermometerSun, Battery } from "lucide-react";

const CaseStudies = () => {
  const studies = [
    {
      title: "Victorian Home Renovation",
      description: "Complete energy system upgrade resulting in 70% reduction in energy bills.",
      icon: <Home className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Commercial Building Retrofit",
      description: "Installation of heat pump system with significant cost savings.",
      icon: <LineChart className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "New Build Integration",
      description: "Green energy systems incorporated from the ground up.",
      icon: <ThermometerSun className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Solar + Storage Solution",
      description: "Combined solar and battery installation for optimal efficiency.",
      icon: <Battery className="w-8 h-8 text-casa-gold" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f8f8] to-[#e5e5e5] pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-4">
            Case Studies
          </h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Real-world examples of our successful energy solution implementations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-casa-navy/5 rounded-full p-3">
                  {study.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-casa-navy mb-2">
                    {study.title}
                  </h3>
                  <p className="text-casa-navy/70">
                    {study.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;