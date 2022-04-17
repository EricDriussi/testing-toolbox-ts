import { UserRepository } from '../domain/UserRepository';
import { Role, User } from '../domain/User';

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
		if (foundUser.role !== Role.guest) {
			throw Error('Not a guest user!');
		}
		return foundUser;
	}

	turnAdminToGuest (adminId: string): void {
		const foundUser = this.repo.findByUserId(adminId);
		if (foundUser === null) {
			throw Error('No user found!');
		}
		if (foundUser.role !== Role.admin) {
			throw Error('Not an admin user!');
		}
		foundUser.role = Role.guest;
		this.repo.save(foundUser);
	}
}
