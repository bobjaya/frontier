import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/questions';
import { QuestionBaseComponent } from '../question-base.component';
import { FormArray, FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { slideInOutAnimation } from '../../../question-viewver/question-transition';

interface LimitedSelectAnswer {
  answer: string;
}
export class LimitedSelect extends Question {
  description?: string;
  options: Object[];
  answers: LimitedSelectAnswer[];
  allowedSelection = 1;

  component = QuestionLimitedselectComponent;

  constructor(options: {} = {}) {
    super(options);
    this.fieldsConstructor(options['options']);
    this.description = options['description'] || '';
    this.answers = options['answers'] || '';
  }

  protected fieldsConstructor(data: any) {
    this.options = data['items'].map(item => {
      return {
        label: item.value,
        value: item.key
      };
    });

    this.allowedSelection = data['num_allowed'] || 1;
  }
}

@Component({
  selector: 'app-question-limitedselect',
  templateUrl: './question-limitedselect.component.html',
  styleUrls: ['./question-limitedselect.component.sass'],
  animations: [
    slideInOutAnimation
  ]
})
export class QuestionLimitedselectComponent extends QuestionBaseComponent<LimitedSelect> implements OnInit {

  QuestionForm: FormGroup = new FormGroup({
    options: new FormArray([])
  });


  ngOnInit() {

    const formArr = <FormArray>this.QuestionForm.get('options');

    formArr.setValidators((c: FormArray) => {
      const selectedValues = c.value.filter(item => item);
      if (selectedValues.length < this.question.allowedSelection) {
        return { 'minCheck': false };
      }
      return null;
    });

    this.question.options.forEach((key: any, i) => {
      let preset = false;
      if (this.question.answers[i] === key.label) {
        preset = key.label;
      }
      formArr.push(new FormControl(preset));
    });

    this.QuestionForm.get('options').valueChanges
      .subscribe(value => {
        this.question.answers = value;
      });
  }

}
