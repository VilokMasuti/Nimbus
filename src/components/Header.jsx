import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

const Header = () => {
  // State to track if the page has been scrolled beyond a certain point (50px in this case)
  const [isScrolled, setIsScrolled] = useState(false);
  // State to handle the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hook to monitor the scroll position of the window
  useEffect(() => {
    const handleScroll = () => {
      // If scrolled more than 50px, set isScrolled to true, otherwise false
      setIsScrolled(window.scrollY > 50);
    };

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-light"
          >
            {/* Show the logo based on scroll state */}
            <img
              src="https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/logo-light.png"
              alt="Fleur"
              className={`h-8 ${isScrolled ? 'hidden' : 'block'}`} // Hide logo on scroll
            />
            <img
              src="https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/logo-light.png"
              alt="Fleur"
              className={`h-8 ${isScrolled ? 'block' : 'hidden'}`} // Show logo when scrolled
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['HOME', 'PAGES', 'PORTFOLIO', 'BLOG', 'SHOP', 'ELEMENTS'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm tracking-wider hover:text-pink-500 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                whileHover={{ y: -2 }} // Hover effect to move text slightly up
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }} // Scale effect on hover
              className={isScrolled ? 'text-gray-800' : 'text-white'} // Change text color based on scroll
            >
              <Search size={20} />
            </motion.button>
            {/* Shopping Cart Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }} // Scale effect on hover
              className={isScrolled ? 'text-gray-800' : 'text-white'}
            >
              <ShoppingCart size={20} />
            </motion.button>
            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }} // Scale effect on hover
              className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`} // Only show on mobile
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu visibility
            >
              {/* Toggle between menu and close icon */}
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {/* If the mobile menu is open, show the items */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} // Initial state (invisible, collapsed)
            animate={{ opacity: 1, height: 'auto' }} // Final state (visible, expanded)
            exit={{ opacity: 0, height: 0 }} // State when exiting (invisible, collapsed)
            className="md:hidden bg-white"
          >
            {['HOME', 'PAGES', 'PORTFOLIO', 'BLOG', 'SHOP', 'ELEMENTS'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 px-4 text-gray-800 hover:bg-gray-100 text-sm tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu when a link is clicked
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
