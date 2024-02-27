import React from "react";
import "./App.css";
import User from "./User";

function App() {
  return (
    <div className="App">
      <User data={{ name: "Anil", age: 24 }} />
    </div>
  );
}

export default App;
