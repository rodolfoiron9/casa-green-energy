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
      return data;
    },
  });

  const categories = [
    { id: "all", label: "All Questions" },
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