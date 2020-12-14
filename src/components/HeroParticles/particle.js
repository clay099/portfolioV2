export default function drawImageToCanvas({ canvas, ctx, pngImage: png }) {
  let particlesArray = [];

  const mouse = {
    x: null,
    y: null,
    radius: 100,
  };

  window.addEventListener('mousemove', (event) => {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });

  // get image data
  const imageWidth = png.width;
  const imageHeight = png.height;
  const data = ctx.getImageData(0, 0, imageWidth, imageHeight);

  // we don't need the image anymore so clear it from canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  class Particle {
    constructor(x, y, color, size = 1.5) {
      // center image in middle of canvas
      this.x = x + canvas.width / 2 - png.width * 2;
      this.y = y + canvas.height / 2 - png.height * 2;
      this.color = color;
      this.size = size;
      // hold initial position of particle
      this.baseX = this.x;
      this.baseY = this.y;
      // changes the movement speed
      this.density = Math.random() * 10 + 2;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }

    update() {
      ctx.fillStyle = this.color;

      // collision detection
      const detectX = mouse.x - this.x;
      const detectY = mouse.y - this.y;
      const distance = Math.sqrt(detectX * detectX + detectY * detectY);

      const forceDirectionX = detectX / distance;
      const forceDirectionY = detectY / distance;

      // max distance, past that the force will be 0
      const maxDistance = mouse.radius;
      let force = (maxDistance - distance) / maxDistance;
      if (force < 0) force = 0;

      const directionX = forceDirectionX * force * this.density * 0.6;
      const directionY = forceDirectionY * force * this.density * 0.6;

      // check if particle is close to mouse
      if (distance < mouse.radius + this.size) {
        // if close move particle away from mouse
        this.x -= directionX;
        this.y -= directionY;
      } else {
        // if mouse is not longer close move particle back to original position
        if (this.x !== this.baseX) {
          const dx = this.x - this.baseX;
          this.x -= dx / 20;
        }
        if (this.y !== this.baseY) {
          const dy = this.y - this.baseY;
          this.y -= dy / 20;
        }
      }
      this.draw();
    }
  }

  function init() {
    particlesArray = [];
    const y2 = data.height;
    const x2 = data.width;
    for (let y = 0; y < y2; y += 1) {
      for (let x = 0; x < x2; x += 1) {
        // number 128 or greater means 50% opacity (or alpha) as possbile range for alpha is clamped between 0 and 255
        if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
          const positionX = x;
          const positionY = y;
          const color = `rgba(${data.data[y * 4 * data.width + x * 4]}, ${
            data.data[y * 4 * data.width + x * 4 + 1]
          }, ${data.data[y * 4 * data.width + x * 4 + 2]}, .1)`;

          particlesArray.push(
            // note by multiplying by 2 you blow up the image by 2 times
            new Particle(positionX * 4, positionY * 4, color)
          );
        }
      }
    }
  }

  function animate() {
    requestAnimationFrame(animate);

    // draw white canvas over and over with alpha to let trail slowly disappear
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    particlesArray.forEach((particle) => particle.update());
    // for (let particle of particlesArray) {
    //   particle.update();
    // }
  }

  init();
  animate();
}
