import "./styles.css";
import "./App.css";
import "./Meaning";
import "./Results";

import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Dictionary defaultKeyword="water" />
        </header>
        <footer className="App-footer"></footer>
        <img
          src="shecodes-wallpaper.jpg"
          alt="SheCodes"
          className="App logo"
        ></img>
      </div>
    </div>
  );
}

export default App;
