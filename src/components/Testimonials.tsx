import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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

const Testimonials = () => {
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-casa-blue/20 backdrop-blur-md p-6 rounded-xl 
                         border border-white/10 hover:bg-casa-blue/30 
                         transition-all duration-300 shadow-lg 
                         hover:shadow-casa-blue/20"
            >
              <Quote className="w-8 h-8 text-casa-gold mb-4" />
              <p className="text-white/90 mb-4">{testimonial.text}</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-casa-gold text-casa-gold" />
                ))}
              </div>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-white/70 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;