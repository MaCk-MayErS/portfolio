const boutonDark = document.getElementById('dark');
const presentation = document.querySelector('.presentation');
const section = document.querySelector('.section');
const presentationTitle = presentation.querySelector('h2');
const presentationText = presentation.querySelectorAll('p');
const BgLogo = document.getElementById('logo-img');
const imageCont = document.querySelector(".image-container");
const justP = document.querySelector('.Jprix')
const Ades = document.querySelector(".aDessin")
const imageConst = imageCont; 

boutonDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateCanvasVisibility();  
    updateTextStyle();  
    toggleTextContent();  
});

const updateCanvasVisibility = () => {
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('canvas').style.display = 'none';
    } else {
        document.getElementById('canvas').style.display = 'block';
    }
};

const updateTextStyle = () => {
    if (document.body.classList.contains('dark-mode')) {
        presentation.style.textAlign = 'center';               
        presentationTitle.style.fontSize = '70px'; 
        presentationText.forEach(p => {
            p.style.fontSize = '25px';  
            p.style.marginTop = '20px'; // Ajustez cette valeur si nécessaire
            p.style.textAlign = 'center'; // Assurez-vous que les paragraphes sont centrés
        });
        BgLogo.style.backgroundColor = "#e5e5e5";
        imageCont.style.backgroundColor = '#e5e5e5';
        presentationTitle.style.color = '#fff';
        justP.style.display = 'flex'
        Ades.style.display = 'flex'
        

    } else {
        presentation.style.textAlign = 'center';
        presentationTitle.style.fontSize = '70px';  
        presentationText.forEach(p => {
            p.style.fontSize = '25px';  
            p.style.marginTop = '20px';
            p.style.textAlign = 'center'; // Centrage des paragraphes en mode clair
        });
        section.style.marginLeft = "";
        presentationTitle.style.color = '#000';
        imageCont.style.backgroundColor = 'transparent';
        BgLogo.style.backgroundColor = "#000";
        justP.style.display = 'none'
        Ades.style.display = 'none'
    }
};

// Mise à jour du contenu texte en fonction du mode
const toggleTextContent = () => {
    if (document.body.classList.contains('dark-mode')) {
        presentationTitle.innerHTML = `
            <span class="title-word title-word-1">Bienvenue</span>
            <br>
            <span class="title-word title-word-2">Sur la </span>
            <span class="title-word title-word-3">section</span>
            <br>
            <span class="title-word title-word-4">Mini-jeux</span>
        `;
        presentationText[0].innerHTML = `
            Dans la section <strong>mini-jeux</strong>, je vous propose de pouvoir <strong>jouer</strong> à quelques créations de <strong>ma part.
            </strong> Je vous souhaite bon jeu. <strong>:°]</strong>
        `;
        presentationText[1].innerHTML = `
            Mini-jeu numéro 1 : <strong>Le juste prix</strong> (le but sera de trouver le bon numéro).
        `;
        presentationText[2].innerHTML = `Dans la section <strong>dessins</strong>, je vous propose de <strong>créer</strong> quelques œuvres de <strong>ma part</strong>. Amusez-vous bien et laissez libre cours à votre imagination ! <strong>:°]</strong>`;
        presentationText[3].innerHTML = `Mini-jeu numéro 2 : <strong>Le bon dessin</strong> (amusez-vous à créer l'œuvre parfaite en utilisant les bons outils) !`;

    } 
    else {
        presentationTitle.innerHTML = `
            <span class="title-word title-word-1">Rigoureux.</span>
            <br>
            <span class="title-word title-word-2">Dynamique</span>
            <span class="title-word title-word-3">et</span>
            <br>
            <span class="title-word title-word-4">Motivé.</span>
        `;
        presentationText[0].innerHTML = `
            J'aime le relationnel. Je sais <strong>travailler en équipe</strong> tout en sachant faire preuve
                    d'initiative.
                    De formation technique et théorique informatique,
                    je suis ouvert à toute <strong>proposition d'emploi</strong> dans le domaine
                    du Développement ou dans tout autre domaine offrant <strong>formation qualifiante.</strong>
        `;
        presentationText[1].innerHTML = ``;
        presentationText[2].innerHTML = ``;
        presentationText[3].innerHTML = ``;
    }
};
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const scrollFactor = Math.min(scrollPosition / 500, 1); 
    const isDarkMode = document.body.classList.contains('dark-mode');
    const bgColor = isDarkMode ? '#000' : '#fff'; 
    const logoBgColor = isDarkMode ? '#e5e5e5' : '#000'; 
    imageCont.style.backgroundColor = `rgba(${parseInt(bgColor.slice(1, 3), 16)}, ${parseInt(bgColor.slice(3, 5), 16)}, ${parseInt(bgColor.slice(5, 7), 16)}, ${scrollFactor})`; 
    BgLogo.style.backgroundColor = `rgba(${parseInt(logoBgColor.slice(1, 3), 16)}, ${parseInt(logoBgColor.slice(3, 5), 16)}, ${parseInt(logoBgColor.slice(5, 7), 16)}, ${scrollFactor})`; 
    presentationTitle.style.color = `rgba(255, 255, 255, ${scrollFactor})`;
});

// Mettre à jour les styles initiaux
updateCanvasVisibility();
updateTextStyle();
