// components/Navbar.js
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Resources', href: '/resources' },
    { label: 'For Survivors', href: '/for-survivors' },
    { label: 'Get Involved', href: '/get-involved' },
    { label: 'Donate', href: '/donate' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-orange-50 shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Single Logo + Brand */}
          <Link href="/" legacyBehavior>
            <a className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-orange-700">Project Hooyo</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4">
            {links.map(({ label, href }) => (
              <Link key={label} href={href} legacyBehavior>
                <a className="text-brown-700 px-3 py-2 rounded hover:bg-orange-100 transition">
                  {label}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded hover:bg-orange-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-orange-50 shadow-inner"
          >
            {links.map(({ label, href }) => (
              <Link key={label} href={href} legacyBehavior>
                <a
                  className="block px-4 py-3 text-brown-700 hover:bg-orange-100 transition"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
