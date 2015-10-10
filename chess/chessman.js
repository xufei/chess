export default class ChessMan {
	constructor(color, type) {
		this.game = null;

		this.color = color;
		this.type = type;
		this.x = -1;
		this.y = -1;

		this.beAttack = false;
	}

	/**
	 * 棋子在某位置是否合法，对于不受限制的车，马，炮，这个值始终为真，其他类型需要override这个方法
	 * @param x
	 * @param y
	 * @returns {boolean}
	 */
	valid(x, y) {
		return true;
	}
}