import {Routes , RouterModule} from '@angular/router';
//components
import {HomeComponent} from './components/home/home.component';
import {MovieInfoComponent} from './components/movie-info/movie-info.component';
import {SearchComponent} from './components/search/search.component';
import { NgModule } from '@angular/core';
const ROUTES:Routes = [{
    path:'home',
    component:HomeComponent
},
{
    path:'movie/:movie_id',
    component:MovieInfoComponent
},
{
    path:'search/:keyword',
    component:SearchComponent
},
{
    path:'**',
    pathMatch:'full',
    redirectTo:'home'
},
];

@NgModule({
    imports:[RouterModule.forRoot(ROUTES,{useHash:true})],
    exports:[RouterModule]
})export class AppRoutingModule{};