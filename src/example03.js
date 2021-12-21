const THREE = require('three/build/three.module');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
const renderer = new THREE.WebGLRenderer();

camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const points = [];

points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(-10, 20, 0));
points.push(new THREE.Vector3(10, 0, 0));
points.push(new THREE.Vector3(10, 0, 0));
points.push(new THREE.Vector3(10, 20, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);

scene.add(line);

function animate() {
    requestAnimationFrame(animate);
    line.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();