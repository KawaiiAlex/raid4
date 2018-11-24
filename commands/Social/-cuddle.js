const Discord = require('discord.js');
const cuddle = require("nekos.life")
exports.run = (client, message, args) => {
  const neko = new cuddle();

  let defineduser = message.guild.member(message.mentions.users.first());

      if(!defineduser){
        neko.getSFWCuddle().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** réconforte **${client.user.username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"(っ˘з(˘⌣˘ )"
      }
      }}))
      } else {
        neko.getSFWCuddle().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** réconforte **${message.mentions.users.first().username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"(っ˘з(˘⌣˘ )"
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
    name: 'cuddle',
    description: 'Pour réconforter les personnes que vous souhaitez',
    usage: 'cuddle [mention]'
  };