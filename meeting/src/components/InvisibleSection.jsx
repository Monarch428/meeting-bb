export default function InvisibleSection() {
  return (
    <>
      <style>{`
        .invisible-wrapper {
          background: #F9F8F6;
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 0 24px;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          box-sizing: border-box;
        }

        .invisible-container {
          width: 100%;
          max-width: 750px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
        }

        .invisible-icon-wrap {
          width: 64px;
          height: 64px;
          background: #fde8e8;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .invisible-headline {
          font-size: clamp(28px, 3.8vw, 52px);
          font-weight: 900;
          color: #1a1a1a;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .invisible-headline-red {
          color: #e03030;
        
        }

        .invisible-subtext {
          font-size: 20px;
          color: #5a5555;
          line-height: 1.65;
          margin: 0;
          max-width: 560px;
        }

         .section-divider {
  width: 100%;
  max-width: 2500px;
  border: none;
  margin-top: 0px;
  border-top: 5px solid #ffffff;
  margin: 100px 0 0;
}

        .invisible-bold {
          font-size: 20px;
          font-weight: 700;
          color: #e03030;
          margin: 0;
          margin-bottom: 100px;
        }

        @media (max-width: 768px) {
          .invisible-wrapper {
            padding: 0 16px;
          }

          .invisible-subtext,
          .invisible-bold {
            font-size: 17px;
          }

          .invisible-bold {
            margin-bottom: 56px;
          }

          .section-divider {
            margin-top: 56px;
          }
        }
      `}</style>

      <section className="invisible-wrapper">
        <div className="invisible-container">

          {/* Icon */}
          <div className="invisible-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#e03030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-off-icon lucide-phone-off"><path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272"/><path d="M22 2 2 22"/><path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"/></svg>
          </div>

          {/* Headline */}
          <h2 className="invisible-headline">
            It's invisible in your reports <br/><span style={{ color: "#e03030" }}>
              until you lose the call.
            </span>
          </h2>
          

          {/* Subtext */}
          <p className="invisible-subtext">
            There's no Google Analytics line that says "AI didn't mention you." It
            just shows up as a phone that doesn't ring.
          </p>

          {/* Bold closing line */}
          <p className="invisible-bold">
            This session makes the invisible part visible, in plain English.
          </p>

        </div>
        
      </section>
      <hr className="section-divider" />
    </>
  );
}
