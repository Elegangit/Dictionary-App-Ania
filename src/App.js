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
        <footer className="App-footer">
          <img src="shecodes-wallpaper.jpg" alt="SheCodes" class="App logo" />
        </footer>
      </div>
    </div>
  );
}

export default App;
