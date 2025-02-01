import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  rating: number;
  index: number;
}

export function TestimonialCard({ name, role, text, rating, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative backdrop-blur-lg bg-white/10 p-6 rounded-xl 
                 border border-white/20 
                 transition-all duration-300
                 hover:bg-white/20 hover:shadow-lg
                 hover:shadow-casa-blue/20
                 before:content-['']
                 before:absolute before:inset-0
                 before:rounded-xl before:backdrop-blur-md
                 before:bg-gradient-to-br
                 before:from-white/10 before:to-transparent
                 before:opacity-50 before:-z-10"
    >
      <div className="flex items-center justify-between mb-4 relative z-10">
        <Quote className="w-8 h-8 text-casa-gold" />
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-casa-gold text-casa-gold" />
          ))}
        </div>
      </div>
      <p className="text-white/90 mb-6 relative z-10">{text}</p>
      <div className="flex items-center space-x-2 relative z-10">
        <div>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-white/70 text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}