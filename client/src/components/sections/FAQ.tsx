import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { containerVariants, itemVariants } from '@/components/animations/variants';
import { FAQ_ITEMS } from '@/lib/constants';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-32 bg-dark-section relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10"></div>
      
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
              ❓ frequently asked
            </Badge>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-[1.1]">
            Got
            <br />
            <span className="bg-gradient-to-r from-aireal-purple to-gradient-pink bg-clip-text text-transparent">
              questions?
            </span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Here are the most common questions about our AI customer service platform.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-6">
            {FAQ_ITEMS.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.01,
                  transition: { 
                    duration: 0.2,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }}
              >
                <Card className="glassmorphism-card border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-lg">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-white flex-1">
                      {item.question}
                    </span>
                    <ChevronDown 
                      className={`text-white/60 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openItems.includes(index) ? 'auto' : 0,
                      opacity: openItems.includes(index) ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-white/70 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
