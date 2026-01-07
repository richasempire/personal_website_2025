const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="copy">
      </div>
      <div className="soc-box">
        <div className="soc">
          <a href="#" className="footer-name">Richa Gupta</a>
          <button onClick={() => scrollToSection('projects')} className="button-scroll">Projects </button>
          <button onClick={() => scrollToSection('experience')} className="button-scroll">Experience   </button>
          <button onClick={() => scrollToSection('education')} className="button-scroll">Education   </button>
          <button onClick={() => scrollToSection('publications')} className="button-scroll">Publications   </button>
          <button onClick={() => scrollToSection('talks')} className="button-scroll">Talks</button>
          
          <a href="mailto:richag@mit.edu" className="footer-email">
            richag@mit.edu
          </a>
          <a href="/pdf/resume_Richa_Gupta_s.pdf" target="_blank" rel="noopener noreferrer" className="footer-nav-button footer-download-cv">
            <img src="/images/download_cv.svg" alt="Download CV" className="footer-cv-icon" />
          </a>
         
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/richa-gupta-hi">
            <span className="icon fab fa-linkedin" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/richasempire">
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://scholar.google.com/citations?user=YUHj9zYAAAAJ&hl=en">
            <span className="icon fas fa-graduation-cap" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
