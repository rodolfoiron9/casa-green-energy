import { motion } from "framer-motion";
import { Home, Battery, Sun, Thermometer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CaseStudies = () => {
  const studies = [
    {
      title: "Complete Home Energy Transformation",
      location: "Manchester, UK",
      savings: "£2,400 annually",
      description: "Installation of air source heat pump and solar panels, resulting in significant energy cost reduction.",
      icon: Home,
    },
    {
      title: "Solar + Battery Storage Solution",
      location: "Liverpool, UK",
      savings: "£1,800 annually",
      description: "Integration of solar panels with battery storage for optimal energy independence.",
      icon: Battery,
    },
    {
      title: "Commercial Solar Installation",
      location: "Birmingham, UK",
      savings: "£15,000 annually",
      description: "Large-scale solar installation for a manufacturing facility, reducing operational costs.",
      icon: Sun,
    },
    {
      title: "Heat Pump Retrofit Project",
      location: "Leeds, UK",
      savings: "£2,000 annually",
      description: "Successful transition from gas boiler to air source heat pump in a period property.",
      icon: Thermometer,
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
          <h1 className="text-4xl font-bold text-casa-navy mb-4">Case Studies</h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Explore our successful renewable energy installations and their impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-casa-gold/10 flex items-center justify-center">
                      <study.icon className="w-6 h-6 text-casa-gold" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-casa-navy">
                        {study.title}
                      </CardTitle>
                      <p className="text-casa-navy/60 text-sm">
                        {study.location}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-casa-gold font-bold">
                      Savings: {study.savings}
                    </span>
                  </div>
                  <p className="text-casa-navy/80">
                    {study.description}
                  </p>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-casa-navy/80 mb-8">
            Let us help you achieve similar results with your renewable energy installation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-casa-gold text-white px-8 py-3 rounded-lg 
                     hover:bg-casa-gold/90 transition-colors duration-300"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;