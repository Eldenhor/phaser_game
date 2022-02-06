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
import { Actor } from './actor';
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(scene, x, y) {
        var _this = _super.call(this, scene, x, y, 'king') || this;
        // keys
        _this.keyW = _this.scene.input.keyboard.addKey('W');
        _this.keyA = _this.scene.input.keyboard.addKey('A');
        _this.keyS = _this.scene.input.keyboard.addKey('S');
        _this.keyD = _this.scene.input.keyboard.addKey('D');
        // physics
        _this.getBody().setSize(30, 30);
        _this.getBody().setOffset(8, 0);
        // animation
        _this.initAnimations();
        return _this;
    }
    Player.prototype.initAnimations = function () {
        this.scene.anims.create({
            key: 'run',
            frames: this.scene.anims.generateFrameNames('a-king', {
                prefix: 'run-',
                end: 7
            }),
            frameRate: 8
        });
        this.scene.anims.create({
            key: 'attack',
            frames: this.scene.anims.generateFrameNames('a-king', {
                prefix: 'attack-',
                end: 2
            }),
            frameRate: 8
        });
    };
    Player.prototype.update = function () {
        var _a, _b, _c, _d;
        this.getBody().setVelocity(0);
        if ((_a = this.keyW) === null || _a === void 0 ? void 0 : _a.isDown) {
            this.body.velocity.y = -110;
            if (!this.anims.isPlaying) {
                this.anims.play('run', true);
            }
        }
        if ((_b = this.keyA) === null || _b === void 0 ? void 0 : _b.isDown) {
            this.body.velocity.x = -110;
            this.checkFlip();
            this.getBody().setOffset(48, 15);
            if (!this.anims.isPlaying) {
                this.anims.play('run', true);
            }
        }
        if ((_c = this.keyS) === null || _c === void 0 ? void 0 : _c.isDown) {
            this.body.velocity.y = 110;
            if (!this.anims.isPlaying) {
                this.anims.play('run', true);
            }
        }
        if ((_d = this.keyD) === null || _d === void 0 ? void 0 : _d.isDown) {
            this.body.velocity.x = 110;
            this.checkFlip();
            this.getBody().setOffset(15, 15);
            if (!this.anims.isPlaying) {
                this.anims.play('run', true);
            }
        }
    };
    return Player;
}(Actor));
export { Player };
