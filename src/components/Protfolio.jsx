
import { motion } from 'framer-motion';

const portfolioItems = [
  { id: 1, title: 'Spring Bouquet', image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/h1-slide-2-img-4.png' },
  { id: 2, title: 'Wedding Centerpiece', image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/06/shop-product-14-706x1024.jpg' },
  { id: 3, title: 'Tropical Arrangement', image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/h1-slide-2-img-6.png' },
  { id: 4, title: 'Rustic Wildflowers', image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/blog-post-img-11-600x720.jpg' },
  { id: 5, title: 'Modern Minimalist', image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/port4-img-8.jpg' },
  { id: 6, title: 'Seasonal Wreath', image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/05/port4-img-6.jpg' },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-cormorant text-center mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-cormorant">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

