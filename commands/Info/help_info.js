const Discord = require('discord.js');
const fs = require("fs");
const config = require('../../config.json')
exports.run = (client, message, params) => {
  if (message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes;

  fs.readdir('./commands/Info/', (err, filesinfo) => {
    if (err) console.error(err);
     

    var HelpEmbed = new Discord.RichEmbed()
    .setTitle(`Liste des commandes de la catégorie info`)
    .setDescription(`(Il y a un total de **${filesinfo.length}** commandes dans cette catégorie)\n\nUtilise **${prefix}help <commande>** pour plus d'infos sur une commande`)
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .addField("Info", "`help`, `botinfo`, `serverinfo`, `userinfo`, `ping`, `invite`, `listemote`, `listrole`")
    .addField("Recherche", "`weather`, `google`, `youtube`")
    .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

    message.channel.send(HelpEmbed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hi', 'helpinfo'],
  permLevel: 0
};

exports.help = {
  name: 'help_info',
  description: 'Montre tout les commandes fun du bot',
  usage: 'help_info'
};