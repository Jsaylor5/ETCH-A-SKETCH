const container = document.querySelector('#container');

grid(16);

function grid(inputNum) {
for (var i=0; i<inputNum; i++){
    for (var a=0; a<inputNum; a++){
    const square = document.createElement('div');
    square.classList.add('newSquare');
    square.textContent ='?'; 
    container.appendChild(square) 
 }};
}

const hoverOver = document.querySelector('.newSquare');


