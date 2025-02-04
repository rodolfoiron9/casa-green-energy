import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "The team at CASA installed our heat pump system efficiently and professionally. We've seen a significant reduction in our energy bills.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Property Manager",
    content: "Outstanding service! Their expertise in sustainable solutions has helped us modernize multiple properties while reducing costs.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "Homeowner",
    content: "From the initial consultation to the final installation, CASA's team was knowledgeable, professional, and courteous.",
    rating: 5,
  },
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-casa-navy/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-casa-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-casa-gold fill-current" />
              ))}
            </div>
            <p className="text-lg text-gray-600 mb-6 italic">
              "{testimonials[currentIndex].content}"
            </p>
            <div className="text-center">
              <p className="font-semibold text-casa-navy">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm text-gray-500">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-casa-gold" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};