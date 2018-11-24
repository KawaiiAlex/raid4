const Discord = require('discord.js');
const fs = require("fs");
const config = require('../../config.json')
exports.run = (client, message, params) => {

  try {
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
    if (!message.channel.nsfw) {
    var HelpEmbed = new Discord.RichEmbed()
   // .setImage("https://cdn.discordapp.com/attachments/460481085923393557/485476451643293706/HELP_OCHAKO.png")
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setTitle("**Liste des catégories de commandes**")
    .setDescription("Utilise `" + prefix + "help_<catégorie>` pour avoir accès au commande spécifique !")
    .addField("**Catégories**", `**${prefix}help_mod** (Commande de modération)\n**${prefix}help_info** (Commande informative)\n**${prefix}help_fun** (Commande de jeux)\n**${prefix}help_social** (Commande d'action)`)
    .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()


    message.channel.send(HelpEmbed);
    } else {
      var HelpEmbed2 = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/460481085923393557/485476451643293706/HELP_OCHAKO.png")
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setTitle("**Liste des catégories de commandes**")
    .setDescription("Utilise `" + prefix + "help_<catégorie>` pour avoir accès au commande spécifique !")
    .addField("**Catégories**", `**${prefix}help_mod** (Commande de modération)\n**${prefix}help_info** (Commande informative)\n**${prefix}help_fun** (Commande de jeux)\n**${prefix}help_social** (Commande d'action)\n**${prefix}help_nsfw** (Commande pornographique)`)
    .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

    message.channel.send(HelpEmbed2);
    }

  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      var HelpEmbed3 = new Discord.RichEmbed()
      .setTitle(`Commande: ${command.help.name}`)
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .setDescription("**Description**: " + command.help.description + "\n**Rappel**: Les \"<>\" ne sont pas à utiliser lors de l'éxecution de la commande.")
      .addField("**Utilisation**:", `${command.help.usage2 ? `${prefix+command.help.usage}\n${prefix+command.help.usage2}` : `${prefix+command.help.usage}`} `)
      .addField("**Aliase**:", `${command.conf.aliases.join(", ")}` || "Il n'y a pas d'aliase.")
      .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
      message.channel.send(HelpEmbed3);
    }
  }
} catch(err) {
  console.error(err);
  return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste');
};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'aide'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Montre tout les commandes existantes sur le bot',
  usage: 'help [command]'
};
