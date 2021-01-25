const Discord = require('discord.js');


module.exports = function(msg , args){
    const embedex = new Discord.MessageEmbed()
    .setColor('#9999f')
    .setTitle('commands')
    .setThumbnail('https://imgur.com/vtjO5K3.png')
    .setDescription('Prefix: $')
    .addFields(
         {name: 'clear', value: '$clear <int>' ,inline:false},
         {name: 'gif', value: '$gif <keyword>', inline:false}

    )
    .setTimestamp();


    msg.channel.send(embedex);
}