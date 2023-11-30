
import React, { useState } from "react";
import PlayersList from "./playerslist";

function App({ defaultUserName = "User" }) {
  const [userName, setUserName] = useState("");

  const handleNameInput = () => {
    const name = prompt("Please enter your name:");
    if (name) {
      setUserName(name);
    }
  };

  return (
    <div className="App">
      <h1>FIFA Player Cards</h1>
      <button onClick={handleNameInput}>Enter Your Name</button>
      <p>Hello, {userName || defaultUserName}!</p>
      <PlayersList />
    </div>
  );
}

App.defaultProps = {
  defaultUserName: "User",
};

export default App;
