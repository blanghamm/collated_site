import { createEffect, createSignal, For, Show } from "solid-js";
import useFetch from "../../api/hooks/useFetch";
import useData from "../../api/hooks/useData";
import Sketch from "../../p5_wrapper/index";
import { useId } from "../../store/app-store";
import Overlay from "../../components/overlay";
import { Link } from "solid-app-router";
import {
  Transition,
  animateEnter,
  animateExit,
  animateMove,
} from "@otonashixav/solid-flip";
import XIcon from "../../assets/icons/x.svg";
import ListIcon from "../../assets/icons/list.svg";
import ArrowIcon from "../../assets/icons/arrow-left.svg";

const Project_3 = () => {
  const [backgroundColor, setBackgroundColor] = createSignal("black");
  const [info, setInfo] = createSignal();
  const [show, setShow] = createSignal(false);
  const [user] = useId();
  const { data, refetch } = useData();

  function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xff;
      color += ("00" + value.toString(16)).substr(-2);
    }
    return color;
  }

  class SinCos {
    // function to change initial x co-ordinate of the line
    x1(t) {
      return (
        Math.cos(t / 10) * -125 +
        Math.cos(t / 20) * 125 +
        Math.cos(t / 30) * 125
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
        if (a % 2 == 1) {
          x = Math.abs(x);
        }
        x = y * parseInt(a);
        v = ((x * y) / 1) % mod;
        if (v < 5) {
          value = ((x * y) % mod) + v;
        }
      }
    }
    const colorOutput = stringToColor(id);
    console.log(x, y, v, value, mod, colorOutput);

    setInfo({
      userId: user.id(),
      value1: Math.abs(x),
      value2: Math.abs(y),
      value3: v,
      value4: value,
      value5: mod,
      color: colorOutput,
    });
  };

  generateValuesAndSave(user.id());

  createEffect(() => {
    // useFetch(info());
    refetch();
  });

  let STEPS = 6;
  let angle = 360 / STEPS;
  let BOUNDS = 100;
  let xspeed = 0.05;
  let yspeed = 0.5;
  let x1 = 0;
  let x2 = 0;
  let r = 0.01;

  function chooseDirection(val) {
    if (val > 70) {
      return 200;
    } else {
      return 100;
    }
  }

  function numSteps(val) {
    if (val > 5) {
      return STEPS * 2;
    } else {
      return STEPS;
    }
  }

  let numberOf = chooseDirection(info().value1);
  let stepNum = numSteps(info().value5);

  const setup = (p) => {
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    p.frameRate(60);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL).parent("solid-p5");
    p.colorMode(p.HSB, 360, 100, 100);
    p.angleMode(p.DEGREES);
  };

  const draw = (p) => {
    p.background(backgroundColor());
    p.stroke(info().color);
    p.strokeWeight(1.5);
    p.noFill();
    for (let i = 0; i < numberOf; i++) {
      p.line(
        info().value1 * stepNum + x1,
        x1 * i,
        info().value5 * stepNum + x1,
        x1
      );
      p.rotate(angle);
    }

    x1 += xspeed;
    x2 += yspeed;
    if (x1 > BOUNDS || x1 < r) {
      xspeed = -xspeed;
    }
    if (x2 > BOUNDS - r || x2 < r) {
      yspeed = -yspeed;
    }
    //Causes it to glitch position currently, may have to find a better solution
  };

  return (
    <div>
      <Sketch
        setup={setup}
        draw={draw}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />

      <div class="overlay-wrapper">
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
          <Show when={!show()}>
            <div class="svg-container-outside-left">
              <Link href="/" class="more-info">
                <ArrowIcon class="arrow-svg-icon" />
                {/* <p>more info</p> */}
              </Link>
            </div>
            <div class="svg-container-outside">
              <ListIcon
                class="list-svg-icon"
                onclick={() => setShow(!show())}
              />
            </div>
          </Show>
        </Transition>
        {/* <a class="overlay-access" onclick={() => setShow(!show())}>
          Show shit
        </a> */}
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
            <div class="overlay-ui">
              <div class="svg-container-inside">
                <XIcon class="x-svg-icon" onclick={() => setShow(!show())} />
              </div>
              <div class="title-content">
                <h2>Collated #001</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  accusantium officiis tempore necessitatibus illum nisi,
                  consequatur accusamus doloremque dolores, iusto hic fuga
                  incidunt voluptatibus. Explicabo vero accusantium deserunt
                  maiores ea!
                </p>
              </div>
              <div class="overlay-content-left">
                <div class="top-content">
                  <p>
                    <strong>Latest version: </strong>
                    {info().userId}
                  </p>
                  <p>
                    <strong>Selected version: </strong>
                    {info().userId}
                  </p>
                </div>
                <div class="bottom-content">
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
                </div>
              </div>
              <div class="overlay-content-right">
                <p>
                  <strong>Project:</strong> Lines
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur<br></br>adipisicing
                  elit. Fugiat porro culpa doloremque omnis<br></br> iusto nisi
                  voluptatibus est voluptatem illo a! Rem, odio repellat?
                  <br></br> Eius sed, itaque quae magnam deleniti ad.
                </p>
              </div>
            </div>
          </Show>
        </Transition>
      </div>
    </div>
  );
};

export default Project_3;
