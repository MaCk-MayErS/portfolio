const boutonDark = document.getElementById('dark');
const presentation = document.querySelector('.presentation');
const section = document.querySelector('.section');
const presentationTitle = presentation.querySelector('h2');
const presentationText = presentation.querySelectorAll('p');
const darkButton = document.getElementById('dark-theme-toggle');
const imageCont = document.querySelector(".image-container");
const BgLogo = document.getElementById('logo-img');
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
    // Détection de la largeur de l'écran
    const isMobile = window.innerWidth <= 920;
    
    if (document.body.classList.contains('dark-mode')) {
        // Dark mode
        presentation.style.textAlign = 'center';
        presentationTitle.style.fontSize = isMobile ? '40px' : '70px'; // Change la taille du texte en fonction de la taille de l'écran
        section.style.marginLeft = isMobile ? "0" : "300px";  // Si mobile, réinitialiser la marge à gauche
        BgLogo.style.backgroundColor = "#e5e5e5";
        imageCont.style.backgroundColor = '#e5e5e5';
        presentationTitle.style.color = '#fff';  
        presentation.style.top = isMobile ? "60px" : "0px"; 
    } else {
        // Mode par défaut
        presentation.style.textAlign = 'center';
        presentationTitle.style.fontSize = isMobile ? '40px' : '70px'; // Change la taille du texte en fonction de la taille de l'écran
        section.style.marginLeft = isMobile ? "0" : "";  // Réinitialise la marge à gauche en mobile
        presentationTitle.style.color = '#000';
        imageCont.style.backgroundColor = 'transparent';
        BgLogo.style.backgroundColor = "#000";
        presentation.style.top = isMobile ? "60px" : "0px"; 
    }
}


// Ajouter un écouteur d'événement pour réajuster les styles si la taille de la fenêtre change
window.addEventListener('resize', updateTextStyle);




const toggleTextContent = () => {
    if (document.body.classList.contains('dark-mode')) {
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
    } 
    else {
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

updateCanvasVisibility();
updateTextStyle();

