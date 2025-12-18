"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, VolumeX, Volume2 } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const autoplayAttemptedRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.volume = 0.6;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    const attemptAutoplay = async () => {
      if (!audio || autoplayAttemptedRef.current) {
        return;
      }
      autoplayAttemptedRef.current = true;
      try {
        await audio.play();
        setShowTooltip(false);
      } catch (error) {
        const err = error as DOMException;
        if (err?.name !== "NotAllowedError" && err?.name !== "AbortError") {
          console.warn("Autoplay blocked:", err.message);
        }
      }
    };

    const autoplayTimer = window.setTimeout(attemptAutoplay, 600);

    return () => {
      window.clearTimeout(autoplayTimer);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const timer = window.setTimeout(() => setShowTooltip(false), 2500);
      return () => window.clearTimeout(timer);
    }
  }, [isPlaying]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    try {
      if (isPlaying) {
        audio.pause();
      } else {
        await audio.play();
      }
    } catch (error) {
      const err = error as DOMException;
      if (err?.name !== "AbortError") {
        console.error("Unable to toggle audio:", err.message);
      }
    } finally {
      setShowTooltip(false);
    }
  };

  return (
    <>
      {/* Audio element - hosted soothing shaadi track from Pixabay (royalty-free) */}
      <audio ref={audioRef} loop preload="auto" crossOrigin="anonymous">
        <source
          src="https://cdn.pixabay.com/download/audio/2023/03/22/audio_fb73089c3c.mp3?filename=wedding-romantic-piano-145471.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Floating music button */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-6 right-6 z-40"
      >
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !isPlaying && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
            >
              <div className="bg-[#8B0000] text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                Tap to play music
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-[#8B0000]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
            isPlaying
              ? "bg-[#8B0000] text-white"
              : "bg-white text-[#8B0000] border-2 border-[#D4AF37]"
          }`}
        >
          {/* Animated rings when playing */}
          {isPlaying && (
            <>
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-[#D4AF37]"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-[#D4AF37]"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
            </>
          )}

          {/* Icon */}
          {isPlaying ? (
            <Volume2 className="w-6 h-6" />
          ) : (
            <VolumeX className="w-6 h-6" />
          )}
        </motion.button>

        {/* Music notes animation when playing */}
        <AnimatePresence>
          {isPlaying && (
            <>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 0, x: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: -40,
                    x: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.6,
                  }}
                  className="absolute bottom-full mb-2 left-1/2"
                >
                  <Music className="w-4 h-4 text-[#D4AF37]" />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
