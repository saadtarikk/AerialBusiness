import { motion } from 'framer-motion';
import { Bot, TrendingUp, Users, Shield, Settings, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { containerVariants, itemVariants, cardVariants } from '@/components/animations/variants';
import { FEATURES } from '@/lib/constants';

const iconMap = {
  Bot,
  TrendingUp,
  Users,
  Shield,
  Settings,
  Clock
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <Badge className="glassmorphism rounded-full px-6 py-2 mb-6 text-gray-600 text-sm font-medium">
              ⚡ powerful features
            </Badge>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need for
            <span className="bg-gradient-to-r from-aireal-purple to-gradient-pink bg-clip-text text-transparent">
              {" "}exceptional service
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <motion.div key={index} variants={cardVariants}>
                <Card className="glassmorphism hover:scale-105 transition-transform duration-300 border-white/25 bg-white/5">
                  <CardContent className="p-8">
                    <div className={`w-12 h-12 bg-gradient-to-r ${gradientClasses[index]} rounded-xl flex items-center justify-center mb-6`}>
                      <IconComponent className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
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
