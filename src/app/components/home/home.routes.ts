import {Routes} from '@angular/router';
import {RatedComponent} from './child/rated/rated.component';
import {KidsComponent} from './kids/kids.component';
export const HOMEROUTES:Routes = [
    {
        path:'main',
        component:RatedComponent
    },
    {
        path:'kids',
        component:KidsComponent
    },
    {
        path:'**',
        pathMatch:'full',
        redirectTo:'main'
    }
];