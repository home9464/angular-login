import { Routes, RouterModule }  from '@angular/router';
import {SigninComponent} from './signin.component';
import {SignupComponent} from './signup.component';
export const appSignRoutes: Routes = [
    {path:"signin", component: SigninComponent},
    {path:"signup", component: SignupComponent},
];
