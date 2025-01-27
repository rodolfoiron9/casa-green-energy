import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CustomerInfoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedService: string;
  postcode: string;
}

const CustomerInfoDialog = ({
  open,
  onOpenChange,
  selectedService,
  postcode,
}: CustomerInfoDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");
  const [isAiChatActive, setIsAiChatActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !issue) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Here you would typically send the data to your backend
    toast.success("Thank you! We'll be in touch shortly.");
    onOpenChange(false);
  };

  const startAiChat = () => {
    setIsAiChatActive(true);
    toast.success("AI Chat Assistant activated!");
    // Here you would typically initialize your AI chat system
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Complete Your Request</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Describe your issue..."
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className="w-full min-h-[100px]"
            />
          </div>
          <div className="flex justify-between items-center pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex items-center gap-2"
              onClick={startAiChat}
            >
              <MessageSquare className="w-4 h-4" />
              Start AI Chat
            </Button>
            <Button type="submit">Submit Request</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerInfoDialog;