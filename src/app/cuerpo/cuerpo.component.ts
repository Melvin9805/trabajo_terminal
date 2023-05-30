import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})
export class CuerpoComponent {
  constructor (public router: Router){

  }
}
