import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import useWindowSize from '../useWindowSize';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredTag, setHoveredTag] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState('right');
  const sectionRef = useRef(null);
  const dropdownRef = useRef(null);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 768;

  const handleProjectHover = (projectId, event) => {
    if (event && event.currentTarget) {
      const rect = event.currentTarget.getBoundingClientRect();
      const tooltipWidth = 320;
      const spaceOnRight = window.innerWidth - rect.right;
      const spaceOnLeft = rect.left;
      
      // If not enough space on right but enough on left, show on left
      if (spaceOnRight < tooltipWidth + 20 && spaceOnLeft > tooltipWidth + 20) {
        setTooltipPosition('left');
      } else {
        setTooltipPosition('right');
      }
    }
    setHoveredProject(projectId);
  };

  // Tag definitions - matching categories used in projects
  const tagDefinitions = {
    'AI & ML': 'Machine learning models, generative AI, and intelligent systems',
    'Human-AI Interaction': 'How people collaborate with and understand AI systems',
    'Product Design': 'User-facing applications, UX/UI, and product strategy',
    'Product Engineering': 'Technical implementation, system architecture, and development',
    'Design Technology': 'Building tools that bridge design and engineering',
    'Research': 'Experimental work, publications, and novel contributions',
    'AR/VR/MR': 'Augmented reality, virtual reality, and mixed reality experiences',
    'Entrepreneurship': 'Building and launching new ventures',
    'Web3': 'Blockchain, decentralized systems, and Web3 technologies'
  };

  const projects = [
    {
      id: 1,
      name: "Shore.ai",
      category: "Product Design, Product Engineering",
      description: "AI-powered platform for architectural design collaboration",
      details:"hfhdwuhewifwihdifhdifhwhewfwd TagsResearch academic case studyfocuses on AI companyProduct Design if youre analyzing this for product strategy lessonsAlternative approachIf this represents a broader skillset in organizational analysis or policy research, you could addPolicy & Governance new tag for regulatory/ethics workThe paper shows strong research and analytical capabilities—relevant for roles requiring trust/safety analysis, AI policy work, or organizational design. Would you want to feature this prominently or keep it more subtle in your portfolio?",
      image: "/images/Shore AI.jpg",
      link: "/shoreai",
      external: false
    },
    {
      id: 2,
      name: "Vision Adapters",
      category: "AI & ML, Design Technology",
      description: "Adaptive vision models for architectural image understanding",
      image: "/images/Vision Adapters.jpg",
      link: "https://letschec.my.canva.site/corbu-inc",
      external: true
    },
    {
      id: 3,
      name: "Text to Robotic Assembly",
      category: "AI & ML, Research, Human-AI Interaction, Design Technology",
      description: "Natural language interface for robotic construction workflows",
      image: "/images/Text to Robotic.jpg",
      link: "https://letschec.my.canva.site/text-to-roboticassembly",
      external: true
    },
    {
      id: 4,
      name: "Sketch-to-BIM",
      category: "Product Engineering, AI & ML, Design Technology, Human-AI Interaction, Hackathon",
      description: "Convert hand sketches to Building Information Models using AI",
      image: "/images/Sketch to BIM.jpg",
      link: "https://letschec.my.canva.site/sketchtobim",
      external: true
    },
    {
      id: 5,
      name: "ArchiDAO",
      category: "Entrepreneurship",
      description: "Decentralized autonomous organization for architectural projects",
      image: "/images/ArchiDAO.jpg",
      link: "https://example.com/archidao",
      external: true
    },
    {
      id: 6,
      name: "Curator AI",
      category: "Product Design, Product Engineering, Human-AI Interaction, Hackathon",
      description: "Intelligent content curation system for design inspiration",
      image: "/images/Curator.jpg",
      link: "https://letschec.my.canva.site/curatorai",
      external: true
    },
    {
      id: 7,
      name: "PLUS",
      category: "Product Design, Product Engineering, Entrepreneurship, Design Technology, Human-AI Interaction",
      description: "AI design assistant that expands creative possibilities",
      image: "/images/Plus.jpg",
      link: "/plus",
      external: false
    },
    {
      id: 8,
      name: "Beyond the Render",
      category: "AI & ML, Research, Human-AI Interaction, AI Safety, Design Technology",
      description: "Exploring AI-generated architectural visualizations",
      image: "/images/beyondtherender.png",
      link: "https://letschec.my.canva.site/bike-design-inpainting",
      external: true,
      comingSoon: true
    },
    {
      id: 9,
      name: "Bike Design Completion",
      category: "AI & ML, Design Technology",
      description: "AI-powered design completion for product ideation",
      image: "/images/Bike Design Completion.jpg",
      link: "https://letschec.my.canva.site/bike-design-inpainting",
      external: true,
      comingSoon: true
    },
    {
      id: 10,
      name: "Beyond Prompts",
      category: "AI & ML, Research, Human-AI Interaction, Design Technology",
      description: "Research on human-AI interaction beyond traditional prompting",
      image: "/images/beyondprompts.png",
      link: "https://letschec.my.canva.site/bike-design-inpainting",
      external: true,
      comingSoon: true
    },
    {
      id: 11,
      name: "Solve the Puzzle, Flex the Muscle",
      category: "AI & ML, Product Engineering, Human-AI Interaction",
      description: "Research on human-AI interaction beyond traditional prompting",
      image: "/images/beyondprompts.png",
      link: "https://letschec.my.canva.site/bike-design-inpainting",
      external: true,
      comingSoon: true
    },
    {
      id: 12,
      name: "Hybrid Making",
      category: "AR/VR/MR, Research, Workshop, Human-AI Interaction, Design Technology",
      description: "Research on human-AI interaction beyond traditional prompting",
      image: "/images/beyondprompts.png",
      link: "https://letschec.my.canva.site/bike-design-inpainting",
      external: true,
      comingSoon: true
    },
    {
      id: 13,
      name: "Boston MBTA Data Visualization",
      category: "Human-AI Interaction, Design Technology",
      description: "Research on human-AI interaction beyond traditional prompting",
      image: "/images/beyondprompts.png",
      link: "https://letschec.my.canva.site/bike-design-inpainting",
      external: true
    },
    {
      id: 14,
      name: "3DGeometryTool - 3DIT",
      category: "Product Engineering",
      description: "Research on human-AI interaction beyond traditional prompting",
      image: "/images/beyondprompts.png",
      link: "https://github.com/richasempire/cube-in-action",
      external: true,
      comingSoon: true
    },
    {
      id: 15,
      name: "Rat in the Hat",
      category: "AR/VR/MR, Human-AI Interaction, Hackathon",
      description: "Research on human-AI interaction beyond traditional prompting",
      image: "/images/beyondprompts.png",
      link: "https://www.youtube.com/watch?v=hleU5ndfpww",
      external: true,
      comingSoon: true
    },
    {
      id: 16,
      name: "Arch-SaaS",
      category: "Product Design, Product Engineering, Design Technology",
      description: "Research on human-AI interaction beyond traditional prompting",
      image: "/images/beyondprompts.png",
      link: "https://www.youtube.com/watch?v=hleU5ndfpww",
      external: true,
      comingSoon: true
    },
    {
      id: 17,
      name: "Drama in Architecture",
      category: "Research",
      description: "Research on human-AI interaction beyond traditional prompting",
      image: "/images/beyondprompts.png",
      link: "https://www.youtube.com/watch?v=hleU5ndfpww",
      external: true,
      comingSoon: true
    },
    {
      id: 18,
      name: "AI4AeroDesigners",
      category: "Human-AI Interaction, Design Technology, AI & ML, Hackathon, Product Design, Product Engineering",
      description: "Research on human-AI interaction beyond traditional prompting",
      image: "/images/beyondprompts.png",
      link: "https://www.youtube.com/watch?v=hleU5ndfpww",
      external: true,
      comingSoon: true
    },
    {
      id: 19,
      name: "AI Redteaming",
      category: "AI Safety, Human-AI Interaction, AI & ML",
      description: "Research on human-AI interaction beyond traditional prompting",
      image: "/images/beyondprompts.png",
      link: "https://www.youtube.com/watch?v=hleU5ndfpww",
      external: true,
      comingSoon: true
    },
    {
      id: 20,
      name: "AR & Metaverse",
      category: "AR/VR/MR, Human-AI Interaction, Design Technology",
      description: "Research on human-AI interaction beyond traditional prompting",
      image: "/images/beyondprompts.png",
      link: "https://www.youtube.com/watch?v=hleU5ndfpww",
      external: true,
      comingSoon: true
    },
    {
      id: 21,
      name: "Image-to-Material",
      category: "AI & ML, Design Technology, Research",
      description: "Research on human-AI interaction beyond traditional prompting",
      image: "/images/beyondprompts.png",
      link: "https://www.youtube.com/watch?v=hleU5ndfpww",
      external: true,
      comingSoon: true
    },
    {
      id: 22,
      name: "Computation",
      category: "Design Technology",
      description: "Research on human-AI interaction beyond traditional prompting",
      image: "/images/beyondprompts.png",
      link: "https://www.youtube.com/watch?v=hleU5ndfpww",
      external: true,
      comingSoon: true
    },
    {
      id: 23,
      name: "Images-to-Fiction",
      category: "Human-AI Interaction, Design Technology, AR/VR/MR",
      description: "Research on human-AI interaction beyond traditional prompting",
      image: "/images/beyondprompts.png",
      link: "https://www.youtube.com/watch?v=hleU5ndfpww",
      external: true
    },
    {
      id: 24,
      name: "Anthropic : AI Safety Governance Case Study",
      category: "Research, AI & ML, AI Safety, Product Design",
      description: "Research on human-AI interaction beyond traditional prompting",
      image: "/images/beyondprompts.png",
      link: "https://www.youtube.com/watch?v=hleU5ndfpww",
      external: true,
      comingSoon: true
    }
  ];

  // Get unique categories from all projects (extract all tags, not just first one)
  const allCategories = projects.flatMap(project => 
    project.category.split(',').map(cat => cat.trim())
  );
  const uniqueCategories = [...new Set(allCategories)];
  const categories = ['All', ...uniqueCategories.sort()];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const checkVisibility = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Check if section is in viewport or close to it
        const isInView = rect.top < window.innerHeight * 1.5 && rect.bottom > -100;
        if (isInView) {
          setIsVisible(true);
        }
      }
    };
    // Wait for preloader to finish, then check visibility
    const checkAfterPreloader = () => {
      const preloader = document.querySelector('.preloader');
      if (!preloader || preloader.style.display === 'none') {
        // Small delay to ensure DOM is ready
        setTimeout(checkVisibility, 200);
        return true;
      }
      return false;
    };

    // Check immediately
    if (!checkAfterPreloader()) {
      // If preloader is still there, check periodically
      const preloaderCheck = setInterval(() => {
        if (checkAfterPreloader()) {
          clearInterval(preloaderCheck);
        }
      }, 100);
      
      // Cleanup after 5 seconds max
      setTimeout(() => clearInterval(preloaderCheck), 5000);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Lower threshold to trigger earlier
        rootMargin: '200px 0px 0px 0px' // Trigger when section is 200px above viewport
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

  // Also trigger visibility when filter changes (in case projects were hidden)
  useEffect(() => {
    const checkVisibility = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Check if section is in viewport or close to it
        const isInView = rect.top < window.innerHeight * 1.5 && rect.bottom > -100;
        if (isInView) {
          setIsVisible(true);
        }
      }
    };
    
    // Small delay to ensure DOM has updated after filter change
    const timeoutId = setTimeout(checkVisibility, 50);
    return () => clearTimeout(timeoutId);
  }, [activeFilter]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setIsDropdownOpen(false);
  };

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>

      <div className="projects-container">
        {/* Section Title */}
        <div className="projects-title">
          <h2>Projects</h2>
        </div>
        
        {/* Category Filter - Desktop */}
        <div className="projects-filter projects-filter-desktop">
          {categories.map((category) => (
            <div 
              key={category}
              className="filter-button-wrapper"
              onMouseEnter={() => category !== 'All' && tagDefinitions[category] && setHoveredTag(category)}
              onMouseLeave={() => setHoveredTag(null)}
            >
              <button
                className={`filter-button ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
                {category !== 'All' && tagDefinitions[category] && (
                  <span className="filter-info-indicator">*</span>
                )}
              </button>
              {hoveredTag === category && tagDefinitions[category] && (
                <div className="tag-tooltip">
                  <p>{tagDefinitions[category]}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Category Filter - Mobile Dropdown */}
        <div className="projects-filter-mobile" ref={dropdownRef}>
          <div className="custom-dropdown">
            <button
              className="custom-dropdown-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="custom-dropdown-selected">{activeFilter}</span>
              <span className={`custom-dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
                <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            {isDropdownOpen && (
              <div className="custom-dropdown-menu">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`custom-dropdown-item ${activeFilter === category ? 'active' : ''}`}
                    onClick={() => handleFilterChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`projects-grid ${isVisible ? 'animate' : ''}`}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card-wrapper"
              onMouseEnter={(e) => handleProjectHover(project.id, e)}
              onMouseLeave={() => {
                setHoveredProject(null);
                setTooltipPosition('right');
              }}
            >
              <div className={`project-card ${project.comingSoon ? 'coming-soon' : ''}`}>
                {project.comingSoon ? (
                  <div className="project-link-wrapper">
                    <div className="project-image">
                      <img src={project.image} alt={project.name} />
                    </div>
                    <div className="project-info">
                      <h3 className="project-name">{project.name}</h3>
                      <p className="project-category">{project.category}</p>
                      {project.description && (
                        <p className="project-description">{project.description}</p>
                      )}
                    </div>
                    <div className="coming-soon-badge">Coming Soon</div>
                  </div>
                ) : project.link && project.external ? (
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
                      {project.description && (
                        <p className="project-description">{project.description}</p>
                      )}
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
                        {project.description && (
                          <p className="project-description">{project.description}</p>
                        )}
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
                      {project.description && (
                        <p className="project-description">{project.description}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
              {hoveredProject === project.id && (project.description || project.details) && (
                <div className={`project-tooltip project-tooltip-${tooltipPosition}`}>
                  <h4 className="project-tooltip-title">{project.name}</h4>
                  {project.description && (
                    <p className="project-tooltip-description">{project.description}</p>
                  )}
                  {project.details && (
                    <div className="project-tooltip-details">
                      {Array.isArray(project.details) ? (
                        project.details.map((paragraph, index) => (
                          <p key={index} className="project-tooltip-paragraph">{paragraph}</p>
                        ))
                      ) : (
                        <p className="project-tooltip-paragraph">{project.details}</p>
                      )}
                    </div>
                  )}
                  {project.category && (
                    <div className="project-tooltip-category">{project.category}</div>
                  )}
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
