import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../src/layout/Layout";
import { gsap } from "gsap";

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState('shore');

  const projects = {
    shore: {
      title: "Shore.ai",
      subtitle: "AI-Powered Coastal Monitoring Platform",
      description: "A comprehensive AI platform that monitors coastal environments using satellite imagery, drone data, and IoT sensors to predict erosion, track marine life, and provide real-time alerts for coastal communities.",
      technologies: ["Computer Vision", "Machine Learning", "Satellite Imagery", "IoT Sensors", "React", "Python", "TensorFlow"],
      features: [
        "Real-time coastal erosion prediction",
        "Marine life tracking and identification", 
        "Automated alert system for coastal communities",
        "Interactive dashboard for environmental data",
        "Integration with weather APIs and satellite feeds"
      ],
      images: [
        "/images/Shore1.jpg",
        "/images/Shore2.jpg", 
        "/images/Shore3.jpg"
      ],
      link: "https://shore.ai",
      github: "https://github.com/richag/shore-ai"
    }
  };

  const currentProject = projects[activeProject];

  return (
    <Layout>
      <div className="portfolio-page">
        {/* Hero Section */}
        <section className="portfolio-hero">
          <div className="portfolio-hero-content">
            <div className="project-badge">
              <span className="badge-text">AI & ML</span>
            </div>
            <h1 className="project-title">{currentProject.title}</h1>
            <p className="project-subtitle">{currentProject.subtitle}</p>
            <p className="project-description">{currentProject.description}</p>
            
            <div className="project-links">
              <a href={currentProject.link} target="_blank" rel="noopener noreferrer" className="project-link primary">
                View Live Site
              </a>
              <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                View Code
              </a>
            </div>
          </div>
        </section>

        {/* Project Images */}
        <section className="project-images">
          <div className="images-grid">
            {currentProject.images.map((image, index) => (
              <div key={index} className="project-image-container">
                <img src={image} alt={`${currentProject.title} screenshot ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        {/* Project Details */}
        <section className="project-details">
          <div className="details-container">
            <div className="details-column">
              <h3>Technologies Used</h3>
              <div className="tech-tags">
                {currentProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="details-column">
              <h3>Key Features</h3>
              <ul className="features-list">
                {currentProject.features.map((feature, index) => (
                  <li key={index} className="feature-item">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="portfolio-navigation">
          <Link href="/" className="nav-link">
            ← Back to Home
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;
