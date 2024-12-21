'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface EventCardProps {
  id: number
  title: string
  image: string
  description: string
}

const EventCard: React.FC<EventCardProps> = ({ id, title, image, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
    >
      <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-teal-400">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
        <Link 
          href={`/events/${id}`}
          className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}

export default EventCard

