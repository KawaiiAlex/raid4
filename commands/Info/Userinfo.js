const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ms = require('ms');
const sm = require("string-similarity");

exports.run = (client, message, args) => {

   try {
  if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  
  let members = [];
  let indexes = [];
  
  message.guild.members.forEach(function(member){
    members.push(member.user.username);
    indexes.push(member.id);
  })
  
  let match = sm.findBestMatch(args.join(' '), members);
  let username = match.bestMatch.target;
  
    let member = message.guild.members.get(indexes[members.indexOf(username)])
    
     let definedUser = "";
     let definedUser2 = "";
    if(!args[0]) {
      definedUser = message.author
      definedUser2 = message.member
    } else {
      let mention = message.mentions.users.first()
      definedUser = mention || member.user
        definedUser2 = message.mentions.members.first() || message.guild.members.get(args[0]) || member
    }
  const millisCreated = new Date().getTime() - definedUser.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
const daysJoined = millisJoined / 1000 / 60 / 60 / 24;

let definedMember = message.guild.member(definedUser);

if (definedUser.presence.status == 'online') {
  var etat = "En Ligne";
} else if (definedUser.presence.status == "offline") {
  var etat = "Deconnecter";
} else if (definedUser.presence.status == "idle") {
  var etat = "Inactif";
} else if (definedUser.presence.status == "dnd") {
  var etat = "Ne pas deranger";
}

let roles = [];
if (definedMember.roles.size > 0) {
  definedMember.roles.forEach(r => {
    if (!r.name.includes("everyone")) {
      roles.push(r.name);
    }
  })
} else {
  roles = "Aucun rôles";
}


let wato = (roles.length > 0) ? roles.join(", ") : "Aucun rôles";

  let uEmbed = new Discord.RichEmbed()
  .setTitle(definedUser.tag + " - Informations", definedUser.displayAvatarURL)
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setThumbnail(definedUser.displayAvatarURL)
  .addField("ID:", definedUser.id, true)
  .addField("Pseudo serveur:", `${definedMember.nickname ? definedMember.nickname : "Pas de pseudo serveur"}`, true)
  .addField("Bot:", `${definedUser.bot ? "Oui" : "Non"}`, true)
  .addField("Statut",etat, true)
  .addField("Jeux", `${definedUser.presence.game ? `${definedUser.presence.game.name}` : "Ne joue a rien"}`, true)
  .addField("Rôle", `${wato}`)
  //.addField("Permissions:", `${client.users.get(definedUser.id).highestRole.name}`)
  //message.guild.roles.map(r => r.name.toString()).join(", ")
  .addField("Création du compte", `${moment.utc(definedUser.createdAt).format("D/M/Y, HH:mm:ss")} ${daysCreated.toFixed(0)} jours`,false)
  .addField("Date d'arrivée sur le serv", `${moment.utc(member.joinedAt).format("D/M/Y, HH:mm:ss")} ${daysJoined.toFixed(0)} jours`,false)

  message.channel.send(uEmbed);
  } catch(err) {
    console.error(err)
    return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande. Veuillez envoyer un report de la commande si ce message persiste')
  };
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ui'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'userinfo',
    description: 'Donne les informations sur l\'utilisateur',
    usage: 'userinfo <mention>'
};
