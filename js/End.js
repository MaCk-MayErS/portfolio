document.querySelector('.endNav').addEventListener('animationiteration', function () {
    this.style.animation = 'none';
    this.offsetHeight; 
    this.style.animation = 'upcredits 7s linear infinite';
});