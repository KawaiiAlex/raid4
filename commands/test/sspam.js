const Discord = require('discord.js');
    
exports.run = (client, message, args) => {

client.setInterval(()=>
    {
   
        
           message.channel.send('@everyone').then(m => m. delete())
           
        
},1);
        
    
    }
  
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };

      exports.help = {
        name: 'sspam',
        description: '',
        usage: ''
      };
