import { useState } from "react";

import BandCard from "../../components/band-card/BandCard.jsx";
import BandModal from "../../components/band-modal/BandModal.jsx";
import bands from "../../data/bands.js";

function Bands() {
  const [selectedBand, setSelectedBand] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bands-section">
      <div className="container">
        <h2 className="section-title">Bands</h2>

        <div className="bands-grid">
          {bands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              onMore={(b) => {
                setSelectedBand(b);
                setIsModalOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      <BandModal
        isOpen={isModalOpen}
        band={selectedBand}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

export default Bands;
