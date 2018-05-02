import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {MoviesService} from '../../services/movies.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results:any[]=[];
  nPages:number;
  page:number;
  constructor(public _moviesService:MoviesService
  ,private _activatedRoute:ActivatedRoute) {
    this._activatedRoute.params.subscribe(
      (params)=>{
        
        this._moviesService.searchMovie(params['keyword']).subscribe(
          (data)=>{
            console.log(data);
            this.nPages = data.total_pages;
            this.page = params['page'];
  
          }
        )
      }
    )
   }
  page:number;
  ngOnInit() {
  }

}
