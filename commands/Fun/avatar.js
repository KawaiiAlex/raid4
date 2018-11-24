﻿const Discord = require("discord.js");
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
  
    let member = message.guild.members.get(indexes[members.indexOf(username)]);
    
     let definedUser = "";
     let definedUser2 = "";
    if(!args[0]) {
      definedUser = message.author;
      definedUser2 = message.member;
    } else {
      let mention = message.mentions.users.first();
      definedUser = mention || member.user;
        definedUser2 = message.mentions.members.first() || message.guild.members.get(args[0]) || member;
    }
    
    message.channel.send({embed: new Discord.RichEmbed()
                          .setImage(definedUser.avatarURL)
                          .setTitle(`Avatar de ${definedUser.tag}`)
                          .setColor(Math.floor(Math.random() * 16777214) + 1)
                          .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
                         })
    
  
                        } catch(err) {
                          console.error(err);
                          return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste');
                        };
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pp'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Permet de voir votre avatar ou celui du\'n autre',
  usage: 'avatar',
  usage2: 'avatar <mention>'
};
