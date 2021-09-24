# Collated: Notes

Collated is a project based around generative art, it features ten pieces within the application. Each piece is based loosely on the code used in the previous version. This helps with highlighting a strong theme across the generative art outputs.

## How it works:

The project takes a randomly generated id created when the user loads up the site, this idea is shared across each generative piece. I will include below the sorting algorithm that extracts values from each unique id.

The id is served via the [socket.io](http://socket.io) and an express server, which also serves the [Solid.js](https://www.solidjs.com/) application that contains the [p5.js](https://p5js.org/) code. Using this method it possible to store the users random id in a session cookie. This helps keep the artwork unique to their visit.

### Extracting values from the user id:

```jsx
const generateValuesAndSave = (id) => {
  let a = parseInt(id, 16);
  let SIZE = id && id.length;
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

  setInfo({
    userId: id,
    value1: Math.abs(x),
    value2: Math.abs(y),
    value3: v,
    value4: value,
    value5: mod,
    color: colorOutput,
  });
};
```

### Extracting a colour using the user id:

```jsx
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
```

In order to use the application you will require the printed version featuring the QR codes that link to the corresponding artwork endpoint. Though this repository does expose the possible routes. (It is needed for documentation).

A video is available here of the project in use: [https://youtu.be/6IH_Z6GdE6E](https://youtu.be/6IH_Z6GdE6E)
