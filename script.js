// 1. Creating 16 x 16 grid of square divs.
const drawingGrid = document.querySelector(".drawingGrid");

function drawGrid(n) {
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        for (let j = 0; j < n; j++) {
            const entry = document.createElement('div');
            entry.classList.add("gridElement");
            entry.style.width = `${512 / n}px`;
            entry.style.height = `${512 / n}px`;
            entry.addEventListener('mouseover', (event) => {
                entry.classList.add("hoverGridElement");
            });
            entry.addEventListener('transitionend', (event) => {
                entry.classList.remove("hoverGridElement");
            })
            row.appendChild(entry);  
        }
        drawingGrid.appendChild(row);
    }
}

drawGrid(16);

// 2. Customizing the size of the