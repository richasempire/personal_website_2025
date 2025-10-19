import React from 'react';

const CollaborateSection = () => {
  return (
    <section className="collaborate-section">
      {/* Background circles */}
      <div className="liquid-circles">
        <div className="liquid-circle circle-1"></div>
        <div className="liquid-circle circle-2"></div>
      </div>

      {/* Content */}
      <div className="collaborate-container">
        <div className="collaborate-content">
          <h2 className="collaborate-text">
            Equal parts <span className="highlight">architect</span>, <span className="highlight">coder</span>, and <span className="highlight">curious human</span>, I build things that make both sense and impact.
          </h2>
          <button className="collaborate-button">
            Let&apos;s Collaborate
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;