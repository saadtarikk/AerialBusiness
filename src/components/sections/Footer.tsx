import { motion } from 'framer-motion';
import { X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'wouter';
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
    <footer className="flex flex-col items-center justify-start w-full p-2 lg:p-4 bg-dark-section">
      <div className="w-full max-w-[1920px] mx-auto bg-[#1B0C25] rounded-2xl p-10 md:p-16 relative overflow-hidden">
        
        <div className="absolute w-[658px] h-[548px] rounded-full bg-gradient-to-r from-gradient-blue to-gradient-pink opacity-25 blur-[80px] -left-48 -top-32"></div>
        <div className="absolute w-[658px] h-[548px] rounded-full bg-gradient-to-r from-gradient-orange to-gradient-pink opacity-20 blur-[80px] -right-32 -bottom-48"></div>

        <div className="relative z-10 flex flex-col items-start text-left mb-24">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8 w-full"
            >
              <motion.div variants={itemVariants}>
                <Badge variant="footer">
                  Join the AI Revolution
                </Badge>
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-[40px] lg:text-[76px] font-medium text-white leading-tight max-w-4xl">
                Ready to start your AI <br /> journey with us?
              </motion.h2>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-row items-start justify-start space-x-4 sm:space-x-6"
              >
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Button
                    className="inline-flex items-center justify-center px-8 py-4 bg-aireal-primary text-white font-medium rounded-lg backdrop-blur-md shadow-lg border-0 transition-all duration-300 hover:bg-aireal-primary/90 hover:shadow-xl"
                  >
                    Get Started
                  </Button>
                </motion.div>
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link href="/contact">
                    <Button
                      asChild
                      variant="outline"
                      className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded-lg backdrop-blur-md shadow-md border border-white transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
                    >
                      <span>Book a Demo</span>
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
        </div>
        
        <hr className="border-white/10 my-16" />

        <div className="container mx-auto px-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex w-full flex-col lg:flex-row flex-nowrap items-start justify-start lg:justify-between gap-16 lg:gap-0 overflow-hidden h-min content-start flex-none p-0 z-[3]"
          >
            <motion.div variants={itemVariants} className="flex-1 max-w-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <X className="text-black text-xl" />
                </div>
                <span className="text-3xl font-medium text-white">AiReal</span>
              </div>
              <p className="text-white/70 mb-6">
                Manage Ai effortlessly
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
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 text-left">
              <motion.div variants={itemVariants}>
                <h4 className="text-white font-semibold mb-4">Use Link</h4>
                <ul className="space-y-3">
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
                      <Link href="/contact">
                        <a className="text-white/60 hover:text-white transition-colors">
                          Contact
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a href="/blog" className="text-white/60 hover:text-white transition-colors">
                        Blog
                      </a>
                    </li>
                     <li>
                      <a href="/404" className="text-white/60 hover:text-white transition-colors">
                        404
                      </a>
                    </li>
                </ul>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li className="text-white/60 text-sm">119 Whitefield Road<br/>Glasgow, G51 2SD</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <span className="text-8xl font-black text-white/5 select-none">
              Aireal
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between"
          >
            <p className="text-white/60 text-sm">
              © 2025 Design & Developed by Delivix
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-white/60 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
