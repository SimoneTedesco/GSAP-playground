import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import gsap from "gsap";
import { Controls, PlayState, Tween } from "react-gsap";

function App() {
  // useEffect(() => gsap.to("#logo", { duration: 2, y: 330 }));
  const moveLogo = () => {
    gsap.to(".App-logo", { duration: 2, y: 800 });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id="logo" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Tween
          to={{ x: "200px", rotation: 180 }}
          duration={2}
          ease="back.out(1.7)"
        >
          <a
            className="App-link"
            // href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => moveLogo()}
          >
            Learn React
          </a>
        </Tween>
        <a
          className="App-link"
          // href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => moveLogo()}
        >
          Learn React
        </a>
        <Tween
          to={{ x: "200px", rotation: 180 }}
          duration={2}
          ease="back.out(1.7)"
        >
          <div
            style={{ width: "100px", height: "100px", background: "#ccc" }}
          />
        </Tween>
      </header>
    </div>
  );
}

export default App;
