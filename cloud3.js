//maybe create more than one kinds of cloud?

import * as THREE from "three";

export class cloud3{

    constructor(x, y, z, scene,look,id){

	// for (let i = 0; i < 1; i++) {

    let cloudGeo = new THREE.PlaneGeometry(Math.random() * 500 + 800, 
										   Math.random() * 200 + 500);
	let cloudTexture = new THREE.TextureLoader().load("/darkCloud.png");
	// cloudTexture.magFilter = THREE.LinearFilter;
	// cloudTexture.minFilter = THREE.LinearFilter;
	// this.cloudMeshes = [];
	let cloudMaterial = new THREE.MeshBasicMaterial({
		color: 0x0084ff,
		map: cloudTexture,
		transparent: true,
		opacity: Math.random() * 0.5
		});


		// let mesh = new THREE.Mesh(cloudGeo, cloudMaterial);

		this.cloudMesh = new THREE.Mesh(cloudGeo, cloudMaterial);
		this.cloudMesh.position.set(
            // x,y,z
            (Math.random()-0.5) * 200 + x,
            (Math.random()-0.5) * 100 + y,
            (Math.random()-0.5) * 200 + z
			);
        // this.cloudMesh.rotateZ( Math.random() * 4);
		this.cloudMesh.up.set(0, 1, 0);
		scene.add(this.cloudMesh);

	

		
        this.frameCount = 0;
		
		// (for loop)
		// }
		

		

    }

    update() {

            this.frameCount++;
            // this.cloudMesh.rotateZ(100);
			this.cloudMesh.lookAt(look);	
			this.cloudMesh.position+=i;	
			
            }


// checkDistance(camera) {
// 	let d = camera.position.distanceTo(this.center);
// 	console.log(d);
// 	if (d < 50) {
// 		this.popup = true;
// 		console.log('catch');
// 	} else {
// 		this.popup = false;
	// }
// 	}

}