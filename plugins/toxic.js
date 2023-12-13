let handler = async (m, { conn, text, usedPrefix, command }) => {
const deleteMessage = { delete: { remoteJid: m.key.remoteJid, fromMe: false, id: m.key.id, participant: [m.sender] } };
await conn.sendMessage(m.chat, deleteMessage);
conn.sendMessage(m.chat, {text: 'Ga usah toxic nanti gw ban'},{quoted: m, ephemeralExpiration: global.ephemeral})
}

handler.customPrefix = /^(anj|ajg|bodo|bodoh|tolol|lol|apa|fak)$/i
handler.command = new RegExp
export default handler