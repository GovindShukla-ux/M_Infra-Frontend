import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ----- Sample project data (add as many as you like) ----- */
const projectData = [
  {
    id: 1,
    title: 'Skyline Residences',
    category: 'Residential',
    location: 'Mumbai, MH',
    img: '/assets/project2.jpg',
  },
  {
    id: 2,
    title: 'Riverfront Mall',
    category: 'Commercial',
    location: 'Ahmedabad, GJ',
    img: '/assets/project3.jpg',
  },
  {
    id: 3,
    title: 'Expressway Section-4',
    category: 'Infrastructure',
    location: 'Lucknow, UP',
    img: '/assets/project1.jpg',
  },
  {
    id: 4,
    title: 'CyberHub Towers',
    category: 'Commercial',
    location: 'Noida, UP',
    img: '/assets/project6.jpg',
  },
  {
    id: 5,
    title: 'Green Vista Villas',
    category: 'Residential',
    location: 'Indore, MP',
    img: '/assets/project5.jpeg',
  },
  {
    id: 6,
    title: 'Winsor Troika',
    category: 'Residential',
    location: 'Mumbai, MH',
    img: '/assets/project4.jpg',
  },
   {
    id: 7,
    title: 'Airport AMC',
    category: 'Infrastructure',
    location: 'Gondia, MH',
    img: '/assets/project7.jpg',
  },
   {
    id: 8,
    title: 'Vikram Solar (Installation)',
    category: 'Infrastructure',
    location: 'Latur, MH',
    img: '/assets/project8.jpg',
  },
  {
    id: 9,
    title: 'VIPL Tower',
    category: 'Commercial',
    location: 'Nagpur, MH',
    img: '/assets/project9.jpg',
  },
];

const categories = ['All', ...new Set(projectData.map((p) => p.category))];

export default function Projects() {
  const cardsRef = useRef([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
      /* -- Hover timeline (zoom img + slide info) -- */
      const img  = card.querySelector('img');
      const info = card.querySelector('.project-info');
      gsap.set(info, { yPercent: 100 });
      gsap.set(card, { transformPerspective: 1000 });

      const hoverTL = gsap.timeline({ paused: true })
        .to(img,  { scale: 1.1, duration: 0.5, ease: 'power3.out' }, 0)
        .to(info, { yPercent: 0, duration: 0.5, ease: 'power3.out' }, 0);

      card.addEventListener('mouseenter', () => hoverTL.play());
      card.addEventListener('mouseleave', () => hoverTL.reverse());
    });
  }, []);

  const filteredProjects =
    filter === 'All'
      ? projectData
      : projectData.filter((p) => p.category === filter);

  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>Our Projects</h1>
        <p>Delivering excellence, one landmark at a time</p>

        {/* -------- Category filter -------- */}
        <div className="project-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={cat === filter ? 'active' : ''}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* -------- Project Gallery -------- */}
      <div className="projects-grid">
        {filteredProjects.map((project, i) => (
          <div
            key={project.id}
            className="project-card"
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <img src={project.img} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <span>{project.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}