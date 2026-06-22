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
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a; line-height: 1.6;">
  
  <h2 style="color: #1a1a1a;">
    Hi ${registrant.fullName},
  </h2>

  <p>
    Thank you for registering for our upcoming event.
  </p>

  <p>
    Your registration has been confirmed successfully.
  </p>

  <p>
    We'll be sending the Zoom link and event access details to this email address closer to the event date.
  </p>

  <div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 24px 0;">
    <h3 style="margin: 0 0 16px 0; color: #1a1a1a;">
      Event Details
    </h3>

    <p style="margin: 8px 0;">
      📅 <strong>July 15th, 2026</strong>
    </p>

    <p style="margin: 8px 0;">
      🕥 <strong>10:30 AM EST</strong>
    </p>
  </div>

  <p>
    Please add this event to your calendar to ensure you don't get double-booked.
  </p>

  <p>
    Keep an eye on your inbox for further updates.
  </p>

  <p>
    We look forward to seeing you there.
  </p>

  <br>

  <p>
    Cheers,<br><br>

    <strong>Vignesh Velusamy</strong><br>
    Founder | BrandingBeez<br>
    +91 99524 62833<br>
    <a href="https://www.brandingbeez.co.uk" style="color: #e03030; text-decoration: none;">
      www.brandingbeez.co.uk
    </a>
  </p>

</div>
    `,
  });
  console.log("✅ Zoom link sent to:", registrant.email);
};

module.exports = { sendRegistrantNotification, sendZoomLink };
