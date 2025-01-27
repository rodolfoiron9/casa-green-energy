import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-20 px-4 bg-casa-navy">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 mb-12 text-lg"
        >
          Ready to start your journey towards sustainable energy? Contact us today!
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Phone className="w-6 h-6" />,
              text: "+44 (0) 123 456 789",
            },
            {
              icon: <Mail className="w-6 h-6" />,
              text: "info@casacontracts.com",
            },
            {
              icon: <MapPin className="w-6 h-6" />,
              text: "London, United Kingdom",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-white"
            >
              <div className="mb-4 text-casa-gold">{item.icon}</div>
              <p className="text-white/80">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;