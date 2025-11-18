import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ContentModal from "../components/popup/ContentModal";
import ImageGallery from "../components/popup/ImageGallery";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import { cursor, stickyNav } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import Preloader from "./Preloader";

const ModeToggle = () => {
  const router = useRouter();
  const [mode, setMode] = useState('human');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Detect mode from URL
    const isAIRoute = router.pathname.startsWith('/ai');
    const urlMode = isAIRoute ? 'machine' : 'human';
    
    setMode(urlMode);
    document.body.setAttribute('data-mode', urlMode);
    window.localStorage.setItem('siteMode', urlMode);
  }, [router.pathname]);

  const toggleMode = () => {
    const next = mode === 'human' ? 'machine' : 'human';
    
    // Save current scroll position before navigation
    if (typeof window !== 'undefined') {
      const scrollPosition = window.scrollY || window.pageYOffset;
      window.localStorage.setItem('scrollPosition', scrollPosition.toString());
    }
    
    // Determine target route
    let targetRoute;
    if (next === 'machine') {
      // Switch to /ai/ route
      if (router.pathname === '/') {
        targetRoute = '/ai';
      } else {
        targetRoute = `/ai${router.pathname}`;
      }
    } else {
      // Switch to human route (remove /ai prefix)
      targetRoute = router.pathname.replace('/ai', '') || '/';
    }
    
    // Save preference
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('siteMode', next);
    }
    
    // Use View Transitions API if available for smooth transition
    if (typeof document !== 'undefined' && document.startViewTransition) {
      document.startViewTransition(() => {
        router.push(targetRoute);
      });
    } else {
      router.push(targetRoute);
    }
  };

  return (
    <button className={`mode-toggle ${mode}`} onClick={toggleMode} aria-label="Toggle Human/Machine mode">
      <span className="label">Human</span>
      <span className={`switch`} />
      <span className="label">Machine</span>
    </button>
  );
};

const Layout = ({ children, noHeader }) => {
  const router = useRouter();
  const isAIRoute = router.pathname.startsWith('/ai');
  
  useEffect(() => {
    cursor();
  }, []);
  
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  }, []);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);
  
  // Always reset scroll to top on new route to avoid random offsets
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);
  
  // Auto-redirect based on saved preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const savedMode = window.localStorage.getItem('siteMode');
    const isAIRoute = router.pathname.startsWith('/ai');
    
    // If saved mode doesn't match current route, redirect
    if (savedMode === 'machine' && !isAIRoute) {
      const targetRoute = router.pathname === '/' ? '/ai' : `/ai${router.pathname}`;
      router.replace(targetRoute);
    } else if (savedMode === 'human' && isAIRoute) {
      const targetRoute = router.pathname.replace('/ai', '') || '/';
      router.replace(targetRoute);
    }
  }, []);

  return (
    <Fragment>
    <VideoPopup />
      <VideoPopup />
      <ImageView />
      <ImageGallery />
      <ContentModal />
      {/* Only show preloader on human mode pages */}
      {!isAIRoute && <Preloader />}
      
      {/* Website Under Construction Popup - Hidden */}
      {/* <div className="construction-popup" id="construction-popup">
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
      </div> */}
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
      
      {/* Mode Toggle - Fixed at bottom center */}
      <div className="mode-toggle-container">
        <ModeToggle />
      </div>
    </Fragment>
  );
};
export default Layout;
