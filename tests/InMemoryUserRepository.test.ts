import { InMemoryUserRepository } from '../src/infrastructure/InMemoryUserRepository';
import { UserFixture } from './UserFixture';
import { ImaginaryDB } from './ImaginaryDB';
import { UserBuilder } from './UserBuilder';

describe('InMemoryUserRepository should', () => {
	const testingDB = new ImaginaryDB();
	const fixture = new UserFixture(testingDB);

	afterEach(() => {
		fixture.clear();
	});

	describe('FIND', () => {
		it('a user if present', () => {
			const savedUser = UserBuilder.init().withUserId('42').build();
			fixture.writeToDB(savedUser);

			const repo = new InMemoryUserRepository(testingDB);

			expect(repo.findByUserId('42')).toEqual(savedUser);
		});

		it('throw an exception if not present', () => {
			const repo = new InMemoryUserRepository(testingDB);

			expect(() => { repo.findByUserId('44'); }).toThrow(new Error('No User Found'));
		});
	});

	describe('SAVE', () => {
		it('a user setting its role to guest', () => {
			const savedUser = UserBuilder.init().withGuestRole(false).build();
			const repo = new InMemoryUserRepository(testingDB);

			repo.save(savedUser);

			expect(fixture.checkRoleIsGuest(savedUser)).toEqual(true);
		});

		it('throw an exception if email is faulty', () => {
			const faultyUser = UserBuilder.init().withEmail('doesn\'tWork').build();
			fixture.writeToDB(faultyUser);

			const repo = new InMemoryUserRepository(testingDB);

			expect(() => { repo.save(faultyUser); }).toThrow(new Error('INVALID EMAIL'));
		});
	});
});
