const font = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

const handleInput = () => {
  text.style.fontSize = `${font.value}px `
};
font.addEventListener('input', handleInput)









// const handleInput = () => {
//   inputTextRef.style.fontSize = ${inputRangeRef.value}px
// }
// inputRangeRef.addEventListener('input', handleInput


// const fontSizeControl = document.querySelector('#font-size-control')


// const text = document.querySelector('#text')

// console.log(fontSizeControl);


// const fontSizeControl = document.querySelector('#font-size-control')
// const text = document.querySelector('#text')
// const handleInput = () => {
//   text.style.fontSize = `${fontSizeControl.value}px`
// }
// fontSizeControl.addEventListener('input', handleInput)


// const font = document.querySelector('#font-size-control')
// const text = document.querySelector('#text')
// const handleInput = () => {
//   text.style.fontSize = `${font.value}px`
// }
// font.addEventListener('input', handleInput)


// Вариант 1
// const ref = {
//   input: document.querySelector('#font-size-control'),
//   out: document.querySelector('#text'),
// }
// ref.input.value = parseInt(window.getComputedStyle(ref.out).fontSize)

// ref.input.addEventListener('input', onChangeInputRange)
// function onChangeInputRange(event) {
//   ref.out.style.fontSize = ${event.currentTarget.value}px
// }

// Вариант 2
// const input = document.getElementById('font-size-control')
// const span = document.getElementById('text')
// input.addEventListener('input', handleInputRange)
// function handleInputRange(event) {
//   span.style.fontSize = event.currentTarget.value + 'px'


