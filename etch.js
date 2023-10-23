const gridContainer = document.querySelector('#gridContainer');
const purpleColors = document.querySelector('#purples');
const defaultColor = document.querySelector('#default');
const clearGrid = document.querySelector('#reload');
const sliderInput = document.querySelector('#slider');

let gridSize = sliderInput.value;
let backgroundColor = "darkgray"

function createGrid(){    
    for(let i = 0; i < gridSize; i++){
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-column');
        gridContainer.appendChild(gridColumn); 
        for(let j = 0; j < gridSize; j++){
            const gridSquare = document.createElement('div');
            gridSquare.setAttribute('id', 'gridSquare');
            gridSquare.classList.add('cell');
            gridColumn.appendChild(gridSquare);
            gridSquare.style.backgroundColor = "white";
        } 
    }

    const grid = document.querySelectorAll('.cell');    
    clearGrid.addEventListener('click', eraseGrid);

    function eraseGrid(){
        grid.forEach(square => square.style.backgroundColor = "white");
    }
}

gridContainer.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('cell'))e.target.style.backgroundColor = changeColor();
});

function removeGrid(){
    gridSize = sliderInput.value;
    const gridSquares = gridContainer.querySelectorAll('div');
    gridSquares.forEach(square => square.remove());
    createGrid();
}

function changeColor(e){
    const purps = ["#800080", "#69359c", "#6a5acd", "#967bb6", "#b768a2"];
    if(backgroundColor === "purple"){
        const randomColor = purps[(Math.floor(Math.random() * purps.length))];
        return randomColor;
    } else return "darkgray"; 
}

purpleColors.addEventListener('click', () => {
    backgroundColor = "purple";
});

defaultColor.addEventListener('click', () => {
    backgroundColor = "darkgray";
});

sliderInput.addEventListener('input', removeGrid);
createGrid();


















