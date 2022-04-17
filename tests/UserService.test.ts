import { UserService } from '../src/app-service/UserService';
import { SpyInMemoryUserRepository } from './doubles/SpyInMemoryUserRepository';
import { User } from '../src/domain/User';

describe('UserService should', () => {
	const spyRepo = new SpyInMemoryUserRepository();

	afterEach(() => {
		spyRepo.saveHasBeenCalled = false;
	});

	it('do something cool!', () => {
		const service = new UserService(spyRepo);
		const nice = service.doSomethingCool();
		expect(nice).toEqual(69);
	});

	describe('find', () => {
		it('a guest user', () => {
			const service = new UserService(spyRepo);
			expect(service.findGuest('321').userId).toEqual('321');
		});

		it('throw error if not a guest', () => {
			const service = new UserService(spyRepo);
			expect(() => { service.findGuest('123'); }).toThrow(Error('Not a guest user!'));
		});
	});

	describe('save', () => {
		it('a user and call the expected repository', () => {
			const service = new UserService(spyRepo);
			service.save(new User({ userId: '123', name: 'spyOnMe' }));
			expect(spyRepo.saveHasBeenCalled).toBeTruthy();
		});

		it('throw an error for a guest user', () => {
			const service = new UserService(spyRepo);
			service.save(new User({ userId: '123', name: 'spyOnMe', guestRole: true }));
			expect(spyRepo.saveHasBeenCalled).toBeFalsy();
		});
	});
});
