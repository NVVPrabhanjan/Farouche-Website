'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-gray-100 p-4 sticky top-0 z-10"
    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-teal-400">FAROUCHE</span> Hostel Fest
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-teal-300 transition-colors">Home</Link>
          <Link href="/events" className="hover:text-teal-300 transition-colors">Events</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-100 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4"
        >
          <Link href="/" className="block py-2 hover:text-teal-300 transition-colors">Home</Link>
          <Link href="/events" className="block py-2 hover:text-teal-300 transition-colors">Events</Link>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header

