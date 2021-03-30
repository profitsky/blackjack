import * as THREE from 'three'

class Cube{

    createCube()
    {
        const geometry = new THREE.BoxBufferGeometry(2, 2, 2); 
        const material = new THREE.MeshBasicMaterial();
        const cube = new THREE.Mesh(geometry, material);
        return cube;
    };
};

export const cube = new Cube();