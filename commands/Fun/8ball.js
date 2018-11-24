const Discord = require("discord.js")
const fs = require("fs")
const config = require('../../config.json')
exports.run = (client, message, args) => {

  try {

   let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: config.prefix
      };
    }
    let prefix = prefixes[message.guild.id].prefixes;

  if(!args[0]) return message.channel.send(':x: | Tu dois poser une question.\n```\nUtilisation: ' + prefix + "8ball <question>\n```");


  var rand =  Math.floor(Math.random() * NUM_ANS);


  message.channel.send(`:8ball: | ${m8ball[rand].reply}, **${message.author.username}**`);

} catch(err) {
  console.error(err);
  return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste');
};

}


const NUM_ANS = 19;
// 8ball
var m8ball = [
  {reply:'C\'est certain'},
  {reply:'Sans aucun doute'},
  {reply:'Oui définitivement'},
  {reply:'Vous pouvez compter sur lui'},
  {reply:'Comme je le vois, oui'},
  {reply:'Problamement'},
  {reply:'Les perspectives sont bonnes'},
  {reply:'Oui'},
  {reply:'Je n\'ai pas compris, essayez à nouveau'},
  {reply:'Demande moi à nouveau plus tard'},
  {reply:'Mieux vaut ne pas vous le dire maintenant'},
  {reply:'Je ne peux pas le dire maintenant'},
  {reply:'Concentrez-vous et demandez moi à nouveau'},
  {reply:"Ne compte pas sur lui"},
  {reply:'Ma réponse est non'},
  {reply:'Mes sources disent non'},
  {reply:'Les perspectives ne sont pas si bonnes'},
  {reply:'Très douteux'},
  {reply:'Non'}
];

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Le bot répond au question que vous lui posez',
  usage: '8ball <question>'
};
