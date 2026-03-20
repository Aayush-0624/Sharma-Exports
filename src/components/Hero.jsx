import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {

  const isDesktop = window.innerWidth > 768;

  return (
    <section className="relative w-full min-h-screen bg-[url('/worldmap.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden">

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      {/* 🌍 Optimized Animated Routes (ONLY DESKTOP) */}
      {isDesktop && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">

          {/* USA → Europe */}
          <motion.line
            x1="22%" y1="30%"
            x2="48%" y2="32%"
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray="300"
            strokeDashoffset="300"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Europe → UAE */}
          <motion.line
            x1="48%" y1="32%"
            x2="60%" y2="45%"
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray="250"
            strokeDashoffset="250"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />

          {/* UAE → India */}
          <motion.line
            x1="60%" y1="45%"
            x2="69%" y2="44%"
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray="200"
            strokeDashoffset="200"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
          />

          {/* India → Asia */}
          <motion.line
            x1="69%" y1="44%"
            x2="76%" y2="36%"
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray="200"
            strokeDashoffset="200"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}
          />

        </svg>
      )}

      {/* 🚀 HERO CONTENT */}
      <div className="relative z-10 text-center text-white max-w-3xl px-6">

        {/* 🔥 Updated Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Exporting Quality Products <br />
          <span className="text-green-400">Worldwide from India</span>
        </h1>

        {/* 🔥 Updated Description */}
        <p className="mt-6 text-lg text-gray-300">
          We export copper, aluminium, brass scrap, agricultural 
          and poultry products with trusted quality and global delivery.
        </p>

        {/* 🔥 CTA BUTTONS */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">

          {/* WhatsApp (Primary CTA) */}
          <a
            href="https://wa.me/919173982267"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Get Quote on WhatsApp
          </a>

          {/* Secondary CTA */}
          <Link to="/services">
            <button className="border border-white/40 px-8 py-3 rounded-lg hover:bg-white/10 transition">
              Explore Services
            </button>
          </Link>

        </div>

        {/* ✅ TRUST BADGES */}
        <div className="mt-12 flex justify-center gap-6 flex-wrap text-sm text-gray-400">

          <span>✔ ISO Certified</span>
          <span>✔ 10+ Countries Served</span>
          <span>✔ Premium Quality</span>
          <span>✔ Fast Delivery</span>

        </div>

      </div>

      {/* 📍 LIMITED MAP MARKERS (Optimized) */}
      {isDesktop && (
        <>
          <FaMapMarkerAlt className="absolute text-red-500 text-3xl top-[30%] left-[22%] animate-bounce" />
          <FaMapMarkerAlt className="absolute text-red-500 text-3xl top-[32%] left-[48%] animate-bounce" />
          <FaMapMarkerAlt className="absolute text-red-500 text-3xl top-[45%] left-[60%] animate-bounce" />
          <FaMapMarkerAlt className="absolute text-red-500 text-3xl top-[44%] left-[69%] animate-bounce" />
          <FaMapMarkerAlt className="absolute text-red-500 text-3xl top-[36%] left-[76%] animate-bounce" />
        </>
      )}

    </section>
  );
}