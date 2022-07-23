import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.js";
import "./styles.css";
import "./App.css";
import "./Dictionary";
import "./Meaning";
import "./Phonetic";
import "./PhoneticsAudio";
import "./Photos";
import "./Results";
import "./Synonyms";
import "./Dictionary.css";
import "./Meaning.css";
import "./Phonetic.css";
import "./Results.css";
import "./Synonyms.css";
import "./index.css";
import "./styles.css";
import "./PhoneticsAudio.css";
import "./Meaning";
import "./Results";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

App();
