import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Custom Bouquets',
    description: 'Handcrafted floral arrangements tailored to your preferences and occasions.',
    icon: '💐',
  },
  {
    title: 'Event Decoration',
    description: 'Transform your events with our stunning floral decorations and installations.',
    icon: '🎉',
  },
  {
    title: 'Flower Subscriptions',
    description: 'Regular deliveries of fresh, seasonal blooms to brighten your space.',
    icon: '🌸',
  },
];

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-cormorant text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-cormorant mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

