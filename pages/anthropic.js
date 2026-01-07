import Head from 'next/head';

const AnthropicPage = () => {
  return (
    <>
      <Head>
        <title>Anthropic: AI Safety Governance Case Study</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Research case study on Anthropic's AI safety governance and trust architecture" />
      </Head>

      <style jsx>{`
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .anthropic-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 120px 60px;
          background: #ffffff;
        }

        .anthropic-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .anthropic-title {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
          font-size: 56px;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          color: #1d1d1f;
          line-height: 1.1;
        }

        .anthropic-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
          font-size: 21px;
          font-weight: 400;
          color: #86868b;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .pdf-container {
          width: 100%;
          height: calc(100vh - 300px);
          min-height: 800px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
          background: #f5f5f7;
        }

        .pdf-container iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .download-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          padding: 12px 24px;
          background: #1d1d1f;
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .download-link:hover {
          background: #2d2d2f;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 1024px) {
          .anthropic-container {
            padding: 100px 40px;
          }
        }

        @media (max-width: 768px) {
          .anthropic-container {
            padding: 80px 24px;
          }

          .anthropic-title {
            font-size: 40px;
          }

          .anthropic-subtitle {
            font-size: 19px;
          }

          .pdf-container {
            height: calc(100vh - 250px);
            min-height: 600px;
          }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#ffffff' }}>
        <div className="anthropic-container">
          <div className="anthropic-header">
            <h1 className="anthropic-title">Anthropic: AI Safety Governance Case Study</h1>
            <p className="anthropic-subtitle">
              A comprehensive analysis of Anthropic&apos;s trust-building framework, governance architecture, 
              and the tensions between safety-first branding and competitive pressures in frontier AI.
            </p>
            <a 
              href="/pdf/HBS_BTOPaperFinal.pdf" 
              download 
              className="download-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download PDF
            </a>
          </div>

          <div className="pdf-container">
            <iframe
              src="/pdf/HBS_BTOPaperFinal.pdf"
              title="Anthropic AI Safety Governance Case Study"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnthropicPage;

