const container = document.querySelector('#container');

grid(16);

function grid(inputNum) {
for (var i=0; i<inputNum; i++){
    for (var a=0; a<inputNum; a++){
    const square = document.createElement('div');
    square.classList.add('newSquare'); 
    container.appendChild(square) 
 }};};

const hoverOver = document.querySelectorAll('.newSquare');
for (const newSquare of hoverOver){
    newSquare.addEventListener('mouseover',() =>{
        newSquare.style.backgroundColor = "red";

    })
};

function resetColor(){
    for (const newSquare of hoverOver){
        newSquare.style.backgroundColor = "";
}}

