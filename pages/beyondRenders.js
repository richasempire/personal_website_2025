import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const styles = {
  root: {
    '--bg-page': '#FDFBF7',
    '--bg-card': '#FFFFFF',
    '--text-main': '#111111',
    '--text-muted': '#666666',
    '--border-light': '#E0DDD6',
    '--border-dark': '#111111',
    '--shadow-subtle': '0 8px 32px rgba(0, 0, 0, 0.04)',
    '--font-stack': '"Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
  },
  body: {
    fontFamily: '"Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
    backgroundColor: '#FDFBF7',
    color: '#111111',
    lineHeight: '1.6',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '120px 32px',
  },
  slashHeading: {
    fontSize: '32px',
    fontWeight: '400',
    letterSpacing: '-0.02em',
    marginBottom: '64px',
  },
  labelTiny: {
    textTransform: 'uppercase',
    fontSize: '10px',
    fontWeight: '600',
    letterSpacing: '0.1em',
    color: '#666666',
    display: 'block',
    marginBottom: '4px',
  },
  textBody: {
    fontSize: '15px',
    color: '#666666',
  },
  textLead: {
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '1.4',
    color: '#111111',
  },
  valueLarge: {
    fontSize: '24px',
    fontWeight: '400',
    marginBottom: '8px',
  },
  sectionDivider: {
    height: '1px',
    backgroundColor: '#111111',
    width: '100%',
    margin: '120px 0',
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '64px',
    alignItems: 'start',
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
  },
  cardWhite: {
    backgroundColor: '#FFFFFF',
    padding: '32px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
    border: '1px solid transparent',
  },
  cardHr: {
    border: 'none',
    borderTop: '1px solid #E0DDD6',
    margin: '16px 0',
  },
  cardRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '13px',
    marginBottom: '8px',
  },
  metricLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '8px',
  },
  heroMedia: {
    width: '100%',
    aspectRatio: '16 / 9',
    backgroundColor: '#EFECE3',
    border: '1px solid #E0DDD6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '64px',
    color: '#999999',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  placeholder: {
    width: '100%',
    backgroundColor: '#EFECE3',
    border: '1px solid #E0DDD6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '24px 0',
    color: '#999999',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    textAlign: 'center',
    padding: '16px',
  },
  contextBlock: {
    marginBottom: '32px',
  },
  linkArrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: '600',
    color: '#111111',
    textDecoration: 'none',
    borderBottom: '1px solid #111111',
    paddingBottom: '4px',
    marginTop: '32px',
    cursor: 'pointer',
    marginRight: '24px',
  },
  accordionGroup: {
    marginBottom: '32px',
  },
  summary: {
    listStyle: 'none',
    cursor: 'pointer',
    paddingBottom: '8px',
    borderBottom: '1px solid #E0DDD6',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '16px',
  },
  summaryOpen: {
    borderBottomColor: '#111111',
  },
  accordionIcon: {
    fontSize: '18px',
    fontWeight: '300',
    color: '#666666',
  },
  detailsContent: {
    padding: '32px 0 16px 0',
    fontSize: '14px',
    color: '#666666',
    lineHeight: '1.7',
  },
  timelineStep: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: '#111111',
    color: '#FDFBF7',
    fontSize: '10px',
    fontWeight: '600',
    marginRight: '8px',
  },
  nextProject: {
    marginTop: '120px',
    paddingTop: '32px',
    borderTop: '1px solid #111111',
  },
  nextProjectLink: {
    display: 'block',
    textDecoration: 'none',
    color: '#111111',
    cursor: 'pointer',
  },
  nextProjectInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '8px',
  },
  nextProjectTitle: {
    fontSize: '32px',
    fontWeight: '400',
    letterSpacing: '-0.02em',
    transition: 'opacity 0.2s ease',
  },
  backBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#666666',
    textDecoration: 'none',
    marginBottom: '0',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: '0',
  },
  dotNav: {
    position: 'fixed',
    left: '32px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    zIndex: '100',
  },
  dotNavItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '10px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  dotLabel: {
    fontSize: '10px',
    fontWeight: '600',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#666666',
    whiteSpace: 'nowrap',
    transition: 'opacity 0.2s ease, transform 0.2s ease',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#E0DDD6',
    border: '1px solid #666666',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
    flexShrink: '0',
  },
  dotActive: {
    backgroundColor: '#111111',
    borderColor: '#111111',
    transform: 'scale(1.4)',
  },
};

