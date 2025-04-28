import Link from 'next/link'
import { motion } from 'framer-motion'
import resourceSections from '../data/resourceSections'

export default function Resources() {
  return (
    <div className="flex flex-col">
      {/* Animated Header */}
      <motion.header
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-orange-700">Resources</h1>
        <p className="italic text-brown-600">
          Support & Services for Minnesota Survivors
        </p>
      </motion.header>

      {/* Animated Grid of Cards */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {resourceSections.map(({ title, items, image }) => (
          <div
            key={title}
            className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row"
          >
            {/* Text side */}
            <div className="flex-1 mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold text-orange-600 mb-4">
                {title}
              </h2>
              <ul className="text-brown-700 space-y-4">
                {items.map(({ name, description, url }) => (
                  <li key={name}>
                    <a
                      href={url}
                      target={url.startsWith('http') ? '_blank' : undefined}
                      rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-medium text-orange-600 hover:underline"
                    >
                      {name}
                    </a>
                    <p className="text-sm">{description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image side */}
            <div className="flex-1">
              <img
                src={image}
                alt={title}
                className="w-auto h-80 object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </motion.section>

      {/* Footer Call-out */}
      <footer className="mt-auto text-center">
        <p className="text-brown-700 mb-3">
          Need something else?{' '}
          <Link href="/contact" legacyBehavior>
            <a className="text-orange-600 underline">Contact us</a>
          </Link>
          .
        </p>
      </footer>
    </div>
  )
}
