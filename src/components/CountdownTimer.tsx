"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const weddingDate = new Date("2026-02-08T10:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  if (!mounted) {
    return (
      <section className="py-20 bg-gradient-to-b from-[#FFF8E7] to-[#FFEFD5] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#8B4513]">Loading countdown...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(140deg, #f8f2ef 0%, #e5cdc8 40%, #ba9995 75%, #567156 100%)",
      }}
    >
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [-10, 10, -10],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <Heart className="w-6 h-6 fill-current" />
          </motion.div>
        ))}
      </div>

  <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-white/80 tracking-[0.3em] text-sm uppercase mb-2">
            Counting Down To
          </p>
          <h2 className="font-['Great_Vibes'] text-5xl md:text-6xl text-white">
            Our Special Day
          </h2>
          
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-white/60" />
            <svg width="20" height="20" viewBox="0 0 20 20" className="text-white/70">
              <path
                d="M10 2 L12 8 L10 14 L8 8 Z"
                fill="currentColor"
              />
            </svg>
            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-white/60" />
          </div>
        </motion.div>

        {/* Countdown boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/50">
                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white/30 rounded-tl" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white/30 rounded-tr" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white/30 rounded-bl" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white/30 rounded-br" />

                <motion.span
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="block font-['Cormorant_Garamond'] text-5xl md:text-6xl font-bold text-white"
                >
                  {unit.value.toString().padStart(2, "0")}
                </motion.span>
                <span className="text-white/80 text-sm tracking-widest uppercase mt-2 block">
                  {unit.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-white/90 font-['Cormorant_Garamond'] text-xl italic"
        >
          Until we begin our forever together
        </motion.p>
      </div>
    </section>
  );
}
