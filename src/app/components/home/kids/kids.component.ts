import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MoviesService} from '../../../services/movies.service';
@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  movies:any[];
  imageURL:string;
  constructor(
    private _moviesServie:MoviesService,
    private _router:Router
  ) { 
    this._moviesServie.getKidMovies().subscribe(
      (data)=>{
        this.movies = data.results;
        this.imageURL = "http://image.tmdb.org/t/p/w185/";
        console.log(this.movies);
      }
    )
  }
  getMovieInfo(id:string){
    this._router.navigate(['movie',id]);
  }

  ngOnInit() {
  }

}
