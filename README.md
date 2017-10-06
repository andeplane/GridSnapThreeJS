# GridSnap Three.js

Try it out [here](https://andeplane.github.io/GridSnapThreeJS/).

A small class that lets you add/remove markers snapped to vertices in a grid. 


You need to include some files in your index.html file:

```html
<script src="js/Octree.js"></script>
<script src="js/object_hash.js"></script>
<script src="js/GridSnap.js"></script>
```
You can then add the GridSnap object like this (assuming scene, renderer etc exists as variables in the scope):
```javascript
var hoverMesh = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 32), new THREE.MeshStandardMaterial({ color: 0x0000ff}));
var markerMesh = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 32), new THREE.MeshStandardMaterial({ color: 0xff0000}));

let snapRadius = 100; // How big radius we search for vertices near the mouse click
let snap = new GridSnap(scene, renderer, camera, sphere, snapRadius, hoverMesh, markerMesh);
container.addEventListener('mousemove', onMouseMove, false );
container.addEventListener('mousedown', onMouseDown, false );
container.addEventListener('mouseup', onMouseUp, false );

function onMouseDown( event ) {
	snap.mouseDown(event);
}

function onMouseUp( event ) {
	snap.mouseUp(event);
}

function onMouseMove( event ) {
	snap.mouseMove(event);
}

```
You can then try to hover anywhere and it will show a blue mesh on the nearest vertex. If you mouse click, it will create a permanent red marker sphere at that vertex.

Try it out [here](https://andeplane.github.io/GridSnapThreeJS/).