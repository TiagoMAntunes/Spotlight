class Floor extends SceneObject {
    constructor(x,y,z) {
        super()
        this.lambMat = new THREE.MeshLambertMaterial({color: "blue"})
        this.phongMat = new THREE.MeshPhongMaterial({color: "blue"})
        this.basicMat = new THREE.MeshBasicMaterial({color: "blue"})
        let floor = super.createSceneObjBox(0,-0.5,15, 200, 1, 100, this.phongMat)

        this.add(floor)

        this.position.set(x,y,z)
        this.name = 'floor'
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