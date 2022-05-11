// 1. Creating 16 x 16 grid of square divs.
const drawingGrid = document.querySelector(".drawingGrid");

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    for (let j = 0; j < 16; j++) {
        const entry = document.createElement('div');
        entry.classList.add("gridElement");
        entry.style.width = `${512 / 16}px`;
        entry.style.height = `${512 / 16}px`;
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