import Lottie from 'lottie-react';
import Shoreailogo from '../src/animations/Shoreailogo.json';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const PlusPage = () => {
  const lottieRef = useRef();
  const [hasPlayed, setHasPlayed] = useState(false);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            if (lottieRef.current) {
              lottieRef.current.play();
              setHasPlayed(true);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const logoContainer = document.querySelector('.hero-logo-container');
    if (logoContainer) {
      observer.observe(logoContainer);
    }

    return () => {
      if (logoContainer) {
        observer.unobserve(logoContainer);
      }
    };
  }, [hasPlayed]);

  useEffect(() => {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target;
            video.play();
          } else {
            const video = entry.target;
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    const videos = document.querySelectorAll('.showcase-video');
    videos.forEach((video) => {
      videoObserver.observe(video);
    });

    return () => {
      videos.forEach((video) => {
        videoObserver.unobserve(video);
      });
    };
  }, []);

  // GSAP Animations for individual elements
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Wait for preloader to finish
    const initAnimations = () => {
      // Hero section - animate quote text
      gsap.fromTo(".hero-quote", 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".shoreai-hero",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Intro section - animate title, description, and tags
      gsap.fromTo(".shoreai-title", 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.0, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".shoreai-intro-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".shoreai-description", 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: ".shoreai-intro-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".shoreai-tag", 
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".shoreai-intro-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Building connections section - animate title and features
      gsap.fromTo(".building-connections-title", 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".building-connections-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".feature-column", 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.0, 
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".building-connections-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // We designed section - animate title and showcase items
      gsap.fromTo(".we-designed-title", 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".we-designed-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".showcase-item", 
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1.0, 
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".we-designed-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Roadmap section - animate grid cells first
      gsap.fromTo(".roadmap-cell", 
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".roadmap-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Roadmap background labels - animate after grid cells
      gsap.fromTo(".background-label", 
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 1.2, 
          ease: "power2.out",
          delay: 1.0, // Wait for grid cells to finish (0.8s + 0.2s buffer)
          scrollTrigger: {
            trigger: ".roadmap-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Let's talk section - animate title, subtitle, and email
      gsap.fromTo(".lets-talk-title", 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.0, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".lets-talk-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".lets-talk-subtitle", 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.0, 
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: ".lets-talk-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".lets-talk-email", 
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          ease: "back.out(1.7)",
          delay: 0.4,
          scrollTrigger: {
            trigger: ".lets-talk-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    };

    // Check if preloader is gone and initialize animations
    const checkPreloader = () => {
      const preloader = document.querySelector('.preloader');
      if (!preloader || preloader.style.display === 'none' || preloader.classList.contains('loaded')) {
        initAnimations();
      } else {
        // Wait a bit and check again
        setTimeout(checkPreloader, 100);
      }
    };

    // Start checking for preloader
    checkPreloader();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
      <div className="portfolio-page">
        {/* Hero Section */}
        <section className="shoreai-hero">
          <div className="shoreai-hero-content">
            {/* Left 2/3 - Quote */}
            <div className="hero-left-section">
              <div className="quote-background">
                <img src="/images/Quotes.svg" alt="Quote mark" className="quote-mark" />
              </div>
              <div className="quote-text">
                <p className="hero-quote">
                  Iterate at the<br/>
                  speed of thought.
                </p>
              </div>
            </div>
            
            {/* Right 1/3 - Logo, Name, and Tags */}
            <div className="hero-right-section">
              <div className="hero-logo-container">
                <img src="/images/Plus.jpg" alt="PLUS platform screens" className="shoreai-hero-image" />
              </div>
              <div className="hero-shoreai-tags">
                <span className="shoreai-tag">#ProductDesign</span>
                <span className="shoreai-tag">#Entrepreneurship</span>
                <span className="shoreai-tag">#Fintech</span>
                <span className="shoreai-tag">#AIInsights</span>
                <span className="shoreai-tag">#ServiceDesign</span>
                <span className="shoreai-tag">#GrowthStrategy</span>
              </div>
              <h1 className="hero-shoreai-title">Plus AI</h1>
              <p className="shoreai-description" style={{ maxWidth: '620px', textAlign: 'left' }}>
                Plus AI is an AI-powered ecosystem designed specifically for architecture and interior design professionals.
                <br /><br />
                By combining intelligent automation with creative assistance, Plus AI helps designers make more informed decisions, iterate faster, and scale their ideation workflows without losing the human touch. It&apos;s not just about efficiency; it&apos;s about enhancing how designers think, collaborate, and design.
              </p>
            </div>
          </div>
        </section>

        {/* About / Mission Section */}
        <section className="plus-about-section">
          <div className="plus-about-label">About</div>
          <div className="plus-about-content">
            <p className="plus-about-intro">
            In a world where spaces are constantly evolving, architects and interior designers face complex social, environmental, and logistical challenges. Plus AI was created to address these very challenges. Its mission is twofold:
            </p>
            <div className="plus-mission-grid">
              <div className="plus-mission-card">
                <h3>Empower Designers</h3>
                <p>Provide AI tools that augment, not replace, the designer&rsquo;s vision, intuition, and agency.</p>
              </div>
              <div className="plus-mission-card">
                <h3>Scale Thought Processes</h3>
                <p>Help design teams share their unique ways of thinking, modeling, and creating so they can elevate design quality together.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Building Connections Section */}
        <section className="building-connections-section">
          <div className="building-connections-content">
            <h2 className="building-connections-title">
              Designing PLUS to unlock<br />
              emerging manager capital.
            </h2>
            <div className="features-grid">
              <div className="feature-column">
                <h3 className="feature-heading">AI-Driven Design Assistance</h3>
                <p className="feature-description">Generate design ideas, create alternatives, and explore multiple iterations with AI as a co-designer.
                </p>
              </div>
              <div className="feature-column">
                <h3 className="feature-heading">Rapid <br></br>Prototyping</h3>
                <p className="feature-description">Because the system is “lightning fast,” you can iterate in real-time — test concepts, tweak them, and immediately see the results. on the next best action.</p>
              </div>
              <div className="feature-column">
                <h3 className="feature-heading">Secure & Private Workspace</h3>
                <p className="feature-description">Your design data is yours. Plus AI ensures enterprise-grade security so teams can confidently store, share, and build together.</p>
              </div>
              <div className="feature-column">
                <h3 className="feature-heading">Continuous AI Upgrades</h3>
                <p className="feature-description">The AI model powering Plus AI is constantly evolving. Designers don’t have to worry about lagging behind new AI capabilities — the system updates for them.</p>
              </div>
            </div>
          </div>
        </section>

        {/* We Designed Section */}
        <section className="we-designed-section">
          <div className="we-designed-content">
            <h2 className="we-designed-title">
              We designed PLUS so<br />
              capital teams move in sync.
            </h2>
            <p className="plus-video-caption standalone-caption">
              Experience how PLUS AI empowers Architectural and Interior Designers and their workflows with intelligent automation and creative assistance.
            </p>
            <div className="features-showcase plus-video-feature">
              <div className="plus-video-wrapper">
                <video className="plus-video" muted loop autoPlay playsInline>
                  <source src="/videos/PLUS AI.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Talk Section */}
        <section className="lets-talk-section">
          {/* Content */}
          <div className="lets-talk-container">
            <div className="lets-talk-content">
              <h2 className="lets-talk-title">
                Join the Future of Design. Now.
              </h2>
              <div className="lets-talk-subtitle">
              Plus AI is not just a tool, it's a paradigm shift for architecture and interior design professionals.
              </div>
              <a className="lets-talk-email" href="mailto:richag@mit.edu">richag@mit.edu</a>
            </div>
          </div>
        </section>

      </div>
  );
};

export default PlusPage;
