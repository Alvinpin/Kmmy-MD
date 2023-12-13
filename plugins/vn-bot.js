import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${audio.getRandom()}`, "oy.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(vin|alvin|alpin|halo|aloo|haloo|bang|p)$/i;
handler.command = new RegExp();

export default handler;

const audio = [
	"./media/vn/alpin.mp3",
];