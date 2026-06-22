import ctaBanner from "../assets/Frame_2.png";

export default function ShiftSection() {
  return (
    <>
      <style>{`
        .shift-wrapper {
          background: #F9F8F6;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 100px 24px;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          box-sizing: border-box;
        }

        .shift-container {
          width: 100%;
          max-width: 1000px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
        }

        /* ── Header ── */
        .shift-eyebrow {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #e03030;
          margin: 0 0 12px 0;
          text-align: center;
        }

        .shift-headline {
          font-size: clamp(28px, 3.2vw, 58px);
          font-weight: 900;
          color: #1a1a1a;
          margin: 0;
          text-align: center;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .shift-headline span {
          color: #e03030;
        }

        /* ── Comparison card ── */
        .compare-card {
          width: 100%;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.08);
          border: 1px solid #e2dbd2;
          display: flex;
          overflow: hidden;
          position: relative;
        }

        /* Divider + center badge */
        .compare-divider {
          width: 1px;
          background: #e2dbd2;
          flex-shrink: 0;
          position: relative;
        }

        .compare-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #1e2d40;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .compare-badge svg {
          display: block;
        }

        /* ── Panels ── */
        .panel {
          flex: 1 1 0;
          min-width: 0;
          padding: 36px 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .panel-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6e6a6a;
        }

        .panel-label.ai {
          color: #e03030;
        }

        .panel-label svg {
          flex-shrink: 0;
        }

        .panel-desc {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.4;
        }

        /* Old way list */
        .old-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid #e8e2db;
          border-radius: 8px;
          overflow: hidden;
        }

        .old-list-item {
          padding: 11px 16px;
          font-size: 14px;
          color: #1a1a1a;
          border-bottom: 1px solid #f0ebe3;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fafaf9;
        }

        .old-list-item:last-child {
          border-bottom: none;
        }

        .old-list-item .stars {
          color: #f0a500;
          font-size: 16px;
          letter-spacing: -1px;
        }

        .old-list-item .ad-tag {
          font-size: 10px;
          color: #6e6a6a;
          border: 1px solid #ddd;
          border-radius: 3px;
          padding: 1px 5px;
          margin-left: auto;
        }

        /* AI way */
        .ai-query {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }

        .ai-response-box {
          background: #f5f0eb;
          border-radius: 10px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ai-response-label {
          font-size: 16px;
          color: #1a1a1a;
          margin: 0;
        }

        .ai-result {
          background: #fff;
          border-radius: 8px;
          padding: 14px 16px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }

        .ai-result-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #e03030;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .ai-result-name {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 5px 0;
        }

        .ai-result-sub {
          font-size: 14px;
          color: #6e6a6a;
          margin: 0;
        }

        .section-divider {
  width: 100%;
  max-width: 2500px;
  border: none;
  margin-top: 0px;
  border-top: 5px solid #ffffff;
  margin: 8px 0 0;
}

       .hero-cta-banner {
  width: 100%;
  max-width: 320px;
  cursor: pointer;
  border-radius: 6px;
  transition: transform 0.2s ease, opacity 0.2s ease;
  margin-bottom: 16px;
  display: block;
}

.hero-cta-banner:hover {
  transform: scale(1.03);
  opacity: 0.93;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .hero-container { ... }
  .hero-right { ... }
  .info-bar { ... }

  .hero-cta-banner {
    max-width: 100%;   /* full width on mobile */
  }
}

      `}</style>

      <section className="shift-wrapper">
        <div className="shift-container">

          {/* Header */}
          <div style={{ textAlign: "center" }}>
            <p className="shift-eyebrow">The Shift</p>
            <h2 className="shift-headline">
              Old way vs. <span>The AI way</span>
            </h2>
          </div>

          {/* Comparison Card */}
          <div className="compare-card">

            {/* Left — Old Way */}
            <div className="panel">
              <div className="panel-label">
                {/* Search icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                Old Way
              </div>

              <p className="panel-desc">
                Search &amp; scroll through 10 identical ads, read reviews, compare prices...
              </p>

              <div className="old-list">
                {[
                  { name: "HVAC Pro Corp", stars: "★★★★☆", ad: true },
                  { name: "Cool Air Services", stars: "★★★☆☆", ad: true },
                  { name: "Joe's AC & Heat", stars: "★★★★☆", ad: true },
                  { name: "Best HVAC LLC", stars: "★★★☆☆", ad: false },
                  { name: "Quick Fix Cooling", stars: "★★★★☆", ad: false },
                ].map((item, i) => (
                  <div className="old-list-item" key={i}>
                    <span>{item.name}</span>
                    <span className="stars">{item.stars}</span>
                    {item.ad && <span className="ad-tag">Ad</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Divider + Badge */}
            <div className="compare-divider">
              <div className="compare-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="5" r="1" fill="#fff"/><circle cx="12" cy="12" r="1" fill="#fff"/><circle cx="12" cy="19" r="1" fill="#fff"/>
                </svg>
              </div>
            </div>

            {/* Right — AI Way */}
            <div className="panel">
              <div className="panel-label ai">
                {/* Sparkle icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e03030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                The AI Way
              </div>

              <p className="ai-query">"My AC died,it's 95° out,and there's a baby in the house.Who can come today?"</p>

              <div className="ai-response-box">
                <p className="ai-response-label">Based on reviews and response time in your area, I'd recommend:</p>
                <div className="ai-result">
                  <span className="ai-result-dot" />
                  <div>
                    <p className="ai-result-name">Your business could be here</p>
                    <p className="ai-result-sub">One name gets the call.Make it yours!!</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

         <img
  src={ctaBanner}
  alt="Save My Spot — BNI Members Only"
  className="hero-cta-banner"
  onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
/>

        </div>

        <br/>
        <br/>
        <br/>         
        <br/>
        <br/>
  
    
         <hr className="section-divider" />
      </section>
    </>
  );
}
