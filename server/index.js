// import dotenv from "dotenv";
import "dotenv/config";
import express from "express";
// import cors from "cors";
// app.use(cors());
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 4000;

const app = express();

// ℹ️ Connects to the database
import "./db/index.js";

// server
app.listen(port, () => {
  // console.log(`Listening on port ${PORT}`);
  console.log(`💥 Application is listening on port http://localhost:${port}`);
});

import postRoutes from "./routes/posts.js";
app.use("/posts", postRoutes);

app.use(express.static(path.join(__dirname, "../client/build")));

// All remaining requests return the React app, so it can handle routing.
app.get("/", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build/", "index.html"));
});

// All remaining requests return the React app, so it can handle routing.
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build/", "index.html"));
});

// const postRoutes = require("./routes/posts.js");
// const allRoutes = require("./routes/index.routes");
// app.use("/api", allRoutes);
