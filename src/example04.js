import * as THREE from 'three/build/three.module';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';


const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFFFFF);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
document.body.appendChild(renderer.domElement);

const pmremGenerator = new THREE.PMREMGenerator(renderer);
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0).texture;

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(5, 5, 5);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

const loader = new GLTFLoader().setPath('porsche/');

loader.load('scene.gltf', function (gltf) {
    scene.add(gltf.scene);
    animate();

}, function(xhr){
    console.log(xhr);
}, function (err) {

    console.error(err);
});

function animate() {

    requestAnimationFrame(animate);
    controls.update();
    render();
}

function render(){
    renderer.render(scene, camera);
}


