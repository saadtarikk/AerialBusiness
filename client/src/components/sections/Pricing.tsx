import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { containerVariants, itemVariants, cardVariants } from '@/components/animations/variants';
import { PRICING_PLANS } from '@/lib/constants';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-aireal-background">
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
              💰 pricing
            </Badge>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, transparent
            <span className="bg-gradient-to-r from-aireal-purple to-gradient-pink bg-clip-text text-transparent">
              {" "}pricing
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
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
            <motion.div key={index} variants={cardVariants} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-aireal-purple to-gradient-pink text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`glassmorphism hover:scale-105 transition-transform duration-300 border-white/25 bg-white/5 h-full ${
                plan.popular ? 'ring-2 ring-aireal-purple/50' : ''
              }`}>
                <CardHeader className="text-center pb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    {plan.price ? `$${plan.price}` : 'Custom'}
                    {plan.price && <span className="text-lg text-gray-600 font-normal">/month</span>}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="text-green-500 mr-3 h-4 w-4 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-3 transition-transform hover:scale-105 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-aireal-purple to-gradient-pink text-white'
                        : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white'
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
