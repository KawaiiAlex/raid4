const Discord = require('discord.js');

const fs = require("fs")
const config = require('../../config.json')
    const Kitsu = require('kitsu.js')
    const kitsu = new Kitsu()
    
    exports.run = (client, message, args) => {

        try {

            let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
            if(!prefixes[message.guild.id]){
              prefixes[message.guild.id] = {
                prefixes: config.prefix
              };
            }
            let prefix = prefixes[message.guild.id].prefixes;

        if(!args[0]) return message.channel.send(':x: | Veuillez me donnez un nom d\'anime à rechercher. \n```\nUtilisation: ' + prefix + "anime <nom de l'anime>\n```");

        let search = args.toString().replace(/,/g, ' ');
        kitsu.searchAnime(search)
            .then(result => {
                if (result.length === 0) {
                    return message.channel.send(`:x: | Je n'ai pas trouvé de resultat pour: **${search}**.`);
                }
                return prepareEmbed(message, result[0]);
            })
            .catch(err => {
                console.error(err)
                
                return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la recherche veuillez envoyer un report de la commande si ce message persiste.');
            });
        } catch(err) {
            console.error(err)
            return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste.');
          };
    }
    
    function prepareEmbed(message, item) {

        try {
        const { slug, synopsis, titles, averageRating, posterImage, episodeCount, showType } = item
        const url = `https://kitsu.io/anime/${slug}`
    
        var AnimeEmbed = new Discord.RichEmbed()
        .setTitle(titles.romaji)
        .setURL(url)
        .setDescription(`**Synopsis:**\n${synopsis.substring(0, 450)}...`)
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .addField("❯ Type", fixCase(showType), true)
        .addField("❯ Episodes", episodeCount, true)
        .addField("❯ Évaluation", averageRating, true)
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setThumbnail(posterImage.small)
        
        message.channel.send(AnimeEmbed);

    } catch(err) {
        console.error(err);
        return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste');
      };

    }


    function fixCase(str) {

        try {

        return str.toLowerCase().replace(/(^| )(\w)/g, s => s.toUpperCase())
    
    } catch(err) {
        console.error(err)
        return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste')
      };
    }
    
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };
      
      exports.help = {
        name: 'anime',
        description: 'Vous donne des infos sur l\'anime de votre choix',
        usage: 'anime <anime a chercher>'
      };
