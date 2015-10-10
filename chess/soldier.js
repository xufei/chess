import ChessMan from "./chessman";
import ChessType from "./type";
import ChessColor from "./color";

export default class Soldier extends ChessMan {
	constructor(color) {
		super(color, ChessType.SOLDIER);
	}

	valid(x, y) {
		let result = true;
		switch (this.color) {
			case ChessColor.BLACK:
				if ((y < 3)
					|| ((y < 5) && (x % 2 == 1))) {
					result = false;
				}
				break;
			case ChessColor.RED:
				if ((y > 6)
					|| ((y > 4) && (x % 2 == 1))) {
					result = false;
				}
				break;
			default:
				result = true;
		}
		return result;
	}

	canGo(x, y) {
		let result = false;
		if (this.valid(x, y) && !this.game.isFriendly(this.color, x, y)) {
			result = true;
			switch (this.color) {
				case ChessColor.BLACK:
					if (y < this.y) {
						result = false;
					}
					else {
						if (Math.abs(x - this.x) + y - this.y != 1) {
							result = false;
						}
					}
					break;
				case ChessColor.RED:
					if (y > this.y) {
						result = false;
					}
					else {
						if (Math.abs(x - this.x) + this.y - y != 1) {
							result = false;
						}
					}
					break;
				default:
					result = true;
			}
		}
		return result;
	}
}