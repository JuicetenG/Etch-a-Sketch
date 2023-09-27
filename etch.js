const gridContainer = document.querySelector('#gridContainer');


for(let i = 0; i < 16; i++){
    let gridSquareX = document.createElement('div');
    gridSquareX.classList.add('grid-squareX');
    gridContainer.appendChild(gridSquareX); 

    for(let j = 0; j < 16; j++){
        let gridSquareY = document.createElement('div');
        gridSquareY.classList.add('grid-squareY');
        gridSquareX.appendChild(gridSquareY);
    } 
}
