import { useEffect } from "react";

const MachinePlusPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.setAttribute("data-mode", "machine");
      window.localStorage.setItem("siteMode", "machine");
    }
  }, []);

  return (
    <div className="machine-page">
      <div className="machine-header">
        <h1>PLUS AI</h1>
        <p className="machine-meta">Product • Entrepreneurship • 2024</p>
      </div>

      <div className="machine-section">
        <h2>## Purpose</h2>
        <p>
          Iterate at the speed of thought. PLUS is the product operating system I
          designed for capital teams, architects, and founders who need to make
          confident decisions with live context instead of static decks.
        </p>
      </div>

      <div className="machine-section">
        <h2>## Core Assertions</h2>
        <div className="machine-list">
          <p>| Creativity and finance can co-exist in a single workspace.</p>
          <p>| AI should translate messy design research into investor-grade insight.</p>
          <p>| Every artifact (notes, quotes, videos, comps) stays linked to the decision it influenced.</p>
        </div>
      </div>

      <div className="machine-section">
        <h2>## Stack</h2>
        <div className="machine-list">
          <p>| Frontend — Next.js, Framer Motion, custom WebGL visualizers.</p>
          <p>| Data — Supabase + Pinecone vector store for concept recall.</p>
          <p>| AI — GPT-4 + fine-tuned assistants for classification, clustering, and tone rewriting.</p>
          <p>| Integrations — Notion, Figma, Linear, capital allocation spreadsheets.</p>
        </div>
      </div>

      <div className="machine-section">
        <h2>## Operating Model</h2>
        <div className="machine-table">
          <table>
            <thead>
              <tr>
                <th>Module</th>
                <th>Intent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Signal Capture</td>
                <td>Clip notes, sketches, or conversations; auto-tag by stage and risk.</td>
              </tr>
              <tr>
                <td>Decision Train</td>
                <td>Map experiments → capital asks, expose blockers, generate next actions.</td>
              </tr>
              <tr>
                <td>Investor Surface</td>
                <td>Share living dossiers instead of PDFs; versioning stays transparent.</td>
              </tr>
              <tr>
                <td>Talent Pulse</td>
                <td>Track team bandwidth, recruiting signals, and partner availability.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="machine-section">
        <h2>## Differentiators</h2>
        <div className="machine-list">
          <p>| Structured prompts teach teams how to ask better questions, not just get answers.</p>
          <p>| Human-in-the-loop review on every AI summary to keep nuance from disappearing.</p>
          <p>| Scenario composer lets strategy, design, and finance drag the same levers.</p>
          <p>| Export layer turns any view into a board-ready narrative in seconds.</p>
        </div>
      </div>

      <div className="machine-section">
        <h2>## Current Status</h2>
        <p>
          Internal alpha is live with two venture studios. The next milestone is expanding
          the scenario composer to support hardware programs and attaching a pricing engine.
        </p>
        <div className="machine-list">
          <p>| KPI — time-to-decision down 42% across pilot teams.</p>
          <p>| KPI — 93% of captured research reused at least once within a sprint.</p>
        </div>
      </div>

      <div className="machine-section">
        <h2>## Join the Future of Design. Now.</h2>
        <p>
          <a
            href="mailto:richag@mit.edu"
            className="machine-link"
          >
            richag@mit.edu
          </a>
        </p>
      </div>
    </div>
  );
};

export default MachinePlusPage;

