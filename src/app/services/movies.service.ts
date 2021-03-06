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

   searchMovie(keyword:string,page:number=1){
     let url:string = `${this.url}/search/movie?api_key=${this.sk}&language=en-US&page=${page}&include_adult=false&query=${keyword}&callback=JSONP_CALLBACK`;
     return this.jsonp.get(url)
        .map(
          (result)=>{
            return result.json();
          }
        ) 
   }

   getTopRatedMovies(){
     let url:string = `https://api.themoviedb.org/3/discover/movie?api_key=${this.sk}&sort_by=vote_count.desc&page=1&callback=JSONP_CALLBACK`;
     return this.jsonp.get(url)
      .map(
        (result)=>{
          return result.json();
        }
      )
   }
   getKidMovies(){
     let url:string = `${this.url}/discover/movie?api_key=${this.sk}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&callback=JSONP_CALLBACK`;
     return this.jsonp.get(url)
      .map(
        (result)=>{
          return result.json();
        }
      )
   }
   getCartelera(){
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() +7);
    let desdeSTR = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDay()}`;
    let hastaSTR = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDay()}`;
    let url = `${this.url}/discover/movie?primary_release_date.gte=${desdeSTR}&primary_release_date=${hastaSTR}&api_key=${this.sk}&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
     .map(
       (results)=>{
         return results.json();
       }
     )
  }
}
