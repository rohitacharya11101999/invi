"use client";

import { motion } from "framer-motion";
import { Heart, BookOpen } from "lucide-react";

const storyEvents = [
  {
    year: "2020",
    title: "First Meeting",
    description:
      "Our paths crossed for the first time at a college fest. Little did we know that this chance encounter would change our lives forever.",
    side: "left",
  },
  {
    year: "2021",
    title: "Friendship Blooms",
    description:
      "What started as casual conversations turned into deep friendship. Late night calls, shared dreams, and endless laughter became our routine.",
    side: "right",
  },
  {
    year: "2022",
    title: "Love Confession",
    description:
      "Under the starlit sky, hearts finally spoke what they had been hiding. That beautiful evening, friendship transformed into love.",
    side: "left",
  },
  {
    year: "2024",
    title: "The Proposal",
    description:
      "With trembling hands and a hopeful heart, the question was asked. Tears of joy and a resounding 'Yes!' sealed our promise of forever.",
    side: "right",
  },
  {
    year: "2026",
    title: "Forever Begins",
    description:
      "Now we embark on the most beautiful journey of our lives, surrounded by the love and blessings of our families and friends.",
    side: "left",
  },
];

export default function OurStory() {
  return (
    <section id="story" className="py-20 bg-gradient-to-b from-[#FFEFD5] to-[#FFF8E7] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-[#D4AF37]/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-[#D4AF37]/20 rounded-full" />
      <div className="absolute top-1/2 left-5 w-16 h-16 border border-[#D4AF37]/10 rounded-full" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF37]/10 mb-4">
            <BookOpen className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <p className="text-[#D4AF37] tracking-[0.3em] text-sm uppercase mb-2">
            How It All Began
          </p>
          <h2 className="font-['Great_Vibes'] text-5xl md:text-6xl text-[#8B0000]">
            Our Love Story
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <Heart className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37]/50 via-[#D4AF37] to-[#D4AF37]/50" />

          {/* Story events */}
          <div className="space-y-12">
            {storyEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: event.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  event.side === "left" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${event.side === "left" ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#D4AF37]/20 hover:shadow-xl transition-shadow duration-300">
                    <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium mb-3">
                      {event.year}
                    </span>
                    <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#8B0000] font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    className="w-5 h-5 rounded-full bg-[#D4AF37] border-4 border-[#FFF8E7] shadow-lg"
                  />
                </div>

                {/* Spacer for opposite side */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>

          {/* End decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 -bottom-8"
          >
            <div className="w-12 h-12 rounded-full bg-[#8B0000] flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
