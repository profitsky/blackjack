import * as THREE from 'three'
class Camera{

    createCamera()
    {
        const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
        camera.position.set(0, 0, 10);
        return camera;
    };

};

export const camera = new Camera();