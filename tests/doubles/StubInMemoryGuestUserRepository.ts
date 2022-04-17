import { Role, User } from '../../src/domain/User';
import { UserRepository } from '../../src/domain/UserRepository';

export class StubInMemoryGuestUserRepository implements UserRepository {
	guestUsers: User[] = [
		new User({ userId: 'stubGuestUser1', name: 'stubGuestUserJohn', role: Role.guest }),
		new User({ userId: 'stubGuestUser2', name: 'stubGuestUserDoe', role: Role.guest })
	];

	save (user: User): void {
		this.guestUsers.push(user);
	}

	findByUserId (userId: string): User {
		const foundUser = this.guestUsers.find((user) => user.userId === userId);
		if (foundUser === undefined) {
			throw Error('No User Found');
		}
		return foundUser;
	}
}
