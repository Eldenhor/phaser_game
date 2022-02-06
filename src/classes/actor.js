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
import { Physics } from 'phaser';
var Actor = /** @class */ (function (_super) {
    __extends(Actor, _super);
    function Actor(scene, x, y, texture, frame) {
        var _this = _super.call(this, scene, x, y, texture, frame) || this;
        _this.hp = 100;
        scene.add.existing(_this);
        scene.physics.add.existing(_this);
        _this.getBody().setCollideWorldBounds(true);
        return _this;
    }
    Actor.prototype.getDamage = function (value) {
        var _this = this;
        this.scene.tweens.add({
            targets: this,
            duration: 100,
            repeat: 3,
            yoyo: true,
            alpha: 0.5,
            onStart: function () {
                if (value) {
                    _this.hp = _this.hp - value;
                }
            },
            onComplete: function () {
                _this.setAlpha(1);
            }
        });
    };
    Actor.prototype.getHPValue = function () {
        return this.hp;
    };
    Actor.prototype.checkFlip = function () {
        if (this.body.velocity.x < 0) {
            this.scaleX = -1;
        }
        else {
            this.scaleX = 1;
        }
    };
    Actor.prototype.getBody = function () {
        return this.body;
    };
    return Actor;
}(Physics.Arcade.Sprite));
export { Actor };
