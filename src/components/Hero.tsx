import { useState } from "react";
import { toast } from "sonner";
import CustomerInfoDialog from "./CustomerInfoDialog";
import AiChatDialog from "./AiChatDialog";
import HeroBackground from "./hero/HeroBackground";
import HeroHeader from "./hero/HeroHeader";
import ServiceSelector from "./hero/ServiceSelector";
import FeatureCards from "./hero/FeatureCards";

const Hero = () => {
  const [showHelp, setShowHelp] = useState(false);
  const [selectedService, setSelectedService] = useState("heat-pumps");
  const [postcode, setPostcode] = useState("");
  const [showDialog, setShowDialog] = useState(false);

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
    setShowDialog(true);
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

        {showHelp && <AiChatDialog />}
        
        <FeatureCards />
      </div>
    </div>
  );
};

export default Hero;