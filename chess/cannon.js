import ChessMan from "./chessman";
import ChessType from "./type";
import ChessColor from "./color";

export default class Cannon extends ChessMan {
	constructor(color) {
		super(color, ChessType.CANNON);
	}

	canGo(x, y) {
		if (this.valid(x, y) && !this.game.isFriendly(this.color, x, y)) {
			if ((this.x != x) && (this.y != y)) {
				return false;
			}
			else {
				if (this.game.isEmpty(x, y)) {
					if (this.y == y) {
						if (this.x < x) {
							for (let i = this.x + 1; i < x; i++) {
								if (!this.game.isEmpty(i, this.y)) {
									return false;
								}
							}
							return true;
						}

						if (this.x > x) {
							for (let i = this.x - 1; i > x; i--) {
								if (!this.game.isEmpty(i, this.y)) {
									return false;
								}
							}
							return true;
						}
					}
					else {
						if (this.y < y) {
							for (let i = this.y + 1; i < y; i++) {
								if (!this.game.isEmpty(this.x, i)) {
									return false;
								}
							}
							return true;
						}

						if (this.y > y) {
							for (let i = this.y - 1; i > y; i--) {
								if (!this.game.isEmpty(this.x, i)) {
									return false;
								}
							}
							return true;
						}
					}
				}
				else {
					let count = 0;

					if (this.y == y) {
						if (this.x < x) {
							for (let i = this.x + 1; i < x; i++) {
								if (!this.game.isEmpty(i, this.y)) {
									count++;
								}
							}
							if (count == 1) {
								return true;
							}
						}

						if (this.x > x) {
							for (let i = this.x - 1; i > x; i--) {
								if (!this.game.isEmpty(i, this.y)) {
									count++;
								}
							}
							if (count == 1) {
								return true;
							}
						}
					}
					else {
						if (this.y < y) {
							for (let i = this.y + 1; i < y; i++) {
								if (!this.game.isEmpty(this.x, i)) {
									count++;
								}
							}
							if (count == 1) {
								return true;
							}
						}

						if (this.y > y) {
							for (let i = this.y - 1; i > y; i--) {
								if (!this.game.isEmpty(this.x, i)) {
									count++;
								}
							}
							if (count == 1) {
								return true;
							}
						}
					}
				}
			}
		}
		return false;
	}
}