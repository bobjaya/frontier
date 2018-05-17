import { Injectable } from '@angular/core';
import { MultiSelect } from '../question/question-types/components/question-multiselect/question-multiselect.component';
import { Question } from '../question/question-types/models/questions';
import { SingleSelect } from '../question/question-types/components/question-singleselect/question-singleselect.component';
import { TextField } from '../question/question-types/components/question-text/question-text.component';
// tslint:disable-next-line:max-line-length
import { DropDownSingleSelect } from '../question/question-types/components/question-dropdown-singleselect/question-dropdown-singleselect.component';
import { LimitedSelect } from '../question/question-types/components/question-limitedselect/question-limitedselect.component';
import { ReOrder } from '../question/question-types/components/question-reorder/question-reorder.component';
import { MultipleTextField } from '../question/question-types/components/question-multiple-text/question-multiple-text.component';
import { DragDrop } from '../question/question-types/components/question-dragdrop/question-dragdrop.component';
import { RankOrder } from '../question/question-types/components/question-rankorder/question-rankorder.component';
import { TypeAhead } from '../question/question-types/components/question-typeahead/question-typeahead.component';
import { SurveyService } from './survey.service';
import { AuthService } from './auth.service';

@Injectable()
export class QuestionFieldService {

	private _questionsList: Question[] = [];

	get questionsList(): Question[] {
		return this._questionsList;
	}

	set questionsList(list: Question[]) {
		this._questionsList = list;
	}

	private static readonly Segments: { [userType: string]: number[] } = {
		'hiring_manager': [ 1 ],
		'regular': [ 2, 3 ]
	};

	private questionConstructors: any = {
		'multi_choice_multi_select': LimitedSelect,
		'multi_choice_single_select': MultiSelect,
		'rank_order_matrix': SingleSelect,
		'open_ended_paragraph': TextField

		// TODO: more comming soon
	};

	constructor(
		private surveyService: SurveyService,
		private authService: AuthService) { }

	public async prepareQuestions() {
		const questions = await this.surveyService.getQuestions(this.authService.userData.survey_response.token, {
			sorted: true
		});

		if (questions.length > 0) {
			this.questionsList = <Question[]>questions.filter(question => {
				return this.questionConstructors.hasOwnProperty(question.type);
			}).map(question => {
				const Constructor = this.questionConstructors[question.type];
				const instance = QuestionFieldService.questionFieldFactory(Constructor, question);
				return instance;
			});
		}
	}

	/**
	 * Construct Question from source
	 * @param Constructor
	 * @param question
	 */
	public static questionFieldFactory(Constructor: any, question: any /* question from response */) {
		const instance = new Constructor({
			questionLabel: question.prompt,
			description: question.description || '',
			options: question.data
		});

		return instance;
	}

	public getQuestion(index: number): Question {
		if (this.questionsList.length < index) {
			return null;
		}
		window.localStorage.setItem('index', index.toString());
		return this.questionsList[index];
	}
}
