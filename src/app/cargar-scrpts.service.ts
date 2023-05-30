import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScrptsService {

  constructor() { }

  Carga (archivos:string[]){

    for (let archivo of archivos ){

      let script = document.createElement("script");
      script.src = "assets/dist/js/" + archivo + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  public loadScript (){

    console.log('cargando...');
    let node = document.createElement("script");
    node.src = 'assets/dist/js/dashboard.js';
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
    
  }



}
