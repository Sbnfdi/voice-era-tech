// ==============================================================================
// Voice Era Tech LLC - Hostinger & Production Node.js Server Entrypoint
// ==============================================================================
// This file serves as the main startup script for Hostinger Node.js Application,
// cPanel Passenger, and Linux VPS environments.
// ==============================================================================

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const path = require("path");
const fs = require("fs");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = parseInt(process.env.PORT || "3000", 10);

// Ensure local data directories exist upon startup
try {
  const dataDir = path.join(__dirname, "data");
  const kycDir = path.join(dataDir, "kyc-pdfs");
  const uploadDir = path.join(dataDir, "uploads");
  [dataDir, kycDir, uploadDir].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
} catch (dirErr) {
  console.warn("[Startup] Notice: Root data directory check:", dirErr.message);
}

const app = next({ dev, hostname, port, dir: __dirname });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error("Error handling request:", err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    });

    server.listen(port, hostname, () => {
      console.log(`> Voice Era Tech server listening on http://${hostname}:${port} (Node.js ${process.version})`);
    });
  })
  .catch((err) => {
    console.error("Critical error starting Voice Era Tech server:", err);
    process.exit(1);
  });
