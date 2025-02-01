import { motion } from "framer-motion";

const projects = [
  {
    title: "Residential Heat Pump Installation",
    description: "Complete heating system upgrade with government grant support.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    title: "Commercial Energy Solution",
    description: "Large-scale renewable energy implementation for office spaces.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
  },
  {
    title: "Sustainable Home Renovation",
    description: "Full property renovation with focus on energy efficiency.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
];

export const Projects = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-[#f1f1f1] via-[#e8e8e8] to-[#e5e5e5]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-casa-navy text-center mb-12"
        >
          Our Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-casa-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};