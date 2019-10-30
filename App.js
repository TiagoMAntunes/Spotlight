var renderer, wireframe = true
var switches = [false, false, false, false]

function onKeyDown(e) {
  switch(e.keyCode) {
      case 49: //1
      switches[0] =true
      
      break
      case 50: //2
      switches[1] = true
      
      break
      case 51: //3
      switches[2] = true
      
      break
      case 52: //4
      switches[3] = true
      
      break
      case 81 || 113:  //Q ou q
      
      break
      case 87 || 119:  //W ou w
      
      break
      case 69 || 101:  //E ou e
      
      break
      
  }
}

function onResize() {
    renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
    update()
    render()
    requestAnimationFrame(animate)
}

//setup of scene
function init() {
    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement);

    createScene()
    createCameras()
 
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("resize", onResize)
    animate()
 
}