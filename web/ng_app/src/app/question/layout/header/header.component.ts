import { Component, OnInit, Input } from '@angular/core';
import { SegmentService } from '../../segments/segments.service';
import { QuestionIsolatedService } from '../../question-isolated.service';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() data: any;

  public progress: number = 0;
  public totalQuestions: number = 0;

  constructor(
    private appSharedService: SharedService,
    private _sharedService: QuestionIsolatedService,
    private router: Router) {
      this._sharedService.progress$.subscribe(progress => this.progress = progress);
  }

  ngOnInit() {
    this.totalQuestions = this.data.questions.length;
  }

  public saveAndExit() {
    this.appSharedService.publish({ progress: this.progress }); // TODO: does not work right now
    window.localStorage.setItem('progress', this.progress.toString()); // TODO: remove later
    this.router.navigate(['/auth/progress'])
  }

}
