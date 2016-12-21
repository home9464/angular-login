import { Routes, RouterModule }  from '@angular/router';
import {DefaultComponent} from './default.component';
import {appSignRoutes} from './sign/routes';
import {appTechnologyRoutes} from './technology/routes';
import {appAboutRoutes} from './about/routes';

//console.log(...signRouting);
const appRoutes: Routes = [
    ...appSignRoutes,
    ...appTechnologyRoutes,
    ...appAboutRoutes,
    //{path:'', redirectTo: '/', pathMatch: 'full'}
    //{path:'', component: DefaultComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
