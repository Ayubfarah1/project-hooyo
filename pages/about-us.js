// pages/about-us.js
import Link from 'next/link'
import Navbar from '../components/Navbar'        // ← import your navbar
import aboutSections from '../data/aboutSections'

export default function About() {
  return (
    <>
      {/* fixed top nav */}
      <Navbar />

      {/* push the rest of the page down so it isn't hidden under the fixed nav */}
      <div className="bg-orange-50 min-h-screen flex flex-col px-6 pt-28">  
        {/* ↑ pt-28 gives space for a 3.5rem-high navbar */}

        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-orange-700 mb-2">
            About Project Hooyo
          </h1>
          <p className="italic text-brown-600">
            Our Story, Mission, and Vision
          </p>
        </header>

        {/* Mission / Vision / Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 flex-shrink-0">
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
        </section>

        {/* Meet the Team */}
        <section className="mb-16 flex-shrink-0">
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
        </section>

        {/* Spacer will push CTA to bottom when there's extra room */}
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
    </>
  )
}
