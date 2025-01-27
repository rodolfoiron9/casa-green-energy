import { motion } from "framer-motion";
import { PoundSterling, FileText, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GovernmentGrants = () => {
  const grants = [
    {
      title: "Boiler Upgrade Scheme",
      amount: "Up to £7,500",
      description: "Available for air source heat pumps, helping you transition to renewable heating.",
      deadline: "March 2025",
      icon: PoundSterling,
    },
    {
      title: "ECO4 Scheme",
      amount: "Varies",
      description: "Support for low-income households to improve home energy efficiency.",
      deadline: "March 2026",
      icon: FileText,
    },
    {
      title: "Green Homes Grant Local Authority Delivery",
      amount: "Up to £10,000",
      description: "Local council support for energy-efficient home improvements.",
      deadline: "Ongoing",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-[#f8f8f8] via-[#f1f1f1] to-[#e5e5e5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-casa-navy mb-4">Government Grants</h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Explore available government funding to support your transition to renewable energy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {grants.map((grant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-casa-gold/10 flex items-center justify-center mb-4">
                    <grant.icon className="w-6 h-6 text-casa-gold" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-casa-navy">
                    {grant.title}
                  </CardTitle>
                  <div className="text-casa-gold font-bold text-lg">
                    {grant.amount}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-casa-navy/80 mb-4">
                    {grant.description}
                  </p>
                  <div className="flex items-center gap-2 text-casa-navy/60">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Deadline: {grant.deadline}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-casa-navy mb-4">
            Need Help with Grant Applications?
          </h2>
          <p className="text-casa-navy/80 mb-8">
            Our team can guide you through the application process and help you access available funding.
          </p>
          <a
            href="/contact"
            className="inline-block bg-casa-gold text-white px-8 py-3 rounded-lg 
                     hover:bg-casa-gold/90 transition-colors duration-300"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default GovernmentGrants;