import {Component, ViewChild, ElementRef} from "@angular/core";


@Component({
  moduleId: module.id,
  selector:'pb-threeJS',
  templateUrl: 'threeJS.component.html',
  styleUrls: ['threeJS.component.css']
})


export class ThreeJsComponent {
    @ViewChild('myContent') my_content: ElementRef;

    
    renderer: THREE.WebGLRenderer;
    constructor(){
    
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(100,100);
        this.renderer.setClearColor(0xFF0000,1);
        this.renderer.clear();  // TO ASK: what is this? 
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

