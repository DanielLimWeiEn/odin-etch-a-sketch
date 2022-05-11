// 1. Creating 16 x 16 grid of square divs.
const drawingGrid = document.querySelector(".drawingGrid");
let isDrawing = false;

function drawGrid(n) {
    drawingGrid.replaceChildren();
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        for (let j = 0; j < n; j++) {
            const entry = document.createElement('div');
            entry.classList.add("gridElement");
            entry.style.width = `${512 / n}px`;
            entry.style.height = `${512 / n}px`;
            entry.addEventListener('mousedown', (event) => {
                isDrawing = true; // Use a global variable to mark whether we are draing.
            });
            entry.addEventListener('mousemove', (event) => {
                if (isDrawing) { // Only draw when the mouse is down.
                    entry.classList.add("hoverGridElement");
                }
            });
            entry.addEventListener('mouseup', (event) => {
                isDrawing = false; // Set the variable to false on mouseup to prevent drawing.
            });
            // For non lasting fade away affect.
            // entry.addEventListener('transitionend', (event) => {
            //     entry.classList.remove("hoverGridElement");
            // })
            row.appendChild(entry);  
        }
        drawingGrid.appendChild(row);
    }
}

drawGrid(16);

// 2. Customizing the size of the grid.
const setDimensionButton = document.querySelector("#dimension");

setDimensionButton.addEventListener('click', event => {
    let dim = parseInt(prompt("Enter Dimensions for N x N Grid"));
    while (dim > 64 || dim < 1) {
        dim = parseInt(prompt("Enter Dimension for N x N Grid"));
    }
    drawGrid(dim);
});

// 3. Reset button.
const resetButton = document.querySelector("#reset");

resetButton.addEventListener('click', event => {
    drawGrid(16);
})