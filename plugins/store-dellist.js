let handler = async (m, { text, usedPrefix, command }) => {
	if (!text) throw "Gunakan *" + usedPrefix + "liststore* Untuk Melihat Daftar Store Yang Tersimpan."
	let msgs = global.db.data.msgs
	if (!(text in msgs)) throw "[ " + text + " ] Tidak Terdaftar Di Daftar List."
	delete msgs[text]
  throw "Berhasil Menghapus Pesan Di Daftar List Dengan Nama >\n" + text
}
handler.help = ["dellist"]
handler.tags = ["store"]
handler.command = ["dellist"]
handler.admin = true
export default handler