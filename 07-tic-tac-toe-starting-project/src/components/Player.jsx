import { useState } from "react";

const Player = ({name, symbol}) => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(!editing);
  }

  let playerName = editing ? <span className="player-name">{name}</span> : <input type="text" required />;
  let label = editing ? "Save" : "Edit";

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{label}</button>
    </li>
  );
}

export default Player;