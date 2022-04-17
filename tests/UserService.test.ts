import { UserService } from '../src/app-service/UserService';
import { FakeInMemoryUserRepository } from './doubles/FakeInMemoryUserRepository';
import { User } from '../src/domain/User';

describe('UserService should', () => {
	const fakeRepo = new FakeInMemoryUserRepository([
		new User({ userId: '123', name: 'fakeNotGuestUser', guestRole: false }),
		new User({ userId: '321', name: 'fakeGuestUser', guestRole: true })
	]);

	it('do something cool!', () => {
		const service = new UserService(fakeRepo);
		const nice = service.doSomethingCool();
		expect(nice).toEqual(69);
	});

	describe('find', () => {
		it('a guest user', () => {
			const service = new UserService(fakeRepo);
			expect(service.findGuest('321').userId).toEqual('321');
		});
		it('throw error if not a guest', () => {
			const service = new UserService(fakeRepo);
			expect(() => { service.findGuest('123'); }).toThrow(Error('Not a guest user!'));
		});
	});
});
