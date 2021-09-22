const container = document.querySelector('#container');


for (var i=0; i<256; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent ='?';
    container.appendChild(square);
 };
