import React, { useEffect, useRef } from 'react';
import './CEOFounders.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function CEOFounders() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll('.founder-card');
    sections.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="ceo-founders-page" ref={containerRef}>
      <div className="hero-banner">
        <h1>Meet the Visionaries Behind Madhav Infra</h1>
        <p>Leadership | Experience | Integrity</p>
      </div>

      <div className="founders-container">
        <div className="founder-card">
          <img src="/assets/Vikas.png" alt="Vikas Mishra" />
          <div className="founder-card-content">
          <h2>Vikas Mishra</h2>
          <p>Founder & Director</p>
          <p>
            Vikas Mishra brings over two decades of construction leadership. His strategic vision and drive for innovation continue to inspire the company's growth across India’s infrastructure sector.
          </p>
          </div>
        </div>

        <div className="founder-card">
          <img src="/assets/Devendra.png" alt="Devendra Mishra" />
          <div className="founder-card-content">
          <h2>Devendra Mishra</h2>
          <p>Co-Founder & Technical Head</p>
          <p>
            With a deep passion for structural engineering and execution, Devendra Mishra leads project delivery and operations. His technical rigor ensures project success from foundation to finish.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CEOFounders;