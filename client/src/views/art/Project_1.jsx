import { createEffect, createResource, createSignal, onMount } from "solid-js";
import { useData } from "solid-app-router";
import useFetch from "../../hooks/useFetch";
import Sketch from "../../p5_wrapper/index";
import { useId } from "../../store/app-store";

const fetchOutputs = async () =>
  (await fetch("http://localhost:4000/api/outputs")).json();

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

const Project_1 = () => {
  const [backgroundColor, setBackgroundColor] = createSignal("black");
  const [info, setInfo] = createSignal({});
  const [user] = useId();
  const [output, { refetch }] = createResource(fetchOutputs);

  createEffect(() => {
    console.log(user.id());
    console.log(info());
  });

  let t = 0.1;
  let sc = new SinCos();

  const generateValuesAndSave = (idToGenerate) => {
    //Do stuff to assign values, extract numbers if it has them.
    const extractNumbers = /([0-9]|[1-9][0-9])+/gm;
    const numbers = extractNumbers && idToGenerate.match(extractNumbers);

    const value1 = idToGenerate.length * (numbers[0] || 3);
    const value2 = Math.sin(value1 / 2) * numbers.length;
    const value4 = numbers.length > 4 ? true : false;

    setInfo({
      userId: user.id(),
      value1: value1,
      value2: value2,
      value3: "0",
      value4: value4,
    });

    useFetch(info());
    refetch();
  };

  generateValuesAndSave(user.id());
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
    for (let i = 0; i < info().value1; i++) {
      let noiseVal = p.noise(sc.x1(t - i) / 1000);
      let valueCond = info().value4 ? noiseVal : info().value1 / 500;
      p.line(
        sc.x1(info().value4 ? t * info().value2 * valueCond : t * i),
        sc.x1(t - info().value1),
        sc.x2(info().value4 ? t * info().value2 * valueCond : t * i),
        sc.y2(t - info().value1 * i)
      );
    }
    //Causes it to glitch position currently, may have to find a better solution
    if (t > 50) {
      t = -t;
    }
    t = t + 0.05;
  };

  return (
    <div>
      <Sketch
        setup={setup}
        draw={draw}
        style={{ width: "100%", height: "100%" }}
      />
      <div
        class="ui-overlay"
        style={{
          position: "absolute",
          zIndex: "10",
          color: "white",
          margin: "50px",
          height: "100vh",
          width: "15vw",
        }}
      >
        <strong>Entries:</strong>
        <For each={output()}>
          {(item) => (
            <a
              style={{
                color: "white",
                cursor: "pointer",
                display: "flex",
                padding: "2px",
                fontSize: "8px",
              }}
              onClick={() => setInfo(item)}
            >
              {item.userId}
            </a>
          )}
        </For>
        <p>
          <strong>selected: </strong>
          {info().userId}
        </p>
        <div style={{ position: "absolute", top: "500px" }}>
          <p>
            <strong>Project:</strong> Lines
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur<br></br>adipisicing elit.
            Fugiat porro culpa doloremque omnis<br></br> iusto nisi voluptatibus
            est voluptatem illo a! Rem, odio repellat?<br></br> Eius sed, itaque
            quae magnam deleniti ad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project_1;
