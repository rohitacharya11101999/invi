"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Sun, Palette, Music, Heart, MapPin, X } from "lucide-react";

interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  cardBackground: string;
  borderColor: string;
  shadowColor: string;
  shadowHover: string;
  modalBackground: string;
  image: string;
  detailImage: string;
  detailImageAlt: string;
  palette: string[];
  highlights: string[];
}

const events: Event[] = [
  {
    id: "haldi",
    name: "Haldi",
    date: "6th February 2026",
    time: "10:00 AM onwards",
    venue: "Family Residence",
    description:
      "A joyful ceremony where turmeric paste is applied to bless the couple with prosperity and ward off evil spirits.",
    icon: <Sun className="w-8 h-8" />,
    accentColor: "#d79e2b",
    cardBackground:
      "linear-gradient(140deg, rgba(238,217,194,0.92), rgba(215,158,43,0.45))",
    borderColor: "#c3a576",
    shadowColor: "rgba(215,158,43,0.25)",
    shadowHover: "rgba(215,158,43,0.35)",
    modalBackground:
      "linear-gradient(140deg, rgba(238,217,194,0.95), rgba(215,158,43,0.4))",
  image: "/images/haldi/haldi.png",
    detailImage: "/images/haldi/haldi.png",
    detailImageAlt: "Haldi ceremony invite card with full schedule details",
    palette: ["#eed9c2", "#d79e2b", "#c3a576", "#8e623a"],
    highlights: [
      "Traditional turmeric ceremony",
      "Family blessings",
      "Folk songs & music",
      "Traditional attire in yellow",
    ],
  },
  {
    id: "mehendi",
    name: "Mehendi",
    date: "7th February 2026",
    time: "11:00 AM onwards",
    venue: "Family Residence",
    description:
      "An artistic celebration where intricate henna designs adorn the bride's hands and feet, symbolizing love and prosperity.",
    icon: <Palette className="w-8 h-8" />,
    accentColor: "#4f673f",
    cardBackground:
      "linear-gradient(140deg, rgba(223,218,206,0.95), rgba(79,103,63,0.4))",
    borderColor: "#93835a",
    shadowColor: "rgba(79,103,63,0.25)",
    shadowHover: "rgba(79,103,63,0.35)",
    modalBackground:
      "linear-gradient(140deg, rgba(223,218,206,0.96), rgba(79,103,63,0.4))",
  image: "/images/mehendi/mehendi.png",
    detailImage: "/images/mehendi/mehendi.png",
    detailImageAlt: "Mehendi ceremony invite card with schedule details",
    palette: ["#dfdace", "#4f673f", "#93835a", "#9b5840"],
    highlights: [
      "Professional mehendi artists",
      "Bride's intricate designs",
      "Light refreshments",
      "Traditional songs",
    ],
  },
  {
    id: "sangeet",
    name: "Sangeet",
    date: "7th February 2026",
    time: "7:00 PM onwards",
    venue: "Golmuri Club, Jamshedpur",
    description:
      "A vibrant night of music, dance, and celebration where both families come together to perform and rejoice.",
    icon: <Music className="w-8 h-8" />,
    accentColor: "#824f59",
    cardBackground:
      "linear-gradient(140deg, rgba(237,232,227,0.95), rgba(130,79,89,0.45))",
    borderColor: "#bf9c99",
    shadowColor: "rgba(130,79,89,0.25)",
    shadowHover: "rgba(130,79,89,0.35)",
    modalBackground:
      "linear-gradient(140deg, rgba(237,232,227,0.96), rgba(130,79,89,0.45))",
  image: "/images/sangeet/sangeet.png",
    detailImage: "/images/sangeet/sangeet.png",
    detailImageAlt: "Sangeet night invite card with schedule details",
    palette: ["#ede8e3", "#824f59", "#bf9c99", "#8c9d84"],
    highlights: [
      "Family dance performances",
      "DJ & live music",
      "Cocktails & dinner",
      "Dance floor celebrations",
    ],
  },
  {
    id: "wedding",
    name: "Wedding",
    date: "8th February 2026",
    time: "8:00 AM onwards",
    venue: "Golmuri Club, Jamshedpur",
    description:
      "The sacred union of two souls, where Minal and Rohit will take their seven vows around the holy fire.",
    icon: <Heart className="w-8 h-8" />,
    accentColor: "#9e464d",
    cardBackground:
      "linear-gradient(140deg, rgba(214,184,137,0.92), rgba(158,70,77,0.45))",
    borderColor: "#c68829",
    shadowColor: "rgba(158,70,77,0.25)",
    shadowHover: "rgba(158,70,77,0.35)",
    modalBackground:
      "linear-gradient(140deg, rgba(214,184,137,0.95), rgba(158,70,77,0.45))",
  image: "/images/wedding/wedding.png",
    detailImage: "/images/wedding/wedding.png",
    detailImageAlt: "Wedding day invite card with ritual timings",
    palette: ["#d6b889", "#c68829", "#9e464d", "#374241"],
    highlights: [
      "Traditional wedding rituals",
      "Pheras around sacred fire",
      "Sindoor & Mangalsutra ceremony",
      "Grand wedding feast",
    ],
  },
];

