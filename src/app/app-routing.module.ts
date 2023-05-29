import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {ContactComponent} from './contact/contact.component';
import {VideoComponent} from './video/video.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { MainComponentComponent } from './main.component/main.component.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponentComponent

  /*
  children:[
    {
      path:'video',
      component: VideoComponent
    },
    {
      path:'dashboard',
      component: DashboardComponent
    },
    {
      path:'contact',
      component: ContactComponent
    }
          ]*/
  },
  {
    path:'video',
    component: VideoComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'contact',
    component: ContactComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
