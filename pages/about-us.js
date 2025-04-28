import Link from 'next/link'
import { motion } from 'framer-motion'
import aboutSections from '../data/aboutSections'

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Animated Header */}
      <motion.header
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-orange-700 mb-2">
          About Project Hooyo
        </h1>
        <p className="italic text-brown-600">
          Our Story, Mission, and Vision
        </p>
      </motion.header>

      {/* Animated Mission / Vision / Values */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 flex-shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {aboutSections.map(({ title, body }) => (
          <div key={title} className="px-4 max-w-lg mx-auto flex flex-col">
            <h2 className="text-2xl font-semibold text-orange-600 mb-3">
              {title}
            </h2>
            <p className="text-sm text-brown-700 leading-relaxed flex-grow break-words">
              {body}
            </p>
          </div>
        ))}
      </motion.section>

      {/* Animated Meet the Team */}
      <motion.section
        className="mb-16 flex-shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-8">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-3" />
              <p className="font-semibold">FirstName LastName</p>
              <p className="text-sm text-brown-600">Position</p>
            </div>
          ))}
        </div>
      </motion.section>

      <div className="flex-grow" />

      {/* Call to Action */}
      <footer className="text-center mb-8">
        <p className="text-brown-700 font-medium mb-3">
          Join us in empowering women and transforming communities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/get-involved" legacyBehavior>
            <a className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition">
              Get Involved
            </a>
          </Link>
          <Link href="/donate" legacyBehavior>
            <a className="border border-orange-600 text-orange-600 px-6 py-3 rounded hover:bg-orange-100 transition">
              Donate
            </a>
          </Link>
        </div>
      </footer>
    </div>
  )
}
