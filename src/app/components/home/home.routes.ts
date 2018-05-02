import {Routes} from '@angular/router';
import {RatedComponent} from './child/rated/rated.component';
export const HOMEROUTES:Routes = [
    {
        path:'main',
        component:RatedComponent
    },
    {
        path:'**',
        pathMatch:'full',
        redirectTo:'main'
    }
];