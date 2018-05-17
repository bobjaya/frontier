import { Component, OnInit, HostBinding } from '@angular/core';
import { Question } from '../../models/questions';
import { QuestionBaseComponent } from '../question-base.component';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { slideInOutAnimation } from '../../../question-viewver/question-transition';

interface SingleSelectAnswer {
  answer: number;
}
export class SingleSelect extends Question {
  identifier: string = 'rank_order_matrix';
  description?: string;
  options: Object[];
  answers: SingleSelectAnswer[];
  choices: { key: string, value: string}[];

  component = QuestionSingleselectComponent;

  constructor(options: {} = {}) {
    super(options);
    this.description = options['description'] || '';
    this.fieldsConstructor(options['options']);
    this.answers = options['answers'] || '';
    this.choices = options['options']['choices'];
  }

  protected fieldsConstructor(data: any /* data source from API */) {
    this.options = data['items'].map(item => {
      return {
        label: item.value,
        key: item.key // TODO: unused in UI
      };
    });
  }
}

@Component({
  selector: 'app-question-singleselect',
  templateUrl: './question-singleselect.component.html',
  styleUrls: ['./question-singleselect.component.sass'],
  animations: [
    slideInOutAnimation
  ]
})
export class QuestionSingleselectComponent extends QuestionBaseComponent<SingleSelect> implements OnInit {

  QuestionForm: FormGroup = new FormGroup({
    options: new FormArray([])
  });

  // @HostBinding('class')
  // classes = 'main-content question-content text-center';

  ngOnInit() {
    const formArr = <FormArray>this.QuestionForm.get('options');
    this.question.options.forEach((key, i) => {
      formArr.push(new FormControl(this.question.answers[i], [Validators.required]));
    });
    this.QuestionForm.get('options').valueChanges
      .subscribe(value => {
        this.question.answers = value;
      });
  }

}
