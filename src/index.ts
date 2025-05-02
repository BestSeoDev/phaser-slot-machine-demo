import Phaser from 'phaser';

import config from './config';

export default class Game {
  constructor() {
    new Phaser.Game(config);
  }

  resize() {
    const canvas = document.querySelector('canvas')!;
    
    // Target mobile dimensions
    const targetWidth = 1280;
    const targetHeight = 720;
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculate scale to fill the screen completely
    const scaleX = windowWidth / targetWidth;
    const scaleY = windowHeight / targetHeight;
    const scale = Math.max(scaleX, scaleY);
    
    // Apply the scaling
    const newWidth = targetWidth * scale;
    const newHeight = targetHeight * scale;
    
    // Center the canvas
    const left = (windowWidth - newWidth) / 2;
    const top = (windowHeight - newHeight) / 2;
    
    // Apply styles
    canvas.style.width = newWidth + 'px';
    canvas.style.height = newHeight + 'px';
    canvas.style.position = 'absolute';
    canvas.style.left = left + 'px';
    canvas.style.top = top + 'px';
    
    // Optional: remove any margin/padding to ensure full coverage
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
  }
}

const game = new Game();
game.resize();
window.addEventListener('resize', game.resize, false);
