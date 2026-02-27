import "./band-modal.css";

function BandModal({ isOpen, onClose, band }) {
  if (!isOpen || !band) return null;

  return (
    <div className="band-modal" aria-hidden={!isOpen} onClick={onClose}>
      <div
        className="band-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" aria-label="close modal" onClick={onClose}>
          ✖
        </button>

        <h3 className="modal-title">{band.name}</h3>
        <p className="modal-text">
          {band.genre} · {band.year}
        </p>
        <p style={{ marginTop: 10 }}>{band.description}</p>
      </div>
    </div>
  );
}

export default BandModal;