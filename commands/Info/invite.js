const Discord = require('discord.js');
exports.run = (client, message) => {

        var PingEmbed = new Discord.RichEmbed()
.setColor(Math.floor(Math.random() * 16777214) + 1)
.addField("Cliquer sur le lien ci dessous pour m'ajouter", "https://discordapp.com/oauth2/authorize?client_id=451810440843100170&scope=bot&permissions=2146958591%22")
.setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

message.channel.send(PingEmbed);

}
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['invitation'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'invite',
    description: 'Donne le lien pour m\'ajouter sur le serv de votre choix',
    usage: 'invite'
  };
