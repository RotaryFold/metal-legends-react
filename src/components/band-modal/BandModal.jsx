import "./BandModal.css";

function BandModal({ isOpen, band, onClose }) {
  if (!band) return null;

  return (
    <div
      className="band-modal"
      aria-hidden={isOpen ? "false" : "true"}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="band-modal-content">
        <button className="modal-close" type="button" aria-label="close modal" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h3 className="modal-title">{band.name}</h3>
        <p className="modal-text">{band.description}</p>
        <p className="modal-text">{band.meta}</p>
      </div>
    </div>
  );
}

export default BandModal;
