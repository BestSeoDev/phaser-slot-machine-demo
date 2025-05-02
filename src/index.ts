import Phaser from 'phaser';

import config from './config';

export default class Game {
  constructor() {
    new Phaser.Game(config);
  }

  resize() {
    const canvas = document.querySelector('canvas')!;

    // Get window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Force canvas to take full width and height of the screen
    canvas.style.width = windowWidth + 'px';
    canvas.style.height = windowHeight + 'px';
    
    // Remove any margins/padding that might be causing gaps
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
  }
}

const game = new Game();
game.resize();
window.addEventListener('resize', game.resize, false);
