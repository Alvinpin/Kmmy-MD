import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import os from 'os'
import fs from 'fs'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix: _p }) => {

let user = `@${m.sender.split('@')[0]}`
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}
  })      
//==≠==≠{Hati hati ubah nya nanti eror}======// 
let tags = {}
const defaultMenu = {
  before: `
╔─────────────────────◈
┃ʜɪ ᴋᴀᴋ %name 👋
╠─────────────────────◈ 
┃────『 *I N F O* 』
◈▻ _*ᴏᴡɴᴇʀ :*_ VnShoop
◈▻ _*ᴜꜱᴇʀ :*_ %totalreg 
◈▻ _*ᴠᴇʀꜱɪᴏɴ*_ : 4
◈▻ _*ᴩʀᴇꜰɪx :*_ %_p 
◈▻ _*ᴩʟᴀᴛꜰᴏʀᴍ :*_ %platform 
◈▻ _*ᴅᴀᴛᴇ :*_ %date 
◈▻ _*ʀᴇɢɪᴏɴ*_ : Tokyo-Japan
◈▻ _*ʟɪʙʀᴀʀy*_ : MULTI-DEVICE 
╠─────────────────────◈
✦ _ʏᴏᴜᴛᴜʙᴇ ᴏᴡɴᴇʀ_ : @vinwert
╠─────────────────────◈
📌𝐑𝐔𝐋𝐄𝐒
┃々 _𝙉𝙤 𝙎𝙥𝙖𝙢 𝙉𝙤 𝘽𝙤𝙩_
┃々 _𝙉𝙤 𝘾𝙖𝙡𝙡 𝙉𝙤 𝘽𝙤𝙩_
┃々 _𝙇𝙖𝙣𝙜𝙜𝙖𝙧 𝘼𝙪𝙩𝙤 𝘽𝙖𝙣 𝙈𝙖𝙨𝙞𝙝 𝙉𝙜𝙚𝙮𝙚𝙡 𝘼𝙪𝙩𝙤 𝙆𝙚𝙣𝙤𝙣_
┃々 _𝗔𝗻𝗱𝗮 𝗦𝗼𝗽𝗮𝗻 𝗞𝗮𝗺𝗶 𝗦𝗲𝗴𝗮𝗻_
┃々 _𝘼𝙣𝙙𝙖 𝙆𝙖𝙨𝙖𝙧 𝙍𝙖𝙝𝙖𝙣𝙜 𝘽𝙚𝙧𝙜𝙚𝙩𝙖𝙧_
╚─────────────────────◈
*𝙼𝙴𝙽𝚄 𝙰𝙻𝙻* 
%readmore
`.trimStart(),
header: '┌•⟅━━━ 「 *%category* 」',
  body: 'ク %cmd %isPremium %islimit',
 footer: '┗━═┅═━',
  after: `_ꜱᴘᴇᴄɪᴀʟ ꜱᴄʀɪᴘᴛ ©ᴠɴꜱʜᴏᴏᴘ_`,
}
  try {
    let name = m.pushName || conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Jakarta'
    })
    let time = d.toLocaleTimeString(locale, { timeZone: 'Asia/Jakarta' })
    time = time.replace(/[.]/g, ':')
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    
    let _uptime
    if (process.send) {
      process.send('uptime')
      _uptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }

    let totalreg = Object.keys(global.db.data.users).length
    let platform = os.platform()
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag].toUpperCase()) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '_*ʟɪᴍɪᴛ ᴏɴʟʏ*_' : '')
                .replace(/%isPremium/g, menu.premium ? '_*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*_' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      name, date, time, platform, _p, totalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let vin = 'https://telegra.ph/file/4a332dea6acd4cf246595.jpg'

conn.sendMessage(m.chat, { audio: fs.readFileSync('./media/menu.mp3'), quoted: m })
 
 conn.sendMessage(m.chat, {
      text: text,
      contextInfo: {
      externalAdReply: {
      title: `𝐕𝐧𝐒𝐡𝐨𝐨𝐩`,
      body: global.author,
      thumbnailUrl: vin,
      sourceUrl: `https://wa.me/6283150418588`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})

  } catch (e) {
    m.reply('Error')
  }
}
handler.command = /^(menuall)$/i

handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}