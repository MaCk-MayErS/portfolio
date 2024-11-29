const canvas2 = document.getElementById('drawingCanvas');
const ctx2 = canvas2.getContext('2d');
const colorPicker = document.getElementById('color');
const clearButton = document.getElementById('clearButton');
const taille = document.getElementById('number');
const annuler = document.getElementById('annuler');
const revenir = document.getElementById('revenir');
const gomme = document.getElementById('gomme');
const dessine = document.getElementById('dessin');
const save = document.getElementById('save');
const upload = document.getElementById('upload');


document.addEventListener('DOMContentLoaded', function() {
    const aDes = document.querySelector('.aDessin');
    
    if (aDes) {
        aDes.addEventListener('click', () => {
            document.querySelector('.container').style.display = 'block'; // Afficher le jeu
            document.querySelector('.presentation').style.display = 'none'; // Masquer la présentation
        });
    }
});

let drawing = false;
let gum = false;
let currentColor = "#000000";
let currentTaille = 5;

let undoStack = [];
let redoStack = [];

function resize() {
    const widthViewport = 99;
    const heightViewport = 87;

    canvas2.style.width = widthViewport + "vw";
    canvas2.style.height = heightViewport + "vh";

    canvas2.width = window.innerWidth * (widthViewport / 100);
    canvas2.height = window.innerHeight * (heightViewport / 100);

    setCanvasBackground();
}
resize();
window.addEventListener("resize", resize);

function setCanvasBackground() {
    ctx2.fillStyle = "#FFFFFF";
    ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
}

canvas2.addEventListener('mousedown', startDrawing);
canvas2.addEventListener('mousemove', draw);
canvas2.addEventListener('mouseup', stopDrawing);
canvas2.addEventListener('mouseout', stopDrawing);

colorPicker.addEventListener('input', changeColor);
taille.addEventListener('input', changeTaille);
gomme.addEventListener('click', efface);
dessine.addEventListener('click', dessin);
save.addEventListener('click', saveimg);
clearButton.addEventListener('click', clean);
upload.addEventListener('change', uploadimg);

annuler.addEventListener('click', undo);
revenir.addEventListener('click', redo);

window.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'z') {
        event.preventDefault();
        undo();
    }

    if (event.ctrlKey && event.key === 'y') {
        event.preventDefault();
        redo();
    }
});

dessine.style.backgroundColor = "grey";

function startDrawing(e) {
    drawing = true;
    draw(e);
}

function draw(e) {
    if (!drawing) return;

    ctx2.lineWidth = currentTaille;
    ctx2.lineCap = 'round';

    if (gum) {
        ctx2.strokeStyle = "#FFFFFF";
    } else {
        ctx2.strokeStyle = currentColor;
    }

    ctx2.lineTo(e.clientX - canvas2.offsetLeft, e.clientY - canvas2.offsetTop);
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.moveTo(e.clientX - canvas2.offsetLeft, e.clientY - canvas2.offsetTop);
}

function stopDrawing() {
    drawing = false;
    ctx2.beginPath();
    saveState();
}
function saveState() {
    const imageData = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
    undoStack.push(imageData);
    redoStack = [];
}

function changeColor() {
    currentColor = colorPicker.value;
}

function changeTaille() {
    currentTaille = taille.value;
}

function efface() {
    gum = true;
    ctx2.strokeStyle = "#FFFFFF";
    dessine.style.backgroundColor = "darkgrey";
    gomme.style.backgroundColor = "grey";
    canvas2.style.cursor = "url('../photo/eraser.png') 3 35, auto";
}

function dessin() {
    gum = false;
    ctx2.strokeStyle = currentColor;
    dessine.style.backgroundColor = "grey";
    gomme.style.backgroundColor = "darkgrey";
    canvas2.style.cursor = "url('../photo/pencil.png') 1 38, auto";
}

function saveimg() {
    const imageData = canvas2.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = imageData;
    link.download = 'mon_jolie_dessin.png';
    link.click();
}

function clean() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    setCanvasBackground();
    undoStack = [];
    redoStack = [];
}

function uploadimg(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            setCanvasBackground();
            ctx2.drawImage(img, 0, 0, canvas2.width, canvas2.height);
        }
        img.src = e.target.result;
    }
    reader.readAsDataURL(file);
}
function undo() {
    if (undoStack.length > 0) {
        const lastState = undoStack.pop();
        redoStack.push(ctx2.getImageData(0, 0, canvas2.width, canvas2.height));
        ctx2.putImageData(lastState, 0, 0);
    }
}

function redo() {
    if (redoStack.length > 0) {
        const lastState = redoStack.pop();
        undoStack.push(ctx2.getImageData(0, 0, canvas2.width, canvas2.height));
        ctx2.putImageData(lastState, 0, 0);
    }
}

window.onload = function() {
    const overlay = document.querySelector('.important');

    setTimeout(() => {
        overlay.style.opacity = 0.5;
        console.log("si ta la console d'ouvert tu peux comprendre que ça fonctionne encore");
    }, 2000);

    overlay.addEventListener("click", function() {
        overlay.style.display = "none";
    });
};

