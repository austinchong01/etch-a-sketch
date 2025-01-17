let container = document.querySelector(".container");
container.style.display = "flex";
container.style.gap = "10px";

let canvas = document.createElement("canvas");
canvas.style.cssText = "width: 500px; height: 500px; background-color: grey";
container.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.addEventListener("mouseover", (event) => {
    const mouseX = event.mouseX;
    const mouseY = event.mouseY;
    
    ctx.fillStyle = "red";
    ctx.fillRect(mouseX, mouseY, 1, 1);
});

