
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'The Art of Flower Arranging',
    excerpt: 'Learn the basics of creating stunning floral compositions that will brighten any space.',
    image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/client-7.png',
  },
  {
    title: "Seasonal Blooms: What's in Season Now",
    excerpt: 'Discover which flowers are at their peak during each season and how to incorporate them into your home.',
    image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/12/client-3.png',
  },
  {
    title: 'The Language of Flowers',
    excerpt: 'Explore the hidden meanings behind different flowers and create bouquets that convey your message.',
    image: 'https://fleur.qodeinteractive.com/wp-content/uploads/2016/12/client-5.png',
  },
];

const Blog = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-cormorant text-center mb-12">From Our Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-cormorant mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-pink-500 font-semibold hover:underline">Read More</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

