import { Scene, Tilemaps} from 'phaser';
import { Player } from '../../classes/player'
import AnimatedTilesMin from '../../plugins/animatedTilePlugin';

export class Level1 extends Scene {
    private player!: Player
    private map!: Tilemaps.Tilemap
    private tileset!: Tilemaps.Tileset
    private wallsLayer!: Tilemaps.TilemapLayer
    private groundLayer!: Tilemaps.TilemapLayer
    private animatedLayer!: Tilemaps.TilemapLayer
    private animatedTiles!: any
    constructor() {
        super('level-1-scene');
    }
    preload(){
        this.load.scenePlugin('animatedTiles', AnimatedTilesMin, 'animatedTiles', 'animatedTiles');
    }
    private initMap(): void {
        this.map = this.make.tilemap({
            key: 'dungeon',
            tileWidth: 16,
            tileHeight: 16
        })
        this.tileset = this.map.addTilesetImage('dungeon', 'tiles')
        this.groundLayer = this.map.createLayer('Ground', this.tileset, 0, 0)
        this.wallsLayer = this.map.createLayer('Walls', this.tileset, 0,0)
        this.animatedLayer = this.map.createLayer('Animated', this.tileset, 0,0)
        this.physics.world.setBounds(0,0, this.wallsLayer.width, this.wallsLayer.height)
        this.wallsLayer.setCollisionByProperty({collides: true})
        // this.showDebugWalls()
        this.animatedTiles.init(this.map)
    }
    // private showDebugWalls(): void {
    //     const debugGraphics = this.add.graphics().setAlpha(0.7)
    //     this.wallsLayer.renderDebug(debugGraphics, {
    //         tileColor: null,
    //         collidingTileColor: new Phaser.Display.Color(243, 243, 48, 255)
    //     })
    // }
    create(): void {
        this.initMap()
        this.player = new Player(this, 100, 100)
        this.physics.add.collider(this.player, this.wallsLayer)
    }
    update(): void {
        this.player.update()
        this.animatedTiles.updateAnimatedTiles()
    }
}