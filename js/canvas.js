const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Définir la largeur et la hauteur du canvas pour qu'il occupe toute la fenêtre
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fonction pour vérifier si le mode sombre est activé
const isDarkMode = () => document.body.classList.contains('dark-mode');

// Zone autour du texte à éviter
const excludedArea = {
  x: 0, // Position X du texte
  y: 0, // Position Y du texte
  width: window.innerWidth, // Largeur du canvas
  height: 200 // Hauteur de la zone du texte (ajustez cette valeur selon votre besoin)
};

class Vec2 extends Array {
  constructor (...values) {
    switch(values.length) {
      case 2: {
        const v = values[0];
        super(v, values[1]);
        break;
      }
      case 1: {
        const v = values[0];
        super(v, v);
        break;
      }
      default: {
        super(2);
        break;
      }
    }
  }

  get x() { return this[0]; }
  set x(value) { this[0] = value; }

  get y() { return this[1]; }
  set y(value) { this[1] = value; }

  add (b) {
    this[0] += b[0];
    this[1] += b[1];
  }

  distance (b) {
    return Vec2.distance(this, b);
  }

  static distance(a, b) {
    return Math.hypot(b[0] - a[0], b[1] - a[1]);
  }
}

class Particle {
  constructor() {
    this.speed = new Vec2(Math.random(), Math.random());
    this.position = new Vec2(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    this.radius = Math.random() * 4 + 1;
  }

  update() {
    // Empêcher les particules de toucher ou de passer à travers la zone autour du texte
    if (this.position.x > window.innerWidth || this.position.x < 0) {
      this.speed.x *= -1;
    }
    if (this.position.y > window.innerHeight || this.position.y < 0) {
      this.speed.y *= -1;
    }

    // Si la particule touche la zone de texte, on la déplace à l'extérieur
    if (this.position.x > excludedArea.x && this.position.x < excludedArea.x + excludedArea.width &&
        this.position.y > excludedArea.y && this.position.y < excludedArea.y + excludedArea.height) {
      // Déplacez la particule hors de la zone de texte (exemple : en haut)
      
    }

    // Mettre à jour la position de la particule en dehors de la zone
    this.position.add(this.speed);
  }
}

// Créez plus de particules pour plus d'animation
const particles = [];
for (let i = 0; i < 250; i++) {
  particles.push(new Particle());
}

const update = () => {
  // Mettre à jour la taille du canvas en fonction de la fenêtre
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const MAX_DISTANCE = (window.innerWidth + window.innerHeight) / 20;

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();

    for (let j = i; j < particles.length; j++) {
      const distance = particles[i].position.distance(particles[j].position);
      if (distance < MAX_DISTANCE) {
        // Changer la couleur en fonction du mode sombre
        if (isDarkMode()) {
          // Couleur bleue pour le mode sombre
          ctx.strokeStyle = `rgba(0, 0, 255, ${1 - distance / MAX_DISTANCE})`;
          ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
        } else {
          // Couleur rouge pour le mode clair
          ctx.strokeStyle = `rgba(255, 72, 72, ${1 - distance / MAX_DISTANCE})`;
          ctx.fillStyle = "rgba(255, 72, 72, 0.5)";
        }
        
        ctx.beginPath();
        ctx.moveTo(...particles[i].position);
        ctx.lineTo(...particles[j].position);
        ctx.stroke();
      }
    }

    ctx.beginPath();
    ctx.arc(...particles[i].position, particles[i].radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  requestAnimationFrame(update);
}

update();
