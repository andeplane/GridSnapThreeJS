let container = document.getElementById( 'container' );

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
camera.position.set(0, 0, 5);

let renderer = new THREE.WebGLRenderer({alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;

var sphere = new THREE.Mesh(
	new THREE.SphereGeometry(10.0, 32, 32),
	new THREE.MeshPhongMaterial({ color: 0x000000, wireframe: true })
)
sphere.position.set(0, 0, -20);
scene.add(sphere);

const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;
scene.add(pointLight);

var hoverMesh = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 32), new THREE.MeshStandardMaterial({ color: 0x0000ff}));
var markerMesh = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 32), new THREE.MeshStandardMaterial({ color: 0xff0000}));

let snapRadius = 100; // How big radius we search for vertices near the mouse click
let snap = new GridSnap(scene, renderer, camera, sphere, snapRadius, hoverMesh, markerMesh);

container.appendChild(renderer.domElement);

// TODO: add these event listeners directly in GridSnap constructor
container.addEventListener('mousemove', onMouseMove, false );
container.addEventListener('mousedown', onMouseDown, false );
container.addEventListener('mouseup', onMouseUp, false );
window.addEventListener('resize', onWindowResize, false );

function onMouseDown( event ) {
	snap.mouseDown(event);
}

function onMouseUp( event ) {
	snap.mouseUp(event);
}

function onMouseMove( event ) {
	snap.mouseMove(event);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function render() {
	controls.update();
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}
 
requestAnimationFrame(render);