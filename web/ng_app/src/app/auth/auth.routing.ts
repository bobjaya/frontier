import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginResolver } from './login/login.resolver';
import { WithoutTokenLoginComponent } from './without-token-login/without-token-login.component';
import { LandingPageResolver } from './landing-page/landing-page.resolver';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'access-login', pathMatch: 'full' },
      { path: 'login/:token', component: LoginComponent, resolve: { LoginResolver: LoginResolver} },
      { path: 'access-login', component: WithoutTokenLoginComponent },
      { path: 'progress', component: LandingPageComponent },
      { path: 'reset-password', component: ResetPasswordComponent }
    ]
  }
];
