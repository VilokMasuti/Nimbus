
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <img src="https://fleur.qodeinteractive.com/wp-content/uploads/2016/12/h1-img-1.jpg" alt="About Fleur" className="rounded-lg shadow-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 md:pl-10"
        >
          <h2 className="text-4xl font-cormorant mb-6">About Fleur</h2>
          <p className="text-lg mb-6">
            At Fleur, we believe in the power of flowers to transform spaces and uplift spirits. Our passion for floral artistry drives us to create stunning arrangements that bring nature&apos;s beauty into your everyday life.
          </p>
          <p className="text-lg mb-8">
            With years of experience and a keen eye for design, our team of expert florists crafts each bouquet with care and precision, ensuring that every bloom tells a story.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

