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

  class SinCos {
    // function to change initial x co-ordinate of the line
    x1(t) {
      return (
        Math.sin(t / 200) * 125 +
        Math.sin(t / 20) * 125 +
        Math.sin(t / 30) * 125
      );
    }
    // function to change initial y co-ordinate of the line
    y1(t) {
      return (
        Math.cos(t / 10) * -125 +
        Math.cos(t / 20) * 125 +
        Math.cos(t / 30) * 125
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

  let t = 0.1;
  let sc = new SinCos();

  const generateValuesAndSave = (id) => {
    //Do stuff to assign values, extract numbers if it has them.
    // const extractNumbers = /([0-9])+/gm;
    // const numbers = extractNumbers && idToGenerate.match(extractNumbers);
    // console.log("extracted values: ", numbers);
    // const check = numbers.map((ele, i) => {
    //   return Math.min(Math.max(parseInt(ele), 1), 100);
    // });
    // const average = (arr) => arr.reduce((a, b) => a + b) / check.length;
    // console.log("check output: ", average(check));
    // const value1 = average(check);
    // console.log("used value: ", value1);
    // const value2 = Math.sin(value1 / 2) * numbers.length;
    // const value4 = numbers.length > 4 ? true : false;

    let a = parseInt(id, 16);
    let SIZE = id.length;
    let HALF_SIZE = id.length / 2;
    let x = 0;
    let y = 0;
    let v = 0;
    let value = 0;
    let mod = (a % 11) + 5;
    for (let i = 0; i < SIZE; i++) {
      y = 2 * (i - HALF_SIZE) + 1;
      if (a % 3 == 1) {
        y = -y;
      } else if (a % 3 == 2) {
        y = Math.abs(y);
      }
      y = y * parseInt(a);
      for (let j = 0; j < SIZE; j++) {
        x = 2 * (j - HALF_SIZE) + 1;
        if (a % 2 == 3) {
          x = Math.abs(x);
        }
        x = y * parseInt(a);
        v = ((x * y) / 1) % mod;
        if (v < 5) {
          value = ((x * y) % mod) + v;
        }
      }
    }
    console.log(x, y, v, value, mod);

    setInfo({
      userId: user.id(),
      value1: Math.abs(x),
      value2: Math.abs(y),
      value3: v,
      value4: value,
      value5: mod,
    });
    // useFetch(info());
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
    for (let i = 0; i < info().value1 / info().value5; i++) {
      let noiseVal = p.noise(sc.x1(t - i) / 1000);
      let valueCond = info().value1 / 500;
      p.ellipse(
        sc.x1(t * i),
        sc.x1(t - info().value1),
        sc.x2(t / i),
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
