let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
▧「 *PEMBAYARAN* 」

┌「🧾E-Walet」
え _*Qris*_ = Scan Qris Di Atas
え _*Dana*_ = 0821-8078-6508
え _*Gopay*_ = 0821-8078-6508
え _*Rekening*_ = 7605 0101 8289 536 (BRI)
╰──

Owner: https://wa.me/6283150418588

_*𝗛𝗔𝗥𝗔𝗣 𝗞𝗜𝗥𝗜𝗠 𝗕𝗨𝗞𝗧𝗜 𝗣𝗘𝗠𝗕𝗔𝗬𝗔𝗥 𝗔𝗡𝗗𝗔 𝗞𝗘 𝗢𝗪𝗡𝗘𝗥*_

`.trim()
  conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/e0afc562e594c46241644.jpg' }, caption: caption }, {quoted: m })
}
handler.help = ['payment']
handler.tags = ['main']
handler.command = /^(pay|payment)$/i
handler.group = false

handler.register = false
export default handler

//======{buy no enc hub yt @vinwert}======//