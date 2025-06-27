import { motion, Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { BLOG_POSTS } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function Blog() {
  return (
    <section id="blog" className="py-32 bg-dark-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="glass" className="mb-8">
              📝 our blog
            </Badge>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-[40px] lg:text-6xl font-medium text-white mb-8 leading-[1.1]">
            Insights and Inspiration
            <br />
            <span className="bg-gradient-to-r from-aireal-purple to-gradient-pink bg-clip-text text-transparent">
              from our team
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, tips, and stories on customer service, AI, and technology.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BLOG_POSTS.map((post, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { 
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }}
              className="group"
            >
              <a href={`/blog/${post.slug}`}>
                <Card className="h-full glassmorphism-card border-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="p-8">
                    <p className="text-sm text-white/50 mb-2">{post.date}</p>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">{post.title}</h3>
                    <div className="flex items-center text-aireal-purple group-hover:translate-x-1 transition-transform duration-300">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-aireal-purple to-gradient-pink rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-medium text-white">
            <a href="/blog">
              View More
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 