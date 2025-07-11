import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { containerVariants, itemVariants, cardVariants, badgeVariants, buttonVariants } from '@/components/animations/variants';
import { PRICING_PLANS } from '@/lib/constants';
import AnimatedGlowBackground from '@/components/animations/AnimatedGlowBackground';

export default function Pricing() {
  return (
    <section id="pricing" className="pt-32 pb-16 bg-dark-section relative overflow-hidden">
      <AnimatedGlowBackground />
      
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
              💰 pricing
            </Badge>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-[40px] lg:text-6xl font-medium text-white mb-8 leading-[1.1]">
            Simple, transparent
            <br />
            <span className="bg-gradient-to-r from-aireal-purple to-gradient-pink bg-clip-text text-transparent">
              pricing
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. Upgrade or downgrade at any time.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {PRICING_PLANS.map((plan, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants} 
              className="relative"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { 
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge variant="popular">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full glassmorphism-card border-white/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 ${
                plan.popular ? 'ring-2 ring-aireal-purple/50' : ''
              }`}>
                <CardHeader className="text-center pb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-4">
                    {plan.price ? `$${plan.price}` : 'Custom'}
                    {plan.price && <span className="text-lg text-white/60 font-normal">/month</span>}
                  </div>
                  <p className="text-white/70">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="text-green-400 mr-3 h-4 w-4 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-3 transition-transform hover:scale-105 glassmorphism ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-aireal-purple to-gradient-pink text-white'
                        : 'bg-aireal-primary text-white'
                    }`}
                  >
                    {plan.price ? 'Get Started' : 'Contact Sales'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
