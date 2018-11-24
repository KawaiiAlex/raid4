const {Attachment} = require('discord.js')

exports.run = async (client, message, args) => {

  try {

        if(!args[0]) return message.channel.send(':x: | Veuillez me donner un nom d\'utilisateur valide.\n```\nUtilisation: ' + prefix + "osu <pseudo>\n```");
          message.channel.startTyping();
  message.channel.send({files: [new Attachment(`https://lemmmy.pw/osusig/sig.php?colour=pink&uname=${args.join('%20')}&pp=2&countryrank&flagstroke&darktriangles&onlineindicator=undefined&xpbar&xpbarhex`, `banner.png`)]});
            message.channel.stopTyping();
       
          } catch(err) {
            console.error(err);
            return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste');
          };
    }
    exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'osu',
  description: 'Donne vos stats osu',
  usage: 'osu <pseudo>'
};
