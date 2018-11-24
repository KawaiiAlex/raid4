const Discord = require('discord.js');
const translate = require('google-translate-api');
const Langs = ['afrikaans', 'arabic', 'danish', 'english','french', 'finnish', 'german','italian', 'indonesian', 'japanese','korean','latin','portugese','russian','spanish'];
const fs = require("fs");
const config = require('../../config.json')

module.exports.run = async (bot, message, args) => {

    try {



    if (message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: config.prefix
      };
    }
    let prefix = prefixes[message.guild.id].prefixes;

    if (!args[0]) {

        const embed = new Discord.RichEmbed()
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .setDescription(`:x: | **Traduit une phrase ou un mot dans le language choisie**\nUsage: ${prefix}translate <langage> <text>`);

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send(`:x: | **Donné un mot ou une phrase.** \`${prefix}translate <langage> <text>\``);

        } else {
            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            //if (!Langs.includes(transArg)) return message.channel.send(":x: | **Langage indisponible**. Langage disponible `english`,`french`,`german`,`italian`, `japanese`,`korean`,`latin`,`portugese`,`russian`,`spanish`");
            if (!Langs.includes(transArg)) return message.channel.send(":x: | **Langage indisponible**. Langage disponible : ").then(message.channel.send(Langs.join(", "), {code:'ascii'}));
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {
                if (transArg == 'english') {
                    var etat = "anglais";
                } else if (transArg == 'french') {
                    var etat = "français";
                } else if (transArg == 'german') {
                    var etat = "allemand";
                } else if (transArg == 'italian') {
                    var etat = "italien";
                } else if (transArg == 'japanese') {
                    var etat = "japonais";
                } else if (transArg == 'latin') {
                    var etat = "latin";
                } else if (transArg == 'portugese') {
                    var etat = "portugais";
                } else if (transArg == 'russian') {
                    var etat = "russe";
                } else if (transArg == 'spanish') {
                    var etat = "espagnol";
                } else if (transArg == 'afrikaans') {
                    var etat = "afrikaans";
                } else if (transArg == 'arabic') {
                    var etat = "arabe";
                } else if (transArg == 'danish') {
                    var etat = "danois";
                } else if (transArg == 'finnish') {
                    var etat = "finlandais"
                } else if (transArg == 'indonesian') {
                    var etat = "indonésien"
                }

                message.channel.send(":white_check_mark: | Traduction de **" + args + "** en **" + etat + "**\n\n```" + res.text + "```");
            });

        }

    }
} catch(err) {
    console.error(err);
    return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste');
  };
};

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ts'],
    permLevel: 0
  };

  exports.help = {
    name: 'translate',
    description: 'Traduit une phrase ou un mot dans le language choisie',
    usage: 'translate <langage> <text>'
  };