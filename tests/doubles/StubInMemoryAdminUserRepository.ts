import { Role, User } from '../../src/domain/User';
import { UserRepository } from '../../src/domain/UserRepository';

export class StubInMemoryAdminUserRepository implements UserRepository {
	adminUsers: User[] = [
		new User({ userId: 'stubAdminUser1', name: 'stubAdminUserJohn', role: Role.admin }),
		new User({ userId: 'stubAdminUser2', name: 'stubAdminUserDoe', role: Role.admin })
	];

	save (user: User): void {
		this.adminUsers.push(user);
	}

	findByUserId (userId: string): User {
		const foundUser = this.adminUsers.find((user) => user.userId === userId);
		if (foundUser === undefined) {
			throw Error('No User Found');
		}
		return foundUser;
	}
}
