import ChessMan from "./chessman";
import ChessType from "./type";
import ChessColor from "./color";

export default class Horse extends ChessMan {
	constructor(color) {
		super(color, ChessType.HORSE);
	}

	canGo(x, y) {
		if (this.valid(x, y) && !this.game.isFriendly(this.color, x, y)) {
			let dx = this.x - x;
			let dy = this.y - y;
			
			// 马走日
			if (dx*dx + dy*dy == 5) {
				// 马腿位置
				if (this.game.isEmpty(Math.round((2 * this.x + x) / 3), Math.round((2 * this.y + y) / 3))) {
					return true;
				}
			}
		}
		return false;
	}
}