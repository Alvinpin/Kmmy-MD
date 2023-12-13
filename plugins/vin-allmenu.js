import fs from 'fs'
//============{Tampilan Awal Nya}=====≠==//
let handler = async (m, { conn }) => {
	let pfft = `ʜɪ😇
 ɪ ᴀᴍ ᴀ ʙᴏᴛ ꜱᴄʀɪᴘᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʟᴠɪɴ. ɪ ᴀᴍ ɪɴ ᴀʟᴠɪɴ'ꜱ ᴘʀᴏɢʀᴀᴍ ɪɴ ᴛʜᴇ ꜰᴏʀᴍ ᴏꜰ ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ ꜱᴄʀɪᴘᴛ

ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ᴜɴᴛᴜᴋ ᴅᴀꜰᴛᴀʀ ᴋᴇ ᴅᴀᴛᴀʙᴀꜱᴇ ᴀɢᴀʀ ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ꜰɪᴛᴜʀ ꜰɪᴛᴜʀ ᴋᴜ
ᴅᴇɴɢᴀɴ ᴍᴇɴɢᴇᴛɪᴋ *#ᴅᴀꜰᴛᴀʀ ɴᴀᴍᴀ.ᴜᴍᴜʀ*

ᴘʟᴇᴀꜱᴇ ᴛʏᴘᴇ _*[ .𝙼𝙴𝙽𝚄𝙰𝙻𝙻 ]*_
_ᴛᴏ ꜱʜᴏᴡ ᴀʟʟ ʟɪꜱᴛ ᴏꜰ ᴍᴇɴᴜ ꜰᴇᴀᴛᴜʀᴇꜱ_

_*ꜱᴘᴇᴄɪᴀʟ ꜱᴄʀɪᴘᴛ ©ᴠɴꜱʜᴏᴏᴘ*_
`;
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}
  })  
//========≠=={gif menu jngan ubah}=========//
conn.sendMessage(m.chat, {
    video: fs.readFileSync('./media/vinmenu.mp4'),
    mimetype: 'video/mp4',
    fileLength: 1000000,
    caption: pfft,
    gifPlayback: true,
    gifAttribution: 5,
    contextInfo: {
      forwardingScore: 2023, 
      isForwarded: false,
      mentionedJid: [m.sender]
    }
  },
  )
  conn.sendMessage(m.chat, { audio: fs.readFileSync('./media/menu.mp3'), quoted: m });
  
}
handler.command = /^(menu|help)$/i;

export default handler;