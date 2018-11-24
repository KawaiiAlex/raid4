const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs");
const config = require('../../config.json')
exports.run = async (client, message, args) => {

  try {

const user = message.mentions.users.first();
 if(!user) return message.channel.send(':x: | Tu dois mentionner un utilisateur à ban.\n```\nUtilisation: ' + prefix + "tempmute <mention> <durée>'\n```");
  const member = message.guild.member(user) || null;
     if (member) {
      if (member.highestRole.position >= message.member.highestRole.position) 
          message.channel.send('Le membre ciblé a une position plus ou égale a la vôtre au niveau des rôle. Veuillez vérifier les  hauteur de vos rôle puis réessayer si le problème persiste merci de contactez le devellopeur.').then(msg => {msg.delete(5000)})
   }else if (user.id === message.author.id) {
       message.channel.send('Tu ne peux pas faire ca sur toi meme');
       return
    }else{

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

 if(!message.channel.permissionsFor(message.author).has("MANAGE_ROLES")) return message.channel.send(':x: | Tu n\'as pas les droits.\n```js\nTu dois avoir les droits: "Gérer les rôles"\n```');
  if(!message.channel.permissionsFor(client.user).has("MANAGE_ROLES")) return message.channel.send(':x: | Je n\'ai pas les droits.\n```js\nTu dois avoir les droits: "Gérer les rôles"\n```');

  if(!args[0]) return message.channel.send(":x: | Veuillez mentionnez un utilisateur.")
  if(!tomute) return message.channel.send(":x: | Je ne trouve pas cette utilisateur.")
  if (tomute.highestRole.position >= message.member.highestRole.position) return message.channel.send(":x: | Tu ne peux pas le mute.") 


  let mutetime = args[1];

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes;

  if(!mutetime) return message.channel.send(":x: | Vous devez définir un temp avec ``s``, ``m``, ``h``, ``d``.\n```\nExemple: " + prefix + "tempmute <mention> 10s\n```");


  const muteRole = message.guild.roles.find(`name`, "mute") || message.guild.roles.find(`name`, "mute");
  //start of create role
  if(!muteRole){
    try{
  message.channel.send('```\nCréation du rôle "mute"...\n```').then(msg => {msg.delete(3000)});

  muteRole = await message.guild.createRole({
    name: "mute",
    color: "#00000",
    permissions:[]
  })
  message.guild.channels.forEach(async (channel, i) => {
    await channel.permissionOverwrites(muteRole, {
      SEND_MESSAGES: false
    });
  });
}catch(e){
  console.log(e.stack);
}
message.channel.send("Le rôle ``mute`` a été créé avec succès !").then(msg => {msg.delete(3000)});
message.channel.send(":white_check_mark: | Vous pouvez refaire la commande s'il vous plaît\n\nSi le rôle ne mute pas la personne. Veuillez placer le rôle au dessus des membres.");

//end of create role
}

  await(tomute.addRole(muteRole.id));
  message.channel.send(`<@${tomute.id}> est mute pendant **${ms(ms(mutetime), { long:true })}**.`).then(msg => {msg.delete(ms(mutetime))})

  setTimeout(function(){
    tomute.removeRole(muteRole.id);
    message.channel.send(`<@${tomute.id}> est unmute !`)
  }, ms(mutetime));
}
} catch(err) {
  console.error(err)
  return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste.')
};

//end of module
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tm'],
  permLevel: 0
};

exports.help = {
  name: 'tempmute',
  description: 'Mute une personne avec une durée définie',
  usage: 'tempmute <mention> <durée>'
};
