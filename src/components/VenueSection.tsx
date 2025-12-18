"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";

export default function VenueSection() {
  return (
    <section
      id="venue"
      className="py-20 relative"
      style={{
        background: "linear-gradient(140deg, #f7ede0 0%, #d6b889 45%, rgba(158,70,77,0.25) 100%)",
      }}
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c68829' fill-opacity='1'%3E%3Cpath d='M40 0C17.9 0 0 17.9 0 40s17.9 40 40 40 40-17.9 40-40S62.1 0 40 0zm0 70c-16.5 0-30-13.5-30-30S23.5 10 40 10s30 13.5 30 30-13.5 30-30 30z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c68829]/15 mb-4">
            <MapPin className="w-8 h-8 text-[#c68829]" />
          </div>
          <p className="text-[#c68829] tracking-[0.3em] text-sm uppercase mb-2">
            Where Dreams Come True
          </p>
          <h2 className="font-['Great_Vibes'] text-5xl md:text-6xl text-[#9e464d]">
            The Venue
          </h2>
          
          {/* Cute emojis */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <motion.span
              className="text-2xl"
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🏛️
            </motion.span>
            <motion.span
              className="text-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ✨
            </motion.span>
            <motion.span
              className="text-2xl"
              animate={{ y: [3, -3, 3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎪
            </motion.span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#c68829]" />
            <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#c68829]">
              <path d="M10 2 L12 8 L10 14 L8 8 Z" fill="currentColor" />
            </svg>
            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#c68829]" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#c68829]/30"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8!2d86.2!3d22.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGolmuri%20Club%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-3 border-t-3 border-[#c68829]" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-3 border-t-3 border-[#c68829]" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-3 border-b-3 border-[#c68829]" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-3 border-b-3 border-[#c68829]" />
          </motion.div>

          {/* Venue details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#c68829]/25">
              <h3 className="font-['Cormorant_Garamond'] text-3xl text-[#9e464d] font-semibold mb-6">
                Golmuri Club
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c68829]/15 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#c68829]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Golmuri Club Road, Golmuri,<br />
                      Jamshedpur, Jharkhand 831003
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c68829]/15 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#c68829]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Event Timings</h4>
                    <p className="text-gray-600">
                      Sangeet: 7th Feb, 7:00 PM<br />
                      Wedding: 8th Feb, 8:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c68829]/15 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#c68829]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Contact</h4>
                    <p className="text-gray-600">
                      For any queries, please contact<br />
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>

              {/* Get Directions button */}
              <a
                href="https://maps.google.com/?q=Golmuri+Club+Jamshedpur"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#9e464d] text-white rounded-full hover:bg-[#7c353a] transition-colors shadow-lg hover:shadow-xl"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </div>

            {/* Special note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#c68829]/15 to-[#d6b889]/20 rounded-2xl p-6 border border-[#c68829]/25"
            >
              <p className="text-[#7c353a] italic text-center font-['Cormorant_Garamond'] text-lg">
                &ldquo;The venue has been chosen with love to celebrate our union in 
                the heart of Jamshedpur, a city close to our hearts.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
