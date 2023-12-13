let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}
  })    
  const caption = `
               _*Host VnShoop*_

VULTR 250$ 150K
DIGITAL OCEAN 200$ 250K
LINODE 100$ 150K
KAMATERA 100$ 180k

_Note :                                Masa aktif 2 bulan.     Garansi 15 day_

Keuntungan :
Bisa bikin vps/rdp
Jualan vps/rdp
Omzet ratusan ribu 🔥

*Ready vps*
_Ram diatasny lagi cet saja_
24GB 12 CORE ➫ 150K
16GB 8 CORE ➫ 120K
8GB 4 CORE ➫ 90K
4GB 2 CORE  ➫ 70K                                                                         2GB 2 CORE ➫ 50K
1GB 1 CORE ➫ 30K
▬▭▬▭▬▭▬▭▬▭▬▭
*Garansi 15day on jika mengikuti aturan*

➫ Ready domain
name.xyz 50k
name.online 50k
name.cfd 40k
name.store 60k
name.site 50k
name.asia 90k
name.info 80k
name.cloud 50k
name.shop 60k
name.my.id 20k
name.blog 50k
Cpanel hosting 30k/bulan
*Full akses clodfeler     Masa aktif setahun*

➫ subdomain 5k
name.com name.gob.mx name.org name.cl name.it name.nu name.kg name.us name.mu name.sx name.vu name.net name.in name.tc name.ac name.ro name.biz name.info
Dan msh banyak lagi

➫ Topup saldo paypal
1$ 30k
5$ 100k

_Jual VCC (Virtual Credit Card) 50k_

 ✅Fresh Bukan Bekasan
 ✅VCC VISA/Master Card
 ✅Masa Aktif 24 Jam
 ✅Saldo 1$
 ✅Maksimal Digunakan 1X Transaksi
 ✅Untuk OTP VCC Silahkan Chat

 Rules :
❗ VCC TIdak Boleh Dishare Ke Publik
❗ Teruntuk Yang Buat Garap Vps Trial
Kami Tidak Akan Reffund Jika Metode Yang Anda Pakai GAGAL
Contoh Gagal Metode Dalam Google Cloud Sprti CBat15/Contak Suport
Dan Jangan Salahkan VCC Jika Metode Anda Gagal !

VCC KOSONG UNTUK VERIFIKASI PAYPAL MASA AKTIF 4 TAHUN 150K

*REDI AKUN PAYPAL VERIF ✅ PRICE 60K*


_Wa_ : 083150418588
_yt_ : vinwert
_web_ : VnShoop.my.id

_*Kami Tidak Hanya Menyediakan Pelayanan Yg Terjangkau Tapi Juga Berkualitas*_
`.trim()
  conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/81209d0af9795d0d6d30a.jpg' }, caption: caption }, {quoted: m })
}
handler.help = ['listhost']
handler.tags = ['store']
handler.command = /^(listhost|host)$/i

export default handler