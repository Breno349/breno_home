console.log("Initing Script...")
/*const { 
default: makeWASocket,
makeInMemoryStore,
useSingleFileAuthState, 
DisconnectReason,
downloadContentFromMessage,
delay
} = require("@adiwajshing/baileys")
const fs = require("fs")
const P = require("pino")
const speed = require("performance-now")
const axios = require('axios')
const chalk = require("chalk")
const yts = require('yt-search')
const mimetype = require('mime-types')
const { fromBuffer } = require("file-type")
var txtomp3 = require("text-to-mp3");

prefixo = "."
nomeBot = "Brenoko"

async function LigarBot () {
const store = makeInMemoryStore({ logger: P().child({ level: "debug", stream: "store" }) })
const { state, saveState } = useSingleFileAuthState("./QRCODE.json")
console.log("...")
const web = makeWASocket({
logger: P({ level: "silent" }),
browser: ['BOT_RENO', 'Safari', '1.0.0'],
printQRInTerminal: true,
auth: state
})
  web.ev.on ("creds.update", saveState)
store.bind(web.ev)
  web.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect } = update
        if(connection === 'close') {
            const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
            console.log('connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect)
            // reconnect if not logged out
            if(shouldReconnect) {
                LigarBot()
            }
        } else if(connection === 'open') {
            console.log('🌍🌍 CONECTADO! 🌎🌏')
            
        }
  })
  atentar = {atv: false, step: 0, quem: "", quantas: 0, body: ""}
  web.ev.on('messages.upsert',async m => {
     try {
         const info = m.messages[0];
         if(info.status == 1) return
         if(!info.message) return
         await web.readMessages([info.key])
         const from = info.key.remoteJid
         console.log("\t"+JSON.stringify(info))
         const name = info.pushName
         const msg = info.message
         const group = from.endsWith("@g.us")
         if(!group){
           const type = msg.extendedTextMessage ? "text" : msg.imageMessage ? "image" : msg.videoMessage ? "video" : msg.stickerMessage ? "fig" : msg.audioMessage ? "audio" : ""
         const enviarTxt = (tc) => {
web.sendMessage(from, {text: tc}, {quoted: info})
         }
         const enviarImg = (ur, tx) => {
web.sendMessage(from, {image: {url: ur}, caption: tx}, {quoted: info})
         }
         const enviarAud = (ur) => {
web.sendMessage(from, {audio: {url: ur, mimetype: "audio/mp3; codecs=opus", ptt: true, fileLength: 4700}}, {quoted: info})
         }
         enviarAud("/storage/emulated/0/site/FileName.mp3")
         const showMenu = () => {
            const opt = "NOME: "+nomeBot+"\n"
            +"<<<<<<<>>>>>>\n"
            +" Commands:\n"
            +"  .menu\n"
            +"  .atentar\n"
            +"<<<<<<>>>>>>>\n";
            enviarImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlNXPRDdHlwkW3B_kpyO6d-EQx_FMY3WJuop76pRnzrC-XFJy7RBvnDoU&s=10", opt)
         }
           const msgr = (type === "text") ? msg.extendedTextMessage.text: ""
           if(!msgr || msgr === "") return
            console.log("geting text, "+msgr)
           if(msgr.startsWith(prefixo)){
              cmd = msgr.replace(prefixo, '')
              if(cmd.startsWith("menu")){
                 showMenu()
              } else if(cmd.startsWith("atentar")){
                 atentar.atv = !atentar.atv
              } else if(cmd.startsWith("voz")){
                 var arg = cmd.substring(4)
                 if(arg){
                   txtomp3.saveMP3("Ciao Mondo", "FileName").then(function(absoluteFilePath){ 
                       console.log("File saved :", absoluteFilePath);
                       enviarAud(absoluteFilePath)
                       enviarTxt("Enviado.")
                   })
                   .catch(function(err){
                    console.log("Error", err);
                   });
                 }
              } else {
                 enviarTxt("Comando not found")
              }
           }
           if(atentar['atv'] === true){
              switch(atentar['step']){
                 case 0:
                    enviarTxt("Enviar para qual numero?")
                    atentar.step++
                 break;
                 case 1:
                    atentar.quem = msgr
                    enviarTxt("Quantas mensagens?")
                    atentar.step++
                 break;
                 case 2:
                    var num = parseInt(msgr)
                       atentar.quantas = num
                    enviarTxt("O que quer mandar?")
                    atentar.step++
                 break;
                 case 3:
                    atentar.body = msgr
                    atentar.step++
                    enviarTxt("Enviando "+atentar.quantas+" "+atentar.body+" para "+atentar.quem)
                    var i = 0
                    while(i < atentar.quantas){
                      const fron = "55"+atentar.quem+"@s.whatsapp.net"
                      web.sendMessage(fron, {text: atentar.body})
                      i++
                    }
                    atentar.step = 0
                    atentar.quem = ""
                    atentar.quantas = 0
                    atentar.body = ""
                    atentar.atv = false
                    enviarTxt("Acabou kkkk")
                 break;
              }
           }
         }
     } catch (err){
        console.log(err)
     }
  })
}
LigarBot()*/
console.log("Finaly")
