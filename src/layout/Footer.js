const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: richag@mit.edu</p>
        <p>T: +1 (617)780-9005</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Socials</div>
        <div className="soc">
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