const EventModal = ({
  event,
  onClose,
}: {
  event: Event;
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="relative max-w-2xl w-full rounded-[28px] overflow-hidden border-4 bg-white shadow-2xl"
      style={{
        borderColor: `${event.borderColor}80`,
        boxShadow: `0 28px 70px ${event.shadowColor}`,
        maxHeight: "85vh",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/80 backdrop-blur-sm p-2 text-gray-700 shadow-sm transition-colors hover:bg-white"
      >
        <X className="w-5 h-5 text-gray-700" />
      </button>
      <div className="bg-white p-4 md:p-5 flex items-center justify-center h-full">
        <img
          src={event.detailImage}
          alt={event.detailImageAlt}
          className="w-full max-h-[75vh] object-contain"
          loading="lazy"
        />
      </div>
    </motion.div>
  </motion.div>
);

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <section
      id="events"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(140deg, #fdf2e1 0%, #f0ddc8 45%, rgba(214,184,137,0.35) 100%)",
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c68829' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          <p className="text-[#c68829] tracking-[0.3em] text-sm uppercase mb-2">
            Join Us For
          </p>
          <h2 className="font-['Great_Vibes'] text-5xl md:text-6xl text-[#9e464d] mb-4">
            Wedding Celebrations
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#c68829]" />
            <svg width="30" height="20" viewBox="0 0 30 20" className="text-[#c68829]">
              <path d="M15 0 L18 8 L15 16 L12 8 Z" fill="currentColor" />
              <circle cx="5" cy="10" r="2" fill="currentColor" opacity="0.5" />
              <circle cx="25" cy="10" r="2" fill="currentColor" opacity="0.5" />
            </svg>
            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#c68829]" />
          </div>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-[#7c4a2b] mt-4">
            Tap on any celebration to open its full invite card with all the timings and details.
          </p>
        </motion.div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: `0 25px 60px ${event.shadowHover}` }}
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer rounded-3xl p-6 shadow-lg transition-all duration-300 border-2 relative overflow-hidden"
              style={{
                background: event.cardBackground,
                borderColor: `${event.borderColor}40`,
                boxShadow: `0 18px 45px ${event.shadowColor}`,
              }}
            >
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-white/60" />

              <div className="relative z-10">

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                  style={{ backgroundColor: `${event.accentColor}20`, color: event.accentColor }}
                >
                  {event.icon}
                </div>

                {/* Event name */}
                <h3
                  className="font-['Great_Vibes'] text-3xl text-center mb-2"
                  style={{ color: event.accentColor }}
                >
                  {event.name}
                </h3>

                {/* Date & Time */}
                <div className="text-center space-y-1 mb-4 text-gray-800">
                  <p className="font-semibold">{event.date}</p>
                  <p className="text-sm font-medium opacity-90">{event.time}</p>
                </div>

                {/* Venue */}
                <div className="flex items-center justify-center gap-2 text-gray-800 text-sm font-medium">
                  <MapPin className="w-4 h-4" style={{ color: event.accentColor }} />
                  <span className="truncate">{event.venue}</span>
                </div>

                {/* Palette swatches */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {event.palette.map((color) => (
                    <div
                      key={color}
                      className="w-6 h-6 rounded-full border border-white/70"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Click indicator */}
                <p className="text-center text-xs text-gray-600 mt-4 font-medium">
                  Tap to view the full invite card
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}
