import { motion } from "framer-motion";
import { Home, Battery, Sun, Thermometer, Wind, Leaf, Zap, Building, Factory, House } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CaseStudies = () => {
  const studies = [
    {
      title: "Complete Home Energy Transformation",
      location: "Manchester, UK",
      savings: "£2,400 annually",
      description: "Installation of air source heat pump and solar panels, resulting in significant energy cost reduction. The homeowner saw a 75% decrease in energy bills within the first year.",
      icon: Home,
      metrics: {
        co2Reduction: "4.2 tonnes/year",
        energyEfficiency: "92%",
        roi: "4.5 years"
      }
    },
    {
      title: "Solar + Battery Storage Solution",
      location: "Liverpool, UK",
      savings: "£1,800 annually",
      description: "Integration of solar panels with battery storage for optimal energy independence. The system provides 80% of the household's energy needs.",
      icon: Battery,
      metrics: {
        solarCapacity: "6.6kW",
        batterySize: "13.5kWh",
        selfSufficiency: "80%"
      }
    },
    {
      title: "Commercial Solar Installation",
      location: "Birmingham, UK",
      savings: "£15,000 annually",
      description: "Large-scale solar installation for a manufacturing facility, reducing operational costs and carbon footprint significantly.",
      icon: Sun,
      metrics: {
        panelsInstalled: "250",
        peakOutput: "85kW",
        carbonOffset: "45 tonnes/year"
      }
    },
    {
      title: "Heat Pump Retrofit Project",
      location: "Leeds, UK",
      savings: "£2,000 annually",
      description: "Successful transition from gas boiler to air source heat pump in a period property, maintaining heritage while improving efficiency.",
      icon: Thermometer,
      metrics: {
        copRating: "3.8",
        spaceHeated: "180m²",
        noiseLevel: "42dB"
      }
    },
    {
      title: "Wind Energy Integration",
      location: "Scottish Highlands",
      savings: "£8,500 annually",
      description: "Installation of small-scale wind turbines for a rural business, providing consistent renewable energy throughout the year.",
      icon: Wind,
      metrics: {
        turbineHeight: "15m",
        powerOutput: "10kW",
        windUtilization: "85%"
      }
    },
    {
      title: "Eco-Office Transformation",
      location: "Edinburgh, UK",
      savings: "£12,000 annually",
      description: "Complete office building retrofit with solar panels, heat pumps, and smart energy management systems.",
      icon: Building,
      metrics: {
        energyReduction: "65%",
        smartDevices: "120+",
        employeeSatisfaction: "94%"
      }
    },
    {
      title: "Industrial Energy Solution",
      location: "Newcastle, UK",
      savings: "£45,000 annually",
      description: "Comprehensive industrial energy solution combining solar, heat recovery, and energy storage systems.",
      icon: Factory,
      metrics: {
        systemSize: "250kW",
        heatRecovery: "75%",
        processEfficiency: "89%"
      }
    },
    {
      title: "Smart Home Integration",
      location: "Bristol, UK",
      savings: "£3,200 annually",
      description: "Full smart home energy system with solar panels, battery storage, and AI-powered optimization.",
      icon: House,
      metrics: {
        smartFeatures: "15+",
        automationLevel: "95%",
        peakShaving: "60%"
      }
    }
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
          <h1 className="text-4xl font-bold text-casa-navy mb-4">Success Stories</h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful renewable energy installations and their remarkable impact on businesses and homes across the UK.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-casa-eco/20 flex items-center justify-center">
                      <study.icon className="w-6 h-6 text-casa-blue" />
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
                    <span className="text-casa-blue font-bold">
                      Savings: {study.savings}
                    </span>
                  </div>
                  <p className="text-casa-navy/80 mb-4">
                    {study.description}
                  </p>
                  <div className="grid grid-cols-3 gap-2 mt-4 text-sm">
                    {Object.entries(study.metrics).map(([key, value], idx) => (
                      <div key={idx} className="bg-casa-eco/10 p-2 rounded-lg">
                        <div className="font-semibold text-casa-navy">{value}</div>
                        <div className="text-casa-navy/60 text-xs">{key}</div>
                      </div>
                    ))}
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
            Ready to Start Your Renewable Energy Journey?
          </h2>
          <p className="text-casa-navy/80 mb-8 max-w-2xl mx-auto">
            Join our growing list of success stories. Let our experts help you achieve significant energy savings and contribute to a sustainable future.
          </p>
          <a
            href="/contact"
            className="inline-block bg-casa-blue text-white px-8 py-3 rounded-lg 
                     hover:bg-casa-blue/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;