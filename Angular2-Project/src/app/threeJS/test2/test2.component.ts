
import {Component, ViewChild, ElementRef} from "@angular/core";


@Component({
  moduleId: module.id,
  selector:'pb-threeJS-test2',
  template: 
    `    
        <button (click)="onAppend3JS()">Append</button>
        <button (click)="onRemove3JS()">Remove</button>
        <div #myTestContent style="border: 1px solid black;width:100px;height:100px"></div> 
    `  
})


export class ThreeJs_Test2_Component {   
   
    @ViewChild('myTestContent') my_content: ElementRef; 

 
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.Camera;
    boxGeometry: THREE.BoxGeometry;
    material: THREE.MeshBasicMaterial;
    cube: THREE.Mesh;

    axis: THREE.AxisHelper;



    constructor(){
    
        this.renderer = new THREE.WebGLRenderer({ alpha: true });   
        this.renderer.setSize( window.innerWidth/2, window.innerHeight/2 );                             
        this.renderer.setClearColor(0xF070F7,1);                   
        this.renderer.clear();
       
    
        this.scene = new THREE.Scene();                             

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth /window.innerHeight, 0.1, 1000);
        this.camera.position.x = 20;
        this.camera.position.y = 20;
        this.camera.position.z = 20;
        this.camera.lookAt(this.scene.position);


        this.boxGeometry = new THREE.BoxGeometry( 5, 5, 5 );
        this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( this.boxGeometry, this.material );
        this.cube.position.x = 10;
        this.cube.position.y = 0;
        this.cube.position.z = 0;
        this.scene.add(this.cube);
        
        this.axis = new THREE.AxisHelper(20);
        this.scene.add(this.axis);



    }

    render() {        
        requestAnimationFrame(() => this.render());
        this.cube.rotation.x += 0.01;
	    this.cube.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    }
    

    onAppend3JS(){
        console.log("Appended 3JS to div.");  
        this.render();      
        this.my_content.nativeElement.appendChild(this.renderer.domElement);
    }

    onRemove3JS(){
        console.log("Removed 3JS from div.");
        this.my_content.nativeElement.removeChild(this.renderer.domElement);
    }
}

