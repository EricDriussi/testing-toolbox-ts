export class User {
	userId: string;
	name: string;
	private guestRole?: boolean;

	constructor (data: { userId: string, name: string, guestRole?: boolean }) {
		this.userId = data.userId;
		this.name = data.name;
		this.guestRole = data.guestRole;
	}

	public makeGuest (role: boolean): void {
		this.guestRole = role;
	}

	public isGuest (): boolean {
		return this.guestRole || false;
	}
}
