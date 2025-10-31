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
      link: "/shoreai",
      external: false
    },
    {
      id: 2,
      name: "Vision Adapters",
      category: "ML & AI",
      image: "/images/PhoneMockup1.png",
      link: "https://letschec.my.canva.site/corbu-inc",
      external: true
    },
    {
      id: 3,
      name: "Text to Robotic Assembly",
      category: "AI & ML, Design",
      image: "/images/PhoneMockup1.png",
      link: "https://letschec.my.canva.site/text-to-roboticassembly",
      external: true
    },
    {
      id: 4,
      name: "Sketch-to-BIM",
      category: "Product, Design, AI & ML",
      image: "/images/PhoneMockup1.png",
      link: "https://letschec.my.canva.site/sketchtobimm",
      external: true
    },
    {
      id: 5,
      name: "ArchiDAO",
      category: "Entrepreneurship, Web3",
      image: "/images/PhoneMockup1.png",
      link: "https://example.com/archidao",
      external: true
    },
    {
      id: 6,
      name: "Curator AI",
      category: "Product, Design, AI & ML",
      image: "/images/PhoneMockup1.png",
      link: "https://letschec.my.canva.site/curatorai",
      external: true
    },
    {
      id: 7,
      name: "PLUS",
      category: "Product, Entrepreneurship",
      image: "/images/PhoneMockup1.png",
      link: "https://plus-ai-demo.vercel.app/",
      external: true
    },
    {
      id: 8,
      name: "Networking App",
      category: "Product, Design",
      image: "/images/PhoneMockup1.png",
      link: "https://example.com/networking-app",
      external: true
    },
    {
      id: 9,
      name: "Bike Design Completion",
      category: "AI & ML",
      image: "/images/PhoneMockup1.png",
      link: "https://letschec.my.canva.site/bike-design-inpainting",
      external: true
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
      <p>
  {"Starting in architecture meant learning to read context and clients - understanding what they needed, then designing innovative spaces that made those needs real. Frustration with the communication gap between designers and clients led to using AR, VR and other technologies to let people walk through designs before building them. That innovation created a new role - the firm's first design technologist - building tools that connected designers, engineers and clients. At MIT, the focus shifted deeper into AI. Not just building with these models, but understanding how to build them responsibly. Studies in red-teaming, pluralistic alignment, and real cases where AI amplified biases shaped a research position at CSAIL working on human-AI interaction, focused on one question: how do we build systems that expand human agency rather than restrict it? The approach is unconventional - speaking both technology and design, driven by creating tools and technologies that empower people to achieve things they could not before."}
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
              {project.link && project.external ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link-wrapper"
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.name} />
                  </div>
                  <div className="project-info">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-category">{project.category}</p>
                  </div>
                </a>
              ) : project.link ? (
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
