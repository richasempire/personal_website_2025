import { useEffect } from "react";
import Layout from "../../src/layout/Layout";

const MachineShoreAIPage = () => {
  useEffect(() => {
    // Set machine mode on mount
    if (typeof window !== 'undefined') {
      document.body.setAttribute('data-mode', 'machine');
      window.localStorage.setItem('siteMode', 'machine');
    }
  }, []);

  return (
    <Layout>
      <div className="machine-page">
        <div className="machine-header">
          <h1>Shore.ai</h1>
          <p className="machine-meta">Product • AI & ML • 2024</p>
        </div>

        <div className="machine-section">
          <h2>## Overview</h2>
          <p>
            AI-powered career networking platform that connects professionals based on genuine compatibility
            rather than algorithmic matching. Built to address the disconnect between job seekers and
            opportunities in the modern professional landscape.
          </p>
        </div>

        <div className="machine-section">
          <h2>## Problem Statement</h2>
          <p>
            Traditional job platforms rely on keyword matching and resume parsing, missing the nuanced aspects
            of professional compatibility. Shore.ai bridges this gap by analyzing communication styles,
            work preferences, and career aspirations.
          </p>
        </div>

        <div className="machine-section">
          <h2>## Technical Stack</h2>
          <div className="machine-list">
            <p>| Frontend: React, Next.js, TailwindCSS</p>
            <p>| Backend: Node.js, Express</p>
            <p>| AI/ML: OpenAI GPT-4, Custom NLP models</p>
            <p>| Database: PostgreSQL, Redis</p>
            <p>| Infrastructure: AWS, Docker, Kubernetes</p>
          </div>
        </div>

        <div className="machine-section">
          <h2>## Market Analysis</h2>
          <div className="machine-table">
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TAM (Total Addressable Market)</td>
                  <td>148M users</td>
                  <td>Global workforce on digital platforms</td>
                </tr>
                <tr>
                  <td>SAM (Serviceable Addressable Market)</td>
                  <td>84M users</td>
                  <td>Gen Z & Millennials on LinkedIn in US</td>
                </tr>
                <tr>
                  <td>SOM (Serviceable Obtainable Market)</td>
                  <td>5M users</td>
                  <td>Early adopters in tech sector</td>
                </tr>
                <tr>
                  <td>Market Capture (Year 1)</td>
                  <td>12K users</td>
                  <td>0.24% of SOM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="machine-section">
          <h2>## Key Features</h2>
          <div className="machine-list">
            <p>### 1. AI-Powered Matching</p>
            <p>   • Natural language processing of user profiles</p>
            <p>   • Behavioral pattern analysis</p>
            <p>   • Real-time compatibility scoring</p>
            <p></p>
            <p>### 2. Smart Networking</p>
            <p>   • Contextual introduction suggestions</p>
            <p>   • Conversation starter recommendations</p>
            <p>   • Follow-up timing optimization</p>
            <p></p>
            <p>### 3. Career Insights</p>
            <p>   • Market trend analysis</p>
            <p>   • Skill gap identification</p>
            <p>   • Personalized learning paths</p>
          </div>
        </div>

        <div className="machine-section">
          <h2>## Development Timeline</h2>
          <div className="machine-list">
            <p>| Phase 1: Research & Design (2 months)</p>
            <p>| Phase 2: MVP Development (3 months)</p>
            <p>| Phase 3: Beta Testing (1 month)</p>
            <p>| Phase 4: Launch & Iteration (Ongoing)</p>
          </div>
        </div>

        <div className="machine-section">
          <h2>## Performance Metrics</h2>
          <div className="machine-table">
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Target</th>
                  <th>Current</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Match Accuracy</td>
                  <td>85%</td>
                  <td>78%</td>
                </tr>
                <tr>
                  <td>User Engagement Rate</td>
                  <td>60%</td>
                  <td>64%</td>
                </tr>
                <tr>
                  <td>Connection Success Rate</td>
                  <td>40%</td>
                  <td>42%</td>
                </tr>
                <tr>
                  <td>Average Response Time</td>
                  <td>&lt;200ms</td>
                  <td>180ms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="machine-section">
          <h2>## Links</h2>
          <div className="machine-list">
            <p>[GitHub Repository] (Private)</p>
            <p>[Product Demo] https://shore.ai/demo</p>
            <p>[Case Study] https://shore.ai/case-study</p>
            <p>[API Documentation] https://docs.shore.ai</p>
          </div>
        </div>

        <div className="machine-section">
          <p className="machine-footnote">
            * Market data as of 2024. All metrics subject to change based on user adoption and market conditions.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default MachineShoreAIPage;

