import p5 from "p5";
import { onCleanup, onMount } from "solid-js";

export const p5Events = [
  "draw",
  "windowResized",
  "preload",
  "mouseClicked",
  "doubleClicked",
  "mouseMoved",
  "mousePressed",
  "mouseWheel",
  "mouseDragged",
  "mouseReleased",
  "keyPressed",
  "keyReleased",
  "keyTyped",
  "touchStarted",
  "touchMoved",
  "touchEnded",
  "deviceMoved",
  "deviceTurned",
  "deviceShaken",
];

const Sketch = (props) => {
  let canvasParentRef;
  let sketch;

  onMount(() => {
    sketch = new p5((p) => {
      p.setup = () => {
        props.setup(p, "solid-p5");
      };
      p5Events.forEach((event) => {
        if (props[event]) {
          p[event] = (...rest) => {
            props[event](p, ...rest);
          };
        }
      });
    });
  });

  onCleanup(() => {
    sketch.remove();
  });
  return (
    <div
      ref={canvasParentRef}
      id="solid-p5"
      class={props.class || "solid-p5"}
      style={props.style || {}}
    />
  );
};

export default Sketch;
