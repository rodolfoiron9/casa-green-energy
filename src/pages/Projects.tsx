import { motion } from "framer-motion";
import { Building2, ArrowRight, Tag, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Eco-Friendly Home Renovation",
      description: "Complete home renovation with focus on energy efficiency and sustainable materials.",
      date: "2024-01",
      category: "Renovation",
      location: "London",
      image: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5",
      tags: ["Energy Efficient", "Sustainable", "Modern"]
    },
    {
      title: "Heat Pump Installation Project",
      description: "Installation of air source heat pumps in a residential complex.",
      date: "2024-02",
      category: "Installation",
      location: "Manchester",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      tags: ["Heat Pump", "Residential", "Green Energy"]
    },
    {
      title: "Smart Home Integration",
      description: "Implementation of smart home technology for energy management.",
      date: "2024-03",
      category: "Smart Home",
      location: "Birmingham",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827",
      tags: ["Smart Tech", "IoT", "Energy Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-casa-navy to-casa-blue pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Explore our latest projects and see how we're helping customers achieve their energy efficiency goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-casa-gold transition-all duration-300 group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-casa-gold text-casa-navy text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-white/60 text-sm mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time>{project.date}</time>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-casa-gold transition-colors">
                  {project.title}
                </h2>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70 flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="text-casa-gold hover:text-casa-gold/80 hover:bg-white/5 transition-colors p-0 flex items-center gap-2"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;