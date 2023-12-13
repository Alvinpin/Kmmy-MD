import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}
  })    
  m.reply(`
_*🔗Link:*_ ${link}
_*Size:*_ ${media.length} Byte
_*Expired:*_ ${isTele ? 'No Expiry Date' : 'Unknown'}`)
}
handler.help = ['upload']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i
handler.limit = true
handler.register = true
export default handler