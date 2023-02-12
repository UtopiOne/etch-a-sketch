const mainDiv = document.querySelector('#main-div');
const resetButton = document.querySelector('#reset');

function createCanvas(numberOfCells) {
    for (let i = 0; i <= numberOfCells; i++) {
        if (mainDiv) {
            let childDiv = document.createElement('div');
            childDiv.classList.add('child-div');
            mainDiv.appendChild(childDiv);
            childDiv.addEventListener('pointerover', addColor);
        };
    }
}

createCanvas(256);
if (resetButton) {
    resetButton.onclick = () => resetAll();
}

function addColor(e) {
    e.target.classList.add('painted-div');
}

function resetAll() {
    const paintedChildDivs = document.querySelectorAll('.painted-div');
    paintedChildDivs.forEach((div) => {
        div.classList.remove('painted-div');
    });
}

