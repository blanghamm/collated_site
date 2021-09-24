import { createEffect, createSignal, For, Show, createMemo } from "solid-js";
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

const Project_1 = () => {
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

  createMemo(() => {
    useFetch(info());
  });

  createEffect(() => {
    refetch();
  });

  let STEPS = 6;
  let angle = 360 / STEPS;
  let BOUNDS = 200;
  let xspeed = 0.05;
  let yspeed = 0.5;
  let x1 = 30;
  let x2 = 30;
  let r = 25;

  const getOutput = () => {
    const rando = Math.random(1);
    if (rando > 0.5) {
      return STEPS + sc.y2(x1 * rando);
    } else {
      return STEPS * x1;
    }
  };

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
    for (let i = 0; i < info().value1 / info().value5; i++) {
      p.line(
        sc.x1(info().value1 * STEPS),
        STEPS + sc.y1(x1 * i),
        sc.x2(info().value1 * STEPS),
        getOutput()
      );
      p.rotate(angle);
    }
    x1 += xspeed;
    x2 += yspeed;
    if (x1 > BOUNDS - r || x1 < r) {
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
              </Link>
            </div>
            <div class="svg-container-outside">
              <ListIcon
                class="list-svg-icon"
                onclick={() => setShow(!show())}
              />
            </div>
          </Show>
          <Show when={show()}>
            <div class="svg-container-outside">
              <XIcon class="x-svg-icon" onclick={() => setShow(!show())} />
            </div>
          </Show>
        </Transition>
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
              {/* <div class="svg-container-inside">
                <XIcon class="x-svg-icon" onclick={() => setShow(!show())} />
              </div> */}
              <div class="title-content">
                <h2>Collated #001</h2>
                <p class="info-section">
                  This iteration focuses on the rapid refiring of one function,
                  this generating a piece of disorientating work. It uses
                  line-based geometry to fit the minimalistic theme.
                </p>
              </div>
              <div class="overlay-content-left">
                <div class="top-content">
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
            </div>
          </Show>
        </Transition>
      </div>
    </div>
  );
};

export default Project_1;
