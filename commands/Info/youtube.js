const Discord = require('discord.js');

exports.run = (client, message, args) => {

  try {

  var search = require('youtube-search');  
  var opts = {
      maxResults: 10,
      key: 'AIzaSyAMUb97f6NGghZNyEAzPKVPBJkmIXWSLgU'
    };

    search(args[0], opts, function(err, results) {
      if(err) return message.channel.send("Erreur suite à cette recherche");
      var YtEmbed = new Discord.RichEmbed()
.setColor(Math.floor(Math.random() * 16777214) + 1)
.addField("Résultat de la recherche pour **" + args[0] + "**", `**${results[0].title}**\n${results[0].link}`)
.setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

message.channel.send(YtEmbed)


    })
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
    name: 'youtube',
    description: 'Faîte n\'importe qu\'elle recherche de vidéo youtube facilement',
    usage: 'youtube <recherche>',
    usage2: 'youtube_search <recherche>'
  };