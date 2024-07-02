import "./style.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

(async function() {
  const result = await fetch('/players.json');
  const players = await result.json();
  root.render(
    <React.StrictMode>
      <App players={players} />
    </React.StrictMode>
  );
})().catch(console.error);

