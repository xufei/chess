import ChessMan from "./chessman";
import ChessType from "./type";
import ChessColor from "./color";

export default class Horse extends ChessMan {
	constructor(color) {
		super(color, ChessType.HORSE);
	}

	canGo(x, y) {
		if (this.valid(x, y) && !this.game.isFriendly(this.color, x, y)) {
			if (((Math.abs(this.x - x) == 1)
				&& (Math.abs(this.y - y) == 2))
				|| ((Math.abs(this.x - x) == 2)
				&& (Math.abs(this.y - y) == 1))) {
				let i = -1;
				let j = -1;
				if (x - this.x == 2) {
					i = this.x + 1;
					j = this.y;
				}
				else if (this.x - x == 2) {
					i = this.x - 1;
					j = this.y;
				}
				else if (y - this.y == 2) {
					i = this.x;
					j = this.y + 1;
				}
				else if (this.y - y == 2) {
					i = this.x;
					j = this.y - 1;
				}

				if (this.game.isEmpty(i, j)) {
					return true;
				}
			}
		}
		return false;
	}
}