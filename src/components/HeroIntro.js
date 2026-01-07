import { useEffect, useState } from "react";

const HeroIntro = () => {
  const [phase, setPhase] = useState("x"); // x -> brackets -> x-move (final static state)
  const [scrollDisabled, setScrollDisabled] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [currentLeftIndex, setCurrentLeftIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobileTransitioning, setIsMobileTransitioning] = useState(false);
  const [isLeftTransitioning, setIsLeftTransitioning] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showSemiCircle, setShowSemiCircle] = useState(false);
  const [showMobileText, setShowMobileText] = useState(false);
  const [animationSkipped, setAnimationSkipped] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  const technologies = [
    "Emerging technologies",
    "Artificial Intelligence", 
    "Generative AI", 
    "LLM",
    "VLM",
    "Image generation", 
    "Fine tuning",
    "Metaverse",
    
    "Machine learning",
    "Augmented reality",
    "Virtual reality", "Mixed Reality",
    "Web sockets",
    "Data Visualization",
    "AI Safety",
    "Web 3",
    "User strategy",
  
  ];

  const leftWords = [
    "Innovation",
    "Responsible", 
    "Democratization",
    "Real-world Problems",
    "Human Interaction"
  ];



  // Track mouse position for cursor - only show on interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setShowCursor(true);
    };

    const handleMouseLeave = () => {
      setShowCursor(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Skip animation function
  const skipAnimation = () => {
    setAnimationSkipped(true);
    setPhase("final-move");
    setScrollDisabled(false);
    setShowSemiCircle(true);
    setShowText(true);
  };

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

  // Disable scroll during animation (only on desktop, not mobile)
  useEffect(() => {
    // Check if mobile/responsive (1024px and below)
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;
    
    // Skip scroll disable on mobile
    if (isMobile) {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
      return;
    }
    
    if (scrollDisabled) {
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
  }, [scrollDisabled]);

  useEffect(() => {
    // Check if mobile/responsive (1024px and below)
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;
    
    // On mobile, enable scroll immediately and skip desktop animations
    if (isMobile) {
      setScrollDisabled(false);
      setShowMobileText(true);
      return;
    }
    
    // Skip if animation was manually skipped
    if (animationSkipped) {
      return;
    }
    
    // Desktop animation sequence: x -> all-appear -> hold-center -> final-move (reduced timing)
    const t1 = setTimeout(() => setPhase("all-appear"), 1500); // f, brackets, and x all appear together in center
    const t2 = setTimeout(() => setPhase("hold-center"), 2000); // hold f(x) in center for 1.5 seconds
    const t3 = setTimeout(() => setPhase("final-move"), 3500); // all elements move to final positions together
    const t4 = setTimeout(() => setScrollDisabled(false), 4000); // enable scroll after all elements are positioned
    const t5 = setTimeout(() => setShowSemiCircle(true), 4200); // show semi-circle after (x) moves to final position
    const t6 = setTimeout(() => setShowText(true), 4500); // show text after semi-circle appears
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [animationSkipped]);

  // Technology cycling effect - starts only when text is shown (desktop)
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

  // Technology cycling effect for mobile - starts earlier
  useEffect(() => {
    if (showMobileText) {
      const interval = setInterval(() => {
        setIsMobileTransitioning(true);
        setTimeout(() => {
          setCurrentTechIndex((prev) => (prev + 1) % technologies.length);
          setIsMobileTransitioning(false);
        }, 300); // Half of transition duration
      }, 2000); // Change every 2 seconds

      return () => clearInterval(interval);
    }
  }, [showMobileText, technologies.length]);

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
      {/* Mobile Hero Section */}
      <div className="hero-mobile">
        {/* Block A - Top Section */}
        <div className="hero-mobile-block-a">
          <div className="hero-mobile-f-bg">f</div>
          <div className="hero-mobile-description">
            {leftWords.map((word, index) => (
              <span key={index}>
                <span className="hero-mobile-word">{word}</span>
                {index < leftWords.length - 1 && (
                  <span className="hero-mobile-separator">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
        
        {/* Curved white arc divider */}
        <img src="/images/Arc.svg" alt="Arc divider" className="hero-mobile-arc" />
        
        {/* Block B - Bottom Section */}
        <div className="hero-mobile-block-b">
          <div className="hero-mobile-x-bg">x</div>
          <h1 className="hero-mobile-title">
            {showMobileText && (
              <span className={`hero-mobile-cycling-text ${isMobileTransitioning ? 'fade-out' : 'fade-in'}`}>
                {technologies[currentTechIndex]}
              </span>
            )}
          </h1>
          <div className="hero-mobile-tech-list">
            {technologies.map((word, index) => (
              <span key={index}>
                <span className="hero-mobile-tech-word">{word}</span>
                {index < technologies.length - 1 && (
                  <span className="hero-mobile-separator">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Hero Section */}
      {/* Skip Animation Button - Minimal */}
      {!animationSkipped && scrollDisabled && (
        <button 
          className="hero-skip-button"
          onClick={skipAnimation}
          aria-label="Skip animation"
        >
          Skip
        </button>
      )}

      {/* Simple tagline - only show after animation */}
      {showText && (
        <div className="hero-design-for">
          <div className="hero-tagline-main">Building AI systems that expand human agency</div>
        </div>
      )}

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
          fontSize: "650px",
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

      {/* Word lists below f and x - subtle and clean */}
      {showText && (
        <div className="hero-innovation-f-list">
          {leftWords.map((word, index) => (
            <span key={index}>
              <span className={`hero-innovation-f-item hero-word-${index}`}>
                {word}
              </span>
              {index < leftWords.length - 1 && (
                <span className="hero-word-separator">•</span>
              )}
            </span>
          ))}
        </div>
      )}
      
      {showText && (
        <div className="hero-innovation-x-list">
          {technologies.map((word, index) => (
            <span key={index}>
              <span className={`hero-innovation-x-item hero-word-${index}`}>
                {word}
              </span>
              {index < technologies.length - 1 && (
                <span className="hero-word-separator">•</span>
              )}
            </span>
          ))}
        </div>
      )}

      {/* Semi-circle below (x) - appears after (x) moves to final position */}
      {showSemiCircle && (
        <div className="hero-semi-circle"></div>
      )}

      {/* Cycling technology text in center of x - only render after final positioning */}
      {showText && (
        <div className={`hero-innovation-x ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          {technologies[currentTechIndex]}
        </div>
      )}


      {/* Background technologies text on right side */}
      {/* {showSemiCircle && (
        <div className="hero-background-tech">
          {technologies.map((tech, index) => (
            <div 
              key={`${tech}-${index}`} 
              className="hero-background-tech-item"
            >
              {tech}
            </div>
          ))}
        </div>
      )} */}

      {/* Mouse cursor removed for cleaner look */}

    </div>
  );
};

export default HeroIntro;