import "./App.css";
import { useState } from "react";
import gsap from "gsap";
import { Tween, Reveal } from "react-gsap";
import planetImg from "./static/mission_pianeta_p24.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  // useEffect(() => gsap.to("#logo", { duration: 2, y: 330 }));
  const [planetRotation, setPlanetRotation] = useState(0);
  // const moveLogo = () => {
  //   gsap.to(".App-logo", { duration: 2, y: 800 });
  // };

  // const rotate = (deg) => {
  //   gsap.to(".planet-img", { rotate: deg, duration: 1 });
  // };
  const goBack = () => {
    setPlanetRotation(planetRotation + 90);
    gsap.to("#donnaDx", {
      duration: 1,
      backgroundPositionY: 0,
      ease: "steps(5)",
    });
  };
  const goForward = () => {
    setPlanetRotation(planetRotation - 90);
    gsap.to("#donnaDx", {
      duration: 1,
      backgroundPositionY: -1500,
      ease: "steps(5)",
    });
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <PlayState > */}
          <Tween from={{ x: "100vw", y: "75vh" }} duration="2" ease="back">
            <h1 className="App-logo">SIMONE</h1>
          </Tween>
        </header>
        <div className="buttons">
          <button onClick={goBack}>indietro</button>
          <div id="donnaDx" />
          {/* <img id="donnaDx" src={donnaDx} alt="asd" /> */}
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
              // width: "300%",
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
      {/* <Tween
        to={{
          scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
          x: 500,
          y: 500,
        }}
      > */}
      <section className="box buttons" style={{ height: "500px" }}>
        asd
        <Tween
          to={{
            scrollTrigger: {
              trigger: ".box",
              markers: true,
              // toggleActions: "restart pause reverse pause",
              toggleActions: "restart none none none",
              scrub: true,
            },
            opacity: 1,
            x: 300,
            ease: "steps(5)",
            backgroundPositionY: -1500,
          }}
          duration={1}
        >
          <div id="donnaDx" />
        </Tween>
      </section>
      {/* TODO: usare matrix:
        1o e 4o scale
        2o e 3o inclinazione
        5o e 6o posizione
      */}
      {/* transform: matrix(1, 0, 0, 1, 0, 0); */}
      {/* <Reveal repeat>
        <Tween from={{ opacity: 0 }} duration={2}>
          <section
            className="boxbox"
            style={{
              height: "300px",
              width: "300px",
              backgroundColor: "green",
            }}
          >
            asd
          </section>
        </Tween>
      </Reveal> */}
      <section id="red" style={{ height: "100vh" }}>
        <Tween
          from={{
            x: -400,
          }}
          to={{
            scrollTrigger: {
              trigger: "#red",
              markers: {
                startColor: "green",
                endColor: "red",
              }, // mostra segni sullo schermo inizio e fine animazione
              // scrub: true, // scroll collegato all'animazione
              scrub: 1, // scroll collegato all'animazione
              toggleActions: "play none none none", //onenter onleave onreenter onreleave
              pin: true, // dovrebbe bloccare l'item sullo schermo
              start: "top center", // primo valore si riferisce all'oggetto e il secondo viewport
            },
            x: 800,
          }}
          duration={5}
        >
          <div
            className="boxbox"
            style={{
              height: "300px",
              width: "90%",
              backgroundColor: "red",
            }}
          >
            asd slowmo
          </div>
        </Tween>
      </section>

      <section className="panel orange" style={{ backgroundColor: "orange" }}>
        <p>
          <Tween
            from={{
              scrollTrigger: {
                trigger: ".orange",
                scrub: true,
                pin: true,
                start: "top top",
                end: "+=1000",
                markers: {
                  startColor: "blue",
                  endColor: "blue",
                  fontSize: "12px",
                },
              },
              scaleX: 0,
              transformOrigin: "left center",
              ease: "none",
            }}
          >
            <span class="line line-2"></span>
          </Tween>
          This orange panel gets pinned when its top edge hits the top of the
          viewport, then the line's animation is linked with the scroll position
          until it has traveled 100% of the viewport's height (
          <code>end: "+=100%"</code>), then the orange panel is unpinned and
          normal scrolling resumes. Padding is added automatically to push the
          rest of the content down so that it catches up with the scroll when it
          unpins. You can set <code>pinSpacing: false</code> to prevent that if
          you prefer.
        </p>
      </section>
      {/* </Tween> */}
    </>
  );
}

export default App;
