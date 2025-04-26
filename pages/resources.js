// pages/resources.js
import Link from 'next/link'
import Navbar from '../components/Navbar'
import resourceSections from '../data/resourceSections'

export default function Resources() {
  return (
    <div className="bg-orange-50 min-h-screen">
      {/* fixed navbar */}
      <Navbar />

      <main className="px-6 pt-24 pb-12 flex flex-col">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-700">Resources</h1>
          <p className="italic text-brown-600">
            Support & Services for Minnesota Survivors
          </p>
        </header>

        {/* Two-column grid of cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {resourceSections.map(({ title, items, image }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row"
            >
              {/* text side */}
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

              {/* image side */}
              <div className="flex-1">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-60 md:h-80 object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </section>

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
      </main>
    </div>
  )
}
