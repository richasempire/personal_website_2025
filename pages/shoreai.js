import Layout from "../src/layout/Layout";
import Lottie from 'lottie-react';
import Shoreailogo from '../src/animations/Shoreailogo.json';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ShoreaiPage = () => {
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

    const logoContainer = document.querySelector('.shoreai-logo-container');
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
    <Layout>
      <div className="portfolio-page">
        {/* Hero Section */}
        <section className="shoreai-hero">
          <div className="shoreai-hero-content">
            <div className="quote-background">
              <img src="/images/Quotes.svg" alt="Quote mark" className="quote-mark" />
            </div>
            <div className="quote-text">
              <p className="hero-quote">
                The future of career<br/>
                success is human connection,<br/>
                not algorithms.
              </p>
            </div>
          </div>
        </section>

        {/* Shore.ai Intro Section */}
        <section className="shoreai-intro-section">
          <div className="shoreai-layout">
            {/* Left side - Title and tags */}
            <div className="shoreai-left-panel">
              <h1 className="shoreai-title">
                Shore.ai
              </h1>
              <div className="shoreai-tags">
                <span className="shoreai-tag">#ProductDesign</span>
                <span className="shoreai-tag">#TechForHumans</span>
                <span className="shoreai-tag">#DesignThinking</span>
                <span className="shoreai-tag">#InteractionDesign</span>
                <span className="shoreai-tag">#UXDesign</span>
                <span className="shoreai-tag">#UIDesign</span>
              </div>
            </div>
            
            {/* Center - Gray square with logo */}
            <div className="shoreai-center-panel">
              <div className="shoreai-logo-container">
                <Lottie
                  lottieRef={lottieRef}
                  animationData={Shoreailogo}
                  loop={false}
                  autoplay={false}
                  className="shoreai-logo-animation"
                  style={{ width: 500, height: 500 }}
                />
              </div>
            </div>
            
            {/* Right side - Description text */}
            <div className="shoreai-right-panel">
              <p className="shoreai-description">
                Not another job board. A platform that teaches people how to network like it matters, with clarity, purpose, and measurable growth.
                <br /><br />
                A goal-driven networking platform that reframes how young professionals think about success. Instead of chasing listings and waiting for referrals, users are encouraged to build and maintain authentic relationships that lead to long-term opportunities. From AI-assisted communication to goal tracking and visual network maps, it turns professional connection into a skill, not luck.
              </p>
            </div>
          </div>
        </section>

        {/* Building Connections Section */}
        <section className="building-connections-section">
          <div className="building-connections-content">
            <h2 className="building-connections-title">
              Building Meaningful Connections<br />
              Beyond Job Boards
            </h2>
            <div className="features-grid">
              <div className="feature-column">
                <h3 className="feature-heading">Networking becomes clear and structured</h3>
                <p className="feature-description">The app helps users set goals, track progress, and build relationships with purpose.</p>
              </div>
              <div className="feature-column">
                <h3 className="feature-heading">Opportunities are easier to access</h3>
                <p className="feature-description">By cultivating a trusted network, users can tap into roles often unavailable through traditional job portals.</p>
              </div>
              <div className="feature-column">
                <h3 className="feature-heading">Connections are easier to maintain</h3>
                <p className="feature-description">Reminders, analytics, and notes help users follow up consistently and strengthen relationships.</p>
              </div>
              <div className="feature-column">
                <h3 className="feature-heading">Networking feels authentic</h3>
                <p className="feature-description">Behavioral insights and AI-driven suggestions support meaningful, personalized interactions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* We Designed Section */}
        <section className="we-designed-section">
          <div className="we-designed-content">
            <h2 className="we-designed-title">
              We designed a way for people to<br />
              meet opportunities halfway.
            </h2>
            <div className="features-showcase">
              <div className="showcase-item showcase-right">
                <div className="vertical-line"></div>
                <div className="showcase-visual">
                  <video className="showcase-video" muted loop>
                    <source src="/videos/Shore16.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="vertical-line"></div>
                <div className="showcase-text">
                  <h3 className="showcase-heading">Easily Onboard with Customized goals and LinkedIn Data</h3>
                  <p className="showcase-description">By cultivating a trusted network, users can tap into roles often unavailable through traditional job portals.</p>
                </div>
                <div className="vertical-line"></div>
              </div>
              
              <div className="showcase-item showcase-left">
                <div className="vertical-line"></div>
                <div className="showcase-visual">
                  <video className="showcase-video" muted loop>
                    <source src="/videos/Shore18.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="vertical-line"></div>
                <div className="showcase-text">
                  <h3 className="showcase-heading">Easily connect with your alumni and networks through map visualization</h3>
                  <p className="showcase-description">By cultivating a trusted network, users can tap into roles often unavailable through traditional job portals.</p>
                </div>
                <div className="vertical-line"></div>
              </div>
              
              <div className="showcase-item showcase-right">
                <div className="vertical-line"></div>
                <div className="showcase-visual">
                  <video className="showcase-video" muted loop>
                    <source src="/videos/Shore19.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="vertical-line"></div>
                <div className="showcase-text">
                  <h3 className="showcase-heading">Send messages and set up calls with AI assistance</h3>
                  <p className="showcase-description">By cultivating a trusted network, users can tap into roles often unavailable through traditional job portals.</p>
                </div>
                <div className="vertical-line"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="roadmap-section">
          <div className="roadmap-background-labels">
            <div className="background-label improvements-bg">Improvements</div>
            <div className="background-label additions-bg">Additions</div>
            <div className="background-label markets-bg">Markets</div>
          </div>
          <div className="roadmap-container">
            <div className="roadmap-grid">
              {/* Box 1 */}
              <div className="roadmap-cell">
                <div className="roadmap-item">Launch</div>
                <div className="roadmap-item indented">Multi-Lingual</div>
              </div>
              {/* Box 2 */}
              <div className="roadmap-cell">
                <div className="roadmap-item">VR Representations</div>
              </div>
              {/* Box 3 */}
              <div className="roadmap-cell">
                <div className="roadmap-item">Networking Insights</div>
              </div>
              {/* Box 4 */}
              <div className="roadmap-cell">
                {/* Empty cell */}
              </div>
              {/* Box 5 */}
              <div className="roadmap-cell">
                <div className="roadmap-item">Alumni-network</div>
              </div>
              {/* Box 6 */}
              <div className="roadmap-cell">
                <div className="roadmap-item">Mobile Connect</div>
                <div className="roadmap-item indented">Facial Recognition</div>
              </div>
              {/* Box 7 */}
              <div className="roadmap-cell">
                <div className="roadmap-item">VR Coffees</div>
                <div className="roadmap-item indented">Virtual Personas</div>
              </div>
              {/* Box 8 */}
              <div className="roadmap-cell">
                <div className="roadmap-item">VR micro-communities</div>
              </div>
              {/* Box 9 */}
              <div className="roadmap-cell">
                <div className="roadmap-item">Release in universities</div>
              </div>
              {/* Box 10 */}
              <div className="roadmap-cell">
                <div className="roadmap-item">Freshers & HR</div>
                <div className="roadmap-item indented">United States</div>
              </div>
              {/* Box 11 */}
              <div className="roadmap-cell">
                <div className="roadmap-item">VCs and Startups</div>
                <div className="roadmap-item indented">India and China</div>
              </div>
              {/* Box 12 */}
              <div className="roadmap-cell">
                <div className="roadmap-item">Friendship & Dating</div>
                <div className="roadmap-item indented">All around the world</div>
              </div>
              {/* Box 13 */}
              <div className="roadmap-cell">
                <div className="timeframe">&lt;1<br />Year</div>
              </div>
              {/* Box 14 */}
              <div className="roadmap-cell">
                <div className="timeframe">1-2<br />years</div>
              </div>
              {/* Box 15 */}
              <div className="roadmap-cell">
                <div className="timeframe">3-5<br />years</div>
              </div>
              {/* Box 16 */}
              <div className="roadmap-cell">
                <div className="timeframe">5-10<br />years</div>
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
                Build your network. Grow your worth.
              </h2>
              <div className="lets-talk-subtitle">
                Networking doesn&apos;t have to be overwhelming; with the right design, it becomes part of how people grow, not just how they get hired.
              </div>
              <a className="lets-talk-email" href="mailto:richag@mit.edu">richag@mit.edu</a>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default ShoreaiPage;
