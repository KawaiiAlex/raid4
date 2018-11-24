const chalk = require('chalk');
const Discord = require('discord.js');
const fs = require("fs");
const config = require('../config.json')
const purplecolor = chalk.keyword('purple');

module.exports = client => { // eslint-disable-line no-unused-vars
  console.log(purplecolor(`${client.user.username} en ligne. \n` + 'Connecté dans:\n' + client.guilds.array()));
 //client.user.setGame('//help pour plus d\'info', 'https://www.twitch.tv/ryvalgaming')//stream
  //client.user.setAvatar("https://cdn.discordapp.com/attachments/458353530038911007/472502871326326785/unknown.png");//avatar
  
  client.user.setActivity(`//help`, {type: "WATCHING"});
  

};
