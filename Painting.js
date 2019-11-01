class Painting extends SceneObject{
    constructor(x,y,z) {
        super()
        let side_width = 0.25
        let sq_width = 1

        this.squareMat = new THREE.MeshBasicMaterial({color: 0x000000})
        this.sideMat = new THREE.MeshBasicMaterial({color: 0xaaaaaa})
        this.circleMat = new THREE.MeshBasicMaterial({color: 0xffffff})

        for(let height = 0; height < 7; height++){
            for(let width = 0; width < 10; width++){
                let square = super.createSceneObjBox(0, height * (sq_width + side_width), -width*(sq_width + side_width), 0, sq_width, sq_width, this.squareMat)
                let side = super.createSceneObjBox(0, height * (sq_width + side_width) + side_width/2, -width*(sq_width + side_width) - (sq_width + side_width)/2, 0, sq_width + side_width, side_width, this.sideMat)
                let top = super.createSceneObjBox(0, height * (sq_width + side_width) + (side_width + sq_width)/2, -width*(side_width + sq_width), 0, side_width, sq_width, this.sideMat)
                let circle = super.createSceneObjCylinderRotXYZ(0, height * (sq_width + side_width) + (side_width + sq_width)/2, -width*(sq_width + side_width) - (side_width + sq_width)/2, Math.sqrt(2*side_width*side_width)/2, Math.sqrt(2 * side_width * side_width)/2, 0, 20, this.circleMat, 0, 0, 90 * Math.PI / 180)

                this.add(square)
                this.add(side)
                this.add(top)
                this.add(circle)
            }
        }

        this.position.set(x,y - 7/2*(sq_width + side_width),z + 10/2*(sq_width + side_width))
        this.name = 'painting'
    }
}