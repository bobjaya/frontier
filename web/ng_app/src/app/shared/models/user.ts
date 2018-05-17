export enum UserType {
	HIRING_MANAGER = 'hiring_manager',
	ADMINISTRATOR = 'administrator',
	REGULAR = 'regular'
}

export interface UserDataInterface {
	phone_number: string;
	city: string;
	first_name: string;
	last_name: string;
	address2: string;
	address1: string;
	company: string;
	state: string;
	token: string;
	postal_code: string;
	country: string;
	type: string; // TODO: assign UserType enum
	emial: string; // TODO: Email type
}

export class User {
	public user: UserDataInterface;
	public token: string;
	public num_logins: number;
	public last_login: Date | string;
	public survey_response?: any;
	public auth?: any;
	public landingPage?: any;
	public survey_complete?: any;

	constructor() {
		this.num_logins = 0;
	}
}