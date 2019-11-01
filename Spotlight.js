class Spotlight extends SceneObject {
    constructor(x,y,z, look) {
        super()

        this.basicMat = new THREE.MeshBasicMaterial({color: 0xff8712})
        this.lambMat = new THREE.MeshLambertMaterial({color: 0xff8712})
        this.phongMat = new THREE.MeshPhongMaterial({color: 0xff8712})

        this.basicMat.side = THREE.DoubleSide
        let cone = new THREE.ConeGeometry(1.5, 2, 8, 1, true)
        cone = new THREE.Mesh(cone, this.basicMat)
        cone.position.set(0,0,0)
        cone.name = 'cone'
        this.add(cone)
        
        let lightmat = new THREE.MeshPhongMaterial({color: 0xcacfcb, emissive: 0xcacfcb})
        let lightbulb = super.createSceneObjSphere(0, -0.5, 0, 0.6, 8, 6, 0, Math.PI * 2, lightmat)
        
        this.add(lightbulb)

        var spotlight = new THREE.SpotLight(0xffffff)
        spotlight.intensity = 0.8
        spotlight.angle = 0.6
        spotlight.penumbra = 0.5
    
        var helper = new THREE.SpotLightHelper(spotlight)
        
        this.spotlight = spotlight
        this.helper = helper

        this.add(spotlight)
        
        this.name = 'spotlight'
        this.position.set(x,y,z)
        


        //points to desired point
        if (look !== undefined) {
            this.lookAt(look)
            this.rotateX(- Math.PI / 2)
        }
    }

    update() {
        for (i in this.children) {
            if (this.children[i].name == 'cone') {
                if (!lighting_calc) 
                    this.children[i].material = this.basicMat
                
                else {
                    if (lambert) 
                        this.children[i].material = this.lambMat
                    
                    else 
                        this.children[i].material = this.phongMat
                }
            }
        }
    }

}