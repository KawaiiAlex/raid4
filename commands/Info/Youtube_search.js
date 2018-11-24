const Discord = require('discord.js');
exports.run = (client, message) => {

  try {

let args = message.content.split(' ')
           args.shift ()
           var YTembed = new Discord.RichEmbed()
           .setColor(Math.floor(Math.random() * 16777214) + 1)
           .addField("Voici le résultat de votre recherche:", "https://www.youtube.com/results?search_query=" + args.join('+'))
           .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
           message.channel.send(YTembed)
  } catch(err) {
    console.error(err)
    return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste')
  };
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'youtube_search',
    description: 'Faîte n\'importe qu\'elle recherche de vidéo youtube facilement',
    usage: 'youtube_search <recherche>',
    usage2: 'youtube <recherche>'
  };