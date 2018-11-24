const Discord = require('discord.js');
const Lizard = require("nekos.life")
exports.run = (client, message, args) => {
  const neko = new Lizard();

  try {

    message.channel.startTyping();
        neko.getSFWLizard().then((m) => message.channel.send({embed:{
          color: Math.floor(Math.random() * 16777214) + 1,
          description:`Woo :lizard:`,
          image:{
              url:m.url
          },
          timestamp:new Date(),
      footer:{
        icon_url:client.user.displayAvatarURL,
        text:client.user.username
      }
      }}))
      message.channel.stopTyping();

    } catch(err) {
      console.error(err)
      return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste')
    };
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['lézard'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'lizard',
    description: 'Envoie une image aléatoire de chat',
    usage: 'lizard'
  };