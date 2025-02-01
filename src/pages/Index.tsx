import { motion } from "framer-motion";
import { Hero } from "@/features/home/components/Hero";
import { Projects } from "@/features/home/components/Projects";
import { Contact } from "@/features/home/components/Contact";
import { Services } from "@/features/home/components/Services";
import { Testimonials } from "@/features/home/components/Testimonials";

export default function Index() {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col min-h-screen"
      >
        <main className="flex-grow pt-16">
          <Hero />
          <Services />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
      </motion.div>
    </div>
  );
}