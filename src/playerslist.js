
import React from "react";
import Player from "./player";
import players from "./players";

const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {players.map((player) => (
        <Player key={player.id} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
