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

if (resetButton) {
    resetButton.addEventListener('click', () => {
        removeCanvas();
        createCanvas(256);
    })
}

function addColor(e) {
    e.target.style = `background-color: rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    e.target.removeEventListener("pointerover", addColor);
}

function removeCanvas() {
    let childDivs = document.querySelectorAll('.child-div');
    childDivs.forEach((div: any) => {
        div.remove()
    })
}
