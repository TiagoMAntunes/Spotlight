class Wall extends SceneObject {
    constructor(x,y,z) {
        super()
        this.lambMat = new THREE.MeshLambertMaterial({color: "red"})
        this.phongMat = new THREE.MeshPhongMaterial({color: "red"})
        this.basicMat = new THREE.MeshBasicMaterial({color: "red"})
        let wall = super.createSceneObjBox(-11, 0, 15, 1, 50, 100, this.lambMat)

        this.add(wall)

        this.position.set(x,y,z)
        this.name = 'wall'
    }

    update() {
    	if (!lighting_calc) 
    		this.children[0].material = this.basicMat
    	
    	else {
    		if (lambert) 
    			this.children[0].material = this.lambMat
    		
    		else 
    			this.children[0].material = this.phongMat
    	}
    
    }
}