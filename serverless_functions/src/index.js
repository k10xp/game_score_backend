import express from "express";

const app = express();
app.use(express.json());

//entry
app.get("/", (_req, res) => {
  res.send("Hello World");
});

//all matches
const matchesData = [
  {
    matchid: "12",
    entry_created: "2026-01-27T08:00:00.000Z",
    match_date: "2026-01-01T08:00:00.000Z",
    home_team: "Alpha",
    away_team: "Beta",
    home_team_score: 2,
    away_team_score: 1,
    winning_team: "Alpha",
  },
];

app.get("/matches", (_req, res) => {
  res.json(matchesData);
});

//create match
app.post("/matches", (req, res) => {
  const newMatch = req.body;

  if (!newMatch || typeof newMatch !== "object") {
    return res.status(400).json({ error: "Invalid JSON payload" });
  }

  res.status(201).json({
    message: "Match received",
    data: newMatch,
  });
});

//local dev, netlify requires separate files
if (process.env.NETLIFY !== "true") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Local server running at http://localhost:${port}`);
  });
}

export { app };
