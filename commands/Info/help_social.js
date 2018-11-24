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


    var HelpEmbed = new Discord.RichEmbed()
    //.setImage("https://cdn.discordapp.com/attachments/460481085923393557/485476451643293706/HELP_OCHAKO.png")
    .setTitle(`Utilise ${prefix}help <commande> pour les infos de la commande`)
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setDescription("**Liste des commandes social**")
    .addField("Action", "`cry`, `kiss`, `punch`, `pout`, `pat`, `hug`, `cuddle`, `feed`, `poke`, `tickle`, `slap`")
    .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

    message.channel.send(HelpEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hs', 'helpsocial'],
  permLevel: 0
};

exports.help = {
  name: 'help_social',
  description: 'Montre tout les commandes fun du bot',
  usage: 'help_social'
};