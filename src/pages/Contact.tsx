import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Contact = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-casa-navy via-casa-blue/20 to-casa-navy">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Ready to transform your energy solutions? Our expert team is here to help you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-casa-navy mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-casa-navy/90">
                  <div className="bg-casa-blue/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-casa-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>+44 (0) 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-casa-navy/90">
                  <div className="bg-casa-blue/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-casa-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>info@casaenergy.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-casa-navy/90">
                  <div className="bg-casa-blue/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-casa-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p>123 Energy Street, London, UK</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-casa-navy/90">
                  <div className="bg-casa-blue/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-casa-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-casa-navy mb-6">Send us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-casa-navy">Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="border-gray-200 focus:border-casa-blue"
                          placeholder="John Doe"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-casa-navy">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="border-gray-200 focus:border-casa-blue"
                          placeholder="john@example.com"
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-casa-navy">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          className="border-gray-200 focus:border-casa-blue min-h-[120px]"
                          placeholder="How can we help you?"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-casa-blue hover:bg-casa-blue/90 text-white"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;