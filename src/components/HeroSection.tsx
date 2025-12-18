"use client";

import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingPetals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fixed positions to avoid hydration mismatch
  const petals = [
    { id: 0, left: "5%", delay: 0, duration: 12, size: 14 },
    { id: 1, left: "15%", delay: 2, duration: 15, size: 18 },
    { id: 2, left: "25%", delay: 4, duration: 11, size: 12 },
    { id: 3, left: "35%", delay: 1, duration: 14, size: 20 },
    { id: 4, left: "45%", delay: 3, duration: 13, size: 16 },
    { id: 5, left: "55%", delay: 5, duration: 16, size: 14 },
    { id: 6, left: "65%", delay: 2.5, duration: 12, size: 22 },
    { id: 7, left: "75%", delay: 4.5, duration: 14, size: 15 },
    { id: 8, left: "85%", delay: 1.5, duration: 17, size: 18 },
    { id: 9, left: "95%", delay: 3.5, duration: 13, size: 12 },
    { id: 10, left: "10%", delay: 6, duration: 15, size: 16 },
    { id: 11, left: "30%", delay: 7, duration: 11, size: 20 },
    { id: 12, left: "50%", delay: 8, duration: 14, size: 14 },
    { id: 13, left: "70%", delay: 9, duration: 16, size: 18 },
    { id: 14, left: "90%", delay: 5.5, duration: 12, size: 15 },
  ];

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute text-[#c68829]/30"
          style={{ left: petal.left, top: "-20px" }}
          animate={{
            y: ["0vh", "100vh"],
            rotate: [0, 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C12 2 8 6 8 10C8 14 12 22 12 22C12 22 16 14 16 10C16 6 12 2 12 2Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

const MandalaPattern = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
    <motion.svg
      width="800"
      height="800"
      viewBox="0 0 200 200"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <pattern id="mandala" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="18" fill="none" stroke="#c68829" strokeWidth="0.5" />
          <circle cx="20" cy="20" r="12" fill="none" stroke="#c68829" strokeWidth="0.5" />
          <circle cx="20" cy="20" r="6" fill="none" stroke="#c68829" strokeWidth="0.5" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1="20"
              y1="20"
              x2={20 + 18 * Math.cos((angle * Math.PI) / 180)}
              y2={20 + 18 * Math.sin((angle * Math.PI) / 180)}
              stroke="#c68829"
              strokeWidth="0.3"
            />
          ))}
        </pattern>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#mandala)" />
    </motion.svg>
  </div>
);

const OrnamentalBorder = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
    <defs>
      <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#c68829" stopOpacity="0" />
        <stop offset="50%" stopColor="#c68829" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#c68829" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Top border */}
    <rect x="5%" y="20" width="90%" height="2" fill="url(#gold-gradient)" />
    <rect x="10%" y="30" width="80%" height="1" fill="url(#gold-gradient)" />
    {/* Bottom border */}
    <rect x="5%" y="calc(100% - 22px)" width="90%" height="2" fill="url(#gold-gradient)" />
    <rect x="10%" y="calc(100% - 31px)" width="80%" height="1" fill="url(#gold-gradient)" />
    {/* Corner ornaments */}
  <circle cx="5%" cy="5%" r="3" fill="#c68829" opacity="0.5" />
  <circle cx="95%" cy="5%" r="3" fill="#c68829" opacity="0.5" />
  <circle cx="5%" cy="95%" r="3" fill="#c68829" opacity="0.5" />
  <circle cx="95%" cy="95%" r="3" fill="#c68829" opacity="0.5" />
  </svg>
);

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(247,242,235,0.95) 0%, rgba(209,194,169,0.85) 35%, rgba(157,163,127,0.75) 70%, rgba(140,148,156,0.8) 100%), url('https://images.unsplash.com/photo-1523528283115-0aa522c1e270?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <FloatingPetals />
      <MandalaPattern />
      <OrnamentalBorder />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <svg width="120" height="40" viewBox="0 0 120 40" className="mx-auto text-[#c68829]">
            <path
              d="M60 5 L65 15 L60 25 L55 15 Z"
              fill="currentColor"
              opacity="0.8"
            />
            <path
              d="M10 20 Q35 10 60 20 Q85 30 110 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M10 25 Q35 15 60 25 Q85 35 110 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>

        {/* Wedding invitation text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#7c4a2b] tracking-[0.3em] text-sm uppercase mb-4 font-light"
        >
          Together with their families
        </motion.p>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="font-['Great_Vibes'] text-6xl md:text-8xl text-[#9e464d] mb-2">
            Minal
          </h1>
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c68829]" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-6 h-6 text-[#c68829] fill-[#c68829]" />
            </motion.div>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c68829]" />
          </div>
          <h1 className="font-['Great_Vibes'] text-6xl md:text-8xl text-[#9e464d]">
            Rohit
          </h1>
        </motion.div>

        {/* Invite text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[#7c4a2b] text-lg mb-8 font-['Cormorant_Garamond'] italic"
        >
          Request the pleasure of your company at their wedding celebration
        </motion.p>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-block"
        >
          <div className="relative px-8 py-4 border-2 border-[#c68829]/30 rounded-lg bg-white/60 backdrop-blur-sm">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f7ede0] px-4 shadow-sm rounded-full">
              <span className="text-[#c68829] text-sm tracking-widest">SAVE THE DATE</span>
            </div>
            <p className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#9e464d] font-semibold">
              8th February 2026
            </p>
            <p className="text-[#7c4a2b] mt-2 tracking-wider">
              Golmuri Club, Jamshedpur
            </p>
          </div>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8"
        >
          <svg width="200" height="30" viewBox="0 0 200 30" className="mx-auto text-[#c68829]">
            <path
              d="M0 15 Q50 5 100 15 Q150 25 200 15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="100" cy="15" r="4" fill="currentColor" />
            <circle cx="80" cy="12" r="2" fill="currentColor" opacity="0.5" />
            <circle cx="120" cy="18" r="2" fill="currentColor" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-[#c68829]"
          >
            <span className="text-xs tracking-widest mb-2">SCROLL</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
