

const nameinput = document.querySelector('#name-input');

const outputName = document.querySelector('#name-output');

nameinput.addEventListener('input', inputArea);
function inputArea(event) {
let value = nameinput.value;
if (value === "") {
    outputName.textContent = "незнакомец";
}
else {
    outputName.textContent = value; 
};

};

