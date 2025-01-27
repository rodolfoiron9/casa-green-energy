import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  const faqs = [
    {
      question: "What is an Air Source Heat Pump?",
      answer: "An Air Source Heat Pump is a renewable heating system that extracts heat from the outside air to heat your home and provide hot water, even when the temperature is as low as -15°C."
    },
    {
      question: "How much can I save with energy-efficient improvements?",
      answer: "Savings vary depending on your current system and the improvements made. On average, households can save 20-30% on energy bills with proper insulation and heating system upgrades."
    },
    {
      question: "Are there government grants available?",
      answer: "Yes, there are several government grants available including the Boiler Upgrade Scheme, ECO4, and various local authority grants. Eligibility criteria apply."
    },
    {
      question: "How long does installation typically take?",
      answer: "Installation times vary by project. A typical heat pump installation takes 2-3 days, while a full home energy efficiency upgrade might take 1-2 weeks."
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
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-4">Frequently Asked Questions</h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services and energy solutions.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-casa-navy hover:text-casa-blue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-casa-navy/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;