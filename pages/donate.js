// pages/donate.js
import { useState } from 'react'
import Navbar from '../components/Navbar'
import donateOptions from '../data/donateOptions'

export default function Donate() {
  const [customAmt, setCustomAmt] = useState('')
  const [loading, setLoading] = useState(false)

  const createSession = async ({ amount, recurring }) => {
    setLoading(true)
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, recurring }),
    })
    const { url } = await res.json()
    window.location = url
  }

  return (
    <div className="bg-orange-50 min-h-screen">
      <Navbar />

      <main className="px-6 pt-24 pb-12 flex flex-col items-center">
        {/* Intro */}
        <header className="text-center max-w-2xl mb-12">
          <h1 className="text-4xl font-bold text-orange-700 mb-2">Donate</h1>
          <p className="italic text-brown-600">
            Your generosity fuels Project Hooyo’s mission.
          </p>
        </header>

        {/* One-Time Gifts */}
        <section className="w-full max-w-4xl mb-16">
          <h2 className="text-2xl font-semibold text-orange-600 mb-6 text-center">
            One-Time Gift
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {donateOptions.oneTime.map(({ label, description, amount }) => (
              <div
                key={label}
                className="bg-white p-6 rounded-lg shadow flex flex-col items-center"
              >
                <p className="text-3xl font-bold text-orange-600 mb-2">
                  {label}
                </p>
                <p className="text-brown-700 mb-4 text-center">{description}</p>
                <button
                  disabled={loading}
                  onClick={() => createSession({ amount, recurring: false })}
                  className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition disabled:opacity-50"
                >
                  Donate {label}
                </button>
              </div>
            ))}

            {/* Custom Amount */}
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
              <p className="text-2xl font-semibold text-orange-600 mb-2">
                Custom Amount
              </p>
              <input
                type="number"
                min="1"
                placeholder="$"
                value={customAmt}
                onChange={e => setCustomAmt(e.target.value)}
                className="w-24 text-center border border-gray-300 rounded mb-4 p-2"
              />
              <button
                disabled={!customAmt || loading}
                onClick={() =>
                  createSession({ amount: parseFloat(customAmt), recurring: false })
                }
                className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition disabled:opacity-50"
              >
                Donate
              </button>
            </div>
          </div>
        </section>

        {/* Monthly Sponsorship */}
        <section className="w-full max-w-4xl mb-16">
          <h2 className="text-2xl font-semibold text-orange-600 mb-6 text-center">
            Monthly Sponsorship
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {donateOptions.recurring.map(({ label, description, amount }) => (
              <div
                key={label}
                className="bg-white p-6 rounded-lg shadow flex flex-col items-center"
              >
                <p className="text-3xl font-bold text-orange-600 mb-2">
                  {label}
                </p>
                <p className="text-brown-700 mb-4 text-center">{description}</p>
                <button
                  disabled={loading}
                  onClick={() => createSession({ amount, recurring: true })}
                  className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition disabled:opacity-50"
                >
                  Sponsor {label}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Transparency Note */}
        <footer className="mt-auto text-center max-w-2xl text-brown-700 text-sm">
          <p>
            All donations are tax-deductible. 100% of funds support hygiene kits,
            microgrants, workshops, and survivor resources. Thank you!
          </p>
        </footer>
      </main>
    </div>
  )
}
