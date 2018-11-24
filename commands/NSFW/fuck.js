const randomPuppy = require('random-puppy');

const Discord = require('discord.js');


exports.run = (client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send(":underage: **|** Ce n'est pas un channel nsfw ¯\_(͡° ͜ʖ ͡°)_/¯")
    var text = message.content.substring(6)

    if(message.author.bot) return;
    if(message.channel.type !=="text") return;
    
     randomPuppy('anal_gifs','porn_gifs','creampiegifs','cumcoveredfucking','homemadexxx')
    .then(url => {
                  const embed = new Discord.RichEmbed()
                      .setTimestamp()
                      .setImage(url)
                      .setColor(Math.floor(Math.random() * 16777214) + 1)
                      .setFooter("(͡° ͜ʖ ͡°)").setTimestamp();
                      message.channel.send(`<@${message.author.id}> baise ${text}`)
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
    name: 'fuck',
    description: 'Envoie une image aléatoire de pénis',
    usage: 'fuck'
  };