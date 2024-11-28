"use strict";
const vie = 7;
let tentative = vie;
let nbSecret = Math.floor(Math.random() * 100) + 1;
const revel = document.querySelector(".carte p")
const restart = document.querySelector(".CLC")
const carte = document.querySelector(".carte");
const Butt = document.querySelector('.button')

const Toucheentrer = document.querySelector(".input");
Toucheentrer.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        jeu();
    }
});


document.querySelector('.Jprix').addEventListener('click', () => {
    document.querySelector('.jeu').style.display = 'flex'; // Afficher le jeu
    document.querySelector('.presentation').style.display = 'none'; // Masquer la présentation
});

Butt.addEventListener('click', jeu)
restart.addEventListener('click', restartJeu)


function jeu() {
    const enigme = document.querySelector(".input");
    const choix = parseInt(enigme.value);
    const tentRest = document.querySelector(".nbTent");
    const message = document.querySelector(".message")
    document.querySelector(".message").style.display = "flex"
    carte.classList.remove("retourne");
    carte.classList.remove("retourne2");

    if (isNaN(choix), choix < 1 || choix > 100) {
        message.textContent = "Veuillez entrer un nombre valide entre 1 et 100.";
        return;
    }
    if (choix == nbSecret) {
        message.innerHTML = "<strong>Bravo vous avez GAGNER !</strong>";
        message.style.color = "darkgreen";
        finJeu();
    }
    else if (choix < nbSecret) {
        message.innerHTML = "<strong>Trop faible...</strong>";
        message.style.color = "darkred";
        tentative--;
        tentRest.innerHTML = "tentative restante : <strong>" + tentative + "</strong>"; //`tentative restante : ${tentative}` 
    }
    else if (choix > nbSecret) {

        message.innerHTML = "<strong>Trop fort...</strong>";
        message.style.color = "darkred";
        tentative--;
        tentRest.innerHTML = "tentative restante : <strong>" + tentative + "</strong>"; //`tentative restante : ${tentative}` 
    }
    if (tentative <= 0) {
        message.innerHTML = "<strong>Vous avez PERDU !</strong>";
        message.style.color = "#ff4848";
        finJeu();
    }
}

function finJeu() {
    document.querySelector(".input").disabled = true;
    document.querySelector(".button").disabled = true;
    revel.textContent = "";
    restart.style.display = "none";
    carte.classList.add("retourne");
    const delay = 500;
    setTimeout(function () {
        revel.textContent = nbSecret
        restart.style.display = "flex";
        carte.style.background = `rgb(${255}, ${72}, ${72})`;
    }, delay);

}
function restartJeu() {
    tentative = 7;
    nbSecret = Math.floor(Math.random() * 100 + 1);
    document.querySelector(".carte p").textContent = "";
    document.querySelector(".CLC").style.display = "none";
    document.querySelector(".nbTent").innerHTML = "il te reste <strong>7</strong> vie";
    document.querySelector(".input").disabled = false;
    document.querySelector(".button").disabled = false;
    document.querySelector(".message").innerHTML = "<strong>bonne chance</strong>"
    document.querySelector(".message").style.color = "";
    revel.textContent = "?";
    carte.classList.add("retourne2");
    const delay = 500;
    setTimeout(function () {
        carte.style.backgroundColor = `white`;
        carte.style.backgroundImage =
    `repeating-linear-gradient(${45}deg, transparent,transparent ${2}px, rgb(${6}, ${21}, ${109}) ${1}px, rgb(${6}, ${21}, ${109}) ${5}px),
    repeating-linear-gradient(-${45}deg, transparent,transparent ${2}px, rgb(${6}, ${21}, ${109}) ${1}px, rgb(${6}, ${21}, ${109}) ${5}px)`;
        revel.textContent = "";
    }, delay);
}