var mainDiv = document.querySelector('#main-div');
var resetButton = document.querySelector('#reset');
function createCanvas(numberOfCells) {
    for (var i = 0; i <= numberOfCells; i++) {
        if (mainDiv) {
            var childDiv = document.createElement('div');
            childDiv.classList.add('child-div');
            mainDiv.appendChild(childDiv);
            childDiv.addEventListener('pointerover', addColor);
        }
        ;
    }
}
if (resetButton) {
    resetButton.addEventListener('click', function () {
        removeCanvas();
        createCanvas(256);
    });
}
function addColor(e) {
    e.target.style = "background-color: rgb(".concat(Math.floor(Math.random() * 256), ",").concat(Math.floor(Math.random() * 256), ",").concat(Math.floor(Math.random() * 256), ")");
    e.target.removeEventListener("pointerover", addColor);
}
function removeCanvas() {
    var childDivs = document.querySelectorAll('.child-div');
    childDivs.forEach(function (div) {
        div.remove();
    });
}
function resetAll() {
    var paintedChildDivs = document.querySelectorAll('.painted-div');
    paintedChildDivs.forEach(function (div) {
        div.classList.remove('painted-div');
    });
}
