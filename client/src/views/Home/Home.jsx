import { createEffect, createSignal } from "solid-js";
import { socket } from "../../App";

const Home = () => {
  return (
    <div class="home-container">
      <div class="left-content">
        <h2>Collated Series</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
          tristique integer eu sed habitasse ullamcorper in tincidunt. Iaculis
          ut elementum morbi nisi, pulvinar faucibus etiam tellus elementum.
          Cursus dui dolor neque massa cursus egestas parturient egestas.
        </p>
      </div>
      {/* <div class="middle-content">
        <h2>Unique Visitors</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
          tristique integer eu sed habitasse ullamcorper in tincidunt.
        </p>
        <div class="counter">#{visitors()}</div>
      </div> */}
      <div class="right-content">
        <h2>Code</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lacus
          mauris tempor.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <pre>
          <code>{`  const generateValuesAndSave = (id) => {
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
    }`}</code>
        </pre>
      </div>
    </div>
  );
};

export default Home;
