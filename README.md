# Setting up an Angular2 project

#### Install Angular CLI (comand-line interface) (-g globally)
```
npm install -g angular-cli
```

#### Create new angular2 project
```
ng new angular-cli --dir (folder) --prefix (tag)
```
#### Start up the webserver
This will provide live updates.

(Navigate into the project folder if you are not in it, using admin CMD)

```
ng serve
```

go to  `localhost:4200`



## Connecting THREE.js
In the terminal, navigate to the project directory.
```
npm install -g typings@0.8.1  (with the version provided in package.json)
```
```
typings install --ambient three --save
```

Add to `/src/main.ts`.
```
///<reference path="../typings/browser/ambient/three/index.d.ts"/>
```


## Initializing the project after cloning it

```
npm install
```
```
typings install
```
```
ng serve
```
