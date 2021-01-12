import React, { useRef, useEffect, useState, useContext } from 'react';
import PortfolioContext from '../../context/context';
import drawImageToCanvas, { reset } from './particle';
import pngData from './pngData';

const HeroParticles = () => {
  const { darkTheme } = useContext(PortfolioContext);
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
      // reset the canvas to blank. Needed for change from light to dark mode
      reset({ ctx, canvas });
      ctx.drawImage(png, 0, 0);
      const backgroundRGBA = darkTheme ? 'rgba(36,36,36,0.2)' : 'rgba(255,255,255,0.2)';
      drawImageToCanvas({ canvas, ctx, png, backgroundRGBA });
    }
  }, [canvasRef, darkTheme]);

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
