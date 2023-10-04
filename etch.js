const gridContainer = document.querySelector('#gridContainer');
const plumColor = document.querySelector('#plum');
const defaultColor = document.querySelector('#default');
const clearGrid = document.querySelector('#reload');
const sliderInput = document.querySelector('#slider');
let backgroundColor = "square-background"
let gridSize = sliderInput.value;

function createGrid(){    
    for(let i = 0; i < gridSize; i++){
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-column');
        gridContainer.appendChild(gridColumn); 
        for(let j = 0; j < gridSize; j++){
            const gridSquare = document.createElement('div');
            gridSquare.setAttribute('id', 'gridSquare');
            gridColumn.appendChild(gridSquare);
        } 
    }

    const grid = document.querySelectorAll('#gridSquare');
    grid.forEach(square => square.addEventListener('mouseover', changeColor));
    clearGrid.addEventListener('click', eraseGrid);

    function eraseGrid(){
        grid.forEach(square => square.removeAttribute('class'));
    }
}

function removeGrid(){
    gridSize = sliderInput.value;
    let gridSquares = gridContainer.querySelectorAll('div');
    gridSquares.forEach(square => square.remove());
    createGrid()
}

function changeColor(e){
    e.target.classList.add(backgroundColor);
}

sliderInput.addEventListener('input', removeGrid);

defaultColor.addEventListener('click', () => {
    backgroundColor = "square-background";
});

plumColor.addEventListener('click', () => {
    backgroundColor = "square-background-plum";
});

createGrid();


















