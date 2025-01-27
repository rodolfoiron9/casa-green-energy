import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "The Benefits of Air Source Heat Pumps",
      excerpt: "Discover how air source heat pumps can reduce your energy bills and carbon footprint while providing efficient heating for your home.",
      date: "2024-02-20",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
      category: "Heat Pumps",
      readTime: "5 min read",
      tags: ["Energy Efficiency", "Heating", "Sustainability"]
    },
    {
      title: "Government Grants for Renewable Energy",
      excerpt: "Learn about the £7,500 government grant available for heat pump installations and other renewable energy incentives in 2024.",
      date: "2024-02-18",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51",
      category: "Grants",
      readTime: "4 min read",
      tags: ["Funding", "Government Support", "Installation"]
    },
    {
      title: "Sustainable Home Improvements",
      excerpt: "Tips and tricks for making your home more energy efficient, from insulation to smart thermostats and renewable energy solutions.",
      date: "2024-02-15",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      category: "Tips",
      readTime: "6 min read",
      tags: ["Home Improvement", "Energy Saving", "Smart Home"]
    },
    {
      title: "Understanding Energy Performance Certificates",
      excerpt: "A comprehensive guide to EPCs and how they affect your property's value and energy efficiency rating.",
      date: "2024-02-12",
      image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5",
      category: "Guides",
      readTime: "7 min read",
      tags: ["Property", "Certification", "Energy Rating"]
    },
    {
      title: "The Future of Renewable Energy in the UK",
      excerpt: "Exploring upcoming trends and technologies in renewable energy and their impact on residential properties.",
      date: "2024-02-10",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
      category: "Industry News",
      readTime: "8 min read",
      tags: ["Future Tech", "Industry Trends", "Innovation"]
    },
    {
      title: "Maintenance Tips for Heat Pump Systems",
      excerpt: "Essential maintenance guidelines to keep your heat pump system running efficiently throughout the year.",
      date: "2024-02-08",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1",
      category: "Maintenance",
      readTime: "5 min read",
      tags: ["Maintenance", "Heat Pumps", "Efficiency"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F1F1F1] to-[#f3f3f3] pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-casa-navy mb-4">Energy Insights</h1>
          <p className="text-casa-navy/80 text-lg max-w-2xl mx-auto">
            Stay updated with the latest news, guides, and insights about renewable energy solutions and sustainable living.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#f8f8f8] to-[#f1f1f1] backdrop-blur-lg rounded-xl overflow-hidden border border-gray-200 hover:border-casa-gold transition-all duration-300 group shadow-lg"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-casa-gold text-casa-navy text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-casa-navy/60 text-sm mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time>{new Date(post.date).toLocaleDateString()}</time>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-casa-navy mb-2 group-hover:text-casa-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-casa-navy/80 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
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
                  className="text-casa-gold hover:text-casa-gold/80 hover:bg-casa-navy/5 transition-colors p-0 flex items-center gap-2"
                >
                  Read More
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

export default Blog;