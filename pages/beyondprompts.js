import { useState } from 'react';
import Head from 'next/head';

const BeyondPromptsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageList, setSelectedImageList] = useState([]);

  // Array of all image paths
  const images = Array.from({ length: 15 }, (_, i) => `/images/beyondprompts/${i + 1}.png`);

  const openModal = (imageIndex, imageList = images) => {
    setSelectedImage(imageIndex);
    setSelectedImageList(imageList);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageList([]);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    if (selectedImage === null || selectedImageList.length === 0) return;
    const currentIndex = selectedImageList.findIndex(img => img === images[selectedImage]);
    if (direction === 'next') {
      const nextIndex = currentIndex === selectedImageList.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(images.indexOf(selectedImageList[nextIndex]));
    } else {
      const prevIndex = currentIndex === 0 ? selectedImageList.length - 1 : currentIndex - 1;
      setSelectedImage(images.indexOf(selectedImageList[prevIndex]));
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (selectedImage === null) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') navigateImage('next');
    if (e.key === 'ArrowLeft') navigateImage('prev');
  };

  // Gallery images (8, 9, 10, 11, 12, 13, 15)
  const galleryImages = [images[7], images[8], images[9], images[10], images[11], images[12], images[14]];

  return (
    <>
      <Head>
        <title>Beyond Prompts - Research on Human-AI Interaction</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Research on human-AI interaction beyond traditional prompting" />
      </Head>

      <style jsx global>{`
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        body {
          background: #ffffff;
        }
      `}</style>

      <style jsx>{`
        .beyondprompts-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 60px;
          background: #ffffff;
        }

        .beyondprompts-header {
          text-align: center;
          margin-bottom: 140px;
        }

        .beyondprompts-title {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
          font-size: 56px;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          color: #1d1d1f;
          line-height: 1.1;
        }

        .beyondprompts-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
          font-size: 21px;
          font-weight: 400;
          color: #86868b;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .section {
          margin-bottom: 120px;
        }

        .section:last-child {
          margin-bottom: 0;
        }

        .section-heading {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
          font-size: 28px;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin-bottom: 48px;
          color: #1d1d1f;
          line-height: 1.2;
        }

        .section-text {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
          font-size: 17px;
          line-height: 1.7;
          color: #1d1d1f;
          margin-bottom: 48px;
        }

        .research-problem {
          background: #f5f5f7;
          padding: 48px 56px;
          border-radius: 18px;
          margin-top: 48px;
          margin-bottom: 0;
        }

        .research-problem h3 {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
          font-size: 22px;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin-bottom: 24px;
          color: #1d1d1f;
        }

        .research-problem ol {
          margin: 0;
          padding-left: 24px;
          list-style: none;
          counter-reset: item;
        }

        .research-problem li {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
          font-size: 17px;
          line-height: 1.7;
          margin-bottom: 20px;
          color: #1d1d1f;
          counter-increment: item;
          position: relative;
          padding-left: 32px;
        }

        .research-problem li:before {
          content: counter(item) '.';
          position: absolute;
          left: 0;
          font-weight: 600;
          color: #86868b;
        }

        .research-problem li:last-child {
          margin-bottom: 0;
        }

        .images-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
          margin-bottom: 0;
        }

        .image-single {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }

        .image-item {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border-radius: 12px;
          background: #f5f5f7;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        .image-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        }

        .image-item img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .image-item:hover img {
          transform: scale(1.02);
        }

        .beyondprompts-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 0;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .modal-content {
          position: relative;
          max-width: 95vw;
          max-height: 95vh;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: scaleIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .modal-image {
          max-width: 100%;
          max-height: 95vh;
          object-fit: contain;
          border-radius: 8px;
        }

        .modal-close {
          position: absolute;
          top: 40px;
          right: 40px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 24px;
          font-weight: 300;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10000;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 20px;
          font-weight: 300;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10000;
        }

        .modal-nav:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-50%) scale(1.1);
        }

        .modal-nav.prev {
          left: 40px;
        }

        .modal-nav.next {
          right: 40px;
        }

        .modal-counter {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
        }

        @media (max-width: 1024px) {
          .beyondprompts-container {
            padding: 100px 40px;
          }
        }

        @media (max-width: 768px) {
          .beyondprompts-container {
            padding: 80px 24px;
          }

          .beyondprompts-title {
            font-size: 40px;
          }

          .beyondprompts-subtitle {
            font-size: 19px;
          }

          .beyondprompts-header {
            margin-bottom: 100px;
          }

          .section {
            margin-bottom: 100px;
          }

          .section-heading {
            font-size: 24px;
            margin-bottom: 40px;
          }

          .images-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .research-problem {
            padding: 32px 24px;
          }

          .beyondprompts-gallery {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 16px;
          }

          .modal-overlay {
            padding: 20px;
          }

          .modal-close {
            top: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            font-size: 20px;
          }

          .modal-nav {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }

          .modal-nav.prev {
            left: 20px;
          }

          .modal-nav.next {
            right: 20px;
          }

          .modal-counter {
            bottom: 20px;
            font-size: 13px;
          }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#ffffff' }}>
        <div className="beyondprompts-container" onKeyDown={handleKeyDown} tabIndex={0}>
        <div className="beyondprompts-header">
          <h1 className="beyondprompts-title">Beyond Prompts</h1>
          <p className="beyondprompts-subtitle">
            Research on human-AI interaction beyond traditional prompting. Exploring new paradigms 
            for how designers and AI systems collaborate in creative workflows.
          </p>
        </div>

        {/* Assumption Section */}
        <section className="section">
          <h2 className="section-heading">Assumption: Natural language can adequately describe visual qualities in design</h2>
          <div className="images-row">
            <div className="image-item" onClick={() => openModal(0, [images[0], images[1]])}>
              <img src={images[0]} alt="Beyond Prompts research image 1" />
            </div>
            <div className="image-item" onClick={() => openModal(1, [images[0], images[1]])}>
              <img src={images[1]} alt="Beyond Prompts research image 2" />
            </div>
          </div>

          <div className="research-problem">
            <h3>Research Problem</h3>
            <ol>
              <li>Design visualisations embody complex perceptual qualities that are difficult to capture purely through numeric or linguistic descriptions.</li>
              <li>Designers (or prompt engineers!) need to construct very long and complex text prompts to generate images that convey envisioned qualities.</li>
              <li>Gen-AI workflows lack intuitive capture of designers&apos; visual intent</li>
            </ol>
          </div>
        </section>

        {/* Beyond Prompts Section */}
        <section className="section">
          <h2 className="section-heading">Beyond Prompts: Reference / analogue-based ideation in urban design</h2>
          <div className="images-row">
            <div className="image-item" onClick={() => openModal(2, [images[2], images[3], images[4]])}>
              <img src={images[2]} alt="Beyond Prompts research image 3" />
            </div>
            <div className="image-item" onClick={() => openModal(3, [images[2], images[3], images[4]])}>
              <img src={images[3]} alt="Beyond Prompts research image 4" />
            </div>
            <div className="image-item" onClick={() => openModal(4, [images[2], images[3], images[4]])}>
              <img src={images[4]} alt="Beyond Prompts research image 5" />
            </div>
          </div>
        </section>

        {/* Image 6 */}
        <section className="section">
          <div className="image-single">
            <div className="image-item" onClick={() => openModal(5, [images[5]])}>
              <img src={images[5]} alt="Beyond Prompts research image 6" />
            </div>
          </div>
        </section>

        {/* Technical Outline Section */}
        <section className="section">
          <h2 className="section-heading">Technical outline</h2>
          <div className="beyondprompts-gallery">
            {galleryImages.map((imagePath, index) => {
              const imageIndex = images.indexOf(imagePath);
              return (
                <div
                  key={index}
                  className="image-item"
                  onClick={() => openModal(imageIndex, galleryImages)}
                >
                  <img src={imagePath} alt={`Beyond Prompts research image ${imageIndex + 1}`} />
                </div>
              );
            })}
          </div>
        </section>

        {/* Modal */}
        {selectedImage !== null && selectedImageList.length > 0 && (
          <div className="modal-overlay" onClick={closeModal}>
            <button className="modal-close" onClick={closeModal} aria-label="Close">
              ×
            </button>
            {selectedImageList.length > 1 && (
              <>
                <button
                  className="modal-nav prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  className="modal-nav next"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[selectedImage]}
                alt={`Beyond Prompts research image ${selectedImage + 1}`}
                className="modal-image"
              />
              {selectedImageList.length > 1 && (
                <div className="modal-counter">
                  {selectedImageList.findIndex(img => img === images[selectedImage]) + 1} / {selectedImageList.length}
                </div>
              )}
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default BeyondPromptsPage;
