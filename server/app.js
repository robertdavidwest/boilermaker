const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use("/api", require("./api"));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use((err, req, res, next) => {
  const dftMsg = "Internal server error.";
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || dftMsg);
});

module.exports = app;
