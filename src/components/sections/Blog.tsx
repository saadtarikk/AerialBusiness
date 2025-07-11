import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { client, urlFor } from '@/lib/sanity';
import { Post } from '@/lib/blog-data';
import { containerVariants, itemVariants, cardVariants } from '@/components/animations/variants';
import { ArrowRight, Calendar, BookOpen } from 'lucide-react';
import { Link } from 'wouter';

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const query = `*[_type == "post"] | order(date desc) [0..2] {
      title,
      slug,
      "category": category,
      "date": date,
      "image": image,
      "excerpt": excerpt,
    }`;

    client.fetch(query).then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <section id="blog" className="py-32 bg-dark-section relative overflow-hidden">
      {/* Dark gradient background with blue tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/8 via-purple-900/6 to-pink-900/8"></div>
      
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
              📚 blog
            </Badge>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-[40px] lg:text-6xl font-medium text-white mb-8 leading-[1.1]">
            Explore Our Blog And
            <br />
            <span className="bg-gradient-to-r from-aireal-purple to-gradient-pink bg-clip-text text-transparent">
              Stay Updated
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
            Discover insights, best practices, and the latest trends in AI-powered customer service.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href="/blog">
              <Button 
                className="group bg-gradient-to-r from-aireal-purple to-gradient-pink text-white px-8 py-3 rounded-full font-semibold glassmorphism hover:scale-105 transition-all duration-300"
              >
                Explore All
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.div 
              key={post.slug.current} 
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
              <Link href={`/blog/${post.slug.current}`}>
                <Card className="h-full glassmorphism-card border-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer">
                  <AspectRatio ratio={16 / 9} className="relative overflow-hidden">
                    {post.image && (
                      <img
                        src={urlFor(post.image).url()}
                        alt={post.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                  </AspectRatio>

                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <Badge 
                        variant="glass"
                        className="text-xs"
                      >
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-white/60 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight line-clamp-2 group-hover:text-aireal-purple transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center group-hover:scale-105 transition-all duration-300">
                      <BookOpen className="w-4 h-4 mr-2 text-aireal-purple group-hover:text-gradient-pink transition-colors duration-300" />
                      <span className="text-sm font-medium bg-gradient-to-r from-aireal-purple to-gradient-pink bg-clip-text text-transparent group-hover:from-gradient-pink group-hover:to-aireal-purple transition-all duration-300">
                        Read More
                      </span>
                      <ArrowRight className="w-4 h-4 ml-1 text-aireal-purple group-hover:text-gradient-pink group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 