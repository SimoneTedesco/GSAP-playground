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
        {/* <PlayState > */}
        <Tween from={{ x: "100vw", y: "75vh" }} duration="2">
          <h1 className="App-logo">SIMONE</h1>
        </Tween>
        {/* </PlayState> */}
        {/* <h1 className="App-logo">SIMONE</h1> */}
        {/* <img src={logo} id="logo" className="App-logo" alt="logo" />
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
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => moveLogo()}
          >
            Learn React
          </a>
        </Tween>
        <a
          className="App-link"
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
        </Tween> */}
      </header>
      <section>
        <div className="planet" />
      </section>
    </div>
  );
}

export default App;
