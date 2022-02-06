import {Scene} from 'phaser'
import king from '../assets/scprites/king.png'
import a_king from '../assets/spritesheets/a-king.png'
import dungeon from '../assets/tilemaps/tiles/dungeon-16-16.png'
import * as  a_king_atlas from '../assets/spritesheets/a-king_atlas.json'
import * as  dungeon_atlas from '../assets/tilemaps/json/dungeon.json'

export class LoadingScene extends Scene {
    constructor() {
        super('loading-scene');
    }
    preload(): void {
        this.load.image('king', king)
        this.load.atlas('a-king', a_king, a_king_atlas)
        this.load.image('tiles', dungeon)
        this.load.tilemapTiledJSON('dungeon', dungeon_atlas)
    }
    create(): void {
        this.scene.start('level-1-scene')
    }
}