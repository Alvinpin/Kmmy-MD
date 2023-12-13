import fs from 'fs'

let handler = async (m, { conn }) => {
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}
  })  
	let pfft = `Hi👋
_*𝙎𝙀𝙒𝘼 𝙑𝙄𝙉-𝙈𝘿*_

Seminggu : 2.000.00
sebulan : 5.000.00

┌「 _*𝙁𝙞𝙩𝙪𝙧 𝙋𝙧𝙚𝙢𝙞𝙪𝙢*_ 」
│• Remini
│• Hdr
│•Bokep
│•Dll
╰── 

_*𝙈𝙞𝙣𝙖𝙩*_ 
Hub : https://wa.me/6283150418588
yt : @vinwert

_𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 ©𝚅𝙽𝚂𝙷𝙾𝙾𝙿_

𝙉𝙊𝙏𝙀
_*𝙍𝙪𝙡𝙡𝙚𝙨 𝘿𝙖𝙣 𝙋𝙚𝙧𝙖𝙩𝙪𝙧𝙖𝙣 𝘽𝙚𝙧𝙡𝙖𝙠𝙪*_
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `𝚅𝙽𝚂𝙷𝙾𝙾𝙿`,
      body: global.author,
      thumbnailUrl: `https://telegra.ph/file/686032e9f9c17daa8ca98.jpg`,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}

handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|sewabot)$/i

export default handler;