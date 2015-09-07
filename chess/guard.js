"use strict";

import ChessMan from "./chessman";
import ChessType from "./type";
import ChessColor from "./color";

export default class Guard extends ChessMan {
	constructor(color) {
		super(color, ChessType.GUARD);
	}

	valid(x, y) {
		switch (this.color) {
			case ChessColor.BLACK:
				if (((x == 3) && (y == 0))
					|| ((x == 3) && (y == 2))
					|| ((x == 5) && (y == 0))
					|| ((x == 5) && (y == 2))
					|| ((x == 4) && (y == 1))) {
					return true;
				}
				break;
			case ChessColor.RED:
				if (((x == 3) && (y == 7))
					|| ((x == 3) && (y == 9))
					|| ((x == 5) && (y == 7))
					|| ((x == 5) && (y == 9))
					|| ((x == 4) && (y == 8))) {
					return true;
				}
				break;
			default:
				return false;
		}
	}

	canGo(x, y) {
		if (this.valid(x, y) && !this.game.isFriendly(this.color, x, y)) {
			if ((Math.abs(this.x - x) > 1)
				|| (Math.abs(this.y - y) > 1)
				|| ((Math.abs(this.x - x) == 0)
				&& (Math.abs(this.y - y) == 0))) {
				return false;
			}
			else {
				return true;
			}
		}
		return false;
	}
}