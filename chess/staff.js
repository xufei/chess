import ChessMan from "./chessman";
import ChessType from "./type";
import ChessColor from "./color";

export default class Staff extends ChessMan {
	constructor(color) {
		super(color, ChessType.STAFF);
	}

	valid(x, y) {
		switch (this.color) {
			case ChessColor.BLACK:
				if (((x == 0) && (y == 2))
					|| ((x == 2) && (y == 0))
					|| ((x == 2) && (y == 4))
					|| ((x == 4) && (y == 2))
					|| ((x == 6) && (y == 0))
					|| ((x == 6) && (y == 4))
					|| ((x == 8) && (y == 2))) {
					return true;
				}
				break;
			case ChessColor.RED:
				if (((x == 0) && (y == 7))
					|| ((x == 2) && (y == 5))
					|| ((x == 2) && (y == 9))
					|| ((x == 4) && (y == 7))
					|| ((x == 6) && (y == 5))
					|| ((x == 6) && (y == 9))
					|| ((x == 8) && (y == 7))) {
					return true;
				}
				break;
			default:
				return false;
		}
	}

	canGo(x, y) {
		if (this.valid(x, y) && !this.game.isFriendly(this.color, x, y)) {
			if ((Math.abs(this.x - x) != 2)
				|| (Math.abs(this.y - y) != 2)) {
				return false;
			}
			else {
				// 象眼
				if (this.game.isEmpty((this.x + x) / 2, (this.y + y) / 2)) {
					return true;
				}
				else {
					return false;
				}
			}
		}
		return false;
	}
}