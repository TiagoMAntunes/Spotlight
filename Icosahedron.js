class Icosahedron extends THREE.Object3D {
    constructor(x, y, z) {
        super()

        let mat = new THREE.MeshPhongMaterial({ color: "green" })

        let geometry = new THREE.Geometry()


        const phi = (1 + Math.sqrt(5) / 2)
        //generate vertices
        geometry.vertices.push(new THREE.Vector3(0, 1, phi))
        geometry.vertices.push(new THREE.Vector3(0, 1, -phi))
        geometry.vertices.push(new THREE.Vector3(0, -1, phi))
        geometry.vertices.push(new THREE.Vector3(0, -1, -phi))
        geometry.vertices.push(new THREE.Vector3(1, phi, 0))
        geometry.vertices.push(new THREE.Vector3(1, -phi, 0))
        geometry.vertices.push(new THREE.Vector3(-1, phi, 0))
        geometry.vertices.push(new THREE.Vector3(-1, -phi, 0))
        geometry.vertices.push(new THREE.Vector3(phi, 0, 1))
        geometry.vertices.push(new THREE.Vector3(-phi, 0, 1))
        geometry.vertices.push(new THREE.Vector3(phi, 0, -1))
        geometry.vertices.push(new THREE.Vector3(-phi, 0, -1))



        this.position.set(x, y, z)
    }
}