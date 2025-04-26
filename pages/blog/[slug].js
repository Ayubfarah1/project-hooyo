// pages/blog/[slug].js
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import blogPosts from '../../data/blogPosts'

export default function PostPage() {
  const { slug } = useRouter().query
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) return <p className="p-6">Loading...</p>

  return (
    <div className="bg-orange-50 min-h-screen">
      <Navbar />

      <main className="px-6 pt-24 pb-12 max-w-3xl mx-auto">
        <article className="bg-white p-8 rounded-lg shadow">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded mb-6"
          />
          <h1 className="text-3xl font-bold text-orange-700 mb-2">
            {post.title}
          </h1>
          <p className="text-sm text-brown-500 mb-6">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })} — by {post.author}
          </p>

          {/* Fake example story in bold */}
          <div className="prose prose-orange text-brown-700">
            <p>
              <strong>
                This is a fictional example story for demonstration purposes only. In this made-up scenario, Project Hooyo organized a surprise community fair that provided 500 hygiene kits, mentorship sessions, and food baskets to single mothers in the imaginary town of Hopeville.
              </strong>
            </p>
            {/* You can add more real or placeholder paragraphs below */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nibh a fringilla tincidunt, orci purus pretium erat, vitae facilisis ante nisl nec orci. Integer et lectus ac sem tincidunt luctus. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <p>
              Quisque porttitor, orci non vulputate posuere, nibh nulla condimentum mauris, non molestie orci ex et libero. Curabitur condimentum risus vel purus gravida, at fringilla enim tristique.
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}
