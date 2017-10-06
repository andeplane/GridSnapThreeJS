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

Try it out [here](https://andeplane.github.io/GridSnapThreeJS/).