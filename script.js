const container = document.querySelector('#container');

grid(16, randomColor)

function grid(inputNum, inputColor) {
for (let i=0; i<inputNum; i++){
    for (let a=0; a<inputNum; a++){
    const square = document.createElement('div');
    square.classList.add('newSquare'); 
    container.appendChild(square) 
 }};

if (inputColor == randomColor){
    colorChange();
}
else if (inputColor == greyColor){
    greyColor();
}
};

function colorChange(){
    const hoverOver = document.querySelectorAll('.newSquare');
    for (const newSquare of hoverOver){
        newSquare.addEventListener('mouseover',() =>{
            newSquare.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        

    })
};};

function greyColor(){
    const hoverOver = document.querySelectorAll('.newSquare');
    for (const newSquare of hoverOver){
        newSquare.addEventListener('mouseover',() => {
         
        if(newSquare.dataset.color == 0){
            newSquare.dataset.color = 0
        }else if (newSquare.dataset.color <= 90 && newSquare.dataset.color >=10){
            newSquare.dataset.color -= 10 
        }else{
            newSquare.setAttribute('data-color', 90);
        }
        console.log(newSquare.dataset.color)
        newSquare.style.backgroundColor = `hsl(${randomHue()}, 100%, ${newSquare.dataset.color}%)`;
        })
    }
};


let colorButton = document.querySelector('#color')
colorButton.onclick = () => {
    grid(resize, randomColor)
};

let greyButton = document.querySelector('#grey')
greyButton.onclick = () => {
    grid(resize, greyColor)
};

let resetButton = document.querySelector('#reset')
resetButton.onclick = () => {
    resetGrid();
    resize();
};


function resize(){
    let size = window.prompt("Select size of grid 100 or under", 16);
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    if (size < 101){
        grid(size, randomColor);
    } else {
         alert("Select a size under 101");
         container.style.gridTemplateColumns = null;
         container.style.gridTemplateRows = null;
         grid(16);
 }
 return size
};

function resetGrid(){
    const hoverOver = document.querySelectorAll('.newSquare');
    hoverOver.forEach(square => square.remove());
};

function randomColor(){
    color = Math.floor(Math.random()*255);
    return color;
};

function randomHue(){
    color = Math.floor(Math.random()*360);
    return color;
};

