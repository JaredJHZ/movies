import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  imageURL:string;

  public popularMovies:any = {};

  constructor(
    private _movieServices:MoviesService
  ) {
    this.imageURL = "http://image.tmdb.org/t/p/w185/"
   }

  ngOnInit() {
    this._movieServices.getMoviesByPopularity()
          .subscribe(
            (moviesData)=>{
              this.popularMovies = moviesData;
              console.log(this.popularMovies);
            }
          )
  }

}
