import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAVIGATION_LINKS } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        className="fixed top-4 left-4 right-4 z-[100] flex justify-center"
      >
        <nav className={`glassmorphism rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-300 w-full max-w-6xl ${
          isScrolled ? 'bg-white/20' : 'bg-white/10'
        }`}>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-aireal-purple to-gradient-pink rounded-lg flex items-center justify-center">
              <Bot className="text-white text-sm" />
            </div>
            <span className="text-xl font-bold text-white">Aireal</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link, index) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                onClick={() => scrollToSection(link.href)}
                className="text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              Contact
            </Button>
            <Button className="bg-gradient-to-r from-aireal-purple to-gradient-pink text-white hover:scale-105 transition-transform">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-white/10"
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
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[calc(100vw-2rem)] glassmorphism-dark p-6 pt-20 z-[90] md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {NAVIGATION_LINKS.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white/80 hover:text-white transition-colors text-lg text-left"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-4 border-t border-white/20">
                <Button
                  variant="ghost"
                  className="text-white/80 hover:text-white mb-4 w-full justify-start"
                >
                  Contact
                </Button>
                <Button className="bg-gradient-to-r from-aireal-purple to-gradient-pink text-white w-full hover:scale-105 transition-transform">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[80] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
