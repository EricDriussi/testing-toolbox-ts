import { MaritalStatus, Role, User } from '../../src/domain/User';

export class UserMother {
	static longTermMarriedAdmin (): User {
		return new User({
			userId: '12345',
			name: 'heather',
			age: 75,
			marital: MaritalStatus.married,
			email: 'heather@company.co.uk',
			role: Role.admin,
			yearsSinceSignup: 10
		});
	}

	static recentSingleGuest (): User {
		return new User({
			userId: '54321',
			name: 'john',
			age: 25,
			marital: MaritalStatus.single,
			email: 'heather@company.co.uk',
			role: Role.admin,
			yearsSinceSignup: 0
		});
	}
}
