var persp_camera, ortog_camera //cameras
var scene, active_camera
var pedestal, icosahedron
var spotlights = []

var directional_light

function render() {
    renderer.render(scene, active_camera);
}

function createScene() {
    'use strict'

    scene = new THREE.Scene()
    scene.add(new THREE.AxesHelper(5))
    scene.background = new THREE.Color(0xe4edf5)

    pedestal = new Pedestal(0,4.5,0)
    scene.add(pedestal)
    icosahedron = new Icosahedron(0,10,0)
    scene.add(icosahedron)
    let focuspoint = new THREE.Vector3(0,8,0)

    spotlights[0] = new Spotlight(10,20,10, focuspoint)
    spotlights[1] = new Spotlight(10,20,-10, focuspoint)
    spotlights[2] = new Spotlight(-10,20,10, focuspoint)
    spotlights[3] = new Spotlight(-10,20,-10, focuspoint)
    

    let floor = new THREE.Mesh(new THREE.BoxGeometry(200, 1, 100), new THREE.MeshPhongMaterial({color: "blue"}))
    let wall = new THREE.Mesh(new THREE.BoxGeometry(1, 50, 100), new THREE.MeshPhongMaterial({color: "red"}))
    floor.position.set(0,-0.5,15)
    wall.position.set(-11, 0, 15)

    for (let i in spotlights) {
        scene.add(spotlights[i])
        scene.add(spotlights[i].helper)
    }

    directional_light = new THREE.DirectionalLight(0xffffff, 1)
    scene.add(directional_light)

    scene.add(floor)
    scene.add(wall)

}

function traverseElements(obj) {
    if (obj instanceof THREE.Mesh)
        obj.material.wireframe = wireframe
    if (obj !== undefined)
        for (i in obj.children)
            traverseElements(obj.children[i])
  }


function update() {
    for(i = 0 ; i < spotlights.length; i++){
        if(switches[i]){
            spotlights[i].spotlight.intensity = spotlights[i].spotlight.intensity == 0? 1 : 0
            spotlights[i].helper.visible = spotlights[i].helper.visible ? false : true
            switches[i] = false
        }
    }

    for (i in scene.children) {
    	if (['pedestal', 'spotlight'].indexOf(scene.children[i].name) >= 0) {
    		scene.children[i].update()
    	} 
    }

}

function createCameras() {
    persp_camera = new THREE.PerspectiveCamera(60, window.outerWidth / window.outerHeight, 1, 1000);
    persp_camera.position.set(40,30,55)
    persp_camera.lookAt(0,10,15)


    active_camera = persp_camera
}