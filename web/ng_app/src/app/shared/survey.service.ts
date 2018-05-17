import { Injectable, group } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import * as _ from 'underscore';

@Injectable()
export class SurveyService {

	constructor(private http: HttpClient) { }

	public async getQuestions(token: string, options?: { sorted: boolean }): Promise<any[]> {
		let data: any = await this.http.get(`/survey/response/${token}`).toPromise();
		// let data: any = await Promise.resolve(this._mockedQuestions); // TODO: remove mocked
		let questions: any[] = data.questions;
		if (options && !options.sorted) {
			return questions;
		}

		let groupedBySegment = _.groupBy(questions, (question) => question.segment);
		let sortedQuestions: any[] = [];
		Object.keys(groupedBySegment).forEach((segement) => {
			sortedQuestions = sortedQuestions.concat(_.sortBy(groupedBySegment[segement], 'index'));
		});

		return sortedQuestions;
	}

	private _mockedQuestions: any = {
		questions: [
			{
				"index": 1,
				"prompt": "In a team meeting, a senior manager, who you do not know well, asks you to complete a project in a week. You know it will take longer than that. What are you more likely to do?",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "agree",
						"value": "Agree to the schedule and get it done as best you can."
					}, {
						"key": "dont_agree",
						"value": "Say it will take more time to be done properly"
					}]
				},
				"note": "",
				"token": "question_N7OgKIvZNiyur1pB",
				"segment": 1
			},
			{
				"index": 1,
				"prompt": "Please select one or more of the choices that best describe your race and ethnicity.",
				"type": "multi_choice_multi_select",
				"data": {
					"items": [{
						"key": "white",
						"value": "White"
					}, {
						"key": "black",
						"value": "Black/African American"
					}, {
						"key": "asian",
						"value": "Asian"
					}, {
						"key": "hawaiian_pacific",
						"value": "Native Hawaiian or Other Pacific Islander"
					}, {
						"key": "americanindian_alaskanative",
						"value": "American Indian or Alaska Native"
					}, {
						"key": "hispanic_latino",
						"value": "Hispanic or Latino"
					}, {
						"key": "other",
						"value": "Other"
					}, {
						"key": "nottoanswer",
						"value": "Prefer not to answer."
					}],
					"num_allowed": 7
				},
				"note": "",
				"token": "question_JQ4NNK5nZPR0qANg",
				"segment": 1
			}, {
				"index": 2,
				"prompt": "You realize that a project that you have been assigned should be expanded to address an additional topic. You have the time and autonomy to include it. What do you do?",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "setaside",
						"value": "Set the idea aside and stick with the assignment.   "
					}, {
						"key": "suggest_notinclude",
						"value": "Suggest the topic to colleagues as an additional consideration, but not include it in the project.  "
					}, {
						"key": "add_explain",
						"value": "Tell your colleagues and supervisor that you intend to add the topic, explain why, and see what they say"
					}, {
						"key": "add",
						"value": "Add the topic to the project."
					}]
				},
				"note": "",
				"token": "question_AKF8KPyocDcHKQvM",
				"segment": 1
			}, {
				"index": 3,
				"prompt": "How important is each of these characteristics in being an effective communicator in conversation?",
				"type": "rank_order_matrix",
				"data": {
					"items": [{
						"key": "speak",
						"value": "Speaking very slowly"
					}, {
						"key": "key",
						"value": "Strongly emphasizing your key points"
					}, {
						"key": "eye",
						"value": "Making eye contact with the person you are talking with"
					}, {
						"key": "conversation",
						"value": "Adjusting your conversational style based on who you are talking with"
					}, {
						"key": "listener",
						"value": "Being a good listener"
					}],
					"choices": [{
						"key": "not",
						"value": "Not at all important"
					}, {
						"key": "notso",
						"value": "Not so important"
					}, {
						"key": "somewhat",
						"value": "Somewhat important"
					}, {
						"key": "very",
						"value": "Very important"
					}, {
						"key": "extremely",
						"value": "Extremely important"
					}]
				},
				"note": "",
				"token": "question_XW0ncIncHPKrYaEz",
				"segment": 1
			}, {
				"index": 4,
				"prompt": "If you were a manager, how would you distribute bonuses to your staff? Assume that all perform satisfactorily, some better than others.",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "same",
						"value": "Give everyone the same bonus."
					}, {
						"key": "bonus_performance",
						"value": "Give everyone a bonus, with differing amounts based on their performance scores."
					}, {
						"key": "no_bonussome",
						"value": "Give no bonuses to some, so you can give higher bonuses to those with the best performance scores."
					}]
				},
				"note": "",
				"token": "question_wGGlBR5abqWVYpJW",
				"segment": 1
			}, {
				"index": 5,
				"prompt": "Working with a group of colleagues, you propose an idea that you think could take your project to the next level. Group members do not see the value of your idea. What are you more likely to do?",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "set_aside",
						"value": "Accept their judgment and set it aside."
					}, {
						"key": "reconsider",
						"value": "Offer details on your idea and ask them to reconsider."
					}]
				},
				"note": "",
				"token": "question_SBfsEASLGGJQTaTA",
				"segment": 1
			}, {
				"index": 6,
				"prompt": "What are appropriate topics to discuss with your colleagues who are not necessarily your good friends? Please check all that apply.",
				"type": "rank_order_matrix",
				"data": {
					"items": [{
						"key": "news",
						"value": "The latest news headlines"
					}, {
						"key": "food",
						"value": "Your favorite food"
					}, {
						"key": "vacation",
						"value": "Your recent vacation"
					}, {
						"key": "personallife",
						"value": "Struggles in your personal life"
					}, {
						"key": "backbiting",
						"value": "A co-worker you find annoying"
					}, {
						"key": "complain",
						"value": "How much work you have"
					}],
					"choices": [{
						"key": "not",
						"value": "Not at all appropriate"
					}, {
						"key": "notso",
						"value": "Not so appropriate"
					}, {
						"key": "somewhat",
						"value": "Somewhat appropriate"
					}, {
						"key": "very",
						"value": "Very appropriate"
					}]
				},
				"note": "",
				"token": "question_OyOfwzHMyMukPSZz",
				"segment": 1
			}, {
				"index": 7,
				"prompt": "You are assigned a task with a goal that runs counter to your personal beliefs, but that is legal and could help your organization.  In general, what are you more likely to do?",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "accept",
						"value": "Accept and complete the assigned task."
					}, {
						"key": "decline",
						"value": "Decline the assigned task. Propose a different task to accomplish a goal you can support."
					}]
				},
				"note": "",
				"token": "question_uplxhWIgiOGMCwdK",
				"segment": 1
			}, {
				"index": 8,
				"prompt": "Say you decline the task and are ordered to do it. What are you more likely to do?",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "accept_typicaleffort",
						"value": "Accept and complete the assigned task with your typical effort."
					}, {
						"key": "accept_minimaleffort",
						"value": "Accept and complete the assigned task with minimal effort."
					}, {
						"key": "appeal",
						"value": "Appeal to the human resources department."
					}, {
						"key": "reassigned",
						"value": "Ask to be reassigned within the organization."
					}, {
						"key": "quit",
						"value": "Quit your job."
					}]
				},
				"note": "",
				"token": "question_WPXcJDQwleREKi7g",
				"segment": 1
			}, {
				"index": 9,
				"prompt": "How would you feel about frequently working\u2026",
				"type": "rank_order_matrix",
				"data": {
					"items": [{
						"key": "hours30",
						"value": "30 hours a week "
					}, {
						"key": "hours40",
						"value": "40 hours a week"
					}, {
						"key": "hours50",
						"value": "50 hours a week"
					}, {
						"key": "hours60",
						"value": "60 hours a week "
					}],
					"choices": [{
						"key": "defnot",
						"value": "Definitely not OK "
					}, {
						"key": "probnot",
						"value": "Probably not OK "
					}, {
						"key": "probok",
						"value": "Probably OK "
					}, {
						"key": "defok",
						"value": "Definitely OK "
					}]
				},
				"note": "",
				"token": "question_OZq5xUz9muJeXac4",
				"segment": 1
			}, {
				"index": 10,
				"prompt": "How do you feel about overnight work travel?",
				"type": "rank_order_matrix",
				"data": {
					"items": [{
						"key": "twothree_month",
						"value": "Two or three times a month "
					}, {
						"key": "once_month",
						"value": "Once a month "
					}, {
						"key": "once_twomonths",
						"value": "Once every two months"
					}, {
						"key": "never",
						"value": "Never"
					}],
					"choices": [{
						"key": "defnot",
						"value": "Definitely not OK "
					}, {
						"key": "probnot",
						"value": "Probably not OK "
					}, {
						"key": "probok",
						"value": "Probably OK "
					}, {
						"key": "defok",
						"value": "Definitely OK "
					}]
				},
				"note": "",
				"token": "question_eq9Vv6KB5yL6Cdv7",
				"segment": 1
			}, {
				"index": 11,
				"prompt": "How important is each item in a successful career?",
				"type": "rank_order_matrix",
				"data": {
					"items": [{
						"key": "happy",
						"value": "Being happy with your job"
					}, {
						"key": "paidwell",
						"value": "Being well paid"
					}, {
						"key": "learnnew",
						"value": "Learning many things"
					}, {
						"key": "challenging",
						"value": "Doing challenging work"
					}, {
						"key": "friends",
						"value": "Being friends with coworkers"
					}, {
						"key": "expert",
						"value": "Being recognized as an expert"
					}, {
						"key": "highrank",
						"value": "Achieving a high-ranking position"
					}, {
						"key": "useful_toorganization",
						"value": "Being useful to your organization "
					}, {
						"key": "useful_tosociety",
						"value": "Being useful to society"
					}],
					"choices": [{
						"key": "not",
						"value": "Not at all important"
					}, {
						"key": "notso",
						"value": "Not so important"
					}, {
						"key": "somewhat",
						"value": "Somewhat important"
					}, {
						"key": "very",
						"value": "Very important"
					}, {
						"key": "extremely",
						"value": "Extremely important"
					}]
				},
				"note": "",
				"token": "question_hVOtRw86aMHnTNIl",
				"segment": 1
			}, {
				"index": 12,
				"prompt": "You are on a tight deadline to complete a report in a few hours.  A colleague asks for help with a separate report he/she also has due in a few hours.  The request is justified.  How do you respond?",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "no_help",
						"value": "Explain that you do not have time to help."
					}, {
						"key": "help_after",
						"value": "Offer to help after you finish your report, if they still need help at that time."
					}, {
						"key": "some_help",
						"value": "Provide a few minutes of help, then say you need to finish your report."
					}, {
						"key": "all_help",
						"value": "Provide whatever help is needed, then resume work on your report."
					}]
				},
				"note": "",
				"token": "question_HvQRUb9S7JBvNwM2",
				"segment": 1
			}, {
				"index": 13,
				"prompt": "Between the two options, which best describes how you view your \u201cto-do\u201d list?",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "single_entity",
						"value": "You see your to-do list as a large single entity."
					}, {
						"key": "multiple_entity",
						"value": "You see your todo list as made of smaller daily to-do lists."
					}]
				},
				"note": "",
				"token": "question_g5RKnGx7vxS3yTfB",
				"segment": 1
			}, {
				"index": 14,
				"prompt": "Say that to become an expert in your field, you have to work 60-hour weeks for many years. Is this\u2026",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "definetely_worth",
						"value": "Definitely worth it"
					}, {
						"key": "probably_worth",
						"value": "Probably worth it"
					}, {
						"key": "probably_not",
						"value": "Probably not worth it"
					}, {
						"key": "definetely_not",
						"value": "Definitely not worth it"
					}]
				},
				"note": "",
				"token": "question_PUVQ2umEV81tRtoF",
				"segment": 1
			}, {
				"index": 15,
				"prompt": "Do you prefer to spend time with people who challenge you to think differently, or who encourage you to think as you do?",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "strongly_you",
						"value": "Strongly prefer to spend time with people who encourage you to think as you do."
					}, {
						"key": "somewhat_you",
						"value": "Somewhat prefer to spend time with people who encourage you to think as you do."
					}, {
						"key": "somewhat_different",
						"value": "Somewhat prefer to spend time with people who challenge you to think differently."
					}, {
						"key": "strongly_different",
						"value": "Strongly prefer to spend time with people who challenge you to think differently."
					}]
				},
				"note": "",
				"token": "question_X1u39VTfL02wRQpA",
				"segment": 1
			}, {
				"index": 16,
				"prompt": "Which of these comes closer to your opinion?",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "own_success",
						"value": "Each person is responsible for their own success."
					}, {
						"key": "group_success",
						"value": "The success of each person is linked to the success of all people."
					}]
				},
				"note": "",
				"token": "question_lSSYOv3zSNDA9x7f",
				"segment": 1
			}, {
				"index": 17,
				"prompt": "Would you\u2026",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "much_knowabout",
						"value": "Much prefer to attend a lecture on a subject you know a lot about."
					}, {
						"key": "somewhat_lotabout",
						"value": "Somewhat prefer to attend a lecture on a subject you know a lot about."
					}, {
						"key": "somewhat",
						"value": "Somewhat interested"
					}, {
						"key": "somewhat_notknowabout",
						"value": "Somewhat prefer to attend a lecture on a subject you do not know much about.  "
					}, {
						"key": "much_notknowabout",
						"value": "Much prefer to attend a lecture on a subject you do not know much about."
					}]
				},
				"note": "",
				"token": "question_SdQYc1jYxh48Nurn",
				"segment": 1
			}, {
				"index": 18,
				"prompt": "Which of these is more important to you?",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "tradition",
						"value": "Maintaining tried-and-true ways of doing things."
					}, {
						"key": "experiment",
						"value": "Experimenting with new and different ways of doing things."
					}]
				},
				"note": "",
				"token": "question_H7bqbWKYT8Rkv0zE",
				"segment": 1
			}, {
				"index": 19,
				"prompt": "How important is each of these characteristics in being an effective communicator when giving a presentation?",
				"type": "rank_order_matrix",
				"data": {
					"items": [{
						"key": "keypoints",
						"value": "Emphasizing key points"
					}, {
						"key": "keytakeaways",
						"value": "Summarizing key takeaways"
					}, {
						"key": "humor",
						"value": "Using humor"
					}, {
						"key": "eye",
						"value": "Making eye contact with your audience"
					}, {
						"key": "slides",
						"value": "Using well-designed presentation slides"
					}],
					"choices": [{
						"key": "not",
						"value": "Not at all important"
					}, {
						"key": "notso",
						"value": "Not so important"
					}, {
						"key": "somewhat",
						"value": "Somewhat important"
					}, {
						"key": "very",
						"value": "Very important"
					}, {
						"key": "extremely",
						"value": "Extremely important"
					}]
				},
				"note": "",
				"token": "question_tFxlLSyN2DAPj14F",
				"segment": 1
			}, {
				"index": 20,
				"prompt": "What type of clothes do you expect to wear at work?",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "relaxed",
						"value": "Relaxed casual, e.g. sport pants and a sweatshirt"
					}, {
						"key": "casual",
						"value": "Business casual, e.g. slacks and a nice shirt"
					}, {
						"key": "formal",
						"value": "Formal business clothes, e.g. suits"
					}]
				},
				"note": "",
				"token": "question_jSHu1N8uzVjK80hm",
				"segment": 1
			}, {
				"index": 21,
				"prompt": "How do you prefer to work?",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "much_onetask",
						"value": "Much prefer to focus on one task at a time."
					}, {
						"key": "somewhat_onetask",
						"value": "Somewhat prefer to focus on one task at a time."
					}, {
						"key": "somewhat_multipletask",
						"value": "Somewhat prefer to handle multiple tasks at once."
					}, {
						"key": "much_multipletask",
						"value": "Much prefer to handle multiple tasks at once."
					}]
				},
				"note": "",
				"token": "question_rektWJarpWZVp37T",
				"segment": 1
			}, {
				"index": 22,
				"prompt": "In a few sentences, explain your personal interests that you would most want an employer to know.",
				"type": "open_ended_paragraph",
				"data": {},
				"note": "",
				"token": "question_qMrmbPZoo5qobDRI",
				"segment": 1
			}, {
				"index": 23,
				"prompt": "In a few sentences, explain one thing that you do to help teamwork run smoothly.",
				"type": "open_ended_paragraph",
				"data": {},
				"note": "",
				"token": "question_vPMNe3vPTm19nyem",
				"segment": 1
			}, {
				"index": 24,
				"prompt": "In a few sentences, explain what about your work style you would most want an employer to know.",
				"type": "open_ended_paragraph",
				"data": {},
				"note": "",
				"token": "question_KenJrjiDIaNOnqX3",
				"segment": 1
			}, {
				"index": 25,
				"prompt": "In a few sentences, explain one personal strength on which people have complimented you.",
				"type": "open_ended_paragraph",
				"data": {},
				"note": "",
				"token": "question_FMLTlbhjeS5MinNf",
				"segment": 1
			}, {
				"index": 26,
				"prompt": "Are you\u2026",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "male",
						"value": "Male"
					}, {
						"key": "female",
						"value": "Female"
					}, {
						"key": "noanswer",
						"value": "Prefer not to answer."
					}]
				},
				"note": "",
				"token": "question_Whn8U7hGlqYRvvRz",
				"segment": 1
			}, {
				"index": 27,
				"prompt": "What is your age range?",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "age18_27",
						"value": "18-27 years"
					}, {
						"key": "age28_37",
						"value": "28-37"
					}, {
						"key": "age38_47",
						"value": "38-47"
					}, {
						"key": "age48_57",
						"value": "48-57"
					}, {
						"key": "age58_67",
						"value": "58-67"
					}, {
						"key": "age68_77",
						"value": "68-77"
					}, {
						"key": "age78_87",
						"value": "78-87"
					}]
				},
				"note": "",
				"token": "question_9SHGNh2saC9C6Nwf",
				"segment": 1
			},
			{
				"index": 28,
				"prompt": "Considering the potential risks vs. the potential rewards, how interested are you in starting your own company at some point?",
				"type": "multi_choice_single_select",
				"data": {
					"items": [{
						"key": "extremely",
						"value": "Extremely interested"
					}, {
						"key": "very",
						"value": "Very interested"
					}, {
						"key": "somewhat",
						"value": "Somewhat interested"
					}, {
						"key": "not_so",
						"value": "Not so interested"
					}, {
						"key": "not_atall",
						"value": "Not interested at all   "
					}]
				},
				"note": "",
				"token": "question_2zmfiKZxoNkcaupF",
				"segment": 1
			}]
	};
}