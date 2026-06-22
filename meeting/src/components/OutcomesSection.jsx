const outcomes = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: "Why customers now skip Google",
    sub: "Real examples, not theory.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Different from Ads or SEO?",
    sub: "Short answer: no. We'll show why.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
      </svg>
    ),
    title: "How a question becomes a call",
    sub: "Where most HVAC companies drop out.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
        <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    ),
    title: "A checklist for your website",
    sub: "Most fixes take an afternoon.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "Ask us anything",
    sub: "Live Q&A — bring your business.",
  },
];

export default function OutcomesSection() {
  return (
    <>
      <style>{`
        .outcomes-wrapper {
          background: #F9F8F6;
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 100px 24px;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          box-sizing: border-box;
        }

        .outcomes-container {
          width: 100%;
          max-width: 780px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .outcomes-eyebrow {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #e03030;
          margin: 0 0 8px 0;
          text-align: center;
        }

        .outcomes-headline {
          font-size: clamp(28px, 4vw, 58px);
          font-weight: 800;
          color: #1a1a1a;
          margin: 0 0 28px 0;
          text-align: center;
          letter-spacing: -0.02em;
          line-height: 1.08;
        }

        .outcome-item {
          width: 100%;
          background: #fff;
          border-radius: 14px;
          border: 1px solid #e8e2db;
          padding: 18px 22px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }

        .outcome-icon-badge {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #e03030;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .outcome-body {
          display: flex;
          flex-direction: column;
          gap: 3px;
          flex: 1;
        }

        .outcome-title {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 5px 0;
        }

        .outcome-sub {
          font-size: 14px;
          color: #999;
          margin: 0;
        }

        .outcomes-summary {
          width: 100%;
          background: #e4dfd7;
          border-radius: 12px;
          border: 1px solid #d6cfc6;
          padding: 22px 24px;
          margin-top: 8px;
          margin-bottom: -10px;
        }

        .section-divider {
  width: 100%;
  max-width: 2500px;
  border: none;
  margin-top: 0px;
  border-top: 5px solid #ffffff;
  margin: 0px 0 0;
}

        .outcomes-summary p {
          font-size: 18px;
          font-weight: 700;
          color: #e03030;
          margin-bottom: 0px;
          margin: 0;
        }
      `}</style>

      <section className="outcomes-wrapper">
        <div className="outcomes-container">

          <p className="outcomes-eyebrow">Session Outcomes</p>
          <h2 className="outcomes-headline">What you'll walk away with</h2>

          {outcomes.map((item, i) => (
            <div className="outcome-item" key={i}>
              <div className="outcome-icon-badge">{item.icon}</div>
              <div className="outcome-body">
                <p className="outcome-title">{item.title}</p>
                <p className="outcome-sub">{item.sub}</p>
              </div>
            </div>
          ))}

          <div className="outcomes-summary">
            <p>30 minutes. One straight answer to "should I be doing something about this?"</p>
          </div>

        </div>
      </section>
      <hr className="section-divider" />
    </>
  );
}
