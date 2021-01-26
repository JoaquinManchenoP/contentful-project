import { useState, useEffect } from "react";
import { client } from "./client";

function App() {
  const [entries, setEntries] = useState({
    bands: [],
  });

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="wrapper">
            <span>React and contentful</span>
          </div>
        </header>
        <main>
          <div className="main_content"></div>
        </main>
      </div>
    </div>
  );
}

export default App;
