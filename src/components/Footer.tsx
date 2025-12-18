"use client";

import { motion } from "framer-motion";
import { Camera, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#8B0000] text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Decorative top element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <svg width="100" height="30" viewBox="0 0 100 30" className="mx-auto text-[#D4AF37]">
            <path
              d="M0 15 Q25 5 50 15 Q75 25 100 15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="50" cy="15" r="4" fill="currentColor" />
            <circle cx="30" cy="12" r="2" fill="currentColor" opacity="0.5" />
            <circle cx="70" cy="18" r="2" fill="currentColor" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="flex items-center justify-center gap-4 mb-4 text-[#D4AF37]">
            <span className="h-px w-12 bg-current/40" />
            <svg width="28" height="28" viewBox="0 0 24 24" className="text-[#D4AF37]">
              <path
                d="M12 3L4 9l8 12 8-12-8-6zm0 2.618L17.05 9 12 16.382 6.95 9 12 5.618z"
                fill="currentColor"
              />
            </svg>
            <span className="h-px w-12 bg-current/40" />
          </div>
          <h2 className="font-['Great_Vibes'] text-5xl md:text-6xl">Minal & Rohit</h2>
        </motion.div>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#D4AF37] text-lg mb-6"
        >
          8th February 2026
        </motion.p>

        {/* Hashtag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-8 font-['Cormorant_Garamond'] italic flex items-center justify-center gap-3"
        >
          <Camera className="w-5 h-5 text-[#D4AF37]" />
          #MinalWedsRohit
          <Heart className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
        </motion.div>

        {/* Thank you message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white/80 mb-8 max-w-md mx-auto"
        >
          Thank you for being a part of our special day. Your presence and blessings mean the world to us.
        </motion.p>

        {/* Heart */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-8"
        >
          <Heart className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/20 pt-6"
        >
          <p className="text-white/60 text-sm">
            Made with{" "}
            <Heart className="w-4 h-4 inline text-red-400 fill-red-400" />{" "}
            for our wedding celebration
          </p>
          <p className="text-white/40 text-xs mt-2">
            © 2026 Minal & Rohit. All hearts reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
