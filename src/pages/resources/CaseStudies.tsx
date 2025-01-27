import { motion } from "framer-motion";
import { Building, Home, Factory, FileText } from "lucide-react";

const CaseStudies = () => {
  const studies = [
    {
      title: "Victorian House Renovation",
      description: "Complete energy efficiency upgrade resulting in 60% reduction in energy bills.",
      icon: <Home className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Commercial Building Retrofit",
      description: "Installation of heat pump system in a multi-story office building.",
      icon: <Building className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Industrial Heat Recovery",
      description: "Innovative heat recovery system for manufacturing facility.",
      icon: <Factory className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Social Housing Project",
      description: "Large-scale energy efficiency improvements across housing estate.",
      icon: <FileText className="w-8 h-8 text-casa-gold" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1f1f1] to-[#e5e5e5] pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-4">Case Studies</h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Real-world examples of successful energy efficiency projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                {study.icon}
                <h2 className="text-2xl font-bold text-casa-navy">{study.title}</h2>
              </div>
              <p className="text-casa-navy/80">{study.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;