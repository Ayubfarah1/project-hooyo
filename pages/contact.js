// pages/contact.js
import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

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
    <div className="bg-orange-50 min-h-screen">
      <Navbar />

      <main className="max-w-lg mx-auto px-6 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-orange-700 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-brown-600 italic mb-8 text-center">
          Your message is confidential. We’ll respond as soon as we can.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
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
            <p className="text-green-600 mt-4 text-center">Thanks! We’ll be in touch.</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 mt-4 text-center">Oops, something went wrong.</p>
          )}
        </form>
      </main>
    </div>
  )
}
