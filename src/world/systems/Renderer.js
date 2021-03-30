import * as THREE from 'three'
class Renderer
{
    createRenderer()
    {
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.physicallyCorrectLights = true;
        return renderer;
    };
};

export const renderer = new Renderer();