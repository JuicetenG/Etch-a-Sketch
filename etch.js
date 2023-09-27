const gridContainer = document.querySelector('#gridContainer');

for(let i = 0; i < 32; i++){
    let gridColumn = document.createElement('div');
    gridColumn.classList.add('grid-column');
    gridContainer.appendChild(gridColumn); 
    for(let j = 0; j < 32; j++){
        let gridSquare = document.createElement('div');
        gridSquare.setAttribute('id', 'gridSquare');
        gridColumn.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', () => gridSquare.classList.add('square-background'));
    } 
}






