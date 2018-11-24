const Discord = require('discord.js');
const fs = require("fs");
exports.run = (client, message, args) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

let defineduser = message.guild.member(message.mentions.users.first());

  fs.readFile('./Link/cry.txt', 'utf8', function(err, data) {
      if (err) throw err;
      var random = data.split('\n');
      var num = getRandomInt(random.length);
      var url = random[num];

  if(!defineduser) {
    var Embed = new Discord.RichEmbed()
  .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
  .setDescription(`**${message.author.tag}** pleure de tristesse`)
  .setImage(url)
  .setFooter("(╥﹏╥)").setTimestamp();

  message.channel.send(Embed)
  } else {

      var Embed = new Discord.RichEmbed()
  .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
  .setDescription(`**${message.author.tag}** pleure de tristesse à **${message.mentions.users.first().username}**`)
  .setImage(url)
  .setFooter("(╥﹏╥)").setTimestamp();

  message.channel.send(Embed)
  }
});
}

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'cry',
    description: 'Pour pleurer au personne que vous souhaitez',
    usage: 'cry [mention]'
  };
