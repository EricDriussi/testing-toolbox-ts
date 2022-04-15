import { User } from './User';

export interface UserRepository {
  findByUserId(userId: string): User | null;
  save(user: User): void;
}
