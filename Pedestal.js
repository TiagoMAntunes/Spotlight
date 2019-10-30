class Pedestal extends SceneObject {
    constructor(x,y,z) {
        super()
        const mat = new THREE.MeshLambertMaterial({color: 0xAAAAAA})
        let body = super.createSceneObjCylinderRotX(0,0,0, 1, 1, 6, 20, mat, 0)
        let top = super.createSceneObjBox(0, 3.5, 0, 4, 2, 4, mat)
        let bot = super.createSceneObjBox(0, -3.5, 0, 4, 1, 4, mat)

        this.add(top)
        this.add(bot)
        this.add(body)

        this.position.set(x,y,z)
    }
}