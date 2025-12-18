"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Heart, User, Users, Check } from "lucide-react";

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    attending: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("RSVP Data:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-to-b from-[#FFEFD5] to-[#FFF8E7] relative">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center"
          >
            <Check className="w-12 h-12 text-green-600" />
          </motion.div>
          <h2 className="font-['Great_Vibes'] text-5xl text-[#8B0000] mb-4">
            Thank You!
          </h2>
          <p className="text-gray-600 text-lg">
            We&apos;ve received your response and can&apos;t wait to celebrate with you!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-b from-[#FFEFD5] to-[#FFF8E7] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-[#D4AF37]/20 rounded-full" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-[#D4AF37]/20 rounded-full" />

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF37]/10 mb-4">
            <Heart className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <p className="text-[#D4AF37] tracking-[0.3em] text-sm uppercase mb-2">
            Kindly Respond
          </p>
          <h2 className="font-['Great_Vibes'] text-5xl md:text-6xl text-[#8B0000]">
            RSVP
          </h2>
          <p className="text-gray-600 mt-4 max-w-md mx-auto">
            We would be honored by your presence. Please let us know if you&apos;ll be joining us.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#D4AF37]">
              <path d="M10 2 L12 8 L10 14 L8 8 Z" fill="currentColor" />
            </svg>
            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </motion.div>

        {/* RSVP Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#D4AF37]/20"
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all bg-white/50"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all bg-white/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all bg-white/50"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            {/* Will you attend? */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Will you be attending? *
              </label>
              <div className="flex gap-4">
                <label className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    required
                    onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                    className="sr-only peer"
                  />
                  <div className="p-4 rounded-xl border-2 border-[#D4AF37]/30 text-center transition-all peer-checked:border-[#8B0000] peer-checked:bg-[#8B0000]/5 hover:border-[#D4AF37]">
                    <span className="text-2xl mb-1 block">🎉</span>
                    <span className="text-gray-700 font-medium">Joyfully Accept</span>
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                    className="sr-only peer"
                  />
                  <div className="p-4 rounded-xl border-2 border-[#D4AF37]/30 text-center transition-all peer-checked:border-gray-500 peer-checked:bg-gray-50 hover:border-[#D4AF37]">
                    <span className="text-2xl mb-1 block">😢</span>
                    <span className="text-gray-700 font-medium">Regretfully Decline</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Number of guests */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Number of Guests
              </label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all bg-white/50 appearance-none"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Wishes for the Couple
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all bg-white/50 resize-none"
                placeholder="Share your blessings..."
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-[#8B0000] to-[#DC143C] text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Send className="w-5 h-5" />
              Send Response
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
