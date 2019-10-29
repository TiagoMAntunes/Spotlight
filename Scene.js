var persp_camera, ortog_camera //cameras
var scene, active_camera
var pedestal

function render() {
    renderer.render(scene, active_camera);
}

function createScene() {
    'use strict'

    scene = new THREE.Scene()
    scene.add(new THREE.AxesHelper(5))
    scene.background = new THREE.Color(0xe4edf5)

    pedestal = new Pedestal(0,4.5,20)
    scene.add(pedestal)

    let focuspoint = new THREE.Vector3(0,0,0)

    let spotlight1 = new Spotlight(10,10,10, focuspoint)
    let spotlight2 = new Spotlight(10,10,-10, focuspoint)
    let spotlight3 = new Spotlight(-10,10,10, focuspoint)
    let spotlight4 = new Spotlight(-10,10,-10, focuspoint)
    
    scene.add(spotlight1)
    scene.add(spotlight2)
    scene.add(spotlight3)
    scene.add(spotlight4)

}

function traverseElements(obj) {
    if (obj instanceof THREE.Mesh)
        obj.material.wireframe = wireframe
    if (obj !== undefined)
        for (i in obj.children)
            traverseElements(obj.children[i])
  }


function update() {

}

function createCameras() {
    persp_camera = new THREE.PerspectiveCamera(60, window.outerWidth / window.outerHeight, 1, 1000);
    persp_camera.position.set(30,30,30)
    persp_camera.lookAt(0,0,0)


    active_camera = persp_camera
}