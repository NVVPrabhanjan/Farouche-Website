'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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

export default function EventDetails() {
  const { id } = useParams()
  const event = events.find(e => e.id === parseInt(id as string))

  if (!event) {
    return <div className="container mx-auto px-4 py-8">Event not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      >
        <Image src={event.image} alt={event.title} width={800} height={400} className="w-full h-64 object-cover" />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-teal-400">{event.title}</h1>
          <p className="text-gray-300 mb-6 text-lg">{event.description}</p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 text-teal-300">Time</h2>
              <p className="text-gray-300">{event.time}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 text-teal-300">Venue</h2>
              <p className="text-gray-300">{event.venue}</p>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2 text-teal-300">Coordinator</h2>
            <p className="text-gray-300">{event.coordinator.name}</p>
            <p className="text-gray-300">{event.coordinator.phone}</p>
          </div>
          <div className="flex justify-between items-center">
            <Link href="/events" className="text-teal-400 hover:text-teal-300 transition-colors">
              ← Back to Events
            </Link>
            <Link 
              href={`/events/${id}/register`}
              className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors"
            >
              Register for Event
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

