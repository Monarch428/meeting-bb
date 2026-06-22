import hostPhoto from "../assets/host.png";
import bniLogo from "../assets/bni-logo.png";

export default function HostSection() {
  return (
    <>
      <style>{`
        .host-wrapper {
          background: #F9F8F6;
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 100px 24px;
          font-family: Inter, "Helvetica Neue", Arial, sans-serif;
          box-sizing: border-box;
        }

        .host-container {
          width: 100%;
          max-width: 1000px;
          display: flex;
          align-items: center;
          gap: 64px;
        }

        .host-photo-wrap {
          flex-shrink: 0;
          width: 340px;
          height: 400px;
          border-radius: 16px;
          overflow: hidden;
          background: #d0c8be;
        }

        .host-photo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .host-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .host-eyebrow {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #e03030;
          margin: 0;
        }

        .host-name {
          font-size: clamp(28px, 3.6vw, 58px);
          font-weight: 900;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.1;
        }

        .host-role {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
          font-size: 18px;
          color: #1a1a1a;
          font-weight: 600;
          margin: 0;
          font-family: "Courier New", monospace;
        }

        .bni-wrap {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .bni-logo {
          width: 24px;
          height: 24px;
          object-fit: contain;
          display: block;
        }

        .host-bio {
          font-size: 18px;
          color: #1a1a1a;
          line-height: 1.7;
          margin: 0;
        }

        .host-promise {
          background: #f5f0eb;
          border: 1px solid #e2dbd2;
          border-radius: 12px;
          padding: 18px 20px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .host-promise-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .host-promise p {
          font-size: 18px;
          color: #444;
          margin: 0;
          line-height: 1.6;
        }

        .host-promise strong {
          color: #e03030;
        }

        .section-divider {
          width: 100%;
          border-top: 5px solid #ffffff;
          margin: 10px 0 0;
        }

        @media (max-width: 768px) {
          .host-wrapper {
            padding: 64px 16px;
          }

          .host-container {
            flex-direction: column;
            gap: 32px;
          }

          .host-photo-wrap {
            width: 100%;
            height: 300px;
          }

          .host-role {
            font-size: 16px;
            justify-content: center;
          }

          .host-content {
            text-align: center;
          }

          .host-bio,
          .host-promise p {
            font-size: 16px;
          }

          .host-promise {
            text-align: left;
          }
        }
      `}</style>

      <section className="host-wrapper">
        <div className="host-container">
          {/* Photo */}
          <div className="host-photo-wrap">
            <img src={hostPhoto} alt="Vigneshwaran" />
          </div>

          {/* Content */}
          <div className="host-content">
            <p className="host-eyebrow">YOUR HOST</p>

            <h2 className="host-name">Vignesh</h2>

            <p className="host-role">
              <span>· Founder of BrandingBeez ·</span>

              <span className="bni-wrap">
                <img
                  src={bniLogo}
                  alt="BNI"
                  className="bni-logo"
                />
                <span>Former BNI Member</span>
              </span>
            </p>

            <p className="host-bio">
             A decade in digital marketing. For the past year, I've been studying how AI tools like ChatGPT decide which local businesses to recommend and why most HVAC companies aren't in the running. I've already walked agency clients through this shift, and this session is me handing HVAC owners the same playbook, for free.

            </p>

            <div className="host-promise">
              <span className="host-promise-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e03030"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>

              <p>
                <strong>Our promise:</strong> zero pitch during the call. If you want to talk further, that's a separate conversation, on your terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>
    </>
  );
}
