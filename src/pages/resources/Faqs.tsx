import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Faqs = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: faqs, isLoading } = useQuery({
    queryKey: ["faqs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("faqs")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) throw error;

      // If no FAQs exist, return default FAQs
      if (!data || data.length === 0) {
        return [
          {
            id: "1",
            question: "What energy-efficient solutions do you offer?",
            answer: "We offer a comprehensive range of energy-efficient solutions including heat pumps, solar panels, smart thermostats, LED lighting, and energy monitoring systems. Our solutions are designed to reduce your energy consumption and costs while improving comfort.",
            category: "general",
          },
          {
            id: "2",
            question: "How can I reduce my energy bills?",
            answer: "There are several ways to reduce your energy bills: install energy-efficient appliances, improve insulation, use smart heating controls, switch to LED lighting, and consider renewable energy sources like heat pumps or solar panels. We can provide a free energy assessment to identify the best solutions for your property.",
            category: "costs",
          },
          {
            id: "3",
            question: "Are there any government grants available?",
            answer: "Yes, there are several government grants available for energy-efficient home improvements. These include the Boiler Upgrade Scheme, ECO4 scheme, and various local authority grants. Our team can help you identify and apply for eligible grants.",
            category: "costs",
          },
          {
            id: "4",
            question: "How long does installation typically take?",
            answer: "Installation times vary depending on the type of system and complexity of the project. A typical heat pump installation takes 2-3 days, while solar panel installation usually takes 1-2 days. We'll provide a detailed timeline during your consultation.",
            category: "installation",
          },
          {
            id: "5",
            question: "What maintenance is required for energy systems?",
            answer: "Regular maintenance ensures optimal performance and longevity of your energy systems. Heat pumps should be serviced annually, solar panels need occasional cleaning, and general system checks are recommended every 6-12 months. We offer comprehensive maintenance packages.",
            category: "maintenance",
          },
          {
            id: "6",
            question: "How much can I save with energy-efficient solutions?",
            answer: "Savings vary depending on your current energy usage and the solutions implemented. On average, households can save 30-50% on energy bills with heat pumps, and solar panels can reduce electricity bills by up to 70%. We can provide detailed savings estimates based on your specific situation.",
            category: "costs",
          },
          {
            id: "7",
            question: "What warranties do you offer?",
            answer: "We provide comprehensive warranties on all our installations. Heat pumps typically come with a 5-7 year manufacturer warranty, solar panels with a 25-year performance warranty, and our workmanship is guaranteed for 2 years. Extended warranty options are available.",
            category: "general",
          },
          {
            id: "8",
            question: "How do I know if my property is suitable?",
            answer: "Most properties are suitable for energy-efficient improvements, but specific solutions may vary. We conduct a thorough assessment of your property to determine the most appropriate solutions, considering factors like insulation levels, available space, and current energy usage.",
            category: "installation",
          },
          {
            id: "9",
            question: "What is your emergency response time?",
            answer: "For emergency situations, we aim to respond within 2-4 hours. Our emergency service is available 24/7 for urgent issues. For non-emergency maintenance or repairs, we typically schedule appointments within 48-72 hours.",
            category: "maintenance",
          },
        ];
      }

      return data;
    },
  });

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General" },
    { id: "installation", label: "Installation" },
    { id: "maintenance", label: "Maintenance" },
    { id: "costs", label: "Costs & Savings" },
  ];

  const filteredFaqs = faqs?.filter((faq) => 
    selectedCategory === "all" ? true : faq.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services, installation process, and energy solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </motion.div>

          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="h-16 bg-gray-100 animate-pulse rounded-lg"
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs?.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-casa-blue" />
                        <span className="text-casa-navy font-medium">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-casa-navy/80">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold text-casa-navy mb-4">
              Still Have Questions?
            </h2>
            <p className="text-casa-navy/80 mb-8">
              Our team is here to help you with any questions you may have about our services.
            </p>
            <Button className="bg-casa-blue hover:bg-casa-blue/90">
              Contact Us <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;