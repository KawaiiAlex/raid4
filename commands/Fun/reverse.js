const Discord = require('discord.js');
const fs = require("fs")
const config = require('../../config.json')

exports.run = (client, message, args) => {

  try {

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
     if(!prefixes[message.guild.id]){
       prefixes[message.guild.id] = {
         prefixes: config.prefix
       };
     }
     let prefix = prefixes[message.guild.id].prefixes;
 
  
  if (args.length < 1) {
    message.channel.send(':x: | Tu dois entrer un texte à inverser.\n```\nUtilisation: ' + prefix + "reverse <mot/phrase>\n```");
    return;
}


var text = message.content.substring(10);

  message.channel.send(`Inversion de \"${text}\"...`, {code:'js'}).then(msg => {msg.delete(3000)});
  message.channel.send(`**${message.author.tag}**, ${args.join(' ').split('').reverse().join('')}`);
 } catch(err) {
  console.error(err);
  return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste');
};
};

      exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['inverse'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'reverse',
        description: 'Inverse le message que vous voulez',
        usage: 'reverse <mot/phrase>'
      };
