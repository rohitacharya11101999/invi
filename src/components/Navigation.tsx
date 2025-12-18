"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Events", href: "#events" },
  { name: "Venue", href: "#venue" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${scrolled ? "text-[#8B0000]" : "text-[#D4AF37]"} fill-current`} />
              <span className={`font-['Great_Vibes'] text-xl sm:text-2xl ${scrolled ? "text-[#8B0000]" : "text-[#8B0000]"}`}>
                M & R
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                    scrolled ? "text-gray-700" : "text-[#8B4513]"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2.5 rounded-lg hover:bg-[#D4AF37]/10 active:bg-[#D4AF37]/20 touch-manipulation"
            >
              <Menu className={`w-5 h-5 sm:w-6 sm:h-6 ${scrolled ? "text-gray-700" : "text-[#8B4513]"}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-64 sm:w-72 bg-[#FFF8E7] shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-[#D4AF37]/20">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B0000] fill-current" />
                  <span className="font-['Great_Vibes'] text-xl sm:text-2xl text-[#8B0000]">
                    M & R
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-lg hover:bg-[#D4AF37]/10 active:bg-[#D4AF37]/20 touch-manipulation"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>
              </div>

              {/* Links */}
              <div className="p-3 sm:p-4 space-y-1 sm:space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 text-gray-700 hover:bg-[#D4AF37]/10 active:bg-[#D4AF37]/20 rounded-xl transition-colors touch-manipulation text-sm sm:text-base"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* Bottom decoration */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-[#D4AF37]/20">
                <p className="text-center text-[#8B4513] text-xs sm:text-sm">
                  8th February 2026
                </p>
                <p className="text-center text-[#D4AF37] text-[10px] sm:text-xs mt-1">
                  #MinalWedsRohit
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
