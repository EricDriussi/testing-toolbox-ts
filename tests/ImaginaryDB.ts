export class ImaginaryDB {
	private users: Map<string, {}>;

	constructor () {
		this.users = new Map<string, {}>();
	}

	write (data: {id: string, object: any}) {
		this.users.set(data.id, data.object);
	}

	read (id: string) {
		const user = this.users.get(id);

		return user || null;
	}

	clearDB () {
		this.users = new Map<string, {}>();
	}
}
