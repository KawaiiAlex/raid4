const Discord = require('discord.js');

exports.run = async (client, message) => {

  var ListEmbed = new Discord.RichEmbed ()
  .setTitle("Liste des emotes du serveur **" + message.guild.name + "**")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setDescription(" \n\n" + message.guild.roles.map(r => r.name.toString()).join(", "))

message.channel.send(ListEmbed);
};
  
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['listR'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'listrole',
    description: 'Je vous donne tout les roles du serveur.',
    usage: 'listrole'
  };