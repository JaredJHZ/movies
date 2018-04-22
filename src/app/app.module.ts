import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import  {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {JsonpModule} from '@angular/http';
import {MoviesService} from './services/movies.service';
//routes
import {AppRoutingModule} from './app.routing';
import { KeyPipe } from './pipes/key.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    KeyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsonpModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
