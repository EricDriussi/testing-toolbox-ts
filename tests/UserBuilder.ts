import { MaritalStatus, Role, User } from '../src/domain/User';

export class UserBuilder {
	private userId: string;
	private name: string;
	private age: number;
	private maritalStatus: string;
	private email: string;
	private role: Role;
	private yearsSinceSignup: number;

	private constructor () {
		this.userId = 'irrelevantUserId';
		this.name = 'irrelevantName';
		this.age = 69;
		this.maritalStatus = MaritalStatus.single;
		this.email = 'irrelevant@Email';
		this.role = Role.admin;
		this.yearsSinceSignup = 1;
	}

	static init () {
		return new UserBuilder();
	}

	withName (name: string) {
		this.name = name;
		return this;
	}

	withAge (age: number) {
		this.age = age;
		return this;
	}

	withMaritalStatus (maritalStatus: string) {
		this.maritalStatus = maritalStatus;
		return this;
	}

	withEmail (email: string) {
		this.email = email;
		return this;
	}

	withGuestRole () {
		this.role = Role.guest;
		return this;
	}

	withUserId (userId: string) {
		this.userId = userId;
		return this;
	}

	build () {
		const { userId, name, age, maritalStatus, email, role, yearsSinceSignup } = this;
		return new User({
			userId: userId,
			name: name,
			age: age,
			marital: maritalStatus,
			email: email,
			role: role,
			yearsSinceSignup: yearsSinceSignup
		});
	}
}
