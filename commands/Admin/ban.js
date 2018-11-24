const Discord = require("discord.js")
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

    if(!args[0]) return message.channel.send(':x: | Tu dois mentionner un utilisateur à ban.\n```\nUtilisation: ' + prefix + "ban <mention>\n```");

    
 const user = message.mentions.users.first();
 if(!user) return message.channel.send(':x: | Tu dois mentionner un utilisateur à ban.\n```\nUtilisation: ' + prefix + "ban <mention>\n```");
  const member = message.guild.member(user) || null;
     if (member) {
      if (member.highestRole.position >= message.member.highestRole.position) 
          message.channel.send('Le membre ciblé a une position plus ou égale a la vôtre au niveau des rôle. Veuillez vérifier les  hauteur de vos rôle puis réessayer si le problème persiste merci de contactez le devellopeur.').then(msg => {msg.delete(5000)})
   }else if (user.id === message.author.id) {
       message.channel.send('Tu ne peux pas faire ca sur toi meme');
       return
    }else{

  if(!message.channel.permissionsFor(message.author).has("BAN_MEMBERS")) return message.channel.send(':x: | Tu n\'as pas les droits.\n```js\nTu dois avoir les droits: "Bannir des membres"\n```');
  if(!message.channel.permissionsFor(client.user).has("BAN_MEMBERS")) return message.channel.send(':x: | Je n\'ai pas les droits.\n```js\nJe dois avoir les droits: "Bannir des membres"\n```');

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send(":x: | Je ne trouve pas cette utilisateur.");
  let bReason = args.join(" ").slice(22);
  if (bUser.highestRole.position >= message.member.highestRole.position) return message.channel.send(":x: | Tu ne peux pas le ban, cette utilisateur est au dessus de toi.");

  message.channel.send(`:white_check_mark: | **<@${bUser.id}>** a été ban avec succès !`);
  message.guild.member(bUser).ban(bReason);
  }
} catch(err) {
  console.error(err);
  return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste.');
};

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['b'],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'Ban l\'utilisateur mentionné',
  usage: 'ban <mention>'
};
