import React, { useEffect, useRef } from 'react';
import './LandingPage.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function LandingPage() {
  const headlineRef = useRef();
  const subtextRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    gsap.from(".landing-page", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".animate-on-scroll", {
      scrollTrigger: {
        trigger: ".animate-on-scroll",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.2,
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (videoRef.current) {
        if (scrollY > window.innerHeight * 0.8) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* Background video */}
      <div className="video-background">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source
            src="/assets/172350-847185398_medium.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      </div>


      <div className="overlay-content">
        <h1 className="animate-on-scroll" ref={headlineRef}>
          We Build Dreams, Not Just Structures
        </h1>
        <p className="animate-on-scroll" ref={subtextRef}>
          Trusted by clients across India for world-class infrastructure projects
        </p>
        <button onClick={() => window.open('/Contact', '_blank', 'noopener,noreferrer')}>
          Get a Quote
        </button>
      </div>
    </div>
  );
}

export default LandingPage;