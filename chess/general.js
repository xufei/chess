import ChessMan from "./chessman";
import ChessType from "./type";
import ChessColor from "./color";

export default class General extends ChessMan {
	constructor(color) {
		super(color, ChessType.GENERAL);
	}

	valid(x, y) {
		let result = true;
		switch (this.color) {
			case ChessColor.BLACK:
				if ((x < 3) || (x > 5) || ((y > 2) && (y < 7))) {
					result = false;
				}
				break;
			case ChessColor.RED:
				if ((x < 3) || (x > 5) || ((y > 2) && (y < 7))) {
					result = false;
				}
				break;
			default:
				result = true;
		}
		return result;
	}

	canGo(x, y) {
		if (this.valid(x, y) && !this.game.isFriendly(this.color, x, y)) {
			if (Math.abs(this.y - y) + Math.abs(this.x - x) == 1) {
				return true;
			}
			else if (this.x == x) {
				if (this.game.getChess(x, y) && (this.game.getChess(x, y).type == ChessType.GENERAL)) {
					let num = 0;
					let minY = y > this.y ? this.y : y;
					let maxY = y + this.y - minY;

					for (let i = minY + 1; i < maxY; i++) {
						if (this.game.getChess(x, i)) {
							num++;
						}
					}

					if (num == 0) {
						return true;
					}
				}
			}
		}
		return false;
	}
}