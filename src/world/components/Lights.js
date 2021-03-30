import * as THREE from 'three'
class Light
{
    createLights()
    {
        const ambientLight = new THREE.HemisphereLight("white", "darkslategrey", 5);
        const mainLight = new THREE.DirectionalLight('white', 4);
        mainLight.position.set(10, 10, 10);
        return { ambientLight, mainLight };
    };
};

export const light = new Light();