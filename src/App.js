import './style.scss'
import * as THREE from 'three'
import { World } from "./world/World"


class App{

    constructor()
    {
        this.container = document.querySelector("#container");        
        this.world = new World(this.container);
    };

    run()
    {
        this.world.render();
        
    };

};

const game = new App()
game.run()
