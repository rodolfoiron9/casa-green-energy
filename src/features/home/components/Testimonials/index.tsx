import { motion } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    text: "The heat pump installation was seamless and the energy savings are incredible!",
    rating: 5,
  },
  {
    name: "David Smith",
    role: "Property Developer",
    text: "CASA Contracts delivered exceptional service on our commercial project.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Architect",
    text: "Their attention to detail and sustainable solutions are outstanding.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-casa-navy via-casa-navy/90 to-casa-blue/80">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}