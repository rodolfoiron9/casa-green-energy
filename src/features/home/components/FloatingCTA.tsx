import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        className="bg-casa-gold text-white px-6 py-3 rounded-full shadow-lg
                   hover:bg-white hover:text-casa-gold transition-all duration-300
                   flex items-center gap-2 group animate-bounce"
      >
        <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span>Get a Quote</span>
      </Button>
    </motion.div>
  );
}