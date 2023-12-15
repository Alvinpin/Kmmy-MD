import fetch from "node-fetch";
import crypto from "crypto";
import { sizeFormatter } from "human-readable";

const format = sizeFormatter()
let handler = async (m, { conn, args, text, usedPrefix: _p, command, isROwner }) => {
    
//======={Data Cpanel}==========≠//
    const domain = "https://tokoodamz.panelprivv.xyz" 
const apikey = "ptla_3yRUrH03T405nWv2zw9H82FQGOr4sTkVqehQkVAt6BM"
const c_apikey = "ptlc_dcbJDTzLNPFcUbNeRmDnn9L799n9mvU1YHdd22DK5bb" 

    const webPage = "https://tokoodamz.panelprivv.xyz"
    
    
    switch (command) {
        case "addusr": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 1) return m.reply(`
> Perintah :\n${_p + command} nomor/tag`);
            //let password
            let u = m.quoted ? m.quoted.sender : t[0] ? t[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
            let dms = nomorwa + "@s.whatsapp.net";

            if (!u) return m.reply(`*Format salah!*

> Perintah : ${_p + command} nomer/tag`);
            let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
            let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
            let password = d.exists ? crypto.randomBytes(3).toString("hex") : t[3]

            let f = await fetch(domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": "buyer" + profil.toString() + "@gmail.com", // Email
                    "username": "buyer" + profil.toString(), // Username
                    "first_name": "buyer" + profil.toString(), // Nama Depan
                    "last_name": "buyer", // Nama Belakang
                    "language": "en", // Bahasa
                    "password": "vinshop" + password.toString() // Password
                })
            })
            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes

            let p = await conn.reply(m.chat, `
*===[ Sukses Membuat Akun ]===*

Id: ${user.id}
Username: ${user.username}
Detail Dikirim Ke : @${u.split`@`[0]}`, m, { mentions: [u] })
           
            await conn.sendMessage(u, {
                text: `_*[ ᴛᴏᴋ ᴛᴏᴋ ᴘᴇꜱᴀɴᴀɴ ɴʏᴀ ᴋᴀᴋ ]*_\n
⎙─➤ 🔗 Id: ${user.id}                
⎙─➤ 📓 Username: ${user.username}
⎙─➤ 🔒 Password: vinshop${password}
⎙─➤ 🥀 Status : member
⎙─➤ 💻 Speak : Linux
⎙─➤ ⏱️ Aktif : 30Days
⎙─➤ 🌐 Login: ${webPage}
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
_*Ikuti Rules Yg Berlaku*_
`,})

             conn.sendMessage(dms, {
                text: `_*[ ᴛᴏᴋ ᴛᴏᴋ ᴘᴇꜱᴀɴᴀɴ ɴʏᴀ ᴋᴀᴋ ]*_\n
⎙─➤ 🔗 Id: ${user.id}     
⎙─➤ 💌 milik : @${u.split`@`[0]}            
⎙─➤ 📓 Username: ${user.username}
⎙─➤ 🔒 Password: vinshop${password}
⎙─➤ 🧾 Dibuat: ${user.created_at}
⎙─➤ 🥀 Status : member
⎙─➤ 💻 Speak : Linux
⎙─➤ ⏱️ Aktif : 30Days
⎙─➤ 🌐 Login: ${webPage}
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
_*Ikuti Rules Yg Berlaku*_
`,})


            conn.sendMessage(u, {
                text: `_*[ Info ]*_\n
Gunakan Dengan Sebaik Mungkin, Simpan Informasi Akun Karna Jika Hilang Maka Bukan Tanggung Jawab Kami!

_*𝗥𝗨𝗟𝗘𝗦*_
•Dilarang Menjual Kembali Panel
•Dilarang Menyebarkan Data Panel
•Dilarang Menyebarkan Link Web Panel

❗ _*INI PERINGATAN KERAS*_

_*KETENTUAN GARANSI*_
•GARANSI BERLAKU 20HARI SETELAH PEMBELIAN AWAL
•GARANSI DAPAT DI CLAIM JIKA MENGIRIMKAN BUKTI TF DAN BUKTI SS CHAT SAAT OWNER MENGIRIMKAN DATA PANEL

_NOTE_
•GARANSI HANYA BISA DI CLAIM JIKA PANEL EROR SAJA
•GARANSI TIDAK BERLAKU JIKA DATA PANEL ANDA HILANG KARENA ITU KESALAHAN ANDA SENDIRI KARENA TIDAK MENYIMPAN DATA PANEL ANDA


- Garansi 20hari sejak pembelian
- Untuk Info Harga List Panel Ketik *.listpanel*

_*ʜᴀʀᴀᴘ ᴍᴀꜱᴜᴋ ɢʀᴏᴜᴘ ᴡʜᴀᴛꜱᴀᴘᴘ ᴏᴡɴᴇʀ ʏᴀ ᴋᴀᴋ ʙɪᴀʀ ᴅᴀᴘᴀᴛ ɪɴꜰᴏ ᴛᴇʀʙᴀʀᴜ ᴘᴀɴᴇʟ ᴍᴜʀᴍᴇʀ ᴅᴀɴ ᴜᴘᴅᴀᴛᴇ ᴀɴ ꜱᴄʀɪᴘᴛ ᴛᴇʀʙᴀʀᴜ ᴏᴡɴᴇʀ*_

-Admin : 083150418588`,})
        }
            break
        case 'addadmin':{
if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 1) return m.reply(`
> Perintah :\n${_p + command} nomor/tag`);
            //let password
            let u = m.quoted ? m.quoted.sender : t[0] ? t[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
            let dms = nomorwa + "@s.whatsapp.net";

            if (!u) return m.reply(`*Format salah!*

> Perintah : ${_p + command} nomer/tag`);
            let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
            let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
            let password = d.exists ? crypto.randomBytes(3).toString("hex") : t[3]

            let f = await fetch(domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
},
 "body": JSON.stringify({
                    "email": "buyer" + profil.toString() + "@gmail.com", // Email
                    "username": "buyer" + profil.toString(), // Username
                    "first_name": "buyer" + profil.toString(), // Nama Depan
                    "last_name": "buyer", // Nama Belakang
                    "language": "en", // Bahasa
                    "root_admin": true,
                    "password": "vinshop" + password.toString() // Passwo
})
            })
            let data = await f.json();
            if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes

            let p = await conn.reply(m.chat, `
*===[ Sukses Membuat Akun ]===*

Id: ${user.id}
Username: ${user.username}
Detail Dikirim Ke : @${u.split`@`[0]}`, m, { mentions: [u] })
           
            await conn.sendMessage(u, {
                text: `_*[ data admin vinshop ]*_\n
⎙─➤ 🔗 Id: ${user.id}                
⎙─➤ 📓 Username: ${user.username}
⎙─➤ 🔒 Password: vinshop${password}
⎙─➤ 🥀 Status : Admin
⎙─➤ 💻 Speak : Linux
⎙─➤ ⏱️ Aktif : 30Days
⎙─➤ 🌐 Login: ${webPage}
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
_*Ikuti Rules Yg Berlaku*_
`,})

             conn.sendMessage(dms, {
                text: `_*[ data admin vinshop ]*_\n
⎙─➤ 🔗 Id: ${user.id}          
⎙─➤ 💌 milik : @${u.split`@`[0]} 
⎙─➤ 🧾 DiBuat : ${user.created_at}     
⎙─➤ 📓 Username: ${user.username}
⎙─➤ 🔒 Password: vinshop${password}
⎙─➤ 🥀 Status : member
⎙─➤ 💻 Speak : Linux
⎙─➤ ⏱️ Aktif : 30Days
⎙─➤ 🌐 Login: ${webPage}
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
_*Ikuti Rules Yg Berlaku*_
`,})


            conn.sendMessage(u, {
                text: `_*[ Info ]*_\n
Admin Panel By VnShoop Bertanggung jawab Atas Panel Panel Member

_*𝗥𝗨𝗟𝗘𝗦*_
•Dilarang Membuka Server Panel Orang Lain
•Dilarang Menghapus Panel Orang Lain
•Dilarang Mencuri Script Orang Lain
•Dilarang Meng Otak-Atik Server Panel

えKonsekuensi Melanggar
Owner Akan Langsung Menghapus Server Yang Melanggar Dan Tidak Ada Garansi Untuk Itu.

❗ _*INI PERINGATAN KERAS*_

_*KETENTUAN GARANSI*_
•GARANSI BERLAKU 20HARI SETELAH PEMBELIAN AWAL
•GARANSI DAPAT DI CLAIM JIKA MENGIRIMKAN BUKTI TF DAN BUKTI SS CHAT SAAT OWNER MENGIRIMKAN DATA PANEL

_NOTE_
•GARANSI HANYA BISA DI CLAIM JIKA PANEL EROR SAJA
•GARANSI TIDAK BERLAKU JIKA DATA PANEL ANDA HILANG KARENA ITU KESALAHAN ANDA SENDIRI KARENA TIDAK MENYIMPAN DATA PANEL ANDA

• Garansi 20hari sejak pembelian
• Untuk Info Harga List Panel Ketik *.listpanel*

_*ʜᴀʀᴀᴘ ᴍᴀꜱᴜᴋ ɢʀᴏᴜᴘ ᴡʜᴀᴛꜱᴀᴘᴘ ᴏᴡɴᴇʀ ʏᴀ ᴋᴀᴋ ʙɪᴀʀ ᴅᴀᴘᴀᴛ ɪɴꜰᴏ ᴛᴇʀʙᴀʀᴜ ᴘᴀɴᴇʟ ᴍᴜʀᴍᴇʀ ᴅᴀɴ ᴜᴘᴅᴀᴛᴇ ᴀɴ ꜱᴄʀɪᴘᴛ ᴛᴇʀʙᴀʀᴜ ᴏᴡɴᴇʀ*_

_*えOwner Panel:*_ 083150418588`,})
        }
            break
        case "delusr": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let usr = args[0]
            if (!usr) return m.reply("Masukkan ID")
            let f = await fetch(domain + "/api/application/users/" + usr, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            //let res = await f.json()
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return m.reply("*User Tidak Terdaftar*")
            m.reply("*Sukses Menghapus User*")
        }
            break
        case "deladmin": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let usr = args[0]
            if (!usr) return m.reply("Masukkan ID")
            let f = await fetch(domain + "/api/application/users/" + usr, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            //let res = await f.json()
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return m.reply("*Admin Tidak Terdaftar*")
            m.reply("*Sukses Menghapus Admin*")
        }
            break    
        case "detusr": {
            let usr = args[0]
            let f = await fetch(domain + "/api/application/users/" + usr, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = await f.json()
            if (res.errors) return m.reply("*User Tidak Ada*")
            let u = res.attributes
            m.reply(`*${u.username.toUpperCase()} Detail User*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
Username: ${u.username}
Email: ${u.email}
Name: ${u.first_name} ${u.last_name}
Language: ${u.language}
Admin: ${u.root_admin}
Dibuat: ${u.created_at}\`\`\``)
        }
            break       
        case "addsrv": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let s = text.split(",");
            if (s.length < 7) return m.reply(`> Perintah :\n
${_p + command} name,desc,userId,eggId,locId,memory/disk,cpu`)
            let name = s[0];
            let desc = s[1] || ""
            let usr_id = s[2];
            let egg = s[3];
            let loc = s[4];
            let memo_disk = s[5].split`/`;
            let cpu = s[6];

            let f1 = await fetch(domain + "/api/application/nests/6/eggs/" + egg, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let data = await f1.json();
            //console.log(data.attributes.startup)
            let startup_cmd = "${CMD_RUN}"

            let f = await fetch(domain + "/api/application/servers", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                },
                "body": JSON.stringify({
                    "name": name,
                    "description": desc,
                    "user": usr_id,
                    "egg": parseInt(egg),
                    "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                    "startup": startup_cmd,
                    "environment": {
                        "INST": "npm",
                        "USER_UPLOAD": "0",
                        "AUTO_UPDATE": "0",
                        "CMD_RUN": "node index.js"
                    },
                    "limits": {
                        "memory": memo_disk[0],
                        "swap": 0,
                        "disk": memo_disk[1],
                        "io": 500,
                        "cpu": cpu
                    },
                    "feature_limits": {
                        "databases": 0,
                        "backups": 1,
                        "allocations": 0
                    },
                    // "allocation": {
                    //     "default": 36
                    // }
                    deploy: {
                        locations: [parseInt(loc)],
                        dedicated_ip: false,
                        port_range: [],
                    },
                })
            })
            let res = await f.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            let server = res.attributes
            m.reply(`*== [ Info Server Dibuat ] ==*

Type: ${res.object}
ID: ${server.id}
Name: ${server.name}
Description: ${server.description}
Memory: ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory} Mb
Disk: ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk} Mb
Cpu: ${server.limits.cpu}%
Dibuat: ${server.created_at}
Expired: 1 Bulan`)
        }
            break
       case "listusr": {
  if (!isROwner) return global.dfail("rowner", m, conn)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break 
case "listsrv": {
  if (!isROwner) return global.dfail("rowner", m, conn)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + c_apikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break    
        case "delsrv": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let srv = args[0]
            if (!srv) return m.reply("ID nya mana?")
            let f = await fetch(domain + "/api/application/servers/" + srv, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return m.reply("*Server Tidak Ditemukan*")
            m.reply("*Sukses Menghapus Server*")
        }
            break
        case "detsrv": {
            let srv = args[0]
            let f = await fetch(domain + "/api/application/servers/" + srv, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = await f.json();
            if (res.errors) return m.reply("*Server Tidak Ditemukan*")
            let s = res.attributes
            let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + c_apikey
                }
            })
            let data = await f2.json();
            let t = data.attributes
            m.reply(`*${s.name.toUpperCase()} Detail Server*

\`\`\`Status: ${t.current_state}

ID: ${s.id}
UUID: ${s.uuid}
Name: ${s.name}
Desc: ${s.description}
Memory: ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? "Unlimited" : s.limits.memory + "Mb"}
Disk: ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? "Unlimited" : s.limits.disk + "Mb"}
Cpu: ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? "Unlimited" : s.limits.cpu + "%"}
Dibuat: ${s.created_at}\`\`\``)
        }
            break
        case "updatesrv": {
            if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 4) return m.reply(`Perintah :\n
${_p + command} srvId,locId,memory/disk,cpu`)
            let srv = t[0];
            let loc = t[1];
            let memo_disk = t[2].split`/`;
            let cpu = t[3];
            let f1 = await fetch(domain + "/api/application/servers/" + srv, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let data = await f1.json()

            let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
                "method": "PATCH",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "allocation": parseInt(loc) || data.attributes.allocation,
                    "memory": memo_disk[0] || data.attributes.limits.memory,
                    "swap": data.attributes.limits.swap || 0,
                    "disk": memo_disk[1] || data.attributes.limits.disk,
                    "io": 500,
                    "cpu": cpu || data.attributes.limits.cpu,
                    "threads": null,
                    "feature_limits": {
                        "databases": 5,
                        "allocations": 5,
                        "backups": 5
                    }
                })
            })
            let res = await f.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            let server = res.attributes
            m.reply(`*Update Server Info*

Type: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
Name: ${server.name}
Desc: ${server.description}
Memory: ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory} Mb
Disk: ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk} Mb
Cpu: ${server.limits.cpu}%
Dibuat: ${server.created_at}
Diupdate: ${server.updated_at}`)
        }
            break
       case "1gb": {
if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 2) return m.reply(`
> Perintah :\n${_p + command} name/nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "@gmail.com"
let akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
text = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}
○ Tutorial : youtu.be/3s9CLUWjIMI

*JANGAN LUPA SUBSCRIBE YT*
vinwert`
conn.sendMessage(u, {text: `${text}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(m.chat, `*SERVER TELAH DI BUAT✅*

ID USER : ${user.id} 
ID SERVER : ${server.id}
RAM : 1200
DISK : 1200
CPU 30%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`, m, { mentions: [u] })

}
break    
case "2gb": {
if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 2) return m.reply(`
> Perintah :\n${_p + command} name/nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2000"
let cpu = "60"
let disk = "2000"
let email = username + "@gmail.com"
let akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
text = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}
○ Tutorial : youtu.be/3s9CLUWjIMI

*JANGAN LUPA SUBSCRIBE YT*
vinwert`
conn.sendMessage(u, {text: `${text}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(m.chat, `*SERVER TELAH DI BUAT✅*

ID USER : ${user.id} 
ID SERVER : ${server.id}
RAM : 2000
DISK : 2000
CPU 60%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`, m, { mentions: [u] })

}
break     
case "3gb": {
if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 2) return m.reply(`
> Perintah :\n${_p + command} name/nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3000"
let cpu = "90"
let disk = "3000"
let email = username + "@gmail.com"
let akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
text = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}
○ Tutorial : youtu.be/3s9CLUWjIMI

*JANGAN LUPA SUBSCRIBE YT*
vinwert`
conn.sendMessage(u, {text: `${text}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(m.chat, `*SERVER TELAH DI BUAT✅*

ID USER : ${user.id} 
ID SERVER : ${server.id}
RAM : 3000
DISK : 3000
CPU 90%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`, m, { mentions: [u] })

}
break     
case "4gb": {
if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 2) return m.reply(`
> Perintah :\n${_p + command} name/nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4000"
let cpu = "120"
let disk = "4000"
let email = username + "@gmail.com"
let akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
text = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}
○ Tutorial : youtu.be/3s9CLUWjIMI

*JANGAN LUPA SUBSCRIBE YT*
vinwert`
conn.sendMessage(u, {text: `${text}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(m.chat, `*SERVER TELAH DI BUAT✅*

ID USER : ${user.id} 
ID SERVER : ${server.id}
RAM : 4000
DISK : 4000
CPU 120%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`, m, { mentions: [u] })

}
break     
case "5gb": {
if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 2) return m.reply(`
> Perintah :\n${_p + command} name/nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5000"
let cpu = "150"
let disk = "5000"
let email = username + "@gmail.com"
let akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
text = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}
○ Tutorial : youtu.be/3s9CLUWjIMI

*JANGAN LUPA SUBSCRIBE YT*
vinwert`
conn.sendMessage(u, {text: `${text}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(m.chat, `*SERVER TELAH DI BUAT✅*

ID USER : ${user.id} 
ID SERVER : ${server.id}
RAM : 5000
DISK : 5000
CPU 150%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`, m, { mentions: [u] })

}
break    
case "unli": {
if (!isROwner) return global.dfail("rowner", m, conn)
            let t = text.split(",");
            if (t.length < 2) return m.reply(`
> Perintah :\n${_p + command} name/nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
let akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
text = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}
○ Tutorial : youtu.be/3s9CLUWjIMI

*JANGAN LUPA SUBSCRIBE YT*
vinwert`
conn.sendMessage(u, {text: `${text}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await conn.reply(m.chat, `*SERVER TELAH DI BUAT✅*

ID USER : ${user.id} 
ID SERVER : ${server.id}
RAM : unlimited
DISK : unlemeted
CPU unlemeted

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`, m, { mentions: [u] })

}
break     
        case "startsrv": case "stopsrv": case "restartsrv": {
            let action = command.replace("srv", "")
            if (!isROwner) return global.dfail("rowner", m, conn)
            let srv = args[0]
            if (!srv) return m.reply("ID nya mana?")
            let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + c_apikey,
                },
                "body": JSON.stringify({
                    "signal": action
                })
            })

            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
            m.reply(`*Sukses ${action.toUpperCase()} THE SERVER*`)
        }
    }
}

handler.help = ["addusr", "addadmin", "deladmin", "delusr", "listusr", "detusr", "addsrv", "delsrv", "listsrv", "1gb", "2gb", "3gb", "4gb", "5gb", "unli"];
handler.command = ["addusr", "addadmin", "deladmin", "delusr", "listusr", "detusr", "addsrv", "delsrv", "listsrv", "1gb", "2gb", "3gb", "4gb", "5gb", "unli"];
handler.tags = ["pterodactyl"]
handler.owner = true
export default handler