import { User } from '../../src/domain/User';
import { UserRepository } from '../../src/domain/UserRepository';

export class DummyInMemoryUserRepository implements UserRepository {
	save (user: User): void {
	}

	findByUserId (userId: string): User {
		return new User({ userId: '123', name: 'dummyUser', guestRole: false });
	}
}
