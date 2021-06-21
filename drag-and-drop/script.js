var targetContainer = document.querySelector(".target-container");

let bounds = targetContainer.getBoundingClientRect();

var currentMovingElement = null;

var mouseX = 0, mouseY = 0;

var offsetX = 0, offsetY = 0;

var boxWidth = 200, boxHeight = 100;



targetContainer.ondragover = function (e) {
    e.preventDefault();
}

targetContainer.ondragenter = function (e) {
    e.preventDefault();
    currentMovingElement.style.position = "absolute";
}

targetContainer.ondragleave = function (e) {

}

targetContainer.ondrop = function (e) {
    e.preventDefault();
    currentMovingElement.style.left = (mouseX - offsetX) + "px";
    currentMovingElement.style.top = (mouseY - offsetY) + "px";
    this.appendChild(currentMovingElement);
}

var boxCollection = document.querySelectorAll(".box");

for (let box of boxCollection) {
    box.addEventListener("dragstart", onDragStart);
    box.addEventListener("dragend", onDragEnd);
    box.addEventListener("drag", onDrag);
    box.addEventListener("mousedown", onMouseDown);
}

function onDragStart(e) {
    let target = e.target;
    currentMovingElement = target;
}

function onDragEnd(e) {

}

function onDrag(e) {
    mouseX = e.clientX - bounds.left;
    mouseY = e.clientY - bounds.top;
}

function onMouseDown(e) {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
}