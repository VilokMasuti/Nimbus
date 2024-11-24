

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setIsVisible(false);
        } else { // if scroll up show the navbar
          setIsVisible(true);
        }
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-sm' : 'bg-transparent'} ${isVisible ? 'top-0' : '-top-20'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-light"
          >
            <img
              src="https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/logo-light.png"
              alt="Fleur"
              className={`h-8 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
            />
            <img
              src="https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/logo-light.png"
              alt="Fleur"
              className={`h-8 absolute top-0 left-0 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['HOME', 'PAGES', 'PORTFOLIO', 'BLOG', 'SHOP', 'ELEMENTS'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm tracking-wider hover:text-pink-500 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              <Search size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              <ShoppingCart size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            {['HOME', 'PAGES', 'PORTFOLIO', 'BLOG', 'SHOP', 'ELEMENTS'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 px-4 text-gray-800 hover:bg-gray-100 text-sm tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

