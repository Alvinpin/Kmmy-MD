import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}
  })  
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await m.reply(`ᴠɪɴᴍᴅ ᴍᴇᴍɪʟɪᴋɪ ${fitur.length} ꜰɪᴛᴜʀ\n\nᴠɴꜱʜᴏᴏᴘ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴɢ ᴜᴘᴅᴀᴛᴇ ꜱᴄʀɪᴘᴛ ɪɴɪ ᴊᴀᴅɪ ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ꜱᴜʙᴄʀɪʙᴇ ʏᴛ @ᴠɪɴᴡᴇʀᴛ`)
}
handler.help = ['totalfitur']
handler.tags = ['main']
handler.command = ['totalfitur']
export default handler
