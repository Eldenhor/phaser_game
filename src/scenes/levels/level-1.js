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
import { Scene } from 'phaser';
import { Player } from '../../classes/player';
var Level1 = /** @class */ (function (_super) {
    __extends(Level1, _super);
    function Level1() {
        return _super.call(this, 'level-1-scene') || this;
    }
    Level1.prototype.initMap = function () {
        this.map = this.make.tilemap({
            key: 'dungeon',
            tileWidth: 16,
            tileHeight: 16
        });
        this.tileset = this.map.addTilesetImage('dungeon', 'tiles');
        this.groundLayer = this.map.createLayer('Ground', this.tileset, 0, 0);
        this.wallsLayer = this.map.createLayer('Walls', this.tileset, 0, 0);
        this.physics.world.setBounds(0, 0, this.wallsLayer.width, this.wallsLayer.height);
    };
    Level1.prototype.create = function () {
        this.initMap();
        this.player = new Player(this, 100, 100);
    };
    Level1.prototype.update = function () {
        this.player.update();
    };
    return Level1;
}(Scene));
export { Level1 };
