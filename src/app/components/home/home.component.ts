import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  imageURL:string;

  public popularMovies:any = {};
  public cartelera:any={};

  constructor(
    private _movieServices:MoviesService,
    private _router:Router
  ) {
    this.imageURL = "http://image.tmdb.org/t/p/w780/";
   }

  ngOnInit() {
    this._movieServices.getMoviesByPopularity()
          .subscribe(
            (moviesData)=>{
              this.popularMovies = moviesData;
            }
          )
      this._movieServices.getCartelera()
          .subscribe(
            (cartelera)=>{
              this.cartelera = cartelera.results;
            }
          )
  }
  getInfo(id:string){
    this._router.navigate(['movie',id]);
  }

}
