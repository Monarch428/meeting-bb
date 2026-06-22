import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function RegisterSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async () => {
    if (!form.fullName.trim() || !form.email.trim()) {
      setError("Please fill in your full name and email address.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Could not reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── Success screen ──
  if (submitted) {
    return (
      <>
        <style>{`
          .register-wrapper {
            background: #F9F8F6;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 100px 24px;
            font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
            box-sizing: border-box;
          }
        `}</style>
        <section className="register-wrapper" id="register">
          <div style={{
            textAlign: "center", display: "flex", flexDirection: "column",
            alignItems: "center", gap: "20px", maxWidth: 480
          }}>
            <div style={{
              width: 72, height: 72, borderRadius: "50%",
              background: "#e8f5e9", display: "flex",
              alignItems: "center", justifyContent: "center"
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
                stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2 style={{
              fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800,
              color: "#1a1a1a", margin: 0, letterSpacing: "-0.02em"
            }}>
              You're registered!
            </h2>
            <p style={{ fontSize: 18, color: "#5a5555", margin: 0, lineHeight: 1.6 }}>
              We've sent the Zoom link to{" "}
              <strong style={{ color: "#1a1a1a" }}>{form.email}</strong>.
              Check your inbox (and spam just in case).
            </p>
            <div style={{
              background: "#fff", border: "1px solid #e2dbd2",
              borderRadius: 12, padding: "20px 28px", width: "100%",
              display: "flex", flexDirection: "column", gap: 10
            }}>
              {[
                { label: "Date",  value: "Wed, July 15, 2026" },
                { label: "Time",  value: "10:30 AM EST" },
                { label: "Where", value: "Online · Zoom" },
                { label: "Cost",  value: "100% Free" },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: 15 }}>
                  <span style={{ color: "#e03030", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {label}
                  </span>
                  <span style={{ fontWeight: 600, color: "#1a1a1a" }}>{value}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 14, color: "#aaa", margin: 0 }}>
              No selling. No upsells. Just straight talk about what's changing.
            </p>
          </div>
        </section>
      </>
    );
  }

  // ── Form ──
  return (
    <>
      <style>{`
        .register-wrapper {
          background: #F9F8F6;
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 100px 24px;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          box-sizing: border-box;
        }
        .register-container {
          width: 40%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }
        .register-eyebrow {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #e03030;
          margin: 0 0 8px 0;
          text-align: center;
        }
        .register-headline {
          font-size: clamp(28px, 4vw, 58px);
          font-weight: 800;
          color: #1a1a1a;
          margin: 0 0 10px 0;
          text-align: center;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .register-sub {
          font-size: 18px;
          color: #1a1a1a;
          margin: 10px;
          text-align: center;
        }
        .register-card {
          width: 100%;
          background: #fff;
          border-radius: 18px;
          border: 1px solid #e2dbd2;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          padding: 40px 40px 36px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .register-row {
          display: flex;
          gap: 32px;
        }
        .register-field {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .register-field label {
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #aaa;
          font-family: 'Courier New', monospace;
          margin-bottom: 8px;
        }
        .register-field input {
          background: transparent;
          border: none;
          border-bottom: 1.5px solid #ccc;
          outline: none;
          font-size: 15px;
          color: #1a1a1a;
          padding: 6px 0;
          font-family: 'Inter', "Helvetica Neue", Arial, sans-serif;
          transition: border-color 0.2s ease;
          width: 100%;
        }
        .register-field input:focus {
          border-bottom-color: #e03030;
        }
        .register-field input::placeholder {
          color: transparent;
        }
        .register-error {
          color: #e03030;
          font-size: 14px;
          margin: 0;
          text-align: center;
        }
        .register-btn {
          background: #e03030;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          padding: 17px 32px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.01em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: background 0.2s ease;
          width: 100%;
        }
        .register-btn:hover:not(:disabled) {
          background: #bf2828;
        }
        .register-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        @media (max-width: 768px) {
          .register-wrapper { padding: 60px 16px; }
          .register-container { width: 100%; }
          .register-headline { font-size: clamp(24px, 6vw, 36px); }
          .register-sub { font-size: 15px; }
          .register-card { padding: 24px 16px; gap: 20px; }
          .register-row { flex-direction: column; gap: 20px; }
          .register-btn { font-size: 14px; padding: 14px 20px; }
        }
      `}</style>

      <section className="register-wrapper" id="register">
        <div className="register-container">

          <div style={{ textAlign: "center" }}>
            <p className="register-eyebrow">Limited Seats</p>
            <h2 className="register-headline">Register Free for July 15th</h2>
            <p className="register-sub">You'll get the Zoom link by email right after you register.</p>
          </div>

          <div className="register-card">
            <div className="register-row">
              <div className="register-field">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" name="fullName" type="text"
                  value={form.fullName} onChange={handleChange} placeholder="Full Name" />
              </div>
              <div className="register-field">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email"
                  value={form.email} onChange={handleChange} placeholder="Email Address" />
              </div>
            </div>

            <div className="register-row">
              <div className="register-field">
                <label htmlFor="company">Company Name</label>
                <input id="company" name="company" type="text"
                  value={form.company} onChange={handleChange} placeholder="Company Name" />
              </div>
              <div className="register-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel"
                  value={form.phone} onChange={handleChange} placeholder="Phone" />
              </div>
            </div>

            {error && <p className="register-error">{error}</p>}

            <button className="register-btn" onClick={handleSubmit} disabled={loading}>
              {loading ? "Registering..." : "Register Free for July 15th"}
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
