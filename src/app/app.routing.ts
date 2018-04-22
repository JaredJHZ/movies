import {Routes , RouterModule} from '@angular/router';
//components
import {HomeComponent} from './components/home/home.component';
import { NgModule } from '@angular/core';
const ROUTES:Routes = [{
    path:'home',
    component:HomeComponent
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