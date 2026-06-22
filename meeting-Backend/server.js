require("dotenv").config();
const express  = require("express");
const mongoose = require("mongoose");
const cors     = require("cors");

const registrantRoutes = require("./routes/registrantRoutes");

const app = express();

// ── Middleware ──
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "DELETE"],
}));
app.use(express.json());

// ── Routes ──
app.use("/api/register", registrantRoutes);

// ── Health check ──
app.get("/", (req, res) => {
  res.json({ status: "✅ Meeting Backend Running" });
});

// ── MongoDB connection — server starts only after DB connects ──
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });