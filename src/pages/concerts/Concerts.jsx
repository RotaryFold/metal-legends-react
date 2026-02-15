import { useEffect, useState } from "react";

import ConcertCard from "../../components/concert-card/ConcertCard.jsx";

const STORAGE_KEY = "concerts";

function Concerts() {
  const [concerts, setConcerts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setConcerts(saved);
  }, []);

  const saveConcerts = (next) => {
    setConcerts(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.concertName.value.trim();
    const location = form.concertLocation.value.trim();
    const date = form.concertDate.value;
    const image = form.concertImage.value.trim();

    if (!name || !location || !date || !image) {
      setErrorMessage("Please fill all fields");
      return;
    }
    if (!image.startsWith("http")) {
      setErrorMessage("Please enter a valid image URL");
      return;
    }

    if (editingIndex >= 0) {
      const next = concerts.map((c, i) =>
        i === editingIndex ? { name, location, date, image } : c
      );
      saveConcerts(next);
      setEditingIndex(-1);
    } else {
      saveConcerts([...concerts, { name, location, date, image }]);
    }

    setErrorMessage("");
    form.reset();
  };

  return (
    <section className="concerts-section">
      <div className="container">
        <h2 className="section-title">Concerts</h2>

        <form className="concert-form" onSubmit={handleSubmit} noValidate>
          <label className="form-label" htmlFor="concertName">Concert Name</label>
          <input id="concertName" name="concertName" className="form-input" type="text" required />

          <label className="form-label" htmlFor="concertLocation">Location</label>
          <input id="concertLocation" name="concertLocation" className="form-input" type="text" required />

          <label className="form-label" htmlFor="concertDate">Date</label>
          <input id="concertDate" name="concertDate" className="form-input" type="date" required />

          <label className="form-label" htmlFor="concertImage">Image URL</label>
          <input id="concertImage" name="concertImage" className="form-input" type="url" required />

          <button className="btn-secondary" type="submit">
            {editingIndex >= 0 ? "Update Concert" : "Add Concert"}
          </button>
        </form>

        <div style={{ color: "#b71c1c", marginTop: 8, minHeight: 24 }}>
          {errorMessage}
        </div>

        <div className="concert-list">
          {concerts.map((concert, index) => (
            <ConcertCard
              key={`${concert.name}-${index}`}
              concert={concert}
              onDelete={() => {
                const next = concerts.filter((_, i) => i !== index);
                saveConcerts(next);
              }}
              onEdit={() => {
                setEditingIndex(index);
                const c = concerts[index];
                const form = document.querySelector(".concert-form");
                form.concertName.value = c.name;
                form.concertLocation.value = c.location;
                form.concertDate.value = c.date;
                form.concertImage.value = c.image;
                window.scrollTo({ top: 0, behavior: "smooth" });
                setErrorMessage("");
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Concerts;
