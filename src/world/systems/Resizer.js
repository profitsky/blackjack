export class Resizer
{
    constructor(container, camera, renderer)
    {
        this.container = container;
        this.camera = camera;
        this.renderer = renderer;
        this.loadFunctionality = this.setSize();
    };

    setSize()
    {
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio, 1);
    };

    getResize()
    {
        window.addEventListener("resize", () => {
            this.setSize();
        })
    };
};