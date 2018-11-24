const Discord = require('discord.js');

exports.run = async (client, message) => {

  var ListEmbed = new Discord.RichEmbed ()
  .setTitle("Liste des emotes du serveur **" + message.guild.name + "**")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setDescription("󠂪󠂪󠂪󠂪󠂪󠂪 󠂪󠂪󠂪󠂪󠂪󠂪󠂪󠂪󠂪󠂪󠂪󠂪\n" + message.guild.emojis.map(e => e.toString()).join(" "))

message.channel.send(ListEmbed);
                     };
  
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['listE'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'listemote',
    description: 'Je vous donne tout les emotes du serveur.',
    usage: 'listemote'
  };