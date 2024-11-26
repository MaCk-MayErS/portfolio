const boutonDark = document.getElementById('dark');
const presentation = document.querySelector('.presentation');
const section = document.querySelector('.section')
const presentationTitle = presentation.querySelector('h2');
const presentationText = presentation.querySelectorAll('p');
const darkButton = document.getElementById('dark-theme-toggle');
const body = document.body;

// Fonction pour basculer entre le mode sombre et clair
boutonDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateCanvasVisibility();  // Met à jour la visibilité du canvas et de la boîte
    updateTextStyle();  // Met à jour la taille, la couleur et le contenu du texte
    toggleTextContent();  // Change le contenu du texte
});

// Fonction pour gérer la visibilité du canvas et de la boîte selon le mode
const updateCanvasVisibility = () => {
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('canvas').style.display = 'none';
    } else {
        document.getElementById('canvas').style.display = 'block';
    }
};

// Fonction pour changer le style du texte (taille, couleur et placement) en fonction du mode
const updateTextStyle = () => {
    if (document.body.classList.contains('dark-mode')) {
        // Mode sombre : Modifier la couleur du texte et d'autres styles
        presentation.style.textAlign = 'center';               
        presentationTitle.style.fontSize = '70px';  // Taille du titre
        presentationText.forEach(p => p.style.fontSize = '25px');  // Taille du texte
        presentationText.forEach(p => p.style.marginTop = '20px');
        section.style.marginLeft = "300px";
        
        // Changer la couleur du texte en mode sombre
        presentationTitle.style.color = '#fff';
        
        
    } else {
        // Mode clair : Taille et placement par défaut
        presentation.style.textAlign = 'center';
        presentationTitle.style.fontSize = '70px';  // Taille du titre en mode clair
        presentationText.forEach(p => p.style.fontSize = '25px');  // Taille du texte en mode clair
        presentationText.forEach(p => p.style.marginTop = '20px');
        section.style.marginLeft = "";
        
        // Rétablir la couleur du texte en mode clair
        presentationTitle.style.color = '#000';
        
    }
}

// Fonction pour changer le contenu textuel en fonction du mode sombre ou clair
const toggleTextContent = () => {
    if (document.body.classList.contains('dark-mode')) {
        // Mode sombre : changer le texte
        presentationTitle.innerHTML = `
            <span class="title-word title-word-1">Bravo,</span>
            <span class="title-word title-word-2">Vous</span>
            <span class="title-word title-word-3">avez</span>
            <br>
            <span class="title-word title-word-4">réussi !</span>
        `;

        presentationText[0].innerHTML = `
            À partir de maintenant, pendant votre navigation, n'hésitez pas à utiliser les fonctions qui vous seront proposées. <strong>Elles vous permettront de voyager à travers mon univers</strong>
        `;

        presentationText[1].innerHTML = `
            et de découvrir <strong>des projets</strong> en version courte que <strong>j'ai réalisés en développement.</strong>, Je vous souhaite encore une fois une <strong>bonne visite.</strong>.
        `;
        presentationText[2].innerHTML = ``;

           presentationText[3].innerHTML = ``;
    } else {
        // Mode clair : rétablir le texte d'origine
        presentationTitle.innerHTML = `
            <span class="title-word title-word-1">Bonjour</span>
            <span class="title-word title-word-2">Je</span>
            <span class="title-word title-word-3">Suis</span>
            <br>
            <span class="title-word title-word-4">Yohan</span>
            <span class="title-word title-word-4">Barbary</span>
        `;

        presentationText[0].innerHTML = `
            Découvrez mon portfolio en ligne, un CV interactif qui présente mes compétences, réalisations et projets à travers une expérience immersive et dynamique. <strong>Plongez dans mon univers professionnel et explorez mon parcours à votre rythme !</strong>
        `;

        presentationText[1].innerHTML = `
            Si vous souhaitez <strong>mon CV</strong> ou me <strong>contacter</strong>, vous trouverez en bas de l'accueil deux liens à cet effet. <strong>Bonne journée</strong>.
        `;
        presentationText[2].innerHTML = `
           Des <strong>menus </strong>et des <strong>options cachées</strong> ont été placés </strong>volontairement<strong> dans ce portfolio. Ces éléments vous permettront de découvrir certains <strong>projets réalisés</strong> en développement, ainsi que de mettre en <strong>valeur</strong> la maîtrise des langages acquis durant ma formation.`;
        presentationText[3].innerHTML = `
           Pour vous <strong>guider</strong>, je vous invite à tester <strong>par vous-même</strong> et à découvrir ce que ces éléments peuvent vraiment offrir. Le logo pourrait bien <strong>dissimuler une fonction spéciale</strong>, et le changement de mode de couleur pourrait entraîner des <strong>effets inattendus</strong>. Peut-être que l'interaction avec le mode de couleur <strong>modifiera</strong> plus que l'apparence de la page… C'est à <strong>vous de le découvrir !</strong>
                `;
                
    }
}

// Initialisation au chargement de la page
updateCanvasVisibility();
updateTextStyle();
