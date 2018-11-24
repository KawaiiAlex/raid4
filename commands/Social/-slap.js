const Discord = require('discord.js');
const slap = require("nekos.life")
exports.run = (client, message, args) => {
  const neko = new slap();

  let defineduser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      if(!defineduser){
        neko.getSFWSlap().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** met une claque à **${client.user.username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"(◣_◢)ノ"
      }
      }}))
      } else {
        neko.getSFWSlap().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** met une claque à **${message.mentions.users.first().username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"(◣_◢)ノ"
      }
      }}))
      }
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'slap',
    description: 'Pour faire des claques au personne que vous souhaitez',
    usage: 'slap [mention]'
  };