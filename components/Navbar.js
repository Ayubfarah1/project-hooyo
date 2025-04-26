// components/Navbar.js
import Link from 'next/link'
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Resources', href: '/resources' },
    { label: 'For Survivors', href: '/for-survivors' },
    { label: 'Get Involved', href: '/get-involved' },
    { label: 'Donate', href: '/donate' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center px-6 py-3 bg-orange-50 fixed w-full top-0 z-50"
    >
      {/* Logo + Title */}
      <div className="flex items-center space-x-3">
        <Link href="/" legacyBehavior>
          <a>
            <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold text-orange-700">Project Hooyo</a>
        </Link>
      </div>

      {/* Nav Links */}
      <div className="space-x-4">
        {links.map(({ label, href }) => (
          <Link key={label} href={href} legacyBehavior>
            <a className="text-brown-700 px-3 py-2 rounded hover:bg-orange-100 transition">
              {label}
            </a>
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}
