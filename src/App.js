import "./App.css";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-center App-footer">
          <small>
            This was coded by Sarah Whitehouse and is open-sourced on{" "}
            <a
              href="https://github.com/sarahwhitehouse17/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
