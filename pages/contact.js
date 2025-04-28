import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Instagram, Linkedin } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  return (
    <div className="flex flex-col items-center">
      {/* Animated Header */}
      <motion.header
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-orange-700 mb-2">
          Contact Us
        </h1>
        <p className="italic text-brown-600">
          Your message is confidential. We’ll respond as soon as we can.
        </p>
      </motion.header>

      {/* Animated Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-6 bg-white p-6 rounded-lg shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div>
          <label className="block text-sm font-medium text-brown-700 mb-1">
            Name (optional)
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brown-700 mb-1">
            Email (optional)
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-brown-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 mt-2 text-center">Thanks! We’ll be in touch.</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-2 text-center">Oops, something went wrong.</p>
        )}
      </motion.form>

      {/* Social Media Icons */}
      <motion.div
        className="mt-12 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-orange-700 mb-4">Connect With Us</h2>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:contact@projecthooyo.org"
            className="bg-orange-600 p-4 rounded-full hover:bg-orange-700 transition"
            aria-label="Email Us"
          >
            <Mail className="text-white w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 p-4 rounded-full hover:bg-pink-600 transition"
            aria-label="Instagram"
          >
            <Instagram className="text-white w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/company/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 p-4 rounded-full hover:bg-blue-800 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="text-white w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </div>
  )
}
