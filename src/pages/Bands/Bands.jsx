import { useState, useEffect } from "react";
import { getBands } from "../../services/firebase-bands";
import { bands as localBands } from "../../data/band";
import BandCard from "../../components/BandCard/BandCard";
import BandModal from "../../components/BandModal/BandModal";

function Bands() {
  const [selectedBand, setSelectedBand] = useState(null);
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Intentar cargar bandas desde Firebase, si falla usar datos locales
    getBands()
      .then((data) => {
        if (data.length > 0) {
          setBands(data);
        } else {
          setBands(localBands);
        }
      })
      .catch(() => {
        setBands(localBands);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="bands-section">
        <div className="container">
          <h2 className="section-title">Featured Bands</h2>
          <p style={{ color: "#aaa", textAlign: "center" }}>Loading bands...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bands-section">
      <div className="container">
        <h2 className="section-title">Featured Bands</h2>

        <div className="bands-grid">
          {bands.map((band) => (
            <BandCard key={band.id || band.firebaseKey} band={band} onMore={setSelectedBand} />
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