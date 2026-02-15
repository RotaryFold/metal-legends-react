import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatusMessage("Message sent (simulated).");
    setTimeout(() => setStatusMessage(""), 3000);
    event.currentTarget.reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name" className="form-label">Name</label>
      <input id="name" className="form-input" type="text" required />

      <label htmlFor="email" className="form-label">Email</label>
      <input id="email" className="form-input" type="email" required />

      <label htmlFor="message" className="form-label">Message</label>
      <textarea id="message" className="form-textarea" rows="4" required />

      <button className="btn-secondary" type="submit">Send</button>

      {statusMessage && (
        <div style={{ marginTop: 10, color: "#b71c1c" }}>
          {statusMessage}
        </div>
      )}
    </form>
  );
}

export default ContactForm;
