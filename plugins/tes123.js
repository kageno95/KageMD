let handler = async (m) => {

let anu =`*BOT AKTIF KAK*
*KETIK* .menu *UNTUK MELIHAT MENU*`
await m.reply(anu)
}
handler.customPrefix = /^(tes|bot|elaina|test)$/i
handler.command = new RegExp
export default handler
