import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
 ]

await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}
  })   
;
 conn.sendMessage(m.chat, {
      video: { url: "https://telegra.ph/file/973aac841928ae5e51166.mp4"},
      gifPlayback: true,
      caption: 'ʜɪ _*ᴠɪɴ*_ ɪꜱ ᴀɴ ᴀʙʙʀᴇᴠɪᴀᴛɪᴏɴ ᴏꜰ ᴛʜᴇ ɴᴀᴍᴇ ᴏꜰ ᴍʏ ᴏᴡɴᴇʀ. _*ᴠɪɴ*_ ɪꜱ ᴀ ʙᴏᴛ ᴛʜᴀᴛ ɪꜱ ᴘʀᴏɢʀᴀᴍᴍᴇᴅ ᴛᴏ ʜᴇʟᴘ ʏᴏᴜ ᴡɪᴛʜ ᴛʜᴇ ꜰᴇᴀᴛᴜʀᴇꜱ ɪᴛ ʜᴀꜱ\n\n┌• ᴏᴡɴᴇʀ: ᴠɪɴ\n└• ᴡᴇʙꜱɪᴛᴇ: vnshoop.online.com\n\n𝚃𝚑𝚒𝚜 𝚋𝚘𝚝 𝚑𝚊𝚜 𝚋𝚎𝚎𝚗 𝚙𝚛𝚘𝚐𝚛𝚊𝚖𝚖𝚎𝚍 𝚋𝚢 𝚝𝚑𝚎 𝚘𝚠𝚗𝚎𝚛 𝚞𝚜𝚒𝚗𝚐 𝚝𝚑𝚎 𝙹𝚊𝚟𝚊 𝚙𝚛𝚘𝚐𝚛𝚊𝚖𝚖𝚒𝚗𝚐 𝚕𝚊𝚗𝚐𝚞𝚊𝚐𝚎\n\nʙᴏᴛ ɪɴɪ ᴍᴀꜱɪʜ ᴘʀᴏꜱᴇꜱ ᴘᴇɴɢᴇᴍʙᴀɴɢᴀɴ ᴅᴀɴ ᴊɪᴋᴀ ᴀᴅᴀ ꜰɪᴛᴜʀ ʏɢ ᴇʀᴏʀ ʜᴀʀᴀᴘ ʟᴀᴘᴏʀ ᴋᴇ ᴏᴡɴᴇʀ ᴋᴇᴛɪᴋ ".ʀᴇᴘᴏʀᴛ*\n\n ʟɪꜱᴛ\n.ᴍᴇɴᴜᴀʟʟ ',
      contextInfo: {
      externalAdReply: {
      title: `© Vin - MD`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/1bc70bafc93dec04182ea.jpg',
      sourceUrl: `https://www.youtube.com/@vinwert`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(menu|helo|help)$/i;

export default handler;