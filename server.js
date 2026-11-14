
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("MONER BONDHU AI is running!");
});

app.get("/webhook", (req, res) => {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  if (req.query["hub.verify_token"] === VERIFY_TOKEN) {
    return res.send(req.query["hub.challenge"]);
  }

  res.sendStatus(403);
});

app.post("/webhook", (req, res) => {
  console.log("Messenger event received");
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000);
Compose
Write to Prime Sajid
