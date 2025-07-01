import { lazy, useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { client, urlFor } from '@/lib/sanity';
import { containerVariants, itemVariants } from '@/components/animations/variants';
import { Post } from '@/lib/blog-data';

const Footer = lazy(() => import('@/components/sections/Footer'));

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "post"] | order(date desc) {
      title,
      slug,
      "category": category,
      "date": date,
      "image": image,
      "excerpt": excerpt,
    }`;

    client.fetch(query).then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow">
        <section className="pt-32 pb-16 bg-dark-section relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <motion.div variants={itemVariants} className="flex justify-center mb-6">
                <Badge variant="default" className="text-sm bg-white text-black hover:bg-white/90">
                  Blog
                </Badge>
              </motion.div>
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Explore Our Blog And Stay Updated
              </motion.h1>
            </motion.div>

            {!loading && posts.length > 0 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {posts.map((post) => (
                  <motion.div key={post.slug.current} variants={itemVariants}>
                    <Link href={`/blog/${post.slug.current}`}>
                      <a className="block group">
                        <Card className="overflow-hidden glassmorphism-card h-full border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300">
                          <AspectRatio ratio={16 / 9}>
                            {post.image && (
                              <img
                                src={urlFor(post.image).url()}
                                alt={post.title}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                              />
                            )}
                          </AspectRatio>
                          <div className="p-6">
                            <div className="flex items-center mb-4 space-x-4">
                              <Badge variant="glass" className="text-sm">{post.category}</Badge>
                              <p className="text-sm text-white/60">{new Date(post.date).toLocaleDateString()}</p>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">{post.title}</h4>
                          </div>
                        </Card>
                      </a>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 