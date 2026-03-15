/**
 * NOTA PARA EL ESTUDIO DE JOEL:
 * Recibe el género por props y filtra la lista de bandas que se muestran.
 */
import "./FeaturedBands.css";
import { bands } from "../../data/band";

function FeaturedBands({ genre }) {
  const filteredBands =
    genre === "all"
      ? bands
      : bands.filter((band) => band.genre.toLowerCase().includes(genre.toLowerCase()));

  return (
    <div className="featured-bands-wrapper">
      {filteredBands.length === 0 ? (
        <p className="featured-bands-empty">No bands match this genre.</p>
      ) : (
        <div className="bands-grid">
          {filteredBands.map((band) => (
            <article key={band.id} className="band-card">
              <img
                className="band-image"
                src={band.image}
                alt={band.name}
              />
              <div className="band-info">
                <h3 className="band-title">{band.name}</h3>
                <p className="band-meta">
                  {band.genre} · {band.year}
                </p>
                <p className="band-description">{band.description}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeaturedBands;
