const boutonRetour = document.querySelector('.bouton-dark1');  
const jPrixx = document.querySelector('.jeu');  
const Adess = document.querySelector('.container');  
const boutonJP = document.querySelector(".magic1")
const boutonD = document.querySelector(".magic2")

boutonRetour.addEventListener('click', () => {
    jPrixx.style.display = 'none';
    Adess.style.display = 'none'; 
    document.querySelector('.presentation').style.display = 'flex'; 
});

boutonJP.addEventListener('click', () => {
        jPrixx.style.display = "flex"
        Adess.style.display = "none"
        document.querySelector('.presentation').style.display = 'none';
})

boutonD.addEventListener('click', () => {
    jPrixx.style.display = "none"
    Adess.style.display = "block"
    document.querySelector('.presentation').style.display = 'none';
})
