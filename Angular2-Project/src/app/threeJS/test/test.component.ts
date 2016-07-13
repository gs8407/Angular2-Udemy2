// SOURCE
// http://www.gamefromscratch.com/post/2014/07/15/Playing-around-with-ThreeJS-Part-One.aspx


import {Component, ViewChild, ElementRef} from "@angular/core";


@Component({
  moduleId: module.id,
  selector:'pb-threeJS-test',
  template: 
    `    
        <button (click)="onAppend3JS()">Append</button>
        <button (click)="onRemove3JS()">Remove</button>
        <div #myTestContent style="border: 1px solid black;width:100px;height:100px"></div> 
    `  
})


export class ThreeJs_Test_Component {
    @ViewChild('myTestContent') my_content: ElementRef; 
    
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.Camera;
    sphereGeometry: THREE.SphereGeometry;
    sphereMaterial: THREE.MeshBasicMaterial;
    sphere: THREE.Mesh;

    constructor(){
    
        this.renderer = new THREE.WebGLRenderer({ alpha: true });   
        this.renderer.setSize(100,100);                             
        this.renderer.setClearColor(0xF070F7,1);                   
        this.renderer.clear();
       
        this.scene = new THREE.Scene();                             

        this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        this.camera.position.set(0,0,-20); 
        this.camera.lookAt(new THREE.Vector3(0,0,0));

        this.sphereGeometry = new THREE.SphereGeometry(6);
        this.sphereMaterial = new THREE.MeshBasicMaterial({color: 0x7777ff, wireframe: true});
        this.sphere = new THREE.Mesh(this.sphereGeometry, this.sphereMaterial);
        this.sphere.position.set(0,0,0); 

        this.scene.add(this.sphere);

        this.renderer.render(this.scene, this.camera);
    }


    onAppend3JS(){
        console.log("Appended 3JS to div.");        
        this.my_content.nativeElement.appendChild(this.renderer.domElement);
    }

    onRemove3JS(){
        console.log("Removed 3JS from div.");
        this.my_content.nativeElement.removeChild(this.renderer.domElement);
    }
}

