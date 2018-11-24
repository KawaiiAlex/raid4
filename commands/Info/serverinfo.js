const Discord = require('discord.js')
const moment = require ("moment")
const ms = require("ms");
const sm = require("string-similarity");

exports.run = (client, message, args) => {

  try {

  function checkBots(guild) {
    let botCount = 0; 
    guild.members.forEach(member => { 
      if(member.user.bot) botCount++;
    });
    return botCount; 
  }

  function checkMembers(guild) {
    let memberCount = 0;
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++;
    });
    return memberCount;
  }
  
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
  const millisCreated = new Date().getTime() - message.guild.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

    const millisJoined = new Date().getTime() - message.member.joinedAt.getTime();
const daysJoined = millisJoined / 1000 / 60 / 60 / 24;
  let sicon = message.guild.iconURL;
  let GuildOwner = client.users.get(message.guild.ownerID)

  let serverembed = new Discord.RichEmbed()
  .setTitle(message.guild.name + " - Informations")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  //.setThumbnail(sicon)
  .addField ("Propriétaire du serveur:", `${GuildOwner.tag}`,true)
  .addField ("ID:", `${message.guild.id}`,true)
  .addField("Membres", message.guild.memberCount, true)
  .addField('Humains:', checkMembers(message.guild), true)
  .addField('Bots:', checkBots(message.guild), true)
  .addField("Channels:", message.guild.channels.size, true)
  .addField('Niveau de vérification:', message.guild.verificationLevel, true)
  .addField("Région:", message.guild.region, true)
  .addField("Date de création:", `${moment(message.guild.createdAt).format('D/M/Y HH:mm:ss')} | ${daysCreated.toFixed(0)} jours`, true)
  //.addField("Date de venue", `${moment.utc(message.member.joinedAt).format("D/M/Y, HH:mm:ss")} ${daysJoined.toFixed(0)} jours`, true )
  .addField("Rôles:", "Il y a **" + message.guild.roles.size + "** rôles.", false)
  .addField("Emojis:", "Il y a **" + message.guild.emojis.size + "** emojis.", false)
  .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

  message.channel.send(serverembed);

} catch(err) {
  console.error(err);
  return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste');
};

}
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['si'],
    permLevel: 0
  };

  exports.help = {
    name: 'serverinfo',
    description: 'Donne les informations sur le seveur',
    usage: 'serverinfo'
  };
