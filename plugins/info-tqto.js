import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `_*THANKS FOR*_
_*𝐀𝐥𝐯𝐢𝐧*_ : https://www.youtube.com/@vinwert	
_*𝐑𝐞𝐲𝐳*_ : https://youtube.com/@Litzz445

┌「 _*AND THANKS FOR*_ 」
│ _𝐓𝐮𝐡𝐚𝐧 𝐘𝐠 𝐌𝐚𝐡𝐚 𝐄𝐬𝐚_
│ _𝐏𝐞𝐧𝐲𝐞𝐝𝐢𝐚 𝐁𝐚𝐬𝐞_
│ _𝐏𝐞𝐧𝐲𝐞𝐝𝐢𝐚 𝐑𝐞𝐬𝐭𝐀𝐩𝐢_
│ _𝐑𝐞𝐲𝐳_
│ _𝐀𝐥𝐯𝐢𝐧_
╰──
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/f9532aa2caf3f5b7f181e.jpg' }, caption: tqto }, m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto|thanks)$/i;

export default handler;
