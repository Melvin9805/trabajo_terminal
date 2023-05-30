import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoComponent } from './video/video.component';
import { ContactComponent } from './contact/contact.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { MainComponentComponent } from './main.component/main.component.component';

//Servicios
import { CargarScrptsService } from './cargar-scrpts.service';

@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    VideoComponent,
    ContactComponent,
    CarrouselComponent,
    CuerpoComponent,
    MainComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FontAwesomeModule,
    
  ],
  providers: [CargarScrptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
