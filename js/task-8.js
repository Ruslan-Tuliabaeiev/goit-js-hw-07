

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


  // const btn = document.querySelector('button');

  // function random(number) {
  //   return Math.floor(Math.random() * (number+1));
  // }
  
  // btn.onclick = function() {
  //   const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  //   document.body.style.backgroundColor = rndCol;
  // }





