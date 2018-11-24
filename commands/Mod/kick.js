exports.run = (client, message, args) => {

  try {
const user = message.mentions.users.first();
 if(!user) return message.channel.send(':x: | Tu dois mentionner un utilisateur à ban.\n```\nUtilisation: ' + prefix + "kick <mention>'\n```");
  const member = message.guild.member(user) || null;
     if (member) {
      if (member.highestRole.position >= message.member.highestRole.position) 
          message.channel.send('Le membre ciblé a une position plus ou égale a la vôtre au niveau des rôle. Veuillez vérifier les  hauteur de vos rôle puis réessayer si le problème persiste merci de contactez le devellopeur.').then(msg => {msg.delete(5000)})
   }else if (user.id === message.author.id) {
       message.channel.send('Tu ne peux pas faire ca sur toi meme');
       return
    }else{
  if(!message.channel.permissionsFor(message.author).has("KICK_MEMBERS")) return message.channel.send(':x: | Tu n\'as pas les droits.\nTu dois avoir les droits: "Expulser des membres"\n```');
  if(!message.channel.permissionsFor(client.user).has("KICK_MEMBERS")) return message.channel.send(':x: | Je n\'ai pas les droits.\nTu dois avoir les droits: "Expulser des membres"\n```');
    var kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!args[0]) return message.channel.send(":x: | Veuillez mentionnez un utilisateur.")
    if(!kUser) return message.channel.send(":x: | Je ne trouve pas cette utilisateur.");
    if (kUser.highestRole.position >= message.member.highestRole.position)   return message.channel.send(":x: | Tu ne peux pas le kick, cette utilisateur est au dessus de toi."); 

    message.channel.send(`:white_check_mark: | ${kUser} a été kick avec succès !`);
    message.guild.member(kUser).kick();
}
  } catch(err) {
    console.error(err)
    return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste.')
  };

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'Kick l\'utilisateur mentionné',
  usage: 'kick <mention>'
};
