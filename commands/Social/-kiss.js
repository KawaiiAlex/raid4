const Discord = require('discord.js');
const kiss = require("nekos.life")
exports.run = (client, message, args) => {
  const neko = new kiss();

  let defineduser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      if(!defineduser){
        neko.getSFWKiss().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** fait un bisous à **${client.user.username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"( ˘ ³˘)❤"
      }
      }}))
      } else {
        neko.getSFWKiss().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** fait un bisous à **${message.mentions.users.first().username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"( ˘ ³˘)❤"
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
    name: 'kiss',
    description: 'Pour faire des kiss au personne que vous souhaitez',
    usage: 'kiss [mention]'
  };
