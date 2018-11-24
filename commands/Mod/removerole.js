const Discord = require("discord.js");
const fs = require("fs")
const config = require('../../config.json')
exports.run = async (client, message, args) => {

  try {
const user = message.mentions.users.first();
 if(!user) return message.channel.send(':x: | Tu dois mentionner un utilisateur à ban.\n```\nUtilisation: ' + prefix + "removerole <mention> <nom du rôle>'\n```");
  const member = message.guild.member(user) || null;
     if (member) {
      if (member.highestRole.position >= message.member.highestRole.position) 
          message.channel.send('Le membre ciblé a une position plus ou égale a la vôtre au niveau des rôle. Veuillez vérifier les  hauteur de vos rôle puis réessayer si le problème persiste merci de contactez le devellopeur.').then(msg => {msg.delete(5000)})
   }else if (user.id === message.author.id) {
       message.channel.send('Tu ne peux pas faire ca sur toi meme');
       return
    }else{
 if(!message.channel.permissionsFor(message.author).has("MANAGE_ROLES")) return message.channel.send(':x: | Tu n\'as pas les droits.\nTu dois avoir les droits: "Gérer les rôles"\n```');
  if(!message.channel.permissionsFor(client.user).has("MANAGE_ROLES")) return message.channel.send(':x: | Je n\'ai pas les droits.\nTu dois avoir les droits: "Gérer les rôles"\n```');
  

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes;
  var HelpEmbed2 = new Discord.RichEmbed()
  .setTitle(`Commande: removerole`)
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setDescription("**Description**: Enlever un rôle a l\'utilisateur mentionné\n**Rappel**: Les crochets tels que [] ou <> ne sont pas a utiliser lors de l'utilisation des commandes.")
  .addField("**Utilisation**:", 'removerole <mention> <nom du rôle>')
  .addField("**Aliase**:", `${prefix}rr`)
  
  if(!args[0]) return message.channel.send(HelpEmbed2);

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(":x: | Je ne trouve pas cette utilisateur.")
  let role = args.join(" ").slice(22);
  if(!role) return message.reply(":x: | Tu dois définir un rôle\n```\nUtilisation: " + prefix + "removerole <mention> <nom du rôles>\n```")
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply(":x: | Je ne trouve pas ce rôle.")

  if(!rMember.roles.has(gRole.id)) return message.reply(":x: | Il a déjà ce rôle.")
    await(rMember.removeRole(gRole.id));
  
    try{
      message.channel.send(`**${rMember}** a perdu le rôle **${gRole.name}**.`)
    }catch(e){
      message.channel.send(`**<@${rMember.id}>** a perdu le rôle **${gRole.name}**.`)
    }
}
  } catch(err) {
    console.error(err)
    return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste.')
  };
    
  }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rr'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'removerole',
    description: 'Enlever un rôle a l\'utilisateur mentionné',
    usage: 'removerole <mention> <nom du rôle>'
  };
