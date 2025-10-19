import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Layout from "../src/layout/Layout";
import HeroIntro from "../src/components/HeroIntro";
import AboutSection from "../src/components/AboutSection";
import CollaborateSection from "../src/components/CollaborateSection";
import ProjectsSection from "../src/components/ProjectsSection";
import LetsTalkSection from "../src/components/LetsTalkSection";
import { gsap } from "gsap";


const Index = () => {
  return (
    <Layout>
      <div className="section started" id="section-started">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <HeroIntro />
            </div>
          </div>
        </div>
      </div>
      
      <AboutSection />
      <ProjectsSection />
      <CollaborateSection />
      <LetsTalkSection />
    </Layout>
  );
};
export default Index;
