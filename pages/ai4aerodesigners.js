import Head from 'next/head';

const AI4AeroDesignersPage = () => {
  return (
    <>
      <Head>
        <title>AI4AeroDesigners - Human-AI Interaction in Aerospace Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AI4AeroDesigners - Exploring human-AI interaction in aerospace design workflows" />
      </Head>

      <style jsx>{`
        .ai4aero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 40px;
        }

        .ai4aero-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .ai4aero-title {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #333;
        }

        .ai4aero-subtitle {
          font-size: 20px;
          color: #666;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .videos-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          margin-top: 40px;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          background: #000;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .video-label {
          text-align: center;
          margin-top: 20px;
          font-size: 18px;
          color: #666;
          font-weight: 500;
        }

        @media (min-width: 768px) {
          .videos-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .ai4aero-container {
            padding: 60px 20px;
          }

          .ai4aero-title {
            font-size: 36px;
          }

          .ai4aero-subtitle {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="ai4aero-container">
        <div className="ai4aero-header">
          <h1 className="ai4aero-title">AI4AeroDesigners</h1>
          <p className="ai4aero-subtitle">
            Exploring human-AI interaction in aerospace design workflows. This project investigates 
            how AI can enhance the design process for aerospace engineers and designers.
          </p>
        </div>

        <div className="videos-container">
          <div>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/B8Ju_DhJtw4"
                title="AI4AeroDesigners Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-label">Video 1</div>
          </div>

          <div>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/DJrymhfe2Zw"
                title="AI4AeroDesigners Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-label">Video 2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AI4AeroDesignersPage;

