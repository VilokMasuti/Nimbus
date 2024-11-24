import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample slides data (each slide contains an image, title, subtitle, and description)
const slides = [
  {
    image: "https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/h1-slide-1-background.jpg",
    title: "THIS IS BEAUTY",
    subtitle: "Designed with love & care, Fleur is all you ever wanted",
    description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor elit."
  },
  {
    image: "https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/h1-slide-4-background.jpg",
    title: "PURE ELEGANCE",
    subtitle: "Create something unique with Fleur",
    description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit."
  },
  {
    image: "https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/h1-parallax-3.jpg",
    title: "STYLE & GRACE",
    subtitle: "Make your beautiful website with Fleur",
    description: "Nam nec tellus a odio tincidunt auctor elit. Duis sed odio sit amet nibh vulputate cursus a sit amet."
  }
];

// Hero component that handles the slider logic
const Hero = () => {
  // State for tracking the current slide (index)
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect hook to auto-advance the slide every 4 seconds
  useEffect(() => {
    // Set an interval that updates the current slide every 4 seconds
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // Loop back to the first slide after the last one
    }, 4000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  // Handlers for previous and next slide navigation
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Decrement and loop back to the last slide
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Increment and loop back to the first slide
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* AnimatePresence helps with slide transitions, ensuring the slide exits before the new one enters */}
      <AnimatePresence initial={false} mode="wait">
        {/* Motion.div animates the slide */}
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }} // Start with opacity 0
          animate={{ opacity: 1 }} // Fade in
          exit={{ opacity: 0 }} // Fade out when exiting
          transition={{ duration: 1 }} // Animation duration for fading in/out
          className="absolute inset-0"
        >
          {/* Background image with grayscale filter */}
          <div
            className="absolute inset-0 bg-cover bg-center filter grayscale"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }} // Dynamically set the background image based on the current slide
          />
          {/* Semi-transparent black overlay for improved text visibility */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Centered content with text and button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            {/* Slide Title with animation */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} // Start from opacity 0 and slightly below
              animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
              transition={{ duration: 0.8, delay: 0.3 }} // Duration and delay for the animation
              className="text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-wider text-center mb-6"
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Subtitle with animation */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-white font-light italic text-center mb-4"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* Description with animation */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="max-w-2xl text-white/80 text-center mb-8"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* Purchase button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="border border-white text-white px-12 py-3 hover:bg-white hover:text-black transition-all duration-300"
            >
              PURCHASE
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {/* Previous slide button */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={48} />
      </button>

      {/* Next slide button */}
      <button
        onClick={handleNextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={48} />
      </button>

      {/* Slide counter */}
      {/* Left counter */}
      <div className="absolute bottom-8 left-8 text-white text-xl font-light">
        <span>{currentSlide + 1}</span> {/* Current slide number */}
        <span className="text-white/50">/</span>
        <span>{slides.length}</span> {/* Total number of slides */}
      </div>

      {/* Right counter */}
      <div className="absolute bottom-8 right-8 text-white text-xl font-light">
        <span>{currentSlide + 1}</span>
        <span className="text-white/50">/</span>
        <span>{slides.length}</span>
      </div>
    </div>
  );
};

export default Hero;
