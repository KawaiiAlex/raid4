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
  if (!params[0]) {
    var HelpEmbed = new Discord.RichEmbed()
    .setTitle(`Utilise ${prefix}helpInfo <commande> pour les infos de la commande`)
    .setColor("#689AFB")
    .addField("Liste des commandes information", "botinfo\ngoogle\nhelp\nhelpinfo\ninvite\nOtaku\nping\nservinfo\ntime\nuserinfo\nweather\nyoutube")
    .setFooter("๖̶̶̶ζ͜͡Bot par Kawaii Alex ͜͡ζ̶̶̶๖", client.users.get('281125214098685954').displayAvatarURL);

    message.channel.send(HelpEmbed)

  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      var HelpEmbed2 = new Discord.RichEmbed()
      .setTitle(`Commande: ${command.help.name}`)
      .setColor("#689AFB")
      .addField("__Description__:", command.help.description)
      .addField("__Utilisation__:", prefix+command.help.usage)
      .addField("__Aliase__:", command.conf.aliases)
      message.channel.send(HelpEmbed2);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hi', 'aidei', 'helpinfo'],
  permLevel: 0
};

exports.help = {
  name: 'helpInfo',
  description: 'Montre tout les commandes existantes sur le bot',
  usage: 'helpInfo [command]'
};
