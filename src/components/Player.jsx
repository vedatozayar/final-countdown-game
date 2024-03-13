import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [username, setUsername] = useState(null);

  function handleClick() {
    setUsername(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {username ?? "unknown entity"} </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
