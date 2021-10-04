const container = document.querySelector('#container');

grid(16)

function grid(inputNum) {
for (var i=0; i<inputNum; i++){
    for (var a=0; a<inputNum; a++){
    const square = document.createElement('div');
    square.classList.add('newSquare'); 
    container.appendChild(square) 
 }};
colorChange();
};


function colorChange(){
    const hoverOver = document.querySelectorAll('.newSquare');
    for (const newSquare of hoverOver){
        newSquare.addEventListener('mouseover',() =>{
            newSquare.style.backgroundColor = "red";

    })
};}

let resetButton = document.querySelector('#reset')

resetButton.onclick = function(){
    resetColor();
    resetGrid();
    resize();
}

function resetColor(){
    const hoverOver = document.querySelectorAll('.newSquare');
    for (const newSquare of hoverOver){
        newSquare.style.backgroundColor = "";
    }
}

function resize(){
    let size = window.prompt("Select size of grid 100 or under", 16);
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    if (size < 101){
        grid(size);
    } else {
         text = "Select a size under 101";
 }
}

function resetGrid(){
    const hoverOver = document.querySelectorAll('.newSquare');
    hoverOver.forEach(square => square.remove());
}