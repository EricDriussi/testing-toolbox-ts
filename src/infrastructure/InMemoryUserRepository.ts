import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';
import { ImaginaryDB } from './ImaginaryDB';

export class InMemoryUserRepository implements UserRepository {
	private database: ImaginaryDB;

	constructor (database: ImaginaryDB) {
		this.database = database;
	}

	save (user: User): void {
		if (!user.email.includes('@')) {
			throw Error('INVALID EMAIL');
		}
		user.makeGuest(true);
		this.database.write({ id: user.userId, object: user });
	}

	findByUserId (userId: string): User {
		const foundUser = this.database.read(userId);
		if (foundUser === null) {
			throw Error('No User Found');
		}
		return this.database.read(userId) as User;
	}
}
