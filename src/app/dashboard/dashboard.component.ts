import { Component } from '@angular/core';
import { CargarScrptsService } from '../cargar-scrpts.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

constructor (private CargarScripts:CargarScrptsService){
  //_CargarScripts.Carga(["dashboard"]);
  //_CargarScripts.Carga[("bootstrap.bundle.min.js")];
  this.CargarScripts.loadScript();
}
}
