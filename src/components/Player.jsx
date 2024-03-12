import { useState } from "react";

export default function Player() {
  const [username, setUsername] = useState("");
  const [submited, setSubmited] = useState(false);

  function usernameHandler(event) {
    setUsername(event.target.value);
  }

  function handleClick() {
    setSubmited(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submited ? username : "unknown entity"} </h2>
      <p>
        <input onChange={usernameHandler} value={username} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
