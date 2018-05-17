import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SurveyService } from '../shared/survey.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {

  public data: { questions: Array<any>, user: any } = null;

  constructor(
    private surveyService: SurveyService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef // TODO: remove later
  ) { 
    this.cdr.detach();
  }

  async ngOnInit() {
    // TODO: Will be moved to Question Route Resolver
    let user: any = this.authService.userData;
    let questions = await this.surveyService.getQuestions(user.survey_response.token, {
      sorted: true
    });
    this.data = {
      questions,
      user
    }
    this.cdr.reattach();
  }

}
