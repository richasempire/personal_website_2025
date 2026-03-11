import { useState } from "react";

const steps = [
  {
    id: 0,
    tag: "#00",
    title: "Initialize Environment",
    status: null,
    method: "baseline",
    prompt: null,
    promptFormatted: null,
    description: "Base 3D wireframe kitchen viewport loaded. No AI modifications applied.",
    metrics: { context: null, geometry: null, note: "Baseline wireframe model loaded into viewport." },
  },
  {
    id: 1,
    tag: "#01",
    title: "Wooden flooring via analogy",
    status: "PROCESSING_ANALOGY",
    method: "analogy",
    prompt: null,
    promptFormatted: (
      <>Transfer <span style={{ color: "#f472b6", fontWeight: 700 }}>wooden flooring material</span> from reference image onto the kitchen viewport floor area.</>
    ),
    description: "Reference kitchen image with wooden flooring provided. VLM transfers floor material.",
    metrics: { context: "94.1%", geometry: "High", note: "Floor plane detected and material transferred from reference." },
  },
  {
    id: 2,
    tag: "#02",
    title: "Green laminate surfaces",
    status: "PROCESSING_ANALOGY",
    method: "analogy",
    prompt: null,
    promptFormatted: (
      <>Apply <span style={{ color: "#f472b6", fontWeight: 700 }}>green laminate</span> to countertop and cupboard surfaces from reference kitchen image.</>
    ),
    description: "Reference kitchen with green laminate provided. VLM applies material to cabinet surfaces.",
    metrics: { context: "96.5%", geometry: "High", note: "Model successfully mapped laminate across L-shaped cabinet geometry." },
  },
  {
    id: 3,
    tag: "#03",
    title: "Add microwave & wood counter",
    status: "PROCESSING_TEXTUAL",
    method: "textual",
    prompt: "add microwave and make counter-top wooden",
    promptFormatted: (
      <>Add a <span style={{ color: "#f472b6", fontWeight: 700 }}>stainless steel microwave</span> into the upper cabinet niche and transform the countertop material to <span style={{ color: "#a78bfa", fontWeight: 700 }}>dark oak wood</span>.</>
    ),
    description: "Text prompt with area selection adds microwave and changes countertop to wood.",
    metrics: { context: "98.2%", geometry: "High", note: "Model successfully utilized visual analogy mapping for coordinate translation." },
  },
  {
    id: 4,
    tag: "#04",
    title: "Hanging ceiling lights",
    status: "PROCESSING_ANALOGY",
    method: "analogy",
    prompt: null,
    promptFormatted: (
      <>Place <span style={{ color: "#f472b6", fontWeight: 700 }}>cage-style pendant lights</span> from reference image at the designated ceiling position in viewport.</>
    ),
    description: "Reference pendant light image + placement selection. VLM adds matching fixtures.",
    metrics: { context: "91.8%", geometry: "Medium", note: "Pendant geometry approximated; lighting cast simulated." },
  },
  {
    id: 5,
    tag: "#05",
    title: "Dining table placement",
    status: "PROCESSING_ANALOGY",
    method: "analogy",
    prompt: null,
    promptFormatted: (
      <>Insert <span style={{ color: "#f472b6", fontWeight: 700 }}>round dining table with chairs</span> from reference into the selected foreground area.</>
    ),
    description: "Reference dining set image + area selection. VLM places furniture in scene.",
    metrics: { context: "93.4%", geometry: "High", note: "Table and chair arrangement placed with correct perspective scaling." },
  },
  {
    id: 6,
    tag: "#06",
    title: "Wooden cupboard texture",
    status: "PROCESSING_TEXTUAL",
    method: "textual",
    prompt: "wooden cupboard",
    promptFormatted: (
      <>Change upper cupboard material to <span style={{ color: "#a78bfa", fontWeight: 700 }}>natural wood grain</span> finish via area-targeted text prompt.</>
    ),
    description: "Text prompt targets upper cupboard, changing material to wood.",
    metrics: { context: "95.0%", geometry: "High", note: "Accurate area segmentation on upper cabinet only." },
  },
  {
    id: 7,
    tag: "#07",
    title: "Under-cabinet cove light",
    status: "PROCESSING_TEXTUAL",
    method: "textual",
    prompt: "cove light below cupboards",
    promptFormatted: (
      <>Add <span style={{ color: "#fbbf24", fontWeight: 700 }}>warm cove lighting strip</span> beneath the upper cupboard overhang.</>
    ),
    description: "Text prompt adds under-cabinet ambient lighting.",
    metrics: { context: "97.1%", geometry: "High", note: "Light emission rendered with realistic warm color temperature." },
  },
  {
    id: 8,
    tag: "#08",
    title: "Pastel shelf colour",
    status: "PROCESSING_TEXTUAL",
    method: "textual",
    prompt: "pastel colour shelves",
    promptFormatted: (
      <>Shift cupboard surfaces to <span style={{ color: "#86efac", fontWeight: 700 }}>pastel green</span> tone while preserving geometry and lighting.</>
    ),
    description: "Text prompt changes dark green cabinets to softer pastel tone.",
    metrics: { context: "92.7%", geometry: "High", note: "Colour shift applied uniformly; lighting interactions recalculated." },
  },
  {
    id: 9,
    tag: "#09",
    title: "Match chair colour",
    status: "PROCESSING_TEXTUAL",
    method: "textual",
    prompt: "match it with chair colour",
    promptFormatted: (
      <>Match the selected surface colour to the <span style={{ color: "#86efac", fontWeight: 700 }}>existing chair upholstery</span> in the current scene.</>
    ),
    description: "Model demonstrates contextual awareness by referencing existing scene elements.",
    metrics: { context: "96.3%", geometry: "High", note: "Cross-element colour sampling successful; contextual reference resolved." },
  },
];

