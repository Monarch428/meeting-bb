const yesItems = [
  "You own or run an HVAC business",
  "You run Ads / SEO and want what's next",
  "You've heard about AI search — no clue what it means",
  'You want a straight "should I bother?" answer first',
];

const skipItems = [
  "You want a deep technical course",
  "You're a marketing agency, not an HVAC owner",
  "You already have AI visibility dialed in",
];

export default function ForYouSection() {
  return (
    <>
      <style>{`
        .foryou-wrapper {
          background: #F9F8F6;
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 80px 24px;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          box-sizing: border-box;
        }

        .foryou-container {
          width: 100%;
          max-width: 1000px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        /* Header */
        .foryou-headline {
          font-size: clamp(28px, 4vw, 58px);
          font-weight: 900;
          color: #1a1a1a;
          margin: 0 0 6px 0;
          text-align: center;
          letter-spacing: -0.02em;
          line-height: 1.08;
        }

        .foryou-sub {
          font-size: 20px;
          color: #746d6d;
          margin: 20px 0px 0;
          text-align: center;
        }

        /* Cards row */
        .foryou-cards {
          width: 100%;
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        /* Base card */
        .foryou-card {
          flex: 1 1 0;
          min-width: 0;
          background: #fff;
          border-radius: 16px;
          padding: 28px 32px;
          
          display: flex;
          flex-direction: column;
          gap: 18px;
          border: 1px solid #e8e2db;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }

        /* Yes card — red border */
        .foryou-card.yes {
          border: 1.5px solid #f5c0c0;
        }

        /* Skip card — grey tint */
        .foryou-card.skip {
          background: #f5f2ee;
          border: 1px solid #e2dbd2;
        }

        /* Card header row */
        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .card-badge {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: -2px;
        }

        .card-badge.red {
          background: #e03030;
        }

        .card-badge.grey {
          background: #d0ccc6;
        }

        .card-title {
          font-size: 18px;
          font-weight: 800;
          color: #1a1a1a;
          margin: 0;
        }

        /* List items */
        .card-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .card-list-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 18px;
          font-weight: 500;
          color: #444;
          line-height: 1.5;
        }

        .card-list-item.skip-item {
          color: #888;
        }

        .list-icon {
          flex-shrink: 0;
          margin-top: 1px;
        }

          .section-divider {
  width: 100%;
  max-width: 2500px;
  border: none;
  margin-top: 100px;
  border-top: 5px solid #ffffff;
  margin: 1px 0 0;
}

        /* Responsive */
        @media (max-width: 768px) {
          .foryou-cards {
            flex-direction: column;
          }
        }
      `}</style>

      <section className="foryou-wrapper">
        <div className="foryou-container">

          {/* Header */}
          <div style={{ textAlign: "center" }}>
            <h2 className="foryou-headline">Is this for you?</h2>
            <p className="foryou-sub">Honest, in 10 seconds.</p>
          </div>

          {/* Cards */}
          <div className="foryou-cards">

            {/* Yes card */}
            <div className="foryou-card yes">
              <div className="card-header">
                <div className="card-badge red">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="card-title">Yes — show up</p>
              </div>

              <div className="card-list">
                {yesItems.map((text, i) => (
                  <div className="card-list-item" key={i}>
                    <span className="list-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="#e03030" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Skip card */}
            <div className="foryou-card skip">
              <div className="card-header">
                <div className="card-badge grey">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </div>
                <p className="card-title">Probably skip if...</p>
              </div>

              <div className="card-list">
                {skipItems.map((text, i) => (
                  <div className="card-list-item skip-item" key={i}>
                    <span className="list-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="#bbb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                    </span>
                    {text}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}
