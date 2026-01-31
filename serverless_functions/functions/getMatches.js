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

exports.handler = async function (_event, _context) {
  return {
    statusCode: 200,
    body: JSON.stringify(matchesData),
  };
};
