import { useEffect, useState } from "react";

const HeroIntro = () => {
  const [phase, setPhase] = useState("x"); // x -> brackets -> x-move (final static state)
  const [scrollDisabled, setScrollDisabled] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [currentLeftIndex, setCurrentLeftIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLeftTransitioning, setIsLeftTransitioning] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showSemiCircle, setShowSemiCircle] = useState(false);

  const technologies = [
    "Emerging technologies",
    "Image generation", 
    "Fine tuning",
    "Metaverse",
    "LLM",
    "VLM",
    "Machine learning",
    "Augmented reality",
    "Virtual reality",
    "3D geometry",
    "Web sockets",
    "Data Visualization",
    "AI Safety",
    "Web 3",
    "Classification",
    "User strategy",
    "Image generation"
  ];

  const leftWords = [
    "Challenges",
    "Responsible", 
    "Innovation",
    "Democratization",
    "Interaction"
  ];



  // Track mouse position for cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Check if user is in hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-intro');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isVisible = rect.top <= 0 && rect.bottom >= window.innerHeight;
        setIsInHeroSection(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable scroll during animation only if in hero section
  useEffect(() => {
    if (scrollDisabled && isInHeroSection) {
      // Use padding-right to maintain scrollbar space instead of hiding it
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [scrollDisabled, isInHeroSection]);

  useEffect(() => {
    // Start animation sequence: x -> all-appear -> hold-center -> final-move
    const t1 = setTimeout(() => setPhase("all-appear"), 2500); // f, brackets, and x all appear together in center
    const t2 = setTimeout(() => setPhase("hold-center"), 3000); // hold f(x) in center for 2 seconds
    const t3 = setTimeout(() => setPhase("final-move"), 5000); // all elements move to final positions together
    const t4 = setTimeout(() => setScrollDisabled(false), 5500); // enable scroll after all elements are positioned
    const t5 = setTimeout(() => setShowSemiCircle(true), 5800); // show semi-circle after (x) moves to final position (5s + 0.8s)
    const t6 = setTimeout(() => setShowText(true), 6200); // show text after semi-circle appears (5.8s + 0.4s)
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  // Technology cycling effect - starts only when text is shown
  useEffect(() => {
    if (showText) {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentTechIndex((prev) => (prev + 1) % technologies.length);
          setIsTransitioning(false);
        }, 300); // Half of transition duration
      }, 2000); // Change every 2 seconds

      return () => clearInterval(interval);
    }
  }, [showText, technologies.length]);

  // Left text cycling effect - starts only when text is shown
  useEffect(() => {
    if (showText) {
      const interval = setInterval(() => {
        setIsLeftTransitioning(true);
        setTimeout(() => {
          setCurrentLeftIndex((prev) => (prev + 1) % leftWords.length);
          setIsLeftTransitioning(false);
        }, 300); // Half of transition duration
      }, 2000); // Change every 2 seconds

      return () => clearInterval(interval);
    }
  }, [showText, leftWords.length]);


  return (
    <div className={`hero-intro ${phase}`}>
      {/* Static f(x) display */}
      <div className="hero-fx" style={{
        margin: 0,
        padding: 0,
        lineHeight: 1
      }}>
        <span className="hero-brackets" style={{
          fontSize: "500px",
          margin: 0,
          padding: 0,
          lineHeight: 1,
          marginRight: '50px',
          fontWeight: '300'
        }}>(</span>
        <span className="hero-x-initial" style={{
          fontSize: "550px",
          margin: 0,
          padding: 0,
          lineHeight: 1
        }}>
          x
        </span>
        <span className="hero-brackets" style={{
          fontSize: "500px",
          margin: 0,
          padding: 0,
          lineHeight: 1,
          marginLeft: '50px',
          fontWeight: '300'
        }}>)</span>
      </div>

      {/* Static f */}
      <div className="hero-f">
        <img src="/f.svg" alt="f" />
      </div>

      {/* Semi-circle below (x) - appears after (x) moves to final position */}
      {showSemiCircle && (
        <div className="hero-semi-circle"></div>
      )}

      {/* Cycling left text in center of f - only render after final positioning */}
      {showText && (
        <div className={`hero-innovation-f ${isLeftTransitioning ? 'fade-out' : 'fade-in'}`}>
          {leftWords[currentLeftIndex]}
        </div>
      )}

      {/* Cycling technology text in center of x - only render after final positioning */}
      {showText && (
        <div className={`hero-innovation-x ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          {technologies[currentTechIndex]}
        </div>
      )}


      {/* Mouse-following cursor - always visible */}
      <div 
        className="mouse-cursor"
        style={{
          position: 'fixed',
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          width: '20px',
          height: '20px',
          backgroundColor: '#89AE00',
          borderRadius: '50%',
          zIndex: 9999,
          pointerEvents: 'none',
          transition: 'none',
          opacity: 0.5
        }}
      />

    </div>
  );
};

export default HeroIntro;