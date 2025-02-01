import { useState } from "react";
import { toast } from "sonner";
import { HeroBackground } from "./HeroBackground";
import { HeroHeader } from "./HeroHeader";
import { ServiceSelector } from "./ServiceSelector";
import { HeroFeatures } from "./HeroFeatures";
import CustomerInfoDialog from "@/components/CustomerInfoDialog";
import AiChatDialog from "@/components/AiChatDialog";

export function Hero() {
  const [showHelp] = useState(true);
  const [selectedService, setSelectedService] = useState("heat-pumps");
  const [postcode, setPostcode] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [showChatDialog, setShowChatDialog] = useState(false);

  const services = [
    { id: "heat-pumps", label: "Air Source Heat Pumps" },
    { id: "electrical-services", label: "Electrical Services" },
    { id: "energy-solutions", label: "Home Energy Solutions" },
    { id: "maintenance", label: "Maintenance Services" },
    { id: "green-energy", label: "Green Energy Systems" },
    { id: "warranty", label: "Warranty & Protection" }
  ];

  const handleSubmit = () => {
    if (!selectedService || !postcode) {
      toast.error("Please select a service and enter your postcode");
      return;
    }
    setShowChatDialog(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-casa-navy via-casa-navy/95 to-casa-blue/90 overflow-hidden">
      <CustomerInfoDialog
        open={showDialog}
        onOpenChange={setShowDialog}
        selectedService={selectedService}
        postcode={postcode}
      />
      
      <HeroBackground />
      
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <HeroHeader />
        
        <ServiceSelector
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          postcode={postcode}
          setPostcode={setPostcode}
          handleSubmit={handleSubmit}
          services={services}
        />

        <AiChatDialog defaultOpen={showChatDialog} onOpenChange={setShowChatDialog} />
        
        <HeroFeatures />
      </div>
    </div>
  );
}