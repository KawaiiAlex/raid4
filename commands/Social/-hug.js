const Discord = require('discord.js');
const hug = require("nekos.life")
exports.run = (client, message, args) => {
  const neko = new hug();

  let defineduser = message.guild.member(message.mentions.users.first());

      if(!defineduser){
        neko.getSFWHug().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** câline **${client.user.username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"(っ◔◡◔)っ ♥"
      }
      }}))
      } else {
        neko.getSFWHug().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** câline **${message.mentions.users.first().username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"(っ◔◡◔)っ ♥"
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
    name: 'hug',
    description: 'Pour faire des calîns au personne que vous souhaitez',
    usage: 'hug [mention]'
  };
