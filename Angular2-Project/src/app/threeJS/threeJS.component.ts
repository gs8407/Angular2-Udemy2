import {Component, ViewChild, ElementRef} from "@angular/core";
import { ThreeJs_AppendRemoveChild_Component } from './test/append-remove-child.component';
import { ThreeJs_DisplayMesh_Component } from './test/display-mesh.component';
import { ThreeJs_Test_Component } from './test/test.component';


@Component({
  moduleId: module.id,
  selector:'pb-threeJS',
  templateUrl:'threeJS.component.html',
  styleUrls: ['threeJS.component.css'],
  directives:[
        ThreeJs_AppendRemoveChild_Component,
        ThreeJs_DisplayMesh_Component, 
        ThreeJs_Test_Component
      ]
})


export class ThreeJsComponent {

}

