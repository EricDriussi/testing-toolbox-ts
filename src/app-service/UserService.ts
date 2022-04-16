import { UserRepository } from '../domain/UserRepository';

export class UserService {
	constructor (readonly repo: UserRepository) {
		this.repo = repo;
	}

	doSomethingCool (): number {
		return 40 + 29;
	}
}
