class Wall extends SceneObject {
    constructor(x,y,z) {
        super()
        this.lambMat = new THREE.MeshLambertMaterial({color: 0xf4dfb6})
        this.phongMat = new THREE.MeshPhongMaterial({color: 0xf4dfb6})
        this.basicMat = new THREE.MeshBasicMaterial({color: 0xf4dfb6})
        let wall = super.createSceneObjBox(-11, 0, 15, 1, 55, 100, this.lambMat)

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