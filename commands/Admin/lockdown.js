const ms = require('ms');
exports.run = (client, message, args) => {

  try {

  if (!client.lockit) client.lockit = [];
  const time = args.join(' ');
  const validUnlocks = ['release', 'unlock'];
  if (!time) return message.channel.send(':x: | Vous devez définir un temp avec ``s``, ``m``, ``h``, ``d``.');

  if(!message.channel.permissionsFor(message.author).has("MANAGE_CHANNELS")) return message.channel.send(':x: | Tu n\'as pas les droits.\n```js\nTu dois avoir les droits: "Gérer les salons"\n```');
  if(!message.channel.permissionsFor(client.user).has("MANAGE_CHANNELS")) return message.channel.send(':x: | Je n\'ai pas les droits.\n```js\nJe dois avoir les droits: "Gérer les salons"\n```');

  if (validUnlocks.includes(time)) {
    message.channel.fetchMessages({limit: 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send(':white_check_mark: | Channel débloqué !');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.fetchMessages({limit: 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`:white_check_mark: | Channel bloqué pendant **${ms(ms(time), { long:true })}** !`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send(':white_check_mark: | Channel débloqué !')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }

} catch(err) {
  console.error(err);
  return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste.');
};

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ld'],
  permLevel: 0
};

exports.help = {
  name: 'lockdown',
  description: 'verrouille un channel pour la durée définie ``s``, ``m``, ``h``, ``d``',
  usage: 'lockdown <durée>'
};
