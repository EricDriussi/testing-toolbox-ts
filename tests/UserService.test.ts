import { UserService } from '../src/app-service/UserService';
import { DummyInMemoryUserRepository } from './doubles/DummyInMemoryUserRepository';

describe('UserService should', () => {
	const dummyRepo = new DummyInMemoryUserRepository();

	it('do something cool!', () => {
		const service = new UserService(dummyRepo);
		const nice = service.doSomethingCool();
		expect(nice).toEqual(69);
	});
});
