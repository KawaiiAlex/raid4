const Discord = require('discord.js');
const pat = require("nekos.life")
exports.run = (client, message, args) => {
  const neko = new pat();

  let defineduser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      if(!defineduser){
        neko.getSFWPat().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** caresse **${client.user.username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"ヘ( ^o^)ノ(^_^ )"
      }
      }}))
      } else {
        neko.getSFWPat().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** caresse **${message.mentions.users.first().username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"ヘ( ^o^)ノ(^_^ )"
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
    name: 'pat',
    description: 'Pour faire des pat au personne que vous souhaitez',
    usage: 'pat [mention]'
  };
