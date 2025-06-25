import { motion } from 'framer-motion';
import { Bot, Calendar, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { containerVariants, itemVariants, buttonVariants } from '@/components/animations/variants';
import { COMPANY_INFO, NAVIGATION_LINKS, SOCIAL_LINKS } from '@/lib/constants';

const socialIconMap = {
  Facebook,
  Twitter,
  Instagram,
  Linkedin
};

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-aireal-primary relative overflow-hidden">
      {/* CTA Section */}
      <div className="py-20 relative z-10">
        {/* Gradient backgrounds */}
        <div className="gradient-orb w-96 h-96 -top-48 -left-48 bg-gradient-to-r from-gradient-blue to-gradient-purple opacity-20"></div>
        <div className="gradient-orb w-80 h-80 -bottom-40 -right-40 bg-gradient-to-r from-gradient-orange to-gradient-pink opacity-15"></div>
        
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <Badge className="glassmorphism-dark rounded-full px-6 py-2 text-white/90 text-sm font-medium">
                🚀 Join the AI Revolution
              </Badge>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to start your AI journey
              <span className="bg-gradient-to-r from-gradient-blue to-gradient-pink bg-clip-text text-transparent">
                {" "}with us?
              </span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-xl text-white/80 max-w-3xl mx-auto">
              Transform your customer service today and deliver exceptional experiences that drive growth.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.div variants={buttonVariants} whileHover="hover">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-aireal-purple to-gradient-pink text-white px-8 py-4 text-lg font-semibold shadow-lg"
                >
                  Get Started Free
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Button 
                  variant="outline"
                  size="lg"
                  className="glassmorphism-dark text-white border-white/25 px-8 py-4 text-lg font-semibold hover:bg-white/10"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-aireal-purple to-gradient-pink rounded-lg flex items-center justify-center">
                  <Bot className="text-white text-sm" />
                </div>
                <span className="text-xl font-bold text-white">{COMPANY_INFO.name}</span>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                Empowering businesses with AI-driven customer service solutions that deliver exceptional experiences and drive growth.
              </p>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social, index) => {
                  const IconComponent = socialIconMap[social.icon as keyof typeof socialIconMap];
                  return (
                    <a 
                      key={index}
                      href={social.href} 
                      className="text-white/60 hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <IconComponent className="text-xl" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
            
            {/* Use Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Use Links</h4>
              <ul className="space-y-2">
                {NAVIGATION_LINKS.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/60 hover:text-white transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </motion.div>
            
            {/* Company */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li className="text-white/60 text-sm">105 North 1st Street, #28</li>
                <li className="text-white/60 text-sm">San Jose, CA 94748</li>
                <li className="text-white/60 text-sm mt-4">{COMPANY_INFO.email}</li>
                <li className="text-white/60 text-sm">{COMPANY_INFO.phone}</li>
              </ul>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between"
          >
            <p className="text-white/60 text-sm">
              © 2024 {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
