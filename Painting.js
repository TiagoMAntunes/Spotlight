class Painting extends SceneObject{
    constructor(x,y,z) {
        super()

        this.createMaterials()

        // build painting
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

        // build frame
        let top = super.createSceneObjBox(0, 7*(sq_width + side_width) - 0.25, -5*(sq_width + side_width) + 0.5, 0, 0.5, 10*(sq_width + side_width), this.frameBasicMat)
        let bottom = super.createSceneObjBox(0, -0.75, -5*(sq_width + side_width) + 0.5, 0, 0.5, 10*(sq_width + side_width), this.frameBasicMat)
        let left = super.createSceneObjBox(0, 3.5*(sq_width + side_width) - 0.5, 0.75, 0, 7*(sq_width + side_width) + 1, 0.5, this.frameBasicMat)
        let right = super.createSceneObjBox(0, 3.5*(sq_width + side_width) - 0.5, -10*(sq_width + side_width) + 0.25, 0, 7*(sq_width + side_width) + 1, 0.5, this.frameBasicMat)
        
        top.name = 'frame'
        bottom.name = 'frame'
        left.name = 'frame'
        right.name = 'frame'
        this.add(top)
        this.add(bottom)
        this.add(left)
        this.add(right)

        this.position.set(x,y - 7/2*(sq_width + side_width),z + 10/2*(sq_width + side_width))
        this.name = 'painting'
        console.log(this)
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

        // frame's materials
        this.frameBasicMat = new THREE.MeshBasicMaterial({color: 0x3a2612})
        this.frameLambMat = new THREE.MeshLambertMaterial({color: 0x3a2612})
        this.framePhongMat = new THREE.MeshPhongMaterial({color: 0x3a2612})
    }

    lightingCalcOFF(part) {
        if (part.name == 'square')                
            part.material = this.squareBasicMat

        else if (part.name == 'side')
            part.material = this.sideBasicMat

        else if (part.name == 'circle')
            part.material = this.circleBasicMat

        else if (part.name = 'frame')
            part.material = this.frameBasicMat 
    }

    activateLambert(part) {
        console.log(part.name)
        if (part.name == 'square')                
            part.material = this.squareLambMat

        else if (part.name == 'side')
            part.material = this.sideLambMat

        else if (part.name = 'circle')
            part.material = this.circleLambMat

        else if (part.name = 'frame') {
            console.log("frame")
            part.material = this.frameLambMat
        }
    }

    activatePhong(part) {
        if (part.name == 'square')                
            part.material = this.squarePhongMat

        else if (part.name == 'side')
            part.material = this.sidePhongMat

        else if (part.name = 'circle')
            part.material = this.circlePhongMat

        else if (part.name = 'frame') {
            console.log("frame")
            part.material = this.framePhongMat
        }
    }
}