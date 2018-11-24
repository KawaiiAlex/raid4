const Discord = require("discord.js")
exports.run = (client, message, args) => {

  try {
  
  let definedNumber = message.content.substring(6);

if(!definedNumber) {
  let result = Math.floor((Math.random() * 100) + 1);
  message.channel.send(":white_check_mark: **|** Tu as obtenu le nombre **" + result + "**");
} else {

  let result = Math.floor((Math.random() * definedNumber) + 1);
  message.channel.send(":white_check_mark: **|** Tu as obtenu le nombre **" + result + "**");
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
    name: 'roll',
    description: 'Donne un nombre aléatoire',
    usage: 'roll',
    usage2: 'roll <nombre>'
  };
