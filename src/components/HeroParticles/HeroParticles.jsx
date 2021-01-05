import React, { useRef, useEffect, useState } from 'react';
import drawImageToCanvas from './particle';
import pngData from './pngData';

const HeroParticles = () => {
  const [showHeroParticles, setShowHeroParticles] = useState('canvasHero__hidden');
  const canvasRef = useRef(null);
  const png = new Image();
  png.src = pngData;

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.drawImage(png, 0, 0);
      drawImageToCanvas({ canvas, ctx, png });
    }
  }, [canvasRef]);

  // slowly show HeroParticles
  useEffect(() => {
    const timerID = setTimeout(() => {
      setShowHeroParticles('canvasHero__visible');
    }, 1000);
    return () => clearTimeout(timerID);
  }, []);

  return <canvas ref={canvasRef} id="canvasHero" className={showHeroParticles} />;
};

export default HeroParticles;
