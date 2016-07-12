import { Component } from '@angular/core';
import { ThreeJsComponent } from './threeJS/threeJS.component';


@Component({
  moduleId: module.id,
  selector: 'pb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ThreeJsComponent]
})
export class AppComponent {
  title = 'ThreeJS testing';
}
