import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class MoviesService {
private url:string = `https://api.themoviedb.org/3`;
private sk:string = `eb56ba367ccadc2710468e9063cef893`;
  constructor(private jsonp:Jsonp) {
    console.log('service running');
   }
   getMoviesByPopularity(){
     let url:string = `${this.url}/discover/movie?sort_by=popularity.desc&api_key=${this.sk}&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
            .map(
              (result)=>{
                return result.json().results;
              }
            )
   }
   getMovieInfo(id:string){
      let url:string = `${this.url}/movie/${id}?api_key=${this.sk}&callback=JSONP_CALLBACK`;
      return this.jsonp.get(url)
          .map(
            (result)=>{
              return result.json();
            }
          )
   }

   searchMovie(keyword:string,page:number=0){
     let url:string = `${this.url}/search/movie?api_key=${this.sk}&language=en-US&page=${page}&include_adult=false&query=${keyword}`;
     return this.jsonp.get(url)
        .map(
          (result)=>{
            return result.json();
          }
        ) 
   }

}
