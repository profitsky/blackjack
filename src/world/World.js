import * as THREE from 'three'
import { scene } from "./components/Scene.js"
import { camera } from "./components/Camera.js"
import { renderer } from "./systems/Renderer.js"
import { light } from "./components/Lights.js"
import { cube } from "./components/Cube.js"
import { Resizer } from "./systems/Resizer.js"
import { Controls } from "./systems/Controls.js"


export class World{

    constructor(container)
    {
        
        this.scene = scene.createScene();
        this.camera = camera.createCamera();
        this.renderer = renderer.createRenderer();
        this.lights = light.createLights();
        this.container = container;        
        this.container.append(this.renderer.domElement);
        this.cube = cube.createCube();
        this.scene.add(this.cube);
        this.resizer = new Resizer(this.container, this.camera, this.renderer);
        // this.controls = new Controls(this.container, this.renderer.domElement)
    };

    render()
    {
        this.renderer.render(this.scene, this.camera)
    };

    

   
};