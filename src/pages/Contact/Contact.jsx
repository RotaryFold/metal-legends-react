import ContactForm from "../../components/ContactForm/ContactForm";
import Map from "../../components/Map/Map";

function Contact() {
  // Centro: Las Palmas de Gran Canaria (puedes cambiarlo)
  const center = [28.1235, -15.4363];

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <p style={{ marginBottom: 16, color: "#bdbdbd" }}>
          Reach us for collaborations, gigs, or any metal-related project.
        </p>

        <ContactForm />

        <div style={{ marginTop: 24 }}>
          <h3 className="band-title" style={{ marginBottom: 12 }}>
            Our Location
          </h3>

          <Map
            center={center}
            zoom={13}
            markerText="Metal Legends HQ (Las Palmas, GC)"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;