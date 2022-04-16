import { User } from '../src/domain/User';
import { UserFixture } from './helpers/UserFixture';
import { ImaginaryDB } from '../src/infrastructure/ImaginaryDB';
import { ActualUserRepository } from '../src/infrastructure/ActualUserRepository';

describe('ActualUserRepository should', () => {
	const testingDB = new ImaginaryDB();
	const fixture = new UserFixture(testingDB);

	afterEach(() => {
		fixture.clear();
	});

	describe('FIND', () => {
		it('a user if present', () => {
			const savedUser = new User({ userId: '42', name: 'Peter' });
			fixture.writeToDB(savedUser);

			const repo = new ActualUserRepository(testingDB);

			expect(repo.findByUserId('42')).toEqual(savedUser);
		});

		it('throw an exception if not present', () => {
			const savedUser = new User({ userId: '42', name: 'Peter' });
			fixture.writeToDB(savedUser);

			const repo = new ActualUserRepository(testingDB);

			expect(() => { repo.findByUserId('44'); }).toThrow(new Error('No User Found'));
		});
	});

	describe('SAVE', () => {
		it('a user setting its role to guest', () => {
			const savedUser = new User({ userId: '42', name: 'Peter' });
			const repo = new ActualUserRepository(testingDB);

			repo.save(savedUser);

			expect(fixture.checkRoleIsGuest(savedUser)).toEqual(true);
		});
	});
});