const methodMeta = {
  baseline: { label: "BASELINE", color: "#6ee7b7", dot: "#34d399" },
  analogy: { label: "ANALOGY", color: "#f472b6", dot: "#ec4899" },
  textual: { label: "TEXTUAL", color: "#a78bfa", dot: "#8b5cf6" },
};

export default function App() {
  const [active, setActive] = useState(3);
  const s = steps[active];
  const m = methodMeta[s.method];

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", color: "#1e293b", fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace" }}>
      {/* Top Bar */}
      <header style={{ height: 48, background: "#ffffff", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: "linear-gradient(135deg, #a78bfa, #f472b6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#fff" }}>A</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", letterSpacing: "0.02em" }}>Analogy & Guidance to VLM for 3D Design</div>
            <div style={{ fontSize: 9, color: "#64748b", letterSpacing: "0.08em", textTransform: "uppercase" }}>Labs Research Environment v1.0.4</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          {Object.entries(methodMeta).map(([key, val]) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, fontWeight: 600, color: "#475569", letterSpacing: "0.08em" }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: val.dot }} />
              {val.label}
            </div>
          ))}
        </div>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", height: "calc(100vh - 48px)" }}>
        {/* Sidebar */}
        <aside style={{ background: "#ffffff", borderRight: "1px solid #e2e8f0", padding: "16px 0", overflowY: "auto" }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", color: "#64748b", textTransform: "uppercase", padding: "0 16px", marginBottom: 12 }}>Sequence Explorer</div>
          {steps.map((step, i) => {
            const isActive = active === i;
            const sm = methodMeta[step.method];
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "10px 16px",
                  background: isActive ? "#f1f5f9" : "transparent",
                  border: "none",
                  borderLeft: isActive ? `3px solid ${sm.dot}` : "3px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 10, color: isActive ? sm.color : "#64748b", fontWeight: 700 }}>{step.tag}</span>
                  {step.status && isActive && <div style={{ width: 5, height: 5, borderRadius: "50%", background: sm.dot, animation: "pulse 2s infinite" }} />}
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: isActive ? "#0f172a" : "#475569", marginTop: 2, lineHeight: 1.3 }}>{step.title}</div>
                {isActive && step.status && (
                  <div style={{ fontSize: 9, color: sm.color, marginTop: 3, letterSpacing: "0.04em" }}>STATUS: {step.status}</div>
                )}
              </button>
            );
          })}
        </aside>

        {/* Main Panel */}
        <main style={{ padding: 20, overflowY: "auto", display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Viewport Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {/* Input Viewport */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#475569", letterSpacing: "0.08em", textTransform: "uppercase" }}>Input_Stream.3DS</span>
                </div>
                <span style={{ fontSize: 9, color: "#64748b" }}>2048x2048 // L0D_0</span>
              </div>
              <div style={{
                aspectRatio: "4/3",
                borderRadius: 12,
                background: "#f1f5f9",
                border: "1px solid #e2e8f0",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <div style={{ position: "absolute", top: 12, left: 12, background: "#ffffff", border: "1px solid #cbd5e1", borderRadius: 4, padding: "3px 8px", fontSize: 9, fontWeight: 600, color: "#64748b", letterSpacing: "0.06em", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
                  WIREFRAME_OVERLAY
                </div>
                <div style={{ position: "absolute", top: 12, right: 12, display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: "#ffffff", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  </div>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: "#ffffff", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/></svg>
                  </div>
                </div>
                <div style={{ textAlign: "center", padding: 32 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 12, background: "#e2e8f0", border: "1px solid #cbd5e1", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  </div>
                  <div style={{ fontSize: 10, color: "#475569", maxWidth: 180 }}>Input viewport image<br/><span style={{ fontSize: 9, color: "#64748b" }}>(replace with actual screenshot)</span></div>
                </div>
              </div>
            </div>

            {/* Output Viewport */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={m.color} strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  <span style={{ fontSize: 10, fontWeight: 700, color: m.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>Output_Buffer.Render</span>
                </div>
                <span style={{ fontSize: 9, color: "#64748b" }}>PATH_TRACING_ACTIVE</span>
              </div>
              <div style={{
                aspectRatio: "4/3",
                borderRadius: 12,
                background: "linear-gradient(145deg, #faf5ff, #f5f3ff)",
                border: `2px solid ${m.dot}88`,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 4px 14px ${m.dot}25, inset 0 1px 0 rgba(255,255,255,0.8)`,
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: 40, height: 2, background: `linear-gradient(90deg, ${m.dot}, transparent)` }} />
                <div style={{ position: "absolute", top: 0, left: 0, width: 2, height: 40, background: `linear-gradient(180deg, ${m.dot}, transparent)` }} />
                <div style={{ position: "absolute", bottom: 0, right: 0, width: 40, height: 2, background: `linear-gradient(270deg, ${m.dot}, transparent)` }} />
                <div style={{ position: "absolute", bottom: 0, right: 0, width: 2, height: 40, background: `linear-gradient(0deg, ${m.dot}, transparent)` }} />
                <div style={{ position: "absolute", bottom: 14, left: 14, background: m.dot, borderRadius: 4, padding: "3px 10px", fontSize: 9, fontWeight: 700, color: "#fff", letterSpacing: "0.06em", display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ fontSize: 8 }}>✦</span> VLM GENERATED
                </div>
                <div style={{ textAlign: "center", padding: 32 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 12, background: `${m.dot}22`, border: `1px solid ${m.dot}66`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={m.color} strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </div>
                  <div style={{ fontSize: 10, color: "#475569", maxWidth: 180 }}>Output render<br/><span style={{ fontSize: 9, color: "#64748b" }}>(replace with actual output)</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 16 }}>
            {/* Instruction Context */}
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                <div style={{ width: 18, height: 18, borderRadius: 4, background: "linear-gradient(135deg, #a78bfa, #f472b6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#fff" stroke="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                </div>
                <span style={{ fontSize: 9, fontWeight: 700, color: "#64748b", letterSpacing: "0.1em", textTransform: "uppercase" }}>Instruction Context</span>
              </div>
              <div style={{ fontSize: 15, color: "#334155", lineHeight: 1.7, fontFamily: "'Inter', -apple-system, sans-serif", fontStyle: "italic" }}>
                &ldquo;{s.promptFormatted || s.description}&rdquo;
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
                <button style={{
                  padding: "10px 22px",
                  borderRadius: 8,
                  border: "none",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  letterSpacing: "0.02em",
                  fontFamily: "'SF Mono', monospace",
                }}>
                  Run Synthesis <span style={{ fontSize: 10 }}>▶</span>
                </button>
                <button style={{
                  padding: "10px 22px",
                  borderRadius: 8,
                  border: "1px solid #cbd5e1",
                  background: "transparent",
                  color: "#475569",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "'SF Mono', monospace",
                }}>
                  ↺ Revert
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                <div style={{ width: 18, height: 18, borderRadius: 4, background: "#0f766e", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span style={{ fontSize: 9, fontWeight: 700, color: "#64748b", letterSpacing: "0.1em", textTransform: "uppercase" }}>Metrics</span>
              </div>
              {s.metrics.context && (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #e2e8f0" }}>
                    <span style={{ fontSize: 10, fontWeight: 600, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase" }}>Context Retention</span>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "#059669" }}>{s.metrics.context}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #e2e8f0" }}>
                    <span style={{ fontSize: 10, fontWeight: 600, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase" }}>Geometry Accuracy</span>
                    <span style={{ fontSize: 13, fontWeight: 800, color: s.metrics.geometry === "High" ? "#059669" : "#d97706" }}>{s.metrics.geometry}</span>
                  </div>
                </>
              )}
              <p style={{ fontSize: 11, color: "#475569", lineHeight: 1.5, marginTop: 12, fontFamily: "'Inter', sans-serif" }}>
                {s.metrics.note}
              </p>
            </div>
          </div>

          {/* Phase Nav */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, padding: "8px 0" }}>
            <button
              onClick={() => setActive(Math.max(0, active - 1))}
              disabled={active === 0}
              style={{ width: 32, height: 32, borderRadius: 6, border: "1px solid #e2e8f0", background: "#ffffff", color: active === 0 ? "#cbd5e1" : "#475569", cursor: active === 0 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}
            >‹</button>
            <div style={{ background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 20, padding: "6px 16px", fontSize: 11, fontWeight: 700, color: "#475569", letterSpacing: "0.06em" }}>
              PHASE <span style={{ color: m.color }}>{String(active).padStart(2, "0")}</span> / {String(steps.length - 1).padStart(2, "0")}
            </div>
            <button
              onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
              disabled={active === steps.length - 1}
              style={{ width: 32, height: 32, borderRadius: 6, border: "1px solid #e2e8f0", background: "#ffffff", color: active === steps.length - 1 ? "#cbd5e1" : "#475569", cursor: active === steps.length - 1 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}
            >›</button>
          </div>

          {/* Footer */}
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "#94a3b8", padding: "0 4px", letterSpacing: "0.06em" }}>
            <span>KERNEL_V_1.0 // SESSION: XR-921</span>
            <span>MODEL: GPT-4o // {s.method.toUpperCase()} MODE</span>
          </div>
        </main>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
      `}</style>
    </div>
  );
}