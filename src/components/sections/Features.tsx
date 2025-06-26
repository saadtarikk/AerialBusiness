import { motion, Variants } from 'framer-motion';
import { Bot, TrendingUp, Users, Shield, Settings, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { FEATURES } from '@/lib/constants';

const iconMap = {
  Bot,
  TrendingUp,
  Users,
  Shield,
  Settings,
  Clock
};

// Enhanced animation variants
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
    filter: 'blur(4px)'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
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
    filter: 'blur(4px)'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function Features() {
  return (
    <section id="features" className="py-32 bg-dark-section relative overflow-hidden">
      {/* Dark gradient background */}
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
            <Badge className="glassmorphism rounded-full px-6 py-2 mb-8 text-white/90 text-sm font-medium border border-white/10 bg-white/5 backdrop-blur-sm">
              ⚡ powerful features
            </Badge>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-[40px] lg:text-6xl font-medium text-white mb-8 leading-[1.1]">
            Everything you need for
            <br />
            <span className="bg-gradient-to-r from-aireal-purple to-gradient-pink bg-clip-text text-transparent">
              exceptional service
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI platform provides all the tools and intelligence needed to deliver world-class customer support.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            const gradientClasses = [
              'from-gradient-blue to-aireal-purple',
              'from-aireal-purple to-gradient-pink',
              'from-gradient-orange to-gradient-pink',
              'from-gradient-blue to-gradient-orange',
              'from-aireal-purple to-gradient-blue',
              'from-gradient-pink to-gradient-orange'
            ];
            
            return (
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
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-r ${gradientClasses[index]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent className="text-white text-2xl" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
