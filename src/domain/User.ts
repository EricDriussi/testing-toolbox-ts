export enum Role {
	guest = 'ROLE_GUEST',
	admin = 'ROLE_ADMIN',
}

export class User {
	userId: string;
	name: string;
	role: Role;

	constructor (data: { userId: string, name: string, role?: Role }) {
		this.userId = data.userId;
		this.name = data.name;
		this.role = data.role || Role.guest;
	}
}
