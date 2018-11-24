const Discord = require('discord.js');
exports.run = (client, message) => {

  try {

let args = message.content.split(' ');
   		args.shift ();
   		message.channel.send ("Voici le résultat de votre recherche: https://www.google.fr/#q=" +args.join('%20'));
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
    name: 'google',
    description: 'Faîte n\'importe qu\'elle recherche google facilement et rapidement.',
    usage: 'google <recherche>'
  };