const AccordionItem = ({ phase, title, children }) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div style={styles.accordionGroup}>
      <span style={styles.labelTiny}>
        Phase <span style={styles.timelineStep}>{phase}</span>
      </span>
      <div>
        <div
          style={{
            ...styles.summary,
            ...(open ? styles.summaryOpen : {}),
            ...(hovered && !open ? { borderBottomColor: '#111111' } : {}),
          }}
          onClick={() => setOpen(!open)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span>{title}</span>
          <span style={styles.accordionIcon}>{open ? '−' : '+'}</span>
        </div>
        {open && (
          <div style={styles.detailsContent}>{children}</div>
        )}
      </div>
    </div>
  );
};

const ImageGallery = ({ images, aspectRatio }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);

  const handleSelect = (idx) => {
    if (idx === activeIdx) return;
    setOpacity(0);
    setTimeout(() => {
      setActiveIdx(idx);
      setOpacity(1);
    }, 150);
  };

  useEffect(() => {
    if (!fullscreen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setFullscreen(false);
      if (e.key === 'ArrowRight') setActiveIdx((i) => Math.min(i + 1, images.length - 1));
      if (e.key === 'ArrowLeft') setActiveIdx((i) => Math.max(i - 1, 0));
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [fullscreen, images.length]);

  const active = images[activeIdx];

  return (
    <div>
      {fullscreen && (
        <div
          onClick={() => setFullscreen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setFullscreen(false); }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              background: 'none',
              border: 'none',
              color: '#ffffff',
              fontSize: '32px',
              cursor: 'pointer',
              lineHeight: 1,
              zIndex: 10000,
            }}
            aria-label="Close fullscreen"
          >
            &times;
          </button>

          {images.length > 1 && activeIdx > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setActiveIdx(activeIdx - 1); }}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.12)',
                border: 'none',
                color: '#fff',
                fontSize: '28px',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000,
              }}
              aria-label="Previous image"
            >
              &#8249;
            </button>
          )}

          {images.length > 1 && activeIdx < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setActiveIdx(activeIdx + 1); }}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.12)',
                border: 'none',
                color: '#fff',
                fontSize: '28px',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000,
              }}
              aria-label="Next image"
            >
              &#8250;
            </button>
          )}

          <img
            src={active.src}
            alt={active.label}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              cursor: 'default',
              borderRadius: '4px',
            }}
          />
          <div style={{ color: '#aaa', fontSize: '13px', marginTop: '12px', letterSpacing: '0.02em' }}>
            {active.label} &mdash; {activeIdx + 1} / {images.length}
          </div>
        </div>
      )}

      <div
        onClick={() => { if (active.src) setFullscreen(true); }}
        style={{
          width: '100%',
          aspectRatio: aspectRatio,
          backgroundColor: '#EFECE3',
          border: '1px solid #E0DDD6',
          overflow: 'hidden',
          position: 'relative',
          opacity: opacity,
          transition: 'opacity 0.3s ease',
          cursor: active.src ? 'zoom-in' : 'default',
        }}
      >
        {active.src ? (
          <img
            src={active.src}
            alt={active.label}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', backgroundColor: '#ffffff' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999999',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textAlign: 'center',
              padding: '16px',
            }}
          >
            {active.label}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
        {images.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => handleSelect(idx)}
            style={{
              width: '80px',
              height: '50px',
              backgroundColor: '#EFECE3',
              border: activeIdx === idx ? '2px solid #6b8f71' : '1px solid #E0DDD6',
              cursor: 'pointer',
              overflow: 'hidden',
              transition: 'border 0.2s ease',
            }}
          >
            {img.src ? (
              <img
                src={img.src}
                alt={img.label}
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', backgroundColor: '#ffffff' }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '8px',
                  color: '#999999',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  textAlign: 'center',
                  padding: '4px',
                }}
              >
                {idx + 1}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const DotNav = ({ activeSection }) => {
  const sections = [
    { id: 'section-hero', label: 'Intro' },
    { id: 'section-context', label: 'Gap' },
    { id: 'section-process', label: 'Planes' },
    { id: 'section-results', label: 'Impact' },
    { id: 'section-product', label: 'Product' },
    { id: 'section-reflection', label: 'Vision' },
  ];

  const [hoveredDot, setHoveredDot] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={styles.dotNav}>
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        const isHovered = hoveredDot === section.id;
        return (
          <div
            key={section.id}
            style={styles.dotNavItem}
            onClick={() => scrollToSection(section.id)}
            onMouseEnter={() => setHoveredDot(section.id)}
            onMouseLeave={() => setHoveredDot(null)}
          >
            <span
              style={{
                ...styles.dot,
                ...(isActive ? styles.dotActive : {}),
                ...(isHovered && !isActive ? { backgroundColor: '#111111', borderColor: '#111111' } : {}),
              }}
            />
            <span
              style={{
                ...styles.dotLabel,
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateX(0)' : 'translateX(-4px)',
              }}
            >
              {section.label}
            </span>
          </div>
        );
      })}
    </nav>
  );
};

