import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="bg-gradient-to-br from-white via-[#fafafa] to-[#f5f5f5] border-white/20 
                     hover:border-casa-gold transition-all duration-300 group shadow-lg">
        <CardHeader className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-casa-gold/20 to-casa-gold/30
                        flex items-center justify-center group-hover:from-casa-gold/30 group-hover:to-casa-gold/40
                        transition-all duration-300">
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