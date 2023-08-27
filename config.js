// Script Gratis Jangan Dj Jual

// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.org
//https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja

global.owner = ['6285936162097']  
global.mods = [''] 
global.prems = ['']
global.nameowner = 'haris'
global.numberowner = '6285936162097' 
global.mail = 'mohammaddanu896@gmail.com' 
global.dana = '-'
global.pulsa = '-'
global.gopay = '-'
global.namebot = 'elaina'
global.gc = 'https://chat.whatsapp.com/Ig5fzfk773h4o4BFvtWSGg'
global.web = 'https://youtube.com/@haris.m'
global.instagram = 'soon'
global.wm = 'elaina-bot'
global.watermark = wm
global.wm2 = '⫹⫺ elaona'
global.wm3 = '© elaina'
global.wm4 = 'made by haris'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp'

//---- image thumbnail 
global.thumb = 'https://telegra.ph/file/a21a5f4456ddb608546f3.jpg'

//===> Apikey
global.lann = '767ZjsID' //isi apikey mu https://api.betabotz.org
global.btc = 'OiWYUqjm'//Isi apikey di https://api.botcahx.live
global.APIs = {   
  lann: '767ZjsID',
  btc: 'OiWYUqjm'
}
global.APIKeys = { 
  '767ZjsID': 'YEjQsJHN' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