const BeyondRendersPage = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('section-hero');
  const [nextProjectHovered, setNextProjectHovered] = useState(false);
  const [backBtnHovered, setBackBtnHovered] = useState(false);
  const [forwardBtnHovered, setForwardBtnHovered] = useState(false);

  const sectionRefs = {
    'section-hero': useRef(null),
    'section-context': useRef(null),
    'section-process': useRef(null),
    'section-results': useRef(null),
    'section-product': useRef(null),
    'section-reflection': useRef(null),
  };

  useEffect(() => {
    const observers = [];
    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.4 }
      );
      observer.observe(ref.current);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const globalStyle = document.createElement('style');
    globalStyle.textContent = `
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { margin: 0; padding: 0; }
    `;
    document.head.appendChild(globalStyle);
    return () => document.head.removeChild(globalStyle);
  }, []);

  return (
    <>
      <Head>
        <title>Beyond Renders - IIGenAI | Richa Gupta</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={styles.body}>
        <div style={styles.container}>

          {/* Back/Forward Nav */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <button
              style={{
                ...styles.backBtn,
                color: backBtnHovered ? '#111111' : '#666666',
              }}
              onMouseEnter={() => setBackBtnHovered(true)}
              onMouseLeave={() => setBackBtnHovered(false)}
              onClick={() => router.push('/#projects')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              style={{
                ...styles.backBtn,
                color: forwardBtnHovered ? '#111111' : '#666666',
              }}
              onMouseEnter={() => setForwardBtnHovered(true)}
              onMouseLeave={() => setForwardBtnHovered(false)}
              onClick={() => window.history.forward()}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* ── Section 1: Hero ── */}
          <header id="section-hero" ref={sectionRefs['section-hero']}>
            <span style={styles.labelTiny}>
              Published in HCII 2026 and CAAD Futures 2025 · Presented at BIG.AI @ MIT and McGill University AI Ethics Roundtable
            </span>
            <h1 style={styles.slashHeading}>/Beyond Renders</h1>
            <p style={styles.textLead}>
              From Speculation to Specification - a compound AI system that grounds generative interior design images with real-world material data, transforming AI from visualization tool to decision-support partner.
            </p>

            {/* Tag pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px' }}>
              {[
                'Post-Generative Grounding',
                'Compound AI',
                'Self-Consistency Sampling',
                'MCP Server',
                'Responsible AI',
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    border: '1px solid #E0DDD6',
                    fontSize: '11px',
                    letterSpacing: '0.05em',
                    color: '#666666',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hero media gallery */}
            <div style={{ marginTop: '64px' }}>
              <ImageGallery
                aspectRatio="16 / 9"
                images={[
                  { id: 'hero-1', label: 'IIGenAI Demo - Workspace with Material Tiles', src: '/images/beyondRenders/workspace-materials.png' },
                  { id: 'hero-2', label: 'IIGenAI Demo - Material Detail Drawer Open', src: '/images/beyondRenders/ai_image.jpg' },
                  { id: 'hero-3', label: 'IIGenAI Demo - Mask Editing Mode Active', src: '/images/beyondRenders/thesis-slides.jpg' },
                ]}
              />
            </div>

            {/* Stats row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '24px',
                paddingTop: '24px',
                borderTop: '1px solid #E0DDD6',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              {[
                { value: 'N=9', label: 'User Study' },
                { value: '3', label: 'Conditions' },
                { value: '< $0.03', label: 'Per Run' },
                { value: '312', label: 'Materials' },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center', flex: '1', minWidth: '80px' }}>
                  <div style={{ fontSize: '18px', fontWeight: '400', color: '#111111' }}>{stat.value}</div>
                  <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999999', marginTop: '2px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </header>

          <div style={styles.sectionDivider} />

          {/* ── Section 2: The Expectation Gap ── */}
          <section id="section-context" ref={sectionRefs['section-context']}>
            <h2 style={styles.slashHeading}>/The Expectation Gap</h2>
            <div style={styles.grid2}>

              {/* Left column */}
              <div>
                <div style={styles.contextBlock}>
                  <span style={styles.labelTiny}>The Core Problem</span>
                  <p style={{ ...styles.textBody, marginTop: '8px' }}>
                    Generative AI tools produce stunning interior renders in seconds. But a photorealistic &lsquo;stone wall&rsquo; could be faux wallpaper, MDF panels, ceramic tiles, or actual stone masonry - each with different cost, carbon footprint, and structural requirements. The most creative phase of design is completely disconnected from the most impactful data.
                  </p>
                </div>

                {/* Blockquote */}
                <blockquote
                  style={{
                    borderLeft: '3px solid #6b8f71',
                    paddingLeft: '20px',
                    margin: '32px 0',
                    fontStyle: 'italic',
                    color: '#666666',
                    fontSize: '15px',
                    lineHeight: '1.6',
                  }}
                >
                  &ldquo;I conceptually want lower-carbon designs but when iterating with Midjourney I have zero material data.&rdquo;
                  <footer style={{ marginTop: '8px', fontStyle: 'normal', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999999' }}>
                    - Practicing architect, preliminary interviews
                  </footer>
                </blockquote>
              </div>

              {/* Right column */}
              <div>
                <span style={styles.labelTiny}>Three Paradigms</span>

                {/* Card 1 */}
                <div
                  style={{
                    padding: '20px 24px',
                    border: '1px solid #E0DDD6',
                    marginTop: '12px',
                    marginBottom: '12px',
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#111111', marginBottom: '6px' }}>
                    Pre-Generative
                  </div>
                  <p style={{ fontSize: '13px', color: '#666666', lineHeight: '1.6' }}>
                    Prompt engineering, ControlNet, RAG - constrains exploration before the designer starts.
                  </p>
                </div>

                {/* Card 2 */}
                <div
                  style={{
                    padding: '20px 24px',
                    border: '1px solid #E0DDD6',
                    marginBottom: '12px',
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#111111', marginBottom: '6px' }}>
                    During-Generation
                  </div>
                  <p style={{ fontSize: '13px', color: '#666666', lineHeight: '1.6' }}>
                    Fine-tuning, model modifications - requires 10K+ examples, weeks of GPU time, and produces static knowledge.
                  </p>
                </div>

                {/* Card 3 - highlighted */}
                <div
                  style={{
                    padding: '20px 24px',
                    border: '1px solid #E0DDD6',
                    borderLeft: '3px solid #6b8f71',
                    marginBottom: '24px',
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#111111', marginBottom: '6px' }}>
                    Post-Generative (IIGenAI)
                  </div>
                  <p style={{ fontSize: '13px', color: '#666666', lineHeight: '1.6' }}>
                    Validate AFTER generation - preserves creative freedom, zero retraining, modular updates.
                  </p>
                </div>

                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#111111',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  Visual Output + Domain Knowledge = Actionable Insights
                </p>
              </div>

            </div>
          </section>

          <div style={styles.sectionDivider} />

          {/* ── Section 3: Three Computational Planes ── */}
          <section id="section-process" ref={sectionRefs['section-process']}>
            <h2 style={styles.slashHeading}>/Three Computational Planes</h2>
            <div style={styles.grid2}>

              {/* Left column */}
              <div>
                <span style={styles.labelTiny}>Architecture</span>
                <p style={{ ...styles.textLead, fontSize: '20px', marginTop: '8px', marginBottom: '24px' }}>
                  IIGenAI operates across three planes: the Interactive Plane captures user intent, the Inference Plane runs the AI pipeline, and the Grounding Plane validates against real-world databases.
                </p>

                {/* Architecture diagram gallery */}
                <ImageGallery
                  aspectRatio="4 / 3"
                  images={[
                    { id: 'arch-1', label: 'Architecture Diagram - Three Computational Planes', src: '/images/beyondRenders/three-planes.png' },
                    { id: 'arch-2', label: 'Pipeline Flow - Five Step Process', src: '/images/beyondRenders/pipeline-flow.png' },
                  ]}
                />

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0', marginTop: '8px' }}>
                  <a style={styles.linkArrow} href="#" onClick={(e) => e.preventDefault()}>
                    View on GitHub →
                  </a>
                  <a style={{ ...styles.linkArrow, marginLeft: '0' }} href="#" onClick={(e) => e.preventDefault()}>
                    Read the Paper →
                  </a>
                </div>
              </div>

              {/* Right column - accordion */}
              <div>
                <AccordionItem phase="1" title="Image Generation (gpt-image-1)">
                  <p>
                    Designer enters a text prompt with optional room type (office, living room, patient room, or free-flowing). The orchestrator sends it to OpenAI&apos;s gpt-image-1 via the Responses API. For subsequent iterations, previous_response_id maintains scene continuity - the model edits the existing scene rather than creating a new one. Mask-based editing via the Images Edit API allows surgical region replacement. All images are 1536&times;1024 landscape.
                  </p>
                  <div style={{ ...styles.placeholder, aspectRatio: '16 / 9', marginTop: '20px' }}>
                    Generated Interior - Scandinavian Living Room
                  </div>
                </AccordionItem>

                <AccordionItem phase="2" title="Material Identification (5-Pass Self-Consistency)">
                  <p>
                    The image goes to GPT-4.1-mini for material identification. Instead of trusting one pass, 5 parallel passes run at temperature 0.7 using asyncio.gather. Frequency-based aggregation yields calibrated confidence: a material appearing in 4 of 5 passes = 0.8 confidence. This addresses the fundamental problem of asking a non-deterministic model for deterministic answers. Wall-clock time equals one pass.
                  </p>
                  <div style={{ ...styles.placeholder, aspectRatio: '16 / 9', marginTop: '20px' }}>
                    Self-Consistency Sampling - 5 Passes Diagram
                  </div>
                </AccordionItem>

                <AccordionItem phase="3" title="Chain-of-Thought Retry (o4-mini)">
                  <p>
                    Materials in the uncertainty band (0.4–0.6 confidence) receive targeted analysis from o4-mini, a reasoning model. Step-by-step evaluation of texture, color, and surface quality. Confidence can only increase - we never penalize uncertain materials further. This matches model capability to cognitive complexity: bulk identification uses a fast model, careful analysis uses a reasoning model.
                  </p>
                </AccordionItem>

                <AccordionItem phase="4" title="CO₂e Grounding (ICE + Material2050)">
                  <p>
                    Verified materials are matched against the ICE Database V4.1 (312 materials, 24 categories, stored as local JSON) using fuzzy string matching to handle VLM naming variations. Material2050 Open API serves as fallback with richer product-level data. Each grounded material receives a CO₂e value with units. An MCP server exposes the same database as tools any AI agent can discover - Claude Desktop, partner tools, or future integrations can use the grounding layer directly.
                  </p>
                  <div style={{ ...styles.placeholder, aspectRatio: '4 / 3', marginTop: '20px' }}>
                    Material Card with CO₂e Data
                  </div>
                </AccordionItem>

                <AccordionItem phase="5" title="Confidence & Transparency UX">
                  <p>
                    The UI communicates AI confidence through progressive disclosure. Level 1: monochrome icons on tiles (checkmark = verified, ? = uncertain, ! = low confidence). Level 2: tooltip shows &ldquo;Model is X% confident&rdquo; on hover. Level 3: detail drawer shows &ldquo;Identified in X of 5 passes&rdquo; with full grounding data. Traffic-light colors were deliberately removed - in a sustainability context, green/red implies environmental judgment, not AI certainty.
                  </p>
                  <div style={{ ...styles.placeholder, aspectRatio: '16 / 9', marginTop: '20px' }}>
                    Material Tiles with Confidence Icons
                  </div>
                </AccordionItem>
              </div>

            </div>
          </section>

          <div style={styles.sectionDivider} />

          {/* ── Section 4: Research Impact ── */}
          <section id="section-results" ref={sectionRefs['section-results']}>
            <h2 style={styles.slashHeading}>/Research Impact</h2>
            <div style={styles.grid3}>

              {/* Card 1 */}
              <div style={styles.cardWhite}>
                <div style={styles.metricLabel}>
                  <span style={styles.labelTiny}>Behavioral Shift</span>
                </div>
                <div style={styles.valueLarge}>5–10% → 100%</div>
                <p style={{ ...styles.textBody, fontSize: '13px' }}>
                  Sustainability consideration in design decisions. Baseline designers focused purely on aesthetics. With grounding, every participant explicitly addressed environmental impact using material-specific language like &ldquo;rammed earth,&rdquo; &ldquo;mass timber,&rdquo; and &ldquo;low-carbon substitutes.&rdquo;
                </p>
                <hr style={styles.cardHr} />
                <div style={styles.cardRow}>
                  <span>Keyword shift</span>
                  <span>Aesthetic → Material-specific</span>
                </div>
              </div>

              {/* Card 2 */}
              <div style={styles.cardWhite}>
                <div style={styles.metricLabel}>
                  <span style={styles.labelTiny}>Creative Exploration</span>
                </div>
                <div style={styles.valueLarge}>74 / 100</div>
                <p style={{ ...styles.textBody, fontSize: '13px' }}>
                  Creativity Support Index with grounding (vs 41.7 baseline). Counterintuitively, grounding INCREASED creative exploration. Designers used constraints deliberately and expressed intent more clearly. Satisfaction dropped to 50% - reflecting productive tension, not tool failure.
                </p>
                <hr style={styles.cardHr} />
                <div style={styles.cardRow}>
                  <span>Prompt divergence</span>
                  <span>0.92 → 0.83 cosine similarity</span>
                </div>
              </div>

              {/* Card 3 */}
              <div style={styles.cardWhite}>
                <div style={styles.metricLabel}>
                  <span style={styles.labelTiny}>System Performance</span>
                </div>
                <div style={styles.valueLarge}>&lt; $0.03</div>
                <p style={{ ...styles.textBody, fontSize: '13px' }}>
                  Cost per full pipeline cycle. Image generation (~$0.015) + 5-pass VLM identification (~$0.008) + CoT retry (~$0.003) + grounding ($0). Compare: fine-tuning costs thousands and weeks of GPU time. The architecture is model-agnostic - swap any component independently.
                </p>
                <hr style={styles.cardHr} />
                <div style={styles.cardRow}>
                  <span>ICE Database</span>
                  <span>312 materials, 24 categories</span>
                </div>
              </div>

            </div>

            {/* Full-width blockquote */}
            <blockquote
              style={{
                borderLeft: '3px solid #6b8f71',
                paddingLeft: '24px',
                margin: '64px 0 0 0',
                fontStyle: 'italic',
                color: '#666666',
                fontSize: '18px',
                lineHeight: '1.6',
                maxWidth: '800px',
              }}
            >
              &ldquo;Satisfaction dropped because designers went from optimizing one thing - aesthetics - to balancing aesthetics against environmental impact. That tension is uncomfortable, and that&apos;s exactly what we want. The 50% tells us grounding is working.&rdquo;
            </blockquote>
          </section>

          <div style={styles.sectionDivider} />

          {/* ── Section 5: Product Thinking ── */}
          <section id="section-product" ref={sectionRefs['section-product']}>
            <h2 style={styles.slashHeading}>/Product Thinking</h2>
            <p style={{ ...styles.textLead, marginBottom: '64px', maxWidth: '720px' }}>
              &ldquo;IIGenAI is spell-check for buildability. It does not stop you from imagining - it tells you what is real.&rdquo;
            </p>

            <div style={styles.grid2}>

              {/* Left column - Three Layer Product */}
              <div>
                <span style={styles.labelTiny}>The Three Layer Product</span>

                {/* Layer 1 */}
                <div
                  style={{
                    padding: '20px 24px',
                    border: '1px solid #E0DDD6',
                    marginTop: '12px',
                    marginBottom: '12px',
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999999', marginBottom: '8px' }}>
                    Layer 1 - Generate (The Hook)
                  </div>
                  <p style={{ fontSize: '13px', color: '#666666', lineHeight: '1.6' }}>
                    Designer types a prompt, gets a beautiful interior in seconds. This is table stakes - Midjourney and DALL-E already do this. The experience feels familiar and fast.
                  </p>
                </div>

                {/* Layer 2 - highlighted */}
                <div
                  style={{
                    padding: '20px 24px',
                    border: '1px solid #E0DDD6',
                    borderLeft: '3px solid #6b8f71',
                    marginBottom: '12px',
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b8f71', marginBottom: '8px' }}>
                    Layer 2 - Ground (The Value)
                  </div>
                  <p style={{ fontSize: '13px', color: '#666666', lineHeight: '1.6' }}>
                    Every material in that image is automatically identified with confidence scores and CO₂e data from real engineering databases. This is what no other tool does. This is the moat.
                  </p>
                </div>

                {/* Layer 3 */}
                <div
                  style={{
                    padding: '20px 24px',
                    border: '1px solid #E0DDD6',
                    marginBottom: '0',
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999999', marginBottom: '8px' }}>
                    Layer 3 - Iterate (The Retention Loop)
                  </div>
                  <p style={{ fontSize: '13px', color: '#666666', lineHeight: '1.6' }}>
                    Designer sees concrete at high carbon, types &ldquo;replace with rammed earth,&rdquo; and the system edits the same image. The CO₂e drops. They learn, they explore, they come back.
                  </p>
                </div>
              </div>

              {/* Right column - Metrics as Product Validation */}
              <div>
                <span style={styles.labelTiny}>Metrics as Product Validation</span>
                <div style={{ marginTop: '12px' }}>
                  {[
                    { metric: 'Activation', finding: '100% engaged with sustainability data (vs 5–10% baseline)' },
                    { metric: 'Engagement Depth', finding: 'Lexical diversity 0.38 → 0.42 - richer, more specific prompts' },
                    { metric: 'Exploration', finding: 'Prompt divergence increased - more solution space explored' },
                    { metric: 'Creative Support', finding: 'CSI rose from 41.7 → 74 - tool made designers MORE creative' },
                    { metric: 'Productive Friction', finding: 'Satisfaction dropped to 50% - users hit real constraints for the first time' },
                  ].map((row) => (
                    <div key={row.metric} style={{ ...styles.cardRow, borderBottom: '1px solid #E0DDD6', padding: '16px 0', marginBottom: '0', alignItems: 'flex-start', gap: '16px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#111111', flexShrink: 0, minWidth: '120px' }}>
                        {row.metric}
                      </span>
                      <span style={{ fontSize: '13px', color: '#666666', lineHeight: '1.5', textAlign: 'right' }}>
                        {row.finding}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Full-width Platform Play */}
            <div style={{ marginTop: '64px' }}>
              <span style={styles.labelTiny}>The Platform Play</span>
              <p style={{ ...styles.textBody, marginTop: '8px', marginBottom: '32px', maxWidth: '720px' }}>
                The grounding layer is a platform, not a feature. Swap the database and you get a new product.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '16px',
                  marginBottom: '32px',
                }}
              >
                {[
                  'Architecture + ICE Database = Sustainable design tool',
                  'Museums + Provenance DB = Verified cultural curation',
                  'Product Design + Manufacturing DB = Feasibility checker',
                  'Film Production + Cost DB = Set design budgeting',
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: '20px',
                      border: '1px solid #E0DDD6',
                      fontSize: '13px',
                      color: '#666666',
                      lineHeight: '1.6',
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p style={{ fontSize: '13px', color: '#666666', lineHeight: '1.7', maxWidth: '720px' }}>
                The MCP server means any AI agent - including Claude - can plug into the grounding layer without rebuilding the pipeline.
              </p>
            </div>
          </section>

          <div style={styles.sectionDivider} />

          {/* ── Section 6: Vision & Next Steps ── */}
          <section id="section-reflection" ref={sectionRefs['section-reflection']}>
            <h2 style={styles.slashHeading}>/Vision &amp; Next Steps</h2>
            <div style={styles.grid2}>

              {/* Left column */}
              <div>
                <div style={styles.contextBlock}>
                  <span style={styles.labelTiny}>What I Learned</span>
                  <p style={{ ...styles.textBody, marginTop: '8px' }}>
                    Post-generative grounding is a responsible AI strategy applicable far beyond architecture. The pattern - Visual Output + Domain Knowledge = Actionable Insights - generalizes to any creative domain where AI generates compelling outputs that lack domain-specific verification. The key insight is timing: validate after generation, not before. This preserves creative freedom while adding real-world accountability.
                  </p>
                </div>

                <div style={styles.contextBlock}>
                  <span style={styles.labelTiny}>Built With</span>
                  <p style={{ fontSize: '12px', color: '#666666', lineHeight: '1.8', marginTop: '8px' }}>
                    Claude Code (Sonnet 4.6) · Next.js 14 · FastAPI · OpenAI gpt-image-1 · GPT-4.1-mini · o4-mini · Anthropic MCP SDK · ICE Database V4.1 · Material2050 API
                  </p>
                </div>

                <div style={{ marginTop: '48px' }}>
                  <span style={styles.labelTiny}>The Pattern Generalizes</span>
                  <p style={{ ...styles.textBody, marginTop: '8px', fontSize: '13px', lineHeight: '1.8' }}>
                    Product design + manufacturing databases = tooling feasibility.
                    <br />Marketing + brand guidelines = compliance scores.
                    <br />Museums + provenance databases = verified cultural context.
                    <br />E-commerce + sourcing APIs = supplier availability.
                  </p>
                </div>
              </div>

              {/* Right column */}
              <div>
                <span style={styles.labelTiny}>Future Vision</span>
                <div style={{ marginTop: '16px' }}>
                  {[
                    {
                      label: 'Canvas Workspace',
                      desc: 'Miro-style infinite canvas with SAM segmentation for automatic material region detection and spatial annotations.',
                    },
                    {
                      label: 'Multi-Objective Optimization',
                      desc: 'Interactive sliders for CO₂e, cost, durability, acoustics - designers define their own utility function.',
                    },
                    {
                      label: 'Product Recognition',
                      desc: 'Extend from materials to furniture and fixtures, linked to real supplier SKUs and product databases.',
                    },
                    {
                      label: 'Multi-Modal Input',
                      desc: 'Sketch upload, voice commands, and 3D model integration for a synergistic design dialogue.',
                    },
                    {
                      label: 'BIM Integration',
                      desc: 'Export grounded material data to Rhino/Revit, bridging generative AI and parametric design workflows.',
                    },
                  ].map((item, i) => (
                    <div
                      key={item.label}
                      style={{
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        borderBottom: '1px solid #E0DDD6',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: '600',
                            color: '#999999',
                            minWidth: '16px',
                            paddingTop: '2px',
                          }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: '600', color: '#111111', marginBottom: '4px' }}>
                            {item.label}
                          </div>
                          <p style={{ fontSize: '13px', color: '#666666', lineHeight: '1.6' }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ── Next Project ── */}
          <div style={styles.nextProject}>
            <a
              style={styles.nextProjectLink}
              href="#"
              onClick={(e) => e.preventDefault()}
              onMouseEnter={() => setNextProjectHovered(true)}
              onMouseLeave={() => setNextProjectHovered(false)}
            >
              <span style={styles.labelTiny}>Next Project</span>
              <div style={styles.nextProjectInner}>
                <div>
                  <span
                    style={{
                      ...styles.nextProjectTitle,
                      opacity: nextProjectHovered ? 0.6 : 1,
                    }}
                  >
                    /Text to Robotic Assembly
                  </span>
                  <p style={{ fontSize: '13px', color: '#666666', marginTop: '6px' }}>
                    NeurIPS 2025 - Multi-component object assembly using 3D generative AI and vision-language models
                  </p>
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transition: 'transform 0.2s ease',
                    transform: nextProjectHovered ? 'translateX(6px)' : 'translateX(0)',
                    color: nextProjectHovered ? '#111111' : '#666666',
                    flexShrink: 0,
                  }}
                >
                  <path
                    d="M4 10H16M16 10L11 5M16 10L11 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>

        </div>

        {/* Dot Navigation */}
        <DotNav activeSection={activeSection} />
      </div>
    </>
  );
};

export default BeyondRendersPage;
