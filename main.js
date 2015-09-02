var WIDTH = 400;
var HEIGHT = 300;

var VIEW_ANGLE = 45;
var ASPECT = WIDTH / HEIGHT;
var NEAR = 1.0;
var FAR = 10000.0;

var $container = $('#main');

var renderer = new THREE.WebGLRenderer();
var camera = new THREE.PerspectiveCamera(
  VIEW_ANGLE,
  ASPECT,
  NEAR,
  FAR
);

var radius = 50;
var segments = 16;
var rings = 16;

var sphereMaterial = new THREE.MeshLambertMaterial({
  color: 0xCC0000
});

var sphere = new THREE.Mesh(
  new THREE.SphereGeometry(
    radius,
    segments,
    rings
  ),
  sphereMaterial
);

var pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

var scene = new THREE.Scene();
scene.add(camera);
scene.add(sphere);
scene.add(pointLight);
camera.position.z = 300;
renderer.setSize(WIDTH, HEIGHT);

$container.append(renderer.domElement);

renderer.render(scene, camera);
