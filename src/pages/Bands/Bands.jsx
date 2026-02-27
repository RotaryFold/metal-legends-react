import { useState } from "react";
import { bands } from "../../data/band";
import BandCard from "../../components/BandCard/BandCard";
import BandModal from "../../components/BandModal/BandModal";

function Bands() {
  const [selectedBand, setSelectedBand] = useState(null);

  return (
    <section className="bands-section">
      <div className="container">
        <h2 className="section-title">Featured Bands</h2>

        <div className="bands-grid">
          {bands.map((band) => (
            <BandCard key={band.id} band={band} onMore={setSelectedBand} />
          ))}
        </div>
      </div>

      <BandModal
        isOpen={Boolean(selectedBand)}
        band={selectedBand}
        onClose={() => setSelectedBand(null)}
      />
    </section>
  );
}

export default Bands;