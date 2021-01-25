const Discord = require('discord.js');


module.exports = function(msg , args){
    const embedex = new Discord.MessageEmbed()
    .setColor('#00FFFF')
    .setAuthor('commands','https://imgur.com/vtjO5K3.png')
    .setThumbnail('https://imgur.com/cb1Npaw.gif')
    .setDescription('Prefix: $')
    .addFields(
         {name: 'clear', value: '$clear <int>' ,inline:false},
         {name: 'gif', value: '$gif <keyword>', inline:false},
         {name: 'wp',value: '$wp <keyword>',inline: false},
         { name: '\u200B', value: '\u200B' }

    )
    .setImage('https://i.imgur.com/GhO5vPn.gif')
    .setTimestamp()
    .setFooter('GG');


    msg.channel.send(embedex);
}