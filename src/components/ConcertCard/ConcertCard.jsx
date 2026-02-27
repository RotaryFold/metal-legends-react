import "./concert-card.css";

function ConcertCard({ concert, onEdit, onDelete }) {
  return (
    <div className="concert-card">
      <img
        src={concert.image}
        alt={concert.name}
        onError={(e) => {
          e.currentTarget.src =
            "https://via.placeholder.com/300x200/111/fff?text=No+Image";
        }}
      />
      <div className="concert-info">
        <h3>{concert.name}</h3>
        <p>
          <strong>Location:</strong> {concert.location}
        </p>
        <p>
          <strong>Date:</strong> {concert.date}
        </p>

        <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button className="btn-secondary" onClick={onEdit}>
            Edit
          </button>
          <button className="btn-secondary" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConcertCard;