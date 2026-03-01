import Head from 'next/head';
import Script from 'next/script';

const DistillationBenchmarkPage = () => {
  return (
    <>
      <Head>
        <title>Advances in Model Distillation | MIT 6.S964 Research</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Script
        src="https://cdn.tailwindcss.com?plugins=forms,container-queries"
        strategy="afterInteractive"
      />

      <style jsx global>{`
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1f1f1f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
        }
        h1, h2, h3 {
          letter-spacing: -0.02em;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(229, 231, 235, 0.5);
        }
        .google-gradient-text {
          background: linear-gradient(90deg, #4285F4, #34A853, #FBBC05, #EA4335);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .dotted-bg {
          background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>

      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-gray-900">6.S964 Research</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
              <a className="hover:text-blue-600 transition-colors" href="#abstract">Abstract</a>
              <a className="hover:text-blue-600 transition-colors" href="#methodology">Methodology</a>
              <a className="hover:text-blue-600 transition-colors" href="#results">Results</a>
              <a className="hover:text-blue-600 transition-colors" href="#summary">Summary</a>
            </div>
          </div>
        </nav>

        <main>
          {/* Hero Section */}
          <section className="pt-24 pb-20 px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-6">
                Research Presentation
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Advances in <br />
                <span className="google-gradient-text">Model Distillation</span>
              </h1>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-500 font-medium mb-10">
                <span>Richa Gupta</span>
                <span>Anshul Agarwal</span>
                <span>Azusa Ito</span>
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 text-sm text-gray-600 shadow-sm">
                <span className="font-bold">6.S964</span> | Topics in Data Science for Society
              </div>
            </div>
          </section>

          {/* Abstract Section */}
          <section className="max-w-7xl mx-auto px-6 py-20" id="abstract">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-4 border-l-4 border-blue-500 pl-6 py-2">
                <h2 className="text-2xl font-bold text-gray-900">Abstract</h2>
              </div>
              <div className="md:col-span-8 space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Model distillation is a technique for transferring knowledge from a larger, more complex teacher model to a smaller, simpler student model. It enables deploying high-performing models on resource-constrained devices and compressing knowledge from large LLMs into lightweight open-source alternatives.
                </p>
                <p>
                  We evaluate and compare <strong className="text-gray-900">BERT-Large</strong>, <strong className="text-gray-900">DistilBERT</strong>, and <strong className="text-gray-900">MiniLM</strong> on the full SQuAD v1.1 training set (~87,599 examples) for <strong className="text-gray-900">Extractive Question Answering</strong>, measuring accuracy, inference speed, and efficiency trade-offs to understand how distilled models perform relative to their teacher.
                </p>
              </div>
            </div>
          </section>

          {/* Methodology Section */}
          <section className="bg-gray-50 py-24" id="methodology">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Methodology</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Evaluation Metrics</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We use multiple evaluation metrics to capture both exact-match accuracy and semantic quality. <strong className="text-gray-900">BERT-Score</strong> captures semantic similarity through contextual embeddings, complementing traditional Exact Match and token-level F1 scores.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span> Exact Match (EM) Accuracy
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span> Token-level F1 Score
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span> BERTScore F1 (Semantic Quality)
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-purple-400"></span> Inference Time per Question
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-blue-50">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Inference Pipeline</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We used Hugging Face&apos;s <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">pipeline(&quot;question-answering&quot;)</code> for standardized inference across all three models. Each model was run on the full SQuAD v1.1 training set, logging predicted answers, confidence scores, and inference time.
                  </p>
                  <div className="flex items-center justify-between gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="text-center">
                      <div className="text-[10px] uppercase font-bold text-gray-400 mb-1">Teacher</div>
                      <div className="px-3 py-1 bg-white border border-gray-200 rounded text-sm font-semibold">BERT-Large</div>
                    </div>
                    <svg className="w-6 h-6 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    <div className="text-center">
                      <div className="text-[10px] uppercase font-bold text-gray-400 mb-1">Students</div>
                      <div className="flex gap-1">
                        <div className="px-2 py-1 bg-blue-600 text-white rounded text-xs font-semibold shadow-sm">DistilBERT</div>
                        <div className="px-2 py-1 bg-blue-500 text-white rounded text-xs font-semibold shadow-sm">MiniLM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* System Pipeline Section */}
          <section className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-12">System Pipeline</h2>
            <div className="dotted-bg border-2 border-dashed border-gray-200 rounded-[3rem] p-12 md:p-20">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center min-w-[150px]">
                  <div className="text-[10px] uppercase font-bold text-gray-400 mb-2">Step 1</div>
                  <div className="text-sm font-semibold text-gray-800">SQuAD v1.1</div>
                  <div className="text-xs text-gray-400 mt-1">~87K QA pairs</div>
                </div>
                <svg className="w-6 h-6 text-gray-300 rotate-90 md:rotate-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center min-w-[150px]">
                  <div className="text-[10px] uppercase font-bold text-gray-400 mb-2">Step 2</div>
                  <div className="text-sm font-semibold text-gray-800">HF Pipeline</div>
                  <div className="text-xs text-gray-400 mt-1">QA Inference</div>
                </div>
                <svg className="w-6 h-6 text-gray-300 rotate-90 md:rotate-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center min-w-[150px]">
                  <div className="text-[10px] uppercase font-bold text-gray-400 mb-2">Step 3</div>
                  <div className="text-sm font-semibold text-gray-800">Log Outputs</div>
                  <div className="text-xs text-gray-400 mt-1">Answer, Confidence, Time</div>
                </div>
                <svg className="w-6 h-6 text-gray-300 rotate-90 md:rotate-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center min-w-[150px]">
                  <div className="text-[10px] uppercase font-bold text-gray-400 mb-2">Step 4</div>
                  <div className="text-sm font-semibold text-gray-800">Evaluate</div>
                  <div className="text-xs text-gray-400 mt-1">EM, F1, BERTScore</div>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Results Section */}
          <section className="max-w-7xl mx-auto px-6 py-24" id="results">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
              <h2 className="text-3xl font-bold text-gray-900">Performance Results</h2>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">SQuAD v1.1 · 87,599 Questions</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm">
                <div className="mb-6">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Accuracy Metrics</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-gray-800">BERT-Large</span>
                      <span className="text-sm text-gray-500">EM: 83.2% · F1: 92.8%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full" style={{ width: '92.8%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-gray-800">MiniLM</span>
                      <span className="text-sm text-gray-500">EM: 79.4% · F1: 90.7%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div className="bg-blue-400 h-3 rounded-full" style={{ width: '90.7%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-gray-800">DistilBERT</span>
                      <span className="text-sm text-gray-500">EM: 77.4% · F1: 89.0%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div className="bg-blue-300 h-3 rounded-full" style={{ width: '89.0%' }}></div>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm italic text-gray-500 text-center">Fig 1. Exact Match and F1 scores on SQuAD v1.1 training set.</p>
              </div>
              <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm">
                <div className="mb-6">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Inference Speed & Efficiency</span>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <div className="text-sm font-bold text-gray-800">BERT-Large</div>
                      <div className="text-xs text-gray-400">~340M params</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-700">0.048s/question</div>
                      <div className="text-xs text-gray-400">Baseline</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div>
                      <div className="text-sm font-bold text-blue-700">DistilBERT</div>
                      <div className="text-xs text-gray-400">~66M params</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-blue-700">0.0083s/question</div>
                      <div className="text-xs font-bold text-green-600">~5.8× faster</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div>
                      <div className="text-sm font-bold text-blue-700">MiniLM</div>
                      <div className="text-xs text-gray-400">~33M params</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-blue-700">~0.010s/question</div>
                      <div className="text-xs font-bold text-green-600">~4.6× faster</div>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm italic text-gray-500 text-center">Fig 2. Inference time per question measured during evaluation.</p>
              </div>
            </div>

            {/* BERTScore Results */}
            <div className="mt-8 bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm">
              <div className="mb-6">
                <span className="text-[10px] font-bold text-gray-400 uppercase">BERTScore F1 · Semantic Quality</span>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <div className="text-3xl font-bold text-gray-900">0.905</div>
                  <div className="text-sm font-semibold text-gray-500 mt-2">BERT-Large</div>
                </div>
                <div className="p-6 bg-blue-50 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-700">0.8825</div>
                  <div className="text-sm font-semibold text-blue-500 mt-2">MiniLM</div>
                </div>
                <div className="p-6 bg-blue-50 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-700">0.867</div>
                  <div className="text-sm font-semibold text-blue-500 mt-2">DistilBERT</div>
                </div>
              </div>
              <p className="mt-6 text-sm italic text-gray-500 text-center">Fig 3. BERTScore F1 comparing predicted answers against ground truth.</p>
            </div>
          </section>

          {/* Comparative Summary Section */}
          <section className="max-w-7xl mx-auto px-6 py-24" id="summary">
            <h2 className="text-2xl font-bold text-gray-900 mb-10">Model Comparative Summary</h2>
            <div className="overflow-x-auto overflow-hidden border border-gray-200 rounded-3xl">
              <table className="w-full text-left min-w-[600px]">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-8 py-5 text-xs font-semibold uppercase">Model</th>
                    <th className="px-8 py-5 text-xs font-semibold uppercase">Parameters</th>
                    <th className="px-8 py-5 text-xs font-semibold uppercase">Layers</th>
                    <th className="px-8 py-5 text-xs font-semibold uppercase">Distillation Method</th>
                    <th className="px-8 py-5 text-xs font-semibold uppercase">EM / F1</th>
                    <th className="px-8 py-5 text-xs font-semibold uppercase">Speedup</th>
                    <th className="px-8 py-5 text-xs font-semibold uppercase">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr>
                    <td className="px-8 py-5 font-bold">BERT-Large</td>
                    <td className="px-8 py-5 text-gray-500">~340M</td>
                    <td className="px-8 py-5 text-gray-500">24</td>
                    <td className="px-8 py-5 text-gray-400">— (Teacher model)</td>
                    <td className="px-8 py-5 text-gray-600">83.2% / 92.8%</td>
                    <td className="px-8 py-5 text-gray-600">1.0×</td>
                    <td className="px-8 py-5 text-gray-500">High-accuracy needs</td>
                  </tr>
                  <tr>
                    <td className="px-8 py-5 font-bold text-blue-600">DistilBERT</td>
                    <td className="px-8 py-5 text-gray-500">~66M</td>
                    <td className="px-8 py-5 text-gray-500">6</td>
                    <td className="px-8 py-5 text-gray-500">Logits, hidden states, attention — task-agnostic</td>
                    <td className="px-8 py-5 text-gray-600">77.4% / 89.0%</td>
                    <td className="px-8 py-5 text-gray-600">~5.8×</td>
                    <td className="px-8 py-5 text-gray-500">Real-time / low-resource</td>
                  </tr>
                  <tr>
                    <td className="px-8 py-5 font-bold text-blue-600">MiniLM</td>
                    <td className="px-8 py-5 text-gray-500">~33M</td>
                    <td className="px-8 py-5 text-gray-500">6</td>
                    <td className="px-8 py-5 text-gray-500">Self-attention + value matrices — task-specific</td>
                    <td className="px-8 py-5 text-gray-600">79.4% / 90.7%</td>
                    <td className="px-8 py-5 text-gray-600">~4.6×</td>
                    <td className="px-8 py-5 text-gray-500">Best accuracy-speed balance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="text-sm font-bold text-gray-900 mb-2">BERT-Large</div>
                <p className="text-sm text-gray-500">Highest accuracy (EM: 83.2%, F1: 92.8%) but slowest. Best when accuracy is the top priority and compute resources are available.</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="text-sm font-bold text-blue-700 mb-2">DistilBERT</div>
                <p className="text-sm text-gray-500">Fastest model (~5.8× speedup). Most efficient on F1-per-inference-time. Ideal for real-time and low-resource deployment.</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="text-sm font-bold text-blue-700 mb-2">MiniLM</div>
                <p className="text-sm text-gray-500">Strongest accuracy among distilled models (EM: 79.4%, F1: 90.7%) with ~4.6× speedup. Best general-purpose choice.</p>
              </div>
            </div>
          </section>

          {/* Data Characteristics Section */}
          <section className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dataset Characteristics</h2>
            <p className="text-gray-500 mb-10">SQuAD v1.1 — Stanford Question Answering Dataset · ~18K contexts · ~87K questions · ~87K answer spans</p>
            <div className="bg-[#0f172a] rounded-[2.5rem] p-10 overflow-hidden relative shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-sm font-mono text-blue-300 overflow-x-auto leading-relaxed"><code>{`// SQuAD v1.1 Sample Instance
{
  "context": "Architecturally, the school has a Catholic character.
    Atop the Main Building's gold dome is a golden statue
    of the Virgin Mary...",
  "question": "To whom did the Virgin Mary allegedly appear
    in 1858 in Lourdes France?",
  "answers": {
    "text": ["Saint Bernadette Soubirous"],
    "answer_start": [515]
  }
}

// Model outputs logged per question:
// → Predicted answer text
// → Confidence score (from logits)
// → Inference time (seconds)`}</code></pre>
            </div>
          </section>

          {/* Future Work Section */}
          <section className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-10">Future Work</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-base font-bold text-gray-900 mb-2">Expand Model Coverage</h3>
                <p className="text-sm text-gray-500">Benchmark smaller models like TinyBERT and MobileBERT to extend the comparison across a wider range of distillation approaches.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-base font-bold text-gray-900 mb-2">Edge Device Testing</h3>
                <p className="text-sm text-gray-500">Measure latency and accuracy on real edge devices (e.g., Raspberry Pi, mobile) to validate distillation gains in production-like environments.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <h3 className="text-base font-bold text-gray-900 mb-2">Custom Distillation</h3>
                <p className="text-sm text-gray-500">Apply task-specific distillation from BERT using custom datasets and loss functions for domain-specific QA tasks.</p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-20 mt-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-12 mb-12">
              <div>
                <h4 className="text-xl font-bold mb-2">MIT 6.S964 Research Group</h4>
                <p className="text-gray-400 text-sm">Department of Electrical Engineering and Computer Science</p>
              </div>
              <div className="flex gap-8 mt-6 md:mt-0 text-sm font-medium">
                <a className="hover:text-blue-400 transition-colors" href="https://docs.google.com/presentation/d/17e1xzcxjGzClbwZSr4uD9uRQD-OksreEsuSg6CgflEY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Paper Presentation</a>
                <a className="hover:text-blue-400 transition-colors" href="#">Code Repo</a>
                <a className="hover:text-blue-400 transition-colors" href="#">BibTeX</a>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <p>© 2025 Gupta, Agarwal, & Ito. Academic Research Project.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DistillationBenchmarkPage;
