import React, { useEffect, useRef } from 'react';
import './About.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  useEffect(() => {
    sectionRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ref,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="about-page">
      <section className="about-hero" style={{ backgroundImage: "url('/assets/abouthero.jpg')" }}>
        <div className="about-overlay">
          <h1>Making a Difference in the Lives of Our People, Customers, and Community</h1>
          <p>TEAM WORK | INTEGRITY | COMMITMENT</p>
        </div>
      </section>

      <section className="about-section" ref={addToRefs}>
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Madhav Infra is a visionary construction company committed to delivering innovative and sustainable infrastructure solutions. We undertake projects with the highest standards of quality, ensuring client satisfaction and trust.
          </p>
          <p>
            With a team of seasoned professionals, we have built a strong foundation of excellence, completing diverse projects across India. Our client-centric approach and focus on modern engineering make us stand out.
          </p>
        </div>
        <div className="about-image">
          <img src="/assets/about1.jpg" alt="Skyline" />
        </div>
      </section>

      <section className="about-section reverse" ref={addToRefs}>
        <div className="about-image">
          <img src="/assets/about2.jpg" alt="Founding Story" />
        </div>
        <div className="about-text">
          <h2>A Legacy Built on Trust</h2>
          <p>
            Madhav Infra was founded by Vikas Mishra and Devendra Mishra with a vision to revolutionize construction in India. Their leadership and passion have driven the company to new heights.
          </p>
          <p>
            Since its inception, the company has grown rapidly, embracing technology, quality control, and customer satisfaction as its core values.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;