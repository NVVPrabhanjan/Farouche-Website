'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function EventRegistration() {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    hostelName: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
    alert('Registration successful!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-teal-400">
          Register for Event {id}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-teal-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-gray-300">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-teal-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-teal-500"
            />
          </div>
          <div>
            <label htmlFor="hostelName" className="block mb-2 text-gray-300">Hostel Name</label>
            <input
              type="text"
              id="hostelName"
              name="hostelName"
              value={formData.hostelName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-teal-500"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors text-lg font-semibold"
          >
            Register
          </motion.button>
        </form>
        <div className="mt-6 text-center">
          <Link href={`/events/${id}`} className="text-teal-400 hover:text-teal-300 transition-colors">
            ← Back to Event Details
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

