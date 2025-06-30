import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { containerVariants, itemVariants } from '@/components/animations/variants';

export default function BlogContent() {
  return (
    <section className="py-16 bg-black relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <Card className="glassmorphism-card border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-invert prose-lg max-w-none">
                  {/* Main Content */}
                  <motion.div variants={itemVariants} className="space-y-8">
                    <p className="text-white/80 leading-relaxed text-lg">
                      Using SaaS for financial management brings a range of benefits. From real-time data insights to enhanced security and easy scalability, SaaS tools are designed to support financial accuracy and business agility. Here are a few specific benefits.
                    </p>
                    
                    <div className="bg-gradient-to-r from-aireal-purple/10 to-gradient-pink/10 border border-aireal-purple/20 rounded-lg p-6">
                      <ul className="space-y-3 text-white/70">
                        <li className="flex items-start">
                          <span className="text-aireal-purple mr-3">•</span>
                          <div>
                            <strong className="text-white">Cost Efficiency:</strong> "No large upfront costs and lower maintenance expenses."
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-aireal-purple mr-3">•</span>
                          <div>
                            <strong className="text-white">Accessibility:</strong> "Access your data anytime, anywhere with cloud-based systems."
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-aireal-purple mr-3">•</span>
                          <div>
                            <strong className="text-white">Flexibility:</strong> "Choose from scalable pricing plans that grow with your needs."
                          </div>
                        </li>
                      </ul>
                    </div>

                    <h3 className="text-3xl font-bold text-white mt-12 mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      Key Benefits of SaaS for Businesses
                    </h3>

                    <div className="space-y-6">
                      <p className="text-white/80 leading-relaxed">
                        <strong className="text-white">Cost Efficiency:</strong><br />
                        "SaaS typically operates on a subscription model, allowing businesses to avoid large upfront costs. This flexibility makes high-quality software accessible to startups, mid-size companies, and large enterprises alike."
                      </p>

                      <ul className="space-y-6 pl-0">
                        <li className="glassmorphism-card bg-white/5 border border-white/10 rounded-lg p-6">
                          <strong className="text-white block mb-2">Scalability on Demand:</strong>
                          <p className="text-white/70 leading-relaxed">
                            "As your business grows, so can your SaaS services. SaaS platforms make it easy to add or reduce services as needed, so you're only paying for what you use. Scaling is fast, often just a few clicks, allowing you to stay agile."
                          </p>
                        </li>
                        
                        <li className="glassmorphism-card bg-white/5 border border-white/10 rounded-lg p-6">
                          <strong className="text-white block mb-2">Access from Anywhere:</strong>
                          <p className="text-white/70 leading-relaxed">
                            "SaaS solutions are cloud-based, meaning employees can access software from any location with internet connectivity. This mobility supports remote work, real-time collaboration, and fast data access across global teams."
                          </p>
                        </li>
                        
                        <li className="glassmorphism-card bg-white/5 border border-white/10 rounded-lg p-6">
                          <strong className="text-white block mb-2">Automatic Updates and Security:</strong>
                          <p className="text-white/70 leading-relaxed">
                            "With SaaS, updates are handled automatically by the provider, ensuring you always have access to the latest features and security improvements without any hassle."
                          </p>
                        </li>
                      </ul>
                    </div>

                    <h3 className="text-3xl font-bold text-white mt-12 mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      Choosing the Right SaaS Solution for Your Business
                    </h3>

                    <div className="space-y-6">
                      <p className="text-white/80 leading-relaxed">
                        <strong className="text-white">Compatibility:</strong><br />
                        "Ensure that the SaaS software integrates with your existing systems, such as your CRM, payment processing, and accounting software, for smooth operations."
                      </p>

                      <ul className="space-y-6 pl-0">
                        <li className="glassmorphism-card bg-white/5 border border-white/10 rounded-lg p-6">
                          <strong className="text-white block mb-2">Scalability:</strong>
                          <p className="text-white/70 leading-relaxed">
                            "Look for a solution that can grow with your business. A good SaaS platform should accommodate your business as it scales, supporting additional users, locations, and services as needed."
                          </p>
                        </li>
                        
                        <li className="glassmorphism-card bg-white/5 border border-white/10 rounded-lg p-6">
                          <strong className="text-white block mb-2">User Experience:</strong>
                          <p className="text-white/70 leading-relaxed">
                            "The ideal SaaS product should have a user-friendly interface, minimizing the need for intensive training and promoting quick adoption among your team."
                          </p>
                        </li>
                        
                        <li className="glassmorphism-card bg-white/5 border border-white/10 rounded-lg p-6">
                          <strong className="text-white block mb-2">Customer Support and Security:</strong>
                          <p className="text-white/70 leading-relaxed">
                            "Evaluate the SaaS provider's customer support and data security measures. Quality support and secure data practices are essential for long-term success and reliability."
                          </p>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 