import { useState, useEffect, useRef } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const fakeRegistrants = [
  { fullName: "James",   time: "2 days ago" },
  { fullName: "Mike ",   time: "5 days ago" },
  { fullName: "Sarah",   time: "3 days ago" },
  { fullName: "David",   time: "2days ago" },
  { fullName: "Lisa",   time: "5 daysago" },
  { fullName: "Robert",  time: "1 days ago" },
  { fullName: "Emily ",  time: "2 daysago" },
  { fullName: "Kevin",    time: "5 days ago" },
  { fullName: "Amanda",   time: "3 daysago" },
  { fullName: "Chris",    time: "3 days ago" },
  { fullName: "Jessica",  time: "4 days ago" },
  { fullName: "Daniel",     time: "1 days ago" },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}




const avatarColors = [
  "#e03030", "#2563eb", "#16a34a", "#d97706",
  "#7c3aed", "#0891b2", "#be185d", "#065f46",
];

function getColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i);
  return avatarColors[hash % avatarColors.length];
}

export default function RegistrationPopup() {
  const [visible, setVisible]       = useState(false);
  const [current, setCurrent]       = useState(null);
  const [allNames, setAllNames]     = useState([]);
  const [dismissed, setDismissed]   = useState(false);
  const indexRef                    = useRef(0);
  const timeoutRef                  = useRef(null);
  const hideTimeoutRef              = useRef(null);

  // ── Fetch real registrants from backend ──
  useEffect(() => {
    const fetchReal = async () => {
      try {
        const res  = await fetch(`${API_BASE_URL}/api/register`);
        const data = await res.json();

        const real = (data.data || []).map((r) => ({
          fullName: r.fullName,

          time:     "Just now",
          real:     true,
        }));

        const fake = fakeRegistrants.map((f) => ({
          ...f,
          real: false,
        }));

        // Interleave real and fake
        const merged = [];
        let ri = 0, fi = 0;
        while (ri < real.length || fi < fake.length) {
          if (ri < real.length) merged.push(real[ri++]);
          if (fi < fake.length) merged.push(fake[fi++]);
        }

        // Shuffle
        const shuffled = merged.sort(() => Math.random() - 0.5);
        setAllNames(shuffled);
      } catch {
        // If backend unreachable, use only fake names
        setAllNames(fakeRegistrants.map((f) => ({ ...f, real: false })));
      }
    };

    fetchReal();
  }, []);

  // ── Show popup loop ──
  useEffect(() => {
    if (allNames.length === 0 || dismissed) return;

    const showNext = () => {
      const person = allNames[indexRef.current % allNames.length];

      // Assign random time for fake names
      const entry = person.real
        ? { ...person, time: "Just now" }
        : { ...person, time: "3 days ago" };

      setCurrent(entry);
      setVisible(true);
      indexRef.current += 1;

      // Hide after 4 seconds
      hideTimeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 4000);

      // Show next after 6-9 seconds
      const next = Math.floor(Math.random() * 3000) + 6000;
      timeoutRef.current = setTimeout(showNext, next);
    };

    // First popup after 3 seconds
    timeoutRef.current = setTimeout(showNext, 3000);

    return () => {
      clearTimeout(timeoutRef.current);
      clearTimeout(hideTimeoutRef.current);
    };
  }, [allNames, dismissed]);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
    clearTimeout(timeoutRef.current);
    clearTimeout(hideTimeoutRef.current);
  };

  if (!current) return null;

  return (
    <>
      <style>{`
        .reg-popup-wrapper {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform: ${visible ? "translateY(0) scale(1)" : "translateY(120%) scale(0.9)"};
          opacity: ${visible ? "1" : "0"};
          pointer-events: ${visible ? "all" : "none"};
        }

        .reg-popup-card {
          background: #ffffff;
          border-radius: 14px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 280px;
          max-width: 320px;
          border: 1px solid #f0ebe3;
          position: relative;
        }

        .reg-popup-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
          font-family: 'Inter', Arial, sans-serif;
        }

        .reg-popup-body {
          flex: 1;
          min-width: 0;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
        }

        .reg-popup-name {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 2px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

       
        .reg-popup-meta {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .reg-popup-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
          animation: reg-pulse 1.5s infinite;
        }

        .reg-popup-time {
          font-size: 11px;
          color: #aaa;
        }

        .reg-popup-action {
          font-size: 12px;
          font-weight: 700;
          color: #e03030;
          margin: 0;
        }

        .reg-popup-close {
          position: absolute;
          top: 8px;
          right: 10px;
          background: none;
          border: none;
          cursor: pointer;
          color: #bbb;
          font-size: 16px;
          line-height: 1;
          padding: 0;
          transition: color 0.2s;
        }

        .reg-popup-close:hover {
          color: #1a1a1a;
        }

        .reg-popup-badge {
          position: absolute;
          top: -8px;
          right: 32px;
          background: #e03030;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 999px;
          letter-spacing: 0.04em;
          font-family: 'Inter', Arial, sans-serif;
        }

        @keyframes reg-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.4); }
        }

        @media (max-width: 480px) {
          .reg-popup-wrapper {
            left: 12px;
            right: 12px;
            bottom: 16px;
          }
          .reg-popup-card {
            min-width: unset;
            max-width: unset;
            width: 100%;
          }
        }
      `}</style>

      <div className="reg-popup-wrapper">
        <div className="reg-popup-card">

          {/* Red badge at top */}
          <span className="reg-popup-badge">REGISTERED</span>

          {/* Avatar */}
          <div
            className="reg-popup-avatar"
            style={{ background: getColor(current.fullName) }}
          >
            {getInitials(current.fullName)}
          </div>

          {/* Body */}
          <div className="reg-popup-body">
            <p className="reg-popup-name">{current.fullName}</p>
            <p className="reg-popup-company">{current.company}</p>
            <div className="reg-popup-meta">
              <span className="reg-popup-dot" />
              <span className="reg-popup-time">{current.time}</span>
            </div>
            <p className="reg-popup-action"> registered for July 15th ✓</p>
          </div>

          {/* Close button */}
          <button className="reg-popup-close" onClick={handleDismiss}>
            ✕
          </button>

        </div>
      </div>
    </>
  );
}
