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
import king from '../assets/scprites/king.png';
import a_king from '../assets/spritesheets/a-king.png';
import dungeon from '../assets/tilemaps/tiles/dungeon-16-16.png';
import * as a_king_atlas from '../assets/spritesheets/a-king_atlas.json';
import * as dungeon_atlas from '../assets/tilemaps/json/dungeon.json';
var LoadingScene = /** @class */ (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        return _super.call(this, 'loading-scene') || this;
    }
    LoadingScene.prototype.preload = function () {
        this.load.image('king', king);
        this.load.atlas('a-king', a_king, a_king_atlas);
        this.load.image('tiles', dungeon);
        this.load.tilemapTiledJSON('dungeon', dungeon_atlas);
    };
    LoadingScene.prototype.create = function () {
        this.scene.start('level-1-scene');
    };
    return LoadingScene;
}(Scene));
export { LoadingScene };
