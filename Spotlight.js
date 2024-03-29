class Spotlight extends SceneObject {
    constructor(x,y,z, tgt) {
        super()

        this.createMaterials()
        
        let cone = new THREE.ConeGeometry(1.5, 2, 20, 1, true)
        cone = new THREE.Mesh(cone, this.coneBasicMat)
        cone.position.set(0,0,0)
        cone.name = 'cone'
        this.add(cone)
        
        let lightbulb = super.createSceneObjSphere(0, -0.5, 0, 0.6, 8, 6, 0, Math.PI * 2, this.lightBasicMat)
        lightbulb.name = 'lightbulb'
        this.add(lightbulb)

        var spotlight = new THREE.SpotLight(0xffffff)
        spotlight.intensity = 0.5
        spotlight.angle = 0.6
        spotlight.penumbra = 0.5
        spotlight.target = tgt
        
        this.spotlight = spotlight
        this.target = spotlight.target

        lightbulb.add(spotlight)
        
        this.name = 'spotlight'
        this.position.set(x,y,z)

        this.lookAt(tgt.position)
        this.rotateX(- Math.PI / 2)
    
    }

    update() {
        for (i in this.children) {
            let obj = this.children[i]
            if (!lighting_calc) 
                this.lightingCalcOFF(obj)
            
            else if (lambert) 
                this.activateLambert(obj)
            
            else if (!lambert)
                this.activatePhong(obj)
        }
    }

    createMaterials() {
        // cone's materials
        this.coneBasicMat = new THREE.MeshBasicMaterial({color: 0xcecece})
        this.coneLambMat = new THREE.MeshLambertMaterial({color: 0xcecece, reflectivity: 1})
        this.conePhongMat = new THREE.MeshPhongMaterial({color: 0xcecece})

        this.coneBasicMat.side = THREE.DoubleSide
        this.coneLambMat.side = THREE.DoubleSide
        this.conePhongMat.side = THREE.DoubleSide

        // lightbulb's materials
        this.lightBasicMat = new THREE.MeshBasicMaterial({color: 0xcacfcb})
        this.lightLambMat = new THREE.MeshLambertMaterial({color: 0xcacfcb})
        this.lightPhongMat = new THREE.MeshPhongMaterial({color: 0xcacfcb})
    }

    lightingCalcOFF(part) {
        if (part.name == 'cone')
            part.material = this.coneBasicMat

        else
            part.material = this.lightBasicMat
    }

    activateLambert(part) {
        if (part.name == 'cone')
            part.material = this.coneLambMat

        else
            part.material = this.lightLambMat
    }

    activatePhong(part) {
        if (part.name == 'cone')
            part.material = this.conePhongMat

        else
            part.material = this.lightPhongMat
    }
}