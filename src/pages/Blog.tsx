import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "We'll keep you updated with the latest news.",
    });
    setEmail("");
  };

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
    <div className="min-h-screen bg-gradient-to-br from-[#f1f1f1] to-[#e5e5e5] pt-24">
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

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto mb-16"
        >
          <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-casa-navy mb-4">Subscribe to Our Newsletter</h2>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/50 border-white/30"
                required
              />
              <Button type="submit" className="bg-casa-gold text-casa-navy hover:bg-casa-gold/90">
                Subscribe
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#f8f8f8] to-[#f1f1f1] backdrop-blur-lg rounded-xl overflow-hidden border border-gray-200 hover:border-casa-gold transition-all duration-300 group shadow-lg cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
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
                <h2 className="text-xl font-bold text-casa-navy mb-2 group-hover:text-casa-blue transition-colors">
                  {post.title}
                </h2>
                <p className="text-casa-navy/80 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-full bg-casa-navy/5 text-casa-navy/70 flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-3xl w-[90vw] bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl border border-white/20">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-casa-navy">
                  {selectedPost.title}
                </DialogTitle>
                <DialogDescription className="text-casa-navy/60">
                  Published on {new Date(selectedPost.date).toLocaleDateString()} • {selectedPost.readTime}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <div className="aspect-video relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-casa-navy/80 mb-6">{selectedPost.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-casa-navy/5 text-casa-navy/70 flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-casa-navy mb-4">Want to learn more?</h3>
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email for updates"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white/50 border-white/30"
                      required
                    />
                    <Button type="submit" className="bg-casa-gold text-casa-navy hover:bg-casa-gold/90">
                      Subscribe
                      <Mail className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Blog;