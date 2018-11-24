const Discord = require('discord.js');
const fs = require("fs");

exports.run = async (client, message, args) => {
try{
const user = message.mentions.users.first();
 if(!user) return message.channel.send(':x: | Tu dois mentionner un utilisateur à ban.\n```\nUtilisation: ' + prefix + "unmute <mention>'\n```");
  const member = message.guild.member(user) || null;
     if (member) {
      if (member.highestRole.position >= message.member.highestRole.position) 
          message.channel.send('Le membre ciblé a une position plus ou égale a la vôtre au niveau des rôle. Veuillez vérifier les  hauteur de vos rôle puis réessayer si le problème persiste merci de contactez le devellopeur.').then(msg => {msg.delete(5000)})
   }else if (user.id === message.author.id) {
       message.channel.send('Tu ne peux pas faire ca sur toi meme');
       return
    }else{

  const muteRole = message.guild.roles.find(`name`, "mute");

  if(!message.channel.permissionsFor(message.author).has("MANAGE_ROLES")) return message.channel.send(':x: | Tu n\'as pas les droits.\nTu dois avoir les droits: "Gérer les rôles"\n```');
  if(!message.channel.permissionsFor(client.user).has("MANAGE_ROLES")) return message.channel.send(':x: | Je n\'ai pas les droits.\nTu dois avoir les droits: "Gérer les rôles"\n```');
  if(!user) return message.channel.send(":x: | Je ne trouve pas cette utilisateur");
  if (!message.guild.member(user).roles.has(muteRole.id)) return message.channel.send(":x: | L'utilisateur n'est pas mute.")

      message.guild.member(user).removeRole(muteRole)
      message.react("💯")
      message.channel.send(`**${client.users.get(user.id).tag}** est unmute !`)
}
  } catch(err) {
    console.error(err)
    return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste.')
  };
  };



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unmute',
  description: 'Unmute l\'utilisateur mentionné',
  usage: 'unmute <mention>'
};