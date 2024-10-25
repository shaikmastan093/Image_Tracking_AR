// main.js
AFRAME.registerComponent('particle-effect', {
    init: function () {
      // Create the particle entity
      const particle = document.createElement('a-entity');
      
      // Configure particle properties
      particle.setAttribute('particle-system', {
        preset: 'dust',           // Predefined particle effect (e.g., dust, snow, rain)
        color: '#FFC0CB, #FFFFFF', // Colors for the particles
        particleCount: 5000,       // Number of particles
        size: 0.2,                 // Size of each particle
        maxAge: 2,                 // Lifetime of each particle
        velocityValue: '0 2 0',    // Upward velocity
        opacity: 0.7,              // Opacity of particles
        transparent: true,
      });
  
      // Position the particle effect above the main model
      particle.setAttribute('position', '0 1 0'); // Adjust as needed for visual alignment
  
      // Append the particle effect to the scene
      this.el.sceneEl.appendChild(particle);
    }
  });
  