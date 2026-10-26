import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import OpenAI from "openai";

const app = express();
const port = Number(process.env.PORT || 3000);
const model = process.env.OPENAI_MODEL || "gpt-6-astra";

if (!process.env.OPENAI_API_KEY) {
  console.error("Missing OPENAI_API_KEY environment variable.");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const allowedOrigins = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.disable("x-powered-by");
app.use(helmet());
app.use(cors({
  origin(origin, callback) {
    // Allow non-browser clients with no Origin header; restrict browser origins when configured.
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Origin not allowed by CORS"));
  }
}));
app.use(express.json({ limit: "20kb" }));

app.use("/api/", rateLimit({
  windowMs: 60 * 1000,
  limit: 20,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again shortly." }
}));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/chat", async (req, res) => {
  const message = req.body?.message;

  if (typeof message !== "string" || message.trim().length === 0) {
    return res.status(400).json({ error: "message must be a non-empty string." });
  }

  if (message.length > 4000) {
    return res.status(400).json({ error: "message must be 4000 characters or fewer." });
  }

  try {
    const response = await openai.responses.create({
      model,
      instructions: "You are the helpful AI assistant for phobicvien. Be clear, accurate, and concise. If unsure, say so.",
      input: message.trim(),
      max_output_tokens: 600
    });

    return res.json({ reply: response.output_text });
  } catch (error) {
    // Do not send internal error details or credentials to clients.
    console.error("OpenAI request failed:", {
      name: error?.name,
      status: error?.status,
      requestId: error?.request_id
    });
    return res.status(502).json({ error: "The AI service is temporarily unavailable. Please try again." });
  }
});

app.use((err, _req, res, _next) => {
  if (err?.message === "Origin not allowed by CORS") {
    return res.status(403).json({ error: "Origin not allowed." });
  }
  console.error("Request error:", err?.name || "Error");
  return res.status(400).json({ error: "Invalid request." });
});

app.listen(port, () => {
  console.log(`phobicvien API listening on port ${port}`);
});