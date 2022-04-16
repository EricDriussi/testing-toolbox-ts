import { User } from '../../src/domain/User';
import { UserRepository } from '../../src/domain/UserRepository';

export class FakeInMemoryUserRepository implements UserRepository {
	readonly users: User[];

	constructor (users: User[]) {
		this.users = users;
	}

	save (user: User): void {
		this.users.push(user);
	}

	findByUserId (userId: string): User {
		const foundUser = this.users.find((user) => user.userId === userId);
		if (foundUser === undefined) {
			throw Error('No User Found');
		}
		return foundUser;
	}
}
