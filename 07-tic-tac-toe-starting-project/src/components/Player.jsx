import { useState } from "react";

const Player = ({initialName, symbol}) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing((editing) => !editing);
  }

  const handleSave = (e) => {
    setPlayerName(e.target.value); 
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = "Edit";

  if (editing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleSave} />;
    // btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit }>{editing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;