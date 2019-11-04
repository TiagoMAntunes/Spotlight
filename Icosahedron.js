class Icosahedron extends THREE.Object3D {
    constructor(x, y, z) {
        super()

        this.phongMat = new THREE.MeshPhongMaterial({ color: 0xe0a5fb })
        this.basicMat = new THREE.MeshBasicMaterial({ color: 0xe0a5fb })
        this.lambMat = new THREE.MeshLambertMaterial({ color: 0xe0a5fb })

        let geometry = new THREE.Geometry()


        const t = (1 + Math.sqrt(5) / 2)
        //generate vertices
        geometry.vertices.push(new THREE.Vector3(-1, t, 0))
        geometry.vertices.push(new THREE.Vector3(1, t, 0))
        geometry.vertices.push(new THREE.Vector3(-1, -t, 0))
        geometry.vertices.push(new THREE.Vector3(1, -t, 0))

        geometry.vertices.push(new THREE.Vector3(0, -1, t))
        geometry.vertices.push(new THREE.Vector3(0, 1, t))
        geometry.vertices.push(new THREE.Vector3(0, -1, -t))
        geometry.vertices.push(new THREE.Vector3(0, 1, -t))

        geometry.vertices.push(new THREE.Vector3(t, 0, -1))
        geometry.vertices.push(new THREE.Vector3(t, 0, 1))
        geometry.vertices.push(new THREE.Vector3(-t, 0, -1))
        geometry.vertices.push(new THREE.Vector3(-t, 0, 1))

        geometry.faces.push(new THREE.Face3(0, 11, 5))
        geometry.faces.push(new THREE.Face3(0, 5, 1))
        geometry.faces.push(new THREE.Face3(0, 1, 7))
        geometry.faces.push(new THREE.Face3(0, 7, 10))
        geometry.faces.push(new THREE.Face3(0, 10, 11))

        geometry.faces.push(new THREE.Face3(1, 5, 9))
        geometry.faces.push(new THREE.Face3(5 , 11, 4))
        geometry.faces.push(new THREE.Face3(11, 10, 2))
        geometry.faces.push(new THREE.Face3(10, 7, 6))
        geometry.faces.push(new THREE.Face3(7, 1, 8))

        geometry.faces.push(new THREE.Face3(3, 9, 4))
        geometry.faces.push(new THREE.Face3(3, 4, 2))
        geometry.faces.push(new THREE.Face3(3, 2, 6))
        geometry.faces.push(new THREE.Face3(3, 6, 8))
        geometry.faces.push(new THREE.Face3(3, 8, 9))

        geometry.faces.push(new THREE.Face3(4, 9, 5))
        geometry.faces.push(new THREE.Face3(2, 4, 11))
        geometry.faces.push(new THREE.Face3(6, 2, 10))
        geometry.faces.push(new THREE.Face3(8, 6, 7))
        geometry.faces.push(new THREE.Face3(9, 8, 1))

        geometry.computeFaceNormals();
        //geometry.computeVertexNormals();

        this.add( new THREE.Mesh(geometry, this.phongMat));

        this.name = 'icosahedron'
        this.position.set(x, y, z)
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