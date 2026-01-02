import { useEffect } from "react";
import Link from "next/link";

const MachineHomePage = () => {
  useEffect(() => {
    // Set machine mode on mount
    if (typeof window !== 'undefined') {
      document.body.setAttribute('data-mode', 'machine');
      window.localStorage.setItem('siteMode', 'machine');
    }
  }, []);

  return (
    <div className="machine-page">
      <div className="machine-header">
        <h1>Richa Gupta[Download CV]</h1>
      </div>

        <div className="machine-section">
          <h2># f(x)</h2>
          <div className="machine-list">
            <p>## f()</p>
            <p>| Innovation • Responsible • Democratization • Real-world Problems • Human Interaction</p>
          </div>
          <div className="machine-list">
            <p>## (x)</p>
            <p>| Emerging technologies • Artificial Intelligence • Generative AI • LLM • VLM</p>
            <p>| Image generation • Fine tuning • Metaverse •</p>
            <p>| Augmented reality • Virtual reality • Mixed Reality</p>
            <p>| Web sockets</p>
            <p>| API • Integration • AI Safety • Web 3 • User strategy</p>
          </div>
        </div>

        <div className="machine-section">
          <h2>## Starting in architecture meant learning to read context and clients</h2>
          <p>
            understanding what they needed, then designing innovative spaces that made those needs real.
            Frustration with the communication gap between designers and developers sparked curiosity about
            other technologies to let people walk through designs before building them. That innovation created
            a new role – the connected designer+, engineers and clients. At MIT, the focus shifted deeper into
            AI– Not just building with it, but designing it responsibly. Studies in red-teaming, pluralistic
            alignment, and real cases where AI amplified biases taught a hard truth: technology isn&apos;t neutral.
            Designing AI for human interaction, focused on one question: how do we build systems that expand
            human agency rather than restrict it? The approach is unconventional – speaking both technology and
            design, driven by creating tools as intuitive as they could not before.
          </p>
        </div>

        <div className="machine-section">
          <h2>## DESIGN</h2>
          <p>| asks what should exist</p>
          <p>| f()</p>
        </div>

        <div className="machine-section">
          <h2>## TECHNOLOGY</h2>
          <p>| makes it possible</p>
          <p>| (x)</p>
        </div>

        <div className="machine-section">
          <h2>### Projects</h2>
          <div className="machine-table">
            <table>
              <thead>
                <tr>
                  <th>Project name</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link href="/ai/shoreai" className="machine-link">
                      Shore ai
                    </Link>
                  </td>
                  <td>Product</td>
                </tr>
                <tr>
                  <td><a href="https://letschec.my.canva.site/corbu-inc" target="_blank" rel="noopener noreferrer" className="machine-link">Vision Adapters</a></td>
                  <td>AI & ML</td>
                </tr>
                <tr>
                  <td><a href="https://letschec.my.canva.site/text-to-roboticassembly/_password" target="_blank" rel="noopener noreferrer" className="machine-link">Text to Robotic Assembly</a></td>
                  <td>AI & ML, Research</td>
                </tr>
                <tr>
                  <td><a href="https://letschec.my.canva.site/sketchtobimm" target="_blank" rel="noopener noreferrer" className="machine-link">Sketch-to-BIM</a></td>
                  <td>Product, AI & ML</td>
                </tr>
                <tr>
                  <td><a href="https://example.com/archidao" target="_blank" rel="noopener noreferrer" className="machine-link">ArchiDAO</a></td>
                  <td>Entrepreneurship, Web3</td>
                </tr>
                <tr>
                  <td><a href="https://letschec.my.canva.site/curatorai" target="_blank" rel="noopener noreferrer" className="machine-link">Curator AI</a></td>
                  <td>Product, AI & ML</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/ai/plus" className="machine-link">
                      PLUS AI
                    </Link>
                  </td>
                  <td>Product, Entrepreneurship</td>
                </tr>
                <tr>
                  <td><a href="https://letschec.my.canva.site/bike-design-inpainting" target="_blank" rel="noopener noreferrer" className="machine-link">Bike Design Competition</a></td>
                  <td>AI & ML</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      <div className="machine-section">
        <h2>### what if</h2>
        <p>x is us</p>
        <p>and f(x) is what we choose to become</p>
        <p className="machine-link">[Lets build it together]</p>
      </div>
    </div>
  );
};

export default MachineHomePage;

