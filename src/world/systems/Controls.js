import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
export class Controls
{
    constructor(camera, canvas)
    {
        this.camera = camera;
        this.canvas = canvas;
        this.controls = new OrbitControls(this.camera, this.canvas);
        this.controls.target.set(0, 0.75, 0);
        this.controls.enableDamping = true;
    };    
};