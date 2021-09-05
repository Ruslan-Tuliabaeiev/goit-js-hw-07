

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







// box.style.backgroundColor = 'rgb('+
//   Math.floor(Math.random() * 255 - 1) + 1 + ',' + Math.floor(Math.random() * 255 - 1) + 1
//   +',' + Math.floor(Math.random() * 255 - 1) + 1 +')'  (edited) 
  
  
// Напиши скрипт создания и очистки коллекции элементов. 
//  Пользователь вводит количество элементов в input и нажимает
//   кнопку Создать, после чего рендерится коллекция. При нажатии
//    на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр
//  amount - число. Функция создает столько div, сколько указано в
//   amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


