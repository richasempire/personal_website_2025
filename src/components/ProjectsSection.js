import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      name: "Shore.ai",
      category: "AI & ML",
      image: "/images/ShoreaiImage.png",
      link: "/shoreai"
    },
    {
      id: 2,
      name: "Vision Adapters",
      category: "ML & AI",
      image: "/images/PhoneMockup1.png"
    },
    {
      id: 3,
      name: "Text to Robotic Assembly",
      category: "AI & ML, Design",
      image: "/images/PhoneMockup1.png"
    },
    {
      id: 4,
      name: "Sketch-to-BIM",
      category: "Product, Design, AI & ML",
      image: "/images/PhoneMockup1.png"
    },
    {
      id: 5,
      name: "ArchiDAO",
      category: "Entrepreneurship, Web3",
      image: "/images/PhoneMockup1.png"
    },
    {
      id: 6,
      name: "Curator AI",
      category: "Product, Design, AI & ML",
      image: "/images/PhoneMockup1.png"
    },
    {
      id: 7,
      name: "PLUS",
      category: "Product, Entrepreneurship",
      image: "/images/PhoneMockup1.png"
    },
    {
      id: 8,
      name: "Networking App",
      category: "Product, Design",
      image: "/images/PhoneMockup1.png"
    },
    {
      id: 9,
      name: "Bike Design Completion",
      category: "AI & ML",
      image: "/images/PhoneMockup1.png"
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category.split(',')[0].trim()))];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="projects-section" ref={sectionRef}>
      <div className="projects-section-content">
      <p> I started in architecture, where I learned to design for how people actually experience spaces. When I got frustrated with the communication gap between designers and clients, I started using AR and VR to let people walk through designs before we built them. That innovation led to me becoming my firm's first design technologist—building tools that connected designers, engineers, and clients.
At MIT, I went deeper into AI. I didn't just want to build with these models—I wanted to understand how to build them responsibly. I studied red-teaming, pluralistic alignment, and real cases where AI amplified biases. Now I'm a researcher at CSAIL working on human-AI interaction, focused on one question: how do we build systems that expand human agency rather than restrict it?
I'm unconventional—I speak both technology and design, and I'm driven by creating tools that empower people to achieve things they couldn't before.
</p>
      </div>
      
      <div className="projects-section-image">
        <img src="/images/richa_design_tech.jpg" alt="Richa Gupta - Design Technologist" />
      </div>
      <div className="projects-container">
        {/* Section Title */}
        <div className="projects-title">
          <h2>The <span className="ideas">Interface</span> of Ideas</h2>
        </div>
        
        {/* Category Filter */}
        <div className="projects-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`projects-grid ${isVisible ? 'animate' : ''}`}>
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {project.link ? (
                <Link href={project.link}>
                  <div className="project-link-wrapper">
                    <div className="project-image">
                      <img src={project.image} alt={project.name} />
                    </div>
                    <div className="project-info">
                      <h3 className="project-name">{project.name}</h3>
                      <p className="project-category">{project.category}</p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div>
                  <div className="project-image">
                    <img src={project.image} alt={project.name} />
                  </div>
                  <div className="project-info">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-category">{project.category}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
