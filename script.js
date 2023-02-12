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
createCanvas(256);
resetButton.onclick = function () { return resetAll(); };
function addColor(e) {
    e.target.classList.add('painted-div');
}
function resetAll() {
    var paintedChildDivs = document.querySelectorAll('.painted-div');
    paintedChildDivs.forEach(function (div) {
        div.classList.remove('painted-div');
    });
}
