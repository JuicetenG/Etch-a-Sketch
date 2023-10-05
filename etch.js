const gridContainer = document.querySelector('#gridContainer');
const plumColor = document.querySelector('#plum');
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
            gridColumn.appendChild(gridSquare);
            gridSquare.style.backgroundColor = "white";
        } 
    }

    const grid = document.querySelectorAll('#gridSquare');
    grid.forEach(square => square.addEventListener('mouseover', changeColor));
    
    clearGrid.addEventListener('click', eraseGrid);

    function eraseGrid(){
        grid.forEach(square => square.style.backgroundColor = "white");
    }
}

function removeGrid(){
    gridSize = sliderInput.value;
    let gridSquares = gridContainer.querySelectorAll('div');
    gridSquares.forEach(square => square.remove());
    createGrid();
}

defaultColor.addEventListener('click', () => {
    backgroundColor = "darkgray";
});

plumColor.addEventListener('click', () => {
    backgroundColor = "plum";
 
});

function changeColor(e){
    e.target.style.backgroundColor = backgroundColor;
}

sliderInput.addEventListener('input', removeGrid);
createGrid();


















