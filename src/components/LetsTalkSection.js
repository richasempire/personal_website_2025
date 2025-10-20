import React from 'react';

const LetsTalkSection = () => {
  return (
    <section className="lets-talk-section">
      {/* Content */}
      <div className="lets-talk-container">
        <div className="lets-talk-content">
          <h2 className="lets-talk-title">
            Let&apos;s build the next f(x) <span className="together">together</span>
          </h2>
          <div className="lets-talk-subtitle">We are x</div>
          <div className="lets-talk-subsubtitle">and f(x) is everything we choose to become.</div>
          <a className="lets-talk-email" href="mailto:richag@mit.edu">richag@mit.edu</a>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkSection;
