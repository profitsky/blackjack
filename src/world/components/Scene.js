import * as THREE from 'three'
class Scene{   

    createScene()
    {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('skyblue');        
        return scene;
    };

};

export const scene = new Scene();