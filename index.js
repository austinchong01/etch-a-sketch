const body = document.querySelector("body");
const btn = document.createElement("button");
btn.textContent = "Create"
body.appendChild(btn);

function createRow(col, dim){
    const square = document.createElement("div");
    square.classList = "square";
    square.style.width = `${dim}px`;
    square.style.height = `${dim}px`;
    square.style.backgroundColor = "grey";
    col.appendChild(square);
};

function createGrid(rows, cols, dim, container){
    for (let i = 0; i < rows; i++){
        const col = document.createElement("div");
        col.style.display = "flex";
        for(let j = 0; j < cols; j++){
            createRow(col, dim);
        }
        container.appendChild(col)
    }
};

btn.addEventListener("click", () => {
    const num = prompt("Grid Size:"); //num x num grid

    //delete if container exists
    const check = document.querySelector("div")
    if (check != null) {
        check.remove();
    }

    const container = document.createElement("div");
    container.style.cssText = "display: flex; flex-direction: column; align-items: center";
    body.appendChild(container);

    let dim = 500/num;  //determine size of box

    //validation check
    if (num > 0 && num <= 100){
        createGrid(num, num, dim, container);
    } else {
        alert("Error Input, must be from 1-100");
    }

    //randomize color upon hover
    container.addEventListener("mouseover", (event) => {
        if (event.target.classList == "square"){
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    });
});