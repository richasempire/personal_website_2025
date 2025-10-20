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
    <VideoPopup />
      <VideoPopup />
      <ImageView />
      <ImageGallery />
      <ContentModal />
      <Preloader />
      
      {/* Website Under Construction Popup */}
      <div className="construction-popup" id="construction-popup">
        <div className="construction-content">
          <div className="construction-icon">
            <div className="barrier-icon">
              <div className="barrier-top"></div>
              <div className="barrier-left"></div>
              <div className="barrier-right"></div>
              <div className="barrier-light"></div>
            </div>
          </div>
          <h2>Website Under Construction</h2>
          <p>This website is currently under construction. Check out my old website while I finish building this one!</p>
          <button className="construction-button" onClick={() => {
            window.open('https://richag.cargo.site/', '_blank');
          }}>
            Visit Current Portfolio
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
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
