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
          <small>
            Coded by ➡️
            <a
              href="https://aniqa-portfolio-shecodes-plus.netlify.app/"
              target="_blank"
              rel="noreferrer"
              alt="Linkedin link"
            >
              👉 Aniqa Afzal 👩‍💻
            </a>
            ➡️ it is ➡️
            <a
              href="https://github.com/Elegangit/DictionaryPUREbyAA"
              target="_blank"
              rel="noreferrer"
              alt="GitHub link"
            >
              open-sourced on GitHub,
            </a>
            💻 and hosted on ➡️
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noreferrer"
              alt="Netlify link"
            >
              Netlify 😎
            </a>
          </small>
          <img src="shecodes-wallpaper.jpg" alt="SheCodes" class="App logo" />
        </footer>
      </div>
    </div>
  );
}

export default App;
