import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { containerVariants, itemVariants } from '@/components/animations/variants';
import { FAQ_ITEMS, TESTIMONIALS } from '@/lib/constants';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

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
      
      <div className="container mx-auto relative z-10 p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-[60px] items-start">
          
          {/* Left Column */}
          <div className="lg:w-2/5 lg:sticky lg:top-32">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-left"
            >
              <motion.div variants={itemVariants}>
                <Badge className="glassmorphism rounded-full px-6 py-2 mb-8 text-white/90 text-sm font-medium border border-white/10 bg-white/5 backdrop-blur-sm">
                  ❓ frequently asked
                </Badge>
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-[1.1]">
                Frequently Asked
                <br />
                <span className="bg-gradient-to-r from-aireal-purple to-gradient-pink bg-clip-text text-transparent">
                  Questions
                </span>
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-xl text-white/70 max-w-3xl leading-relaxed">
                Here are the most common questions about our AI customer service platform.
              </motion.p>
            </motion.div>

            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-medium text-white mb-4">Still have a question?</h4>
              <p className="text-white/70 mb-6">Contact us! We'll be happy to help you.</p>
              <div className="flex items-center">
                {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
                  <img
                    key={index}
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className={`w-12 h-12 rounded-full object-cover border-2 border-dark-section ${index > 0 ? '-ml-4' : ''}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:w-3/5">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="space-y-4">
                {FAQ_ITEMS.map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants as Variants}
                  >
                    <Card className="glassmorphism-card border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-lg">
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold text-white flex-1 pr-4">
                          {item.question}
                        </span>
                        {openItems.includes(index) 
                          ? <X className="text-white/80 w-5 h-5 flex-shrink-0" />
                          : <Plus className="text-white/80 w-5 h-5 flex-shrink-0" />
                        }
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
        </div>
      </div>
    </section>
  );
}
