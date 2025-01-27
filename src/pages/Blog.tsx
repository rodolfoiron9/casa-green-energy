import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "The Benefits of Air Source Heat Pumps",
      excerpt: "Discover how air source heat pumps can reduce your energy bills and carbon footprint.",
      date: "2024-02-20",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
      category: "Heat Pumps",
    },
    {
      title: "Government Grants for Renewable Energy",
      excerpt: "Learn about the £7,500 government grant available for heat pump installations.",
      date: "2024-02-18",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51",
      category: "Grants",
    },
    {
      title: "Sustainable Home Improvements",
      excerpt: "Tips and tricks for making your home more energy efficient.",
      date: "2024-02-15",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      category: "Tips",
    },
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Blog</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Stay updated with the latest news and insights about renewable energy solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-casa-gold transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-casa-gold text-casa-navy text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <time>{new Date(post.date).toLocaleDateString()}</time>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
                <p className="text-white/80 mb-4">{post.excerpt}</p>
                <button className="text-casa-gold hover:text-casa-gold/80 transition-colors">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;