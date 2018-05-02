import { Component, OnInit } from '@angular/core';
import {Router, Route} from '@angular/router';
import {MoviesService} from '../../../services/movies.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _moviesService:MoviesService,
    private _router:Router
  ) { }

  ngOnInit() {
  }

  searchMovie(tag:string){
    this._router.navigate(['search',tag,1]);
  }

}
