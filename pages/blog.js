// pages/blog.js
import Link from 'next/link'
import { motion } from 'framer-motion'
import blogPosts from '../data/blogPosts'

export default function Blog() {
  return (
    <div className="flex flex-col">
      {/* Animated Header */}
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-orange-700 mb-2">Blog & News</h1>
        <p className="italic text-brown-600">
          Updates, stories, and guest posts from the Project Hooyo community.
        </p>
      </motion.header>

      {/* Animated Blog Grid */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {blogPosts.map(({ slug, title, date, author, excerpt, image }) => (
          <motion.article
            key={slug}
            className="bg-white rounded-lg shadow overflow-hidden flex flex-col"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-brown-500 mb-1">
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}{" "}
                — by {author}
              </p>
              <h2 className="text-xl font-semibold text-orange-600 mb-3">
                {title}
              </h2>
              <p className="text-brown-700 mb-6 flex-grow">{excerpt}</p>
              <Link href={`/blog/${slug}`} legacyBehavior>
                <a className="mt-auto text-orange-600 hover:underline">
                  Read more →
                </a>
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.section>
    </div>
  )
}
