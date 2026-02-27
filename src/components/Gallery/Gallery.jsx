import React from "react";
import "./gallery.css";

const images = [
  "https://meyersound.es/es/wp-content/uploads/2023/06/metallica-2.jpeg",
  "https://meyersound.es/es/wp-content/uploads/2023/06/metallica-1.jpeg",
  "https://cdn.media.amplience.net/i/metallica/2024-07jul12_social",
  "https://offloadmedia.feverup.com/parissecret.com/wp-content/uploads/2024/10/01150223/Montage-photo-article-PARIS-SECRET-37-1024x683.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0d/Iron_Maiden_in_the_Palais_Omnisports_of_Paris-Bercy_%28France%29.jpg",
  "https://www.rollingstone.com/wp-content/uploads/2024/09/slayer-riot-fest-king.jpg?w=1581&h=1054&crop=1",
  "https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1223/2019/08/16125628/tmpd05a2854-7b30-4cc2-b951-8e763532b7ff.jpg",
  "https://dynamicmedia.livenationinternational.com/x/a/k/5e8cb617-26be-420e-bea5-248aae459e1a.jpg?format=webp&width=3840&quality=75",
  "https://upload.wikimedia.org/wikipedia/commons/d/dc/Judas_Priest_Retribution_2005_Tour2.jpg",
  "https://riffmedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2019/10/28211821/ftd-1-3.jpg"
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <img key={index} className="gallery-item" src={src} alt={`Gallery image ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;