const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ── Verify transporter on startup ──
transporter.verify((error) => {
  if (error) {
    console.error("❌ Email transporter error:", error.message);
  } else {
    console.log("✅ Email transporter ready");
  }
});

// ── Admin Notification Email ──
const sendRegistrantNotification = async (registrant) => {
  await transporter.sendMail({
    from: `"HVAC Meeting" <${process.env.SMTP_USER}>`,
    to: "info@brandingbeez.co.uk",
    subject: "New Registration Received",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">

        <h2 style="margin: 0 0 24px 0;">New Registration</h2>

        <p><strong>Name:</strong> ${registrant.fullName}</p>
        <p><strong>Email:</strong> ${registrant.email}</p>
        <p><strong>Company:</strong> ${registrant.company || "—"}</p>
        <p><strong>Phone:</strong> ${registrant.phone || "—"}</p>
        <p><strong>Registered At:</strong> ${new Date().toLocaleString()}</p>

        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
        <p style="color: #aaa; font-size: 13px;">Submitted from HVAC AI Session registration page.</p>
      </div>
    `,
  });
  console.log("✅ Admin notification sent to info@brandingbeez.co.uk");
};

// ── User Confirmation Email with Zoom Link ──
const sendZoomLink = async (registrant) => {
  await transporter.sendMail({
    from: `"HVAC AI Session" <${process.env.SMTP_USER}>`,
    to: registrant.email,
    subject: "You're registered! Here's your Zoom link for July 15th",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a;">Hi ${registrant.fullName}, you're in! ✅</h2>

        <p>Thanks for registering for the <strong>AI for HVAC Owners</strong> session.</p>

        <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 24px 0;">
          <h3 style="margin: 0 0 16px 0; color: #1a1a1a;">Session Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; color: #e03030; font-weight: 700; width: 100px;">DATE</td>
              <td style="padding: 6px 0; font-weight: 600;">Wednesday, July 15, 2026</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #e03030; font-weight: 700;">TIME</td>
              <td style="padding: 6px 0; font-weight: 600;">10:30 AM EST</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #e03030; font-weight: 700;">WHERE</td>
              <td style="padding: 6px 0; font-weight: 600;">Online · Zoom</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #e03030; font-weight: 700;">COST</td>
              <td style="padding: 6px 0; font-weight: 600;">100% Free</td>
            </tr>
          </table>
        </div>

        <a href="${process.env.ZOOM_LINK}"
          style="display: inline-block; background: #e03030; color: #fff;
                 padding: 14px 28px; border-radius: 6px; text-decoration: none;
                 font-weight: 700; font-size: 16px; margin: 8px 0;">
          Join Zoom Meeting
        </a>

        <p style="margin-top: 24px;">No selling. No upsells. Just straight talk about what's changing.</p>

        <br/>
        <p>See you on July 15th!<br/><strong>HVAC AI Session Team</strong></p>
      </div>
    `,
  });
  console.log("✅ Zoom link sent to:", registrant.email);
};

module.exports = { sendRegistrantNotification, sendZoomLink };