import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag, Mail, PhoneCall, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "We'll keep you updated with the latest news and exclusive offers.",
    });
    setEmail("");
  };

  const posts = [
    {
      title: "Revolutionary Air Source Heat Pumps: Your Path to Energy Independence",
      excerpt: "Discover how modern air source heat pumps can slash your energy bills by up to 50% while providing year-round comfort. Learn about the latest technology that's transforming home heating and cooling.",
      date: "2024-02-20",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
      category: "Heat Pumps",
      readTime: "5 min read",
      tags: ["Energy Efficiency", "Cost Savings", "Sustainability"],
      fullContent: `
        Transform your home's energy efficiency with our cutting-edge air source heat pump solutions. Here's what you need to know:

        🌟 Key Benefits:
        • Save up to 50% on energy bills
        • Reduce your carbon footprint by 3-4 tonnes annually
        • Enjoy consistent temperatures year-round
        • Qualify for £7,500 government grants
        
        💡 How It Works:
        Our heat pumps extract natural heat from the air, even in temperatures as low as -15°C, providing efficient heating and hot water for your home. Using advanced technology, they deliver up to 4 times more energy than they consume.

        💰 Financial Benefits:
        • Average annual savings: £500-£1,000
        • Government grants available
        • Increased property value
        • Return on investment within 5-7 years

        🌍 Environmental Impact:
        By switching to a heat pump, you're not just saving money – you're helping save the planet. Each installation reduces CO2 emissions equivalent to taking a car off the road for two years.

        ✅ Why Act Now:
        • Limited-time government incentives
        • Rising energy costs
        • Growing environmental regulations
        • Increasing property value requirements
      `
    },
    {
      title: "2024 Heat Pump Grants: Your Complete Guide to £7,500 Government Support",
      excerpt: "Everything you need to know about claiming your £7,500 heat pump grant in 2024. We break down the application process, eligibility criteria, and how to maximize your benefits.",
      date: "2024-02-18",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51",
      category: "Grants",
      readTime: "4 min read",
      tags: ["Funding", "Government Support", "Installation"],
      fullContent: `
        Don't miss out on your share of the government's renewable energy initiative. Here's your step-by-step guide to securing your £7,500 grant:

        🏆 Grant Overview:
        • Up to £7,500 available per household
        • No repayment required
        • Simple application process
        • Quick approval times

        ✅ Eligibility Criteria:
        • UK homeowner or private landlord
        • Property built before 2019
        • Valid EPC certificate
        • No previous heat pump funding

        📝 Application Process:
        1. Initial assessment
        2. Property survey
        3. Grant application
        4. Installation planning
        5. System installation
        6. Final certification

        💡 Expert Tips:
        • Apply early - funds are limited
        • Get multiple quotes
        • Consider additional insulation
        • Plan for optimal installation timing

        🚀 Next Steps:
        Book your free consultation today to start your journey toward energy independence and significant savings.
      `
    },
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

  const postsPerPage = 20;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1f1f1] to-[#e5e5e5] pt-16 md:pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-casa-navy mb-4">Energy Insights & Savings Guide</h1>
          <p className="text-casa-navy/80 text-base md:text-lg max-w-2xl mx-auto px-4">
            Expert advice, latest technologies, and money-saving tips to transform your home's energy efficiency.
          </p>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto mb-12 md:mb-16 px-4"
        >
          <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-casa-navy mb-4">Get Exclusive Energy Saving Tips</h2>
            <p className="text-casa-navy/80 mb-4">Join our community and receive:</p>
            <ul className="list-none space-y-2 mb-4">
              <li className="flex items-center gap-2 text-casa-navy/80">
                <CheckCircle className="w-5 h-5 text-casa-gold" />
                Latest grant updates and deadlines
              </li>
              <li className="flex items-center gap-2 text-casa-navy/80">
                <CheckCircle className="w-5 h-5 text-casa-gold" />
                Energy-saving tips and tricks
              </li>
              <li className="flex items-center gap-2 text-casa-navy/80">
                <CheckCircle className="w-5 h-5 text-casa-gold" />
                Exclusive offers and discounts
              </li>
            </ul>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email for savings"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/50 border-white/30"
                required
              />
              <Button type="submit" className="bg-casa-gold text-casa-navy hover:bg-casa-gold/90">
                Get Updates
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8">
          {currentPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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

        {/* Pagination */}
        <div className="mb-20">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => setCurrentPage(page)}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
          <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl border border-white/20 p-0">
            {selectedPost && (
              <ScrollArea className="h-[85vh] w-full rounded-md">
                <div className="p-6">
                  <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl font-bold text-casa-navy">
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
                    <div className="prose prose-lg max-w-none text-casa-navy/80 mb-6 whitespace-pre-line">
                      {selectedPost.fullContent}
                    </div>
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
                    <div className="space-y-4 sm:space-y-6">
                      <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-xl p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-casa-navy mb-4">Ready to Start Saving?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <Button className="bg-casa-gold text-casa-navy hover:bg-casa-gold/90 w-full">
                            Book Free Consultation
                            <PhoneCall className="ml-2 h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="w-full">
                            Download Guide
                            <Download className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-xl p-4 sm:p-6">
                        <h3 className="text-lg font-semibold text-casa-navy mb-4">Stay Updated</h3>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                          <Input
                            type="email"
                            placeholder="Enter your email for exclusive updates"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-white/50 border-white/30"
                            required
                          />
                          <Button type="submit" className="bg-casa-gold text-casa-navy hover:bg-casa-gold/90 whitespace-nowrap">
                            Subscribe
                            <Mail className="ml-2 h-4 w-4" />
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Blog;
