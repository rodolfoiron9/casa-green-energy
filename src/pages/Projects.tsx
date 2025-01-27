import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Residential Heat Pump Installation",
    description: "Complete heating system upgrade with government grant support.",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    title: "Commercial Energy Solution",
    description: "Large-scale renewable energy implementation for office spaces.",
    location: "Manchester, UK",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
  },
  {
    title: "Sustainable Home Renovation",
    description: "Full property renovation with focus on energy efficiency.",
    location: "Birmingham, UK",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
];

const Projects = () => {
  return (
    <div className="w-full pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-casa-navy mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600">
            Discover our latest sustainable energy installations and solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-casa-navy mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-gray-500 mb-4">
                  <Building2 className="w-4 h-4 mr-2" />
                  <span>{project.location}</span>
                </div>
                <Link to="/contact">
                  <Button className="w-full bg-casa-gold text-casa-navy hover:bg-casa-gold/90">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;