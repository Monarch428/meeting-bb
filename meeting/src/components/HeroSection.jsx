import React, { useState, useEffect } from "react";
import SeatCounter from "./SeatCounter";
import ctaBanner from "../assets/Frame_2.png";

const typingText = "My AC just died and it's 95 degrees outside with a baby in the house. Who can come out today near me?";

export default function HeroSection() {
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + typingText[charIndex]);
        setCharIndex((i) => i + 1);
      }, 45);
      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  return (
    <>
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }

        @keyframes banner-flash {
          0%   { left: -75%; opacity: 0; }
          15%  { opacity: 1; }
          50%  { left: 125%; opacity: 1; }
          51%  { opacity: 0; }
          100% { left: 125%; opacity: 0; }
        }

        .hero-wrapper {
          background: #F9F8F6;
          display: flex;
          min-height: 15vh;
          flex-direction: column;
          align-items: center;
          padding: 100px 24px 2px;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          box-sizing: border-box;
        }

        .hero-container {
          width: 100%;
          max-width: 1100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          padding-bottom: 56px;
        }

        .hero-left {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-right {
          flex: 1 1 0;
          min-width: 0;
        }

        .hero-badge {
          display: inline-block;
          background: #ffffff;
          border: 1px solid #000000;
          color: #000000;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          padding: 8px 16px;
          border-radius: 999px;
          margin-bottom: 28px;
          text-transform: uppercase;
        }

        .hero-badge-red {
          color: #e03030;
        }

        .hero-headline {
          font-size: clamp(32px, 3.6vw, 64px);
          font-weight: 900;
          line-height: 1;
          color: #1a1a1a;
          margin: 0 0 40px 0;
          letter-spacing: -0.02em;
          text-align: left;
        }

        .hero-accent {
          color: #e03030;
        }

        .hero-subtext {
          font-size: 18px;
          line-height: 1.4;
          color: #000000;
          margin: 0 0 36px 0;
          max-width: 450px;
          text-align: left;
        }

        /* ── CTA Banner ── */
        .hero-cta-banner-wrap {
          position: relative;
          display: inline-block;
          width: 100%;
          max-width: 320px;
          cursor: pointer;
          margin-bottom: 16px;
          border-radius: 6px;
          overflow: hidden;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .hero-cta-banner-wrap:hover {
          transform: scale(1.03);
          opacity: 0.93;
        }

        .hero-cta-banner-wrap::after {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.5) 50%,
            transparent 100%
          );
          animation: banner-flash 2.2s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-cta-banner {
          width: 100%;
          display: block;
          border-radius: 6px;
        }

        /* ── Browser Mockup ── */
        .browser {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 10px 48px rgba(0,0,0,0.10);
          overflow: hidden;
          border: 1px solid #ddd6cc;
          width: 100%;
        }

        .browser-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 12px 18px;
          background: #F9F8F6;
          border-bottom: 1px solid #d9d1c6;
        }

        .dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }

        .address-bar {
          margin-left: 10px;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 5px 16px;
          font-size: 12px;
          color: #999;
          flex: 1;
          text-align: center;
        }

        .browser-content {
          padding: 28px;
        }

        .b-label {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #6e6a6a;
          text-transform: uppercase;
          margin: 0 0 10px 0;
          text-align: center;
        }

        .query-box {
          background: #f0ebe3;
          border-radius: 7px;
          padding: 14px 18px;
          font-size: 14px;
          color: #1a1919;
          margin-bottom: 24px;
          min-height: 44px;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .cursor {
          display: inline-block;
          animation: blink 1s step-start infinite;
          color: #e03030;
          font-weight: 300;
        }

        .response-box {
          background: #f0ebe3;
          border-radius: 7px;
          padding: 18px;
        }

        .response-intro {
          font-size: 14px;
          color: #1a1919;
          margin: 0 0 14px 0;
          line-height: 1.5;
        }

        .result-card {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: #fff;
          border-radius: 7px;
          padding: 14px 16px;
          box-shadow: 0 1px 5px rgba(0,0,0,0.06);
        }

        .result-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #e03030;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .result-name {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 4px 0;
        }

        .result-sub {
          font-size: 12px;
          color: #6e6a6a;
          margin: 0;
        }

        /* ── Info Bar ── */
        .info-bar-wrapper {
          width: 100%;
          background: #ffffff;
          border-top: 1px solid #d6cfc6;
          display: flex;
          justify-content: center;
        }

        .info-bar {
          width: 100%;
          max-width: 1100px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 48px;
          padding: 20px 0;
          flex-wrap: wrap;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          color: #555;
          white-space: nowrap;
        }

        .info-item svg {
          flex-shrink: 0;
        }

        .info-label {
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-size: 20px;
          color: #e03030;
          margin-right: 2px;
        }

        .info-value {
          font-weight: 700;
          color: #1a1a1a;
          font-size: 20px;
        }

        .info-value.red {
          color: #e03030;
        }

        @media (max-width: 960px) {
          .hero-wrapper {
            padding: 72px 20px 0;
          }

          .hero-container {
            gap: 36px;
            padding-bottom: 40px;
          }

          .hero-headline {
            margin-bottom: 28px;
          }

          .browser-content {
            padding: 22px;
          }

          .info-bar {
            gap: 16px 24px;
            padding: 18px 20px;
          }

          .info-item {
            width: calc(50% - 12px);
            min-width: 0;
            white-space: normal;
          }
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hero-wrapper {
            padding: 56px 16px 0;
          }

          .hero-container {
            flex-direction: column;
            gap: 32px;
            padding-bottom: 32px;
          }

          .hero-left {
            align-items: center;
            text-align: center;
          }

          .hero-right {
            width: 100%;
          }

          .hero-badge,
          .hero-headline,
          .hero-subtext {
            text-align: center;
          }

          .hero-badge {
            margin-bottom: 20px;
          }

          .hero-subtext {
            font-size: 16px;
            margin-bottom: 28px;
          }

          .browser-bar {
            padding: 10px 12px;
          }

          .address-bar {
            padding: 5px 10px;
            font-size: 11px;
          }

          .browser-content {
            padding: 18px 16px;
          }

          .query-box,
          .response-box {
            padding-left: 14px;
            padding-right: 14px;
          }

          .info-bar {
            gap: 12px;
            padding: 16px;
          }

          .info-item {
            width: 100%;
            justify-content: flex-start;
            font-size: 14px;
          }

          .info-label,
          .info-value {
            font-size: 16px;
          }

          .hero-cta-banner-wrap {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .hero-headline {
            font-size: clamp(30px, 11vw, 42px);
          }

          .hero-subtext {
            font-size: 15px;
          }

          .result-card {
            padding: 12px 14px;
          }
        }
      `}</style>

      <div className="hero-wrapper">
        <div className="hero-container">

          {/* Left Column */}
          <div className="hero-left">
            <h2 className="hero-badge">
              ONLY FOR{"   "}
              <span style={{ color: "#e03030" }}>BNI HVAC OWNERS</span>
            </h2>

            <h1 className="hero-headline">
              Your next customer just asked AI who to call.{" "}
              <span className="hero-accent">Was it you?</span>
            </h1>

            <p className="hero-subtext">
              Homeowners are skipping Google and asking ChatGPT directly. Whoever
              gets named, gets the call. Most HVAC members in BNI don't know if
              they're the one getting named & I'll show you, live.
            </p>

            {/* CTA Banner with shine effect */}
            <div
              className="hero-cta-banner-wrap"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <img
                src={ctaBanner}
                alt="Save My Spot — BNI Members Only"
                className="hero-cta-banner"
              />
            </div>

            <SeatCounter />
          </div>

          {/* Right Column — Browser Mockup */}
          <div className="hero-right">
            <div className="browser">
              <div className="browser-bar">
                <span className="dot" style={{ background: "#ff5f57" }} />
                <span className="dot" style={{ background: "#febc2e" }} />
                <span className="dot" style={{ background: "#28c840" }} />
                <div className="address-bar">CHATGPT-search.com</div>
              </div>

              <div className="browser-content">
                <p className="b-label">CHATGPT SEARCH QUERY</p>
                <div className="query-box">
                  <span>{displayed}</span>
                  <span className="cursor">|</span>
                </div>

                <p className="b-label">CHATGPT RESPONSE</p>
                <div className="response-box">
                  <p className="response-intro">
                    Based on reviews, response time, service history in your area, I'd recommend:
                  </p>
                  <div className="result-card">
                    <span className="result-dot" />
                    <div>
                      <p className="result-name">Your Business could be here</p>
                      <p className="result-sub">One name gets the call. Make it yours!!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Info Bar */}
      <div className="info-bar-wrapper">
        <div className="info-bar">

          <div className="info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e03030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span className="info-label">Date:</span>
            <span className="info-value">Wed, 15 July 2026</span>
          </div>

          <div className="info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e03030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <span className="info-label">Time:</span>
            <span className="info-value">10:30 AM EST</span>
          </div>

          <div className="info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e03030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
            </svg>
            <span className="info-label">Where:</span>
            <span className="info-value">Online · Zoom</span>
          </div>

          <div className="info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e03030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
            <span className="info-label">Cost:</span>
            <span className="info-value">100% Free</span>
          </div>

        </div>
      </div>
    </>
  );
}
