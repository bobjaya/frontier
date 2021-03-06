import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng-dragula/ng-dragula';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { UserAuthService } from './shared/user-auth.service';
import { AuthService } from './shared/auth.service';
import { AngularDependenciesModule } from './shared/angular-dependencies.module';
import { ThinkingStateComponent } from './thinking-state/thinking-state.component';
import { ThinkingStateService } from './shared/thinking-state.service';
import { AuthGuard } from './shared/auth-guard.service';
import { SurveyService } from './shared/survey.service';
import { SharedService } from './shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    ThinkingStateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    DragulaModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AngularDependenciesModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserAuthService,
    ThinkingStateService,
    SurveyService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
