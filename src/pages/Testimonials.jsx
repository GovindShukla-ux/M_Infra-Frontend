import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Sample testimonials
const testimonials = [
  {
    name: 'Anjali R.',
    review: 'Madhav Infra delivered our commercial building on time with top-tier quality. Highly recommend!',
  },
  {
    name: 'Rohit K.',
    review: 'Their team is professional, detail-oriented, and a pleasure to work with.',
  },
  {
    name: 'Neha T.',
    review: 'They made our dream home a reality — great communication and flawless execution.',
  },
];

export default function Testimonials() {
  const cardsRef = useRef([]);
  const [formData, setFormData] = useState({ name: '', review: '' });
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  // ✅ Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit the form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('http://localhost:5000/api/form/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setShowAlert(true);
      setFormData({ name: '', review: '' });

      setTimeout(() => setShowAlert(false), 4000);
    } catch (error) {
      console.error('Review submission error:', error);
    }
  };

  return (
    <div className="testimonials-page">
      <div className="testimonials-header">
        <h1>Client Testimonials</h1>
        <p>Our clients speak for our work</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" ref={(el) => (cardsRef.current[i] = el)} key={i}>
            <p className="testimonial-text">"{t.review}"</p>
            <h4>– {t.name}</h4>
          </div>
        ))}
      </div>

      <div className="testimonial-form-section" id="review-form">
        <h2>Write Your Review</h2>
        <form onSubmit={handleSubmit} className="testimonial-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <textarea
            name="review"
            placeholder="Write your feedback here..."
            rows="5"
            required
            value={formData.review}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit Review</button>

          {showAlert && (
            <div className="review-alert">
              Your review has been submitted. Thank you for your feedback.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
