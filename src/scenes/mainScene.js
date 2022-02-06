var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import 'phaser';
import phaserPng from '../assets/phaser.png';
var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this, { key: 'MainScene' }) || this;
    }
    MainScene.prototype.preload = function () {
        this.load.image('phaser', phaserPng);
    };
    MainScene.prototype.create = function () {
        var _this = this;
        this.image = this.add.image(400, 300, 'phaser');
        this.input.on('pointerdown', function (event) {
            _this.image.x = event.x;
            _this.image.y = event.y;
        });
    };
    return MainScene;
}(Phaser.Scene));
export { MainScene };
