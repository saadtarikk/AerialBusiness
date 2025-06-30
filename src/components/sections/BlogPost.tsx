import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { containerVariants, itemVariants } from '@/components/animations/variants';
import { Link } from 'wouter';

interface BlogPostProps {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt?: string;
}

export default function BlogPost({ title, category, date, image, excerpt }: BlogPostProps) {
  return (
    <section className="pt-32 pb-16 bg-dark-section relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/8 via-purple-900/6 to-pink-900/8"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Back to Blog Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link href="/">
              <Button 
                variant="ghost" 
                className="group text-white/70 hover:text-white transition-colors p-0 h-auto"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          {/* Blog Post Header */}
          <div className="text-center mb-12">
            {/* Category Badge */}
            <motion.div variants={itemVariants} className="flex justify-center mb-6">
              <Badge variant="glass" className="text-sm">
                {category}
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {title}
            </motion.h1>

            {/* Date */}
            <motion.div variants={itemVariants} className="flex items-center justify-center text-white/60 mb-8">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-lg">{date}</span>
            </motion.div>

            {/* Excerpt */}
            {excerpt && (
              <motion.p 
                variants={itemVariants}
                className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12"
              >
                {excerpt}
              </motion.p>
            )}
          </div>

          {/* Featured Image */}
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden glassmorphism-card border-white/10 bg-white/5">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={image}
                  alt={title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 