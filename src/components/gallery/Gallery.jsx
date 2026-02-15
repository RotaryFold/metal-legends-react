import "./Gallery.css";
import galleryImages from "../../data/gallery-images.js";

function Gallery() {
  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <img
              key={`${img.src}-${index}`}
              className="gallery-item"
              src={img.src}
              alt={img.alt}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
