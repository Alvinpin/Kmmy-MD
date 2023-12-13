let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/bfc123ba275603f9b2383.jpg'
let sewa = `👋HI KAK MAU DONASI UNTUK MEMBANTU SAYA SILAHKAN DONASI DI LIST BAWAH BERIKUT INI;

▧「 *D O N A S I* 」

┌ 「*E-Walet*」
え _*Ovo*_ = 0821-8078-6508
え _*Dana*_ =  0821-8078-6508
え _*Gopay*_ =  0821-8078-6508
え _"Pulsa*_ =  0821-8078-6508
え _*ShopePay*_ =  0821-8078-6508
╰──

ʏᴏᴜᴛᴜʙᴇ : ${global.syt}

_TERIMA KASIH SUDAH MEMBANTU PERKEMBANGAN BOT INI BERAPA PUN YANG ANDA BERI AKAN SANGAT MEMBANTU SAYA UNTUK MENGEMBANGKAN BOT INI_
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

export default handler

//===={Global donasi klean nih}======//