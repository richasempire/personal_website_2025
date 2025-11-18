import { useEffect, useState, useRef } from "react";
import HeroIntro from "../src/components/HeroIntro";
import AboutSection from "../src/components/AboutSection";
import CollaborateSection from "../src/components/CollaborateSection";
import ProjectsSection from "../src/components/ProjectsSection";
import LetsTalkSection from "../src/components/LetsTalkSection";
import { gsap } from "gsap";


const Index = () => {
  return (
    <>
      <div className="section started" id="section-started">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <HeroIntro />
            </div>
          </div>
        </div>
      </div>
      
      {/* <AboutSection /> */}
      <ProjectsSection />
      {/* <CollaborateSection /> */}
      <LetsTalkSection />
    </>
  );
};
export default Index;
