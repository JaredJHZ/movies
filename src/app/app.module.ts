import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import  {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {JsonpModule} from '@angular/http';
import {MoviesService} from './services/movies.service';
//routes
import {AppRoutingModule} from './app.routing';
import { KeyPipe } from './pipes/key.pipe';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FitPipe } from './pipes/fit.pipe';
import { SearchComponent } from './components/search/search.component';
import { RatedComponent } from './components/home/child/rated/rated.component';
import { PageNumberPipe } from './pipes/page-number.pipe';
import { KidsComponent } from './components/home/kids/kids.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    KeyPipe,
    MovieInfoComponent,
    FooterComponent,
    FitPipe,
    SearchComponent,
    RatedComponent,
    PageNumberPipe,
    KidsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsonpModule
  ],
  providers: [MoviesService, {provide:LOCALE_ID, useValue:"es-MX"}, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
