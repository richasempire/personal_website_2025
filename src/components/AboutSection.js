import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Sample data - replace with your actual data
  // const fullStory = "Starting in architecture meant learning to read context and clients - understanding what they needed, then designing innovative spaces that made those needs real. Frustration with the communication gap between designers and clients led to using AR, VR and other technologies to let people walk through designs before building them. That innovation created a new role - the firm's first design technologist - building tools that connected designers, engineers and clients. At MIT, the focus shifted deeper into AI. Not just building with these models, but understanding how to build them responsibly. Studies in red-teaming, pluralistic alignment, and real cases where AI amplified biases shaped a research position at CSAIL working on human-AI interaction, focused on one question: how do we build systems that expand human agency rather than restrict it? The approach is unconventional - speaking both technology and design, driven by creating tools and technologies that empower people to achieve things they could not before.";
  
const fullStory = "</strong> <br>At CSAIL, she addresses the UX rigidity of foundational AI models (statistical diffusion models, LLMs and VLMs) via <strong>\"Beyond Prompts\" project</strong> funded by <strong>SiDARA grant</strong> with Prof. Randall Davis, Prof. Takehiko Nagakura and PhD Student Rohit Sanatani. She builds fine-tuned AI design system that tests a novel interaction paradigm based on <strong>analogical reasoning</strong>, reducing the gap between stakeholders and giving users more direct control over generative processes than standard LLMs. <br>Her personal research focus is <strong>grounding generative AI outputs in real-world data</strong> for domain-specific applications via post-processing. She introduces the approach <strong>IIGenAI (Insight Informed Generative AI)</strong> to support architecture professionals and students early in their design process leading to decision-making. This research is advised by Prof. Takehiko Nagakura, Prof. Terry Knight and Prof. Ashia Wilson. <br>Beyond research, she actively engages in <strong>product engineering and design</strong>. She <strong>won the MIT GenAI Hackathon</strong> for a contextual recommendation system using AI and AR for e-commerce. At <strong>ACADIA '23</strong>, she led a workshop on <strong>Hybrid Making</strong>- fostering collaborative relationships between 'maker and made' by implementing sensors connected to VR visualization, transforming digital creation into a dynamic, interactive process.<br>Her research has been published at <strong>NeurIPS, HCII, and CAADFutures</strong>. She has presented at the <strong>IEEE Forum for AI and E-commerce at Microsoft NERD Center</strong> and the <strong>IIT Madras XR Symposium</strong>, and has been featured in <strong>Forbes and MIT News</strong>. She has actively pitched her start-up ideas at various venues and investors like <strong>MIT Sandbox</strong>, <strong>Global Ventures (15.375)</strong> by Prof. Ramesh Raskar, etc. She was an organizing member for <strong>India Conference @ Harvard</strong> (largest in US), where she managed and moderated the panel <strong>'Lab-to-Scale: Commercialization of Deep Technologies'</strong> featuring industry pioneers. <br>Previously, she worked in Architecture Design and technology industry as a <strong>product manager, design technologist, entrepreneur, and architect</strong>. This path -from architecture to design technology to AI research -enables her to translate between technical teams, designers, and business stakeholders. She led <strong>cross-functional teams from ideation to deployment</strong>, with extensive experience in user testing, experiment design, and implementation. <br>Her vision: <strong>democratizing satisfying experiences with technology that enhance human agency rather than restrict it.</strong>";
 
 
 
 const experience = [
    {
      role: "Graduate Research Assistant",
      organization: "MIT Computer Science and Artificial Intelligence Lab (CSAIL) + MIT Media Lab (Leventhal Center for Advanced Urbanism)",
      period: "2025",
      description: "Conducted HCI and AI Engineering research to address UX rigidity in AI tools for urban designers, building multi-modal AI prototypes that give users direct control over generative processes."
    },
    {
      role: "Generative AI Design Intern",
      organization: "CorbuAI Inc. | San Francisco, CA",
      period: "2024",
      description: "Delivered end-to-end AI solutions for fine-tuned stable diffusion models, achieving 77% stylistic satisfaction and 43% reduction in project turnaround time through validated design engineering frameworks."
    },
    {
      role: "Product Manager – Digital Transformation & Project Architect",
      organization: "fivD Inc. | Gurugram",
      period: "2021 - 2023",
      description: "Introduced firm-wide digital transformation, launched internal SaaS platform (0→150 users in 2 weeks), and built AI/ML-powered prototypes contributing to 20% growth in international business."
    },
    {
      role: "Co-founder",
      organization: "ArchiDAO LLC | Global, registered in Wyoming, USA",
      period: "2021 - 2023",
      description: "Co-founded blockchain-based Non-Profit DAO for 500+ designers and technologists across 6 continents, facilitating technology discovery sessions and community-building initiatives."
    },
    {
      role: "Project Architect",
      organization: "MYVN Studio | Bengaluru",
      period: "2019 - 2021",
      description: "Coordinated design handoffs, site execution, and client reviews for 5 commercial large-office interiors ($2.8M+ project value), maintaining on-time delivery through structured risk management."
    }
  ];

  const education = [
    {
      degree: "Master of Science in Design Computation (SMArchS), <br>Master of Science in Computer Science (SMCS), <br>MIT GradEL Technical Leadership Certification",
      institution: "Massachusetts Institute of Technology",
      period: "2023 - January 2026",
      description: "Thesis: Developed and validated an 'Insight-Informed' Gen AI (IIGenAI) approach | Beyond the Render: Insights Informed Generative AI (IIGenAI) grounding generative AI outputs with real-world data for informed Decision-making<br><br>Technical Coursework: Interactive Data Visualization, Web Development (Web Lab), Advances in Computer Vision, Deep Learning, AI & ML for Engineering Design, Computational Design Lab, AI Decision Making and Society, Towards Data Science for Society<br><br>Technical Leadership: Product Engineering & Leading Creative Teams, Leadership Development Qualities (MIT Sloan)"
    },
    {
      degree: "Cross-registered student",
      institution: "Harvard University - Harvard Business School",
      period: "",
      description: ""
    },
    {
      degree: "Bachelors of Architecture",
      institution: "National Institute of Technology, Raipur (NIT)",
      period: "2014 - 2019",
      description: ""
    }
  ];

  const publications = [
    {
      title: "Beyond Prompts: A Reference-Based Interaction Framework for Generative AI in Design Fields",
      authors: "R. Sanatani*, R. Gupta*, F. Tan, R. Davis, T. Nagakura",
      venue: "AI-HCI 2026 (HCII affiliated), Springer",
      year: "2026",
      link: "#"
    },
    {
      title: "Beyond the Render: Grounding Generative AI with Real-World Material Data for Informed Design Decisions",
      authors: "R. Gupta, T. Knight, T. Nagakura",
      venue: "AI-HCI 2026 (HCII affiliated), Springer",
      year: "2026",
      link: "#"
    },
    {
      title: "Text to Robotic Assembly of Multi-Component Objects using 3D Generative AI and Vision Language Models",
      authors: "A. H. Kyaw, R. Gupta, D. Shah, et al.",
      venue: "NeurIPS",
      year: "2025",
      link: "https://openreview.net/forum?id=ccZIywkwrn",
      preprintLink: "https://arxiv.org/abs/2511.02162",
      institutionalRepoLink: "https://openreview.net/forum?id=ccZIywkwrn"
    },
    {
      title: "Insights Informed Generative AI for Design: Incorporating Real-World Data for Text-to-Image Output",
      authors: "R. Gupta, A. K. Htet",
      venue: "CAAD Futures",
      year: "2025",
      link: "https://arxiv.org/abs/2506.15008",
      preprintLink: "https://arxiv.org/abs/2506.15008",
      institutionalRepoLink: "https://datahub.hku.hk/articles/conference_contribution/40_Insights_Informed_Generative_AI_for_Design_Incorporating_Real-world_Data_for_Text-to-Image_Output/29365358?file=55632146"
    }
  ];

  const collaboratedWith = [
    { name: "MIT", logo: "/logos/Massachusetts_Institute_of_Technology-Logo.wine (1).png" },
    
    { name: "MIT News", logo: "/logos/mitnews_logo-color.png" },
    { name: "NeurIPS", logo: "/logos/logo_neurips.png" },
    { name: "HCII", logo: "/logos/HCII2026.png" },
    { name: "Organization 7", logo: "/logos/channels4_profile.jpg" },
    { name: "Harvard Business School", logo: "/logos/HBS-styleguide-primary-logo-3.png" },
    { name: "Organization 5", logo: "/logos/images.jpeg" },
    { name: "ACADIA", logo: "/logos/acadia_logo.png" },
    { name: "CAAD Futures", logo: "/logos/Stamp_CAADFutures2025_OUTLN.png" },
    { name: "IIT Madras", logo: "/logos/IIT_Madras_Logo.svg.png" },
    { name: "NIT Raipur", logo: "/logos/National_Institute_of_Technology,_Raipur_Logo.png" },
    { name: "Forbes", logo: "/logos/logo-forbes-brand-portable-network-graphics-company-forbes-magazine-logo.jpg" },
    { name: "Organization 10", logo: "/logos/images.png" },
    { name: "Google", logo: "/logos/Google_2015_logo.svg.webp" },
    { name: "SiDARA", logo: "/logos/sidara_logo.jpeg" },
    { name: "Autodesk", logo: "/logos/Autodesk-New-Logo.png" },
    { name: "MIT Media Lab", logo: "/logos/MIT_Media_Lab_logo.svg.png" },
    { name: "fivD", logo: "/logos/fivD_logo.webp" },
    { name: "Stanford", logo: "/logos/stanford-university-logo-png_seeklogo-299560.png" },
    { name: "OpenAI", logo: "/logos/OpenAI-Logo-2022.png" },
    { name: "Anthropic", logo: "/logos/anthropic-logo-png_seeklogo-489572.png" },
    { name: "Hack Nation", logo: "/logos/hack_nation_logo.jpeg" },
    { name: "Microsoft", logo: "/logos/66200f7780069aa941c3d969_website thumbnails.png" },
    { name: "Organization 1", logo: "/logos/66af26_837cee87a5eb421aa49492d361be39a2~mv2_d_2236_2393_s_2.png" },
    { name: "Organization 2", logo: "/logos/1722293819243.jpeg" },
    { name: "Organization 3", logo: "/logos/bwnAQGoA_400x400.jpg" },
    { name: "Organization 4", logo: "/logos/original.png" },
    
    { name: "Organization 6", logo: "/logos/1631322959420.jpeg" },
   
    { name: "Organization 8", logo: "/logos/2.-StackedLogo_noshadow_whitebkg.png" },
    { name: "Organization 9", logo: "/logos/-QyIS44h.jpg" },
   
    { name: "MIT Alumni", logo: "/logos/mitas-alumni-logo.png" },
   
  ];

  const talks = [
    {
      title: "IEEE Forum on AI",
      venue: "Microsoft NERD, Cambridge, MA, USA",
      date: "",
      theme: "Context-aware Product Recomendation using Generative AI and AR",
      link: "https://futuredirections.ieee.org/future-tech-forum/gtf-ai/"
    },
    {
      title: "XR Symposium",
      venue: "IIT Madras, India",
      date: "",
      theme: "Augmented Reality and AI for E-Commerce",
      link: "https://xrsummit.xtic.org/"
    },
    {
      title: "Ethics and Technology Roundtable",
      venue: "McGill University, Canada",
      date: "",
      theme: "Grounding AI output for Domain-specific Usecases",
      link: "https://luma.com/sduhyv4i?tk=fBnd2K"
    },
    {
      title: "VR and Design Workshop - Hybrid Making",
      venue: "ACADIA 23",
      date: "2023",
      theme: "Human Computer Interaction for Design",
      link: "https://letschec.my.canva.site/hybrid-making"
    },
    {
      title: "Technology Experience Workshop",
      venue: "ArchiDAO + futurly",
      date: "",
      theme: "World building experience in Metaverse",
      link: "https://www.futurly.com/"
    },
    {
      title: "Computation in Design",
      venue: "fivD",
      date: "",
      theme: "Digital Transformation and Innovative Applications in Design",
      link: "https://www.fivd.io/"
    },
    {
      title: "Metaverse and World Building",
      venue: "ArchiDAO",
      date: "",
      theme: "",
      link: "https://www.youtube.com/channel/UCm08iRIcqpqzgIcva7gUFHg"
    },
    {
      title: "Web3 DAOs and Real World",
      venue: "Women in Web3",
      date: "",
      theme: "",
      link: "https://www.bwbc.io/"
    },
    {
      title: "Model Optimisation & Open Source Metaverse (Mozilla Hubs)",
      venue: "ArchiDAO",
      date: "",
      theme: "",
      link: "https://www.youtube.com/channel/UCm08iRIcqpqzgIcva7gUFHg"
    },
    {
      title: "Design Portfolio Challenge Jury",
      venue: "Architerrax",
      date: "",
      theme: "",
      link: "#"
    }
  ];

  const press = [
    {
      title: "Article Title",
      publication: "Publication Name",
      date: "2024",
      link: "#"
    }
    // Add more press mentions
  ];

  return (
    <div className="about-section" ref={sectionRef}>
      <div className="about-container">
        {/* About Section */}
        <div className="about-main">
          <div className="about-section-title">
            <h2>About</h2>
          </div>
          
          <div className="about-intro">
            <p> <strong>Richa Gupta</strong> is a graduate researcher, design technologist, and AI engineer at <strong>MIT CSAIL</strong> (Computer Science and Artificial Intelligence Laboratory) pursuing dual master&apos;s degrees in <strong>Computer Science and Design Computation at MIT </strong> (Massachusetts Institute of Technology) with <strong>4+ years of industry experience</strong>. Her work can be broadly categorized as <strong>&quot;Human-AI Interaction / Collaboration&quot;</strong> with sub-themes in AI engineering, product, design, research, and human-computer interaction.</p>
          </div>
          
          {/* Full Story and Experience Side by Side */}
          <div className="about-two-column">
            {/* Full Story */}
            <div className="about-subsection about-column-left">
             {/* <h3 className="about-subsection-title">Full Story</h3> */}
              <div className="about-full-story">
                {fullStory.split('<br>').map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <div className="about-paragraph-spacer"></div>}
                    <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="about-subsection about-column-right" id="experience">
              <h3 className="about-subsection-title">Experience</h3>
              <div className="about-list">
                {experience.map((exp, index) => (
                  <div key={index} className="about-item">
                    <div className="about-item-header">
                      <span className="about-item-title">{exp.role}</span>
                      <span className="about-item-period">{exp.period}</span>
                    </div>
                    <div className="about-item-organization">{exp.organization}</div>
                    {exp.description && (
                      <div className="about-item-description" dangerouslySetInnerHTML={{ __html: exp.description }}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education and Publications Side by Side */}
          <div className="about-two-column">
            {/* Education */}
            <div className="about-subsection about-column-left" id="education">
              <h3 className="about-subsection-title">Education</h3>
              <div className="about-list">
                {education.map((edu, index) => (
                  <div key={index} className="about-item">
                    <div className="about-item-header">
                      <span className="about-item-title">{edu.institution}</span>
                      <span className="about-item-period">{edu.period}</span>
                    </div>
                    <div className="about-item-organization" dangerouslySetInnerHTML={{ __html: edu.degree }}></div>
                    {edu.description && (
                      <div className="about-item-description" dangerouslySetInnerHTML={{ __html: edu.description }}></div>
                    )}
                  </div>
                ))}
              </div>
      </div>
      
            {/* Publications */}
            <div className="about-subsection about-column-right" id="publications">
              <h3 className="about-subsection-title">Publications</h3>
              <div className="research-list">
                {publications.map((pub, index) => (
                  <div key={index} className="research-item">
                    {pub.link && pub.link !== "#" ? (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="research-item-link">
                        <div className="research-item-title">{pub.title}</div>
                        <div className="research-item-meta">
                          <span>{pub.authors}</span>
                          <span>{pub.venue}</span>
                          <span>{pub.year}</span>
                        </div>
                      </a>
                    ) : (
                      <div className="research-item-link">
                        <div className="research-item-title">{pub.title}</div>
                        <div className="research-item-meta">
                          <span>{pub.authors}</span>
                          <span>{pub.venue}</span>
                          <span>{pub.year}</span>
                        </div>
                      </div>
                    )}
                    {(pub.preprintLink || pub.institutionalRepoLink) && (
                      <div className="research-item-links">
                        {pub.preprintLink && (
                          <a href={pub.preprintLink} target="_blank" rel="noopener noreferrer" className="research-item-additional-link">
                            Preprint (arXiv)
                          </a>
                        )}
                        {pub.institutionalRepoLink && (
                          <a href={pub.institutionalRepoLink} target="_blank" rel="noopener noreferrer" className="research-item-additional-link">
                            Institutional repository
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Talks and Collaborated With Side by Side */}
          <div className="about-two-column">
            {/* Talks */}
            <div className="about-subsection about-column-left" id="talks">
              <h3 className="about-subsection-title">Talks</h3>
              <div className="about-talks-grid">
                {talks.map((talk, index) => (
                  <div key={index} className="research-item">
                    <a href={talk.link} target="_blank" rel="noopener noreferrer" className="research-item-link">
                      <div className="research-item-title">{talk.title}</div>
                      <div className="research-item-meta">
                        <span>{talk.venue}</span>
                      </div>
                      {talk.theme && (
                        <div className="research-item-theme">{talk.theme}</div>
                      )}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaborated With */}
            <div className="about-subsection about-column-right" id="collaborated">
              <div className="collaborated-logos-grid">
                {collaboratedWith.map((org, index) => (
                  <div key={index} className="collaborated-logo-item">
                    <img 
                      src={org.logo} 
                      alt={org.name} 
                      className="collaborated-logo"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;
