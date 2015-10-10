export default class Player {
	constructor(user, color, type) {
		this.game = null;
		this.user = user;
		this.color = color;
		this.type = type;
	}

	select(chess) {
		this.game.select(chess);
	}

	move(position) {
		this.game.moveTo(position);
	}

	attack(position) {
		this.game.attack(position);
	}
}