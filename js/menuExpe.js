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
    if (document.body.classList.contains('dark-mode')) {
        presentation.style.textAlign = 'center';               
        presentationTitle.style.fontSize = '70px'; 
        presentationText.forEach(p => p.style.fontSize = '25px');  
        presentationText.forEach(p => p.style.marginTop = '20px');
      
        BgLogo.style.backgroundColor = "#e5e5e5"
        imageCont.style.backgroundColor = '#e5e5e5';
        presentationTitle.style.color = '#fff';     
    } 
    else {
        presentation.style.textAlign = 'center';
        presentationTitle.style.fontSize = '70px';  
        presentationText.forEach(p => p.style.fontSize = '25px');  
        presentationText.forEach(p => p.style.marginTop = '20px');
        section.style.marginLeft = "";
        presentationTitle.style.color = '#000';
        imageCont.style.backgroundColor = 'transparent';
        BgLogo.style.backgroundColor = "#000"
    }
}

const toggleTextContent = () => {
    if (document.body.classList.contains('dark-mode')) {
        presentationTitle.innerHTML = `
            <span class="title-word title-word-1">En,</span>
            <span class="title-word title-word-2">cour</span>
            <span class="title-word title-word-3">de</span>
            <br>
            <span class="title-word title-word-4">création !</span>
        `;
        presentationText[0].innerHTML = `
            "Notre site est actuellement en maintenance pour améliorer nos services`;
        presentationText[1].innerHTML = `
            Nous faisons tout notre possible pour que cet espace soit de nouveau disponible très prochainement.
        `;
        presentationText[2].innerHTML = `Merci de votre patience et à bientôt !`;
        presentationText[3].innerHTML = ``;
    } 
    else {
        presentationTitle.innerHTML = `
            <span class="title-word title-word-1">Voici</span>
                    <span class="title-word title-word-2">mon expérience</span>
                    <br>
                    <span class="title-word title-word-3">dans</span>
                    <span class="title-word title-word-4">l'informatique</span>
        `;
        presentationText[0].innerHTML = `
           2023 - 2024
                    <br>
                    technicien support en informatique • Econocom `;
        presentationText[1].innerHTML = `
            2021 - 2022
                    <br>
                    technicien support et sécurité en informatique  • eps`;
        presentationText[2].innerHTML = `
           2021
                    <br>
                    Technicien support en informatique • proman 128
               `;
        presentationText[3].innerHTML = `
         2019 - 2020
                    <br>
                    Technicien support et résseau en informatique • Interway`;             
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
