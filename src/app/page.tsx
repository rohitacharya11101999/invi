import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import EventsSection from "@/components/EventsSection";
import VenueSection from "@/components/VenueSection";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <CountdownTimer />
      <EventsSection />
      <VenueSection />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
