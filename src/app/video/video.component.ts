import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  constructor (public router: Router){

  }

}
