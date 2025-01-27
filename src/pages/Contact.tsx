import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-casa-navy via-casa-blue/20 to-casa-navy min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Get in touch with our team for expert advice and solutions for your energy needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-xl 
                          border border-white/20 
                          transition-all duration-300
                          hover:bg-white/20 hover:shadow-lg
                          hover:shadow-casa-blue/20
                          before:content-['']
                          before:absolute before:inset-0
                          before:rounded-xl before:backdrop-blur-md
                          before:bg-gradient-to-br
                          before:from-white/10 before:to-transparent
                          before:opacity-50 before:-z-10">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4 text-white/90">
                  <div className="bg-casa-blue/20 backdrop-blur-sm p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>+44 (0) 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/90">
                  <div className="bg-casa-blue/20 backdrop-blur-sm p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>info@casaenergy.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/90">
                  <div className="bg-casa-blue/20 backdrop-blur-sm p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p>123 Energy Street, London, UK</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/90">
                  <div className="bg-casa-blue/20 backdrop-blur-sm p-3 rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative backdrop-blur-lg bg-white/10 p-8 rounded-xl 
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
            <h2 className="text-2xl font-bold text-white mb-6 relative z-10">Send us a Message</h2>
            <form className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-white/90 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-casa-gold"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-white/90 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-casa-gold"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-white/90 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-casa-gold"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white/90 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-casa-gold"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button className="w-full bg-casa-blue hover:bg-casa-blue/90 text-white flex items-center justify-center gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;