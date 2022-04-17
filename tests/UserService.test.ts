import { UserService } from '../src/app-service/UserService';
import { StubInMemoryAdminUserRepository } from './doubles/StubInMemoryAdminUserRepository';
import { StubInMemoryGuestUserRepository } from './doubles/StubInMemoryGuestUserRepository';
import { Role } from '../src/domain/User';

describe('UserService should', () => {
	const stubAdminRepo = new StubInMemoryAdminUserRepository();
	const stubGuestRepo = new StubInMemoryGuestUserRepository();

	it('do something cool!', () => {
		const service = new UserService(stubAdminRepo);
		const nice = service.doSomethingCool();
		expect(nice).toEqual(69);
	});

	describe('for guests', () => {
		describe('find', () => {
			it('a guest user', () => {
				const service = new UserService(stubGuestRepo);
				expect(service.findGuest('stubGuestUser1').name).toEqual('stubGuestUserJohn');
			});
			it('throw exception if not a guest', () => {
				const service = new UserService(stubAdminRepo);
				expect(() => { service.findGuest('stubAdminUser1'); }).toThrow(Error('Not a guest user!'));
			});
		});
	});

	describe('for admins', () => {
		describe('turn to guest', () => {
			it('an admin user', () => {
				const service = new UserService(stubAdminRepo);
				service.turnAdminToGuest('stubAdminUser1');
				expect(stubAdminRepo.findByUserId('stubAdminUser1').role).toEqual(Role.guest);
			});
			it('throw exception if not an admin', () => {
				const service = new UserService(stubGuestRepo);
				expect(() => { service.turnAdminToGuest('stubGuestUser1'); }).toThrow(Error('Not an admin user!'));
			});
		});
	});
});
