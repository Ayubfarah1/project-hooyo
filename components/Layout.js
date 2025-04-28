// components/Layout.js
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="bg-orange-50 min-h-screen">
      <Navbar />

      {/* 1) pt-24: push below the fixed navbar  
          2) px-4 → sm:px-6 → lg:px-8: responsive side padding  
          3) max-w-4xl mx-auto: cap width & center */}
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {children}
      </main>
    </div>
  )
}
