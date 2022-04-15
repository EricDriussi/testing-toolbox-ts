export enum MaritalStatus {
	married = 'Married',
	single = 'Single',
}

export class User {
	userId: string;
	name: string;
	age: number;
	maritalStatus: MaritalStatus;
	email: string;
	private guestRole?: boolean;

	constructor (data: { userId: string, name: string, age: number, marital: string, email: string, guestRole?: boolean }) {
		if (User.nameIsValid(data.name)) {
			throw Error('Wrong name');
		}
		if (data.age < 18) {
			throw Error('Go ask your parents');
		}
		if (data.marital === MaritalStatus.married) {
			throw Error('You should\'t be here...');
		}
		this.userId = data.userId;
		this.name = data.name;
		this.age = data.age;
		this.maritalStatus = MaritalStatus.single;
		this.email = data.email;
		this.guestRole = data.guestRole;
	}

	private static nameIsValid (name: string): boolean {
		const regex = /\d/g;
		return regex.test(name);
	}

	public makeGuest (role: boolean): void {
		this.guestRole = role;
	}

	public isGuest (): boolean {
		return this.guestRole || false;
	}
}
