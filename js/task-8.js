

const controls = document.querySelector('#controls');



const [red, green, blue] = getRGB();
const div = document.createElement("div");
div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


function getRGB() {
    const r = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    return [r, g, b];
  }








