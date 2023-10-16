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
    const gridSquares = gridContainer.querySelectorAll('div');
    gridSquares.forEach(square => square.remove());
    createGrid();
}

function changeColor(e){
    e.target.style.backgroundColor = backgroundColor;
}

purpleColors.addEventListener('click', () => {
    const gridSquares = gridContainer.querySelectorAll('div');
    const purps = ["#800080", "#69359c", "#6a5acd", "#967bb6", "#b768a2"];

    gridSquares.forEach(square => {
        const randomColor = purps[(Math.floor(Math.random() * purps.length))];
        square.addEventListener('mouseenter', (e) => {e.target.style.backgroundColor = randomColor;});
    });
});

defaultColor.addEventListener('click', () => {
    const gridSquares = gridContainer.querySelectorAll('div');
    gridSquares.forEach(square => {
        square.addEventListener('mouseenter', (e) => {e.target.style.backgroundColor = "darkgray";});
    });
});

sliderInput.addEventListener('input', removeGrid);
createGrid();


















