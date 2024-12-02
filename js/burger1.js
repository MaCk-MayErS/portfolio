document.addEventListener('DOMContentLoaded', () => {
    const logo1 = document.getElementById('logo1'); 
    const menu1 = document.getElementById('menu1');  
    const closeBtn1 = document.getElementById('close-btn1');  

    logo1.addEventListener('click', () => {
        menu1.classList.toggle('open'); 
        logo1.classList.toggle('open');  
    });

    closeBtn1.addEventListener('click', () => {
        menu1.classList.remove('open');  
        logo1.classList.remove('open');  
    });
});