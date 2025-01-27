import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="w-full pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-casa-navy mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Get in touch with our team for any inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-casa-gold/10 p-4 rounded-full">
                <Phone className="h-6 w-6 text-casa-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-casa-navy">Phone</h3>
                <p className="text-gray-600">+44 (0) 123 456 789</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-casa-gold/10 p-4 rounded-full">
                <Mail className="h-6 w-6 text-casa-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-casa-navy">Email</h3>
                <p className="text-gray-600">info@casacontracts.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-casa-gold/10 p-4 rounded-full">
                <MapPin className="h-6 w-6 text-casa-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-casa-navy">Address</h3>
                <p className="text-gray-600">123 Energy Street, London, UK</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="First Name" required />
              <Input placeholder="Last Name" required />
            </div>
            <Input type="email" placeholder="Email" required />
            <Input placeholder="Subject" required />
            <Textarea
              placeholder="Your message"
              className="min-h-[150px]"
              required
            />
            <Button
              type="submit"
              className="w-full bg-casa-gold text-casa-navy hover:bg-casa-gold/90"
            >
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;