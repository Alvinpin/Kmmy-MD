function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: VnShoop\nitem1.TEL;waid=6283150418588:6283150418588\nitem1.X-ABLabel:\nSpam Auto Kenon\nURL;Email Owner:VnShoop@gmail.com\nORG: Creator Script\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler