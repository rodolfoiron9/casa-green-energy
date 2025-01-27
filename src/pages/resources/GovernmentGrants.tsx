import { motion } from "framer-motion";
import { Building2, PoundSterling, FileText, CheckCircle } from "lucide-react";

const GovernmentGrants = () => {
  const grants = [
    {
      title: "Boiler Upgrade Scheme",
      description: "Get up to £7,500 towards the cost of a heat pump installation.",
      icon: <Building2 className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "ECO4 Scheme",
      description: "Energy Company Obligation scheme for home improvements.",
      icon: <PoundSterling className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Green Homes Grant",
      description: "Local authority delivery scheme for energy-efficient improvements.",
      icon: <FileText className="w-8 h-8 text-casa-gold" />
    },
    {
      title: "Eligibility Check",
      description: "Free assessment of your eligibility for government grants.",
      icon: <CheckCircle className="w-8 h-8 text-casa-gold" />
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
            Government Grants
          </h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Available funding and support for your energy-efficient home improvements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {grants.map((grant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-casa-navy/5 rounded-full p-3">
                  {grant.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-casa-navy mb-2">
                    {grant.title}
                  </h3>
                  <p className="text-casa-navy/70">
                    {grant.description}
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

export default GovernmentGrants;