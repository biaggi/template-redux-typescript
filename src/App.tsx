import logo from "./logo.svg";
import { Home } from "./features/pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <Home />
      </header>
    </div>
  );
}

export default App;
