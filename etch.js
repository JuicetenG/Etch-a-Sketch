const gridContainer = document.querySelector('#gridContainer');
const plumColor = document.querySelector('#plum');
const defaultColor = document.querySelector('#default');
const clearGrid = document.querySelector('#reload');
let backgroundColor = "square-background"
let gridSize = "24";

function createGrid(size){    
    for(let i = 0; i < size; i++){
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-column');
        gridContainer.appendChild(gridColumn); 
        for(let j = 0; j < size; j++){
            const gridSquare = document.createElement('div');
            gridSquare.setAttribute('id', 'gridSquare');
            gridColumn.appendChild(gridSquare);
        } 
    }

    const grid = document.querySelectorAll('#gridSquare');
    grid.forEach(square => square.addEventListener('mouseover', () => square.classList.add(backgroundColor)));
}

defaultColor.addEventListener('click', () => {
    backgroundColor = "square-background";
});

plumColor.addEventListener('click', () => {
    backgroundColor = "square-background-plum";
});

clearGrid.addEventListener('click', () => location.reload());

function erase(){
    createGrid(gridSize);
}

createGrid(gridSize);


















