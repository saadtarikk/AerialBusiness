import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { containerVariants, itemVariants } from '@/components/animations/variants';
import { NAVIGATION_LINKS } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center"
        style={{ paddingTop: isScrolled ? '12px' : '28px' }}
      >
        <nav className={`glassmorphism rounded-2xl flex items-center justify-between transition-all duration-300 w-full max-w-[1240px] mx-6 ${
          isScrolled 
            ? 'px-4 py-2 bg-white/20' 
            : 'px-3 py-3 bg-white/10'
        }`}>
          {/* Logo Section */}
          <div className="flex items-center gap-3.5">
            <div className={`bg-aireal-primary rounded-lg flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'w-8 h-8' : 'w-10 h-10'
            }`}>
              <Bot className={`text-white transition-all duration-300 ${
                isScrolled ? 'text-sm' : 'text-base'
              }`} />
            </div>
            <span className={`font-medium text-aireal-primary transition-all duration-300 ${
              isScrolled ? 'text-xl' : 'text-[28px] leading-10'
            }`}>
              Aireal
            </span>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {NAVIGATION_LINKS.map((link, index) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                onClick={() => scrollToSection(link.href)}
                className={`text-muted-foreground hover:text-foreground transition-all duration-200 font-medium ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                {link.label}
              </motion.button>
            ))}
          </div>
          
          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button 
              className={`bg-aireal-primary text-white rounded-lg font-medium hover:-translate-y-0.5 transition-all duration-200 shadow-[rgba(255,255,255,0.4)_0px_1px_2px_0px_inset,rgba(0,0,0,0.1)_0px_1px_2px_0px] ${
                isScrolled ? 'px-4 py-2 text-sm h-8' : 'px-6 py-2.5 text-base h-10'
              }`}
            >
              Contact
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-aireal-primary hover:bg-aireal-primary/10"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            style={{
              top: isScrolled ? '76px' : '100px',
            }}
            className="fixed left-6 right-6 glassmorphism rounded-xl border border-white/25 bg-white/10 p-6 z-[90] lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              {NAVIGATION_LINKS.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-lg text-left font-medium"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-4 border-t border-aireal-primary/20">
                <Button className="bg-aireal-primary text-white w-full hover:-translate-y-0.5 transition-all">
                  Contact
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[80] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
