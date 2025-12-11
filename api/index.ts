import "dotenv/config"
import path from "path"
import { createServer } from "../server"
import * as express from "express"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = createServer()

const distPath = path.join(__dirname, "../dist/spa")
app.use(express.static(distPath))

app.get("*", (req, res) => {
  // Don't serve index.html for API routes
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" })
  }

  res.sendFile(path.join(distPath, "index.html"))
})

export default app
