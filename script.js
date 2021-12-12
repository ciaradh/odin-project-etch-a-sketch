let container = document.querySelector('.Container');
let selectedSquares = document.querySelectorAll('.Square');

let gridSize = 16;

createGrid(gridSize);

function getSquareSize(size) {
    let containerWidth = 640;
    return containerWidth / size;
}

function createGrid(size) {
    let totalSquares = size * size;
    let squareSize = getSquareSize(size);

    //create squared inside container
    for(let i = 0; i < totalSquares; i++) {
        let square = document.createElement('div');
        square.className = "Square";
        square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px`);
        square.addEventListener("mouseover", ()=> {
            square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px; background-color: black;`)
        });
        container.appendChild(square);
    }
}


//reset function
function reset() {
    //remove background color
    selectedSquares.forEach((selectedSquare)=> {
        selectedSquare.removeAttribute("style");
    });

    //let user choose a new grid size
    let newGridSize = prompt("Choose grid size:", "Number between 0 and 100");
    if(newGridSize != null) {
        //TODO: change while with if
        while (parseInt(newGridSize) > 100 || parseInt(newGridSize) < 0) {
            newGridSize = prompt("Choose grid size:", "Number between 0 and 100");
        }
    }
    removeAllChildNodes(container);
    createGrid(newGridSize);
}

//remove children from container
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
