const Discord = require('discord.js');
const poke = require("nekos.life")
exports.run = (client, message, args) => {
  const neko = new poke();

  let defineduser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      if(!defineduser){
        neko.getSFWPoke().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** touche **${client.user.username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"(╭☞ ͡ ͡°͜ ʖ ͡ ͡°)╭☞"
      }
      }}))
      } else {
        neko.getSFWPoke().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`**${message.author.username}** touche **${message.mentions.users.first().username}**`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
          icon_url:message.author.avatarURL,
          text:"(╭☞ ͡ ͡°͜ ʖ ͡ ͡°)╭☞"
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
    name: 'poke',
    description: 'Pour toucher les personnes que vous souhaitez',
    usage: 'poke [mention]'
  };