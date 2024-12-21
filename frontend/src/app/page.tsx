'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Music, Users } from 'lucide-react';

const IconWrapper = ({ icon: Icon }) => <Icon size={24} />;

export default function Home() {
  const features = [
    {
      icon: <IconWrapper icon={Music} />,
      title: "Cultural Shows",
      description: "Experience performances from diverse cultures"
    },
    {
      icon: <IconWrapper icon={Users} />,
      title: "Social Events",
      description: "Network and make lifelong friendships"
    },
  ];

  const images = [
    {
      src: "https://blogassets.airtel.in/wp-content/uploads/2023/06/5-1.jpg",
      alt: "Traditional Dance Performance",
      caption: "Classical dance showcase"
    },
    {
      src: "https://5.imimg.com/data5/DB/WJ/MY-605509/music-concert.jpg",
      alt: "Music Concert",
      caption: "Live musical performances"
    },
    {
      src: "https://images.picxy.com/cache/2020/6/3/4dad6936a1d26bf33c232272b59d49b5.jpg",
      alt: "Cultural Exhibition",
      caption: "Art and craft displays"
    },
    {
      src: "https://www.safarmentor.com/blog/wp-content/uploads/2024/02/kambala-festival.webp",
      alt: "Folk Festival",
      caption: "Traditional celebrations"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500">
              Hostel Fest 2024
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Where cultures unite and memories are made
            </p>
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition-colors"
            >
              <div className="text-teal-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-teal-400 mb-6">Celebrate With Us</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our hostel is more than just a place to stay – it's a global community where stories are shared, friendships are forged, and memories last a lifetime.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              During Hostel Fest, we transform our spaces into a vibrant cultural hub celebrating diversity through music, dance, food, and countless exciting activities!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-xl transform transition-all duration-300 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}