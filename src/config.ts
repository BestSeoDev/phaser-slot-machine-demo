import type Phaser from 'phaser';

import { Boot, Game, Preload } from './scenes';

type Config = Phaser.Types.Core.GameConfig & { width: number; height: number };

const config: Config = {
  width: 390,
  height: 219,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  fps: {
    min: 30,
    target: 60,
  },
  scene: [Preload, Boot, Game],
};

export default config;
