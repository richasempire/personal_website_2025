import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

const ArchiDAOPage = () => {
  useEffect(() => {
    // Load Instagram embed script
    if (typeof window !== 'undefined' && !window.instgrm) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    }

    // Load Substack embed script
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="substack.com/embedjs"]')) {
      const script = document.createElement('script');
      script.src = 'https://substack.com/embedjs/embed.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Head>
        <title>ArchiDAO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ArchiDAO - Decentralized Autonomous Organization for AEC Industry" />
        <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700" rel="stylesheet" />
        <link href="//fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|Raleway:400,800,900" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />

      <style jsx>{`
        body {
          font-family: Verdana, sans-serif;
          margin: 0;
          text-align: justify;
        }

        * {
          box-sizing: border-box;
        }

        .row > .column {
          padding: 0 8px;
        }

        .row:after {
          content: "";
          display: table;
          clear: both;
        }

        .column {
          float: left;
          width: 25%;
        }

        iframe {
          display: block;
          border: none;
        }

        .custom-banner {
          width: 100%;
          height: 400px;
          background-size: cover;
          background-position: center;
          margin: 20px 0;
        }

        .quote-section {
          margin: 40px 0;
          padding: 20px;
        }

        .quote {
          font-style: italic;
          font-size: 24px;
          margin: 0;
          padding: 20px;
        }

        .quote cite {
          display: block;
          margin-top: 10px;
          font-size: 16px;
          font-style: normal;
        }

        .youtube-icon,
        .instagram-icon,
        .discord-icon,
        .twitter-icon {
          display: inline-block;
          margin-right: 15px;
          margin-bottom: 15px;
        }

        .youtube-icon img,
        .instagram-icon img,
        .discord-icon img,
        .twitter-icon img {
          transition: transform 0.3s ease;
        }

        .youtube-icon:hover img,
        .instagram-icon:hover img,
        .discord-icon:hover img,
        .twitter-icon:hover img {
          transform: scale(1.1);
        }
      `}</style>

      <div id="colorlib-page">
        <div className="container-wrap">
          <div id="colorlib-main">
            <section className="colorlib-about" data-section="about">
            </section>

            <section className="colorlib-about" data-section="about">
              <div className="colorlib-narrow-content">
                <h1 className="colorlib-topheading">ArchiDAO</h1>
                <h2 className="colorlib-heading">Co-Founder</h2>
              </div>

              <div className="colorlib-narrow-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                      <div className="about-desc">
                        <span className="heading-meta">What is ArchiDAO?</span>
                        <h2 className="colorlib-heading">Decentralized Autonomous Organisation</h2>
                        <p>ArchiDAO is a vibrant, decentralized, and community-led entity with no central authority. Smart contracts set the ground rules, handle proposals, and execute decisions, empowering a growing community of 500+ architects and technologists to reimagine our profession in the Web3 era.</p>
                        <p>Our work spans the physical-digital divide, exploring Web3 integration in AEC through cutting-edge research and applications. From leveraging smart contracts to hosting metaverse workshops, Web3 hackathons, XR experiments, NFT launches, real estate tokenization, and active forums—we&apos;re pioneering a decentralized, collaborative future.</p>
                        <p>It all started in December 2021. Seven professionals from across the globe—spanning the US, Europe, India, Brazil, and Australia—joined forces to explore how NFTs, blockchain, and the metaverse could reshape the AEC industry. Together, we founded ArchiDAO, a Decentralized Autonomous Organization (DAO) designed to unite like-minded individuals, foster collaboration, and develop equitable strategies using Web3 tools.</p>
                        <p>ArchiDAO is more than a platform—it&apos;s a protocol of trust and shared vision. And yes, I&apos;m proud to be one of the founding seven.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="colorlib-narrow-content">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                      <div className="about-desc">
                        <div className="custom-banner" style={{ backgroundImage: 'url(/assets/ArchiDAO/banner.png)' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="colorlib-about" data-section="about">
              <div className="colorlib-narrow-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                      <div className="about-desc">
                        <span className="heading-meta">Social Media</span>
                        <h2 className="colorlib-heading" style={{ marginBottom: '1.5em' }}>#workshops #interviews #community-Building</h2>
                        <a href="https://www.youtube.com/@archidao7138" target="_blank" rel="noreferrer" className="youtube-icon">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" width="40" height="40" />
                        </a>
                        <a href="https://www.instagram.com/archidao.io/" target="_blank" rel="noreferrer" className="instagram-icon">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width="40" height="40" />
                        </a>
                        <a href="https://discord.gg/294BDZuEgA" target="_blank" rel="noreferrer" className="discord-icon">
                          <img src="https://cdn.worldvectorlogo.com/logos/discord-6.svg" alt="Discord" width="40" height="40" />
                        </a>
                        <a href="https://x.com/archi_dao" target="_blank" rel="noreferrer" className="twitter-icon">
                          <img src="https://cdn.worldvectorlogo.com/logos/twitter-6.svg" alt="Twitter" width="40" height="40" />
                        </a>
                        <p>Check out all our links here: <a href="https://linktr.ee/ArchiDAO.io" target="_blank" rel="noreferrer">Visit our Linktree</a></p>
                        <span className="heading-meta">Technology</span>
                        <h2 className="colorlib-heading" style={{ marginBottom: '1.5em' }}>#metaverse</h2>
                        <h2 className="colorlib-heading" style={{ marginBottom: '1.5em' }}>#AR & VR</h2>
                        <h2 className="colorlib-heading" style={{ marginBottom: '1.5em' }}>#Blockchain</h2>
                        <h2 className="colorlib-heading" style={{ marginBottom: '1.5em' }}>#UI-UX</h2>
                        <h2 className="colorlib-heading" style={{ marginBottom: '1.5em' }}>#NFT</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box filterDiv cars" data-animate-effect="fadeInLeft">
                    <div className="project" style={{ backgroundImage: 'url(/assets/ArchiDAO/youtube.png)' }}></div>
                  </div>
                </div>
              </div>
            </section>

            <div className="colorlib-narrow-content">
              <div className="row">
                <div className="col-md-12">
                  <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    <div className="about-desc">
                      <div className="quote-section">
                        <blockquote className="quote">
                          &quot;First DAO (Decentralisation Autonomous Organization) for AEC Industry!&quot;
                          <cite>— Self claimed</cite>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="colorlib-work" data-section="about">
              <div className="colorlib-narrow-content">
                <div className="row">
                  <div className="col-md-4 animate-box filterDiv cars" data-animate-effect="fadeInLeft">
                    <div className="project" style={{ background: 'none' }}>
                      <iframe
                        width="100%"
                        height="300"
                        src="https://www.youtube.com/embed/Z56kZmK5yI8?si=TAeCKozPrshJoaHo&start=3131"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-md-4 animate-box filterDiv cars" data-animate-effect="fadeInLeft">
                    <div className="project" style={{ background: 'none' }}>
                      <iframe
                        width="100%"
                        height="300"
                        src="https://www.youtube.com/embed/3ycmPWefX2U?si=owLrSq6ktR3x34bh"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-md-4 animate-box filterDiv cars" data-animate-effect="fadeInLeft">
                    <div className="project" style={{ background: 'none' }}>
                      <iframe
                        width="100%"
                        height="300"
                        src="https://www.youtube.com/embed/a91eSabwZ6E?si=qISusu_0Y44diihX&start=158"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-md-4 animate-box filterDiv cars" data-animate-effect="fadeInLeft">
                    <div className="substack-post-embed">
                      <p lang="en">Top 10 words to know about DAO (Decentralized Autonomous Organization) by ArchiDAO</p>
                      <p>An approachable guide on the most frequently used terms</p>
                      <a data-post-link href="https://archidao.substack.com/p/top-10-words-to-know-about-dao-decentralized">Read on Substack</a>
                    </div>
                  </div>
                  <div className="col-md-4 animate-box filterDiv cars" data-animate-effect="fadeInLeft">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-captioned
                      data-instgrm-permalink="https://www.instagram.com/tv/Cf1kBGFlhda/?utm_source=ig_embed&utm_campaign=loading"
                      data-instgrm-version="14"
                      style={{
                        background: '#FFF',
                        border: 0,
                        borderRadius: '3px',
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                        margin: '1px',
                        maxWidth: '540px',
                        minWidth: '326px',
                        padding: 0,
                        width: '99.375%',
                      }}
                    >
                      <div style={{ padding: '16px' }}>
                        <a
                          href="https://www.instagram.com/tv/Cf1kBGFlhda/?utm_source=ig_embed&utm_campaign=loading"
                          style={{
                            background: '#FFFFFF',
                            lineHeight: 0,
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                          }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </blockquote>
                  </div>
                  <div className="col-md-4 animate-box filterDiv cars" data-animate-effect="fadeInLeft">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-captioned
                      data-instgrm-permalink="https://www.instagram.com/reel/Cdqg4JAjIH5/?utm_source=ig_embed&utm_campaign=loading"
                      data-instgrm-version="14"
                      style={{
                        background: '#FFF',
                        border: 0,
                        borderRadius: '3px',
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                        margin: '1px',
                        maxWidth: '540px',
                        minWidth: '326px',
                        padding: 0,
                        width: '99.375%',
                      }}
                    >
                      <div style={{ padding: '16px' }}>
                        <a
                          href="https://www.instagram.com/reel/Cdqg4JAjIH5/?utm_source=ig_embed&utm_campaign=loading"
                          style={{
                            background: '#FFFFFF',
                            lineHeight: 0,
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                          }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </blockquote>
                  </div>
                  <div className="col-md-4 animate-box filterDiv cars" data-animate-effect="fadeInLeft">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-captioned
                      data-instgrm-permalink="https://www.instagram.com/tv/CdZuLNPoMd4/?utm_source=ig_embed&utm_campaign=loading"
                      data-instgrm-version="14"
                      style={{
                        background: '#FFF',
                        border: 0,
                        borderRadius: '3px',
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                        margin: '1px',
                        maxWidth: '540px',
                        minWidth: '326px',
                        padding: 0,
                        width: '99.375%',
                      }}
                    >
                      <div style={{ padding: '16px' }}>
                        <a
                          href="https://www.instagram.com/tv/CdZuLNPoMd4/?utm_source=ig_embed&utm_campaign=loading"
                          style={{
                            background: '#FFFFFF',
                            lineHeight: 0,
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                          }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </blockquote>
                  </div>
                  <div className="col-md-4 animate-box filterDiv cars" data-animate-effect="fadeInLeft">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-captioned
                      data-instgrm-permalink="https://www.instagram.com/tv/CdTfHSWl0o8/?utm_source=ig_embed&utm_campaign=loading"
                      data-instgrm-version="14"
                      style={{
                        background: '#FFF',
                        border: 0,
                        borderRadius: '3px',
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                        margin: '1px',
                        maxWidth: '540px',
                        minWidth: '326px',
                        padding: 0,
                        width: '99.375%',
                      }}
                    >
                      <div style={{ padding: '16px' }}>
                        <a
                          href="https://www.instagram.com/tv/CdTfHSWl0o8/?utm_source=ig_embed&utm_campaign=loading"
                          style={{
                            background: '#FFFFFF',
                            lineHeight: 0,
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                          }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </blockquote>
                  </div>
                  <div className="col-md-4 animate-box filterDiv cars" data-animate-effect="fadeInLeft">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-captioned
                      data-instgrm-permalink="https://www.instagram.com/reel/CdWGb_HFzaI/?utm_source=ig_embed&utm_campaign=loading"
                      data-instgrm-version="14"
                      style={{
                        background: '#FFF',
                        border: 0,
                        borderRadius: '3px',
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                        margin: '1px',
                        maxWidth: '540px',
                        minWidth: '326px',
                        padding: 0,
                        width: '99.375%',
                      }}
                    >
                      <div style={{ padding: '16px' }}>
                        <a
                          href="https://www.instagram.com/reel/CdWGb_HFzaI/?utm_source=ig_embed&utm_campaign=loading"
                          style={{
                            background: '#FFFFFF',
                            lineHeight: 0,
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                          }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </blockquote>
                  </div>
                  <div className="col-md-4 animate-box filterDiv cars" data-animate-effect="fadeInLeft">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-captioned
                      data-instgrm-permalink="https://www.instagram.com/p/Ch7UEwVP7dz/?utm_source=ig_embed&utm_campaign=loading"
                      data-instgrm-version="14"
                      style={{
                        background: '#FFF',
                        border: 0,
                        borderRadius: '3px',
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                        margin: '1px',
                        maxWidth: '540px',
                        minWidth: '326px',
                        padding: 0,
                        width: '99.375%',
                      }}
                    >
                      <div style={{ padding: '16px' }}>
                        <a
                          href="https://www.instagram.com/p/Ch7UEwVP7dz/?utm_source=ig_embed&utm_campaign=loading"
                          style={{
                            background: '#FFFFFF',
                            lineHeight: 0,
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                          }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </blockquote>
                  </div>
                  <div className="col-md-4 animate-box filterDiv cars" data-animate-effect="fadeInLeft">
                    <iframe
                      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FFuturly%2Fvideos%2F348592153398896%2F&show_text=false&width=560&t=0"
                      width="560"
                      height="314"
                      style={{ border: 'none', overflow: 'hidden' }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                  <div className="col-md-4 animate-box filterDiv cars" data-animate-effect="fadeInLeft">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-captioned
                      data-instgrm-permalink="https://www.instagram.com/reel/CZJ9ZWwo241/?utm_source=ig_embed&utm_campaign=loading"
                      data-instgrm-version="14"
                      style={{
                        background: '#FFF',
                        border: 0,
                        borderRadius: '3px',
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                        margin: '1px',
                        maxWidth: '540px',
                        minWidth: '326px',
                        padding: 0,
                        width: '99.375%',
                      }}
                    >
                      <div style={{ padding: '16px' }}>
                        <a
                          href="https://www.instagram.com/reel/CZJ9ZWwo241/?utm_source=ig_embed&utm_campaign=loading"
                          style={{
                            background: '#FFFFFF',
                            lineHeight: 0,
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                          }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </blockquote>
                  </div>
                  <div className="col-md-4 animate-box filterDiv cars" data-animate-effect="fadeInLeft">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-captioned
                      data-instgrm-permalink="https://www.instagram.com/reel/ChFkkddFgxd/?utm_source=ig_embed&utm_campaign=loading"
                      data-instgrm-version="14"
                      style={{
                        background: '#FFF',
                        border: 0,
                        borderRadius: '3px',
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                        margin: '1px',
                        maxWidth: '540px',
                        minWidth: '326px',
                        padding: 0,
                        width: '99.375%',
                      }}
                    >
                      <div style={{ padding: '16px' }}>
                        <a
                          href="https://www.instagram.com/reel/ChFkkddFgxd/?utm_source=ig_embed&utm_campaign=loading"
                          style={{
                            background: '#FFFFFF',
                            lineHeight: 0,
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                          }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArchiDAOPage;

