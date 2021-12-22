import * as THREE from 'three/build/three.module';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

let scene, camera, renderer, controls, loader, pmremGenerator;

scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFFFFF);

camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 0, 10);

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.8;
renderer.outputEncoding = THREE.sRGBEncoding;
document.body.appendChild(renderer.domElement);

pmremGenerator = new THREE.PMREMGenerator(renderer);
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0).texture;

controls = new OrbitControls(camera, renderer.domElement);
controls.update();

loader = new GLTFLoader().setPath('card3D/')
loader.load('free_car_001.gltf', (gltf) => {

    scene.add(gltf.scene);


    render();

}, undefined, (err) => {
    console.error(err);
})

function render() {
    requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera);
}

render();