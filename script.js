let container = document.querySelector('.Container');
let selectedSquares = document.querySelectorAll('.Square');

// let gridSize = 16;
let gridSize = 5;
let isFirstPass;

createGrid(gridSize);


function getSquareSize(size) {
    let containerWidth = 500;
    return containerWidth / size;
}

function createGrid(size, isFirstPass) {
    let totalSquares = size * size;
    let squareSize = getSquareSize(size);
    this.isFirstPass = true;
    

    //create squared inside container
    for(let i = 0; i < totalSquares; i++) {
        let square = document.createElement('div');
        square.className = "Square";
        square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px`);
        container.appendChild(square);
    }
        
        // square.addEventListener("mouseover", ()=> {
        //     square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px; background-color: black;`)
        // });
        
        /**
         *  2. Random color
         */
        // square.addEventListener("mouseover", ()=> {
        //     square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px; background-color: ${generateRandomRGBColor()};`)
        // });

        /**
         *  3. Color + opacity to black
         */
         

        paint();
    
}

function paint() {
    const gridItems = document.querySelectorAll('.Square');

    gridItems.forEach((square)=> {
        //adds a property count to the square item
        square.count = 0;
        square.addEventListener("mouseover", (e)=> {
            //square has reached max opacity
            if(e.target.style.opacity == 1) {
                return;
            }
            /**
             * e: mouse event
             * e.target: div.Square element
             */
            //set to chosen color (grey)
            e.target.style.backgroundColor = '#707070';
            if(e.target.style.opacity < 1) {
                //increase count every time the square is hovered
                e.target.count += 1;
                //use the increasing count to increase the opacity of the chosen color
                e.target.style.opacity = 0.1 * e.target.count;
            } else {
                e.target.style.opacity = 1;
            }
        });
    });

    
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

//generate random color
function generateRandomRGBColor() {
    let red = Math.random() * (255 - 0) + 0;
    let yellow = Math.random() * (255 - 0) + 0;
    let blue = Math.random() * (255 - 0) + 0;

    return `rgb(${red}, ${yellow}, ${blue})`;
}