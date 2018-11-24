const Discord = require('discord.js');
const hug = require("nekos.life")
exports.run = (client, message, args) => {
  const neko = new hug();

  let defineduser = message.guild.member(message.mentions.users.first());

      if(!defineduser){
        neko.getSFWHug().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** nourrit **${client.user.username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"(* ˘⌣˘)◞🍑🍌🍩ヽ(•‿• )"
      }
      }}))
      } else {
        neko.getSFWHug().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** nourrit **${message.mentions.users.first().username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"(* ˘⌣˘)◞🍑🍌🍩ヽ(•‿• )"
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
    name: 'feed',
    description: 'Pour nourrir les personne que vous souhaitez',
    usage: 'feed [mention]'
  };