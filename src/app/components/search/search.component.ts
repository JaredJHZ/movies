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
  imageURL:string;
  keyword:string;
  loading:boolean = true;
  constructor(public _moviesService:MoviesService,
    private _router:Router,
    private _activatedRoute:ActivatedRoute) {
    this.imageURL = "http://image.tmdb.org/t/p/w185/";
    this._activatedRoute.params.subscribe(
      (params)=>{
        
        this._moviesService.searchMovie(params['keyword'],params['page']).subscribe(
          (data)=>{
            this.nPages = data.total_pages;
            this.page = params['page'];
            this.results = data.results;
            this.keyword = params['keyword'];
            this.loading = false;
          }
        )
      }
    )
   }
  ngOnInit() {
  }

  getInfo(id:string){
    this._router.navigate(['movie',id]);
  }

  toPage(page:number){
    this._router.navigate(['search',this.keyword,page]);
  }
}
