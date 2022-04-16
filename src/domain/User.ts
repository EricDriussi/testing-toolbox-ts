export enum MaritalStatus {
	married = 'Married',
	single = 'Single',
}

export enum Role {
	guest = 'GUEST_ROLE',
	admin = 'ADMIN_ROLE',
}

export class User {
	userId: string;
	name: string;
	age: number;
	maritalStatus: MaritalStatus;
	email: string;
	private readonly role: Role;
	yearsSinceSignup: number;

	constructor (data: {
		userId: string,
		name: string,
		age: number,
		marital: string,
		email: string,
		role: Role
		yearsSinceSignup?: number
	}) {
		if (User.nameIsValid(data.name)) {
			throw Error('Wrong name');
		}
		if (data.role === Role.guest && data.marital === MaritalStatus.married) {
			throw Error('You should\'t be here...');
		}
		if (data.age < 18) {
			throw Error('Go ask your parents');
		}
		this.userId = data.userId;
		this.name = data.name;
		this.age = data.age;
		this.maritalStatus = MaritalStatus.single;
		this.email = data.email;
		this.role = data.role;
		this.yearsSinceSignup = data.yearsSinceSignup || 0;
	}

	private static nameIsValid (name: string): boolean {
		const regex = /\d/g;
		return regex.test(name);
	}

	public isGuest (): boolean {
		return this.role === Role.guest;
	}
}
