import { useState } from "react";

const Player = ({name, symbol}) => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(!editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  let buttonLabel = "Edit";

  if (editing) {
    playerName = <input type="text" required />;
    buttonLabel = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit }>{buttonLabel}</button>
    </li>
  );
}

export default Player;