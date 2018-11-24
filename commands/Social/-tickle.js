const Discord = require('discord.js');
const tickle = require("nekos.life")
exports.run = (client, message, args) => {
  const neko = new tickle();

  let defineduser = message.guild.member(message.mentions.users.first());

      if(!defineduser){
        neko.getSFWTickle().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** chatouille **${client.user.username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"♥(ˆ⌣ˆԅ)"
      }
      }}))
      } else {
        neko.getSFWTickle().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** chatouille **${message.mentions.users.first().username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"♥(ˆ⌣ˆԅ)"
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
    name: 'tickle',
    description: 'Pour faire des chatouilles au personne que vous souhaitez',
    usage: 'tickle [mention]'
  };