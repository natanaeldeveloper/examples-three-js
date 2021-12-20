import * as THREE from 'three/build/three.module';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1500);
const renderer = new THREE.WebGLRenderer();
camera.position.set(350, 50, 1000); // (x,y,z)

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new FontLoader();

loader.load('helvetiker_regular.typeface.json', function (font) {
    const geometry = new TextGeometry('Hello World', {
        font: font,
        size: 100,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 10
    });
    const material = new THREE.MeshNormalMaterial();
    const text = new THREE.Mesh(geometry, material);
    scene.add (text);
    renderer.render(scene, camera);
});