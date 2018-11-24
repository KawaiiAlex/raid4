const Discord = require('discord.js');
const fs = require("fs");
exports.run = (client, message, args) => {

  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
    
  fs.readFile('./Link/punch.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var random = data.split('\n');
    var num = getRandomInt(random.length);
    var url = random[num];

    let defineduser = message.guild.member(message.mentions.users.first());

    if(!defineduser) {
    
      var PunchEmbed = new Discord.RichEmbed()
      .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
      .setDescription(`**${message.author.tag}** frappe **${client.user.tag}**`)
      .setImage(url)
      .setFooter("(◣_◢)ノ").setTimestamp();
  
      message.channel.send(PunchEmbed)

    } else {

    var PunchEmbed = new Discord.RichEmbed()
    .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
    .setDescription(`**${message.author.tag}** frappe **${message.mentions.users.first().username}**`)
    .setImage(url)
    .setFooter("(◣_◢)ノ").setTimestamp();

    message.channel.send(PunchEmbed)
    }
  });
}
const NUM_PUNCH = 7;
// Hug Gifs
var punch = [
{link:'https://cdn.weeb.sh/images/HJfGPTWbf.gif'},
{link:'https://78.media.tumblr.com/f0032ce15e4ded204b83b00c764a52ad/tumblr_olcckgOtiA1qzxv73o1_r4_500.gif'},
{link:'http://media.giphy.com/media/11zD6xIdX4UOfS/giphy.gif'},
{link:'https://media.tenor.co/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif'},
{link:'https://media.tenor.co/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif'},
{link:'http://www.videovortex.evan-roth.com/gifs2/Punch-Anime.gif'},
{link:'http://gph.is/15zjo9x'}
];
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'punch',
    description: 'Pour frapper les gens que vous aimez pas',
    usage: 'punch [mention]'
  };