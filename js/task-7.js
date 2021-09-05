




const font = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

const handleInput = () => {
  text.style.fontSize = `${font.value}px `
};
font.addEventListener('input', handleInput)





