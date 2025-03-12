import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path:'',
        component:NxWelcomeComponent
    },
    {
        path:'add',
        loadComponent:()=>import('./pages/add.component').then(m=>m.AddComponent)
    },{
        path:'view',
        loadComponent:()=>import('./pages/view.component').then(m=>m.ViewComponent)
    }
];
