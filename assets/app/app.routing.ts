import { AUTH_ROUTES } from './auth/auth.routing';
import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './messages/messages.component';
import { Routes, RouterModule } from '@angular/router';
const APP_ROUTES : Routes = [
  {path:'messages', component:MessagesComponent},
  {path:'auth', component:AuthenticationComponent, children:AUTH_ROUTES},
  {path:'',  redirectTo : '/messages', pathMatch: 'full'},
];


export const routing = RouterModule.forRoot(APP_ROUTES);