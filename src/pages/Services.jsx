import React, { useEffect, useRef } from 'react';
import './Services.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const servicesRef = useRef([]);
  servicesRef.current = [];

  const addToRefs = (el) => {
    if (el && !servicesRef.current.includes(el)) {
      servicesRef.current.push(el);
    }
  };

  useEffect(() => {
    servicesRef.current.forEach((el) => {
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

  const services = [
    {
      title: 'Residential Construction',
      description: 'We build modern, sustainable, and safe homes across urban and rural areas.',
      image: '/assets/service1.jpg',
    },
    {
      title: 'Commercial Projects',
      description: 'From office complexes to shopping malls, we deliver premium-grade commercial spaces.',
      image: '/assets/service2.jpg',
    },
    {
      title: 'Infrastructure Development',
      description: 'Bridges, highways, drainage systems – we engineer the backbone of smart cities.',
      image: '/assets/service3.jpg',
    },
    {
      title: 'Turnkey Solutions',
      description: 'From design to delivery, our end-to-end construction solutions simplify execution.',
      image: '/assets/service4.jpg',
    },
    {
      title: 'Annual Maintainance Contract',
      description: 'Comprehensive post-construction services ensuring seamless facility upkeep, safety, and operational efficiency through scheduled inspections, repairs, and expert maintenance support.',
      image: '/assets/service5.jpg',
    },
  ];

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Delivering Excellence Across Every Domain</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index} ref={addToRefs}>
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;