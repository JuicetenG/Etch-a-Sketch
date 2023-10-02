const gridContainer = document.querySelector('#gridContainer');
const plumColor = document.querySelector('#plum');
const defaultColor = document.querySelector('#default');
let backgroundColor = "square-background"

function createGrid(){
   //type = "square-background";
    /*if(color === "plum"){
        type = "square-background-plum";
    } else type = "square-background";*/
    
    for(let i = 0; i < 24; i++){
        let gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-column');
        gridContainer.appendChild(gridColumn); 
        for(let j = 0; j < 24; j++){
            let gridSquare = document.createElement('div');
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



createGrid();

//const defaultColor = document.querySelector('#default');
//defaultColor.addEventListener('click', type = "square-background");
















