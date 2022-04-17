import { User } from '../../src/domain/User';
import { UserRepository } from '../../src/domain/UserRepository';

export class SpyInMemoryUserRepository implements UserRepository {
	saveHasBeenCalled: boolean = false;
	readonly users: User[] = [
		new User({ userId: '123', name: 'fakeNotGuestUser', guestRole: false }),
		new User({ userId: '321', name: 'fakeGuestUser', guestRole: true })
	];

	save (user: User): void {
		// this could be commented out for all we care!
		this.users.push(user);
		this.saveHasBeenCalled = true;
	}

	findByUserId (userId: string): User {
		const foundUser = this.users.find((user) => user.userId === userId);
		if (foundUser === undefined) {
			throw Error('No User Found');
		}
		return foundUser;
	}
}
