txt.innerText = "Inicializado."
try {
  import makeWASocket from "./node_modules/@adiwajshing/baileys"
  txt.innerText = "importado zequinha doida."
} catch (err){
  txt.innerText = "Erro: "+err;
}
