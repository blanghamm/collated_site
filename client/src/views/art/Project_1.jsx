import { createEffect, createSignal } from "solid-js";
import { useData } from "solid-app-router";
import useFetch from "../../hooks/useFetch";
import Sketch from "../../p5_wrapper/index";

class SinCos {
  // function to change initial x co-ordinate of the line
  x1(t) {
    return (
      Math.sin(t / 200) * 125 + Math.sin(t / 20) * 125 + Math.sin(t / 30) * 125
    );
  }
  // function to change initial y co-ordinate of the line
  y1(t) {
    return (
      Math.cos(t / 10) * -125 + Math.cos(t / 20) * 125 + Math.cos(t / 30) * 125
    );
  }
  // function to change final x co-ordinate of the line
  x2(t) {
    return (
      Math.sin(t / 15) * 125 + Math.sin(t / 25) * 125 + Math.sin(t / 35) * 125
    );
  }
  // function to change final y co-ordinate of the line
  y2(t) {
    return (
      Math.cos(t / 15) * 125 + Math.cos(t / 25) * 125 + Math.cos(t / 35) * 125
    );
  }
}

const Project_1 = ({ idToGenerate, idThatsGenerated }) => {
  const [backgroundColor, setBackgroundColor] = createSignal("black");
  const [info, setInfo] = createSignal({});

  const user = useData(0);
  console.log("Correct route id: ", user);

  setInfo({
    userId: "gfhfhj6847fj478dh",
    value1: "59483782928",
    value2: "954893783",
    value3: "56049393",
  });

  const userDisconnects = () => {
    useFetch(info());
  };

  let t = 0;
  let sc = new SinCos();

  //Values to be assigned after generateValues has exectued

  let value1;
  let value2;
  let value3;
  let value4;
  let value5;

  const generateValues = (idToGenerate) => {
    //Do stuff to assign values
  };

  //Use values in project to change specific characteristics

  const setup = (p, canvasParentRef) => {
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    p.frameRate(60);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL).parent(
      canvasParentRef
    );
    p.colorMode(p.HSB, 360, 100, 100);
  };

  const draw = (p) => {
    p.background(backgroundColor());
    p.stroke(t, 80, 100);
    p.strokeWeight(1.5);
    p.noFill();
    for (let i = 0; i < 10; i++) {
      let noiseVal = p.noise(sc.x1(t - i) / 1000);
      p.line(sc.x1(t - i), sc.x1(t - i), sc.x2(t * noiseVal), sc.y2(t - i));
    }
    t += 0.15;
  };

  return (
    <div>
      <Sketch
        setup={setup}
        draw={draw}
        style={{ width: "100%", height: "100%" }}
      />

      <button onClick={() => userDisconnects()}>Send Outputs</button>
    </div>
  );
};

export default Project_1;
