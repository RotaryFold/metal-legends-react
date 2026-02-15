import { useEffect, useState } from "react";

import Hero from "../../components/hero/Hero.jsx";
import BandCard from "../../components/band-card/BandCard.jsx";
import BandModal from "../../components/band-modal/BandModal.jsx";
import Gallery from "../../components/gallery/Gallery.jsx";
import MusicPlayer from "../../components/music-player/MusicPlayer.jsx";

import bands from "../../data/bands.js";

function Home() {
  const [selectedBand, setSelectedBand] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in:not(.visible)").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleMore = (band) => {
    setSelectedBand(band);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="parallax-container">
        <h1 className="hero-title parallax-title">METAL LEGENDS</h1>
      </div>

      <Hero />

      <section className="bands-section fade-in">
        <div className="container">
          <h2 className="section-title">Featured Bands</h2>
          <div className="bands-grid">
            {bands.map((band) => (
              <BandCard key={band.id} band={band} onMore={handleMore} />
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      <MusicPlayer />

      <BandModal
        isOpen={isModalOpen}
        band={selectedBand}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Home;
