import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  index: number;
}

export function ServiceCard({ title, description, icon: Icon, image, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="bg-gradient-to-br from-white via-[#fafafa] to-[#f5f5f5] border-white/20 
                     hover:border-casa-gold transition-all duration-300 group shadow-lg overflow-hidden">
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <CardHeader className="text-center relative">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-casa-gold/20 to-casa-gold/30
                        flex items-center justify-center group-hover:from-casa-gold/30 group-hover:to-casa-gold/40
                        transition-all duration-300 -mt-12 relative z-10 bg-white">
            <Icon className="w-8 h-8 text-casa-gold" />
          </div>
          <CardTitle className="text-2xl font-bold text-casa-navy">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-casa-navy/80 text-center">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}