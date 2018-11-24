const Discord = require("discord.js")
const fs = require("fs")
const config = require('../../config.json')
exports.run = (client, message, args) => {

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: config.prefix
      };
    }
    let prefix = prefixes[message.guild.id].prefixes;

    
    if(!args[0] || args.length < 1){
        message.channel.send(':x: | Tu dois définir l\'ID de la personne à ban.\n```\nUtilisation: ' + prefix + "ban <ID>\n```")
        return
    }else{

  if(!message.channel.permissionsFor(message.author).has("BAN_MEMBERS")) return message.channel.send(':x: | Tu n\'as pas les droits.\n```js\nTu dois avoir les droits: "Bannir des membres"\n```');
  if(!message.channel.permissionsFor(client.user).has("BAN_MEMBERS")) return message.channel.send(':x: | Je n\'ai pas les droits.\n```js\nJe dois avoir les droits: "Bannir des membres"\n```');

    var toBanId = client.users.find("id", args[0])

    if(!toBanId){
        message.channel.send(":x: | Je ne trouve pas cette utilisateur.")
    }else{
    message.guild.ban(toBanId).then(() => {
    message.channel.send("**"+toBanId.tag+"** a été ban avec succès !")
}).catch(console.error)
        }
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['b'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'hackban',
    description: 'Ban l\'utilisateur mentionné',
    usage: 'hackban <ID>'
  };