import { useState, useEffect, useRef } from "react";

export default function SeatCounter() {
  const [seats, setSeats]       = useState(() => {
    const saved = sessionStorage.getItem("hvac_seats");
    return saved ? parseInt(saved) : 11;
  });
  const [animating, setAnimating] = useState(false);
  const timerRef                  = useRef(null);

  useEffect(() => {
    const scheduleNext = () => {
      // Random interval between 8–14 seconds
      const delay = Math.floor(Math.random() * 6000) + 8000;
      timerRef.current = setTimeout(() => {
        setSeats((prev) => {
          if (prev <= 3) {
            sessionStorage.setItem("hvac_seats", 3);
            return 3;
          }
          const next = prev - 1;
          sessionStorage.setItem("hvac_seats", next);
          return next;
        });
        setAnimating(true);
        setTimeout(() => setAnimating(false), 600);
        scheduleNext();
      }, delay);
    };

    scheduleNext();
    return () => clearTimeout(timerRef.current);
  }, []);

  const isLow = seats <= 5;

  return (
    <>
      <style>{`
        .seat-counter-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 20px 0 0 0;
          margin-bottom: 50px;
        }

        .seat-pulse-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: ${isLow ? "#e03030" : "#22c55e"};
          flex-shrink: 0;
          animation: seat-pulse 1.4s infinite;
        }

        .seat-text {
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: -0.01em;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .seat-number-wrap {
          display: inline-flex;
          overflow: hidden;
          height: 1.2em;
          align-items: center;
        }

        .seat-number {
          display: inline-block;
          font-size: 15px;
          font-weight: 900;
          color: ${isLow ? "#e03030" : "#1a1a1a"};
          transform: translateY(${animating ? "-100%" : "0"});
          opacity: ${animating ? "0" : "1"};
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.35s ease;
          min-width: 18px;
          text-align: center;
        }

        .seat-label {
          font-size: 15px;
          font-weight: 600;
          color: #555;
        }

        .seat-bar-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 6px;
        }

        .seat-bar-bg {
          width: 140px;
          height: 5px;
          background: #e8e2db;
          border-radius: 999px;
          overflow: hidden;
        }

        .seat-bar-fill {
          height: 100%;
          border-radius: 999px;
          background: ${isLow ? "#e03030" : "#22c55e"};
          width: ${((20 - seats) / 20) * 100}%;
          transition: width 0.6s ease, background 0.4s ease;
        }

        .seat-bar-label {
          font-size: 11px;
          font-weight: 600;
          color: #aaa;
          white-space: nowrap;
        }

        @keyframes seat-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.5); opacity: 0.5; }
        }
      `}</style>

      <div>
        {/* Main counter row */}
        <div className="seat-counter-wrap">
          <span className="seat-pulse-dot" />
          <div className="seat-text">
            <div className="seat-number-wrap">
              <span className="seat-number">{seats}</span>
            </div>
            <span className="seat-label">
              {isLow ? "seats left — filling fast!" : "free spots remaining for July 15th"}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="seat-bar-wrap">
          <div className="seat-bar-bg">
            <div className="seat-bar-fill" />
          </div>
          <span className="seat-bar-label">
            {20 - seats} of 20 spots taken
          </span>
        </div>
      </div>
    </>
  );
}