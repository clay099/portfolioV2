import React, { useRef, useEffect, useState } from 'react';
import drawImageToCanvas from './particle';
import pngData from './pngData';

const HeroParticles = () => {
  const canvasRef = useRef(null);
  const [resize, setResize] = useState(false);
  const png = new Image();
  png.src = pngData;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.drawImage(png, 0, 0);
    drawImageToCanvas({ canvas, ctx, png });
    setResize(false);
  }, [resize]);

  return <canvas ref={canvasRef} id="canvasHero" />;
};

export default HeroParticles;
