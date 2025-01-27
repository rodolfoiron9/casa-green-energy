import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-casa-navy mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="bg-casa-blue/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-casa-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>+44 (0) 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="bg-casa-blue/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-casa-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>info@casaenergy.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="bg-casa-blue/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-casa-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p>123 Energy Street, London, UK</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-casa-navy mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-gray-600 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-casa-blue"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-600 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-casa-blue"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-casa-blue"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-casa-blue"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button className="w-full bg-casa-blue text-white hover:bg-casa-blue/90 flex items-center justify-center gap-2">
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