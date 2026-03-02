-- descriptive stats
-- single or separate query
SELECT
    AVG(home_team_score) AS avg_home_score,
    AVG(away_team_score) AS avg_away_score,

    MIN(home_team_score) AS min_home_score,
    MAX(home_team_score) AS max_home_score,

    MIN(away_team_score) AS min_away_score,
    MAX(away_team_score) AS max_away_score
FROM matches;
