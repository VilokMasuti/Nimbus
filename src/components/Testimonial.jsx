import React from 'react';
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-cormorant mb-8">What Our Clients Say</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <blockquote className="text-2xl italic mb-6">
            "Fleur's arrangements are simply breathtaking. They transformed our wedding venue into a magical garden. We couldn't be happier with their service and creativity!"
          </blockquote>
          <p className="text-lg font-semibold">Emily & Michael</p>
          <p className="text-gray-600">Happy Newlyweds</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;

