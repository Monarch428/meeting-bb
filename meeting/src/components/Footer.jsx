export default function Footer() {
  return (
    <>
      <style>{`
        .footer-wrapper {
          background: #fff;
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 24px 24px;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          box-sizing: border-box;
          border-top: 1px solid #e8e2db;
        }

        .footer-container {
          width: 100%;
          max-width: 1000px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        /* Left */
        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footer-brand {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }

        .footer-tagline {
          font-size: 16px;
          color: #6e6a6a;
          font-family: 'Courier New', monospace;
          margin: 0;
        }

        /* Right */
        .footer-right {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 16px;
          color: #6e6a6a;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #e03030;
        }

        @media (max-width: 560px) {
          .footer-container {
            flex-direction: column;
            gap: 16px;
          }
          .footer-right {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      <footer className="footer-wrapper">
        <div className="footer-container">

          {/* Left — brand */}
          <div className="footer-left">
            <p className="footer-brand">BrandingBeez</p>
            <p className="footer-tagline">Seats limited to BNI HVAC business owners.</p>
          </div>

          {/* Right — links */}
          <div className="footer-right">
            <a href="https://brandingbeez.co.uk" target="_blank" rel="noreferrer" className="footer-link">
              brandingbeez.co.uk
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>

            <a href="mailto:info@brandingbeez.co.uk" className="footer-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              info@brandingbeez.co.uk
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}
