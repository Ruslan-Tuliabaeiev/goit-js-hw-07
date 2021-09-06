
 document.querySelectorAll('#categories').forEach(elem => console.log( `В списке ${elem.children.length} категории.`));


document.querySelectorAll(".item h2").forEach(elem => console.log(`Категория: ${elem.textContent}, Количество элементов: ${elem.nextElementSibling.children.length}`));


