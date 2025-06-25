import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { containerVariants, itemVariants, cardVariants } from '@/components/animations/variants';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-dark-section relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/10 to-blue-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <Badge className="glassmorphism rounded-full px-6 py-2 mb-8 text-white/90 text-sm font-medium border border-white/10 bg-white/5 backdrop-blur-sm">
              ⭐ testimonials
            </Badge>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-[1.1]">
            Trusted by
            <br />
            <span className="bg-gradient-to-r from-aireal-purple to-gradient-pink bg-clip-text text-transparent">
              industry leaders
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            See how companies are transforming their customer service with our AI platform.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
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
              <Card className="h-full glassmorphism-card border-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/80 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover border border-white/20"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-white/60">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
