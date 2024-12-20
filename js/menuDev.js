const boutonDark = document.getElementById('dark');
const presentation = document.querySelector('.presentation');
const section = document.querySelector('.section');
const presentationTitle = presentation.querySelector('h2');
const presentationText = presentation.querySelectorAll('p');
const darkButton = document.getElementById('dark-theme-toggle');
const imageCont = document.querySelector(".image-container");
const BgLogo = document.getElementById('logo-img');
const imageConst = imageCont; 
const LogoSli = document.querySelector(".logo-slider")

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
        boutonDark.textContent = "Compétence général" 
        LogoSli.style.display = "flex"

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
        boutonDark.textContent = "Compétence en développement"
        LogoSli.style.display = "none"
    }
}

const toggleTextContent = () => {
    if (document.body.classList.contains('dark-mode')) {
        presentationTitle.innerHTML = `
            <span class="title-word title-word-1">Voici</span>
                    <span class="title-word title-word-2">mes</span>
                    <br>
                    <span class="title-word title-word-3">compétences</span>
                    <span class="title-word title-word-4">général</span>
                    <br>
                    <span class="title-word title-word-5">en Développement</span>
        `;
        presentationText[0].innerHTML = `
            Durant l'année 2024/2025, j'ai étudié les langages suivants : HTML, CSS, JavaScript, PHP, requêtes SQL...`;
        presentationText[1].innerHTML = `
            Je possède donc une base dans ces langages.
        `;
        presentationText[2].innerHTML = ``;
        presentationText[3].innerHTML = ``;
    } 
    else {
        presentationTitle.innerHTML = `
            <span class="title-word title-word-1">Voici</span>
                    <span class="title-word title-word-2">mes</span>
                    <br>
                    <span class="title-word title-word-3">compétences</span>
                    <span class="title-word title-word-4">général</span>
                    <br>
                    <span class="title-word title-word-5">en informatique</span>
        `;
        presentationText[0].innerHTML = `
           Modèle <strong>OSI, TCP/IP</strong>, adressage <strong>Ipv4 / Ipv6</strong>
                    Routage statique, routage dynamique <strong>(RiPv1, RiPv2)</strong> , <strong>DHCP NAT</strong>
                    sécurité troubleshooting….`;
        presentationText[1].innerHTML = `
           <strong>VLAN, Trunking, DTP, VTP, Inter-VLAN,</strong> sécurité, Troubleshooting
                    Server 2008 R2, 2012 R2, Active directory <strong>(AD), GPO, NTFS, WDS,
                    DHCP, DNS,</strong> Serveur d’impression, sauvegarde <strong>Raid 5, Linux,
                    windows</strong> 7, 8, 10 et 11`;
        presentationText[2].innerHTML = `
           Hardware, diagnostic, dépannage, maintenance préventive,
                    assistance à l’utilisateur, suite bureautique, logiciels de ticketing,
                    gestion de parc <strong>(GLPI),</strong> rédaction de procédures, script de
                    dépannage, <strong>ITIL, PMAD….</strong>`;
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

updateCanvasVisibility();
updateTextStyle();
