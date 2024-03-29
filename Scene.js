var persp_camera, ortog_camera //cameras
var scene, active_camera
var pedestal, icosahedron, painting
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

    icosahedron = new Icosahedron(0,12,0)
    scene.add(icosahedron)

    painting = new Painting(-10, 15, 30)
    scene.add(painting)

    let ptg_center = new THREE.Object3D()
    ptg_center.position.set(-10, 15, 30)
    scene.add(ptg_center)

    spotlights[0] = new Spotlight(20,25,15, icosahedron)
    spotlights[1] = new Spotlight(20,25,-15, icosahedron)
    spotlights[2] = new Spotlight(-5,25,0, icosahedron)
    spotlights[3] = new Spotlight(0,25,30, ptg_center)

    let floor = new Floor(0, 0, 0)
    let wall = new Wall(0, 0, 0)

    for (let i in spotlights) {
        scene.add(spotlights[i])
        scene.add(spotlights[i].target)
    }

    directional_light = new THREE.DirectionalLight(0xffffff, 0.5)
    directional_light.position.set(30,30,0)
    directional_light.target = scene
    directional_light
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
            switches[i] = false
        }
    }

    for (i in scene.children) {
    	if (['icosahedron', 'painting', 'pedestal', 'spotlight', 'floor', 'wall'].indexOf(scene.children[i].name) >= 0) {
    		scene.children[i].update()
    	} 
    }

}

function createCameras() {
    persp_camera = new THREE.PerspectiveCamera(60, window.outerWidth / window.outerHeight, 1, 1000);
    persp_camera.position.set(35,30,20)
    persp_camera.lookAt(0,10,0)

    ortog_camera = new THREE.OrthographicCamera(window.innerWidth/-2, window.innerWidth/2, window.innerHeight/2, window.innerHeight/-2, 1, 1000)
    ortog_camera.position.set(10,15,30)
    ortog_camera.lookAt(0,15,30)
    ortog_camera.zoom = 40
    ortog_camera.updateProjectionMatrix()


    active_camera = persp_camera
}