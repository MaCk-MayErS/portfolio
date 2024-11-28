// Sélection des éléments DOM nécessaires
const boutonDark = document.getElementById('dark');
const presentation = document.querySelector('.presentation');
const section = document.querySelector('.section');
const presentationTitle = presentation.querySelector('h2');
const presentationText = presentation.querySelectorAll('p');
const BgLogo = document.getElementById('logo-img');
const imageCont = document.querySelector(".image-container");
const justP = document.querySelector('.Jprix')

boutonDark.addEventListener('click', () => {
    // Bascule de la classe 'dark-mode' pour changer le thème
    document.body.classList.toggle('dark-mode');
    updateCanvasVisibility();  
    updateTextStyle();  
    toggleTextContent();  
});

// Mise à jour de la visibilité du canvas
const updateCanvasVisibility = () => {
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('canvas').style.display = 'none';
    } else {
        document.getElementById('canvas').style.display = 'block';
    }
};

// Mise à jour des styles du texte en fonction du mode
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
            Dans la section <strong>mini-jeux</strong>, je vous propose de pouvoir <strong>jouer</strong> à quelques créations de <strong>ma part.</strong> Je vous souhaite bon jeu. <strong>:°]</strong>
        `;
        presentationText[1].innerHTML = `
            Mini-jeu numéro 1 : <strong>Le juste prix</strong> (le but sera de trouver le bon numéro).
        `;
        presentationText[2].innerHTML = ``
        presentationText[3].innerHTML = ``

    } else {
        presentationTitle.innerHTML = `
            <span class="title-word title-word-1">Rigoureux.</span>
            <br>
            <span class="title-word title-word-2">Dynamique</span>
            <span class="title-word title-word-3">et</span>
            <br>
            <span class="title-word title-word-4">Motivé.</span>
        `;
        presentationText[0].innerHTML = `
            J'aime le relationnel. Je sais <strong>travailler en équipe</strong> <br>tout en sachant faire preuve d'initiative.
            <br>De formation technique et théorique informatique, 
            <br>je suis ouvert à toute <strong>proposition d'emploi</strong> dans le domaine 
            du <br>Développement ou dans tout autre domaine offrant <br><strong>formation qualifiante.</strong>
        `;
    }
};

// Mettre à jour les styles initiaux
updateCanvasVisibility();
updateTextStyle();
toggleTextContent();