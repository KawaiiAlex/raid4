const randomPuppy = require('random-puppy');

const Discord = require('discord.js');


exports.run = (client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send(":underage: **|** Ce n'est pas un channel nsfw ¯\_(͡° ͜ʖ ͡°)_/¯")

    if(message.author.bot) return;
    if(message.channel.type !=="text") return;
    
     randomPuppy("NSFW_GIF",
     'nsfw_gifs',
     'porninfifteenseconds',
     '60FPSPorn',
     'porn_gifs',
     'nsfw_Best_Porn_Gif',
     'LipsThatGrip',
     'adultgifs')
    .then(url => {
                  const embed = new Discord.RichEmbed()
                      .setTimestamp()
                      .setImage(url)
                      .setColor(Math.floor(Math.random() * 16777214) + 1)
                      .setFooter("(͡° ͜ʖ ͡°)").setTimestamp();
                       message.channel.send({ embed });
    })

  }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'gif',
    description: 'Envoie un gif aléatoire de porno',
    usage: 'gif'
  };