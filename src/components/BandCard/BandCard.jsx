import "./band-card.css";

function BandCard({ band, onMore }) {
  return (
    <article className="band-card">
      <img className="band-image" src={band.image} alt={band.name} />
      <div className="band-info">
        <h3 className="band-title">{band.name}</h3>
        <p className="band-meta">
          {band.genre} · {band.year}
        </p>
        <button className="band-more-btn" onClick={() => onMore(band)}>
          More
        </button>
      </div>
    </article>
  );
}

export default BandCard;