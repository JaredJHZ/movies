import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//Services
import {MoviesService} from '../../../../services/movies.service';
@Component({
  selector: 'app-rated',
  templateUrl: './rated.component.html',
  styleUrls: ['./rated.component.css']
})
export class RatedComponent implements OnInit {
  
  movies:any[]=[];
  imageURL:string;

  constructor(
    private _moviesService:MoviesService,
    private _router:Router
  ) { 
    this.imageURL = "http://image.tmdb.org/t/p/w185/";
  }

  ngOnInit() {
    this._moviesService.getTopRatedMovies().subscribe(
      (data)=>{
        this.movies = data.results;
      }
    )
  }

  getMovieInfo(id:string){
    this._router.navigate(['movie',id])
  }
}
