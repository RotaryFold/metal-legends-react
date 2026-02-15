import "./BandCard.css";

function BandCard({ band, onMore }) {
  return (
    <article className="band-card">
      <img className="band-image" src={band.image} alt={band.name} />
      <div className="band-info">
        <h3 className="band-title">{band.name}</h3>
        <p className="band-meta">{band.meta}</p>
        <button className="band-more-btn" type="button" onClick={() => onMore(band)}>
          More
        </button>
      </div>
    </article>
  );
}

export default BandCard;
