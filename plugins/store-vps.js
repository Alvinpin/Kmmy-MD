let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}
  })  
  const caption = `
▬▭( *LIST VPS LINODE* )▭▬▭

🚀 RAM 1GB CORE 1 : => *20K* <=
🚀 RAM 2GB CORE 1 : => *25K* <=
🚀 RAM 4GB CORE 2 : => *45K* <=
🚀 RAM 8GB CORE 4 : => *55K* <=
🚀 RAM 16GB CORE 6 : => *80K* <=

=>   *_𝙂𝙤𝙤𝙙 𝙌𝙪𝙖𝙡𝙞𝙩𝙮 ✅_* <=
=>   *_𝘽𝙚𝙧𝙜𝙖𝙧𝙖𝙣𝙨𝙞 ✅_*      <=
=>   *_𝘿𝙖𝙥𝙚𝙩 𝘽𝙤𝙣𝙪𝙨 ✅_*  <=

*‼️GARANSI ON JIKA TIDAK MELANGGAR TOS!!!*
1. NO MINING
2. NO CPU 100%
3. NO USE DDOS
*_GARANSI 10H ON ✅_*

*JIKA MELANGGAR T.O.S GARANSI HANGUS!!!*

*MAU CLAIM GARANSI? KIRIM BUKTI TRANSFER & CHAT*
‼️NO BUKTI NO GARANSI
‼️ MAKSA REFF NO BUKTI? BLOCK!!! 

*KEUNTUNGAN BUY VPS?*
📍BISA OPEN ADMIN PANEL
📍BISA OPEN RESELLER PANEL
📍BISA DI PAKAI BUAT SERVER PRIBADI
📍BISA JUALAN PANEL
📍BISA OPEN JASA RUN BOT
📍BISA OPEN MURPUSH
📍BISA OPEN MURBUG DLL

WhatsApp owener;
wa.me/6283150418588
▬▭▬▭▬▭▬▭▬▭▬▭▬
`.trim()
  conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/9e38a76751d204b72135b.jpg' }, caption: caption }, {quoted: m })
}
handler.help = ['listvps']
handler.tags = ['store']
handler.command = /^(listvps)$/i

export default handler