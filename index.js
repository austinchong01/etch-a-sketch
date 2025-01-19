const body = document.querySelector("body");
const container = document.createElement("div");
container.style.cssText = "display: flex; flex-direction: column";
body.appendChild(container);

function createRow(col){
    const square = document.createElement("div");
    square.style.cssText = "width: 100px; height: 100px; background-color: grey";
    col.appendChild(square);
};

function createGrid(rows, cols){
    for (let i = 0; i < rows; i++){
        const col = document.createElement("div");
        col.style.display = "flex";
        for(let j = 0; j < cols; j++){
            createRow(col);
        }
        container.appendChild(col)
    }
};

createGrid(4, 4);