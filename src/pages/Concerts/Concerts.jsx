import { useEffect, useState } from "react";
import ConcertCard from "../../components/ConcertCard/ConcertCard";

const STORAGE_KEY = "concerts";

function Concerts() {
  const [concerts, setConcerts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setConcerts(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(concerts));
  }, [concerts]);

  const resetForm = () => {
    setName("");
    setLocation("");
    setDate("");
    setImage("");
    setEditingIndex(-1);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !location.trim() || !date || !image.trim()) {
      setError("Please fill all fields");
      return;
    }
    if (!image.startsWith("http")) {
      setError("Please enter a valid image URL");
      return;
    }

    const newConcert = { name: name.trim(), location: location.trim(), date, image: image.trim() };

    if (editingIndex >= 0) {
      const updated = [...concerts];
      updated[editingIndex] = newConcert;
      setConcerts(updated);
    } else {
      setConcerts([...concerts, newConcert]);
    }

    resetForm();
  };

  const handleEdit = (index) => {
    const c = concerts[index];
    setName(c.name);
    setLocation(c.location);
    setDate(c.date);
    setImage(c.image);
    setEditingIndex(index);
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (index) => {
    const updated = concerts.filter((_, i) => i !== index);
    setConcerts(updated);
  };

  return (
    <section className="concerts-section">
      <div className="container">
        <h2 className="section-title">Concerts</h2>

        <form className="concert-form" onSubmit={handleSubmit} noValidate>
          <label className="form-label" htmlFor="concert-name">Concert Name</label>
          <input
            id="concert-name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="form-label" htmlFor="concert-location">Location</label>
          <input
            id="concert-location"
            className="form-input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <label className="form-label" htmlFor="concert-date">Date</label>
          <input
            id="concert-date"
            type="date"
            className="form-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label className="form-label" htmlFor="concert-image">Image URL</label>
          <input
            id="concert-image"
            type="url"
            className="form-input"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />

          <button className="btn-secondary" type="submit">
            {editingIndex >= 0 ? "Update Concert" : "Add Concert"}
          </button>
        </form>

        <div id="form-error" style={{ color: "#b71c1c", marginTop: 8, minHeight: 24 }}>
          {error}
        </div>

        <div className="concert-list">
          {concerts.map((concert, index) => (
            <ConcertCard
              key={`${concert.name}-${index}`}
              concert={concert}
              onEdit={() => handleEdit(index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Concerts;