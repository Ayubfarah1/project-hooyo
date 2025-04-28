import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main className="flex flex-col items-center pt-24 px-4 pb-10">
        {/* Animated Logo */}
        <motion.img
          src="/logo.png"
          alt="Project Hooyo Logo"
          className="w-32 h-32 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Animated Title */}
        <motion.h1
          className="text-5xl font-extrabold text-orange-700 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Project Hooyo
        </motion.h1>

        {/* Animated Tagline */}
        <motion.p
          className="mt-2 text-lg text-brown-500 italic text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Rising for Others — The Hooyo Way
        </motion.p>

        {/* Animated Mission Statement */}
        <motion.section
          className="mt-8 max-w-3xl text-brown-700 text-sm leading-relaxed space-y-4 px-4 indent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <p>
            Project Hooyo was founded by daughters raised by single mothers and
            women who carried entire households with faith, strength, and
            nothing but their own two hands. Our work centers Somali, Muslim,
            and immigrant women and children in Minnesota — especially those who
            are low-income or survivors of domestic violence.
          </p>
          <p>
            Project Hooyo is our sadaqah — a means to give back, uplift others,
            and bring healing — all with Allah’s permission. Every kit, grant,
            and resource we offer carries that forward — the Hooyo way.
          </p>
          <p>
            Right now, we’re building from the ground up — addressing poverty,
            domestic violence, food insecurity, and lack of basic resources. As
            Muslims, we carry the obligation to stand with women, protect their
            dignity, and ease their burdens.
          </p>
          <p>
            Long-term, we envision housing, prevention programs, and fellowships
            empowering survivors to become advocates. Project Hooyo is a
            movement to restore dignity and redefine healing for Black, brown,
            Muslim, and immigrant women globally.
          </p>
          <p className="font-semibold">
            In shaa Allah, with every step we walk in the resilience of our
            mothers. With Allah’s permission, we will create a space for women
            to heal, rest, and rise.
          </p>
        </motion.section>

        {/* Animated Quick Links */}
        <motion.div
          className="mt-10 mb-16 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <a
            href="/about-us"
            className="bg-orange-600 text-white px-6 py-3 rounded shadow hover:bg-orange-700 transition"
          >
            About Us
          </a>
          <a
            href="/resources"
            className="border border-orange-600 text-orange-600 px-6 py-3 rounded hover:bg-orange-100 transition"
          >
            Resources
          </a>
          <a
            href="/get-involved"
            className="border border-orange-600 text-orange-600 px-6 py-3 rounded hover:bg-orange-100 transition"
          >
            Get Involved
          </a>
          <a
            href="/donate"
            className="border border-orange-600 text-orange-600 px-6 py-3 rounded hover:bg-orange-100 transition"
          >
            Donate
          </a>
        </motion.div>
      </main>
    </div>
  );
}
