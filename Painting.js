class Painting extends SceneObject{
    constructor(x,y,z) {
        super()

        this.createMaterials()

        let side_width = 0.25
        let sq_width = 1
        for(let height = 0; height < 7; height++){
            for(let width = 0; width < 10; width++){
                let square = super.createSceneObjBox(0, height * (sq_width + side_width), -width*(sq_width + side_width), 0, sq_width, sq_width, this.squareBasicMat)
                let side = super.createSceneObjBox(0, height * (sq_width + side_width) + side_width/2, -width*(sq_width + side_width) - (sq_width + side_width)/2, 0, sq_width + side_width, side_width, this.sideBasicMat)
                let top = super.createSceneObjBox(0, height * (sq_width + side_width) + (side_width + sq_width)/2, -width*(side_width + sq_width), 0, side_width, sq_width, this.sideBasicMat)
                let circle = super.createSceneObjCylinderRotXYZ(0, height * (sq_width + side_width) + (side_width + sq_width)/2, -width*(sq_width + side_width) - (side_width + sq_width)/2, Math.sqrt(2*side_width*side_width)/2, Math.sqrt(2 * side_width * side_width)/2, 0, 20, this.circleBasicMat, 0, 0, 90 * Math.PI / 180)
                square.name = 'square'
                side.name = 'side'
                top.name = 'side'
                circle.name = 'circle'

                this.add(square)
                this.add(side)
                this.add(top)
                this.add(circle)
            }
        }

        this.position.set(x,y - 7/2*(sq_width + side_width),z + 10/2*(sq_width + side_width))
        this.name = 'painting'
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
        // squares' materials
        this.squareBasicMat = new THREE.MeshBasicMaterial({color: 0x000000})
        this.squareLambMat = new THREE.MeshLambertMaterial({color: 0x000000})
        this.squarePhongMat = new THREE.MeshPhongMaterial({color: 0x000000})

        // sides' materials
        this.sideBasicMat = new THREE.MeshBasicMaterial({color: 0xaaaaaa})
        this.sideLambMat = new THREE.MeshLambertMaterial({color: 0xaaaaaa})
        this.sidePhongMat = new THREE.MeshPhongMaterial({color: 0xaaaaaa})

        // circles' materials
        this.circleBasicMat = new THREE.MeshBasicMaterial({color: 0xffffff})
        this.circleLambMat = new THREE.MeshLambertMaterial({color: 0xffffff})
        this.circlePhongMat = new THREE.MeshPhongMaterial({color: 0xffffff})
    }

    lightingCalcOFF(part) {
        if (part.name == 'square')                
            part.material = this.squareBasicMat

        else if (part.name == 'side')
            part.material = this.sideBasicMat

        else
            part.material = this.circleBasicMat
    }

    activateLambert(part) {
        if (part.name == 'square')                
            part.material = this.squareLambMat

        else if (part.name == 'side')
            part.material = this.sideLambMat

        else
            part.material = this.circleLambMat
    }

    activatePhong(part) {
        if (part.name == 'square')                
            part.material = this.squarePhongMat

        else if (part.name == 'side')
            part.material = this.sidePhongMat

        else
            part.material = this.circlePhongMat
    }
}