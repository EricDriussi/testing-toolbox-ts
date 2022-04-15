import { User } from '../src/domain/User';
import { InMemoryUserRepository } from '../src/infrastructure/InMemoryUserRepository';
import { UserFixture } from './UserFixture';
import { ImaginaryDB } from './ImaginaryDB';

describe('InMemoryUserRepository should', () => {
	const testingDB = new ImaginaryDB();
	const fixture = new UserFixture(testingDB);

	afterEach(() => {
		fixture.clear();
	});

	describe('FIND', () => {
		it('a user if present', () => {
			const savedUser = new User({ userId: '42', name: 'Peter' });
			fixture.writeToDB(savedUser);

			const repo = new InMemoryUserRepository(testingDB);

			expect(repo.findByUserId('42')).toEqual(savedUser);
		});

		it('throw an exception if not present', () => {
			const savedUser = new User({ userId: '42', name: 'Peter' });
			fixture.writeToDB(savedUser);

			const repo = new InMemoryUserRepository(testingDB);

			expect(() => { repo.findByUserId('44'); }).toThrow(new Error('No User Found'));
		});
	});

	describe('SAVE', () => {
		it('a user setting its role to guest', () => {
			const savedUser = new User({ userId: '42', name: 'Peter' });
			const repo = new InMemoryUserRepository(testingDB);

			repo.save(savedUser);

			expect(fixture.checkRoleIsGuest(savedUser)).toEqual(true);
		});
	});
});
