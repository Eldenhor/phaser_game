import { Game } from 'phaser';
import { LoadingScene } from './scenes/loadingScene';
import { Level1 } from './scenes/levels/level-1';
var gameConfig = {
    title: 'Phaser game',
    type: Phaser.WEBGL,
    parent: 'game',
    backgroundColor: '#351f1b',
    scale: {
        mode: Phaser.Scale.ScaleModes.NONE,
        width: window.innerWidth,
        height: window.innerHeight,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    render: {
        antialiasGL: false,
        pixelArt: true
    },
    callbacks: {
        postBoot: function () {
            window.sizeChanged();
        }
    },
    canvasStyle: 'display: block; width: 100%; height: 100%;',
    autoFocus: true,
    audio: {
        disableWebAudio: false,
    },
    scene: [LoadingScene, Level1]
};
window.sizeChanged = function () {
    if (window.game.isBooted) {
        setTimeout(function () {
            window.game.scale.resize(window.innerWidth, window.innerHeight);
            window.game.canvas.setAttribute('style', "display: block; width: " + window.innerWidth + "px; height: " + window.innerHeight + "px;");
        }, 100);
    }
};
window.onresize = function () { return window.sizeChanged(); };
window.game = new Game(gameConfig);
