import ChessMan from "./chessman";
import General from "./general";
import Guard from "./guard";
import Staff from "./staff";
import Horse from "./horse";
import Chariot from "./chariot";
import Cannon from "./cannon";
import Soldier from "./soldier";

export default ChessFactory = {
	ChessTypes: [General, Guard, Staff, Horse, Chariot, Cannon, Soldier],

	/**
	 * 创建棋子
	 * @param data 数组，按照顺序：颜色，类型，横坐标，纵坐标
	 * @returns {*}
	 */
	createChess (data) {
		let chess = new (ChessFactory.ChessTypes[7 - data[1]])(data[0], data[1]);
		chess.x = data[2];
		chess.y = data[3];
		return chess;
	}
};