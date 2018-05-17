import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserType } from '../../shared/models/user';
import { SurveyService } from '../../shared/survey.service';
import { SharedService } from '../../shared/shared.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  public userData: any;
  public returnedUser: boolean = false;
  public progress: number = 0;
  public totalQuestions: number;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appSharedService: SharedService,
    private authService: AuthService,
    private surveyService: SurveyService) {
      this.subscription = this.appSharedService.data$.subscribe((data: any) => {
        if(data.progress) {
          this.progress = this.progress; // TODO: does not work
        }
      })
    }

  async ngOnInit() {
    this.userData = <User>this.authService.userData;
    this.returnedUser = this.userData.last_login ? true : false;
    let questions = await this.surveyService.getQuestions(this.userData.survey_response.token)
    this.totalQuestions = questions.length;
    let progress = window.localStorage.getItem('progress');
    this.progress = progress ? Number(progress) : 0;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
