import "./App.css";
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a href="./" className="btn btn-primary text-center">
            Hello
          </a>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center App-footer">
          <small>This was coded by Sarah Whitehouse</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
