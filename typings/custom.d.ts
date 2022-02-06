declare module '*.png'
interface Window {
    sizeChanged: () => void;
    game: Phaser.Game;
}