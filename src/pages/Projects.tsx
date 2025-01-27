import { motion } from "framer-motion";
import { Building2, ArrowRight, Tag, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Solar Panel Installation",
      description: "Complete solar panel system installation for a commercial building, including battery storage.",
      date: "2024-02",
      category: "Solar",
      location: "London",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      tags: ["Solar Energy", "Commercial", "Renewable"]
    },
    {
      title: "Heat Pump Integration",
      description: "Installation of ground source heat pumps for a residential complex.",
      date: "2024-01",
      category: "Heat Pumps",
      location: "Manchester",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      tags: ["Heat Pump", "Residential", "Green Energy"]
    },
    {
      title: "Smart Home Energy System",
      description: "Implementation of smart energy management system for luxury apartments.",
      date: "2024-03",
      category: "Smart Systems",
      location: "Birmingham",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827",
      tags: ["Smart Tech", "IoT", "Energy Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-6">
            Our Featured Projects
          </h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Explore our latest renewable energy installations and smart home solutions that are helping customers achieve their sustainability goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-casa-gold text-casa-navy text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-4 text-casa-navy/60 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <time>{project.date}</time>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-casa-navy group-hover:text-casa-blue transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-casa-navy/80">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-casa-navy/5 text-casa-navy/70 flex items-center gap-1"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-casa-blue hover:text-casa-blue/80 hover:bg-casa-navy/5 transition-colors p-0 flex items-center gap-2"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;