// utils/background.js
export function initBackground() {
  function createShapes() {
    const background = document.getElementById("geometric-background");
    const shapeTypes = ["square", "circle", "triangle", "rectangle"];
    for (let i = 0; i < 40; i++) {
      const shape = document.createElement("div");
      const shapeClass =
        shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      shape.className = `shape ${shapeClass}`;
      shape.style.left = `${Math.random() * 100}%`;
      shape.style.top = `${Math.random() * 100}%`;
      shape.style.animationDelay = `${Math.random() * 10}s`;
      shape.style.animationDuration = `${Math.random() * 10 + 10}s`;
      background.appendChild(shape);
    }
  }

  function createParticles() {
    const particlesContainer = document.getElementById("particles");
    for (let i = 0; i < 100; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 8}s`;
      particle.style.animationDuration = `${Math.random() * 4 + 4}s`;
      particlesContainer.appendChild(particle);
    }
  }

  function addMouseInteraction() {
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const shapes = document.querySelectorAll(".shape");
      shapes.forEach((shape) => {
        const speed = 0.05;
        const shapeX = parseFloat(shape.style.left);
        const shapeY = parseFloat(shape.style.top);
        shape.style.left = `${shapeX + (x - 0.5) * speed}%`;
        shape.style.top = `${shapeY + (y - 0.5) * speed}%`;
      });
    });
  }

  // Run everything
  createShapes();
  createParticles();
  addMouseInteraction();
}
