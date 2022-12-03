import * as THREE from "./three.module.js"
import {GLTFLoader} from "./GLTFLoader.js";
import {OrbitControls} from "./OrbitControls.js"


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    50,
    800/600,
    0.01,
    5000
);
var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(800,600)

document.getElementById("gia").appendChild(renderer.domElement)



var obj;
var loader = new GLTFLoader();
loader.load("scene.gltf",function(gltf){
    obj = gltf.scene;
    scene.add(gltf.scene);
});
renderer.setClearColor( 0x000000, 0 );

// var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 3);
// var light2 = new THREE.PointLight(0xffffff, 3);
var light3 = new THREE.AmbientLight(0xffffff, 1);
var light4 = new THREE.AmbientLight(0xffffff, 0.4);
light4.position.set(4,10,4)
// light.position.set( 100, 200, 100 );
// light2.position.set( 100, 100, 0 );
// scene.add(light)
// scene.add(light2)
const lighthelper = new THREE.DirectionalLight(light3, 1)
scene.add(light3, lighthelper,light4)


const controls = new OrbitControls( camera, renderer.domElement );

controls.panSpeed = 1;
controls.rotateSpeed = 0.3;
controls.enablePan = true;
controls.enableDamping = true;
//    controls.enableZoom = false



camera.position.x = 100;
camera.position.y = 100;
camera.position.z = 10;

camera.rotation.set(30, 80, 0)



controls.saveState();
console.log(controls.saveState())

window.addEventListener('keydown',function(e){
    if(e.code === "KeyS")
    controls.saveState()
    console.log(controls.object.position)
    if(e.code === 'KeyR')
    controls.reset();
})

function animate(){

    controls.update();
    requestAnimationFrame(animate);
    obj.rotation.y += 0.001;
    renderer.render(scene,camera);
}

renderer.render(scene,camera)

animate()