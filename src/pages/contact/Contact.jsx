import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import ContactForm from "../../components/contact-form/ContactForm.jsx";

function Contact() {
  // Leaflet marker icon fix for Vite
  const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const position = [28.1235, -15.4363]; // Las Palmas de Gran Canaria (approx.)

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <p style={{ marginBottom: 16 }}>
          Have a question, want to suggest a band, or share a concert? Send us a message.
        </p>

        <div style={{ marginBottom: 16 }}>
          <p><strong>Email:</strong> metallegends@example.com</p>
          <p><strong>Location:</strong> Las Palmas de Gran Canaria</p>
        </div>

        <ContactForm />

        <div style={{ marginTop: 24 }}>
          <h3 className="band-title">Map</h3>
          <div style={{ marginTop: 12 }}>
            <MapContainer center={position} zoom={12} style={{ height: 360, width: "100%" }}>
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={markerIcon}>
                <Popup>Metal Legends HQ (approx.)</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
