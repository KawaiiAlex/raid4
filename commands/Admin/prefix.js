const Discord = require("discord.js");
const fs = require("fs");
const config = require('../../config.json')
exports.run = async (client, message, args) => {

  try {

    
   let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
   if(!prefixes[message.guild.id]){
     prefixes[message.guild.id] = {
       prefixes: config.prefix
     };
   }
   let prefix = prefixes[message.guild.id].prefixes;
  
  if(!args[0]) return message.channel.send(":x: | Tu dois définir un préfix.\n```\nUtilisation: " + prefix + "prefix <nouveau prefix>\n```");
  if(!message.channel.permissionsFor(message.author).has("ADMINISTRATOR"))  return message.channel.send(':x: | Tu n\'as pas les droits.\n```js\nTu dois avoir les droits: "Administrateur"\n```');

    prefixes[message.guild.id] = {
      prefixes: args[0]
    };



    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err)
    });



    let sEmbed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setTitle("Préfix mis !")
    .setDescription(`Nouveau préfix: **${args[0]}**`);

    message.channel.send(sEmbed);

  } catch(err) {
    console.error(err);
    return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste.');
  }

  }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pre'],
    permLevel: 0
  };

  exports.help = {
    name: 'prefix',
    description: 'Change le prefix du bot',
    usage: 'prefix <nouveau prefix>'
  };
