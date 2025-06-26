import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [alertVisible, setAlertVisible] = useState(false);

  // ✅ Define handleChange here
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('http://localhost:5000/api/form/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setAlertVisible(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setAlertVisible(false), 4000);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <section className="contact-section" id="contact-form">
      <h2>Contact Us</h2>
      <p>We’d love to hear about your project.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send Message</button>

        {alertVisible && (
          <div className="alert-success">
            Your message has been submitted successfully.
          </div>
        )}
      </form>
    </section>
  );
}

export default Contact;