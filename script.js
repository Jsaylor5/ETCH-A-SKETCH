const container = document.querySelector('#container');

inputNum = 16;
for (var i=0; i<inputNum; i++){
    for (var a=0; a<inputNum; a++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent ='?';
    container.appendChild(square);
 }};
