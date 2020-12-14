import React, { useRef, useEffect, useState } from 'react';
import drawImageToCanvas from './particle';
import pngImage from './pngImage';

const HeroParticles = () => {
  const canvasRef = useRef(null);
  const [resize, setResize] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.drawImage(pngImage, 0, 0);
    drawImageToCanvas({ canvas, ctx, pngImage });
    setResize(false);
  }, [resize]);

  return <canvas ref={canvasRef} id="canvasHero" />;
};

export default HeroParticles;
