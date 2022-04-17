import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/User';

export class UserService {
	constructor (readonly repo: UserRepository) {
		this.repo = repo;
	}

	doSomethingCool (): number {
		return 40 + 29;
	}

	findGuest (guestId: string): User {
		const foundUser = this.repo.findByUserId(guestId);
		if (foundUser === null) {
			throw Error('Not a guest user!');
		}
		if (!foundUser.isGuest()) {
			throw Error('Not a guest user!');
		}
		return foundUser;
	}

	save (user: User): void {
		this.doSomethingCool();
		if (user.isGuest()) {
			return;
		}
		this.repo.save(user);
	}
}
