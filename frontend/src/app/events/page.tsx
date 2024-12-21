'use client'

import { motion } from 'framer-motion'
import EventCard from '../components/EventCard'

const events = [
  { 
    id: 1, 
    title: 'Music Night', 
    image: '/placeholder.svg?height=300&width=400',
    description: 'An evening of melodious performances by talented musicians.',
    time: '7:00 PM - 10:00 PM',
    venue: 'Main Auditorium',
    coordinator: {
      name: 'John Doe',
      phone: '+1 234 567 8900'
    }
  },
  { 
    id: 2, 
    title: 'Cultural Dance', 
    image: '/placeholder.svg?height=300&width=400',
    description: 'Experience diverse dance forms from around the world.',
    time: '6:00 PM - 9:00 PM',
    venue: 'Open Air Theater',
    coordinator: {
      name: 'Jane Smith',
      phone: '+1 234 567 8901'
    }
  },
  { 
    id: 3, 
    title: 'Food Festival', 
    image: '/placeholder.svg?height=300&width=400',
    description: 'Savor delicious cuisines from different cultures.',
    time: '12:00 PM - 4:00 PM',
    venue: 'Hostel Grounds',
    coordinator: {
      name: 'Mike Johnson',
      phone: '+1 234 567 8902'
    }
  },
  { 
    id: 4, 
    title: 'Sports Tournament', 
    image: '/placeholder.svg?height=300&width=400',
    description: 'Compete in various sports and show your athletic skills.',
    time: '9:00 AM - 5:00 PM',
    venue: 'Sports Complex',
    coordinator: {
      name: 'Sarah Williams',
      phone: '+1 234 567 8903'
    }
  },
]

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-600">
          Hostel Fest Events
        </h1>
        <p className="text-xl text-gray-300 mb-8">Discover our exciting lineup of events!</p>
      </motion.section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <EventCard id={event.id} title={event.title} image={event.image} description={event.description} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

