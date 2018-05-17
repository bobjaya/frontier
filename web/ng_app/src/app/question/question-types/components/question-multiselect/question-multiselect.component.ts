import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Question } from '../../models/questions';
import { QuestionBaseComponent } from '../question-base.component';
import { FormGroup, Validators, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { slideInOutAnimation } from '../../../question-viewver/question-transition';

interface MultiSelectAnswer {
  answer: string;
}
export class MultiSelect extends Question {
  identifier = 'multi_choice_multi_select';
  description?: string;
  options: { label: string, value: string }[];
  answers: MultiSelectAnswer[];
  answersFlag: Boolean;

  component = QuestionMultiselectComponent;

  constructor(options: {} = {}) {
    super(options);
    this.description = options['description'] || '';
    this.fieldsConstructor(options['options']);
    this.answersFlag = options['answersFlag'] || false;
  }

  protected fieldsConstructor(data: any) {
    this.options = data['items'].map(item => {
      return {
        label: item.value,
        value: item.key
      };
    });

    this.answers = this.options.map(option => {
      return <MultiSelectAnswer>{
        answer: option.value
      };
    });
  }
}

@Component({
  selector: 'app-question-multiselect',
  templateUrl: './question-multiselect.component.html',
  styleUrls: ['./question-multiselect.component.sass'],
  animations: [
    slideInOutAnimation
  ]
})
export class QuestionMultiselectComponent extends QuestionBaseComponent<MultiSelect> implements OnInit {

  @HostBinding('class')
  classes = 'main-content question-content text-center';

  QuestionForm: FormGroup = new FormGroup({
    options: new FormArray([], (c: FormArray) => {
      if (!c.value.some(val => val)) {
        return { 'minCheck': false };
      }
      return null;
    })
  });


  ngOnInit() {

    if (!this.question.answersFlag) {
      this.question.answersFlag = true;
      this.question.answers = [];
    }

    const formArr = <FormArray>this.QuestionForm.get('options');
    this.question.options.forEach((key, i) => {
      formArr.push(new FormControl(this.question.answers[i]));
    });

    this.QuestionForm.get('options').valueChanges
      .subscribe(value => {
        this.question.answers = value;
      });
  }

  validate(c) {
    const formArr = <FormArray>this.QuestionForm.get('options');
    formArr.controls.forEach((control, i) => {
      if (c !== i) {
        control.setValue(false);
      }
    });
  }

  nextChar(alphabet) {
    return String.fromCharCode('a'.charCodeAt(0) + alphabet);
  }

}
