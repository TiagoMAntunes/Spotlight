class Pedestal extends SceneObject {
    constructor(x,y,z) {
        super()
        this.lambMat = new THREE.MeshLambertMaterial({color: 0xAAAAAA})
        this.phongMat = new THREE.MeshPhongMaterial({color: 0xAAAAAA})
        this.basicMat = new THREE.MeshBasicMaterial({color: 0xAAAAAA})
        let body = super.createSceneObjCylinderRotX(0,0,0, 1, 1, 6, 20, this.lambMat, 0)
        let top = super.createSceneObjBox(0, 3.5, 0, 4, 2, 4, this.lambMat)
        let bot = super.createSceneObjBox(0, -3.5, 0, 4, 1, 4, this.lambMat)

        this.add(top)
        this.add(bot)
        this.add(body)

        this.position.set(x,y,z)
        this.name = 'pedestal'
    }

    update() {
    	for (i in this.children) {
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