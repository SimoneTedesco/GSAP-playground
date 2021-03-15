import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { Controls, PlayState, Tween } from "react-gsap";
import planetImg from "./static/mission_pianeta_p24.png";

function App() {
  // useEffect(() => gsap.to("#logo", { duration: 2, y: 330 }));
  const [planetRotation, setPlanetRotation] = useState(0);
  const moveLogo = () => {
    gsap.to(".App-logo", { duration: 2, y: 800 });
  };

  const rotate = (deg) => {
    gsap.to(".planet-img", { rotate: deg, duration: 1 });
  };
  const goBack = () => {
    setPlanetRotation(planetRotation + 90);
  };
  const goForward = () => {
    setPlanetRotation(planetRotation - 90);
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <PlayState > */}
        <Tween from={{ x: "100vw", y: "75vh" }} duration="2" ease="back">
          <h1 className="App-logo">SIMONE</h1>
        </Tween>
      </header>
      <div className="buttons">
        <button onClick={goBack}>indietro</button>
        <button onClick={goForward}>avanti</button>
      </div>
      <section
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          maxHeight: "40vh",
        }}
      >
        <Tween
          to={{
            width: "100vw",
            rotation: planetRotation,
            width: "300%",
            height: "300%",
          }}
          duration={1}
        >
          {/* <div className="planet" /> */}
          <img
            src={planetImg}
            className="planet-img"
            alt="asd"
            // style={{ width: "300%", height: "300%" }}
          />
        </Tween>
      </section>
    </div>
  );
}

export default App;
