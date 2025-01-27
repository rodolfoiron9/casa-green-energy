import { motion } from "framer-motion";
import { Award, DollarSign, FileText, HelpCircle } from "lucide-react";

const GovernmentGrants = () => {
  const grants = [
    {
      title: "Boiler Upgrade Scheme",
      description: "Get up to £7,500 towards the cost of a heat pump to replace your gas boiler.",
      icon: <DollarSign className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "ECO4 Scheme",
      description: "Energy Company Obligation scheme for home heating and insulation improvements.",
      icon: <Award className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Green Homes Grant",
      description: "Local authority delivery scheme for energy-efficient home improvements.",
      icon: <FileText className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Eligibility Check",
      description: "Find out which grants you might be eligible for with our quick assessment.",
      icon: <HelpCircle className="w-8 h-8 text-casa-gold" />
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
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-4">Government Grants</h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Explore available government funding to help make your home more energy-efficient.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {grants.map((grant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                {grant.icon}
                <h2 className="text-2xl font-bold text-casa-navy">{grant.title}</h2>
              </div>
              <p className="text-casa-navy/80">{grant.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernmentGrants;