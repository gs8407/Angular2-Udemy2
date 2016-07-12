import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

///<reference path="../typings/browser/ambient/three/index.d.ts"/>

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);

