// A table row component displaying the current player's rank, name, score, and level.

import { PlayerStatsProps } from "./types";
import React from "react";
import "./PlayerStats.css";

const PlayerStats: React.FC<PlayerStatsProps> = ({ playerRank, playerName, currentScore, currentLevel }) => {
  return (
    <tr className="player-row current-game">
      <td>{playerRank + 1}</td>
      <td>{playerName} (current)</td>
      <td>{currentScore.toLocaleString()}</td>
      <td>{currentLevel}</td>
    </tr>
  );
};

export default PlayerStats;
