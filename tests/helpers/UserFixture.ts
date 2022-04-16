import { User } from '../../src/domain/User';
import { ImaginaryDB } from '../../src/infrastructure/ImaginaryDB';

export class UserFixture {
	constructor (readonly database: ImaginaryDB) {
		this.database = database;
	}

	writeToDB (user: User): void {
		this.database.write({ id: user.userId, object: user });
	}

	checkRoleIsGuest (user: User): boolean {
		const retrievedUser = this.database.read(user.userId) as User;
		if (retrievedUser === null) {
			return false;
		}
		return retrievedUser.isGuest();
	}

	clear (): void {
		this.database.clearDB();
	}
}
