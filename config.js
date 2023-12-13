import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

//===={Welcome to script by vnshoop}======//

//======≠====Owner======≠=====≠≠==≠//
global.owner = [
['6283150418588', 'VnShop', true],
]
global.mods = []
global.prems = []
//==========Info=========≈========//
global.nomorwa = '6283150418588'
global.packname = '© Sticker by'
global.author = 'VnShoop'
global.namebot = 'VnShop'
global.wm = '© VnShop'
global.stickpack = '© VnShop'
global.stickauth = 'VnShop'
global.fotonya = 'https://telegra.ph/file/86d1346d2de92ef732ae6.jpg'
global.fotonya2 = `https://telegra.ph/file/86d1346d2de92ef732ae6.jpg`
//===≠≠≈===Global sosmed=============≠==//
global.sig = 'https://instagram.com/unknopin'
global.syt = 'https://youtube.com/@vinwert'
global.sgh = 'https://github.com/alvinpin'
global.sgc = 'https://chat.whatsapp.com/BkdLVSrEZa4EviQ7COGnpT'
//============Donasi&payment=========//
global.psaweria = '-'
global.ptrakterr = '-'
global.pdana = '0821-8078-6508'
//=============Info wait tunggu========//
global.wait = '_MEMPROSES_'
global.eror = '_Terjadi Kesalahan Coba Lagi Nanti_!'
global.multiplier = 69 
//======≠=======Global Apikey===========//
global.lol = 'haikalgans'
global.rose = 'Rs-Zeltoria'
global.xyro = 'isi apikey mu'
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}
//=============Global Apikey============//
global.APIKeys = {
    "https://api.xyroinee.xyz": "apikeymu", 
}
//============Jngan Di Ubah===========//
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
