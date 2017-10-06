let container = document.getElementById( 'container' );

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
camera.position.set(1, 1, 5);

let renderer = new THREE.WebGLRenderer({alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;

var sphere = new THREE.Mesh(
	new THREE.SphereGeometry(10.0, 32, 32),
	new THREE.MeshPhongMaterial({ color: 0x000000, wireframe: true })
)
sphere.position.set(0, 0, -10);
scene.add(sphere);

const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;
scene.add(pointLight);

var hoverMesh = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 32), new THREE.MeshStandardMaterial({ color: 0x0000ff}));
var markerMesh = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 32), new THREE.MeshStandardMaterial({ color: 0xff0000}));

let snap = new SnapToGrid(scene, renderer, camera, sphere, 100, hoverMesh, markerMesh);

container.appendChild(renderer.domElement);
container.addEventListener('mousemove', onMouseMove, false );
container.addEventListener('mousedown', onMouseDown, false );
container.addEventListener('mouseup', onMouseUp, false );

function onMousePressed( event ) {
	snap.mousePressed(event);
}

function onMouseDown( event ) {
	snap.mouseDown(event);
}

function onMouseUp( event ) {
	snap.mouseUp(event);
}

function onMouseMove( event ) {
	snap.mouseMoved(event);
}

function render() {
	controls.update();
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}
 
requestAnimationFrame(render);