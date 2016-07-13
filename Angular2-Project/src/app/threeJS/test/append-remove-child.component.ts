// SOURCE
// http://www.gamefromscratch.com/post/2014/07/15/Playing-around-with-ThreeJS-Part-One.aspx


import {Component, ViewChild, ElementRef} from "@angular/core";


@Component({
  moduleId: module.id,
  selector:'pb-threeJS-appendRemoveChild',
  template: `
    <button (click)="onAppend3JS()">Append</button>
    <button (click)="onRemove3JS()">Remove</button>
    <div #myContent style="border: 1px solid black;width:100px;height:100px"></div>  
  `  
})


export class ThreeJs_AppendRemoveChild_Component {
    @ViewChild('myContent') my_content: ElementRef;
    
    renderer: THREE.WebGLRenderer;
    constructor(){
    
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(100,100);
        this.renderer.setClearColor(0xF070F7,1);
        this.renderer.clear();  // TO ASK: what is this? 
    }

    onAppend3JS(){
        this.my_content.nativeElement.appendChild(this.renderer.domElement);
    }

    onRemove3JS(){
        this.my_content.nativeElement.removeChild(this.renderer.domElement);
    }
}

