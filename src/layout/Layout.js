import { Fragment, useEffect } from "react";
import ContentModal from "../components/popup/ContentModal";
import ImageGallery from "../components/popup/ImageGallery";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import { cursor, stickyNav } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import Preloader from "./Preloader";
const Layout = ({ children, noHeader }) => {
  useEffect(() => {
    cursor();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  }, []);

  return (
    <Fragment>
    {/* Work in Progress Notification */}
    <div style={{
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '10px',
  padding: '30px 40px',
  textAlign: 'center',
  zIndex: 10000,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  maxWidth: '800px',
  width: '90%',
  color: '#333',
  fontFamily: 'system-ui, -apple-system, sans-serif'
}}>
  <div style={{
    fontSize: '48px',
    marginBottom: '15px',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
  }}>
    🚧
  </div>
  
  <h2 style={{
    margin: '0 0 10px 0',
    fontSize: '24px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #89AE00, #6B8E00)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }}>
    Website Under Construction
  </h2>
  
  <p style={{
    margin: '0 0 20px 0',
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.5'
  }}>
    This website is currently under construction. 
    Check out my old website while I finish building this one!
  </p>
  
  <a 
    href="http://richag.cargo.site" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      display: 'inline-block',
      background: 'linear-gradient(135deg,rgb(213, 213, 213),rgb(61, 61, 61))',
      color: 'white',
      textDecoration: 'none',
      padding: '12px 24px',
      borderRadius: '25px',
      fontSize: '16px',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(137, 174, 0, 0.3)',
      border: 'none',
      cursor: 'pointer'
    }}
    onMouseOver={(e) => {
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = '0 6px 20px rgba(137, 174, 0, 0.4)';
    }}
    onMouseOut={(e) => {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 4px 15px rgba(137, 174, 0, 0.3)';
    }}
  >
    Visit Current Portfolio →
  </a>
</div>
    
    <VideoPopup />
      <VideoPopup />
      <ImageView />
      <ImageGallery />
      <ContentModal />
      <Preloader />
      {/* Container */}
      <div className="container">
        {/* Header */}
        {!noHeader && <Header />}

        {/* Wrapper */}
        <div className="wrapper">
          {/* Section Started */}
          {children}
        </div>
        {/* Footer */}
        <Footer />
        {/* Lines */}
        <div className="lines">
          <div className="content">
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Layout;
