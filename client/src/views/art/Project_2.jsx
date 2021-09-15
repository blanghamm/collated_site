import { createEffect, createSignal, For, Show } from "solid-js";
import useFetch from "../../api/hooks/useFetch";
import useData from "../../api/hooks/useData";
import Sketch from "../../p5_wrapper/index";
import { useId } from "../../store/app-store";
import Overlay from "../../components/overlay";
import {
  Transition,
  animateEnter,
  animateExit,
  animateMove,
} from "@otonashixav/solid-flip";

const Project_2 = () => {
  const [backgroundColor, setBackgroundColor] = createSignal("black");
  const [info, setInfo] = createSignal({});
  const [show, setShow] = createSignal(false);
  const [user] = useId();
  const { data, refetch } = useData();

  createEffect(() => {
    refetch();
    generateValuesAndSave(user.id());
  });

  const generateValuesAndSave = (idToGenerate) => {
    const extractNumbers = /([0-9])+/gm;
    const numbers = extractNumbers && idToGenerate.match(extractNumbers);
    console.log("extracted values: ", numbers);
    const check = numbers.map((ele, i) => {
      return Math.min(Math.max(parseInt(ele), 1), 100);
    });
    const average = (arr) => arr.reduce((a, b) => a + b) / check.length;
    console.log("check output: ", average(check));
    const value1 = average(check);
    console.log("used value: ", value1);
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
  };

  class SinCos {
    // function to change initial x co-ordinate of the line
    x1(t) {
      return (
        Math.sin(t / info().value1) * 125 +
        Math.sin(t / 20) * 125 +
        Math.sin(t / 30) * info().value1
      );
    }
    // function to change initial y co-ordinate of the line
    y1(t) {
      return (
        Math.cos(t / 10) * -125 +
        Math.cos(t / 20) * 125 +
        Math.cos(t / info().value2) * 125
      );
    }
    // function to change final x co-ordinate of the line
    x2(t) {
      return (
        Math.sin(t / 15) * info().value1 +
        Math.sin(t / 25) * 125 +
        Math.sin(t / 35) * info().value1
      );
    }
    // function to change final y co-ordinate of the line
    y2(t) {
      return (
        Math.cos(t / info().value2) * 125 +
        Math.cos(t / 25) * 125 +
        Math.cos(t / 35) * 125
      );
    }
  }

  let t = 0.1;
  let sc = new SinCos();

  const chaikin = (arr, num) => {
    if (num === 0) return arr;
    const l = arr.length;
    const smooth = arr
      .map((c, i) => {
        return [
          [
            0.75 * c[0] + 0.25 * arr[(i + 1) % l][0],
            0.75 * c[1] + 0.25 * arr[(i + 1) % l][1],
          ],
          [
            0.25 * c[0] + 0.75 * arr[(i + 1) % l][0],
            0.25 * c[1] + 0.75 * arr[(i + 1) % l][1],
          ],
        ];
      })
      .flat();
    return num === 1 ? smooth : chaikin(smooth, num - 1);
  };

  const makeCircle = (numSteps, radius) => {
    const points = [];
    const radiansPerStep = (Math.PI * 2) / numSteps;

    for (let theta = 0; theta < Math.PI * 2; theta += radiansPerStep) {
      const x = 0.5 + radius * Math.cos(theta);
      const y = 0.5 + radius * Math.sin(theta);
      points.push([x, y]);
    }
    return points;
  };

  const distortPolygon = (polygon) => {
    const z = p.frameCount / 100;
    return polygon.map((point) => {
      const x = point[0];
      const y = point[1];
      const distance = p.dist(0.5, 0.5, x, y);

      const noiseFn = (x, y) => {
        const noiseX = (x + 0.31) * distance * 2;
        const noiseY = (y - 1.73) * distance * 2;
        return p.noise(noiseX, noiseY, z);
      };
      const theta = noiseFn(x, y) * Math.PI * 3;

      const amountToNudge = 0.08 - Math.cos(z) * 0.08;
      const newX = x + amountToNudge * Math.cos(theta);
      const newY = y + amountToNudge * Math.sin(theta);
      return [newX, newY];
    });
  };

  const setup = (p) => {
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    p.frameRate(60);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL).parent("solid-p5");
    p.colorMode(p.HSB, 360, 100, 100);
  };

  const draw = (p) => {
    p.background(backgroundColor());
    p.stroke(t, 80, 100);
    p.strokeWeight(1.5);
    p.noFill();
    p.smooth();
    for (let i = 0; i < info().value1 + 8; i++) {
      let noiseVal = p.noise(sc.x1(t - i) / 1000);
      let valueCond = info().value4 ? noiseVal : info().value1 / 500;
      let ellipseToSmooth = p.ellipse(
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
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />

      <div class="overlay-wrapper">
        <a class="overlay-access" onclick={() => setShow(!show())}>
          Show shit
        </a>
        <Transition
          enter={animateEnter(
            { opacity: [0, 1] },
            { duration: 2000, easing: "ease", fill: "backwards" }
          )}
          exit={animateExit(
            { opacity: [1, 0] },
            { duration: 2000, easing: "ease" }
          )}
          move={animateMove({
            duration: 2000,
            easing: "ease",
            fill: "backwards",
          })}
        >
          <Show when={show()}>
            <Overlay>
              <div
                class="overlay-content"
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
                <For each={data()}>
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
                    <strong>Project:</strong> Circles
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur<br></br>adipisicing
                    elit. Fugiat porro culpa doloremque omnis<br></br> iusto
                    nisi voluptatibus est voluptatem illo a! Rem, odio repellat?
                    <br></br> Eius sed, itaque quae magnam deleniti ad.
                  </p>
                </div>
              </div>
            </Overlay>
          </Show>
        </Transition>
      </div>
    </div>
  );
};

export default Project_2;
