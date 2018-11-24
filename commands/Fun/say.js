const Discord = require("discord.js")
exports.run = (client, message, args) => {

  try {

if(!args[0]){
  message.channel.send(':x: | Veuillez spécifier un mot/phrase.\n```\nUtilisation: ' + prefix + "say <mot/phrase>\n```");

} else {
  message.channel.bulkDelete(1);
  message.channel.send(args.join(" "));
}

} catch(err) {
  console.error(err);
  return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste');
};
 
 }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'say',
    description: 'Répète tout ce que vous dîtes',
    usage: 'say <mot/phrase>'
  };