class Spotlight extends SceneObject {
    constructor(x,y,z, look) {
        super()

        let mat = new THREE.MeshBasicMaterial({color: 0xff8712})
        mat.side = THREE.DoubleSide
        let cone = new THREE.ConeGeometry(1, 2, 8, 1, true)
        cone = new THREE.Mesh(cone, mat)
        cone.position.set(0,0,0)
        this.add(cone)
        
        let lightmat = new THREE.MeshBasicMaterial({color: 0xcacfcb})
        let lightbulb = super.createSceneObjSphere(0, -0.5, 0, 0.5, 8, 6, 0, Math.PI * 2, lightmat)
        
        this.add(lightbulb)

        var spotlight = new THREE.SpotLight(0xffffff)
    
        var helper = new THREE.SpotLightHelper(spotlight)
        
        this.spotlight = spotlight
        this.helper = helper

        this.add(spotlight)
        
        this.position.set(x,y,z)
        


        //points to desired point
        if (look !== undefined) {
            this.lookAt(look)
            this.rotateX(- Math.PI / 2)
        }
    }
}