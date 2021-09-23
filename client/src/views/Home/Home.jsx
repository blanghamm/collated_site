import { createEffect, createSignal } from "solid-js";
import { socket } from "../../App";

const Home = () => {
  return (
    <div class="home-container">
      <h2 class="home-t">Collated Series</h2>
      <p class="home-p">
        Created by <br></br>Ben Langham
      </p>
    </div>
  );
};

export default Home;
