import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface ServiceSelectorProps {
  selectedService: string;
  setSelectedService: (value: string) => void;
  postcode: string;
  setPostcode: (value: string) => void;
  handleSubmit: () => void;
  services: Array<{ id: string; label: string; }>;
}

export function ServiceSelector({
  selectedService,
  setSelectedService,
  postcode,
  setPostcode,
  handleSubmit,
  services
}: ServiceSelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12 max-w-4xl mx-auto"
    >
      <Select
        value={selectedService}
        onValueChange={setSelectedService}
      >
        <SelectTrigger className="w-full md:w-[300px] bg-white/10 border-white/20 text-white backdrop-blur-md">
          <SelectValue placeholder="Select a service..." />
        </SelectTrigger>
        <SelectContent className="bg-white/95 backdrop-blur-lg border-white/20">
          {services.map((service) => (
            <SelectItem
              key={service.id}
              value={service.id}
              className="text-casa-navy hover:text-casa-gold transition-colors"
            >
              {service.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        type="text"
        placeholder="Enter your postcode"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
        className="w-full md:w-[200px] bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-md"
      />

      <Button
        onClick={handleSubmit}
        className="w-full md:w-auto bg-casa-gold text-casa-navy hover:bg-white 
                 transition-all duration-300 font-semibold px-8 py-2"
      >
        Get Started
      </Button>
    </motion.div>
  );
}