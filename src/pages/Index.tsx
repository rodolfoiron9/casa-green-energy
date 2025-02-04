import { motion } from "framer-motion";
import { Hero } from "@/features/home/components/Hero";
import { About } from "@/features/home/components/About";
import { Services } from "@/features/home/components/Services";
import { Testimonials } from "@/features/home/components/Testimonials";
import { Contact } from "@/features/home/components/Contact";
import { FloatingCTA } from "@/features/home/components/FloatingCTA";

export default function Index() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col min-h-screen"
      >
        <main className="flex-grow pt-16">
          <Hero />
          <About />
          <Services />
          <Testimonials />
          <Contact />
          <FloatingCTA />
        </main>
      </motion.div>
    </div>
  );
}