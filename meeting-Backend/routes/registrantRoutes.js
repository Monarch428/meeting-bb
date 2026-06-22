const express = require("express");
const router  = express.Router();

const Registrant = require("../models/Registrant");
const { sendRegistrantNotification, sendZoomLink } = require("../services/emailService");

// ── POST /api/register — Register new attendee ──
router.post("/", async (req, res) => {
  try {
    const { fullName, email, company, phone } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        message: "Full name and email are required.",
      });
    }

    const existing = await Registrant.findOne({ email });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: "This email is already registered.",
      });
    }

    const registrant = await Registrant.create({ fullName, email, company, phone });

    // Send emails — lead is saved even if email fails
    try {
      await sendRegistrantNotification(registrant);
      await sendZoomLink(registrant);
    } catch (emailErr) {
      console.error("⚠️ Email error (registrant still saved):", emailErr.message);
    }

    res.status(201).json({
      success: true,
      message: "Registered successfully.",
      data: registrant,
    });

  } catch (error) {
    console.error("❌ Register Error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ── GET /api/register — Get all registrants ──
router.get("/", async (req, res) => {
  try {
    const registrants = await Registrant.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: registrants.length,
      data: registrants,
    });
  } catch (error) {
    console.error("❌ Fetch Registrants Error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ── GET /api/register/:id — Get single registrant ──
router.get("/:id", async (req, res) => {
  try {
    const registrant = await Registrant.findById(req.params.id);
    if (!registrant) {
      return res.status(404).json({ success: false, message: "Registrant not found" });
    }
    res.status(200).json({ success: true, data: registrant });
  } catch (error) {
    console.error("❌ Fetch Registrant Error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ── DELETE /api/register/:id — Delete registrant ──
router.delete("/:id", async (req, res) => {
  try {
    const registrant = await Registrant.findByIdAndDelete(req.params.id);
    if (!registrant) {
      return res.status(404).json({ success: false, message: "Registrant not found" });
    }
    res.status(200).json({ success: true, message: "Registrant deleted successfully" });
  } catch (error) {
    console.error("❌ Delete Registrant Error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;