document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');  // Cibler l'élément avec ID 'logo'
    const menu = document.getElementById('menu');  // Menu à afficher / cacher
    const closeBtn = document.getElementById('close-btn');  // Cibler la div "X"

    logo.addEventListener('click', () => {
        // Toggle la classe 'open' sur le menu
        menu.classList.toggle('open'); 
        
        // Vous pouvez aussi modifier l'apparence du logo si nécessaire
        logo.classList.toggle('open');  // Change le style du logo, par exemple pour afficher un 'X'
    });

    // Ajoutez un événement pour fermer le menu lorsqu'on clique sur le X
    closeBtn.addEventListener('click', () => {
        menu.classList.remove('open');  // Ferme le menu
        logo.classList.remove('open');  // Réinitialise le logo
    });
});
