import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../interfaces/movie.interface';
//services
import {MoviesService} from '../../services/movies.service';
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  movieId:string;
  urlImage:string = "http://image.tmdb.org/t/p/original/";
  urlLogo:string = "http://image.tmdb.org/t/p/w185";
  movie:Movie={
    title:'',
    page:'',
    image:'',
    release:'',
    studioImage:[],
    genres:[],
    overview:'',
    tagline:''
  };
  constructor(
    private _activatedRoute:ActivatedRoute,
    public _movieService:MoviesService
  ) { 
    this._activatedRoute.params.subscribe(
      (params)=>{
        this.movieId = params['movie_id'];
        this._movieService.getMovieInfo(this.movieId).subscribe(
          (data)=>{
            console.log(data);
            if(data!=undefined){
              this.movie.title = data.original_title;
              this.movie.critic = data.vote_average;
              this.movie.image = data.backdrop_path;
              this.movie.page = data.homepage;
              this.movie.release = data.release_date;
              this.movie.overview = data.overview;
              this.movie.tagline = data.tagline;
              for(let studio in data.production_companies){
                  this.movie.studioImage.push(data.production_companies[studio].logo_path);
              }
              for(let genres in data.genres){
                this.movie.genres.push(data.genres[genres].name);
              }
            }
          }
        )
      }
    )
  }

  ngOnInit() {
    
  }

}
