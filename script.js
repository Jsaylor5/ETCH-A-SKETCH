const container = document.querySelector('#container');

grid()

function grid(inputNum=16) {
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

let resetButton = document.querySelector('#reset')

resetButton.onclick = function(){
    resetColor();
    resize();
}

function resetColor(){
    for (const newSquare of hoverOver){
        newSquare.style.backgroundColor = "";
    }
}

//function not working
function resize(){
    let size = window.prompt("Select size of grid 100 or under", 16);
    if (size < 101){
        grid(size-inputNum);
    } else {
         text = "Select a size under 101";
 }
}